# Strict maintainability review

Use for a named structural maintainability risk or an explicit strict-review request. This extends Maintainability Review's read-only contract and finding requirements.

Look beyond local cleanup for structural growth that makes future changes harder:

1. A large file that gained another unrelated responsibility.
2. Special cases added across an already busy flow instead of behind the owning domain seam.
3. Type assertions, optional state, or fallbacks that hide an unclear boundary.
4. Feature logic placed in a shared layer that does not own the concept.
5. A new abstraction that only moves the same decisions into more files.
6. Related state changes that can leave partial results when the domain needs one atomic operation.
7. Independent work serialized without an ordering dependency, when a simpler arrangement removes coordination rather than merely chasing speed.

Look for a simpler model that removes whole branches, helpers, modes, or layers, not only local edits. Rank structural consequences ahead of small cleanup. Do not require extraction or parallelism when they introduce more concepts than they remove.

File length alone is evidence to inspect, not a finding. A finding needs a concrete responsibility split or simpler model. Do not presume that a dramatic rewrite exists. Return the few highest consequence findings and allow a clean verdict.
