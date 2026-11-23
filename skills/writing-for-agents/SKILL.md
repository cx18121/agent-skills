---
name: writing-for-agents
description: Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md.
---

Reference for any document an agent consumes, whether a skill, `AGENTS.md`, `CLAUDE.md`, or a linked reference. The goal is process predictability so the agent takes the same reliable path on every run.

When editing a skill, also read [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md) for frontmatter, invocation choice, and router skills.

## Context pointers

A context pointer is an always-loaded reference that names out-of-context material and states when to open it. A skill description or a line in `AGENTS.md` pointing to a doc is a context pointer. Its wording decides how reliably the agent loads the target. If a required target fails to fire, sharpen the pointer first and inline the material only if sharpening fails.

Because pointers pay on every turn, prune them hard:

- Lead with the triggering words.
- Keep one trigger per distinct branch. Collapse synonyms that rename the same branch.
- Cut background the body already carries.

## Context load vs cognitive load

Every rule or document spends one of two budgets:

- **Context load.** Tokens and attention spent on every turn by always-loaded text (`AGENTS.md`, auto-visible skill descriptions, standing memory).
- **Cognitive load.** What the human must remember exists and invoke by hand. Spend it where human judgment matters, and remove it where it does not.

Material behind a pointer trades body context load for one pointer line. Manual-only skills (`disable-model-invocation: true`) carry zero context load and ride on human invocation.

## Information hierarchy

Documents mix **steps** (ordered actions) and **reference** (rules and facts consulted on demand). Place each piece on the lowest rung where the agent still reliably reaches it:

1. **In-file step.** What the agent does in order.
2. **In-file reference.** Consulted on demand. A flat peer set (such as review rules) is healthy here.
3. **Disclosed reference.** A separate file behind a pointer, loaded only when its branch fires.

Inline what every branch needs, and push branch-specific detail behind a pointer. Keep a concept's definition, rules, and caveats co-located under one heading instead of scattered across sections. When a document grows too long even without duplication (**sprawl**), attention thins across the whole file. Disclose reference behind pointers or split by branch.

## Steps and completion criteria

End each step with a concrete **completion criterion** so the agent can tell done from not-done. Vague bounds ("understanding reached") cause premature completion because later visible steps pull attention forward. Sharpen the bound first. If the bound stays fuzzy and the agent still rushes, split the sequence across a real context boundary (a handoff or subagent dispatch).

Use strong demand where exhaustiveness matters. "Every modified model accounted for" drives real legwork where "list changes" does not.

## Leading words and positive phrasing

A **leading word** is a compact concept already in pretraining (such as _tracer bullet_, _red_, _tight_) that anchors a whole region of behavior in one token. Prefer an existing concept over coining a term you must define. Reuse the same word across prompts, docs, and pointers so the agent links them reliably.

State the target behavior positively. Prohibitions pull the unwanted behavior into context and weaken compliance. Reserve hard prohibitions for strict guardrails you cannot phrase positively, and pair each one with what to do instead.

## Pruning

- **Single source of truth.** Keep each rule in one authoritative place so updates happen once and no rule is silently inflated by repetition.
- **Let the environment own lookups.** Do not copy `package.json` scripts, directory trees, or `--help` flags into prompts. Record only what looking cannot reveal (unwritten conventions, reasons behind decisions, gotchas).
- **Delete no-ops and sediment.** Test each sentence against what frontier models already do by default. If removing a sentence does not change behavior, delete the whole sentence rather than trimming words. Revisit old rules regularly so yesterday's workarounds do not pile up as sediment.
