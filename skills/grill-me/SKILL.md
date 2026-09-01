---
name: grill-me
description: Stress-test a plan, decision, or idea through a structured interview. Use when Charlie asks to be grilled or wants relentless questioning before acting.
---

# Grill Me

Map the idea as a decision tree. Facts are the agent's job. Decisions about priorities, taste, policy, risk, and irreversible tradeoffs belong to Charlie.

The frontier contains decisions whose factual prerequisites are settled. Work one frontier at a time:

1. Investigate every observable prerequisite yourself.
2. Ask only questions that can be answered now without guessing at an earlier decision.
3. Group up to four current frontier questions in one `ask_user_question` call.
4. Put the recommended answer first and explain the concrete tradeoff.
5. Rebuild the frontier from Charlie's answers.

Do not ask Charlie to find files, inspect runtime state, compare documented behavior, or answer another factual question that tools can settle. Use bounded independent research only when separate evidence paths earn the cost.

Do not force every branch to exist. Delete questions whose answers no longer affect the outcome. Stop when the remaining assumptions are explicit and no unresolved decision can materially change the plan.

Summarize the settled decisions and open evidence limits. Continue into implementation only when the request already includes it. Do not add another approval gate after Charlie's answers have settled the requested choices.
