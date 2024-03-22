---
title: 'DELETE'
description: ""
published: 2023-08-18
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/delete/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Deletes an object. _(since CS 17)_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**DELETE** Selection parameter(s)...

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

With the DELETE command, objects can be deleted from the model. There are 2 different selection methods available through the Selection type parameter.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Objects that are in use can not be deleted. For example if a section is used by a structural member, the section can not be deleted. Attempting to do so will result in an error.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Command parameters:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Selection type:

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                   |                |                                                  |                   |
| --------------------------------- | -------------- | ------------------------------------------------ | ----------------- |
| **Command parameter**             | **Assignment** | **Value format**                                 | **Input options** |
| [Selection type](#Selection-type) | Required       | [Predefined strings](#Available-selection-types) | Local, variable   |

<!-- /wp:table -->

<!-- wp:paragraph -->

Available selection types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                            |                         |
| -------------------------- | ----------------------- |
| **Selection type**         | **Description**         |
| [By_ID](#DELETE-By_ID)     | Deletion by object ID   |
| [By_Type](#DELETE-By_Type) | Deletion by object type |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Selection parameter(s):

<!-- /wp:heading -->

<!-- wp:paragraph -->

The available selection parameters and their meaning depends on the chosen selection type. [Detailed description](#Detailed-description-of-selection-types) of all selection parameters for each individual selection type can be found below.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
DELETE By_ID ID1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":1,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

# Detailed description of selection types

<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"left","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## DELETE By_ID

<!-- /wp:heading -->

<!-- wp:paragraph -->

Deletes specific objects in the model by ID.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

\***\*DELETE **By*ID \*\*\[ID1] \[ID2] \[ID3] \_etc.*

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                       |                |                  |                   |
| --------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter** | **Assignment** | **Value format** | **Input options** |
| [IDs](#IDs)           | Required       | String           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### IDs:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Exact identification strings of the objects chosen for deletion. Multiple IDs can be given within one DELETE BY_ID command. IDs need to be separated by spaces.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
DELETE BY_ID ID1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### With added prerequisites (object creation) and multiple objects:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 1000
Name "Structural Member 1"

CREATE Mem_ID2 Structural_Member "HEA 200"
0 0 1000
0 1000 1000
Name "Structural Member 2"

CREATE Mem_ID3 Structural_Member "HEA 200"
0 0 1000
0 1000 0
Name "Structural Member 3"

DELETE By_ID Mem_ID1 Mem_ID2
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## DELETE By_Type

<!-- /wp:heading -->

<!-- wp:paragraph -->

Deletes specific objects in the model by type. All objects within the given object type will be deleted, except default objects.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If there is at least one object within the given type, that is used by another object, then the DELETE command will not execute and result in an error. No objects will be deleted in this case. For example if I try to delete all sections, but 1 of the sections is used by a structural member.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**DELETE By_Type **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                                             |                   |
| ----------------------------------- | -------------- | ------------------------------------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format**                            | **Input options** |
| [Object type](#Object-type-By_Type) | Required       | [Predefined strings](#object-types-By_Type) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Object type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of objects to be deleted. Only 1 object type can be given within one DELETE By_Type command.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                        |                     |
| ---------------------- | ------------------- |
| **Object type name**   | **Object type**     |
| Structural members tab | -                   |
| Section                | Section             |
| Structural member      | Structural_Member   |
| Structural Plate       | Structural_Plate    |
| Haunch                 | Haunched_Member     |
| Tapered member         | Tapered_Member      |
| Steel material         | Steel               |
| Coated steel material  | Coated_Steel        |
| Concrete material      | Concrete            |
| Rebar material         | Rebar               |
| Point support          | Support_Point       |
| Line support           | Support_Edge        |
| Surface support        | Support_Plate       |
| Point support type     | Support             |
| Release type           | Release             |
| Link                   | Link                |
| Loads tab              | -                   |
| Load group             | LoadGroup           |
| Load case              | LoadCase            |
| Load combination       | LoadCombination     |
| Point load             | NodeForce           |
| Line load              | MemberForce         |
| Surface load           | PlateForce          |
| Load transfer surface  | LoadTransferSurface |
| Mass tab               | -                   |
| Mass group             | MassGroup           |
| Mass case              | MassCase            |
| Mass combination       | MassCombination     |
| Point mass             | NodeMass            |

<!-- /wp:table -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
DELETE By_Type Structural_Member
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### With added prerequisites (object creation):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 1000
Name "Structural Member 1"

CREATE Mem_ID2 Structural_Member "HEA 200"
0 0 1000
0 1000 1000
Name "Structural Member 2"

CREATE Plate_ID1 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0 0 0
3000 0 0
3000 3000 0

DELETE By_Type Structural_Member
```

<!-- /wp:loos-hcb/code-block -->
