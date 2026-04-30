---
slug: 55-Build 4677-Version 19 Update 1 Hotfix 1
title: Build 4677-Version 19 Update 1 Hotfix 1

tags: [consteel, update]
---

**29-04-2026    build 4677**


_**Bug fixes:**_

- Fixed an issue where after creating a new user-defined design standard based on a predefined one, roof angle parameters were set to zero and became non-editable. Roof angles now retain correct values and can be modified as expected.

- Fixed an issue where the program could not locate snap points at the beginning or end of an arc, a problem that also persisted in Consteel 17.

- Fixed an issue where point‑edge movement of wind surfaces caused an immediate freeze in Consteel 19 (while Consteel 18 only deleted loads, which could be regenerated). The problem was that the bounding box calculation considered only bars and plates, ignoring load‑transfer surfaces; this also caused wind direction symbols to appear incorrectly. Both issues are now resolved.

- Fixed an issue where some valid models were incorrectly reported as corrupted when opened. The program now opens these models normally without displaying an error message.

- Fixed an issue where models created offline would unexpectedly force an online login without explanation. Offline‑created models now work correctly without requiring unnecessary online authentication.

- Fixed an issue where the rho factor calculation for certain sections returned a negative value. Rho is now correctly computed as a positive value for all section types as expected.

- Fixed an issue where partial wind loads distributed along a transfer element could overlap when multiple load segments were applied. This caused unrealistically high load concentrations on the first purlin near the eaves. Load distribution is now handled correctly, ensuring non-overlapping segments and accurate load values across all affected members.

- Fixed an issue where internal wind pressure was not generated during wind load creation, resulting in load cases with zero internal pressure values. The problem occurred when internal pressure objects were present in the model but not properly assigned to wind surfaces, especially in legacy or imported models. Internal pressure is now correctly detected and applied, and values are properly included when regenerating wind loads.

- Fixed an issue where certain DXF files could not be imported. DXF import has been updated to support newer formats, and the loading process now works reliably.

- Fixed an issue in line view where the copy function did not place duplicated elements, leaving them stuck in a preview (green) state. Copy now works correctly in line view.

- Fixed an issue where the buckling (eigenvalue) analysis checkbox state was displayed incorrectly in the Analysis Settings. The settings are now shown and applied consistently, preventing unintended eigenvalue or load case calculations.

- Fixed an issue where the warning about insufficient eigenvalues (“The critical parameter did not reach the required limit, increase the number of eigenvalues”) was not displayed. The warning is now correctly shown when applicable.
 
- Fixed an issue where section graphics did not update after modifications in the Section module.

- Fixed an issue where IDEA export verification was not working correctly with the latest version.

- Fixed an issue where the csJoint module ignored the "Shear plane in threaded part" checkbox and always used the full shank area (Ab) for shear resistance calculations. The shear plane setting is now properly respected, using the tensile stress area (As) when threads are present in the shear plane.

- Fixed an issue where the load transfer surface on an end wall detected only some members, and the detected set varied with polygon drawing order. The surface now consistently identifies all relevant members and allows proper selection.

_**Improvements:**_

- Added a new option in Developer Mode to control second-order iterations within Elastic Analysis. A toggle is now available to enable or disable second-order iterations, and when activated, the setting is indicated in the header as an “Analysis overwrite,” making it clear that custom analysis behavior is applied.

- Fixed an issue where analysis and result handling were unexpectedly slow, causing sluggish tab switching and design result processing. Object lookup has been improved to resolve the performance problem.

_**Modifications:**_

- Updated the application icon to the new ConSteel 19 design, including improved transparency and better visibility across different icon sizes.
