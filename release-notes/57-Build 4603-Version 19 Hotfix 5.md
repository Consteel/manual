---
slug: 57-Build 4603-Version 19 Hotfix 5
title: Build 4603-Version 19 Hotfix 5

tags: [consteel, update]
---

**09-02-2026    build 4603**


_**Bug fixes:**_

- Fixed an issue in the Section module affecting the GSS representation of slant flange welded I or H sections defined with certain parameter combinations.

- Fixed a visualization issue for surface loads applied to polygons containing non-planar points by introducing a tolerance distance between points and surfaces.

- Fixed an issue where nominal fire curves disappeared from the Define Fire Effect and Fire Protection functions after changing the project standard.

- Corrected release start and end point visualization on rotated members.

- Resolved an issue affecting certain models with eccentric members created in Consteel 18 when opened in earlier Consteel 19 versions. The error, caused by incorrect handling of shear field eccentricity in Consteel 19, could lead to failed analyses.

- Resolved an issue affecting some models where frame corner geometry appeared inaccurate after upgrading to Consteel 19. The error was caused by rounding the haunch start position, which led to incorrect eccentricity calculations near member ends.

- Fixed an issue where the frame corner symbol was displayed with an incorrect size in certain models. The correction ensures consistent and accurate graphical scaling.

- Fixed an issue where applying tapered geometry to a member after placing a frame corner resulted in incorrect geometry and misplaced supports. Frame corner objects are now updated automatically when member geometry changes.

- Corrected incorrect section height values for T-HEB 200 and T-HEM 500 profiles in the section database. The geometric properties have been updated to the correct heights (T-HEB 200: 100 mm; T-HEM 500: 262 mm).

