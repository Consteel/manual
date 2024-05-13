---
title: 'ANALYSIS RUN'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/analysis-run/
hero: ./img/wp-content-uploads-2021-12-image-1024x529.png
---

Starts an analysis run.

### Syntax

**ANALYSIS RUN**  
LoadCombinations [Load Combination]  
LoadCases [Load cases]  
FirstOrder  
SecondOrder  
Portion_SecondOrder [Second order portion]  
Buckling [Number of buckling shapes]  
Portion_Buckling [Buckling portion]  
Sensitivity  
Dynamic [Dynamic stiffness] [Number of vibration modes] [Second order stiffness load combination]  
MassCombinations [Mass combination]  

#### Syntax explanation

Several options of an anlysis can be controlled by command attributes and parameters. The analogous counterparts of these in the Consteel user interface are the following:

[![](./img/wp-content-uploads-2021-12-image-1024x529.png)](https://consteelsoftware.com/wp-content/uploads/2021/12/image.png)

### Additional command lines

Code lines directly after the ANALYSIS RUN command can set certain attributes of the analysis. The "Type" and "LoadCombinations" lines are always necessary, while the other ones are optional.

Available additional command lines:

| **Line starting keyword** | **Inclusion** | **Description**                                                |
| ------------------------- | ------------- | -------------------------------------------------------------- |
| Type                      | Required      | Controls the static analysis type                              |
| LoadCombinations          | Required      | Controls the considered load combinations                      |
| LoadCases                 | Optional      | Requests the separate analysis of load cases                   |
| FirstOrder                | Optional      | Requests first order analysis                                  |
| SecondOrder               | Optional      | Requests second order analysis                                 |
| Portion_SecondOrder       | Optional      | Sets portion used for second order analysis                    |
| Buckling                  | Optional      | Requests buckling analysis                                     |
| Portion_Buckling          | Optional      | Sets portion used for buckling analysis                        |
| Sensitivity               | Optional      | Requests buckling sensitivity analysis                         |
| Dynamic                   | Optional      | Requests dynamic analysis                                      |
| MassCombinations          | Optional      | Controls the considered mass combinations for dynamic analysis |

### Command parameters

| **Command parameter**                                                               | **Assignment** | **Value format**                                   | **Input options** |
| ----------------------------------------------------------------------------------- | -------------- | -------------------------------------------------- | ----------------- |
| [Analysis type](#analysis-type)                                                     | Required       | [Predefined strings](#analTypes)    | Local, variable   |
| [Load Combination](#load-combination)                                               | Required       | Load combination name or ID(s)                     | Local, variable   |
| [Load cases](#load-cases)                                                           | Optional       | Load case name or ID(s)                            | Local, variable   |
| [Second order portion](#second-order-portion)                                       | Optional       | Portion ID                                         | Local, variable   |
| [Number of buckling shapes](#number-of-buckling-shapes)                             | Optional       | Integer                                            | Local, variable   |
| [Buckling portion](#buckling-portion)                                               | Optional       | Portion ID                                         | Local, variable   |
| [Dynamic stiffness](#dynamic-stiffness)                                             | Optional       | [Predefined strings](#stiffnessOptions) | Local, variable   |
| [Number of vibration modes](#number-of-vibration-modes)                             | Optional       | Integer                                            | Local, variable   |
| [Second order stiffness load combination](#second-order-stiffness-load-combination) | Optional       | Load combination name or ID                        | Local, variable   |
| [Mass combination](#mass-combination)                                               | Optional       | Mass case name or ID(s)                            | Local, variable   |

#### Analysis type:
Type of the analysis.

<span id="analTypes" style={{paddingTop: '80px'}}>Available analysis types: </span>
- Elastic
- Plastic

#### Load combination:
Load combinations considered during the analysis run. The accepted input is either a single load combination ID or an array containing multiple load combination IDs. The name of the load combination is also an accepted input with this syntax: "NAME: "

#### Load cases:
If the "LoadCases" line is included after the ANALYSIS RUN command, then the elastic calculation of certain load cases can be requested as a part of the analysis run.

The accepted input after the "LoadCases" is either a single load case ID or an array containing multiple load case IDs. The name of the load case is also an accepted input with this syntax: "NAME: "

#### Second order portion:
Sets the portion used for the second order analysis.

#### Number of buckling shapes:
The number of buckling shapes to be calculated.

#### Buckling portion:
Sets the portion used for the buckling analysis.

#### Dynamic stiffness:
Controls the stiffness options used for dynamic analysis.

<span id="stiffnessOptions" style={{paddingTop: '80px'}}>Available stiffness options: </span>
- FirstOrderStiffness
- SecondOrderStiffness

#### Number of vibration modes:
Controls the number of vibration modes calculated for dynamic analysis.

#### Second order stiffness load combination:
This parameter is only required if the parameter is set to "SecondOrderStiffness". In this case the stiffnesses considered in the dynamic analysis are going to be influenced by the loading, therefore a load combination has to be chosen, from which the loading is taken into account.

The accepted input is a single load combination ID or the name of the load combination with this syntax: "NAME: "

#### Mass combination:
This is only used if dynamic analysis is requested with the line starting with "Dynamic". In that case it has to be specified which mass combinations are to be used for the dynamic analysis.

The accepted input after the "MassCombinations" is either a single mass combination ID or an array containing multiple mass combination IDs. The name of the mass combination is also an accepted input with this syntax: "NAME: "

### Sample code

**Example 1** (Simplest form):
```
ANALYSIS RUN
Type Elastic
LoadCombinations "NAME: Load Combination-1"
FirstOrder
```

**Example 2** (With getting load combination and load case IDs):
```
FILTER LoadCombinationIDs
objecttypes Loadcombination

ARRAY_GET LoadCombinationIDs 0 LComb_ID0

FILTER LoadCaseIDs
objecttypes Loadcase

ANALYSIS RUN
Type Elastic
LoadCombinations $LComb_ID0
LoadCases LoadCaseIDs
FirstOrder
```

**Example 3** (Plastic):
```
ANALYSIS RUN
Type Plastic
LoadCombinations "NAME: Load Combination-1"
SecondOrder
Buckling 5
Sensitivity
```

**Example 4** (With buckling and dynamic analysis):
```
ANALYSIS RUN
Type Elastic
LoadCombinations "NAME: Load Combination-1"
MassCombinations "NAME: Mass combination"
FirstOrder
SecondOrder
Buckling 3
Dynamic FirstOrderStiffness 4
```

**Example 5** (Dynamic analysis second order stiffness):
```
ANALYSIS RUN
Type Elastic
LoadCombinations "NAME: Load Combination-1"
MassCombinations "NAME: Mass combination"
FirstOrder
SecondOrder
Dynamic SecondOrderStiffness 3 "NAME: Load Combination-1"
```
