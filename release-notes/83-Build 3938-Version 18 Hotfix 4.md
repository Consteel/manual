---
slug: 83-Build 3938-Version 18 Hotfix 4
title: Build 3938-Version 18 Hotfix 4

tags: [consteel, update]
---

**22-01-2025 	build 3938**


_**Bug fixes:**_

- Calculate button fixed at composite beam design. 
- Load combination list fixed at composite beam design. 
- The software crashed on a portion operation when the model was originally saved in an earlier (e.g. 14) version of Consteel and opened in version 18. The bug has been fixed. 
- In certain cases, the analysis crashed. The bug has been fixed. 
- Line link element wasn’t created between a member and a line on a surface element. The bug has been fixed. 
- Cross sectional area was displayed incorrectly for concrete I section with tapered flange width. The bug has been fixed. The analysis calculation was correct originally, there is no change in that. 
- Wind coefficient was not saved when defining snow effect. The bug has been fixed.

_**Improvements:**_

- An automatic model save is now always initiated at analysis start. 
- Composite beams are now removed from the Kg matrix in case of buckling analysis because it is not applicable for them. It is like they were put in a portion for which we do not run buckling analysis. 
- Several Consteel 18 features were added to the list of functions we collect usage statistics about. 
