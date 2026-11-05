---
name: pr-description
description: Write or edit a pull request title and description. Use before `gh pr create` or `gh pr edit`, when asked to write, fix or shorten a PR description, or when adding screenshots or diagrams to a PR.
---

# PR descriptions

A description exists so a reviewer can judge the change, and so someone who finds it through `git blame` a year later understands why the code is the way it is. Both read it without the diff open and cannot ask you. Everything below follows from that reader.

## Principles

**Lead with the need.** The first lines are the only ones every reader sees, so spend them on why the change exists: who hits what problem, or what is blocked, and what this PR does about it. Phrase the need so it would hold under a different fix, because that is what lets the reviewer judge whether this fix meets it.

**Describe behaviour, not code.** The diff already shows the code. The description says what is now different for the people and systems the change touches, including what they would not expect. Name code only where it tells the reviewer where to look.

**Claim only what you checked.** A reviewer trusts every line. Reasons come from the request, ticket or thread. Behaviour comes from reading the diff. Checks and screenshots come from things you actually ran or captured. When something is unknown or unchecked, say so in a few words, which is more useful than a guess.

**Size it to what the reviewer must judge.** Write the shortest description that lets the reviewer judge the change. Most PRs need a few sentences, and about 150 words is plenty for almost all of the rest, however large the diff. Leave out internal details the reviewer does not need, including the story of how the work was done. They hide the lines that matter. Shorten by leaving out whole facts the reviewer can do without, and write every fact you keep as a full sentence. Squeezing facts into fragments, bare lists or long clause chains keeps the length and loses the clarity. When the PR is too big to describe briefly, tell the user it may be worth splitting.

**Show when it is faster than telling.** A screenshot carries a visible change better than any sentence, and a small Mermaid diagram carries a flow between systems that words make hard to follow. Use them for that, not as decoration.

## Shape

The opening has no heading. Add more only when it helps the reviewer:

- A bullet per change when there are several, each starting with what it touches.
- **Review notes** only for what a careful reviewer would otherwise miss or must decide: a risk the diff hides, an alternative they would propose that was ruled out, or a question for them.
- **Verification** for checks beyond the automated tests, and what was not checked.

Write plain, complete sentences with common words, following the `plain-writing` skill. Write the title with the `commit-style` skill. When editing an existing body, keep the images, links and ticked boxes a person put there, because `gh pr edit` replaces the whole body.

## Attaching images

`gh` 2.99 and later uploads images, which older models may not know. Reference the file in the body, `![Duplicate button on the widget list](./after.png)`, then pass `--attach ./after.png` to `gh pr create` or `gh pr edit`. `gh` uploads it and rewrites the reference. With an older `gh`, ask the user how to attach images.

## Examples

Three sizes. Match the PR in front of you, not the shape of an example.

<example kind="small fix">
Agents could not load the surface-portal-debug skill. Its description contains "(surface): layout", which YAML reads as a nested mapping. Quoting the description fixes the parse.
</example>

<example kind="chore">
Agents cannot attach screenshots to PR descriptions, because the pinned gh 2.97 has no upload option. This raises the pin to 2.103.3, which adds `--attach` to `gh pr create` and `gh pr edit`.
</example>

<example kind="feature">
Merchants who want the same widget in a second place, such as a product page and a cart drawer, rebuild it by hand. This lets merchants and the agent copy widgets.

- **Widget list:** a Duplicate button makes "Copy of …" with the same design. The copy is not placed anywhere until the merchant places it.
  ![Duplicate button on a widget card in the widget list](./after.png)
- **Chat:** the agent can list, read, create and copy widgets, and keeps editing the copy after making it.
- The session class rename is mechanical.

**Review notes**
- A copy gets its own style scope, so editing it never changes the original on the storefront.

**Verification**
- On a dev store, the agent copied a product page bar into the cart drawer, shortened its text and placed it above the checkout button.
- Not checked on a live store.
</example>
