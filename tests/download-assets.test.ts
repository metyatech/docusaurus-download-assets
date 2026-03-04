import assert from 'node:assert/strict';
import test from 'node:test';

import plugin from '../src/index.js';

test('configureWebpack returns a rule for assets', () => {
  const result = plugin().configureWebpack();
  const rules = result.module.rules;

  assert.strictEqual(rules.length, 1);

  const rule = rules[0];
  assert.strictEqual(rule.type, 'asset/resource');

  // Exclusion tests
  assert.ok(rule.exclude.test('sample.mdx'), 'Excludes mdx');
  assert.ok(rule.exclude.test('sample.js'), 'Excludes js');
  assert.ok(rule.exclude.test('sample.ts'), 'Excludes ts');
  assert.ok(rule.exclude.test('sample.json'), 'Excludes json');
  assert.ok(!rule.exclude.test('sample.zip'), 'Includes zip');
  assert.ok(!rule.exclude.test('sample.pdf'), 'Includes pdf');

  // Inclusion (path) tests
  const testPath = (p: string) => rule.include.some((pattern: RegExp) => pattern.test(p));

  assert.ok(testPath('docs/chapter/assets/sample.zip'), 'Posix path');
  assert.ok(testPath('docs\\chapter\\assets\\sample.zip'), 'Windows path');
  assert.ok(testPath('/assets/sample.zip'), 'Root path');
  assert.ok(testPath('assets/sample.zip'), 'Bare path');
  assert.ok(!testPath('docs/chapter/resource/sample.zip'), 'Not in assets dir');
});
