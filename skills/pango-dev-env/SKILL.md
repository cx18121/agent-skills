---
name: pango-dev-env
description: "Charlie's personal Pango store ownership, ticket-note rules, and host gotchas for backend-app development. Use alongside backend-app's AGENTS.md and pango-local-dev."
---

# Charlie's Pango preferences and host gotchas

`backend-app/AGENTS.md` and the repo's `.agents/skills/` (`pango-local-dev`, `pango-pest-mounted`, `pango-debug`, `pango-prod-data`, `pango-production-debugging`, `pango-e2e-mockless`) own slot lifecycle, remote vs local execution, tests, and production routes. Follow them as the source of truth. This skill holds only Charlie's personal store ownership and host-specific gotchas.

## Personal Shopify stores and slot boundaries

- `charlie-pango-test.myshopify.com` is Charlie's ordinary development store.
- `charlie-pango-e2e.myshopify.com` is reserved strictly for E2E. Never lease, install, seed, or modify an E2E app, slot, database, or store for ordinary development, even if an E2E app record looks unleased.
- State the target store before opening a Shopify install URL.
- Never run `pango setup add-slot`, `pango app create`, `pango dev add-app`, or `pango slot provision` without explicit permission after showing existing leases (`pango dev list`).

## Ticket decisions

- Write ticket-specific design decisions and settled scope into the Linear ticket body via `pango_ticket_body` rather than agent memory. Memory is only for cross-task preferences that apply beyond one ticket.

## Host and runtime gotchas

- **Homebrew `fnox` shadowing.** Commands launched through the `process` tool can resolve Homebrew `fnox` before the repo pin. Run `mise exec -- fnox` there so profile inheritance matches the repo.
- **Changed secrets require recreate, not restart.** Container restarts keep their original environment. Verify the stored value via the provider's safe auth endpoint, check that the host process sees a nonempty value (without printing it), apply with `pango dev down` then `pango dev run`, and confirm both `web` and `worker` containers received it before exercising the app.
- **SNI mismatch on local HTTPS.** `curl` returning `000` against a local HTTPS port is usually an SNI mismatch. Use the tunnel URL or resolve the leased hostname to `127.0.0.1` with the port from `pango dev current`.
- **Fresh local Store rows.** If a slot database lacks its `Store` row, open the leased app's Shopify install URL once so token exchange creates `Store` and `OAuthAccount`, then run `pango db seed`. Manual dashboard login uses **Sign in through Shopify** (fresh local users have random passwords).
- **Tinker scripts.** Use fully qualified class names, raw strings for enum columns, and `Model::withoutEvents(...)` for fixture writes. Never kill Tinker mid-transaction because it can leave row locks.
- **Enigma migrations.** Enigma entities use PostgreSQL integer types. After migrations touching Enigma-read tables, run `pango db migrate` and check `crates/enigma` with `cargo check`.
