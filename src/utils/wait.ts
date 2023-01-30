export default function wait(ms: number) {
  // Wait ms milliseconds
  return new Promise(resolve => setTimeout(() => resolve(""), ms))
}

