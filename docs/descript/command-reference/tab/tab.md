---
title: 'TAB'
description: ""
published: 2023-08-14
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/tab/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Changes tab in the main window. _(since CS 17)_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**TAB **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                         |                |                                                       |                   |
| ----------------------- | -------------- | ----------------------------------------------------- | ----------------- |
| **Command parameter**   | **Assignment** | **Value format**                                      | **Input options** |
| [Tab name](<#Tab name>) | Required       | [Predefined strings](#Available-tab-parameter-values) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Tab name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Parameter that points to a specific tab is the Consteel GUI.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available tab names:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Geometry
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Structural_Members
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Loads
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Mass
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Finite_Element
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Analysis
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Global_Checks
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Member_Checks
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Serviceability_Checks
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Switches to display the given tab in the main window of the Consteel GUI.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
TAB Structural_Members
```

<!-- /wp:loos-hcb/code-block -->
