---
title: 'GENERATE'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/generate/
hero: ./img/wp-content-uploads-2021-10-image-8.png
---

Generates multiple objects.

### Syntax

**GENERATE** [Array name] [Object type]  
Attribute1 [Attribute value 1]  
Attribute2 [Attribute value 2]  
Attribute3 [Attribute value 3]  
_etc._

### Object types

Available object types:

| **Object type**                      | **Description**  |
| ------------------------------------ | ---------------- |
| [Loadcombination](#load-combination) | Load combination |

### Sample code

```
GENERATE LC_IDs_Array LoadCombination
CombinationTypes ULS_PersTrans_CaseA_STR
```
---
## Detailed description of object types

## Load combination

Generates load combinations.

The command is analogous with this button in Consteel:

[![](https://consteelsoftware.com/wp-content/uploads/2021/10/image-8.png)](./img/wp-content-uploads-2021-10-image-8.png)

### Syntax

**GENERATE** [Array name] **LoadCombination** [Load case 1] [Load case 2] [Load case 3] _etc._  
CombinationType [Combination type]  
DeflectionTypeSLS [Deflection type]  

### Command parameters

| **Command parameter**                 | **Assignment** | **Value format**                             | **Input options** |
| ------------------------------------- | -------------- | -------------------------------------------- | ----------------- |
| [Array name](#array-name)             | Required       | String                                       | Local, variable   |
| [Load cases](#load-cases)             | Optional       | String                                       | Local, variable   |
| [Combination type](#combination-type) | Optional       | [Predefined strings](#Combination-type-name) | Local, variable   |
| [Deflection type](#deflection-type)   | Optional       | [Predefined strings](#Deflection-type-name)  | Local, variable   |

#### Array name:
Name of the array that will store the IDs of the generated load combinations.

#### Load cases:
IDs of the load cases that will be included in the load combination generation.

The definition of the included load cases is optional. If no load case IDs are given here, then all of the existing load cases are going to be included.

#### Combination type:
Type of the combinations to be generated. One ore more combination types can be included int the CombinationType row within one GENERATE/LoadCombination command.

<span id="Combination-type-name" style={{paddingTop: '80px'}}> Available combination types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Design situation**                                             | **Limit state**  | **Combination type**                                            |
| --------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------- |
| Persistent or transient a) (EC 1990-2005 6.4.3.2 6.10)            |    ULS <br /> ULS STR <br /> ULS GEO <br /> ULS EQU | ULS_PersTrans_CaseA <span style={{color:"Chocolate"}}>(until CS 15)</span> <br /> ULS_PersTrans_CaseA_STR <span style={{color:"MediumSeaGreen"}}>(since CS 16)</span> <br /> ULS_PersTrans_CaseA_GEO <span style={{color:"MediumSeaGreen"}}>(since CS 16)</span> <br /> ULS_PersTrans_CaseA_EQU <span style={{color:"MediumSeaGreen"}}>(since CS 16)</span> |
| Persistent or transient b) (EC 1990-2005 6.4.3.2 6.10a 6.10b)     |   ULS <br /> ULS STR <br /> ULS GEO       | ULS_PersTrans_CaseB <span style={{color:"Chocolate"}}>(until CS 15)</span> <br /> ULS_PersTrans_CaseB_STR <span style={{color:"MediumSeaGreen"}}>(since CS 16)</span> <br /> ULS_PersTrans_CaseB_GEO <span style={{color:"MediumSeaGreen"}}>(since CS 16)</span> |
| Accidental (EC 1990-2005 6.4.3.3 6.11b)                           |   SLS      | ULS_Accidental                                |
| Seismic (EC 1990-2005 6.4.3.4 6.12b)                              |   SLS      | ULS_Seismic                                   |
| Characteristic (EC 1990-2005 6.5.3 6.14a)                         |   SLS      | SLS_Characteristic                            |
| Frequent (EC 1990-2005 6.5.3 6.15a)                               |   SLS      | SLS_Frequent                                  |
| Quasi-static (EC 1990-2005 6.5.3 6.16a)                           |   SLS      | SLS_QuasiPermanent                            |
    
The options of this parameter are analogous with these options in Consteel:

[![](./img/wp-content-uploads-2021-11-Kepernyokep-2022-11-30-150738-1024x476.png)](https://consteelsoftware.com/wp-content/uploads/2021/11/Kepernyokep-2022-11-30-150738.png)

The assignment of the combination type is optional. Default: ULS_PersTrans_CaseA_STR.

#### Deflection type:
Controls the deflection type in case of SLS combinations.

<span id="Deflection-type-name" style={{paddingTop: '80px'}}> Available deflection types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Deflection type name**                           | **Deflection type**  |
| -------------------------------------------------- | -------------------- |
| Total vertical and horizontal deflections          | VerticalHorizontal   |
| Vertical deflections from variable load cases only | VerticalFromVariable |

The options of this parameter are analogous with these options in Consteel:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-75.png)](./img/wp-content-uploads-2021-08-image-75.png)

One or both deflection types can be included in one row after the "DeflectionTypeSLS" within one GENERATE/LoadCombination command.

The assignment of the deflection type is optional. Default: VerticalHorizontal.

### Sample code

**Command only:**

```
GENERATE LC_IDs_Array LoadCombination
CombinationTypes ULS_PersTrans_CaseA_STR SLS_Characteristic
DeflectionTypeSLS VerticalHorizontal
```

**With added prerequisites:** (Load group and load case generation)

```
//Load Groups
CREATE LoadGroupID1 LoadGroup
Name "Persistent Descript"
LoadGroupType LGType_EN_P

CREATE LoadGroupID2 LoadGroup
Name "Variable Descript"
LoadGroupType LGType_EN_T

CREATE LoadGroupID3 LoadGroup
Name "Wind Descript"
LoadGroupType LGType_EN_W

//Load Cases
CREATE LoadCaseID11 LoadCase
Name "Persistent 1"
LoadGroupID LoadGroupID1

CREATE LoadCaseID21 LoadCase
Name "Variable 1"
LoadGroupID LoadGroupID2

CREATE LoadCaseID22 LoadCase
Name "Variable 2"
LoadGroupID LoadGroupID2

CREATE LoadCaseID31 LoadCase
Name "Wind 1"
LoadGroupID LoadGroupID3

//Load combination generation
GENERATE LC_IDs_Array LoadCombination
CombinationTypes ULS_PersTrans_CaseA_STR SLS_Characteristic
DeflectionTypeSLS VerticalHorizontal
```
