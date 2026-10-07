---
name: grill-me
description: Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.
---

Interview the user relentlessly until you reach a shared understanding. Challenge premises, contradictions, and consequential assumptions. Map this as a **design tree**: every decision branches into the decisions that hang off it. Focus on questions whose answers could materially change the outcome.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled: the questions you can ask _now_ without guessing at answers you haven't heard yet. Ask the whole frontier in one round: number each question and give your recommended answer. Then wait for the user's answers before the next round.

Present each round with `ask_user_question`, batching up to four frontier questions per call. Put the recommended answer first and explain each option's tradeoff. If the frontier exceeds four questions, finish its remaining batches before moving to the next round.

Each round the user answers reshapes the tree: settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier and ask the next round. A question whose answer depends on another question still open in this round belongs to a _later_ round, not this one.

Finding _facts_ is your job, never the user's. Investigate directly for bounded lookups. Delegate substantial, separable research when parallel progress or independent evidence earns the overhead. Pending research blocks only the questions that depend on it; ask the rest of the frontier while it continues. Make routine engineering choices yourself. Put decisions about personal preference, product policy, architecture, maintenance, rollout, or risk tolerance to the user with a recommendation.

Remove branches whose answers no longer affect the outcome. Stop when the goal, constraints, and material choices are settled and no unresolved question would materially change the plan. Summarize the settled decisions, explicit assumptions, and evidence limits. The interview does not authorize implementation. Continue only when the request already includes it, without adding another confirmation gate after the user's answers have settled the material choices.
