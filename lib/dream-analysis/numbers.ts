import { randomInt } from "node:crypto";

// Sample without replacement; each position can contain any value from 1 to 99.
export function selectDreamNumbers(draw: (max: number) => number = randomInt): number[] {
  const pool = Array.from({ length: 99 }, (_, index) => index + 1);
  const selected: number[] = [];
  for (let i = 0; i < 3; i++) {
    const index = draw(pool.length);
    if (!Number.isInteger(index) || index < 0 || index >= pool.length) {
      throw new Error("Geçersiz sayı seçimi.");
    }
    selected.push(pool.splice(index, 1)[0]);
  }
  return selected;
}
