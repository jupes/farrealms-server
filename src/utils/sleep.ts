export const sleep = (ms: number, fn: Function) => {
    new Promise(() => setTimeout(fn, ms));
  };