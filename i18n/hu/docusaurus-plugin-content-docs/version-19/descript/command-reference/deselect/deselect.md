---
title: 'DESELECT'
description: ""
published: 2022-01-28
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/deselect/
hero: ../../../defaultHero.jpg
---

Deselects objects in the model.

### Description

With the DESELECT command, objects in the model can be deselected from the current selection. There are several different selection methods available through the _Selection type_ parameter.

### Syntax

**DESELECT** [Selection type] Selection parameters...

### Selection types

Available selection types:

| **Selection type**                     | **Description**                             |
| -------------------------------------- | ------------------------------------------- |
| [All](#deselect-all)                   | Deselects all objects in the model          |
| [By_ID](#deselect-by_id)               | Deselection by object ID                    |
| [By_Type](#deselect-by_type)           | Deselection by object type                  |
| [By_Attribute](#deselect-by_attribute) | Deselection by object type and attribute(s) |

### Command parameters

#### Selection type:
The available selection parameters and their meaning depends on the chosen selection type. [Detailed description](#detailed-description-of-selection-types) of all selection parameters for each individual selection type can be found below.

### Sample code
```
DESELECT All
```
---
## Detailed description of selection types

## DESELECT All

Deselects all selected objects in the model.

### Syntax

**DESELECT All**

### Sample code

**Command only:**

```
DESELECT All
```

**With added prerequisites:** (object creation)

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

SELECT ALL

DESELECT ALL
```

## DESELECT By_ID

Deselects specific objects in the model by ID.

### Syntax

**DESELECT By_ID** \[ID1] \[ID2] \[ID3] _etc._

### Command parameters

| **Command parameter** | **Assignment** | **Value format** | **Input options** |
| --------------------- | -------------- | ---------------- | ----------------- |
| [IDs](#ids)           | Required       | String           | Local, variable   |

#### IDs:
Exact identification strings of the objects chosen for deselection. Multiple IDs can be given within one DESELECT BY_ID command. IDs need to be separated by spaces.

### Sample code

**Command only:**

```
DESELECT BY_ID ID1
```

**With added prerequisites (object creation) and multiple objects:**

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

CREATE ID2 Structural_member "HEA 200"
1000 0 0
1000 0 3000

SELECT ALL

DESELECT BY_ID ID1 ID2
```

## DESELECT By_Type

Deselects specific objects in the model by type.

### Syntax

**DESELECT By_Type** [Object type]

### Command parameters

| **Command parameter**               | **Assignment** | **Value format**                            | **Input options** |
| ----------------------------------- | -------------- | ------------------------------------------- | ----------------- |
| [Object type](#Object-type-By_Type) | Required       | [Predefined strings](#object-types-By_Type) | Local, variable   |

#### Object type: {#Object-type-By_Type}
The type of objects to be deselected. Only 1 object type can be given within one DESELECT By_Type command.

<span id="object-types-By_Type" style={{paddingTop: '80px'}}> Available object types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Object type name**            | **Object type**           |
| ------------------------------- | ------------------------- |
| Geometry tab                    | -                         |
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

More information about object types can be found at the [CREATE](/docs/descript/command-reference/create/) command.

### Description

Deselects specific objects in the model by type. All objects within the given object type will be deselected.

### Sample code

**Command only:**

```
DESELECT BY_TYPE Structural_Member
```

**With added prerequisites:** (object creation)

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

CREATE Sup_ID1 Support_Point Mem_ID1 Fixed
0 0 0

SELECT ALL

DESELECT BY_TYPE Structural_Member
```

## DESELECT By_Attribute
Deselects specific objects in the model by type and attribute.

### Syntax

**DESELECT By_Attribute** [Object type]  
[Object attribute 1] [Attribute value 1]  
[Object attribute 2] [Attribute value 2]  
[Object attribute 3] [Attribute value 3]  
_etc._

### Command parameters

| **Command parameter**                                | **Assignment** | **Value format**                                 | **Input options** |
| ---------------------------------------------------- | -------------- | ------------------------------------------------ | ----------------- |
| [Object type](#Object-type-By_Attribute)             | Required       | [Predefined strings](#object-types-By_Attribute) | Local, variable   |
| [Object attributes](#Object-attributes-By_Attribute) | Required       | Predefined strings                               | Local, variable   |
| [Attribute values](#Attribute-values-By_Attribute)   | Required       | String                                           | Local, variable   |

#### Object type: {#Object-type-By_Attribute}
The type of objects to be deselected. Only 1 object type can be given within one DESELECT By_Attribute command.

<span id="object-types-By_Attribute" style={{paddingTop: '80px'}}> Available object types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Object type name**            | **Object type**           |
| ------------------------------- | ------------------------- |
| Geometry tab                    | -                         |
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

More information about object types can be found at the [CREATE](/docs/descript/command-reference/create/) command.

#### Object attributes: {#Object-attributes-By_Attribute}
The object attributes by which the deselection will be restricted within the given object type. An arbitrary number of object attributes can be given for one DESELECT By_Attribute command. The final deselection will affect only those objects for which all the given attribute values are true.

The list of available object attributes depends on the object type. The full list of object attributes can be found at the [CREATE](/docs/descript/command-reference/create/) command for each object type.

#### Attribute values: {#Attribute-values-By_Attribute}
The actual value of the given attribute.

### Description

Deselects specific objects in the model by type and all given object attributes.

### Sample code

**Command only:**

```
DESELECT BY_ATTRIBUTE Structural_Member
GeomImpW 300
```

**With added prerequisites:** (object creation)

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

SELECT ALL

DESELECT BY_ATTRIBUTE Structural_Member
GeomImpW 300
```
