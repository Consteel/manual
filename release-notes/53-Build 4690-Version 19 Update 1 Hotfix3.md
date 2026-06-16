---
slug: 53-Build 4690-Version 19 Update 1 Hotfix 3
title: Build 4690-Version 19 Update 1 Hotfix 3

tags: [consteel, update]
---

**12-06-2026    build 4690**


_**Bug fixes:**_

- Fixed an issue where roof pitches in a user-defined standard were set to 0 degrees instead of the expected intermediate values when wind load on the roof was calculated. Roof angles now correctly follow the standard intervals.

- Fixed an issue where a progress bar would remain on screen after creating a new column base connection and closing the Joint module. The progress bar now disappears.

- Fixed an issue where the rho factor for shear reduction was presented incorrectly, resulting in an overestimated reduced plastic moment. The Consteel UPR method to determine the reduced plastic moment was improved to match better with the value predicted by the relevant EC3 formula.

- Fixed an issue where Consteel could not save a model after running a long Falcon simulation, and simulation results were lost when saving under a new name. Additionally, saving of color palette and documentation template settings has been corrected.

- Fixed an issue where Consteel could not save a model when after a model version upgrade.

- Fixed an issue where Consteel crashed when running a buckling calculation in Member design. The calculation now completes without crashing.

- Fixed an issue where starting an analysis on a model could cause the program to freeze due to missing section properties. The analysis now runs correctly without freezing.

- Fixed an issue where the displayed effective area (Aeff) for Class 4 sections under pure compression in fire conditions was incorrect, although the internal design calculation used the correct value. The correct fire‑specific effective area is now shown.

- Fixed an issue where the fire effect was ignored when displaying the effective cross‑section for bent‑from‑plate sections. The correct fire‑specific effective section is now shown in the Section module.

- Fixed an issue where the web remained fully effective despite high slenderness, due to an iteration error that incorrectly accumulated moment deltas from centroid shifts. The effective width of the web is now correctly calculated. This error mostly affected cold-formed U sections,

- Fixed an issue where the torsional moment was not correctly drawn in some cases. The finite element calculation remained correct in this case.