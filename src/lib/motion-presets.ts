/**
 * Shared Motion settings to avoid scroll edge flicker (re-intersection)
 * and keep reveal animations one-shot.
 */
export const scrollRevealViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -8% 0px",
} as const

export const scrollRevealViewportHero = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -5% 0px",
} as const
