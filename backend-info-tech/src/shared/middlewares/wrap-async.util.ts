export function wrapAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
): (...args: Parameters<T>) => void {
  return (...args: Parameters<T>) => {
    fn(...args).catch(args[2]);
  };
}
