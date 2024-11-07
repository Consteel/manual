---
title: "SET"
description: ""
published: 2023-08-17
redirect_from:
  - https://www.consteelsoftware.com/manual/descript-cspi/set/
hero: ../../../defaultHero.jpg
---

Sets or modifies an attribute value of an object.

### Syntax

**SET** [Object ID] [Object attribute] [New value]

### Command parameters

| **Command parameter**                 | **Assignment** | **Value format**   | **Input options** |
| ------------------------------------- | -------------- | ------------------ | ----------------- |
| [Object ID](#object-id)               | Required       | String             | Local, variable   |
| [Object attribute](#object-attribute) | Required       | Predefined strings | Local, variable   |
| [New value](#new-value)               | Required       | String             | Local, variable   |

#### Object ID:

The ID of the object.

Object IDs from the following object types are accepted:

- Structural members tab:
  - [Structural member](#structural-member)
  - [Structural plate](#structural-plate)
  - [Point support](#point-support)
  - [Line support](#line-support)
- Loads tab:
  - [Point load](#point-load)
  - [Line load](#line-load)

#### Object attribute:

The object attribute to be set. The available selection of object attributes depends on the object type, which is autmatically determined based on the object ID. The available object attributes can be found at the [detailed description of object](#detailed-description-of-object-types) types below.

#### New value:

The new value of the specified attribute.

### Sample code

**Command only:**

```
SET Object_ID Name "New name"
```

**With object creation:**

```
LOAD_SECTION_LIBRARY section "HEA 200"

CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 3000

SET Mem_ID1 Name "New name"
```

---

## Detailed description of object types

## Structural member

Available object attributes:

| **Object attribute name**    | **Object attribute** (type this into Descript) | **Value format**   |
| ---------------------------- | ---------------------------------------------- | ------------------ |
| Name                         | Name                                           | String             |
| Section ID                   | sectionid                                      | Section ID or name |
| Eccentricity - y             | eccentricity_y                                 | Numerical          |
| Eccentricity - z             | eccentricity_z                                 | Numerical          |
| Rotation                     | Rotation                                       | Numerical          |
| Initial bow imperfection L/y | geomimpv                                       | Numerical          |
| Initial bow imperfection L/y | geomimpw                                       | Numerical          |
| Release start point          | ReleaseID_A                                    | Release ID or name |
| Release end point            | ReleaseID_B                                    | Release ID or name |

### Sample code

**All available attributes + object creation:**

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"
LOAD_SECTION_MACRO Sec_ID2 WLD-IH "WLD-IH (Descript)" "S 355 EN 10025-2" 100 10 200 6 100 10

CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 3000

SET Mem_ID1 Name "New name (Descript)"
SET Mem_ID1 SectionID Sec_ID2                   // or: SET Mem_ID1 SectionID "NAME: WLD-IH (Descript)"
SET Mem_ID1 Eccentricity_Y 100
SET Mem_ID1 Eccentricity_Z 100
SET Mem_ID1 Rotation 45
SET Mem_ID1 GeomImpV 200
SET Mem_ID1 GeomImpW 300
SET Mem_ID1 ReleaseID_A yy
SET Mem_ID1 ReleaseID_B zz
```

## Structural Plate

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**    |
| ------------------------- | ---------------------------------------------- | ------------------- |
| Name                      | Name                                           | String              |
| Material ID               | MaterialID                                     | Material ID or name |
| Thickness                 | Thickness                                      | Numerical           |
| Finite element size       | AverageEdgeLength                              | Numerical           |

### Sample code

**All available attributes + object creation:**

```
CREATE Plate_ID1 Structural_Plate "C20/25 EN 1992-1-1:2010" 200
0 0 0
3000 0 0
3000 3000 0

CREATE Concrete_Mat_ID1 Concrete "Custom concrete C25" 2500 31476 25 1.8 2.6 2.35 0.2 0.00001 DiagramRectangle 0.0007 0.0035 1 0.002 0.0035 0.00175 0.0035 2

SET Plate_ID1 Name "New plate name"
SET Plate_ID1 MaterialID Concrete_Mat_ID1       // or: SET Plate_ID1 MaterialID "NAME: Custom concrete C25"
SET Plate_ID1 Thickness 234
SET Plate_ID1 AverageEdgeLength 456
```

## Point support

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                                   |
| ------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| Name                      | Name                                           | String                                             |
| Support type              | SupportID                                      | Support type ID or name                            |
| Eccentricity reference    | EccType                                        | [Predefined strings](#Eccentricity-reference-psup) |
| Eccentricity - y          | EccY                                           | Numerical                                          |
| Eccentricity - z          | EccZ                                           | Numerical                                          |

#### Eccentricity reference:

<span id="Eccentricity-reference-psup" style={{paddingTop: '80px'}}> Valid inputs: </span>

<div style={{paddingBottom: '20px'}}> </div>

| **Eccentricity reference name** | **Eccentricity reference** (type this into Descript) |
| ------------------------------- | ---------------------------------------------------- |
| Reference line (0)              | EccType_C                                            |
| Bottom Left (1)                 | EccType_BL                                           |
| Bottom Middle (2)               | EccType_BM                                           |
| Bottom Right (3)                | EccType_BR                                           |
| Middle Left (4)                 | EccType_ML                                           |
| Middle Middle (5)               | EccType_MM                                           |
| Middle Right (6)                | EccType_MR                                           |
| Top Left (7)                    | EccType_TL                                           |
| Top Middle (8)                  | EccType_TM                                           |
| Top Right (9)                   | EccType_TR                                           |

### Sample code

**All available attributes + object creation:**

```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH "Descript Section" "S 235 EN 10025-2" 100 10 200 6 100 10

CREATE MemberID1 Structural_member "Descript Section"
0 0 0
0 0 3000

CREATE PSupID1 Support_Point MemberID1 Fixed
0 0 0

SET PSupID1 Name "New name"
SET PSupID1 SupportID "NAME: x,y"
SET PSupID1 EccType EccType_BR
SET PSupID1 EccY 21
SET PSupID1 EccZ 33
```

## Line support

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                                   |
| ------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| Name                      | Name                                           | String                                             |
| Support type              | SupportID                                      | Support type ID or name                            |
| Eccentricity reference    | EccType                                        | [Predefined strings](#Eccentricity-reference-lsup) |
| Eccentricity - y          | EccY                                           | Numerical                                          |
| Eccentricity - z          | EccZ                                           | Numerical                                          |

#### Eccentricity reference:

<span id="Eccentricity-reference-lsup" style={{paddingTop: '80px'}}> Valid inputs: </span>

<div style={{paddingBottom: '20px'}}> </div>

| **Eccentricity reference name** | **Eccentricity reference** (type this into Descript) |
| ------------------------------- | ---------------------------------------------------- |
| Reference line (0)              | EccType_C                                            |
| Bottom Left (1)                 | EccType_BL                                           |
| Bottom Middle (2)               | EccType_BM                                           |
| Bottom Right (3)                | EccType_BR                                           |
| Middle Left (4)                 | EccType_ML                                           |
| Middle Middle (5)               | EccType_MM                                           |
| Middle Right (6)                | EccType_MR                                           |
| Top Left (7)                    | EccType_TL                                           |
| Top Middle (8)                  | EccType_TM                                           |
| Top Right (9)                   | EccType_TR                                           |

### Sample code

**All available attributes + object creation:**

```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH "WLD-IH (Descript)" "S 235 EN 10025-2" 100 10 200 6 100 10

CREATE Member_ID1 Structural_member "WLD-IH (Descript)"
0 0 0
0 0 3000

CREATE LSup_ID1 Support_Edge Member_ID1 Fixed
Name "Line support 1 (Descript)"
EccType EccType_TM

SET LSup_ID1 Name "New name"
SET LSup_ID1 SupportID "NAME: Pinned"
SET LSup_ID1 EccType EccType_BR
SET LSup_ID1 EccY 21
SET LSup_ID1 EccZ 33
```

## Point load

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                                    |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| Name                      | Name                                           | String                                              |
| Force in x direction      | X                                              | Numerical                                           |
| Force in y direction      | Y                                              | Numerical                                           |
| Force in z direction      | Z                                              | Numerical                                           |
| Moment around x axis      | MX                                             | Numerical                                           |
| Moment around y axis      | MY                                             | Numerical                                           |
| Moment around z axis      | MZ                                             | Numerical                                           |
| Multiplication factor     | MulFac                                         | Numerical                                           |
| Eccentricity reference    | EccType                                        | [Predefined strings](#Eccentricity-reference-pload) |
| Eccentricity - y          | EccY                                           | Numerical                                           |
| Eccentricity - z          | EccZ                                           | Numerical                                           |

#### Eccentricity reference:

<span id="Eccentricity-reference-pload" style={{paddingTop: '80px'}}> Valid inputs: </span>

<div style={{paddingBottom: '20px'}}> </div>

| **Eccentricity reference name** | **Eccentricity reference** (type this into Descript) |
| ------------------------------- | ---------------------------------------------------- |
| Reference line (0)              | EccType_C                                            |
| Bottom Left (1)                 | EccType_BL                                           |
| Bottom Middle (2)               | EccType_BM                                           |
| Bottom Right (3)                | EccType_BR                                           |
| Middle Left (4)                 | EccType_ML                                           |
| Middle Middle (5)               | EccType_MM                                           |
| Middle Right (6)                | EccType_MR                                           |
| Top Left (7)                    | EccType_TL                                           |
| Top Middle (8)                  | EccType_TM                                           |
| Top Right (9)                   | EccType_TR                                           |

### Sample code

**All available attributes + object creation:**

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P

CREATE LCase_ID1 LoadCase
Name "Load case 1 (Descript)"
LoadGroupID LG_ID1

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

CREATE PLoad_ID1 NodeForce LCase_ID1 Mem_ID1 local
0 0 3000
-100 0 0
0 0 0

SET PLoad_ID1 Name "New name"
SET PLoad_ID1 X 10
SET PLoad_ID1 Y 20
SET PLoad_ID1 Z 30
SET PLoad_ID1 MX 40
SET PLoad_ID1 MY 50
SET PLoad_ID1 MZ 60
SET PLoad_ID1 MulFac 2
SET PLoad_ID1 EccType EccType_BL
SET PLoad_ID1 EccY 7
SET PLoad_ID1 EccZ 8
```

## Line load

Available object attributes:

| **Object attribute name**              | **Object attribute** (type this into Descript) | **Value format**                                    |
| -------------------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| Name                                   | Name                                           | String                                              |
| X force component at reference point 1 | X1                                             | Numerical                                           |
| Y force component at reference point 1 | Y1                                             | Numerical                                           |
| Z force component at reference point 1 | Z1                                             | Numerical                                           |
| X force component at reference point 2 | X2                                             | Numerical                                           |
| Y force component at reference point 2 | Y2                                             | Numerical                                           |
| Z force component at reference point 2 | Z2                                             | Numerical                                           |
| Multiplication factor                  | MulFac                                         | Numerical                                           |
| Reference point 1                      | End1                                           | [Predefined strings](#Reference-point-1-lload)      |
| Reference point 2                      | End2                                           | [Predefined strings](#Reference-point-2-lload)      |
| Distance 1                             | Pos1                                           | Numerical                                           |
| Distance 2                             | Pos2                                           | Numerical                                           |
| Eccentricity reference                 | EccType                                        | [Predefined strings](#Eccentricity-reference-lload) |
| Eccentricity - y                       | EccY                                           | Numerical                                           |
| Eccentricity - z                       | EccZ                                           | Numerical                                           |

#### Reference point 1:

<span id="Reference-point-1-lload" style={{paddingTop: '80px'}}> Valid inputs: </span>

- EndA (or 0) → from end A
- EndB (or 1) → from end B

#### Reference point 2:

<span id="Reference-point-2-lload" style={{paddingTop: '80px'}}> Valid inputs: </span>

- EndA (or 0) → from end A
- EndB (or 1) → from end B
- Relative (or 2) → Relative

#### Eccentricity reference:

<span id="Eccentricity-reference-lload" style={{paddingTop: '80px'}}> Valid inputs: </span>

<div style={{paddingBottom: '20px'}}> </div>

| **Eccentricity reference name** | **Eccentricity reference** (type this into Descript) |
| ------------------------------- | ---------------------------------------------------- |
| Reference line (0)              | EccType_C                                            |
| Bottom Left (1)                 | EccType_BL                                           |
| Bottom Middle (2)               | EccType_BM                                           |
| Bottom Right (3)                | EccType_BR                                           |
| Middle Left (4)                 | EccType_ML                                           |
| Middle Middle (5)               | EccType_MM                                           |
| Middle Right (6)                | EccType_MR                                           |
| Top Left (7)                    | EccType_TL                                           |
| Top Middle (8)                  | EccType_TM                                           |
| Top Right (9)                   | EccType_TR                                           |

### Sample code

**All available attributes + object creation:**

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

LOAD_SECTION_LIBRARY Sec_ID1 "IPE 200"

CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P

CREATE LCase_ID1 LoadCase
Name "Load case 1 (Descript)"
LoadGroupID LG_ID1

CREATE Mem_ID1 Structural_member "IPE 200"
0 0 0
3000 0 0

CREATE LLoad_ID1 MemberForce LCase_ID1 Mem_ID1 local
0 1
200 400
0 0 -10
0 0 -12

SET LLoad_ID1 Name "New name"
SET LLoad_ID1 X1 1
SET LLoad_ID1 Y1 2
SET LLoad_ID1 Z1 3
SET LLoad_ID1 X2 4
SET LLoad_ID1 Y2 5
SET LLoad_ID1 Z2 6
SET LLoad_ID1 MulFac 2
SET LLoad_ID1 End1 EndA
SET LLoad_ID1 End2 Relative
SET LLoad_ID1 Pos1 500
SET LLoad_ID1 Pos2 2000
SET LLoad_ID1 EccType EccType_BR
SET LLoad_ID1 EccY 20
SET LLoad_ID1 EccZ 40
```
