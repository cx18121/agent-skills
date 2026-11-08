# Specific, natural technical prose

Use this reference when writing a new piece and when improving an existing one. These patterns identify passages worth inspecting, not proof of machine authorship. A deliberate contrast, short sentence, metaphor, or formal term can be the right choice. Judge what it does for this reader and argument.

The examples below illustrate editing. They are not project evidence.

## Lead with the technical point

Write the claim or explanation directly. Openers such as "let's dive in," "here's the thing," and "the real question is" often postpone it. Announcements of candor or importance do not supply evidence.

A "not X, but Y" contrast earns its place when both sides distinguish real alternatives or correct a likely misunderstanding. Remove an invented objection whose only purpose is to make the positive claim sound larger.

Before:

> This isn't just a faster parser. It's a fundamental shift in how the system understands documents.

After, when supported by the source:

> The parser reads table cells directly, reducing the text sent to the model.

Keep a useful contrast such as "faster parsing reduced latency, but extraction accuracy stayed unchanged." It communicates two results.

## Develop reasoning instead of recapping features

A list of components does not explain a design. Connect a constraint or failure to the choice it required and the consequence that followed. The same applies to conclusions: repeating the section's features under "What we learned" adds no reasoning.

Cut a one-line closer that restates the preceding paragraph. Slogans such as "That's the real win" ask for emphasis without adding information. End on the last useful fact or inference instead of appending a generic claim about the future.

## Let meaning determine rhythm

Combine short sentences that belong to one thought. Split a sentence when its clauses carry different claims or bury the main point. Vary sentence length according to the explanation, not a target word count.

Watch for repeated openings, rows of fragments, and lists forced into three items for symmetry. Keep a list when its members are distinct and the list helps the reader use or compare them. Do not pad one to sound complete.

Use punctuation to express the relationship between clauses. Repeated dashes, parenthetical asides, and semicolons can hide a relationship that would be clearer as a separate sentence or an explicit cause.

Before:

> The context was smaller. The model had less to read. The responses were faster. That was the breakthrough.

After, if the timing comparison supports it:

> Restricting the context reduced response time because the model had less text to process.

If the source establishes only a timing difference, report that difference without inventing its cause.

## Name the mechanism

Prefer a named operation, component, or relationship to an abstract claim about improvement. Explain what "robust," "seamless," "data-driven," or "intelligent" means in this implementation, or remove the adjective.

Technical terms are useful when they identify the mechanism. Replacing "expectimax" with "smart search" loses information. Explain the unfamiliar term rather than substituting vague language.

An added phrase such as "highlighting the importance of reliability" often repeats the implication instead of explaining it. State the consequence directly. Likewise, "associated with" or "linked to" may hide whether one component calls another, stores its output, or merely appears in the same experiment.

Use ordinary verbs when they say the same thing. "Is," "has," "reads," and "stores" are usually clearer than "serves as," "boasts," or "leverages." Name the actor when passive wording makes responsibility or behavior ambiguous.

## Make significance specific

Measured comparisons and concrete constraints give a result its significance. Claims that work is groundbreaking, pivotal, or transformative need more than an adjective. Attribute an external judgment to a specific source and explain what it said; unnamed experts and lists of prestigious organizations cannot stand in for the argument.

Remove sales language and generic praise. Preserve a measured improvement with its workload and comparison. A technical post can report a useful local result without declaring an industry-wide change.

## Choose qualifications for the reader

Include an assumption or limitation when it changes how the reader should interpret a finding or use an approach. Put it beside the claim it qualifies. For example, independence between reports determines whether their evidence can be multiplied, and a probability readout can change the direction of a measured error.

Let linked methods and repository documentation carry housekeeping that does not advance the article's argument. Parser handling, validation procedures, historical artifact inventories, and reproducibility details belong in the narrative when they explain the result or are themselves the subject. They do not need a paragraph merely to show that the work was checked.

Avoid defensive closing disclaimers and stacks of qualifiers added to repair an overbroad claim. Narrow the claim itself. Keep real uncertainty, contradictory results, and a qualification that materially changes the comparison.

For example, a paragraph describing invalid-response handling may be unnecessary when the figure identifies the analysis population and the treatment does not change the finding being discussed. If excluding those responses changes the comparison, explain that effect rather than hiding it in a methods link.

## Keep the chosen voice and format

Match the terminology and perspective established for the piece. Plain language does not require a chatty narrator, staged objections, or personal reactions. Formal technical writing does not require inflated vocabulary either.

Use headings to identify the subject of a section, not to announce that it is important. An opening sentence should develop the heading rather than repeat it. Reserve emphasis for something the reader needs to distinguish; bold labels, decorative arrows, and identical section templates are not substitutes for structure.

Remove chat wrappers, offers of further help, drafting notes, knowledge-cutoff disclaimers, and comments about what the assistant could not find. Resolve a factual gap with the author or write the supported account, following the skill's source rules.

## Prose pass

1. Read the complete piece for its argument. Mark repeated explanations, generic framing, empty emphasis, and passages that discuss the writing or verification process instead of the subject.
2. Rewrite each weak passage around the concrete point it needs to convey. Delete a redundant explanation rather than replacing its words with synonyms.
3. Read the result for continuity and rhythm. Keep intentional choices that work. Do not mechanically remove every watched word, contrast, or short sentence.

Finish with the source comparison in the main skill so the edit preserves the evidence and uncertainty.
