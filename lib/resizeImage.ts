import sharp from "sharp";

export default async function resizeImage(
  buffer: Buffer,
  width: number,
  height: number
): Promise<unknown> {
  return sharp(buffer).resize(width, height).jpeg();
}
