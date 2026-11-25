---
name: codebase-design
description: Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary.
---

# Codebase Design

Design **deep modules** that put substantial behavior behind a small interface at a clean seam, testable through that interface. Aim for leverage for callers, locality for maintainers, and natural testability.

## Vocabulary

Use these terms when they sharpen a design distinction. Existing project language still wins when it names the real concept.

- **Module.** Anything with an interface and an implementation (function, class, package, or slice).
- **Interface.** Everything a caller must know to use the module correctly, including types, invariants, ordering constraints, error modes, configuration, and performance. Do not reduce this to just type signatures.
- **Implementation.** The internal body behind the interface.
- **Depth.** Leverage at the interface, measured by how much behavior callers and tests exercise per unit of interface they must learn (not line-count ratio). A shallow module exposes nearly as much complexity as it hides.
- **Seam.** The location where a module's interface lives and where behavior can be altered or substituted without editing callers. Prefer "seam" or "interface" over overloaded "boundary".
- **Adapter.** A concrete implementation filling the slot at a seam.
- **Leverage and locality.** Depth gives callers more capability per concept learned (leverage) and keeps bugs, knowledge, and verification concentrated in one owner (locality).

## Principles

- **Depth belongs to the interface.** Internals may be composed of small, mockable parts behind private seams without leaking them to callers.
- **Run the deletion test.** Imagine deleting the module. If complexity vanishes, it was a shallow pass-through. If complexity reappears across N callers, it earns its keep.
- **The interface is the test surface.** Callers and tests cross the same seam. Needing to reach past the interface to test internals signals the wrong shape.
- **Variation earns a seam.** Introduce an abstraction when callers need a stable contract, tests need a real replacement point, or more than one real adapter exists. Never build a seam for a hypothetical future adapter.

## Designing for testability

1. **Accept dependencies instead of constructing them inside.** Pass gateways, clocks, or clients through the interface.
2. **Return values instead of mutating shared state.** Pure results simplify both callers and assertions.
3. **Keep the surface small.** Fewer methods and parameters mean simpler callers and fewer brittle tests.

## Finding and comparing design work

Start from real pain rather than architecture ceremony. Look for policy repeated across callers, shallow pass-throughs, orchestration files owning unrelated decisions, changes scattering across files, and tests poking internals. Rank candidates by caller burden removed and knowledge localized, using real call sites, defects, and change history as evidence.

Match design effort to uncertainty and reversal cost:

- **Clear, local design.** Inspect actual callers and tests, then recommend directly.
- **Meaningful interface choice.** Compare materially different interfaces directly, showing realistic caller usage, invariants, and concrete tradeoffs rather than naming variations.
- **Costly choice with unresolved assumptions.** Use independent designers only when distinct exploration could expose a hidden assumption or change the recommendation, giving each the same caller needs with different plausible approaches.

Judge alternatives by caller burden, correctness, change locality, testability, and migration cost. Stop when further comparison is unlikely to change the choice.

For dependency categories, seam discipline, and replace-don't-layer testing, read [DEEPENING.md](DEEPENING.md).
