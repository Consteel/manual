---
slug: 53-Build 4690-Version 19 Update 1 Hotfix 3
title: Build 4690-Version 19 Update 1 Hotfix 3

tags: [consteel, update]
---

**12-06-2026    build 4690**


_**Bug fixes:**_

- Fixed an issue where roof pitches in a user-defined standard were set to 0 degrees instead of the expected interval values. Roof angles now correctly follow the standard intervals.

- Fixed an issue where a progress bar would remain on screen after creating a new column base connection and closing the Joint module. The progress bar now disappears.

- Fixed an issue where the rho factor for shear reduction was calculated incorrectly, resulting in an overestimated reduced plastic moment. The calculation now follows the EC3 formula and uses the maximum stress in the web quarters for improved accuracy.

- Fixed an issue where Consteel could not save a model after running a long simulation, and simulation results were lost when saving under a new name. Additionally, saving of color palette and documentation template settings has been corrected.

- Fixed an issue where Consteel crashed when running a buckling calculation in Member design. The calculation now completes without crashing.

- Fixed an issue where starting an analysis on a model could cause the program to freeze due to missing section properties. The analysis now runs correctly without freezing.

- Fixed an issue where the displayed effective area (Aeff) for Class 4 sections under pure compression in fire conditions was incorrect, although the internal design calculation used the correct value. The correct fire‑specific effective area is now shown.

- Fixed an issue where the fire effect was ignored when displaying the effective cross‑section for bent‑from‑plate sections. The correct fire‑specific effective section is now shown in the Section module.

- Fixed an issue where the web remained fully effective despite high slenderness, due to an iteration error that incorrectly accumulated moment deltas from centroid shifts. The effective width of the web is now correctly calculated.

- Fixed an issue where the torsional moment post‑process for UPE sections used the centroid distance instead of the shear center distance, resulting in a discontinuous torsion diagram. The torsion distribution is now correctly calculated and continuous.