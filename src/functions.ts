// explicit notation
export function add(x: number, y: number): number {
  return x + y;
}

// type inference
export function getStringLength(x: string): number {
  if (Math.random() > 0.5) {
    return 0;
  }
  return x.length;
}

// as an interface method
export interface Speaker {
  speak: (words: string[]) => string;
}

const s: Speaker = {
  speak(words) {
    return words.join('');
  }
}
