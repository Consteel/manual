---
title: 'FILTER'
description: ""
published: 2023-08-18
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/filter/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Creates an ID list of model objects based on object type and attributes.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**FILTER**  
Objecttypes

_etc._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                |                                         |                   |
| ------------------------------- | -------------- | --------------------------------------- | ----------------- |
| **Command parameter**           | **Assignment** | **Value format**                        | **Input options** |
| [Result array](#Result-array)   | Required       | String                                  | Local, variable   |
| [Object type](#Object-type)     | Required       | [Predefined strings](#Object-type-name) | Local, variable   |
| [Filters](#Filters)             | Optional       | [Predefined strings](#Filter-name)      | Local, variable   |
| [Filter values](#Filter-values) | Optional       | String, integer, float                  | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Result array:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The array that will contain the IDs of objects that are the result of the filtering.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Object type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Object types the command will filter within. One ore more object types can be given for one FILTER command within the objecttypes row.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                       |                     |
| ------------------------------------- | ------------------- |
| **Object type name**                  | **Object type**     |
| Structural members tab                | -                   |
| Section _(since CS 17)_               | Section             |
| Structural member                     | Structural_Member   |
| Structural Plate                      | Structural_Plate    |
| Haunch _(since CS 17)_                | Haunched_Member     |
| Tapered member _(since CS 17)_        | Tapered_Member      |
| Steel material _(since CS 17)_        | Steel               |
| Coated steel material _(since CS 17)_ | Coated_Steel        |
| Concrete material _(since CS 17)_     | Concrete            |
| Rebar material _(since CS 17)_        | Rebar               |
| Point support                         | Support_Point       |
| Line support                          | Support_Edge        |
| Surface support                       | Support_Plate       |
| Point support type _(since CS 17)_    | Support             |
| Release type _(since CS 17)_          | Release             |
| Link _(since CS 17)_                  | Link                |
| Loads tab                             | -                   |
| Load group _(since CS 17)_            | LoadGroup           |
| Load case                             | LoadCase            |
| Load combination                      | LoadCombination     |
| Point load                            | NodeForce           |
| Line load                             | MemberForce         |
| Surface load                          | PlateForce          |
| Load transfer surface _(since CS 17)_ | LoadTransferSurface |
| Mass tab                              | -                   |
| Mass group _(since CS 17)_            | MassGroup           |
| Mass case                             | MassCase            |
| Mass combination                      | MassCombination     |
| Point mass _(since CS 17)_            | NodeMass            |
| Other                                 | -                   |
| Portion                               | Portion             |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Filters:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The object attributes based on which the filtering will be executed.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object attributes for filtering:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                 |                |                                     |
| --------------- | -------------- | ----------------------------------- |
| **Filter name** | **Filter**     | **Applicable object types**         |
| Material name   | material       | Structural_Member, Structural_Plate |
| Object name     | name           | All types                           |
| Plate thickness | platethickness | Structural_Plate                    |
| Section name    | section        | Structural_Member                   |
| Group name      | groupid        | Structural_Member, Structural_Plate |
| Section group   | sectiontype    | Structural_Member, Section          |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Filter values:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The attribute values that will be used for filtering.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

The FILTER command lists object IDs within the given object types. All object types that are given will serve as a basis for the filtering. The filtering can be restricted based on values of object attributes. The attribute based filters are optional. If there is none given, then the result array will contain all object IDs within the specified object type(s). If there is more then one filter condition, then the result will be the intersection of the filtered sets of objects, in other words the objects for which all filter conditions are true.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:paragraph -->

All structural members:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
FILTER Mem_IDs
Objecttypes Structural_member
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All load combinations:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
FILTER LC_IDs
Objecttypes Loadcombination
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All structural members and plates with material "S 235 EN 10025-2":

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
FILTER Filter_Result_IDs
Objecttypes Structural_Member Structural_Plate
Material "S 235 EN 10025-2"
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All structural plates with material "S 235 EN 10025-2" and thickness of 20 mm:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
FILTER Filter_Result_IDs
Objecttypes Structural_plate
Material "S 235 EN 10025-2"
Platethickness 20
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
