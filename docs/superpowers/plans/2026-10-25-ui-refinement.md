# Monte Pio UI refinement
Goal: refine the existing home and booking pages into a calm editorial hotel experience.
Spec: plan.md. Keep Astro, the existing photos, booking configuration and /montepio base path.

- [x] Refine shared typography, header, native modal navigation and footer.
- [x] Recompose the text-led opening and five photo chapters; retain visible confirmation notes.
- [x] Match the rooms and booking panels, build and verify desktop/mobile rendering.

Constraints: white/off-white, accessible bronze accents, square buttons, no gradients or shadows, no invented facts or artwork, no dependencies or public deployment.
Review: narrow-screen overflow, menu Escape/focus/anchors, base-prefixed links, reduced motion, JavaScript-disabled content, image loading.
Baseline: a 70vh opening, five repeated spreads and large grey placeholders; the old menu does not contain keyboard focus.

Verification: production build passed. Chromium checks passed for home and booking at 320, 390, 768, 1024 and 1440px: no horizontal overflow or overlapping header controls. Menu open/close, Escape, focus restoration, section links, image loading, reduced motion and JavaScript-disabled content passed, with zero browser errors.
Independent review found captions obscured by overlapping images. Moved captions below the complete photo composition; a geometry check reproduced the failure before the fix and passed for all five chapters at all five widths afterwards. No other substantive review findings.
Evidence: %TEMP%/montepio-ui-review contains screenshots, build.log, checks.json and browser check scripts.
Deliberate scope: existing pages only; commissioned illustrations, final photography and unconfirmed hotel information remain pending. Existing pre-renovation images and visible confirmation notes are retained. No deployment.
