---
slug: 56-Build 4646-Version 19 Update 1
title: Build 4646-Version 19 Update 1

tags: [consteel, update]
---

**05-03-2026    build 4646**


_**Bug fixes:**_

- Fixed an issue where changes to dynamic factors were not immediately reflected in the model. The values now update correctly without requiring manual switching of the load combination selection.

- Corrected inaccuracies in section height data for multiple T-profile sections to ensure proper geometric representation.

- Corrected the calculation of shear field eccentricity in the decomposition module, ensuring accurate handling of eccentric shear distributions.

- Fixed an issue where flange brace elements were not properly updating with connected Smart Link changes, ensuring consistent behavior after modifications.

- Fixed an issue where haunches were not applied in connections in specific cases, ensuring correct geometry and representation in affected models.

- Fixed the representation of eccentric LTS load distribution in legacy CS17-AISC models when opened in CS19, ensuring that element highlighting and smartlink endpoints display correctly without affecting the underlying calculations.

-Resolved the issue preventing cloud upload and download of models, restoring proper functionality for file sharing across ConSteel versions.

- Corrected the thickness tolerance calculation for EN 10143 S550GD profiles in ConSteel, ensuring accurate tc values for S320 and S550 materials according to the standard.

- Fixed the behavior of the fireproof coating thickness determination checkbox so that it correctly retains its on/off state after using the Apply button, preventing unintended automatic reactivation.

- Corrected the distribution of generated stepped wind loads on eccentric load transfer elements so that the loads are properly applied to all selected purlins, ensuring consistent behavior across the structure.

- Fixed the issue with eccentric load handling, ensuring correct internal forces and deflections for both distributed and concentrated loads across all beam elements.

- Fixed the crash in CS19 that occurred in specific cases when moving wind surface points or edges. The update ensures loads are regenerated correctly and database commands are properly managed to avoid conflicts on the same object.

- Fixed the smart link behavior so that flange braces correctly follow main beam height changes. Both regular and tapered elements now update consistently, and reverting the height no longer breaks the connections.

- Fixed the X-brace tension bar issue: planar elements no longer incorrectly receive LTS loads. After the update, loads must be refreshed to regenerate the correct distribution.

- Fixed the issue with incorrect country flags in Project Center. The flags now display correctly for all languages in the 4632 version. The problem was due to outdated country codes that had been reverted in a previous commit.

- The torsion calculation was corrected so that the material factor is applied properly. The computed results now match the expected values, and the issue has been resolved.


_**Improvements:**_

- Added support for a new tapered welded I-section element type in the Descript environment. The feature introduces a command for defining welded I-sections with variable web height along the member, following the same parameter logic as the Consteel implementation.

- Added support for defining prescribed displacement load type through Descript. The feature allows users to assign imposed displacements to supports via scripting, enabling automated definition of displacement-controlled boundary conditions.

- Added stability verification for solid circular sections. An EPS model representation is now generated for round bars, enabling buckling checks using the appropriate buckling curve (“c”) with km class equal to 1.

- Improved the Smart Link functionality with extended control over element orientation and eccentricity handling, including support for 0°, 90°, 180°, and 270° rotations and improved handling of local and global eccentricity directions.

- Added and validated a Descript script for automated placement of flange bracing elements. The script supports mirrored placement and predefined release settings to streamline the generation of flange bracing configurations.

- Uploaded Hall scripts to the Sanity system and the Script Library to ensure proper availability, centralized access, and documentation of the scripts.

- Uploaded the flange bracing script to the Script Library, ensuring centralized access and availability alongside the Hall scripts for proper version control and documentation.

- Improved the analysis summary reporting by clearly linking errors to the specific load cases or load combinations where they occur, ensuring more accurate and informative feedback for second-order analysis results.

- Added a new release type zz,w to the system, ensuring it is correctly available in new models and integrated into the default model setup without affecting existing releases.

- Improved the element count handling in ConSteel Lite by correctly accounting for generated elements from double C profiles, preventing false over-limit errors during calculation and documentation.


_**Modifications:**_

- Added a confirmation prompt during the copy operation when the action would create duplicated elements. Users can choose to proceed with the duplication or cancel the operation and return to the current selection.

- Modified element deletion behavior so that removing an element no longer deletes its associated line, preserving the line while maintaining proper database relationships. Additionally, in Line View, if a selection is made, only the line is selected and the bar member is not. To select the bar member, a different view must be used.


_**Steelspace-related bug fixes:**_

- Fixed the issue with opening freshly saved cloud models in Steelspace. The problem was caused by a misaligned enum in the SMADSteel export. Models saved with the corrected version now load correctly in the browser; previously saved models with the incorrect enum remain incompatible.
