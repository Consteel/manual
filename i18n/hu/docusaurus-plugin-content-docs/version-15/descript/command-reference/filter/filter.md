---
title: 'FILTER'
description: ""
published: 2023-08-18
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/filter/
hero: ../../../defaultHero.jpg
---

Creates an ID list of model objects based on object type and attributes.

### Description

The FILTER command lists object IDs with the given object types. All object types that are given will serve as a basis for the filtering. The filtering can be restricted based on values of object attributes. The attribute based filters are optional. If there is none given, then the result array will contain all object IDs with the specified object type(s). If there is more then one filter condition, then the result will be the intersection of the filtered sets of objects, in other words the objects for which all filter conditions are true.

### Syntax

**FILTER** [Result array]  
Objecttypes [Object type]  
[Filter 1] [Filter 1 value]  
[Filter 2] [Filter 2 value]  
[Filter 3] [Filter 3 value]  
_etc._

### Command parameters

| **Command parameter**           | **Assignment** | **Value format**                        | **Input options** |
| ------------------------------- | -------------- | --------------------------------------- | ----------------- |
| [Result array](#result-array)   | Required       | String                                  | Local, variable   |
| [Object type](#object-type)     | Required       | [Predefined strings](#Object-type-name) | Local, variable   |
| [Filters](#filters)             | Optional       | [Predefined strings](#Filter-name)      | Local, variable   |
| [Filter values](#filter-values) | Optional       | String, integer, float                  | Local, variable   |

#### Result array:
The array that will contain the IDs of objects that are the result of the filtering.

#### Object type:
Object types the command will filter within. One ore more object types can be given for one FILTER command within the objecttypes row.

<span id="Object-type-name" style={{paddingTop: '80px'}}> Available object types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Object type name**                                                              | **Object type**     |
| --------------------------------------------------------------------------------- | ------------------- |
| Structural members tab                                                            | -                   |
| Section <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>               | Section             |
| Structural member                                                                 | Structural_Member   |
| Structural Plate                                                                  | Structural_Plate    |
| Haunch <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>                | Haunched_Member     |
| Tapered member <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>        | Tapered_Member      |
| Steel material <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>        | Steel               |
| Coated steel material <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span> | Coated_Steel        |
| Concrete material <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>     | Concrete            |
| Rebar material <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>        | Rebar               |
| Point support                                                                     | Support_Point       |
| Line support                                                                      | Support_Edge        |
| Surface support                                                                   | Support_Plate       |
| Point support type <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>    | Support             |
| Release type <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>          | Release             |
| Link <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>                  | Link                |
| Loads tab                                                                         | -                   |
| Load group <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>            | LoadGroup           |
| Load case                                                                         | LoadCase            |
| Load combination                                                                  | LoadCombination     |
| Point load                                                                        | NodeForce           |
| Line load                                                                         | MemberForce         |
| Surface load                                                                      | PlateForce          |
| Load transfer surface <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span> | LoadTransferSurface |
| Mass tab                                                                          | -                   |
| Mass group <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>            | MassGroup           |
| Mass case                                                                         | MassCase            |
| Mass combination                                                                  | MassCombination     |
| Point mass <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>            | NodeMass            |
| Other                                                                             | -                   |
| Portion                                                                           | Portion             |

#### Filters:
The object attributes based on which the filtering will be executed.

<span id="Filter-name" style={{paddingTop: '80px'}}> Available object attributes for filtering: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Filter name** | **Filter**     | **Applicable object types**         |
| --------------- | -------------- | ----------------------------------- |
| Material name   | material       | Structural_Member, Structural_Plate |
| Object name     | name           | All types                           |
| Plate thickness | platethickness | Structural_Plate                    |
| Section name    | section        | Structural_Member                   |
| Group name      | groupid        | Structural_Member, Structural_Plate |
| Section group   | sectiontype    | Structural_Member, Section          |

#### Filter values:
The attribute values that will be used for filtering.

### Sample code

**All structural members:**

```
FILTER Mem_IDs
Objecttypes Structural_member
```

**All load combinations:**

```
FILTER LC_IDs
Objecttypes Loadcombination
```

**All structural members and plates with material "S 235 EN 10025-2":**

```
FILTER Filter_Result_IDs
Objecttypes Structural_Member Structural_Plate
Material "S 235 EN 10025-2"
```

**All structural plates with material "S 235 EN 10025-2" and thickness of 20 mm:**

```
FILTER Filter_Result_IDs
Objecttypes Structural_plate
Material "S 235 EN 10025-2"
Platethickness 20
```
