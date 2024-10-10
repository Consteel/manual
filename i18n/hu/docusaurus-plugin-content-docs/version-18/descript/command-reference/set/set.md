---
title: 'SET'
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

| **Command parameter**                 | **Assignment** | **Value format**                         | **Input options** |
| ------------------------------------- | -------------- | ---------------------------------------- | ----------------- |
| [Object ID](#object-id)               | Required       | String                                   | Local, variable   |
| [Object attribute](#object-attribute) | Required       | Predefined strings                       | Local, variable   |
| [New value](#new-value)               | Required       | String                                   | Local, variable   |

#### Object ID:
The ID of the object.

Object IDs from the following object types are accepted:
- Structural members tab:  
  - [Structural member](#structural-member)
  - [Structural plate](#structural-plate)
  - [Haunched member](#haunched-member) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Tapered member](#tapered-member) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Steel material](#steel-material) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Coated steel material](#coated-steel-material) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Concrete material](#concrete-material) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Rebar material](#rebar-material) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Point support](#point-support)
  - [Line support](#line-support)
  - [Surface support](#surface-support) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Support type](#support-type) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Release type](#release-type) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Link ](#link)<span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- Loads tab:
  - [Load group](#load-group) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Load case](#load-case) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Load combination](#load-combination) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Point load](#point-load)
  - [Line load](#line-load)
  - [Surface load](#surface-load) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Load transfer surface](#load-transfer-surface) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- Mass tab:
  - [Mass group](#mass-group) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Mass case](#mass-case) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Mass combination](#mass-combination) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
  - [Point mass](#point-mass) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- Other:
  - [Portion ](#portion)<span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

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

| **Object attribute name**                                                                        | **Object attribute** (type this into Descript) | **Value format**                                            |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------------------------------------------------------- |
| Name                                                                                             | Name                                           | String                                                      |
| Section ID                                                                                       | sectionid                                      | Section ID or name                                          |
| Eccentricity - y                                                                                 | eccentricity_y                                 | Numerical                                                   |
| Eccentricity - z                                                                                 | eccentricity_z                                 | Numerical                                                   |
| Rotation                                                                                         | Rotation                                       | Numerical                                                   |
| Initial bow imperfection L/y                                                                     | geomimpv                                       | Numerical                                                   |
| Initial bow imperfection L/y                                                                     | geomimpw                                       | Numerical                                                   |
| Release start point                                                                              | ReleaseID_A                                    | Release ID or name                                          |
| Release end point                                                                                | ReleaseID_B                                    | Release ID or name                                          |
| Finite element type <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>                  | FE_Type                                        | [Predefined strings](#Finite-element-type-sm)               |
| FE generation type <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>                   | ConvergenceType                                | [Predefined strings](#FE-generation-type-sm)                |
| Number of finite elements <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>            | Convergence                                    | Numerical                                                   |
| Avearage shell FE size in web <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>        | AverageEdgeLength_Web                          | Numerical                                                   |
| Avearage shell FE size in flange <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>     | AverageEdgeLength_Flange                       | Numerical                                                   |
| Type of the shell constraint element <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span> | ShellDOFConstraint                             | [Predefined strings](#Type-of-the-shell-constraint-element) |

#### Finite element type:
<span id="Finite-element-type-sm" style={{paddingTop: '80px'}}> Valid inputs: </span>
- 6DOFelem
- 7DOFelem
- TensionBar
- Shell
- XBrace

#### FE generation type:
<span id="FE-generation-type-sm" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Automatic
- Manual

#### Type of the shell constraint element:
Only applies if _FE_Type_ is set to Shell.

<span id="Type-of-the-shell-constraint-element" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Trans
- TransAndRot

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
SET Mem_ID1 FE_Type Shell                       //(since CS 17)
SET Mem_ID1 ConvergenceType Manual              //(since CS 17)
SET Mem_ID1 Convergence 13                      //(since CS 17)
SET Mem_ID1 AverageEdgeLength_Web 23            //(since CS 17)
SET Mem_ID1 AverageEdgeLength_Flange 13         //(since CS 17)
SET Mem_ID1 ShellDOFConstraint TransAndRot      //(since CS 17)
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

## Haunched Member

Available object attributes:

| **Object attribute name**          | **Object attribute** (type this into Descript) | **Value format**                          |
| ---------------------------------- | ---------------------------------------------- | ----------------------------------------- |
| Name                               | Name                                           | String                                    |
| Member ID                          | OnMemberID                                     | Member ID or name                         |
| Start height                       | Hstart                                         | Numerical                                 |
| End height                         | Hend                                           | Numerical                                 |
| Section type                       | SecType                                        | [Predefined strings](#Section-type-hm)    |
| Section ID                         | SectionID                                      | Section ID or name                        |
| Web thickness                      | Tw                                             | Numerical                                 |
| Flange thickness                   | Tf                                             | Numerical                                 |
| Flange width                       | B                                              | Numerical                                 |
| Length                             | L                                              | Numerical                                 |
| Haunch position                    | Type                                           | [Predefined strings](#Haunch-position-hm) |
| Start position along member length | StartX                                         | Numerical                                 |

#### Section type:
<span id="Section-type-hm" style={{paddingTop: '80px'}}> Valid inputs: </span>
- HaunchWelded
- HaunchRolled

#### Haunch position:
<span id="Haunch-position-hm" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Bottom
- Centric
- Top

### Sample code

**All available attributes + object creation:**
```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 300"
LOAD_SECTION_MACRO Sec_ID2 WLD-IH "WLD-IH (Descript)" "S 355 EN 10025-2" 100 10 200 6 100 10

CREATE Mem_ID1 Structural_Member "IPE 300"
0 0 0
5000 0 0

CREATE Mem_ID2 Structural_Member "IPE 300"
0 3000 0
5000 3000 0

CREATE Hau_ID1 Haunched_Member Mem_ID1 lower 2000 600 50 "IPE 300"
0 0 0
1 0 0

SET Hau_ID1 Name "New haunched member name"
SET Hau_ID1 OnMemberID Mem_ID2
SET Hau_ID1 Hstart 567
SET Hau_ID1 Hend 456
SET Hau_ID1 SecType HaunchWelded
SET Hau_ID1 SectionID Sec_ID2
SET Hau_ID1 Tw 5.6
SET Hau_ID1 Tf 9
SET Hau_ID1 B 234
SET Hau_ID1 L 1234
SET Hau_ID1 Type Centric
SET Hau_ID1 StartX 123
```

## Tapered Member

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                            |
| ------------------------- | ---------------------------------------------- | ------------------------------------------- |
| Name                      | Name                                           | String                                      |
| Member ID                 | OnMemberID                                     | Member ID or name                           |
| Start height              | Hstart                                         | Numerical                                   |
| End height                | Hend                                           | Numerical                                   |
| Beam eccentricity         | Format                                         | [Predefined strings](#Beam-eccentricity-tm) |

#### Beam eccentricity:
<span id="Beam-eccentricity-tm" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Bottom
- Centric
- Top

### Sample code

**All available attributes + object creation:**
```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH Descript_Section "S 235 EN 10025-2" 100 10 200 6 100 10
LOAD_SECTION_MACRO Sec_ID2 WLD-MALTESE "WLD-MALTESE (Descript)" "S 235 EN 10025-2" 400 10 200 20 300 8 150 16

CREATE Mem_ID1 Structural_Member Descript_Section
0 0 0
0 0 3000

CREATE Mem_ID2 Structural_Member Descript_Section
0 2000 0
0 2000 3000

CREATE Tapered_ID1 Tapered_Member Mem_ID1 400 200
Format Centric

SET Tapered_ID1 Name "New tapered member name"
SET Tapered_ID1 OnMemberID Mem_ID2
SET Tapered_ID1 Hstart 567
SET Tapered_ID1 Hend 234
SET Tapered_ID1 Format Bottom
```

## Steel material

Available object attributes:

| **Object attribute name**             | **Object attribute** (type this into Descript) | **Value format** |
| ------------------------------------- | ---------------------------------------------- | ---------------- |
| Name                                  | Name                                           | String           |
| Density                               | Density                                        | Numerical        |
| Elastic modulus                       | Elasticity                                     | Numerical        |
| Poisson factor                        | Poisson                                        | Numerical        |
| Thermal expansion coefficient         | Thermal                                        | Numerical        |
| Thermal expansion coefficient in fire | ThermalFi                                      | Numerical        |
| Yield strength 1                      | Fy1                                            | Numerical        |
| Yield strength 2                      | Fy2                                            | Numerical        |
| Ultimate strength 1                   | Fu1                                            | Numerical        |
| Ultimate strength 2                   | Fu2                                            | Numerical        |
| Thickness Y                           | ThicknessY                                     | Numerical        |
| Thickness U                           | ThicknessU                                     | Numerical        |

### Sample code

**All available attributes + object creation:**
```
CREATE Steel_Mat_ID1 Steel "Custom steel name" 7850 210000 0.3 0.000012 0.000014 235 215 360 360 40 40

SET Steel_Mat_ID1 Name "New custom steel name"
SET Steel_Mat_ID1 Density 1234
SET Steel_Mat_ID1 Elasticity 212345
SET Steel_Mat_ID1 Poisson 0.3456
SET Steel_Mat_ID1 Thermal 0.012345
SET Steel_Mat_ID1 ThermalFi 0.023456
SET Steel_Mat_ID1 Fy1 236
SET Steel_Mat_ID1 Fy2 216
SET Steel_Mat_ID1 Fu1 367
SET Steel_Mat_ID1 Fu2 368
SET Steel_Mat_ID1 ThicknessY 41
SET Steel_Mat_ID1 ThicknessU 42
```

## Coated steel material

Available object attributes:

| **Object attribute name**             | **Object attribute** (type this into Descript) | **Value format** |
| ------------------------------------- | ---------------------------------------------- | ---------------- |
| Name                                  | Name                                           | String           |
| Density                               | Density                                        | Numerical        |
| Elastic modulus                       | Elasticity                                     | Numerical        |
| Poisson factor                        | Poisson                                        | Numerical        |
| Thermal expansion coefficient         | Thermal                                        | Numerical        |
| Thermal expansion coefficient in fire | ThermalFi                                      | Numerical        |
| Basic yield strength                  | Fyb                                            | Numerical        |
| Ultimate strength                     | Fu                                             | Numerical        |
| Coating thickness                     | CoatingThickness                               | Numerical        |

### Sample code

**All available attributes + object creation:**
```
CREATE CSteel_Mat_ID1 Coated_Steel "Custom coated steel name" 7850 210000 0.3 0.000012 0.000014 350 420 0.02

SET CSteel_Mat_ID1 Name "New custom coated steel name"
SET CSteel_Mat_ID1 Density 1234
SET CSteel_Mat_ID1 Elasticity 212345
SET CSteel_Mat_ID1 Poisson 0.3456
SET CSteel_Mat_ID1 Thermal 0.012345
SET CSteel_Mat_ID1 ThermalFi 0.023456
SET CSteel_Mat_ID1 Fyb 356
SET CSteel_Mat_ID1 Fu 421
SET CSteel_Mat_ID1 CoatingThickness 0.0234
```

## Concrete material

Available object attributes:

| **Object attribute name**             | **Object attribute** (type this into Descript) | **Value format**                              |
| ------------------------------------- | ---------------------------------------------- | --------------------------------------------- |
| Name                                  | Name                                           | String                                        |
| Density                               | Density                                        | Numerical                                     |
| Secant modulus of elasticity          | Elasticity                                     | Numerical                                     |
| Compressive strength                  | Fck                                            | Numerical                                     |
| Characteristic tensile strength       | Fctk                                           | Numerical                                     |
| Mean tensile strength                 | Fctm                                           | Numerical                                     |
| Final value of creep coefficient      | Creep                                          | Numerical                                     |
| Poisson factor                        | Poisson                                        | Numerical                                     |
| Thermal expansion coefficient         | Thermal                                        | Numerical                                     |
| Material model                        | ModelType                                      | [Predefined strings](#Material-model-concmat) |
| Yield strain #1                       | EpsC0                                          | Numerical                                     |
| Ultimite strain #1                    | EpsCu0                                         | Numerical                                     |
| Compression strength reduction factor | Eta                                            | Numerical                                     |
| Yield strain #2                       | EpsC1                                          | Numerical                                     |
| Ultimite strain #2                    | EpsCu1                                         | Numerical                                     |
| Yield strain #3                       | EpsC2                                          | Numerical                                     |
| Ultimite strain #3                    | EpsCu2                                         | Numerical                                     |
| Exponent                              | Exp                                            | Numerical                                     |

#### Material model:
<span id="Material-model-concmat" style={{paddingTop: '80px'}}> Valid inputs: </span>
- DiagramRectangle
- DiagramBilinear
- DiagramParabolaRect

### Sample code

**All available attributes + object creation:**
```
CREATE Concrete_Mat_ID1 Concrete "Custom concrete name" 2500 31476 25 1.8 2.6 2.35 0.2 0.00001 DiagramRectangle 0.0007 0.0035 1 0.002 0.0035 0.00175 0.0035 2

SET Concrete_Mat_ID1 Name "New custom concrete name"
SET Concrete_Mat_ID1 Density 2567
SET Concrete_Mat_ID1 Elasticity 34567
SET Concrete_Mat_ID1 Fck 26
SET Concrete_Mat_ID1 Fctk 1.9
SET Concrete_Mat_ID1 Fctm 2.7
SET Concrete_Mat_ID1 Creep 2.36
SET Concrete_Mat_ID1 Poisson 0.3456
SET Concrete_Mat_ID1 Thermal 0.012345
SET Concrete_Mat_ID1 ModelType DiagramBilinear
SET Concrete_Mat_ID1 EpsC0 0.0008
SET Concrete_Mat_ID1 EpsCu0 0.0036
SET Concrete_Mat_ID1 Eta 2
SET Concrete_Mat_ID1 EpsC1 0.003
SET Concrete_Mat_ID1 EpsCu1 0.0037
SET Concrete_Mat_ID1 EpsC2 0.00176
SET Concrete_Mat_ID1 EpsCu2 0.0038
SET Concrete_Mat_ID1 Exp 3
```

## Rebar material

Available object attributes:

| **Object attribute name**             | **Object attribute** (type this into Descript) | **Value format** |
| ------------------------------------- | ---------------------------------------------- | ---------------- |
| Name                                  | Name                                           | String           |
| Density                               | Density                                        | Numerical        |
| Elastic modulus                       | Elasticity                                     | Numerical        |
| Poisson factor                        | Poisson                                        | Numerical        |
| Thermal expansion coefficient         | Thermal                                        | Numerical        |
| Characteristic yield strength         | Fyk                                            | Numerical        |
| Characteristic strain at maximum load | EpsSu                                          | Numerical        |

### Sample code

**All available attributes + object creation:**
```
CREATE Rebar_Mat_ID1 Rebar "Custom rebar name" 7850 200000 0.3 0.00001 500 0.05

SET Rebar_Mat_ID1 Name "New custom rebar name"
SET Rebar_Mat_ID1 Density 7856
SET Rebar_Mat_ID1 Elasticity 234567
SET Rebar_Mat_ID1 Poisson 0.345
SET Rebar_Mat_ID1 Thermal 0.012345
SET Rebar_Mat_ID1 Fyk 567
SET Rebar_Mat_ID1 EpsSu 0.00567
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

## Surface support

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                              |
| ------------------------- | ---------------------------------------------- | --------------------------------------------- |
| Name                      | Name                                           | String                                        |
| Support type              | SupportID                                      | Support type ID or name                       |
| Plate ID                  | PlateID                                        | Plate ID or name                              |
| Coordinate system         | DirType                                        | [Predefined strings](#Coordinate-system-ssup) |

#### Coordinate system:
<span id="Coordinate-system-ssup" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Local
- Global

### Sample code

**All available attributes + object creation:**
2 new surface support types with the name of "Fixed" and "z" have to be created manually before runnnig this code.
```
CREATE Plate_ID1 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0 0 0
3000 0 0
3000 3000 0

CREATE Plate_ID2 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0 0 2000
3000 0 2000
3000 3000 2000

SELECT all
DESELECT all

CREATE SurfSup_ID1 Support_Plate Plate_ID1 Fixed
Name "Surface support 1"
CoordSys Local

SET SurfSup_ID1 Name "New surface support name"
SET SurfSup_ID1 SupportID z
SET SurfSup_ID1 PlateID Plate_ID2
SET SurfSup_ID1 DirType Global
```

## Support type

Available object attributes:

| **Object attribute name**                      | **Object attribute** (type this into Descript) | **Value format** |
| ---------------------------------------------- | ---------------------------------------------- | ---------------- |
| Name                                           | Name                                           | String           |
| Translational degree of freedom in x direction | x                                              | Numerical        |
| Translational degree of freedom in y direction | y                                              | Numerical        |
| Translational degree of freedom in z direction | z                                              | Numerical        |
| Rotational degree of freedom around x axis     | xx                                             | Numerical        |
| Rotational degree of freedom around y axis     | yy                                             | Numerical        |
| Rotational degree of freedom around z axis     | zz                                             | Numerical        |
| Warping                                        | w                                              | Numerical        |

### Sample code

**All available attributes + object creation:**
```
CREATE PSup_Type_ID1 Support "Custom support type name" Fix 1234 Fix Fix Fix Fix Fix

SET PSup_Type_ID1 Name "New support type name"
SET PSup_Type_ID1 x Free
SET PSup_Type_ID1 y 2345
SET PSup_Type_ID1 z 5678
SET PSup_Type_ID1 xx Fix
SET PSup_Type_ID1 yy Fix
SET PSup_Type_ID1 zz Fix
SET PSup_Type_ID1 w Fix
```

## Release type

Available object attributes:

| **Object attribute name**                      | **Object attribute** (type this into Descript) | **Value format** |
| ---------------------------------------------- | ---------------------------------------------- | ---------------- |
| Name                                           | Name                                           | String           |
| Translational degree of freedom in x direction | x                                              | Numerical        |
| Translational degree of freedom in y direction | y                                              | Numerical        |
| Translational degree of freedom in z direction | z                                              | Numerical        |
| Rotational degree of freedom around x axis     | xx                                             | Numerical        |
| Rotational degree of freedom around y axis     | yy                                             | Numerical        |
| Rotational degree of freedom around z axis     | zz                                             | Numerical        |
| Warping                                        | w                                              | Numerical        |

### Sample code

**All available attributes + object creation:**
```
CREATE Release_Type_ID1 Release "Custom release type name" Fix 1234 Fix Fix Fix Fix Fix

SET Release_Type_ID1 Name "New release type name"
SET Release_Type_ID1 x Free
SET Release_Type_ID1 y 2345
SET Release_Type_ID1 z 5678
SET Release_Type_ID1 xx Fix
SET Release_Type_ID1 yy Fix
SET Release_Type_ID1 zz Fix
SET Release_Type_ID1 w Fix
```

## Link

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**   |
| ------------------------- | ---------------------------------------------- | ------------------ |
| Name                      | Name                                           | String             |
| Release ID                | ReleaseID                                      | Release ID or name |
| Position of connection    | InterfacePos                                   | Numerical          |
| Rotation                  | Rotation                                       | Numerical          |

### Sample code

**All available attributes + object creation:**
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

SET Link_ID1 Name "New link name"
SET Link_ID1 ReleaseID Continuous
SET Link_ID1 InterfacePos 0.567
SET Link_ID1 Rotation 13.45
```

## Load group

Available object attributes:

| **Object attribute name**            | **Object attribute** (type this into Descript) | **Value format**                          |
| ------------------------------------ | ---------------------------------------------- | ----------------------------------------- |
| Name                                 | Name                                           | String                                    |
| Load group type                      | LoadGroupType                                  | [Predefined strings](#Load-group-type-lg) |
| Safety factor                        | Factor_0                                       | Numerical                                 |
| Combination factor                   | Factor_1                                       | Numerical                                 |
| Factor of frequent load level        | Factor_2                                       | Numerical                                 |
| Factor of quasi-permanent load level | Factor_3                                       | Numerical                                 |

#### Load group type:
<span id="Load-group-type-lg" style={{paddingTop: '80px'}}> Valid inputs: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Load group type name**            | **Load group type** |
| ----------------------------------- | ------------------- |
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

### Sample code

**All available attributes + object creation:**
```
CREATE LG_ID1 LoadGroup
Name "Variable (Descript)"
LoadGroupType LGType_EN_P
Factor_0 1.35
Factor_1 1
Factor_2 0.9
Factor_3 0

SET LG_ID1 Name "New load group name"
SET LG_ID1 LoadGroupType LGType_EN_C
SET LG_ID1 Factor_0 1.4
SET LG_ID1 Factor_1 1.1
SET LG_ID1 Factor_2 0.98
SET LG_ID1 Factor_3 0.1
```
## Load case

Available object attributes:

| **Object attribute name**                                | **Object attribute** (type this into Descript) | **Value format**      |
| -------------------------------------------------------- | ---------------------------------------------- | --------------------- |
| Name                                                     | Name                                           | String                |
| Load group ID                                            | LoadGroupID                                    | Load group ID or name |
| Can be favourable in the combination                     | CanBeFavourable                                | Numerical             |
| Can't be the main in persistent or transient combination | NotMainInTransientCmb                          | Numerical             |
| Can't be the main in accidental combination              | NotMainInAccidentalCmb                         | Numerical             |

### Sample code

**All available attributes + object creation:**
```
CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P

CREATE LG_ID2 LoadGroup
Name "Variable (Descript)"
LoadGroupType LGType_EN_T

CREATE LCase_ID1 LoadCase
Name "Load case 1 (Descript)"
LoadGroupID LG_ID1
CanBeFavourable 0
NotMainInTransientCmb 0
NotMainInAccidentalCmb 0

SET LCase_ID1 Name "New load case name"
SET LCase_ID1 LoadGroupID LG_ID2
SET LCase_ID1 CanBeFavourable 1
SET LCase_ID1 NotMainInTransientCmb 1
SET LCase_ID1 NotMainInAccidentalCmb 1
```

## Load combination

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                              |
| ------------------------- | ---------------------------------------------- | --------------------------------------------- |
| Name                      | Name                                           | String                                        |
| Combination type          | Type                                           | [Predefined strings](#Combination-type-lcomb) |

#### Combination type:
<span id="Combination-type-lcomb" style={{paddingTop: '80px'}}> Valid inputs: </span>
- ULS (default) <span style={{color:"Chocolate"}}>(until CS 16)</span>
- SLS <span style={{color:"Chocolate"}}>(until CS 16)</span>
- ULS_STR_PersistentOrTransient <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- ULS_GEO_PersistentOrTransient <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- ULS_EQU_PersistentOrTransient <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- ULS_Accidental <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- ULS_Seismic <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- ULS_Other (default) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_Cheracteristic_GQ <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_Frequent_GQ <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_QuasiPermanent_GQ <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_Cheracteristic_Q <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_Frequent_Q <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_QuasiPermanent_Q <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_Seismic <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>
- SLS_Other <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

### Sample code

**All available attributes + object creation:**
```
CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P

CREATE LG_ID2 LoadGroup
Name "Variable (Descript)"
LoadGroupType LGType_EN_T

CREATE LCase_ID1 LoadCase
Name "Load case 1 (Descript)"
LoadGroupID LG_ID1

CREATE LComb_ID1 LoadCombination
Name "Load combination (Descript)"
Type ULS_STR_PersistentOrTransient
LCase_ID1 1

SET LComb_ID1 Name "New load combination name"
SET LComb_ID1 Type ULS_Accidental
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

## Surface load

A surface load can be of 2 different types: uniform or linearly distributed. Some attributes only apply for one of the load distribution types.

Available object attributes:

| **Object attribute name**                   | **Object attribute** (type this into Descript) | **Value format**                               |
| ------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Name                                        | Name                                           | String                                         |
| Load case ID                                | LoadCaseID                                     | Load case ID                                   |
| X force component _(uniform distr.)_        | X                                              | Numerical                                      |
| Y force component _(uniform distr.)_        | Y                                              | Numerical                                      |
| Z force component _(uniform distr.)_        | Z                                              | Numerical                                      |
| Multiplication factor                       | MulFac                                         | Numerical                                      |
| Load direction _(linear distr.)_            | LoadDir                                        | [Predefined strings](#Load-direction-sload)    |
| Coordinate system _(linear distr.)_         | DirType                                        | [Predefined strings](#Coordinate-system-sload) |
| Load intensity at point 1 _(linear distr.)_ | LoadValue_1                                    | Numerical                                      |
| Load intensity at point 2 _(linear distr.)_ | LoadValue_2                                    | Numerical                                      |
| Load intensity at point 3 _(linear distr.)_ | LoadValue_3                                    | Numerical                                      |

#### Load direction:
<span id="Load-direction-sload" style={{paddingTop: '80px'}}> Valid inputs: </span>
- X
- Y
- Z

#### Coordinate system:
<span id="Coordinate-system-sload" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Local
- Global

### Sample code

**All available attributes + object creation:**
```
CREATE LG_ID1 LoadGroup
Name "Permanent (Descript)"
LoadGroupType LGType_EN_P

CREATE LCase_ID1 LoadCase
Name "Load case 1 (Descript)"
LoadGroupID LG_ID1

CREATE LCase_ID2 LoadCase
Name "Load case 2 (Descript)"
LoadGroupID LG_ID1

CREATE Plate_ID1 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0 0 0+1000
3000 0 0
3000 3000 0
0 3000 0+1000

CREATE Plate_ID2 Structural_Plate "C25/30 EN 1992-1-1:2010" 200
0-5000 0 0+1000
3000-5000 0 0
3000-5000 3000 0
0-5000 3000 0+1000

CREATE SLoadUni_ID PlateForce_Uniform LCase_ID1 Plate_ID1 Global
0 0 -10
0 0 0+1000
2000 0 0+(1000/3)
2000 3000 0+(1000/3)
0 3000 0+1000

CREATE SLoadLin_ID PlateForce_Linear LCase_ID1 Plate_ID2 Global
LoadDirection z
DistributionType x
0-5000 0 0+1000 -20
3000-5000 0 0 -10
0-5000 0 0+1000
3000-5000 0 0
2000-5000 3000 0+(1000/3)
0-5000 3000 0+1000

// Uniform
SET SLoadUni_ID Name "New uniform surface load name"
SET SLoadUni_ID LoadCaseID LCase_ID2
SET SLoadUni_ID MulFac 2.3
SET SLoadUni_ID DirType Local
SET SLoadUni_ID X 1
SET SLoadUni_ID Y 2
SET SLoadUni_ID Z -13

// Linear
SET SLoadLin_ID Name "New linear surface load name"
SET SLoadLin_ID MulFac 3.4
SET SLoadLin_ID DirType Local
SET SLoadLin_ID LoadDir X
SET SLoadLin_ID LoadValue_1 11
SET SLoadLin_ID LoadValue_2 22
SET SLoadLin_ID LoadValue_3 33
```

## Load transfer surface

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                                 |
| ------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| Name                      | Name                                           | String                                           |
| Member selection type     | BeamDefType                                    | [Predefined strings](#Member-selection-type-lts) |
| Beam IDs                  | BeamIDs                                        | Beam IDs in array                                |
| Distribution method       | DistribMethod                                  | [Predefined strings](#Distribution-method-lts)   |
| Load eccentricity z       | LoadEccZ                                       | Numerical                                        |

#### Member selection type:
<span id="Member-selection-type-lts" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Selected
- Planar

#### Distribution method:
<span id="Distribution-method-lts" style={{paddingTop: '80px'}}> Valid inputs: </span>
- DisMethodUniform
- DisMethodStructPoint

### Sample code

**All available attributes + object creation:**
```
CREATE LTS_ID1 LoadTransferSurface "LTS 1"
0 0 0
3000 0 0
3000 3000 0
0 3000 0

LOAD_SECTION_MACRO Sec_ID2 WLD-IH "WLD-IH (Descript)" "S 355 EN 10025-2" 100 10 200 6 100 10

CREATE Mem_ID1 Structural_Member "WLD-IH (Descript)"
0 0 0
0 3000 0

ARRAY_CREATE arrBeamIDs
ARRAY_ADD arrBeamIDs Mem_ID1

SET LTS_ID1 Name "New load transfer surface name"
SET LTS_ID1 BeamDefType Selected
SET LTS_ID1 BeamIDs arrBeamIDs
SET LTS_ID1 DistribMethod DisMethodStructPoint
SET LTS_ID1 LoadEccZ 123
```

## Mass group

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**                          |
| ------------------------- | ---------------------------------------------- | ----------------------------------------- |
| Name                      | Name                                           | String                                    |
| Mass group type           | MassGroupType                                  | [Predefined strings](#Mass-group-type-mg) |

#### Mass group type:
<span id="Mass-group-type-mg" style={{paddingTop: '80px'}}> Valid inputs: </span>
- MGType_EN_P (Permanent)
- MGType_EN_T (Transient or Variable)
- MGType_EN_S (Snow)

### Sample code

**All available attributes + object creation:**
```
CREATE MG_ID1 MassGroup
Name "Mass group 1 (Descript)"
MassGroupType MGType_EN_P

SET MG_ID1 Name "New mass group name"
SET MG_ID1 MassGroupType MGType_EN_T
```

## Mass case

Available object attributes:

| **Object attribute name**                       | **Object attribute** (type this into Descript) | **Value format**                                                          |
| ----------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| Name                                            | Name                                           | String                                                                    |
| Mass group ID                                   | MassGroupID                                    | Mass group ID                                                             |
| Considered direction in seismic analysis        | SeismicDirection                               | [Predefined strings](#Considered-direction-in-seismic-analysis-mc)        |
| Considered direction in free vibration analysis | FreeVibrationDirection                         | [Predefined strings](#Considered-direction-in-free-vibration-analysis-mc) |

#### Considered direction in seismic analysis:
<span id="Considered-direction-in-seismic-analysis-mc" style={{paddingTop: '80px'}}> Valid inputs: </span>
- Z
- 0

#### Considered direction in free vibration analysis:
<span id="Considered-direction-in-free-vibration-analysis-mc" style={{paddingTop: '80px'}}> Valid inputs: </span>
- X
- Y
- Z
- X,Y
- X,Z
- Y,Z
- X,Y,Z

### Sample code

**All available attributes + object creation:**
```
CREATE MG_ID1 MassGroup
Name "Mass group 1 (Descript)"
MassGroupType MGType_EN_P

CREATE MG_ID2 MassGroup
Name "Mass group 2 (Descript)"
MassGroupType MGType_EN_S

CREATE MC_ID1 MassCase
Name "Mass case (Descript)"
MassGroupID MG_ID1
SeismicDirection 0
FreeVibrationDirection x,y,z

SET MC_ID1 Name "New mass case name"
SET MC_ID1 MassGroupID MG_ID2
SET MC_ID1 SeismicDirection z
SET MC_ID1 FreeVibrationDirection x
```

## Mass combination

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format** |
| ------------------------- | ---------------------------------------------- | ---------------- |
| Name                      | Name                                           | String           |

### Sample code

**All available attributes + object creation:**
```
CREATE MG_ID1 MassGroup
Name "Mass group 1 (Descript)"
MassGroupType MGType_EN_P

CREATE MC_ID1 MassCase
Name "Mass case (Descript)"
MassGroupID MG_ID1

CREATE MComb_ID1 MassCombination
Name "Mass combination (Descript)"
MC_ID1 1

SET MComb_ID1 Name "New mass combination name"
```

## Point mass

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**     |
| ------------------------- | ---------------------------------------------- | -------------------- |
| Name                      | Name                                           | String               |
| Mass case ID              | MassCaseID                                     | Mass case ID or name |
| Mass value                | ValueX                                         | Numerical            |
| Multiplication factor     | MulFac                                         | Numerical            |

### Sample code

**All available attributes + object creation:**
```
CREATE MG_ID1 MassGroup
Name "Mass group 1 (Descript)"
MassGroupType MGType_EN_T

CREATE MC_ID1 MassCase
Name "Mass case 1 (Descript)"
MassGroupID MG_ID1

CREATE MC_ID2 MassCase
Name "Mass case 2 (Descript)"
MassGroupID MG_ID1

LOAD_SECTION_LIBRARY Section "HEA 200"

CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 3000

CREATE PMass_ID1 NodeMass MC_ID1 Mem_ID1
0 0 3000
1000

SET PMass_ID1 Name "New point mass name"
SET PMass_ID1 MassCaseID MC_ID2
SET PMass_ID1 ValueX 1234
SET PMass_ID1 MulFac 10
```

## Portion

Available object attributes:

| **Object attribute name** | **Object attribute** (type this into Descript) | **Value format**    |
| ------------------------- | ---------------------------------------------- | ------------------- |
| Name                      | Name                                           | String              |
| Items                     | Items                                          | Object IDs in array |

### Sample code

**All available attributes + object creation:**
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
ARRAY_ADD ObjIDs_to_portion Mem_ID1

CREATE Portion_ID1 portion "Portion 1 (Descript)" ObjIDs_to_portion

ARRAY_ADD ObjIDs_to_portion Mem_ID2

SET Portion_ID1 Name "New portion name"
SET Portion_ID1 Items ObjIDs_to_portion
```
