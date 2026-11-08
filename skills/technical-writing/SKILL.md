---
name: technical-writing
description: Write technical blog posts, project write-ups, and essays from source material. Use for drafting from the ground up or improving an existing piece, including its argument, structure, summaries, and prose.
---

# Technical writing

Help another engineer follow the reasoning, judge the evidence, and understand when an approach is useful. Use this skill to develop a new piece or improve an existing one. It covers technical narratives, not routine interface labels or API reference documentation.

## Establish the brief and material

Identify the audience, the question the piece should answer, its intended use, and the desired perspective. Read the relevant project records, code, results, or author notes. For repository-backed work, confirm the intended branch or version before using it as evidence or a writing reference.

Read user-provided reference posts before attempting to match them. If a reference is unavailable, ask for its text or state the limitation. Reference posts illustrate writing and reasoning; they are not evidence about this project's work.

Read [prose patterns](references/prose-patterns.md) before drafting or revising. They guide sentence and passage choices during writing and provide the final prose pass. They are diagnostics, not word or punctuation bans.

## Start from the available material

### Draft a new piece

Find the central technical question and the answer the material supports. Select the decisions, mechanisms, examples, and results needed to explain that answer. A repository inventory is source material, not an article outline.

Build an outline in which each section develops the argument, using the structure guidance below. Draft connected prose that explains how one decision or observation leads to the next. Write the title and summary once the body establishes what the piece actually says.

If a missing fact would change the explanation, ask the author for it. Otherwise develop the narrower account the material supports. Do not fill an outline with invented project history to make it feel complete.

### Improve an existing piece

Read the complete draft before editing. Identify its argument, the passages that already work, and any text the author wants preserved. Compare its claims with the relevant source material.

Fix gaps in reasoning, structure, or explanation before polishing individual sentences. Preserve deliberate voice and useful technical detail. Revise locally when the argument works; reorganize when the reader cannot follow it. A prose edit does not require turning the whole piece into a new article.

## Build the argument

When choosing or changing the structure, read the [examples of technical reasoning](references/examples.md). Choose the structure that fits the material instead of imposing the same outline on every post.

- **Engineering accounts** can connect the problem and constraints to an initial approach, concrete failures, a revised design, and its results and limitations. Explain alternatives that were actually considered.
- **Conceptual essays** can develop an argument through mechanisms, examples, counterarguments, and open questions. They do not need invented implementation stories or benchmark sections.

For each important decision, explain what made it necessary and what consequence followed. Include enough implementation detail to understand the mechanism. A stack list or architecture inventory cannot replace that explanation.

Use a concrete failure case where the source provides one. Preserve results that complicate the story, including negative results. State the scope of a conclusion so that a finding under one workload does not become a general guarantee.

## Keep claims grounded

Use the supplied draft, project records, code, results, and author answers as the factual basis. Preserve technical terms, measurements, comparisons, attribution, quotations, and uncertainty. Keep link targets and supporting artifacts intact when editing embedded content.

Never invent experiments, incidents, team reactions, motivations, rejected alternatives, implementation details, or causal results to make a better story.

Keep claim status explicit:
- An observation is different from an explanation of why it happened.
- A proposed design is different from an implemented feature.
- A target is different from a measured result.
- An illustration is different from an incident that occurred on the project.

Logical explanations and hypothetical examples can help, but label them accordingly. A general observation such as "matching totals do not prove every extracted field is correct" must not become a claim that the team observed a particular false positive.

## Match the text to its role

**Titles** should identify the subject or technical question. Keep a deliberate title that already works.

**Summaries** should give enough of the project and core approach to orient the reader. Keep supporting measurements, training times, cost details, and caveats in the article unless they are the central result. A compact preview does not need to repeat every fact in the post.

**The body** should explain the decisions and evidence. Use diagrams, code, examples, and measurements where they advance the explanation, with enough context to interpret them.

**Takeaways** should explain what the work established or changed. Connect a specific constraint or failure to a decision, its outcome, and its limits. Avoid merely recapping features or appending generic advice. Use paragraphs or bullets as the reasoning requires. Not every post needs a "What we learned" section.

## Preserve technical voice

Keep precise vocabulary such as calibration, expectimax, provenance, or materiality when it names the actual work. Explain unfamiliar terms for the intended reader instead of replacing them with vague language. Shorter and less technical are not synonyms for clearer.

Retain the author's perspective without inventing feelings or memories. Sentence length should follow the thought. Questions, contrasts, metaphors, and conversational asides can work when they advance the argument. Preserve intentional choices instead of flattening every piece into the same neutral or conversational voice.

Respect approved passages and the existing voice. Treat metadata, navigation, dividers, and other layout choices separately from prose quality. Change those only when they are in scope, preserving their useful context and function.

## Finish the piece

Read the complete piece and apply the prose pass in the pattern reference. Then compare the changed claims with the source. Check that the reasoning follows, technical detail and uncertainty survive, and each remaining section adds something.

For routine writing and copy edits, do this source comparison and final read yourself. Independent or adversarial review is not a default step. Follow any separate review requirements for consequential work.

Deliver the finished text or the requested file edits. Briefly flag any unresolved factual gap. When reporting repository work, name the changed files and distinguish editorial judgment from checks of markup, structured data, or a build. Do not present a successful build as evidence that the prose reads well.
