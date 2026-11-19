// Copies the committed entry.png to the output directory after proving it is an
// intact PNG within the bounty limits: at most 1 MiB and 1024 x 1024 pixels.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { crc32 } from 'node:zlib';

const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;
const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const IHDR = 0x49484452;
const IDAT = 0x49444154;
const IEND = 0x49454e44;

function fail(reason: string): never {
  throw new Error(`entry.png rejected: ${reason}`);
}

const png = readFileSync(new URL('./entry.png', import.meta.url));
if (png.length > MAX_BYTES) fail(`${png.length} bytes exceeds ${MAX_BYTES}`);
if (!png.subarray(0, 8).equals(SIGNATURE)) fail('missing PNG signature');

let at = 8;
let chunks = 0;
let sawIdat = false;
let sawIend = false;
while (!sawIend) {
  if (at + 12 > png.length) fail(`no complete chunk at byte ${at}; IEND missing`);
  const length = png.readUInt32BE(at);
  const end = at + 12 + length;
  if (end > png.length) fail(`chunk at byte ${at} overruns the file`);
  for (let i = at + 4; i < at + 8; i++) {
    const folded = png[i] | 0x20; // maps A-Z onto a-z; every other byte stays outside a-z
    if (folded < 0x61 || folded > 0x7a) fail(`invalid chunk type at byte ${at}`);
  }
  if (crc32(png.subarray(at + 4, end - 4)) !== png.readUInt32BE(end - 4)) {
    fail(`CRC mismatch in ${png.toString('latin1', at + 4, at + 8)} chunk at byte ${at}`);
  }
  const type = png.readUInt32BE(at + 4);
  if (chunks === 0 ? type !== IHDR || length !== 13 : type === IHDR) fail('IHDR must be the single, first, 13-byte chunk');
  if (type === IDAT) sawIdat = true;
  if (type === IEND) {
    if (length !== 0) fail(`IEND must be empty, found ${length} data bytes`);
    sawIend = true;
  }
  chunks++;
  at = end;
}

if (at !== png.length) fail(`${png.length - at} bytes follow IEND`);
if (!sawIdat) fail('no image data');
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width < 1 || height < 1 || width > MAX_SIDE || height > MAX_SIDE) fail(`${width}x${height} is outside 1..${MAX_SIDE}`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), png);
console.log(`entry.png ${width}x${height}, ${png.length} bytes, ${chunks} chunks CRC-verified`);
