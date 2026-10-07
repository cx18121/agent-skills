import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const maintainability = read('skills/maintainability-review/SKILL.md');
const strict = read('skills/maintainability-review/references/strict-maintainability.md');
const entry = read('skills/better-interface/SKILL.md');
const change = read('skills/better-interface/change-review.md');
const scope = read('skills/better-interface/scope-resolution.md');
const removed = read('skills/better-interface/removed-signals.md');
const format = read('skills/better-interface/review-format.md');

test('has one discoverable owner for each review and no retired entry', () => {
  assert.match(maintainability, /^name: maintainability-review$/m);
  assert.match(entry, /^name: better-interface$/m);
  assert.doesNotMatch(entry, /disable-model-invocation: true/);
  assert.doesNotMatch(change, /^name: /m);
  for (const name of ['simplify', 'interface-review', 'thermo-nuclear-code-quality-review']) {
    assert.equal(existsSync(resolve(root, 'skills', name)), false);
  }
});

test('strict depth is earned by structural evidence and allows a clean verdict', () => {
  assert.match(maintainability, /named structural risk/);
  assert.match(maintainability, /explicit strict-review request/);
  assert.match(maintainability, /Artifact size or consequence alone/);
  assert.match(strict, /removes whole branches, helpers, modes, or layers/);
  assert.match(strict, /File length alone is evidence to inspect, not a finding/);
  assert.match(strict, /allow a clean verdict/);
  assert.match(maintainability, /trace its callers, entry points, and runtime selection/);
  assert.match(maintainability, /Do not report correctness, security, or performance defects/);
});

test('interface depth preserves comprehensive coverage and supports scoped requests', () => {
  for (const name of ['accessibility', 'layout', 'writing', 'typography', 'colors', 'ui']) {
    assert(entry.includes('`better-' + name + '`'));
    assert(existsSync(resolve(root, 'skills', 'better-' + name, 'SKILL.md')));
  }
  assert.match(entry, /explicitly comprehensive review, select every owner/);
  assert.match(entry, /clearly scoped domain request/);
  assert.match(entry, /Not reviewed: outside requested coverage/);
  assert.match(entry, /If an owning skill is unavailable/);
  assert.match(entry, /no second skill invocation|without asking the user to invoke another skill/i);
});

test('change mode retains scope, regression and checkout safeguards', () => {
  assert.match(change, /HEAD.*ahead of.*merge-base/);
  assert.match(change, /range \*\*plus\*\* any uncommitted changes/);
  assert.match(change, /Never fall back to `HEAD~1\.\.HEAD`/);
  assert.match(scope, /git ls-files --others --exclude-standard/);
  assert.match(scope, /Use the dots the user wrote|use the dots the user wrote/);
  assert.match(scope, /Stop and say the tree is mid-operation/);
  assert.match(change, /Read the removed lines/);
  assert.match(removed, /Equivalent replacements/);
  assert.match(change, /Introduced/);
  assert.match(change, /Regression/);
  assert.match(change, /Pre-existing/);
  assert.match(change, /Fetch pull request refs; never check them out/);
  assert.match(change, /Pre-existing.*outside the verdict/s);
});

test('modes share one verdict owner and reference the right output format', () => {
  assert.match(format, /change-review\.md#review-output-format/);
  assert.match(change, /Continue the entry skill's review/);
  assert.match(change, /There is no second skill invocation or separate verdict owner/);
  assert.match(change, /Approve.*covers only inspected surfaces/);
  assert.match(format, /Clear.*means inspected/);
});

test('all local links in the changed review documents resolve', () => {
  const files = [
    'skills/maintainability-review/SKILL.md',
    'skills/maintainability-review/references/strict-maintainability.md',
    'skills/better-interface/SKILL.md',
    'skills/better-interface/change-review.md',
    'skills/better-interface/scope-resolution.md',
    'skills/better-interface/removed-signals.md',
    'skills/better-interface/review-format.md',
  ];
  for (const file of files) {
    for (const match of read(file).matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      assert(existsSync(resolve(root, dirname(file), target)), `${file}: missing ${target}`);
    }
  }
});
