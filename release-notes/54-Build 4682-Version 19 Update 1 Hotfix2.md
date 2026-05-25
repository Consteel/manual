---
slug: 54-Build 4682-Version 19 Update 1 Hotfix 2
title: Build 4682-Version 19 Update 1 Hotfix 2

tags: [consteel, update]
---

**21-05-2026    build 4682**


_**Bug fixes:**_

- Fixed an issue where loading sections from the "My Section Library" did not update the section correctly, leading to freezes when loading standard sections and disabled geometry drawing icons. User section banks are now updated properly without affecting standard section banks or corrupting layer object flags.

- Fixed an issue where models containing thermally loaded tension members produced incorrect results (normal forces, support reactions, and nodal equilibrium). Thermal load calculations on tension members now yield realistic results.

- Fixed an issue where "Get Forces" on an isolated footing returned the same values regardless of centering or offset, and the footing graphic was displaced in Consteel 19. Forces are now correctly retrieved and footing geometry displays properly.

- Fixed an issue where the displayed emissivity factor for galvanized profiles was incorrect. Both temperature‑dependent values (0.35 and 0.7) are now shown properly.