export default function extractCoordsFromMapLink(link: string): string[] | null {
  const coords = link.match(/@(\d+\.\d+),(\d+\.\d+),/);
  return coords ? [coords[1], coords[2]] : null;
}
