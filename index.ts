function addNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function newfunction() {
  return "new function";
}