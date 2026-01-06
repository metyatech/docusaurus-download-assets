declare module 'node:test' {
  type TestCallback = () => void | Promise<void>;
  const test: (name: string, fn: TestCallback) => void;
  export default test;
}

declare module 'node:assert/strict' {
  const assert: {
    ok: (value: unknown, message?: string) => void;
    strictEqual: (actual: unknown, expected: unknown, message?: string) => void;
  };
  export default assert;
}
