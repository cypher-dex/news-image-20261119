import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const image = readFileSync(new URL('./entry.png', import.meta.url));
if (image.length > 1_048_576 || image.length < 45) {
  throw new Error('Entry must be a complete image of at most 1 MiB');
}
if (image.readUInt32BE(0) !== 0x89504e47 || image.readUInt32BE(4) !== 0x0d0a1a0a) {
  throw new Error('Entry is not a PNG');
}
if (image.readUInt32BE(16) > 1024 || image.readUInt32BE(20) > 1024) {
  throw new Error('Entry exceeds 1024 by 1024 pixels');
}
if (image.toString('ascii', image.length - 8, image.length - 4) !== 'IEND') {
  throw new Error('Entry is missing the final PNG chunk');
}
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), image);
