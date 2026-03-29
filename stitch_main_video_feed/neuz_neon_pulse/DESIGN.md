# Design System Document: NEUZ Visual Identity

## 1. Overview & Creative North Star: "The Neon Pulse"

This design system is built to capture the frantic, high-energy rhythm of Gen Z digital culture while maintaining the sophisticated clarity of a premium editorial brand. Our Creative North Star is **"The Neon Pulse"**—a concept that treats the UI not as a static container, but as a living, breathing landscape of light and depth.

To break the "template" look of standard social apps, we eschew rigid grids and traditional borders in favor of **intentional asymmetry** and **layered translucency**. Elements should feel like they are floating in a deep, digital void, illuminated by the "glow" of the content. We use high-contrast typography scales—pairing the brutalist weight of *Space Grotesk* with the geometric precision of *Manrope*—to create an interface that feels both high-tech and human.

---

## 2. Colors

The palette is anchored in a "True Dark" foundation, allowing our neon accents to vibrate with maximum intensity.

### The Palette
*   **Background / Surface:** `#0e0e10` (The Void).
*   **Primary (Electric Blue):** `#c1fffe` (Text/Icon) to `#00ffff` (Glow/Container).
*   **Secondary (Lime Green):** `#59ee50` (Success/Action).
*   **Tertiary (Neon Magenta):** `#ff51fa` (Discovery/Highlights).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off the UI. Separation must be achieved through:
1.  **Tonal Shifts:** Placing a `surface-container-low` card against the `surface` background.
2.  **Negative Space:** Utilizing the `8` (2rem) and `12` (3rem) spacing tokens to create breathing room.
3.  **Glow Diffusion:** Using a subtle outer glow of `primary` to define an active area rather than a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, frosted sheets.
*   **Base:** `surface` (#0e0e10)
*   **Secondary Content:** `surface-container-low` (#131315)
*   **Interactive Elements:** `surface-container-high` (#1f1f22)
*   **Floating Overlays:** `surface-container-highest` (#262528) with 60% opacity.

### The "Glass & Gradient" Rule
To ensure a premium feel, all floating UI (Player controls, Comment sheets) must use **Glassmorphism**. Apply a `backdrop-blur` (20px-40px) and a subtle linear gradient from `primary` at 10% opacity to `surface-variant` at 20% opacity.

---

## 3. Typography

The typography strategy relies on the tension between the "Tech-Bold" headers and "Humanist" body text.

*   **Display & Headlines (Space Grotesk):** Use `display-lg` (3.5rem) for high-impact moments. Headlines should be set with tight letter-spacing (-2%) to feel "packed" and energetic.
*   **Body & Labels (Manrope):** All functional text uses Manrope. `body-lg` (1rem) is the standard for comments and captions.
*   **The Power Scale:** Jump between `display-sm` and `label-sm` frequently. High contrast in size creates an editorial "magazine" feel that disrupts the monotonous scrolling experience.

---

## 4. Elevation & Depth

We convey importance through **Tonal Layering** and light physics, not drop shadows.

*   **The Layering Principle:** Instead of a shadow, an elevated card should use `surface-container-highest`. When nested inside a `surface-container-low` section, the natural contrast creates "lift."
*   **Ambient Shadows:** If a floating action button (FAB) requires a shadow, use a `16px` blur with a 6% opacity of the `primary` token (#00ffff). This mimics a neon light casting a glow on the surface below.
*   **The "Ghost Border" Fallback:** For high-density areas where separation is critical, use the `outline-variant` token at 15% opacity. It should be felt, not seen.
*   **Glassmorphism Depth:** Elements like the bottom navigation bar must use `surface-container-highest` at 70% opacity with a heavy backdrop blur. This allows the vibrant colors of the video feed to bleed through, integrating the UI into the content.

---

## 5. Components

### Buttons
*   **Primary:** A solid fill of `primary_container` (#00ffff) with `on_primary_fixed` (#004343) text. Use `roundedness-full` for a pill shape.
*   **Secondary (Glass):** A `surface_variant` fill at 40% opacity with a `primary` "Ghost Border."
*   **Interactive State:** On press, apply a 2px inner-glow using the `primary` token.

### Cards & Lists
*   **The Rule:** No dividers. Use `spacing-4` (1rem) to separate list items.
*   **Video Cards:** Use `roundedness-xl` (1.5rem). The metadata (username, likes) should sit on a glassmorphic gradient overlay at the bottom of the card.

### Input Fields
*   **Form Factor:** `surface-container-highest` background, `roundedness-md`.
*   **Focus State:** The background remains the same, but the "Ghost Border" increases to 40% opacity in `primary` blue.

### Signature Component: The "Pulse" Navigation
The bottom navigation shouldn't be a flat bar. It should be a floating glass dock using `roundedness-full` and `spacing-6` (1.5rem) margins from the screen edges. The active icon should have a small `primary` dot below it that glows with a 10px blur.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts (e.g., offsetting a headline to the left while the body text is inset further).
*   **Do** lean into "vibrant friction"—place neon lime (#32CD32) icons near electric blue (#00FFFF) text to create Gen Z energy.
*   **Do** use `roundedness-xl` for large containers and `roundedness-full` for interactive triggers.

### Don't
*   **Don't** use 100% opaque black. Always use the `surface` token (#0e0e10) to keep the dark mode "inky" and premium.
*   **Don't** use standard "Material Design" shadows. They feel dated and "heavy."
*   **Don't** use a 1px divider to separate comments. Use a background shift to `surface-container-low`.
*   **Don't** use center-alignment for everything. Editorial design thrives on a strong left-aligned axis with "floating" right-aligned accents.