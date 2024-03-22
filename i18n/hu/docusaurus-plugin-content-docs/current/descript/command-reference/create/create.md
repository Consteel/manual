---
title: 'CREATE'
description: ""
published: 2023-10-26
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/create/
hero: ./img/wp-content-uploads-2021-09-image-11.png
---
<!-- wp:paragraph -->

Creates an object.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE **  
_Object parameters..._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                         |                |                                               |                   |
| --------------------------------------- | -------------- | --------------------------------------------- | ----------------- |
| **Command parameter**                   | **Assignment** | **Value format**                              | **Input options** |
| [Object ID](#Oject-ID)                  | Required       | String                                        | Local, variable   |
| [Object type](#Object-type)             | Required       | [Predefined strings](#Available-object-types) | Local, variable   |
| [Object parameters](#Object-parameters) | Required       | -                                             | -                 |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created. The string can contain letters, numbers and special characters as well.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Object ID-s have to be unique for every object across all object types (eg.: sections, members, plates, loads, etc.).

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of object to be created.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                                                                                          |                     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **Object type name**                                                                                                                     | **Object type**     |
| Structural members tab                                                                                                                   | -                   |
| [Structural member](#Structural-member)                                                                                                  | Structural_Member   |
| [Structural Plate](#Structural-plate)                                                                                                    | Structural_Plate    |
| [Haunch](#Haunch)                                                                                                                        | Haunched_Member     |
| [Tapered member](#Tapered-member)                                                                                                        | Tapered_Member      |
| [Steel material](#Steel-material) _(since CS 17)_                                                                                        | Steel               |
| [Coated steel material](https://www.consteelsoftware.com/wp-admin/post.php?post=67835&action=edit#Coated-steel-material) _(since CS 17)_ | Coated_Steel        |
| [Concrete material](#Concrete-material) _(since CS 17)_                                                                                  | Concrete            |
| [Rebar material](#Rebar-material) _(since CS 17)_                                                                                        | Rebar               |
| [Point support](#Point-support)                                                                                                          | Support_Point       |
| [Line support](#Line-support)                                                                                                            | Support_Edge        |
| [Surface support](#Surface-support) _(since CS 17)_                                                                                      | Support_Plate       |
| [Point support type](#Point-support-type) _(since CS 17)_                                                                                | Support             |
| [Release type](#Release-type) _(since CS 17)_                                                                                            | Release             |
| [Link](https://www.consteelsoftware.com/wp-admin/post.php?post=67835&action=edit#Link)                                                   | Link                |
| Loads tab                                                                                                                                | -                   |
| [Load group](#Load-Group)                                                                                                                | LoadGroup           |
| [Load case](#Load-Case)                                                                                                                  | LoadCase            |
| [Load combination](#Load-combination)                                                                                                    | LoadCombination     |
| [Point load](#Point-load)                                                                                                                | NodeForce           |
| [Line load](#Line-load)                                                                                                                  | MemberForce         |
| [Surface load (uniform)](<#Surface-load-(uniform)>)                                                                                      | PlateForce_Uniform  |
| [Surface load (linear)](<#Surface-load-(linear)>)                                                                                        | PlateForce_Linear   |
| [Load transfer surface](#Load-transfer-surface)                                                                                          | LoadTransferSurface |
| Mass tab                                                                                                                                 | -                   |
| [Mass group](#Mass-group)                                                                                                                | MassGroup           |
| [Mass case](#Mass-case)                                                                                                                  | MassCase            |
| [Mass combination](#Mass-combination)                                                                                                    | MassCombination     |
| [Point mass](#Point-mass)                                                                                                                | NodeMass            |
| Other                                                                                                                                    | -                   |
| [Portion](#Portion)                                                                                                                      | Portion             |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object parameters:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The available object parameters and their meaning depends on the chosen object type. [Detailed description](#Detailed-description-of-object-types) of all object parameters for each individual object type can be found below.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Creates a single object.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->

# Detailed description of object types

<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"left"} -->

## Structural member

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the beam creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":24577,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-11.png)](./img/wp-content-uploads-2021-09-image-11.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Structural_Member **  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]  
Name  
ReleaseID_A  
ReleaseID_B  
Eccentricity_y  
Eccentricity_z  
Rotation \[Rotation]  
Geomimpv  
Geomimpw  
Fe_type  
Convergencetype  
Convergence  
AverageEdgeLength_Web  
AverageEdgeLength_flange

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                   |                |                                         |                   |
| ----------------------------------------------------------------- | -------------- | --------------------------------------- | ----------------- |
| **Command parameter**                                             | **Assignment** | **Value format**                        | **Input options** |
| [Object ID](#Object-ID-mem)                                       | Required       | String                                  | Local, variable   |
| [Section name](#Section-name-mem)                                 | Required       | String                                  | Local, variable   |
| [x1, y1, z1](#x1,-y1,-z1-mem)                                     | Required       | Integer                                 | Local, variable   |
| [x2, y2, z2](#x2,-y2,-z2-mem)                                     | Required       | Integer                                 | Local, variable   |
| [Object name](#Object-name-mem)                                   | Optional       | String                                  | Local, variable   |
| [Release start](#Release-start-mem)                               | Optional       | String                                  | Local, variable   |
| [Release end](#Release-end-mem)                                   | Optional       | String                                  | Local, variable   |
| [Eccentricity y](#Eccentricity-y-mem)                             | Optional       | Integer                                 | Local, variable   |
| [Eccentricity z](#ccentricity-z-mem)                              | Optional       | Integer                                 | Local, variable   |
| [Rotation](#Rotation-mem)                                         | Optional       | Numerical                               | Local, variable   |
| [Initial bow imperfection L/y](#Initial-bow-imperfection-L/y-mem) | Optional       | Numerical                               | Local, variable   |
| [Initial bow imperfection L/z](#Initial-bow-imperfection-L/z-mem) | Optional       | Numerical                               | Local, variable   |
| [FE type](#FE-type-mem)                                           | Optional       | [Predefined strings](#FE-types-mem)     | Local, variable   |
| [FE generation type](#FE-generation-type-mem)                     | Optional       | [Predefined strings](#FE-gen-types-mem) | Local, variable   |
| [Number of FEs](#Number-of-FEs-mem)                               | Optional       | Integer                                 | Local, variable   |
| [FE size web](#FE-size-web-mem)                                   | Optional       | Numerical                               | Local, variable   |
| [FE size flange](#FE-size-flange-mem)                             | Optional       | Numerical                               | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Section name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the section to be used for the member.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x1, y1, z1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the starting point of the structural member.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x2, y2, z2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the end point of the structural member.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the structural member.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Release start:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Release type at the starting point of the structural member. Any previously created release type name can be used.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Consteel has these release types already created by default:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Continuous (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- w
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- xx,yy,zz,w
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- yy
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- yy,zz
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- yy,zz,w
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- zz
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Release end:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Release type at the end point of the structural member. Any previously created release type name can be used. The premade and default parameter inputs are the same as in case of the [Release start](#Release-start-mem) parameter.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Eccentricity y:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Structural member eccentricity in the local y direction.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Eccentricity z:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Structural member eccentricity in the local z direction.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Rotation:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Axial rotation of the structural member.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Initial bow imperfection L/y:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Initial bow imperfection of the member in the local y direction.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Initial bow imperfection L/z:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Initial bow imperfection of the member in the local z direction.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### FE type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Finite element type.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available finite element types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                              |                         |
| ---------------------------- | ----------------------- |
| **Finite element type name** | **Finite element type** |
| 6 Degree Of Freedom beam     | 6DOFelem                |
| 7 Degree Of Freedom beam     | 7DOFelem                |
| Tension bar                  | TensionBar              |
| Shell                        | Shell                   |
| Tension bar (X Brace)        | XBrace                  |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### FE generation type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Finite element generation type.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Automatic
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Manual
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Number of FEs:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Number of finite elements. This parameter only applies if the FE type is "6DOFelem" or "7DOFelem".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### FE size web:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Maximum edge size of shell element in the web. This parameter only applies if the FE type is "Shell".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### FE size flange:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Maximum edge size of shell element in the web. This parameter only applies if the FE type is "Shell".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 1000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With section creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY section "HEA 200"

CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 1000
Name "Member 1"
ReleaseID_A Continuous
ReleaseID_B Continuous
Eccentricity_y 0
Eccentricity_z 0
Rotation 0
Geomimpv 0
Geomimpw 0
Fe_type 7dofelem
Convergencetype manual
Convergence 10
AverageEdgeLength_Web 10
AverageEdgeLength_flange 20
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Structural plate

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the plate creation dialogue in Consteel, with the "draw polygon" option selected:

<!-- /wp:paragraph -->

<!-- wp:image {"id":24596,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-14.png)](./img/wp-content-uploads-2021-09-image-14.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Structural_Plate **  
Name  
Group  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]  
\[x3] \[y3] \[z3]  
_etc._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                         |                |                  |                   |
| --------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**                   | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-pla)             | Required       | String           | Local, variable   |
| [Material name](#Material-name-pla)     | Required       | String           | Local, variable   |
| [Plate thickness](#Plate-thickness-pla) | Required       | Numerical        | Local, variable   |
| [FE size](#FE-size-pla)                 | Optional       | Numerical        | Local, variable   |
| [Object name](#Object-name-pla)         | Optional       | String           | Local, variable   |
| [Group ID](#Group-ID-pla)               | Optional       | String           | Local, variable   |
| [x1, y1, z1](#x1,-y1,-z1-pla)           | Required       | Integer          | Local, variable   |
| [x2, y2, z2](#x2,-y2,-z2-pla)           | Required       | Integer          | Local, variable   |
| [x3, y3, z3](#x3,-y3,-z3-pla)           | Required       | Integer          | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Material name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the material to be used.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Plate thickness:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Thickness of the plate in \[mm].

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### FE size:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Maximum edge size of shell elements in \[mm].

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the structural plate.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Group ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the element group.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x1, y1, z1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of 1. point of the structural plate.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x2, y2, z2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of 2. point of the structural plate.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x3, y3, z3:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of 3. point of the structural plate. At least 3 points have to be defined for a plate creation. More point coordinates can be added into subsequent rows, for a polygon shape defined by more than 3 points.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Minimal parameters and 3 points:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Plate_ID1 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0 0 0
3000 0 0
3000 3000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### All parameters and 4 points:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Plate_ID1 Structural_Plate "C25/30 EN 1992-1-1:2010" 200 400
Name "Plate 1"
Group Group_ID1
0 0 0
3000 0 0
3000 3000 0
0 3000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Haunch

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the haunch creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":27602,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-11-image-1.png)

Hot rolled or welded haunch

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Hot rolled haunch:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Haunched_Member**  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Welded haunch:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Haunched_Member**  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                   |                |                                           |                   |
| --------------------------------- | -------------- | ----------------------------------------- | ----------------- |
| **Command parameter**             | **Assignment** | **Value format**                          | **Input options** |
| [Object ID](#Object-ID-hau)       | Required       | String                                    | Local, variable   |
| [Member ID](#Section-name-hau)    | Required       | String                                    | Local, variable   |
| [Format](#Format-hau)             | Required       | [Predefined strings](#Format-options-hau) | Local, variable   |
| [L](#L-hau)                       | Required       | Numerical                                 | Local, variable   |
| [hs](#hs-hau)                     | Required       | Numerical                                 | Local, variable   |
| [he](#he-hau)                     | Required       | Numerical                                 | Local, variable   |
| [Section name](#Section-name-hau) | Required       | String                                    | Local, variable   |
| [tw](#tw-hau)                     | Required       | Numerical                                 | Local, variable   |
| [b](#b-hau)                       | Required       | Numerical                                 | Local, variable   |
| [tf](#tf-hau)                     | Required       | Numerical                                 | Local, variable   |
| [x1, y1, z1](#x1,-y1,-z1-hau)     | Required       | Integer                                   | Local, variable   |
| [x2, y2, z2](#x2,-y2,-z2-hau)     | Required       | Integer                                   | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the previously created structural member on which the haunch should be placed.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Format:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Alignment of the haunch.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available input options:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Lower
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Symmetric
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Upper
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### L:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Length of the haunch.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### hs:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Start height of the haunch.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### he:

<!-- /wp:heading -->

<!-- wp:paragraph -->

End height of the haunch.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Section name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the section to be used for the haunch. Only applicable if the haunch type is hot rolled.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### tw:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Web thickness of the haunch. Only applicable if the haunch type is welded.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### b:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Flange width of the haunch. Only applicable if the haunch type is welded.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### tf:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Flange thickness of the haunch. Only applicable if the haunch type is welded.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x1, y1, z1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the starting point of the haunch.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x2, y2, z2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates for setting the direction of the haunch.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Hot rolled haunch:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Hau_ID1 Haunched_Member Mem_ID1 lower 2000 600 50 "IPE 300"
0 0 0
1 0 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

Welded haunch:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Hau_ID2 Haunched_Member Mem_ID2 lower 2000 600 50 6 150 10
0 2000 0
1 2000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With section and member creation:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Hot rolled haunch:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 300"

CREATE Mem_ID1 Structural_Member "IPE 300"
0 0 0
5000 0 0

CREATE Hau_ID1 Haunched_Member Mem_ID1 lower 2000 600 50 "IPE 300"
0 0 0
1 0 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

Welded haunch:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO Sec_ID2 WLD-IH "WLD-IH (Descript)" "S 235 EN 10025-2" 150 10 300 8 150 10

CREATE Mem_ID2 Structural_Member "WLD-IH (Descript)"
0 2000 0
5000 2000 0

CREATE Hau_ID2 Haunched_Member Mem_ID2 lower 2000 600 50 6 150 10
0 2000 0
1 2000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Tapered member

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the tapered member creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":24608,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-16.png)](./img/wp-content-uploads-2021-09-image-16.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Tapered_Member **  
Format \[Format]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                                          |                   |
| ----------------------------------- | -------------- | ---------------------------------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format**                         | **Input options** |
| [Object ID](#Object-ID-tm)          | Required       | String                                   | Local, variable   |
| [Member ID](#Member-ID-tm)          | Required       | String                                   | Local, variable   |
| [Start height](#Starting-height-tm) | Required       | Numerical                                | Local, variable   |
| [End height](#End-height-tm)        | Required       | Numerical                                | Local, variable   |
| [Format](#Format-tm)                | Optional       | [Predefined strings](#Format-options-tm) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the previously created structural member on which the tapering should be placed.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Starting height:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Starting height of the tapered member in \[mm].

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### End height:

<!-- /wp:heading -->

<!-- wp:paragraph -->

End height of the tapered member in \[mm].

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Format:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Alignment of the axis of the tapered member.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available input options:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Bottom (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Centric
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Top
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Tapered_ID1 Tapered_Member MemID0 400 200
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (section and member definition) and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH Descript_Section "S 235 EN 10025-2" 100 10 200 6 100 10

CREATE Mem_ID1 Structural_Member Descript_Section
0 0 0
0 0 1000

CREATE Tapered_ID1 Tapered_Member Mem_ID1 400 200
Format Centric
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Steel material

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the steel material creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":67838,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-5.png)](./img/wp-content-uploads-2023-08-image-5.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Steel** \[Name] \[ρ] \[E] \[ν] \[α] \[αfi] \[fy1] \[fy2] \[fu1] \[fu2] \[ty] \[tu]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                             |                                       |                |                  |                   |
| --------------------------- | ------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**       | **Parameter description**             | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-stl) | -                                     | Required       | String           | Local, variable   |
| [Name](#Name-stl)           | -                                     | Required       | String           | Local, variable   |
| ρ                           | Density                               | Required       | Numerical        | Local, variable   |
| E                           | Elastic modulus                       | Required       | Numerical        | Local, variable   |
| ν                           | Poisson factor                        | Required       | Numerical        | Local, variable   |
| α                           | Thermal expansion coefficient         | Required       | Numerical        | Local, variable   |
| αfi                         | Thermal expansion coefficient in fire | Required       | Numerical        | Local, variable   |
| fy1                         | Yield strength 1                      | Required       | Numerical        | Local, variable   |
| fy2                         | Yield strength 2                      | Required       | Numerical        | Local, variable   |
| fu1                         | Ultimate strength 1                   | Required       | Numerical        | Local, variable   |
| fu2                         | Ultimate strength 2                   | Required       | Numerical        | Local, variable   |
| ty                          | Thickness Y                           | Required       | Numerical        | Local, variable   |
| tu                          | Thickness U                           | Required       | Numerical        | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the material.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Steel_Mat_ID1 Steel "Custom steel name" 7850 210000 0.3 0.000012 0.000014 235 215 360 360 40 40
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Coated steel material

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the coated steel material creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":67848,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-6.png)](./img/wp-content-uploads-2023-08-image-6.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Coated_Steel** \[Name] \[ρ] \[E] \[ν] \[α] \[αfi] \[fyb] \[fu] \[tcoat]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                              |                                       |                |                  |                   |
| ---------------------------- | ------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**        | **Parameter description**             | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-cstl) | -                                     | Required       | String           | Local, variable   |
| [Name](#Name-cstl)           | -                                     | Required       | String           | Local, variable   |
| ρ                            | Density                               | Required       | Numerical        | Local, variable   |
| E                            | Elastic modulus                       | Required       | Numerical        | Local, variable   |
| ν                            | Poisson factor                        | Required       | Numerical        | Local, variable   |
| α                            | Thermal expansion coefficient         | Required       | Numerical        | Local, variable   |
| αfi                          | Thermal expansion coefficient in fire | Required       | Numerical        | Local, variable   |
| fyb                          | Basic yield strength                  | Required       | Numerical        | Local, variable   |
| fu                           | Ultimate strength                     | Required       | Numerical        | Local, variable   |
| tcoat                        | Coating thickness                     | Required       | Numerical        | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the material.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE CSteel_Mat_ID1 Coated_Steel "Custom coated steel name" 7850 210000 0.3 0.000012 0.000014 350 420 0.02
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Concrete material

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the concrete material creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":67859,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-7.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Concrete **\[Name] \[ρ] \[Ecm] \[fck] \[fctk,0,05] \[fctm] \[φ(∞,t0)] \[ν] \[α] \[εc1] \[εcu1] \[η] \[εc2] \[εcu2] \[εc3] \[εcu3] \[n]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                         |                                       |                |                  |                   |
| --------------------------------------- | ------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**                   | **Parameter description**             | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-concr)           | -                                     | Required       | String           | Local, variable   |
| [Name](#Name-concr)                     | -                                     | Required       | String           | Local, variable   |
| ρ                                       | Density                               | Required       | Numerical        | Local, variable   |
| Ecm                                     | Secant modulus of elasticity          | Required       | Numerical        | Local, variable   |
| fck                                     | Compressive strength                  | Required       | Numerical        | Local, variable   |
| fctk,0,05                               | Characteristic tensile strength       |                |                  |                   |
| fctm                                    | Mean tensile strength                 |                |                  |                   |
| φ(∞,t0)                                 | Final value of creep coefficient      |                |                  |                   |
| ν                                       | Poisson factor                        | Required       | Numerical        | Local, variable   |
| α                                       | Thermal expansion coefficient         | Required       | Numerical        | Local, variable   |
| [Material model](#Material-model-concr) | -                                     | Required       | Numerical        | Local, variable   |
| εc1                                     | Yield strain #1                       | Required       | Numerical        | Local, variable   |
| εcu1                                    | Ultimite strain #1                    | Required       | Numerical        | Local, variable   |
| η                                       | Compression strength reduction factor | Required       | Numerical        | Local, variable   |
| εc2                                     | Yield strain #2                       | Required       | Numerical        | Local, variable   |
| εcu2                                    | Ultimite strain #2                    | Required       | Numerical        | Local, variable   |
| εc3                                     | Yield strain #3                       | Required       | Numerical        | Local, variable   |
| εcu3                                    | Ultimite strain #3                    | Required       | Numerical        | Local, variable   |
| n                                       | Exponent                              | Required       | Numerical        | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the material.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Material model:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available material models:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- DiagramRectangle
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- DiagramBilinear
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- DiagramParabolaRect
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Concrete_Mat_ID1 Concrete "Custom concrete name" 2500 31476 25 1.8 2.6 2.35 0.2 0.00001 DiagramRectangle 0.0007 0.0035 1 0.002 0.0035 0.00175 0.0035 2
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Rebar material

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the reinforcement material creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":67870,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-8.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Rebar** \[Name] \[ρ] \[E] \[ν] \[α] \[fyk] \[εuk]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                             |                                       |                |                  |                   |
| --------------------------- | ------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**       | **Parameter description**             | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-reb) | -                                     | Required       | String           | Local, variable   |
| [Name](#Name-reb)           | -                                     | Required       | String           | Local, variable   |
| ρ                           | Density                               | Required       | Numerical        | Local, variable   |
| E                           | Elastic modulus                       | Required       | Numerical        | Local, variable   |
| ν                           | Poisson factor                        | Required       | Numerical        | Local, variable   |
| α                           | Thermal expansion coefficient         | Required       | Numerical        | Local, variable   |
| fyk                         | Characteristic yield strength         | Required       | Numerical        | Local, variable   |
| εuk                         | Characteristic strain at maximum load | Required       | Numerical        | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the material.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Rebar_Mat_ID1 Rebar "Custom rebar name" 7850 200000 0.3 0.00001 500 0.05
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Point support

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the point support creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":24656,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-20.png)](./img/wp-content-uploads-2021-09-image-20.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Support_Point **  
\[x] \[y] \[z]  
EccType

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                        |                |                                             |                   |
| ------------------------------------------------------ | -------------- | ------------------------------------------- | ----------------- |
| **Command parameter**                                  | **Assignment** | **Value format**                            | **Input options** |
| [Object ID](#Object-ID-psup)                           | Required       | String                                      | Local, variable   |
| [Member ID](#Member-ID-psup)                           | Required       | Member name or ID                           | Local, variable   |
| [Support type](#Support-type-psup)                     | Required       | String                                      | Local, variable   |
| [x, y, z](#x,-y,-z_psup)                               | Required       | Numerical                                   | Local, variable   |
| [Eccentricity reference](#Eccentricity-reference-psup) | Optional       | [Predefined strings](#Ecctype-options-psup) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the previously created structural member to which the support will be attached. The accepted input is either a member ID or the name of the member with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Support type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of support. Any previously created support type name can be used.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Consteel has these support types already created by default:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Fixed
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y,z
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y,z,xx
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y,z,yy
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y,z,zz
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y,z,xx
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,z,yy
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y,zz
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y,z
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,z
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- z
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- w
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### x, y, z:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the point support.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Eccentricity reference:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                            |
| ------------------------------- | -------------------------- |
| **Eccentricity reference name** | **Eccentricity reference** |
| Reference line (0)              | EccType_C                  |
| Bottom Left (1)                 | EccType_BL                 |
| Bottom Middle (2)               | EccType_BM                 |
| Bottom Right (3)                | EccType_BR                 |
| Middle Left (4)                 | EccType_ML                 |
| Middle Middle (5)               | EccType_MM                 |
| Middle Right (6)                | EccType_MR                 |
| Top Left (7)                    | EccType_TL                 |
| Top Middle (8)                  | EccType_TM                 |
| Top Right (9)                   | EccType_TR                 |

<!-- /wp:table -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE PSup_ID1 Support_Point Member_ID1 x,y,z
0 0 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (section and member definition) and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH "Descript Section" "S 235 EN 10025-2" 100 10 200 6 100 10

CREATE Member_ID1 Structural_member "Descript Section"
0 0 0
0 0 3000

CREATE PSup_ID1 Support_Point Member_ID1 Fixed
0 0 0
EccType EccType_TM
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Line support

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the line support creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25355,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-63.png)](./img/wp-content-uploads-2021-09-image-63.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Support_Edge**  
Name  
CoordSys  
EccType

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                        |                |                                                                                                                                             |                   |
| ------------------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Command parameter**                                  | **Assignment** | **Value format**                                                                                                                            | **Input options** |
| [Object ID](#Object-ID-lsup)                           | Required       | String                                                                                                                                      | Local, variable   |
| [Member ID](#Member-ID-lsup)                           | Required       | Member name or ID                                                                                                                           | Local, variable   |
| [Support type](#Support-type-lsup)                     | Required       | String                                                                                                                                      | Local, variable   |
| [Object name](#Object-name-lsup)                       | Optional       | String                                                                                                                                      | Local, variable   |
| [Coordinate system](#Coordinate-system-lsup)           | Optional       | [](#Coord-Sys-inputs-lsup)[Predefined strings](https://consteelsoftware.com/wp-admin/post.php?post=24566&action=edit#Coord-Sys-inputs-lsup) | Local, variable   |
| [Eccentricity reference](#Eccentricity-reference-lsup) | Optional       | [Predefined strings](#Ecctype-options-lsup)                                                                                                 | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the previously created structural member to which the support will be attached. The accepted input is either a member ID or the name of the member with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Support type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of support. Any previously created support type name can be used.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Consteel has these support types already created by default:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Fixed
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Pinned
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y,xx
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the line support.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Coordinate system:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With this parameter it can be specified which coordinate system to use for the load definition.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Global (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Local
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Eccentricity reference:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                            |
| ------------------------------- | -------------------------- |
| **Eccentricity reference name** | **Eccentricity reference** |
| Reference line (0)              | EccType_C                  |
| Bottom Left (1)                 | EccType_BL                 |
| Bottom Middle (2)               | EccType_BM                 |
| Bottom Right (3)                | EccType_BR                 |
| Middle Left (4)                 | EccType_ML                 |
| Middle Middle (5)               | EccType_MM                 |
| Middle Right (6)                | EccType_MR                 |
| Top Left (7)                    | EccType_TL                 |
| Top Middle (8)                  | EccType_TM                 |
| Top Right (9)                   | EccType_TR                 |

<!-- /wp:table -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LSup_ID1 Support_Edge Member_ID1 Fixed
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (section and member definition) and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH "WLD-IH (Descript)" "S 235 EN 10025-2" 100 10 200 6 100 10

CREATE Member_ID1 Structural_member "WLD-IH (Descript)"
0 0 0
0 0 3000

CREATE LSup_ID1 Support_Edge Member_ID1 Fixed
Name "Line support 1 (Descript)"
CoordSys Local
EccType EccType_TM
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Surface support

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the surface support creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":67880,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-9.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Support_Plate**  
Name  
CoordSys

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                              |                |                                                                                                                                             |                   |
| -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Command parameter**                        | **Assignment** | **Value format**                                                                                                                            | **Input options** |
| [Object ID](#Object-ID-ssup)                 | Required       | String                                                                                                                                      | Local, variable   |
| [Plate ID](#Member-ID-lsup)                  | Required       | Plate name or ID                                                                                                                            | Local, variable   |
| [Support type](#Support-type-ssup)           | Required       | String                                                                                                                                      | Local, variable   |
| [Object name](#Object-name-ssup)             | Optional       | String                                                                                                                                      | Local, variable   |
| [Coordinate system](#Coordinate-system-ssup) | Optional       | [](#Coord-Sys-inputs-lsup)[Predefined strings](https://consteelsoftware.com/wp-admin/post.php?post=24566&action=edit#Coord-Sys-inputs-lsup) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Plate ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the previously created structural plate to which the support will be attached. The accepted input is either a plate ID or the name of the plate with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Support type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of support. Any previously created surface support type name can be used.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the surface support.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Coordinate system:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With this parameter it can be specified which coordinate system to use for the load definition.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Global (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Local
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE SurfSup_ID1 Support_Plate Plate_ID1 Fixed
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (plate creation) and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Plate_ID1 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0 0 0
3000 0 0
3000 3000 0

CREATE SurfSup_ID1 Support_Plate Plate_ID1 Fixed
Name "Surface support 1"
CoordSys Local
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Point support type

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the point support type creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":67892,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-10.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Support** \[Name] \[x] \[y] \[z] \[xx] \[yy] \[zz] \[w]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                |                |                                                               |                   |
| ---------------------------------------------- | -------------- | ------------------------------------------------------------- | ----------------- |
| **Command parameter**                          | **Assignment** | **Value format**                                              | **Input options** |
| [Object ID](#Object-ID-psuptype)               | Required       | String                                                        | Local, variable   |
| [Name](#Name-psuptype)                         | Required       | String                                                        | Local, variable   |
| [x, y, z, xx, yy, zz, w](#DOF-params-psuptype) | Required       | [Predefined strings or numerical](#Available-inputs-psuptype) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the object that will be created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Degree of freedom (DOF) parameters: x, y, z, xx, yy, zz, w

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                   |                                                |                         |
| ----------------- | ---------------------------------------------- | ----------------------- |
| **DOF parameter** | **Parameter description**                      | **Stiffness dimension** |
| x                 | Translational degree of freedom in x direction | kN/mm                   |
| y                 | Translational degree of freedom in y direction | kN/mm                   |
| z                 | Translational degree of freedom in z direction | kN/mm                   |
| xx                | Rotational degree of freedom around x axis     | kNm/rad                 |
| yy                | Rotational degree of freedom around y axis     | kNm/rad                 |
| zz                | Rotational degree of freedom around z axis     | kNm/rad                 |
| w                 | Warping                                        | kNm2/(rad/m)            |

<!-- /wp:table -->

<!-- wp:paragraph -->

All DOF parameters work similarly. Each DOF can be fixed, free, or semi-rigid.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Fix
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Free
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Numerical input (eg. 1.234)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

If a numerical input is given then the corresponding DOF will be semi-rigid, and the given number will become the stiffness of that DOF. The dimension of the stiffness depends on which DOF it is applied to. The actual stiffness dimensions can be seen in the table above for every different DOF.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE PSup_Type_ID1 Support "Custom support type name" Fix Free 1.234 Fix Fix Fix Fix
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Release type

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the release type creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":67903,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-11.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Release** \[Name] \[x] \[y] \[z] \[xx] \[yy] \[zz] \[w]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                               |                |                                                              |                   |
| --------------------------------------------- | -------------- | ------------------------------------------------------------ | ----------------- |
| **Command parameter**                         | **Assignment** | **Value format**                                             | **Input options** |
| [Object ID](#Object-ID-reltype)               | Required       | String                                                       | Local, variable   |
| [Name](#Name-reltype)                         | Required       | String                                                       | Local, variable   |
| [x, y, z, xx, yy, zz, w](#DOF-params-reltype) | Required       | [Predefined strings or numerical](#Available-inputs-reltype) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the object that will be created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Degree of freedom (DOF) parameters: x, y, z, xx, yy, zz, w

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                   |                                                |                         |
| ----------------- | ---------------------------------------------- | ----------------------- |
| **DOF parameter** | **Parameter description**                      | **Stiffness dimension** |
| x                 | Translational degree of freedom in x direction | kN/mm                   |
| y                 | Translational degree of freedom in y direction | kN/mm                   |
| z                 | Translational degree of freedom in z direction | kN/mm                   |
| xx                | Rotational degree of freedom around x axis     | kNm/rad                 |
| yy                | Rotational degree of freedom around y axis     | kNm/rad                 |
| zz                | Rotational degree of freedom around z axis     | kNm/rad                 |
| w                 | Warping                                        | kNm2/(rad/m)            |

<!-- /wp:table -->

<!-- wp:paragraph -->

All DOF parameters work similarly. Each DOF can be fixed, free, or semi-rigid.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Fix
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Free
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Numerical input (eg. 1.234)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

If a numerical input is given then the corresponding DOF will be semi-rigid, and the given number will become the stiffness of that DOF. The dimension of the stiffness depends on which DOF it is applied to. The actual stiffness dimensions can be seen in the table above for every different DOF.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Release_Type_ID1 Release "Custom release type name" Fix Free 1.234 Fix Fix Fix Fix
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Link

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the link element creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":24639,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-18.png)](./img/wp-content-uploads-2021-09-image-18.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Link**  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]  
Rotation \[Rotation]  
InterfacePos  
ReleaseID \[Release]  
FromObjectID _(since CS 17)_  
ToObjectID _(since CS 17)_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                |                |                  |                   |
| ---------------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**                          | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-link)                   | Required       | String           | Local, variable   |
| [x1, y1, z1](#x1,-y1,-z1-link)                 | Required       | Numerical        | Local, variable   |
| [x2, y2, z2](#x2,-y2,-z2-link)                 | Required       | Numerical        | Local, variable   |
| [Rotation](#Rotation-link)                     | Optional       | Numerical        | Local, variable   |
| [Interface position](#Interface-position-link) | Optional       | Numerical        | Local, variable   |
| [Release](#Release-link)                       | Optional       | String           | Local, variable   |
| [From object ID](#From-object-ID)              | Optional       | Object ID        | Local, variable   |
| [To object ID](#To-object-ID)                  | Optional       | Object ID        | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x1, y1, z1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of 1. point of the link.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x2, y2, z2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of 2. point of the link.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Rotation:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Axial rotation of the local coordinate system of the link in degrees. Default: 0.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Interface position:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The position of the interface, or release along the length of the link. Acceptable inputs are decimal fraction numbers from 0 to 1. Default: 0.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Release:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of release at the interface position. Any previously created release type name can be used.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Consteel has these release types already created by default:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Continuous (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- w
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- xx,yy,zz,w
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- yy
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- yy,zz
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- yy,zz,w
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- zz
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### From object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The ID of an object that the start point of the link is connecting to. This parameter accepts an ID of the following object types: structural member, structural plate.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### To object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The ID of an object that the end point of the link is connecting to. This parameter accepts an ID of the following object types: structural member, structural plate.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
Create Link_ID1 Link
1000 0 0
1000 0 600
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (section and member definition) and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH "Descript Section" "S 235 EN 10025-2" 100 10 200 6 100 10

CREATE Member_ID1 Structural_member "Descript Section"
1000 0 0
5000 0 0

CREATE Member_ID2 Structural_member "Descript Section"
1000 0 600
5000 0 600

CREATE Link_ID1 Link
1000 0 0
1000 0 600
Rotation 20
InterfacePos 0.5
ReleaseID yy
FromObjectID Member_ID1
ToObjectID Member_ID2
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Load group

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the load group creation button in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":24996,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-40.png)](./img/wp-content-uploads-2021-09-image-40.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **LoadGroup**  
Name  
LoadGroupType  
Factor_0  
Factor_1  
Factor_2  
Factor_3

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                        |                |                                            |                   |
| -------------------------------------- | -------------- | ------------------------------------------ | ----------------- |
| **Command parameter**                  | **Assignment** | **Value format**                           | **Input options** |
| [Object ID](#Object-ID-lg)             | Required       | String                                     | Local, variable   |
| [Object name](#Object-name-lg)         | Required       | String                                     | Local, variable   |
| [Load group type](#Load-group-type-lg) | Required       | [Predefined strings](#load-group-types-lg) | Local, variable   |
| [Factors 0-3](#Factors-0-3-lg)         | Optional       | Numerical                                  | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the load group.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load group type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Type of the load group.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available load group types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                     |
| ----------------------------------- | ------------------- |
| **Load group type name**            | **Load group type** |
| EN standard                         | -                   |
| EN, Permanent                       | LGType_EN_P         |
| EN, Variable (Transient)            | LGType_EN_T         |
| EN, Meteorological                  | LGType_EN_M         |
| EN, Wind                            | LGType_EN_W         |
| EN, Snow                            | LGType_EN_S         |
| EN, Crane                           | LGType_EN_C         |
| EN, Accidental                      | LGType_EN_A         |
| EN, Accidental snow                 | LGType_EN_AS        |
| EN, Seismic (Earthquake)            | LGType_EN_E         |
| AISC standard                       | -                   |
| AISC, Dead load                     | LGType_AISC_D       |
| AISC, Fluid load                    | LGType_AISC_F       |
| AISC, Live load                     | LGType_AISC_L       |
| AISC, Roof live load                | LGType_AISC_Lr      |
| AISC, Rain load                     | LGType_AISC_R       |
| AISC, Snow load                     | LGType_AISC_S       |
| AISC, Weight of ice                 | LGType_AISC_DI      |
| AISC, Wind load                     | LGType_AISC_W       |
| AISC, Wind on ice                   | LGType_AISC_Wi      |
| AISC,Wind load for SLS              | LGType_AISC_Wa      |
| AISC, Flood load                    | LGType_AISC_Fa      |
| AISC, Load from extraordinary event | LGType_AISC_Ak      |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Factors 0-3:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Safety and combination factors attached to the load group.

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Factor 0: safety factor (γG or γQ)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Factor 1: combination factor (Ψ0)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Factor 2: factor for frequent load level (Ψ1)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Factor 3: factor for quasi permanent load level (Ψ2)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### EN Permanent load group (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### EN Variable load group (all parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LG_ID1 LoadGroup
Name "Variable (Descript)"
LoadGroupType LGType_EN_T
Factor_0 1.35
Factor_1 1
Factor_2 0.9
Factor_3 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Load case

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the load case creation button in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25002,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-41.png)](./img/wp-content-uploads-2021-09-image-41.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **LoadCase**  
Name  
LoadGroupID  
CanBeFavourable  
NotMainInTransientCmb  
NotMainInAccidentalCmb

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                                 |                |                  |                   |
| ------------------------------------------------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**                                                           | **Assignment** | **Value format** | **Input options** |
| [Object](#Object-ID-psup)[ ](#Object-ID-lcase)[ID](#Object-ID-psup)             | Required       | String           | Local, variable   |
| [Object name](#Object-name-lcase)                                               | Optional       | String           | Local, variable   |
| [Load group ID](#Load-group-ID-lcase)                                           | Optional       | String           | Local, variable   |
| [Can be favourable](#Can-be-favourable-lcase)                                   | Optional       | Boolean          | Local, variable   |
| [Not main in variable combination](#Not-main-in-variable-combination-lcase)     | Optional       | Boolean          | Local, variable   |
| [Not main in accidental combination](#Not-main-in-accidental-combination-lcase) | Optional       | Boolean          | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the load case. If not specified, the default name is: LoadCase.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load group ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the load group that will contain the created load case. If not specified, then the load case will be created within the default permanent load group.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Can be favourable:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Boolean parameter that controls if the load case can be favourable in a combination or not. Accepted inputs: "0" or "1". If not specified the default value is "0".

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- 0 → turned off, load can not be favorable
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- 1 → turned on, load can be favorable
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Not main in variable combination:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Boolean parameter that controls if the load case can be main in permanent and variable combinations or not. Accepted inputs: "0" or "1". If not specified the default value is "0".

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- 0 → turned off, load can not be main
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- 1 → turned on, load can be main
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Not main in accidental combination:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Boolean parameter that controls if the load case can be main in accidental combinations or not. Accepted inputs: "0" or "1". If not specified the default value is "0".

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- 0 → turned off, load can not be main
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- 1 → turned on, load can be main
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LCaseID01 LoadCase
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With load group creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P

CREATE LCase_ID1 LoadCase
Name "Load case 1 (Descript)"
LoadGroupID LG_ID1
CanBeFavourable 0
NotMainInTransientCmb 0
NotMainInAccidentalCmb 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Load combination

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the load combination creation button in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25011,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-42.png)](./img/wp-content-uploads-2021-09-image-42.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **LoadCombination**  
Name  
Type

_etc._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                       |                |                                                |                   |
| --------------------------------------------------------------------- | -------------- | ---------------------------------------------- | ----------------- |
| **Command parameter**                                                 | **Assignment** | **Value format**                               | **Input options** |
| [Object ID](#Object-ID-lcomb)                                         | Required       | String                                         | Local, variable   |
| [Object name](#Object-name-lcomb)                                     | Optional       | String                                         | Local, variable   |
| [Combination type](#Combination-type-lcomb)                           | Optional       | [Predefined strings](#combination-types-lcomb) | Local, variable   |
| [Load case IDs](#Load-case-IDs-lcomb)                                 | Optional       | Load case name or ID                           | Local, variable   |
| [Load case combination factors](#Load-case-combination-factors-lcomb) | Optional       | Numerical                                      | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the load combination. If not specified, the default name is: Load combination1.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Combination type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Type of the combination.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available combination types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- ULS (default) _(until CS 16)_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS _(until CS 16)_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ULS*STR_PersistentOrTransient *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ULS*GEO_PersistentOrTransient *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ULS*EQU_PersistentOrTransient *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ULS*Accidental *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ULS*Seismic *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ULS*Other (default) *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*Cheracteristic_GQ *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*Frequent_GQ *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*QuasiPermanent_GQ *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*Cheracteristic_Q *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*Frequent_Q *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*QuasiPermanent_Q *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*Seismic *(since CS 17)\_
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- SLS*Other *(since CS 17)\_
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Load case IDs:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of load cases for which combination factors will be specified. The accepted input is either a load case ID or the name of a load case with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load case combination factors:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Combination factors assigned to load cases in the same row.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LComb_ID1 LoadCombination
"NAME: Loadcase" 1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With getting load case ID and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
FILTER LCase_IDs
Objecttypes Loadcase

ARRAY_GET LCase_IDs 0 LCase_ID1

CREATE LComb_ID1 LoadCombination
Name "Load combination (Descript)"
Type ULS
$LCase_ID1 1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Point load

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the point load creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25020,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-43.png)](./img/wp-content-uploads-2021-09-image-43.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **NodeForce **  
\[x] \[y] \[z]  
\[Fx] \[Fy] \[Fz]  
\[Mx] \[My] \[Mz]  
EccType

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                         |                |                                                                                                                                                |                   |
| ------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Command parameter**                                   | **Assignment** | **Value format**                                                                                                                               | **Input options** |
| [Object ID](#Object-ID-pload)                           | Required       | String                                                                                                                                         | Local, variable   |
| [Load case ID](#Load-case-ID-pload)                     | Required       | Load case name or ID                                                                                                                           | Local, variable   |
| [Member ID](#Member-ID-pload)                           | Required       | Member name or ID                                                                                                                              | Local, variable   |
| [Coordinate system](#Coordinate-system-pload)           | Optional       | [](#Coordinate-system-pload)[Predefined string](https://consteelsoftware.com/wp-admin/post.php?post=24566&action=edit#Coordinate-system-pload) | Local, variable   |
| [x, y, z](#x,-y,-z-pload)                               | Required       | Numerical                                                                                                                                      | Local, variable   |
| [Fx, Fy, Fz](#Fx,-Fy,-Fz-pload)                         | Required       | Numerical                                                                                                                                      | Local, variable   |
| [Mx, My, Mz](#Mx,-My,-Mz-pload)                         | Required       | Numerical                                                                                                                                      | Local, variable   |
| [Eccentricity reference](#Eccentricity-reference-pload) | Optional       | [Predefined strings](#Ecctype-options-pload)                                                                                                   | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load case ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the load case that will contain the load. The accepted input is either a load case ID or the name of a load case with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the member to which the load will be attached. The accepted input is either a member ID or the name of the member with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Coordinate system:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With this parameter it can be specified which coordinate system to use for the load definition. If unspecified the default is the global coordinate system. If specified, the only accepted input is: "local".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x, y, z:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the application point of the load.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Alternatively the location of the point load can be defined relatively along the length of the member it is attached to. For this definition use the following syntax replacing the x, y, z coordinates: "Rel ", where the Relative position parameter can be any number between 0 and 1. For example:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
CREATE PLoad_ID1 NodeForce "NAME: Loadcase" Mem_ID1
Rel 0.6
0 100 -100
0 0 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Fx, Fy, Fz:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Force components of the point load.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Mx, My, Mz:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Moment components of the point load.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Eccentricity reference:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                            |
| ------------------------------- | -------------------------- |
| **Eccentricity reference name** | **Eccentricity reference** |
| Reference line (0)              | EccType_C                  |
| Bottom Left (1)                 | EccType_BL                 |
| Bottom Middle (2)               | EccType_BM                 |
| Bottom Right (3)                | EccType_BR                 |
| Middle Left (4)                 | EccType_ML                 |
| Middle Middle (5)               | EccType_MM                 |
| Middle Right (6)                | EccType_MR                 |
| Top Left (7)                    | EccType_TL                 |
| Top Middle (8)                  | EccType_TM                 |
| Top Right (9)                   | EccType_TR                 |

<!-- /wp:table -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE PLoad_ID1 NodeForce "NAME: Loadcase" Mem_ID1
0 0 3000
0 100 -100
0 0 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With section, load group, load case, member creation and all parameters:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Note that in this example the load is given in the member's local coordinate system.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

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
EccType EccType_TM
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Line load

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the line load creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25028,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-44.png)](./img/wp-content-uploads-2021-09-image-44.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **MemberForce **

\[Fx1] \[Fy1] \[Fz1]  
\[Fx2] \[Fy2] \[Fz2]  
EccType

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                         |                |                                               |                   |
| ------------------------------------------------------- | -------------- | --------------------------------------------- | ----------------- |
| **Command parameter**                                   | **Assignment** | **Value format**                              | **Input options** |
| [Object ID](#Object-ID-lload)                           | Required       | String                                        | Local, variable   |
| [Load case ID](#Load-case-ID-lload)                     | Required       | Load case name or ID                          | Local, variable   |
| [Member ID](#Member-ID-lload)                           | Required       | Member name or ID                             | Local, variable   |
| [Coordinate system](#Coordinate-system-lload)           | Optional       | [Predefined string](#Coordinate-system-lload) | Local, variable   |
| [Reference point 1](#Reference-point-1-lload)           | Required       | Numerical                                     | Local, variable   |
| [Reference point 2](#Reference-point-2-lload)           | Required       | Numerical                                     | Local, variable   |
| [Distance 1](#Distance-1-lload)                         | Required       | Numerical                                     | Local, variable   |
| [Distance 2](#Distance-2-lload)                         | Required       | Numerical                                     | Local, variable   |
| [Fx1, Fy1, Fz1](#Fx1,-Fy1,-Fz1-lload)                   | Required       | Numerical                                     | Local, variable   |
| [Fx2, Fy2, Fz2](#Fx2,-Fy2,-Fz2-lload)                   | Required       | Numerical                                     | Local, variable   |
| [Eccentricity reference](#Eccentricity-reference-lload) | Optional       | [Predefined strings](#Ecctype-options-lload)  | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load case ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the load case that will contain the load. The accepted input is either a load case ID or the name of a load case with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the member to which the load will be attached. The accepted input is either a member ID or the name of the member with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Coordinate system:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With this parameter it can be specified which coordinate system to use for the load definition. If unspecified the default is the global coordinate system. If specified, the only accepted input is: "local".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Reference point 1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Parameter that controls the starting location of the line load.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- 0 → from end A
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- 1 → from end B
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Reference point 2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Parameter that controls the end location of the line load.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- 0 → from end A
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- 1 → from end B
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- 2 → Relative
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Distance 1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Distance of the start of the line load from the member end set by the Reference point 1 parameter.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Distance 2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Distance of the end of the line load from the member end set by the Reference point 2 parameter. If Reference point 2 = 2 (Relative), then the length of the line load is measured from the starting point.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Fx1, Fy1, Fz1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Force components at the starting point of the line load.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Fx2, Fy2, Fz2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Force components at the end point of the line load.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Eccentricity reference:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                            |
| ------------------------------- | -------------------------- |
| **Eccentricity reference name** | **Eccentricity reference** |
| Reference line (0)              | EccType_C                  |
| Bottom Left (1)                 | EccType_BL                 |
| Bottom Middle (2)               | EccType_BM                 |
| Bottom Right (3)                | EccType_BR                 |
| Middle Left (4)                 | EccType_ML                 |
| Middle Middle (5)               | EccType_MM                 |
| Middle Right (6)                | EccType_MR                 |
| Top Left (7)                    | EccType_TL                 |
| Top Middle (8)                  | EccType_TM                 |
| Top Right (9)                   | EccType_TR                 |

<!-- /wp:table -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LLoad_ID1 MemberForce LCase_ID1 Mem_ID1
0 1
0 0
0 0 -10
0 0 -10
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With section, load group, load case, member creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
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
EccType EccType_TM
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":29798,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/01/image.png)](./img/wp-content-uploads-2022-01-image.png)

<!-- /wp:image -->

<!-- wp:heading {"textAlign":"left"} -->

## Surface load (uniform)

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the surface load creation dialogue with the uniform tab chosen in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25221,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-55.png)](./img/wp-content-uploads-2021-09-image-55.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **PlateForce_Uniform **  
\[Fx] \[Fy] \[Fz]  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]  
\[x3] \[y3] \[z3]  
_etc.  
_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                               |                |                                               |                   |
| --------------------------------------------- | -------------- | --------------------------------------------- | ----------------- |
| **Command parameter**                         | **Assignment** | **Value format**                              | **Input options** |
| [Object ID](#Object-ID-sload)                 | Required       | String                                        | Local, variable   |
| [Load case ID](#Load-case-ID-sload)           | Required       | Load case name or ID                          | Local, variable   |
| [Surface ID](#Surface-ID-sload)               | Required       | Member name or ID                             | Local, variable   |
| [Coordinate system](#Coordinate-system-sload) | Optional       | [Predefined string](#Coordinate-system-sload) | Local, variable   |
| [Fx, Fy, Fz](#Fx,-Fy,-Fz-sload)               | Required       | Numerical                                     | Local, variable   |
| [xi, yi, zi](#xi,-yi,-zi-sload)               | Optional       | Numerical                                     | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load case ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the load case that will contain the load. The accepted input is either a load case ID or the name of a load case with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Surface ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the Surface to which the load will be attached. The accepted input is either a surface ID or the name of the surface with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Coordinate system:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With this parameter it can be specified which coordinate system to use for the load definition. If unspecified the default is the global coordinate system. If specified, the only accepted input is: "local".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Fx, Fy, Fz:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Force components of the uniform surface load.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### xi, yi, zi:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the corner points of the area where the surface load will be applied on the selected surface. If none is given, then the load will be applied on the entire surface. Otherwise at least 3 corner points have to be given.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE SLoad_ID1 PlateForce_Uniform LCase_ID1 PlateID1
0 0 -10
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With load group, load case, plate creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P

CREATE LCase_ID1 LoadCase
Name "Load case 1 (Descript)"
LoadGroupID LG_ID1

CREATE Plate_ID1 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0 0 0
3000 0 0
3000 3000 0
0 3000 0

CREATE SLoad_ID1 PlateForce_Uniform LCase_ID1 Plate_ID1 local
0 0 -10
0 0 0
2000 0 0
2000 3000 0
0 3000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":25988,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/10/image-6.png)](./img/wp-content-uploads-2021-10-image-6.png)

<!-- /wp:image -->

<!-- wp:heading {"textAlign":"left"} -->

## Surface load (linear)

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the surface load creation dialogue with the linear tab chosen in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25227,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-09-image-56.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **PlateForce_Linear**  
LoadDirection  
DistributionType  
\[q1x] \[q1y] \[q1z] \[q1]  
\[q2x] \[q2y] \[q2z] \[q2]  
\[q3x] \[q3y] \[q3z] \[q3]  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]  
\[x3] \[y3] \[z3]  
_etc.  
_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                |                |                                                                                                                                                |                   |
| ---------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Command parameter**                          | **Assignment** | **Value format**                                                                                                                               | **Input options** |
| [Object ID](#Object-ID-sloadl)                 | Required       | String                                                                                                                                         | Local, variable   |
| [Load case ID](#Load-case-ID-sloadl)           | Required       | Load case name or ID                                                                                                                           | Local, variable   |
| [Surface ID](#Surface-ID-sloadl)               | Required       | Member name or ID                                                                                                                              | Local, variable   |
| [Coordinate system](#Coordinate-system-sloadl) | Optional       | [](#Coordinate-system-sload)[Predefined string](https://consteelsoftware.com/wp-admin/post.php?post=24566&action=edit#Coordinate-system-sload) | Local, variable   |
| [Load direction](#Load-direction-sloadl)       | Required       | [Predefined strings](#load-directions-sloadl)                                                                                                  | Local, variable   |
| [Distribution type](#Distribution-type-sloadl) | Required       | [Predefined strings](#distribution-types-sloadl)                                                                                               | Local, variable   |
| [qix, qiy, qiz](#qix,-qiy,-qiz-sloadl)         | Required       | Numerical                                                                                                                                      | Local, variable   |
| [q1, q2, q3](#q1,-q2,-q3-sloadl)               | Required       | Numerical                                                                                                                                      | Local, variable   |
| [xi, yi, zi](#xi,-yi,-zi-sloadl)               | Optional       | Numerical                                                                                                                                      | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load case ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the load case that will contain the load. The accepted input is either a load case ID or the name of a load case with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Surface ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the Surface to which the load will be attached. The accepted input is either a surface ID or the name of the surface with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Coordinate system:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With this parameter it can be specified which coordinate system to use for the load definition. If unspecified the default is the global coordinate system. If specified, the only accepted input is: "local".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Load direction:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Direction of the surface load. Only 1 load direction can be chosen for 1 CREATE PlateForce_Linear command. The load direction is defined in the given coordinate system (local or global).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available load directions:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- x
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- z
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Distribution type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Type of the load distribution.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available distribution types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- General → In this case the slope of the linear distribution is in a general direction, therefore 3 intensity points have to be defined (q1, q2, q3)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x → In this case the slope of the linear distribution is parallel with the local x direction, therefore 2 intensity points have to be defined (q1, q2)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y → In this case the slope of the linear distribution is parallel with the local y direction, therefore 2 intensity points have to be defined (q1, q2)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### qix, qiy, qiz:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates for the load intensity points.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### q1, q2, q3:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Load intensities at the given points.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### xi, yi, zi:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the corner points of the area where the surface load will be applied on the selected surface. If none is given, then the load will be applied on the entire surface. Otherwise at least 3 corner points have to be given.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters, general distribution):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE PF_ID1 PlateForce_Linear LC01 SPID1
LoadDirection z
DistributionType General
3000 0 0 0
3000 3000 0 -10
0 3000 0 -20
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With load group, load case, plate creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE SP_ID1 Structural_Plate "S 235 EN 10025-2" 16 50
0 0 0
3000 0 0
3000 3000 0
0 3000 0

CREATE LG_01 LoadGroup
Name "Descript Load Group"
LoadGroupType "LGType_EN_P"

CREATE LC_01 LoadCase
Name "Descript Load Case"
LoadGroupID LG_01

CREATE PF_ID1 PlateForce_Linear LC_01 SP_ID1 local
LoadDirection z
DistributionType x
0 0 0 -20
3000 0 0 -10
0 0 0
3000 0 0
2000 3000 0
0 3000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":25994,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/10/image-7.png)](./img/wp-content-uploads-2021-10-image-7.png)

<!-- /wp:image -->

<!-- wp:heading {"textAlign":"left"} -->

## Load transfer surface

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the load transfer surface creation dialogue in Consteel, with the "draw polygon" option:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25082,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-48.png)](./img/wp-content-uploads-2021-09-image-48.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **LoadTransferSurface **  
\[x1] \[y1] \[z1]  
\[x2] \[y2] \[z2]  
\[x3] \[y3] \[z3]  
_etc.  
_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                 |                |                  |                   |
| ------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**           | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-lts)     | Required       | String           | Local, variable   |
| [Object name](#Object-name-lts) | Required       | String           | Local, variable   |
| [xi, yi, zi](#xi,-yi,-zi-lts)   | Required       | Numerical        | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the load transfer surface.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### xi, yi, zi:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the corner points of the area where the load transfer surface will be. At least 3 corner points have to be given.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE LTS_ID1 LoadTransferSurface "LTS 1"
0 0 0
3000 0 0
3000 3000 0
0 3000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Mass group

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the mass group creation button in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25088,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-49.png)](./img/wp-content-uploads-2021-09-image-49.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **MassGroup**  
Name  
MassGroupType

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                        |                |                                            |                   |
| -------------------------------------- | -------------- | ------------------------------------------ | ----------------- |
| **Command parameter**                  | **Assignment** | **Value format**                           | **Input options** |
| [Object ID](#Object-ID-mg)             | Required       | String                                     | Local, variable   |
| [Object name](#Object-name-mg)         | Optional       | String                                     | Local, variable   |
| [Mass group type](#Mass-group-type-mg) | Required       | [Predefined strings](#mass-group-types-mg) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the mass group.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Mass group type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Type of the mass group.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available mass group types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                          |                     |
| ------------------------ | ------------------- |
| **Mass group type name** | **Mass group type** |
| Permanent                | MGType_EN_P         |
| Variable                 | MGType_EN_T         |
| Snow                     | MGType_EN_S         |

<!-- /wp:table -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE MG_ID1 MassGroup
Name "Mass group (Descript)"
MassGroupType MGType_EN_P
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Mass case

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the mass case creation button in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25101,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-51.png)](./img/wp-content-uploads-2021-09-image-51.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **MassCase**  
Name  
MassGroupID  
SeismicDirection  
FreeVibrationDirection

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                             |                |                                                              |                   |
| ----------------------------------------------------------- | -------------- | ------------------------------------------------------------ | ----------------- |
| **Command parameter**                                       | **Assignment** | **Value format**                                             | **Input options** |
| [Object ID](#Object-ID-mcase)                               | Required       | String                                                       | Local, variable   |
| [Object name](#Object-name-mcase)                           | Optional       | String                                                       | Local, variable   |
| [Mass group ID](#Mass-group-ID-mcase)                       | Required       | Mass group name or ID                                        | Local, variable   |
| [Seismic direction](#Seismic-direction-mcase)               | Optional       | [Predefined strings](#Seismic-direction-inputs-mcase)        | Local, variable   |
| [Free vibration direction](#Free-vibration-direction-mcase) | Optional       | [Predefined strings](#Free-vibration-direction-inputs-mcase) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the mass case. If not specified the default name is: "MassCase".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Mass group ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the mass group that will contain the created mass case. The accepted input is either a mass group ID or the name of a mass group with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Seismic direction:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Controls the consideration of "z" direction in seismic analysis.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- 0 (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- z
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Free vibration direction:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Controls the consideration of masses in directions for free vibration analysis.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- x
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- z
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,z
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- y,z
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x,y,z (default)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE MC_ID1 MassCase
MassGroupID MG_ID1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With mass group creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE MG_ID1 MassGroup
Name "Mass group (Descript)"
MassGroupType MGType_EN_P

CREATE MC_ID1 MassCase
Name "Mass case (Descript)"
MassGroupID MG_ID1
SeismicDirection 0
FreeVibrationDirection x,y,z
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Mass combination

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the mass combination creation button in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25108,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-52.png)](./img/wp-content-uploads-2021-09-image-52.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **MassCombination**  
Name

_etc._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                       |                |                      |                   |
| --------------------------------------------------------------------- | -------------- | -------------------- | ----------------- |
| **Command parameter**                                                 | **Assignment** | **Value format**     | **Input options** |
| [Object ID](#Object-ID-mcomb)                                         | Required       | String               | Local, variable   |
| [Object name](#Object-name-mcomb)                                     | Optional       | String               | Local, variable   |
| [Mass case IDs](#Mass-case-IDs-mcomb)                                 | Optional       | Mass case name or ID | Local, variable   |
| [Mass case combination factors](#Mass-case-combination-factors-mcomb) | Optional       | Numerical            | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the mass combination. If not specified, the default name is: Load combination1.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Mass case IDs:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of mass cases for which combination factors will be specified. The accepted input is either a mass case ID or the name of a mass case with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Mass case combination factors:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Combination factors assigned to mass cases in the same row.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE MComb_ID1 MassCombination
"NAME: Mass case" 1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With mass group, mass case creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE MG_ID1 MassGroup
Name "Mass group (Descript)"
MassGroupType MGType_EN_P

CREATE MC_ID1 MassCase
MassGroupID MG_ID1

CREATE MComb_ID1 MassCombination
Name "Mass combination (Descript)"
MC_ID1 1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left"} -->

## Point mass

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the node mass creation dialogue in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":29811,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/01/image-1.png)](./img/wp-content-uploads-2022-01-image-1.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **NodeMass**  
\[x] \[y] \[z]  
\[Mass]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                      |                   |
| ----------------------------------- | -------------- | -------------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format**     | **Input options** |
| [Object ID](#Object-ID-pmass)       | Required       | String               | Local, variable   |
| [Mass case ID](#Mass-case-ID-pmass) | Required       | Mass case name or ID | Local, variable   |
| [Member ID](#Member-ID-pmass)       | Required       | Member name or ID    | Local, variable   |
| [x, y, z](#x,-y,-z-pmass)           | Required       | Numerical            | Local, variable   |
| [Mass](#Mass-pmass)                 | Required       | Numerical            | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Mass case ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the mass case that will contain the mass. The accepted input is either a mass case ID or the name of a mass case with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the member to which the load will be attached. The accepted input is either a member ID or the name of the member with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x, y, z:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the application point of the mass.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Mass:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Mass in \[kg].

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE PMass_ID1 NodeMass MC_ID1 Mem_ID1
0 0 3000
1000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With mass group, mass case, member creation and all parameters:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY section "HEA 200"

CREATE MG_ID1 MassGroup
Name "Mass group (Descript)"
MassGroupType MGType_EN_P

CREATE MC_ID1 MassCase
Name "Mass case (Descript)"
MassGroupID MG_ID1
SeismicDirection 0
FreeVibrationDirection x,y,z

CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 3000

CREATE PMass_ID1 NodeMass MC_ID1 Mem_ID1
0 0 3000
1000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":29829,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/01/image-4.png)](./img/wp-content-uploads-2022-01-image-4.png)

<!-- /wp:image -->

<!-- wp:heading {"textAlign":"left"} -->

## Portion

<!-- /wp:heading -->

<!-- wp:paragraph -->

This command is analogous with the portion creation button in Consteel:

<!-- /wp:paragraph -->

<!-- wp:image {"id":25409,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-10-image-1.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

**CREATE ** **Portion**

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                  |                   |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| [Object ID](#Object-ID-por)         | Required       | String           | Local, variable   |
| [Object name](#Object-name-por)     | Required       | String           | Local, variable   |
| [Content array](#Content-array-por) | Required       | Object ID(s)     | Array             |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the portion.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Content array:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The name of the array that contains the IDs of the objects that will be part of the created portion. This array substitutes the manual object selection that is necessary before the portion creation in Consteel. The object IDs have to be collected and put into an array before the execution of this command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
CREATE Portion_ID1 portion "Portion 1 (Descript)" ObjIDs_to_portion
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With object and array creation:

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

ARRAY_CREATE ObjIDs_to_portion
ARRAY_SET ObjIDs_to_portion 0 Mem_ID1
ARRAY_SET ObjIDs_to_portion 1 Mem_ID2

CREATE Portion_ID1 portion "Portion 1 (Descript)" ObjIDs_to_portion
```

<!-- /wp:loos-hcb/code-block -->
