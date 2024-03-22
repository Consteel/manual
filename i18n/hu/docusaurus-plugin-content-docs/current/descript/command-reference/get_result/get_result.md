---
title: 'GET_RESULT'
description: ""
published: 2021-09-15
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/get_result/
hero: ./img/wp-content-uploads-2021-09-image-38-1024x477.png
---
<!-- wp:paragraph -->

Queries results from an analysis or design run.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**GET_RESULT **  
_Command attributes..._

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Main command parameters

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Calculation type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available calculation types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- [Analysis](#Analysis)
- [Design](#Design)

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Main result:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will contain the main result.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Queries results from an analysis or design run.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The syntax, attributes and parameters of the GET_RESULT command differs significantly depending on the calculation type, therefore both calculation types are described in detail separately.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The result searching algorithm is the following:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. All objects that can have the requested result type are filtered based on the parameters given in the Filter attribute line. The algorithm will search for results within the remaining objects. This step is optional. If there are no filters given, then all objects will be considered.
2. Within the filtered objects, results are queried based on parameters given in the Location attribute line.
3. At this point we have as many result values, as many objects have the requested result type, and fit the filtering conditions. From these result values the minimal or the maximal will be chosen based on the value of the Object select parameter. This will become the output for the Main result.

<!-- /wp:list -->

<!-- wp:heading {"level":1} -->

# Detailed description of calculation types

<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"left"} -->

## Analysis

<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**GET_RESULT Analysis **  
AnalysisType  
ResultType  
Combination  
Filter _etc._  
Location  
TogetherWith

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command attributes

<!-- /wp:heading -->

<!-- wp:paragraph -->

Code lines directly after the GET_RESULT command can set certain attributes. The "AnalysisType", "ResultType" and "Combination" lines are always necessary, while the other ones are optional.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available command attributes:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                  |               |                                |
| -------------------------------- | ------------- | ------------------------------ |
| **Command attribute**            | **Inclusion** | **Description**                |
| AnalysisType                     | Required      | Controls analysis type         |
| ResultType                       | Required      | Controls result type           |
| Combination                      | Required      | Selects combination            |
| [Filter](#Filter-an)             | Optional      | Filters results                |
| [Loacation](#Location-an)        | Optional      | Defines location of results    |
| [TogetherWith](#TogetherWith-an) | Optional      | Requests supplementary results |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Filter:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Results can be filtered based on certain attributes. Multiple filters can be used for one GET_RESULT command with having multiple filter type-value pairs listed one after another in the Filter attribute line. In case of multiple filters the result will be queried from the intersection set of all filters.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Location:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A location can be specified from where results should be queried within an object.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### TogetherWith:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With the TogetherWith attribute supplementary results can be queried. Multiple TogetherWith attribute lines can be added to one GET_RESULT command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                    |                |                                                 |                   |
| ------------------------------------------------------------------ | -------------- | ----------------------------------------------- | ----------------- |
| **Command parameter**                                              | **Assignment** | **Value format**                                | **Input options** |
| [Main result](#Main-result-an)                                     | Required       | String                                          | Local, variable   |
| [Object ID](#Object-ID-an)                                         | Optional       | String                                          | Local, variable   |
| [x, y, z](#x,-y,-z-an)                                             | Optional       | Strings                                         | Local, variable   |
| [Analysis type](#Analysis-type-an)                                 | Required       | [Predefined strings](#analysis-types)           | Local, variable   |
| [Result category](#Result-category-an)                             | Required       | [Predefined strings](#result-categories-an)     | Local, variable   |
| [Result type](#Result-type-an)                                     | Required       | [Predefined strings](#result-types-an)          | Local, variable   |
| [Plate layer](#Plate-layer-an)                                     | Optional       | [Predefined strings](#plate-layer-inputs)       | Local, variable   |
| [Dynamic direction](#Dynamic-direction-an)                         | Optional       | [Predefined strings](#dynamic-direction-inputs) | Local, variable   |
| [Object select](#Object-select-an)                                 | Required       | [Predefined strings](#object-select-an)         | Local, variable   |
| [Combination ID](#Combination-ID-an)                               | Required       | Load or mass combination name or ID             | Local, variable   |
| [Filter types](#Filter-types-an)                                   | Optional       | [Predefined strings](#filter-types-an)          | Local, variable   |
| [Filter values](#Filter-values-an)                                 | Optional       | String                                          | Local, variable   |
| [Location type](#Location-type-an)                                 | Optional       | [Predefined strings](#location-types-an)        | Local, variable   |
| [Location value](#Location-value-an)                               | Optional       | String                                          | Local, variable   |
| [Supplementary result category](#Supplementary-result-category-an) | Optional       | Predefined strings                              | Local, variable   |
| [Supplementary result type](#Supplementary-result-type-an)         | Optional       | Predefined strings                              | Local, variable   |
| [Supplementary result](#Supplementary-result-an)                   | Optional       | String                                          | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Main result:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will contain the main result.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will contain the ID of the object where the queried result originates from.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x, y, z:

<!-- /wp:heading -->

<!-- wp:paragraph -->

3 variables that will contain the global coordinates of the queried result's location.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of these parameters is optional.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Analysis type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Type of the analysis.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available analysis types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- FirstOrder

- SecondOrder

- Buckling

- Dynamics - in this case the ResultType attribute gets extended with a parameter

  - : Dir1, Dir2, Z

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Result category:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available result categories:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Deformation

- InternalForces

- ForcesOnShell

- StressesOnShell - in this case the ResultType attribute gets extended with a parameter

  - : Top, Middle, Bottom

- Reactions

- Shape

- PlasticHinge

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Result type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available result types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Deformation: X, Y, Z, Rx, Ry, Rz, W
- InternalForces: N, Vy, Vz, T, My, Mz, B
- ForcesOnShell: Mx, My, Mxy, Nx, Ny, Nxy, Qxz, Qyz, QRz
- StressesOnShell: X, Y, XY, 1, 2, HMH
- Reactions: Fx, Fy, Fz, Mx, My, Mz
- Shape: positive integer
- PlasticHinge: positive integer

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Plate layer:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Only active if Result category = StressesOnShell.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Top
- Middle
- Bottom

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Dynamic direction:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Only active if Analysis type = Dynamics.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Dir1
- Dir2
- Z

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Object select:

<!-- /wp:heading -->

<!-- wp:paragraph -->

In case there are multiple objects to query results from, with this parameter it can be defined if the result should come from the object that has the maximal or minimal result value.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Min
- Max

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Combination ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Load or mass combination ID based on which the result is queried. The accepted input is either a single mass or load combination ID or the name of the combination with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Filter types:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available filter types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- ID
- SectionType
- Material
- Name
- Thickness
- GroupName
- GroupID

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Filter values:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Filter values paired to their filter types.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Location type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available location types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Min/Max: location of minimal/maximal result within an object. In this case the Location value parameter has to stay undefined
- EndA/EndB: result location measured from one end of the object. In this case the Location value parameter has to be set to a distance in milimeters.
- Ratio: result location at a certain length ratio of the object. In this case the Location value parameter has to be set to a ratio number between 0 and 1.
- Point: result location is at a certain global coordinate. In this case the Location value parameter has to be set to some x,y,z coordinates.

<!-- /wp:list -->

<!-- wp:paragraph -->

If not specified the defult location type is "Max".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Location value:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Value paired to the Location type.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Supplementary result category:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The same categories apply here as in case of the [Result category](#Result-category-an) parameter.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Supplementary result type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The same types apply here as in case of the [Result type ](#Result-type-an)parameter.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Supplementary result:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will conatin the supplementary result.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Example 1 (Normal force):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
GET_RESULT Analysis Result_Variable
AnalysisType FirstOrder
Combination "NAME: Load combination-1"
ResultType InternalForces N Min
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":24963,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-09-image-38-1024x477.png)](https://consteelsoftware.com/wp-content/uploads/2021/09/image-38.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Example 2 (αcr - elastic critical factor, with getting load combination ID):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
FILTER LC_list
Objecttypes Loadcombination

ARRAY_GET LC_list 0 LCID1

GET_RESULT Analysis Result_Variable
AnalysisType Buckling
Combination $LCID1
ResultType Shape 1
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":24970,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-09-image-39-1024x590.png)](https://consteelsoftware.com/wp-content/uploads/2021/09/image-39.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Example 3 (Maximum negative bending moment + deflection):

<!-- /wp:heading -->

<!-- wp:paragraph -->

This query gets the maximal negative bending moment from the model. Additionally the coordinates of the result's location are stored in the ResLocX, ResLocY and ResLocZ variables. The ID of the object that provided the result is stored in the Object_ID variable. Moreover the deformation in the "z" global direction is also queried at the same location as the main result, and stored in the Def_Z variable.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
GET_RESULT Analysis Result_Variable Object_ID ResLocX ResLocY ResLocZ
AnalysisType FirstOrder
Combination "NAME: Load combination-1"
ResultType InternalForces My Min
TogetherWith Deformation Z Def_Z
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":25578,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-10-image-2-1024x509.png)](https://consteelsoftware.com/wp-content/uploads/2021/10/image-2.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Example 4 (Shell stress + filter):

<!-- /wp:heading -->

<!-- wp:paragraph -->

This query gets the maximal positive stress in the local "x" direction from the bottom layer of all plates in the model that have a 200 mm thickness. Additionally the coordinates of the result's location are stored in the ResLocX, ResLocY and ResLocZ variables. The ID of the object that provided the result is stored in the Object_ID variable. Moreover the "nx" distributed internal force and deformation in the "z" direction are also queried at the same location as the main result, and stored in the ShellForce_nx and Def_Z variables.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
GET_RESULT Analysis Result_Variable Object_ID ResLocX ResLocY ResLocZ
AnalysisType FirstOrder
Filter Thickness 200
Combination "NAME: Load combination-1"
ResultType StressesOnShell X Bottom Max
TogetherWith ForcesOnShell Nx ShellForce_nx
TogetherWith Deformation Z Def_Z
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":25585,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-10-image-3-1024x555.png)](https://consteelsoftware.com/wp-content/uploads/2021/10/image-3.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Example 5 (Shell stress at specific location given by coordinates):

<!-- /wp:heading -->

<!-- wp:paragraph -->

This query gets the stress value at the location given by the coordinates (1000, 1000, 3000) in the local "x" direction from the bottom layer of the plate.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
GET_RESULT Analysis Result_Variable Object_ID
AnalysisType FirstOrder
Location 1000 1000 3000
Combination "NAME: Load combination-1"
ResultType StressesOnShell X Bottom Max
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":30604,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-image-5-1024x487.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/image-5.png)

<!-- /wp:image -->

<!-- wp:heading {"textAlign":"left"} -->

## Design

<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**GET_RESULT Design**  
ResultType  
Combination  
Filter _etc._  
Location  
TogetherWith

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command attributes

<!-- /wp:heading -->

<!-- wp:paragraph -->

Code lines directly after the GET_RESULT command can set certain attributes. The "ResultType" line is always necessary, while the other ones are optional.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available command attributes:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                  |               |                                |
| -------------------------------- | ------------- | ------------------------------ |
| **Command attribute**            | **Inclusion** | **Description**                |
| ResultType                       | Required      | Controls result type           |
| Combination                      | Optional      | Selects combination            |
| [Filter](#Filter-de)             | Optional      | Filters results                |
| [Loacation](#Location-de)        | Optional      | Defines location of results    |
| [TogetherWith](#TogetherWith-de) | Optional      | Requests supplementary results |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Filter:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Results can be filtered based on certain attributes. Multiple filters can be used for one GET_RESULT command with having multiple filter type-value pairs listed one after another in the Filter attribute line. In case of multiple filters the result will be queried from the intersection set of all filters.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Location:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A location can be specified from where results should be queried within an object.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### TogetherWith:

<!-- /wp:heading -->

<!-- wp:paragraph -->

With the TogetherWith attribute supplementary results can be queried. Multiple TogetherWith attribute lines can be added to one GET_RESULT command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                    |                |                                                |                   |
| ------------------------------------------------------------------ | -------------- | ---------------------------------------------- | ----------------- |
| **Command parameter**                                              | **Assignment** | **Value format**                               | **Input options** |
| [Main result](#Main-result-de)                                     | Required       | String                                         | Local, variable   |
| [Object ID](#Object-ID-de)                                         | Optional       | String                                         | Local, variable   |
| [x, y, z](#x,-y,-z-de)                                             | Optional       | Strings                                        | Local, variable   |
| [Result combination ID](#Result-combination-ID-de)                 | Optional       | String                                         | Local, variable   |
| [Result category](#Result-category-de)                             | Required       | [Predefined strings](#result-categories-de)    | Local, variable   |
| [Result type](#Result-type-de)                                     | Required       | [Predefined strings](#result-types-de)         | Local, variable   |
| [Object select](http://&Object-select-de)                          | Optional       | [Predefined strings](#Object-select-inputs-de) | Local, variable   |
| [Combination ID](#Combination-ID-de)                               | Optional       | Load combination name or ID                    | Local, variable   |
| [Filter types](#Filter-types-de)                                   | Optional       | [Predefined strings](#filter-types-de)         | Local, variable   |
| [Filter values](#Filter-values-de)                                 | Optional       | String                                         | Local, variable   |
| [Location type](#Location-type-de)                                 | Optional       | [Predefined strings](#location-types-de)       | Local, variable   |
| [Location value](#Location-value-de)                               | Optional       | String                                         | Local, variable   |
| [Supplementary result category](#Supplementary-result-category-de) | Optional       | Predefined strings                             | Local, variable   |
| [Supplementary result type](#Supplementary-result-type-de)         | Optional       | Predefined strings                             | Local, variable   |
| [Supplementary result](#Supplementary-result-de)                   | Optional       | String                                         | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Main result:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will contain the main result.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will contain the ID of the object where the queried result originates from.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x, y, z:

<!-- /wp:heading -->

<!-- wp:paragraph -->

3 variables that will contain the global coordinates of the queried result's location.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of these parameters is optional.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Result combination ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will contain the ID of the load combination that produced the queried result. The assigment of this parameter is optional.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Result category:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available result categories:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Dominant
- Steel
- ConcBeam
- ConCol
- CompCol
- AlphaUlt

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Result type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available result types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Dominant: All, Steel, Concrete, CompositeColumn
- Steel: General, Pure, Plastic, Conservative, Stability, Stablelength
- ConcBeam: Mrd, Vrdc, Vrd, VrdTrd, VrdTrdc, Asl
- ConCol: NrdMrd, VzrdVyrd
- CompCol: Pure, LocalBuckling, Interaction
- AlphaUlt: Steel

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Object select:

<!-- /wp:heading -->

<!-- wp:paragraph -->

In case there are multiple objects to query results from, with this parameter it can be defined if the result should come from the object that has the maximal or minimal result value.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Min
- Max

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Combination ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Only required if Result category=AlphaUlt.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Load combination ID based on which the result is queried. The accepted input is either a single load combination ID or the name of the combination with this syntax: "NAME: "

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Filter types:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available filter types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- ID
- SectionType
- Material
- Name
- Thickness
- GroupName
- GroupID

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Filter values:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Filter values paired to their filter types.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Location type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available location types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Min/Max: location of minimal/maximal result within an object. In this case the Location value parameter has to stay undefined
- EndA/EndB: result location measured from one end of the object. In this case the Location value parameter has to be set to a distance in milimeters.
- Ratio: result location at a certain length ratio of the object. In this case the Location value parameter has to be set to a ratio number between 0 and 1.
- Point: result location is at a certain global coordinate. In this case the Location value parameter has to be set to some x,y,z coordinates.

<!-- /wp:list -->

<!-- wp:paragraph -->

If not specified the defult location type is "Max".

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Location value:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Value paired to the Location type.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Supplementary result category:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The same categories apply here as in case of the [Result category](#Result-category-de) parameter.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Supplementary result type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The same types apply here as in case of the [Result type ](#Result-type-de)parameter.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Supplementary result:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable that will conatin the supplementary result.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Example 1 (Steel pure resistance utilization):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
GET_RESULT Design Result_Variable
ResultType Steel Pure Max
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":24949,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-09-image-36-1024x575.png)](https://consteelsoftware.com/wp-content/uploads/2021/09/image-36.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Example 2 (Steel dominant utilization):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
GET_RESULT Design Result_Variable Object_ID ResLocX ResLocY ResLocZ
ResultType Dominant All Max
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":24823,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-09-image-31-1024x564.png)](https://consteelsoftware.com/wp-content/uploads/2021/09/image-31.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Example 3 (αult):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
GET_RESULT Design Result_Variable Object_ID ResLocX ResLocY ResLocZ
ResultType AlphaUlt Steel Max
Combination "NAME: Load combination-1"
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":24829,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-09-image-32-1024x564.png)](https://consteelsoftware.com/wp-content/uploads/2021/09/image-32.png)

<!-- /wp:image -->
