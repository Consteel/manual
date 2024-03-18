---
title: 'SELECT'
description: ""
published: 2022-01-28
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/select/
hero: ./img/wp-content-uploads-2021-08-image-25.png
---
<!-- wp:paragraph -->

Selects objects in the model.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

\***\*SELECT** \*\* Selection parameters...

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

With the SELECT command, objects can be selected from the model. There are several different selection methods available through the Selection type parameter.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Selection types

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available selection types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                      |                                                    |
| ------------------------------------ | -------------------------------------------------- |
| **Selection type**                   | **Description**                                    |
| [All](#SELECT-All)                   | Selects all objects in the model                   |
| [Invert](#SELECT-Invert)             | Inverts the selection                              |
| [By_ID](#SELECT-By_ID)               | Selection by object ID                             |
| [By_Type](#SELECT-By_Type)           | Selection by object type                           |
| [By_Attribute](#SELECT-By_Attribute) | Selection by object type and attribute(s)          |
| [By_User](#SELECT-By_User)           | Manual selection by the user during the script run |

<!-- /wp:table -->

<!-- wp:heading {"level":3} -->

### Command parameters:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Selection type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The available selection parameters and their meaning depends on the chosen selection type. [Detailed description](#Detailed-description-of-selection-types) of all selection parameters for each individual selection type can be found below.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
SELECT All
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":1} -->

# Detailed description of selection types

<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"left"} -->

## SELECT All

<!-- /wp:heading -->

<!-- wp:paragraph -->

Selects all previously created objects in the model.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

\***\*SELECT\*\*** **All**

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
SELECT All
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

SELECT All
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## SELECT Invert

<!-- /wp:heading -->

<!-- wp:paragraph -->

Inverts the selection. In other words, selects model objects that were unselected, and deselects model objects that were selected previously.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

\***\*SELECT\*\*** **Invert**

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
SELECT Invert
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation and selection):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

CREATE Mem_ID2 Structural_member "HEA 200"
1000 0 0
1000 0 3000

SELECT BY_ID Mem_ID1

SELECT Invert
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## SELECT By_ID

<!-- /wp:heading -->

<!-- wp:paragraph -->

Selects specific objects in the model by ID.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

\***\*SELECT\*\*** **By_ID **\[ID1] \[ID2] \[ID3] _etc._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                       |                |                  |                   |
| --------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter** | **Assignment** | **Value format** | **Input options** |
| [IDs](#IDs)           | Required       | String           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### IDs:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Exact identification strings of the objects chosen for selection. Multiple IDs can be given within one SELECT BY_ID command. IDs need to be separated by spaces.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
SELECT BY_ID ID1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation) and multiple objects:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

CREATE Mem_ID2 Structural_member "HEA 200"
1000 0 0
1000 0 3000

SELECT BY_ID Mem_ID1 Mem_ID2
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## SELECT By_Type

<!-- /wp:heading -->

<!-- wp:paragraph -->

Selects specific objects in the model by type.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**SELECT** **By_Type **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                                             |                   |
| ----------------------------------- | -------------- | ------------------------------------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format**                            | **Input options** |
| [Object type](#Object-type-By_Type) | Required       | [Predefined strings](#object-types-By_Type) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of objects to be selected. Only 1 object type can be given within one SELECT By_Type command.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                           |
| ------------------------------- | ------------------------- |
| **Object type name**            | **Object type**           |
| Geometry tab                    | -                         |
| Point                           | Point                     |
| Line                            | Line                      |
| Arc                             | CircleArc                 |
| Two-dimensional figure          | Polygon                   |
| Dimension line                  | Dimension_Line            |
| Dimension radius and diameter   | Dimension_Radius          |
| Dimension arc                   | Dimension_Arc             |
| Dimension angle                 | Dimension_Angle           |
| Dimension height                | Dimension_Height          |
| Dimension textbox               | Dimension_Textbox         |
| Structural members tab          | -                         |
| Member                          | Structural_Member         |
| Plate                           | Structural_Plate          |
| Diaphragm                       | Structural_Diaphragm      |
| Rigid body                      | Structural_RigidBody      |
| Haunch                          | Haunched_Member           |
| Tapered member                  | Tapered_Member            |
| Concrete beam reinforcement     | Concrete_Beam_Place       |
| Concrete column reinforcement   | Concrete_Column_Place     |
| Point support                   | Support_Point             |
| Line support                    | Support_Edge              |
| Surface support                 | Support_Plate             |
| Shear field                     | ShearField                |
| Link                            | Link                      |
| Smart link                      | SmartLink                 |
| Purlin line                     | PurlinLine_Place          |
| Purlin overlap and support zone | PurlinJoint_Place         |
| Rectangular cutout              | Hole_Rec                  |
| Circular cutout                 | Hole_Circ                 |
| Hexagonal cutout                | Hole_Hex                  |
| Perpendicular plate stiffener   | Stiffener_PlatePerp       |
| Parallel plate stiffener        | Stiffener_PlatePar        |
| Perpendicular section stiffener | Stiffener_Section         |
| Placed joint                    | Joint_Place               |
| Loads tab                       | -                         |
| Point load                      | NodeForce                 |
| Line load                       | MemberForce               |
| Line wind load                  | LineWindForce             |
| Surface load                    | PlateForce                |
| Load transfer surface           | LoadTransferSurface       |
| Line temperature load           | MemberThermal             |
| Surface temperature load        | PlateThermal              |
| Prescribed displacement         | PresDisp                  |
| Change in length                | Elongation                |
| Tension force                   | Pretension                |
| Influence line                  | MovingLoadPath            |
| Influence graph                 | InfluGraph                |
| Wind surface                    | WindSurface               |
| Snow surface                    | SnowSurface               |
| Surface wind load               | SurfWindForce             |
| Surface snow load               | SurfSnowForce             |
| Fire load                       | MemberFireEffect          |
| Mass tab                        | -                         |
| Node mass                       | NodeMass                  |
| Finite element tab              | -                         |
| Constraint                      | Structural_Constraint     |
| Stiffener warping support       | Stiffener_Warping_Support |
| Other                           | -                         |
| Section plane                   | Result_Plane              |

<!-- /wp:table -->

<!-- wp:paragraph -->

More information about object types can be found at the [CREATE ](https://consteelsoftware.com/manual/descript-cspi/create/)command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Selects specific objects in the model by type. All objects within the given object type will be selected.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
SELECT By_Type Structural_Member
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

CREATE Sup_ID1 Support_Point Mem_ID1 Fixed
0 0 0

SELECT By_Type Structural_Member
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## SELECT By_Attribute

<!-- /wp:heading -->

<!-- wp:paragraph -->

Selects specific objects in the model by type and attribute.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**SELECT By_Attribute **

_etc._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                      |                |                                                  |                   |
| ---------------------------------------------------- | -------------- | ------------------------------------------------ | ----------------- |
| **Command parameter**                                | **Assignment** | **Value format**                                 | **Input options** |
| [Object type](#Object-type-By_Attribute)             | Required       | [Predefined strings](#object-types-By_Attribute) | Local, variable   |
| [Object attributes](#Object-attributes-By_Attribute) | Required       | Predefined strings                               | Local, variable   |
| [Attribute values](#Attribute-values-By_Attribute)   | Required       | String                                           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of objects to be selected. Only 1 object type can be given within one SELECT By_Attribute command.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                           |
| ------------------------------- | ------------------------- |
| **Object type name**            | **Object type**           |
| Geometry tab                    | -                         |
| Point                           | Point                     |
| Line                            | Line                      |
| Arc                             | CircleArc                 |
| Two-dimensional figure          | Polygon                   |
| Dimension line                  | Dimension_Line            |
| Dimension radius and diameter   | Dimension_Radius          |
| Dimension arc                   | Dimension_Arc             |
| Dimension angle                 | Dimension_Angle           |
| Dimension height                | Dimension_Height          |
| Dimension textbox               | Dimension_Textbox         |
| Structural members tab          | -                         |
| Member                          | Structural_Member         |
| Plate                           | Structural_Plate          |
| Diaphragm                       | Structural_Diaphragm      |
| Rigid body                      | Structural_RigidBody      |
| Haunch                          | Haunched_Member           |
| Tapered member                  | Tapered_Member            |
| Concrete beam reinforcement     | Concrete_Beam_Place       |
| Concrete column reinforcement   | Concrete_Column_Place     |
| Point support                   | Support_Point             |
| Line support                    | Support_Edge              |
| Surface support                 | Support_Plate             |
| Shear field                     | ShearField                |
| Link                            | Link                      |
| Smart link                      | SmartLink                 |
| Purlin line                     | PurlinLine_Place          |
| Purlin overlap and support zone | PurlinJoint_Place         |
| Rectangular cutout              | Hole_Rec                  |
| Circular cutout                 | Hole_Circ                 |
| Hexagonal cutout                | Hole_Hex                  |
| Perpendicular plate stiffener   | Stiffener_PlatePerp       |
| Parallel plate stiffener        | Stiffener_PlatePar        |
| Perpendicular section stiffener | Stiffener_Section         |
| Placed joint                    | Joint_Place               |
| Loads tab                       | -                         |
| Point load                      | NodeForce                 |
| Line load                       | MemberForce               |
| Line wind load                  | LineWindForce             |
| Surface load                    | PlateForce                |
| Load transfer surface           | LoadTransferSurface       |
| Line temperature load           | MemberThermal             |
| Surface temperature load        | PlateThermal              |
| Prescribed displacement         | PresDisp                  |
| Change in length                | Elongation                |
| Tension force                   | Pretension                |
| Influence line                  | MovingLoadPath            |
| Influence graph                 | InfluGraph                |
| Wind surface                    | WindSurface               |
| Snow surface                    | SnowSurface               |
| Surface wind load               | SurfWindForce             |
| Surface snow load               | SurfSnowForce             |
| Fire load                       | MemberFireEffect          |
| Mass tab                        | -                         |
| Node mass                       | NodeMass                  |
| Finite element tab              | -                         |
| Constraint                      | Structural_Constraint     |
| Stiffener warping support       | Stiffener_Warping_Support |
| Other                           | -                         |
| Section plane                   | Result_Plane              |

<!-- /wp:table -->

<!-- wp:paragraph -->

More information about object types can be found at the [CREATE ](https://consteelsoftware.com/manual/descript-cspi/create/)command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object attributes:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The object attributes by which the selection will be restricted within the given object type. An arbitrary number of object attributes can be given for one SELECT By_Attribute command. The final selection will contain only those objects for which all the given attribute values are true.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The list of available object attributes depends on the object type. The full list of object attributes can be found at the [CREATE ](https://consteelsoftware.com/manual/descript-cspi/create/)command for each object type.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Attribute values:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The actual value of the given attribute.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Selects specific objects in the model by type and all given object attributes.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
SELECT By_Attribute Structural_Member
Name B1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:loos-hcb/code-block -->

```
SELECT By_Attribute Structural_Member
FE_Type 7DOFelem
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:loos-hcb/code-block -->

```
SELECT By_Attribute Structural_Member
GeomImpW 300
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:loos-hcb/code-block -->

```
SELECT By_Attribute Point
X 0
Y 0
Z 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000
GeomimpW 300

CREATE Mem_ID2 Structural_Member "HEA 200"
3000 0 0
3000 0 3000
GeomimpW 500

SELECT By_Attribute Point
X 0
Y 0
Z 0

SELECT By_Attribute Structural_Member
GeomImpW 300
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## SELECT By_User

<!-- /wp:heading -->

<!-- wp:paragraph -->

Requests manual selection from the user during the script run.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**SELECT By_User**

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                                             |                   |
| ----------------------------------- | -------------- | ------------------------------------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format**                            | **Input options** |
| [Object type](#Object-type-By_User) | Optional       | [Predefined strings](#object-types-By_Type) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of selectable objects can be restricted with this optional parameter. Only 1 object type can be given.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object types: same ones as in case of the By_Type selection.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

With this command the user can manually select objects during the script run. A window will pop up which requests the user to select objects from the model.

<!-- /wp:paragraph -->

<!-- wp:image -->

![This image has an empty alt attribute; its file name is image-25.png](./img/wp-content-uploads-2021-08-image-25.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The steps of the selection are the following:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Click on the select button on the dialogue window
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Select objects in the model
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- End the selection with a right click  
  The window after this step should look like this:
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image -->

![This image has an empty alt attribute; its file name is image-26.png](./img/wp-content-uploads-2021-08-image-26.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Click on OK
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
SELECT By_User
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE MemID1 Structural_member "HEA 200"
0 0 0
0 0 3000

SELECT By_User Structural_Member
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
