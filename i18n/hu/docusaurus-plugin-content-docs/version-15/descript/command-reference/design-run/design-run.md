---
title: 'DESIGN RUN'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/design-run/
hero: ./img/wp-content-uploads-2021-12-image-2-1024x626.png
---

Starts a design calculation.

### Syntax

**DESIGN RUN**  
Type [Analysis result input]  
LoadCombinations [Load Combination]  
CrossSectionCheck  
Portion_CrossSection [Cross section portion]  
UseGammaM1  
BucklingCheck  
Portion_Buckling [Buckling portion]  
ElasticCriticalFactor [Elastic critical factor]  
UltimateResistanceFactor [Ultimate resistance factor]  
ReductionFactor [Reduction factor]  
StableLength  
UseEN1993_1_3 [Use EN1993-1-3]  
CompositeColumnCheck  
BeamReinforcementCheck  
ColumnReinforcementCheck  

### Syntax explanation

Several options of a design calculation can be controlled by command attributes and parameters. The analogous counterparts of these in the Consteel user interface are the following:

[![](./img/wp-content-uploads-2021-12-image-2-1024x626.png)](https://consteelsoftware.com/wp-content/uploads/2021/12/image-2.png)

### Additional command lines

Code lines directly after the DESIGN RUN command can set certain attributes of the design. The "Type" and "LoadCombinations" lines are always necessary, while the other ones are optional.

Available additional command lines:

| **Line starting keyword** | **Inclusion** | **Description**                                               |
| ------------------------- | ------------- | ------------------------------------------------------------- |
| Type                      | Required      | Controls which analysis results to use                        |
| LoadCombinations          | Required      | Controls the considered load combinations                     |
| CrossSectionCheck         | Optional      | Requests cross-section check                                  |
| Portion_CrossSection      | Optional      | Sets portion used for cross-section check                     |
| UseGammaM1                | Optional      | Requests the usage of γM1 instead of γM0                      |
| BucklingCheck             | Optional      | Requests buckling check                                       |
| Portion_Buckling          | Optional      | Sets portion used for buckling check                          |
| ElasticCriticalFactor     | Optional      | Controls the selection of the elastic critical factor         |
| UltimateResistanceFactor  | Optional      | Controls the selection of the ultimate resistance factor      |
| ReductionFactor           | Optional      | Controls the selection of the reduction factor                |
| StableLength              | Optional      | Considers torsional restraints at the points of contraflexure |
| UseEN1993_1_3             | Optional      | Controls the usage of supplementary rules from EN 1993-1-3    |
| CompositeColumnCheck      | Optional      | Requests composite column check                               |
| BeamReinforcementCheck    | Optional      | Requests concrete beam reinforcement design                   |
| ColumnReinforcementCheck  | Optional      | Requests concrete column reinforcement design                 |

### Command parameters

| **Command parameter**                                     | **Assignment** | **Value format**                                          | **Input options** |
| --------------------------------------------------------- | -------------- | --------------------------------------------------------- | ----------------- |
| [Analysis result input](#analysis-result-input)           | Required       | [Predefined strings](#analysis-result-input-types)        | Local, variable   |
| [Load Combination](#load-combination)                     | Required       | Load combination name or ID(s)                            | Local, variable   |
| [Cross section portion](#cross-section-portion)           | Optional       | Portion ID                                                | Local, variable   |
| [Buckling portion](#buckling-portion)                     | Optional       | Portion ID                                                | Local, variable   |
| [Elastic critical factor](#elastic-critical-factor)       | Optional       | [Predefined strings](#elastic-critical-factor-options)    | Local, variable   |
| [Ultimate resistance factor](#ultimate-resistance-factor) | Optional       | [Predefined strings](#ultimate-resistance-factor-options) | Local, variable   |
| [Reduction factor](#reduction-factor)                     | Optional       | [Predefined strings](#reduction-factor-options)           | Local, variable   |
| [Use EN1993-1-3](#use-en1993-1-3)                         | Optional       | Boolean (1 or 0)                                          | Local, variable   |

#### Analysis result input:
The design calculation can be based on first order or second order analysis results. This parameter controls which will be used.

<span id="analysis-result-input-types" style={{paddingTop: '80px'}}> Available analysis result input types: </span>
- FirstOrder
- SecondOrder

#### Load combination:
Load combinations for which the design calculation is requested. The accepted input is either a single load combination ID or an array containing multiple load combination IDs. The name of the load combination is also an accepted input with this syntax: "NAME: [Load combination name]"

#### Cross section portion:
Sets the portion used for the cross section check.

#### Buckling portion:
Sets the portion used for the buckling check.

#### Elastic critical factor:
Controls how to select the elastic critical factor.

<span id="elastic-critical-factor-options" style={{paddingTop: '80px'}}> Available elastic critical factor options: </span>
- FirstEigenValue (default)
- SelectedEigenValue
- Automatic

#### Ultimate resistance factor:
Controls how to select the ultimate resistance factor.

<span id="ultimate-resistance-factor-options" style={{paddingTop: '80px'}}> Available ultimate resistance factor options: </span>
- ByMember (default)
- InPortion

#### Reduction factor:
Controls how to select the reduction factor.

<span id="reduction-factor-options" style={{paddingTop: '80px'}}> Available reduction factor options: </span>
- Minimum (default)
- Interpolated

#### Use EN1993-1-3:
Controls if supplementary rules from EN 1993-1-3 should be used.

Available options:
- 0 (default)
- 1

### Sample code

**Example 1:** (Simplest form)

```
DESIGN RUN
Type FirstOrder
LoadCombinations "NAME: Load Combination-1"
CrossSectionCheck
```

**Example 2:** (With getting load combination IDs)

```
FILTER LoadCombinationIDs
objecttypes Loadcombination

DESIGN RUN
Type FirstOrder
LoadCombinations LoadCombinationIDs
CrossSectionCheck
```

**Example 3:** (Buckling check)

```
DESIGN RUN
Type FirstOrder
LoadCombinations "NAME: Load Combination-1"
CrossSectionCheck
BucklingCheck
```

**Example 4:** (Concrete reinforcement design)

```
DESIGN RUN
Type FirstOrder
LoadCombinations "NAME: Load Combination-1"
BeamReinforcementCheck
ColumnReinforcementCheck
```
