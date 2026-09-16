---
name: craft-floor
description: Check a built web UI against a concrete quality floor before calling it done. Use after the design direction is settled and the surface renders. Not for choosing a direction or reviewing prose.
disable-model-invocation: true
---

# Craft floor

Check the built result, not the intention. Run the checks together in one render pass at desktop and mobile, fix everything in one batch, confirm once, stop.

## Verify

- **Contrast.** Body and placeholder text at least 4.5:1, large text at least 3:1. On colored surfaces tint secondary text from that hue or the foreground, never a flat gray.
- **Depth.** Declare elevation once, border or shadow. A 1px border under a wide soft shadow is a ghost card. Shadows carry offset and blur.
- **Spacing.** Tight groups, generous separation, more space above a heading than below it. Read computed values, not intended ones.
- **Type.** Body measure 65 to 75ch. Balanced headings, pretty body wrapping, a visible scale and weight step. Tracking no tighter than -0.04em. Run real copy at every breakpoint.
- **Motion.** One authored moment. Not the same entrance on every section. Ease-out from an already visible default. Overlays enter and exit along the same path.
- **States.** Hover, focus-visible, active, disabled, loading, error, empty. Real content in each.
- **Browser surfaces.** Text selection, caret, scrollbars (`color-scheme`), focus rings, underline offset and thickness, tabular numerals. These ship with browser defaults that belong to no design. Theme them from the palette. This is the cheapest signal that a page was built rather than assembled.
- **Copy.** Controls name their action. Errors name the problem and the recovery.

## Refuse by default

The brief can earn any of these back. Reaching for one without a reason means no decision was made.

- Same-size icon plus heading plus text cards as page structure. Nested cards.
- Big number, small label, supporting stats, accent.
- A kicker or eyebrow above a heading. Section numbers (01, 02) unless the sequence carries information.
- Gradient text. Glass and blur as decoration. Colored `border-left` thicker than 1px on list items or callouts. Zero-blur offset shadows outside a neobrutalist world.
- Monospace as a costume for "technical" rather than for code, data, or measurement.
- Unicode glyphs or emoji standing in for an icon set.
- A system display face as the display voice. Sketch-style SVG illustration and `feTurbulence` grain.
- Stripe or grid background overlays with no canvas, map, or measuring tool under them.
- A modal for a task that needs neither interruption nor protected focus.
- Light or dark chosen by category instead of by where the thing is used.
