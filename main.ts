// Copies the committed entry.png to the output directory after proving it is an
// intact PNG within the bounty limits: at most 1 MiB and 1024 x 1024 pixels.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { crc32 } from 'node:zlib';

const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;
const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(reason: string): never {
  throw new Error(`entry.png rejected: ${reason}`);
}

const png = readFileSync(new URL('./entry.png', import.meta.url));
if (png.length > MAX_BYTES) fail(`${png.length} bytes exceeds ${MAX_BYTES}`);
if (!png.subarray(0, 8).equals(SIGNATURE)) fail('missing PNG signature');

const types: string[] = [];
let at = 8;
while (at < png.length) {
  if (at + 12 > png.length) fail(`truncated chunk header at byte ${at}`);
  const length = png.readUInt32BE(at);
  const end = at + 12 + length;
  if (end > png.length) fail(`chunk at byte ${at} overruns the file`);
  const type = png.toString('latin1', at + 4, at + 8);
  if (!/^[A-Za-z]{4}$/.test(type)) fail(`invalid chunk type at byte ${at}`);
  if (crc32(png.subarray(at + 4, end - 4)) !== png.readUInt32BE(end - 4)) fail(`CRC mismatch in ${type} chunk`);
  types.push(type);
  at = end;
  if (type === 'IEND') break;
}

if (types[0] !== 'IHDR' || png.readUInt32BE(8) !== 13) fail('first chunk must be a 13-byte IHDR');
if (types.at(-1) !== 'IEND' || at !== png.length) fail('file must end exactly with IEND');
if (!types.includes('IDAT')) fail('no image data');
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width < 1 || height < 1 || width > MAX_SIDE || height > MAX_SIDE) fail(`${width}x${height} is outside 1..${MAX_SIDE}`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), png);
console.log(`entry.png ${width}x${height}, ${png.length} bytes, ${types.length} chunks CRC-verified`);
