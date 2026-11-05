---
name: pr-description
description: Write or edit a pull request title and description. Use before `gh pr create` or `gh pr edit`, when asked to write, fix or shorten a PR description, or when adding screenshots or diagrams to a PR.
---

# PR descriptions

A PR description is for a reviewer who has opened no files. It says who the change is for, what was wrong, and what is different now. The diff carries the detail.

**Keep the body under 150 words**, not counting images and diagrams. Bullets are one short sentence, two at most. A one file fix is two to four lines.

## Write it

1. **Opening, no heading.** Line 1 says who is affected and what is wrong for them, in their terms: the screen, the workflow, the failure. Line 2 says what this PR does about it. Take the reason from the request, ticket or thread. When none gives it, ask the user, or write "The PR gives no reason."
2. **Changes.** When there are two or more changes a person could notice, give each a bullet that starts with the surface it touches and says what someone now sees or can do. End with one line naming the mechanical part, such as renames or moved code.
3. **Pictures.** Put a screenshot beside every change visible on screen, a before and after pair when something existing changed. Use a short GIF when the interaction is the point. When the way services, jobs or external systems connect changes, add one small Mermaid diagram.
4. **Review notes**, only when there is something to say: the riskiest part and where to look first, a rejected alternative that a source records, or a direct question for the reviewer.
5. **Verification**, only for checks beyond the automated tests, such as a run in the real app or on a live store. Link the evidence or point to the screenshots. Say what was not checked.

Use headings only when the body has two or more sections after the opening.

## Then cut

Read the draft as the reviewer. Delete every line they can do without: testing recaps, implementation steps, class and field names, anything said twice. Count the words and keep cutting until the body is under 150.

## Rules

- Every claim is true and sourced. Write only reasons, alternatives and checks that a source or your own work shows.
- Write plain, complete sentences with common words. Join clauses with a period, a comma or "and". Dashes and semicolons stay out of the body.
- Make the change the subject: "The list now has a Duplicate button", rather than "I added".
- When the PR holds unrelated changes, tell the user it may be worth splitting. Until it is split, give each unrelated change its own bullet so nothing in the diff goes undescribed.
- Leave out `Closes #123` lines. Write the title with the `commit-style` skill.
- When editing a body, keep every image, link and ticked box a person put there.

## Attaching images

`gh` 2.99 or later uploads images. Reference the file in the body, `![Duplicate button on the widget list](./after.png)`, then pass `--attach ./after.png` to `gh pr create` or `gh pr edit`. With an older `gh`, ask the user how to attach them.

## Example

> Björn at Understatement built a product page widget and needs a near identical one for his cart drawer. Today he has to rebuild it by hand.
>
> - **Widget list:** a Duplicate button makes "Copy of …" with the same design and no placements.
>   ![Duplicate button on the widget list](./after.png)
> - **Chat:** the agent can list, read, create and copy widgets, and keeps editing the copy afterwards.
>   ![Copy card in chat](./chat.png)
> - The session class rename is mechanical.
>
> **Review notes**
> - A copy gets its own CSS handle and no placements, so it never shows twice on the storefront.
> - Rolling back a chat change now releases the surface link first. It used to fail on a foreign key.
>
> **Verification**
> - Björn's request ran end to end in one chat on a dev slot (screenshots above).
> - Not checked on his live store.
