---
title: 'DELETE'
description: ""
published: 2023-08-18
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/delete/
hero: ../../../defaultHero.jpg
---
Deletes an object. <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

### Description

With the DELETE command, objects can be deleted from the model. There are 2 different selection methods available through the Selection type parameter.

Objects that are in use can not be deleted. For example if a section is used by a structural member, the section can not be deleted. Attempting to do so will result in an error.

### Syntax

**DELETE** \[Selection type] Selection parameter(s)...

### Command parameters

| **Command parameter**             | **Assignment** | **Value format**                                 | **Input options** |
| --------------------------------- | -------------- | ------------------------------------------------ | ----------------- |
| [Selection type](#selection-type) | Required       | [Predefined strings](#Available-selection-types) | Local, variable   |

#### Selection type:

<span id="Available-selection-types" style={{paddingTop: '80px'}}> Available selection types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Selection type**         | **Description**         |
| -------------------------- | ----------------------- |
| [By_ID](#delete-by_id)     | Deletion by object ID   |
| [By_Type](#delete-by_type) | Deletion by object type |

#### Selection parameter(s):
The available selection parameters and their meaning depends on the chosen selection type. [Detailed description](#detailed-description-of-selection-types) of all selection parameters for each individual selection type can be found below.

### Sample code

```
DELETE By_ID ID1
```

---
## Detailed description of selection types

## DELETE By_ID

Deletes specific objects in the model by ID.

### Syntax

**DELETE By_ID** \[ID1] \[ID2] \[ID3] _etc._

### Command parameters

| **Command parameter** | **Assignment** | **Value format** | **Input options** |
| --------------------- | -------------- | ---------------- | ----------------- |
| [IDs](#ids)           | Required       | String           | Local, variable   |

#### IDs:
Exact identification strings of the objects chosen for deletion. Multiple IDs can be given within one DELETE BY_ID command. IDs need to be separated by spaces.

### Sample code

**Command only:**

```
DELETE BY_ID ID1
```

**With added prerequisites (object creation) and multiple objects:**

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

## DELETE By_Type

Deletes specific objects in the model by type. All objects within the given object type will be deleted, except default objects.

If there is at least one object within the given type, that is used by another object, then the DELETE command will not execute and result in an error. No objects will be deleted in this case. For example if I try to delete all sections, but 1 of the sections is used by a structural member.

### Syntax

**DELETE By_Type** \[Object type]  

### Command parameters

| **Command parameter**               | **Assignment** | **Value format**                            | **Input options** |
| ----------------------------------- | -------------- | ------------------------------------------- | ----------------- |
| [Object type](#object-type)         | Required       | [Predefined strings](#object-types-By_Type) | Local, variable   |

#### Object type:
The type of objects to be deleted. Only 1 object type can be given within one DELETE By_Type command.

<span id="object-types-By_Type" style={{paddingTop: '80px'}}> Available object types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Object type name**   | **Object type**     |
| ---------------------- | ------------------- |
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

### Sample code

**Command only:**

```
DELETE By_Type Structural_Member
```

**With added prerequisites:** (object creation)

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
