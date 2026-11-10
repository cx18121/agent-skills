---
name: independent-review
description: Independent adversarial review and delegated investigation through subagents. Use before delivering a change whose failure would be hidden or hard to undo, when Charlie asks for a review, or when a separable question deserves a fresh investigator.
---

# Independent review

A reviewer is useful when it can change the decision. Ship reversible work on your own checks.

## What to delegate

Delegate work that is read only and ends in a report: research, investigation, review, and verification spread across many targets. These run in parallel without interfering.

Implement in the main session, which holds the user's intent and sees the whole change. Delegate implementation only for a task that touches nothing else in flight, has its own working tree and its own environment (ports, database, test runner), and has a pass or fail acceptance check.

## Brief the reviewer

Give the child everything it cannot recover from the sources:

- The question, the intended result, and the acceptance check.
- The exact working directory and source locations. Point to primary sources rather than your account of the work.
- Settled decisions, evidence already gathered, and failures it would otherwise repeat.
- Project rules or the paths that hold them, because children do not inherit them.
- Its authority. Review and investigation children are read only.

Ask it to challenge the premise as well as the implementation, including whether a simpler direction would serve better or whether the change could make the result worse.

For a change review, use the `reviewer` agent template and give it the goal, the acceptance check, and where the change is. Run one review and, after fixes, one re-review. If the re-review still asks for changes, decide yourself and report what remains.

## Choose the model

Use the model policy in the prompt. Pick a reviewer from a different model family than the session that wrote the change, and pass it at spawn time rather than fixing one in a template. A fresh same-family reviewer is the fallback, with that limitation disclosed. When a child fails on low-risk work, report it and continue. When it fails before a consequential action, use the next permitted model.

## Use the result

A finding names a concrete broken outcome, a mismatch with the intended experience, or an assumption that could change the decision, with its source and consequence. Verify findings yourself, read the load-bearing source before acting, and resolve the ones that matter. A review request authorizes proposals. Fixes need authorized work.

Continue independent work while the child runs. Resolve the review before the action it informs, and report what survived, including a clean verdict.
