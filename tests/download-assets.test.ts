import assert from 'node:assert/strict';
import test from 'node:test';

import plugin from '../src/index';

test('configureWebpack returns a rule for assets', () => {
  const result = plugin().configureWebpack();
  const rules = result.module.rules;

  assert.strictEqual(rules.length, 1);

  const rule = rules[0];
  assert.strictEqual(rule.type, 'asset/resource');
  assert.ok(rule.exclude.test('sample.mdx'));

  const matchesPosix = rule.include.some((pattern: RegExp) =>
    pattern.test('docs/chapter/assets/sample.zip'),
  );
  const matchesWindows = rule.include.some((pattern: RegExp) =>
    pattern.test('docs\\chapter\\assets\\sample.zip'),
  );

  assert.ok(matchesPosix);
  assert.ok(matchesWindows);
});
