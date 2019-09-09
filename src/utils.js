let id = 0;

export const getUniqueId = () => id++;
export const NOOP = () => null;
export function getRandomRGB() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
