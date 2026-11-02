# Readability and enlargement review — 2026-11-02

Scope: second accessibility improvement pass after v2.29, preserving approved copy, media and contact policy.

## Findings and changes

- Sampled the actual rendered image backgrounds with text fill temporarily hidden and text shadows removed. The original home navigation and language links included samples around 2.98–4.08:1; home statistic/proof labels included samples around 3.75–4.30:1. English recruiting and finance banner description samples included 2.06:1 and 3.72–3.82:1. These samples fall below the 4.5:1 threshold for normal text.
- Added a dark translucent header surface, strengthened statistic cards and added compact backing surfaces to home proof labels. Strengthened page-hero gradients across the text area, including mobile overrides. The existing white sticky header and navy/green identity remain.
- Repeated the same background sampling on Chinese/English home, Chinese about, English recruiting and English finance pages. No below-threshold samples remained in those sampled regions. This is a sampled comparison, not a guarantee for every frame, interaction or browser.
- Added a dark native caption background without fixing caption font size or changing the supplied translation/timestamps.

## Verification

- Production build, TypeScript and the 28-route asset check passed.
- Contrast regression checks composite text backing surfaces over a white image frame and verify at least 4.5:1 for normal text.
- All 28 pages were checked at 640, 720 and 960 CSS-pixel widths with DPR 2 and 450 CSS-pixel height. These model halved desktop layout viewports at 200% page zoom; DPR alone is not zoom. No horizontal page overflow, banner copy clipping or unreachable mobile menu was detected. This is not a physical-device or browser-native zoom certification.
- Browser parsed both Dallas tracks with 51 ordered, nonoverlapping cues each. English and Chinese cue boundaries match; all cues end within the 149.14-second video. Seeking to the middle of cues 1, 13, 26, 39 and 51 activates the matching native cues.
- Automated contrast scan across 28 pages found no definite failures, but reported indeterminate image/pseudo-element backgrounds. Those results are not counted as automatic passes; the sampled image-background check above supplements them.

## Remaining manual review

- Listen to the complete video and compare each English caption and Chinese translation with speech. No audio transcription or complete listening review was performed in this pass.
- Check Safari/iOS and Android native player caption rendering on physical devices.
- Review remaining image-backed captions, focus/hover states and other video frames as part of a broader accessibility audit.

Reference thresholds: [WCAG 2.2 contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). The implemented changes address the observed issues and do not constitute whole-site WCAG certification.
