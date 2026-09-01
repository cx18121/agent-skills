# Strict maintainability review

Use this only when Charlie asks for a severe maintainability review.

Look beyond local cleanup for structural growth that makes future changes harder:

1. A large file that gained another unrelated responsibility.
2. Special cases added across an already busy flow instead of behind the owning domain seam.
3. Type assertions, optional state, or fallbacks that hide an unclear boundary.
4. Feature logic placed in a shared layer that does not own the concept.
5. A new abstraction that only moves the same decisions into more files.
6. Related state changes that can leave partial results when the domain needs one atomic operation.

File length alone is evidence to inspect, not a finding. A finding needs a concrete responsibility split or simpler model. Do not presume that a dramatic rewrite exists. Return the few highest consequence findings and allow a clean verdict.
