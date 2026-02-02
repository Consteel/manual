---
slug: 58-Build 4568-Version 19 Hotfix 4
title: Build 4568-Version 19 Hotfix 4

tags: [consteel, update]
---

**23-01-2026    build 4568**


_**Bug fixes:**_

- Issues with loading sections from the library when IFC files were imported into models have been resolved. As a precaution, it is recommended to reopen models containing IFC files imported since version 19 and rerun the calculations in the new version.
- Fixed an issue where node loads in older .smadsteel files changed when the file was opened multiple times.
- Fixed an issue where imported circular hollow sections from IFC showed incorrect utilization due to a bimoment parameter.

_**Improvements:**_

- Introduced a new build number service in Consteel.