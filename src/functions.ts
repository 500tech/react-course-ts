// explicit notation
export function add(x: number, y: number): number {
  return x + y;
}

// type inference
export function getStringLength(x: string) {
  return x.length;
}

// as an interface method
export interface Speaker {
  speak: (words: string[]) => string;
}