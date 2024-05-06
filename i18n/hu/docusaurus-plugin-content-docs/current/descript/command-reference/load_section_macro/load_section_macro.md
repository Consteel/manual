---
title: 'LOAD_SECTION_MACRO'
description: ""
published: 2023-08-24
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/load_section_macro/
hero: ./img/wp-content-uploads-2021-08-image-3.png
---

Loads a macro section into the section list.

### Description

Sections have to be loaded into the current model file to be able to be used in the model. Initially in a new model file the section list is empty. There are several ways to load in, or create a section: library section, macro section, user drawn section. In this case the macro section option is used. The command is analogous with the highlighted "Macro section..." button at the section administration dialogue in Consteel.

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-7.png)](./img/wp-content-uploads-2021-08-image-7.png)

### Syntax

**LOAD_SECTION_MACRO** [Object ID] [Macro type] [Section name] [Material name] Section parameters...

### Command parameters

| **Command parameter**                      | **Assignment** | **Value format**                        | **Input options** |
| ------------------------------------------ | -------------- | --------------------------------------- | ----------------- |
| [Object ID](#object-id)                    | Required       | String                                  | Local, variable   |
| [Macro type](#macro-type)                  | Required       | [Predefined strings](#macro-type-table) | Local, variable   |
| [Section name](#section-name)              | Required       | String                                  | Local, variable   |
| [Material name](#material-name)            | Required       | [Predefined strings](#material-names)   | Local, variable   |
| [Section parameters](#section-parameters)  | Required       | Numerical or string                     | Local, variable   |

#### Object ID:
A string of characters that is used to identify the object that is being created. The string can contain letters, numbers and special characters as well. It can be defined as a variable that contains the string or directly as a string of characters between apostrophes.

For example:

LOAD_SECTION_MACRO **\$Section_ID** [Macro type] [Section name] [Material name] [parameter1] [parameter2] _etc._

or

LOAD_SECTION_MACRO **“Section ID 1”** [Macro type] [Section name] [Material name] [parameter1] [parameter2] _etc._

Object ID-s have to be unique for every object across all object types (eg.: sections, members, plates, loads, etc.).

#### Macro type:

Type of macro to be used.

<span id="macro-type-table" style={{paddingTop: '80px'}}> Available macro types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Macro type name**                                                               | **Macro type**  |
| --------------------------------------------------------------------------------- | --------------- |
| Welded sections                                                                   | WLD-...         |
| [Welded I or H](#welded-i-or-h)                                                   | WLD-IH          |
| [Welded box](#welded-box)                                                         | WLD-BOX         |
| [Welded maltese](#welded-maltese)                                                 | WLD-MALTESE     |
| [Welded half maltese](#welded-half-maltese)                                       | WLD-HALFMALTESE |
| [Welded hat](#welded-hat)                                                         | WLD-HAT         |
| [Welded T](#welded-t)                                                             | WLD-T           |
| [Welded WQ](#welded-wq)                                                           | WLD-WQ          |
| [Slant flange welded I or H](#slant-flange-welded-i-or-h)                         | WLD-SLANTIH     |
| [Welded C](#welded-c)                                                             | WLD-C           |
| Hot rolled sections                                                               | HR-...          |
| [Hot rolled I or H](#hot-rolled-i-or-h)                                           | HR-IH           |
| [Hot rolled L](#hot-rolled-l)                                                     | HR-L            |
| [Hot rolled U](#hot-rolled-u)                                                     | HR-U            |
| [Hot rolled circular hollow section](#hot-rolled-circular-hollow-section)         | HR-CHS          |
| [Hot rolled T](#hot-rolled-t)                                                     | HR-T            |
| [Flat shape](#flat-shape)                                                         | HR-FS           |
| [Hot rolled rectangular hollow section](#hot-rolled-rectangular-hollow-section)   | HR-RHS          |
| [Round bar](#round-bar)                                                           | HR-RB           |
| Cold-formed sections                                                              | CF-...          |
| [Cold-formed rectangular hollow section](#cold-formed-rectangular-hollow-section) | CF-RHS          |
| [Cold-formed circular hollow section](#cold-formed-circular-hollow-section)       | CF-CHS          |
| [Cold-formed L](#cold-formed-l)                                                   | CF-L            |
| [Cold-formed C](#cold-formed-c) (simplified) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>                      | CF-C            |
| [Cold-formed Z](#cold-formed-z) (simplified) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>                      | CF-Z            |

#### Section name:
Name of the section that will appear in the section list in Consteel. String of characters between apostrophes.

#### Material name:
Name of the material to be used for the section. String of characters between apostrophes. Exact match is necessary with the Consteel material names.

For example:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] **"S 235 EN 10025-2"** \[parameter1] \[parameter2] _etc._

<span id="material-names" style={{paddingTop: '80px'}}> The material names can be viewed in Consteel at the highlighted area of the material dialogue name dropdown. </span>

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-3.png)](./img/wp-content-uploads-2021-08-image-3.png)

#### Section parameters:
Section parameters like height, breadth, thickness, etc.. The quantity and meaning of the parameters depend on the macro type.

---
## Detailed description of macro types

## Welded sections

### Welded I or H

#### Macro type:

WLD-IH

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-4.png)](./img/wp-content-uploads-2021-08-image-4.png)


| Notation | Definition             |
| -------- | ---------------------- |
| b1       | Upper flange width     |
| tf1      | Upper flange thickness |
| h        | Section height         |
| tw       | Web thickness          |
| b2       | Lower flange width     |
| tf2      | Lower flange thickness |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[b1] \[tf1] \[h] \[tw] \[b2] \[tf2]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-IH "WLD-IH (Descript)" "S 235 EN 10025-2" 100 10 200 6 100 10
```

### Welded box

#### Macro type:

WLD-BOX

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-5.png)](./img/wp-content-uploads-2021-08-image-5.png)

| Notation | Definition                      |
| -------- | ------------------------------- |
| h        | Section height                  |
| b        | Section width                   |
| bw       | Web plate width                 |
| tf1      | Upper flange thickness          |
| tf2      | Lower flange thickness          |
| tw1      | Web thickness on the left side  |
| tw2      | Web thickness on the right side |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[bw] \[tf1] \[tf2] \[tw1] \[tw2]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-BOX "WLD-BOX (Descript)" "S 235 EN 10025-2" 300 400 200 12 12 10 10
```

### Welded maltese

#### Macro type:

WLD-MALTESE

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-6.png)](./img/wp-content-uploads-2021-08-image-6.png)

| Notation | Definition          |
| -------- | ------------------- |
| h1       | Section height      |
| tw1      | Web thickness       |
| b1       | Section width       |
| tf1      | Flange thickness    |
| h2       | Section height      |
| tw2      | Web plate thickness |
| b2       | Section width       |
| tf2      | Flange thickness    |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h1] \[tw1] \[b1] \[tf1] \[h2] \[tw2] \[b2] \[tf2]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-MALTESE "WLD-MALTESE (Descript)" "S 235 EN 10025-2" 400 10 200 20 300 8 150 16
```

### Welded half maltese

#### Macro type:

WLD-HALFMALTESE

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-8.png)](./img/wp-content-uploads-2021-08-image-8.png)

| Notation | Definition          |
| -------- | ------------------- |
| h1       | Section height      |
| tw1      | Web thickness       |
| b1       | Section width       |
| tf1      | Flange thickness    |
| h2       | Section height      |
| tw2      | Web plate thickness |
| b2       | Section width       |
| tf2      | Flange thickness    |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h1] \[tw1] \[b1] \[tf1] \[h2] \[tw2] \[b2] \[tf2]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-HALFMALTESE "WLD-HALFMALTESE (Descript)" "S 235 EN 10025-2" 400 10 200 20 150 8 150 16
```

### Welded hat

#### Macro type:

WLD-HAT

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-9.png)](./img/wp-content-uploads-2021-08-image-9.png)

| Notation | Definition              |
| -------- | ----------------------- |
| h        | Section height          |
| b        | Section width at flange |
| bw       | Distance between webs   |
| tf       | Flange thickness        |
| tw       | Width of webs           |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[bw] \[tf] \[tw]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-HAT "WLD-HAT (Descript)" "S 235 EN 10025-2" 400 500 300 30 15
```

### Welded T

#### Macro type:

WLD-T

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-10.png)](./img/wp-content-uploads-2021-08-image-10.png)

| Notation | Definition             |
| -------- | ---------------------- |
| b        | Upper flange width     |
| tf       | Upper flange thickness |
| h        | Section height         |
| tw       | Web thickness          |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[b] \[tf] \[h] \[tw]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-T "WLD-T (Descript)" "S 235 EN 10025-2" 100 10 200 6
```

### Welded WQ

#### Macro type:

WLD-WQ

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-11.png)](./img/wp-content-uploads-2021-08-image-11.png)

| Notation | Definition                  |
| -------- | --------------------------- |
| h        | Section height              |
| b        | Lower flange width          |
| bw       | Distance between web plates |
| tf1      | Upper flange thickness      |
| tf2      | Lower flange thickness      |
| tw       | Web thickness               |
| c        | Lower flange cantilever     |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[bw] \[tf1] \[tf2] \[tw] \[c]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-WQ "WLD-WQ (Descript)" "S 235 EN 10025-2" 300 300 180 15 20 10 25
```

### Slant flange welded I or H

#### Macro type:

WLD-SLANTIH

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-12.png)](./img/wp-content-uploads-2021-08-image-12.png)

| Notation | Definition              |
| -------- | ----------------------- |
| b1       | Upper flange width      |
| tf1      | Upper flange thickness  |
| h        | Section height          |
| tw       | Web thickness           |
| b2       | Lower flange width      |
| tf2      | Lower flange thickness  |
| Alpha    | Pitch of upper flange   |
| b12      | Upper flange cantilever |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[b1] \[tf1] \[h] \[tw] \[b2] \[tf2] \[Alpha] \[b12]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-SLANTIH "WLD-SLANTIH (Descript)" "S 235 EN 10025-2" 414 30 397 15 296 30 73 144
```

### Welded C

#### Macro type:

WLD-C

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-13.png)](./img/wp-content-uploads-2021-08-image-13.png)

| Notation | Definition             |
| -------- | ---------------------- |
| h        | Section height         |
| t3       | Web thickness          |
| b1       | Upper plate width      |
| t1       | Upper flange thickness |
| b2       | Lower flange width     |
| t2       | Lower flange thickness |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[t3] \[b1] \[t1] \[b2] \[t2]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 WLD-C "WLD-C (Descript)" "S 235 EN 10025-2" 200 6 60 10 100 12
```

## Hot rolled sections

### Hot rolled I or H

#### Macro type:

HR-IH

#### Parameters:

[![](./img/wp-content-uploads-2021-08-image-17.png)](./img/wp-content-uploads-2021-08-image-17.png)

| Notation | Definition             |
| -------- | ---------------------- |
| h        | Height                 |
| b        | Flange width           |
| tw       | Web thickness          |
| tf       | Flange thickness       |
| r        | Corner rounding radius |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[tw] \[tf] \[r]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-IH "HR-IH (Descript)" "S 235 EN 10025-2" 200 100 6 10 15
```

### Hot rolled L

#### Macro type:

HR-L

#### Parameters:

[![](./img/wp-content-uploads-2021-08-image-18.png)](./img/wp-content-uploads-2021-08-image-18.png)

| Notation | Definition                   |
| -------- | ---------------------------- |
| h        | Height                       |
| b        | Flange width                 |
| tw       | Web thickness                |
| tf       | Flange thickness             |
| r1       | Inner corner rounding radius |
| r2       | Inner edge rounding radius   |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[tw] \[tf] \[r1] \[r2]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-L "HR-L (Descript)" "S 235 EN 10025-2" 100 100 10 10 12 6
```

### Hot rolled U

#### Macro type:

HR-U

#### Parameters:

[![](./img/wp-content-uploads-2021-08-image-19.png)](./img/wp-content-uploads-2021-08-image-19.png)

| Notation | Definition                   |
| -------- | ---------------------------- |
| h        | Height                       |
| b        | Flange width                 |
| tw       | Web thickness                |
| tf       | Flange thickness             |
| r1       | Inner corner rounding radius |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[tw] \[tf] \[r1]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-U "HR-U (Descript)" "S 235 EN 10025-2" 200 80 6 11 13
```

### Hot rolled circular hollow section

#### Macro type:

HR-CHS

#### Parameters:

[![](./img/wp-content-uploads-2021-08-image-20.png)](./img/wp-content-uploads-2021-08-image-20.png)

| Notation | Definition      |
| -------- | --------------- |
| d        | Outer diameter  |
| t        | Plate thickness |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[d] \[t]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-CHS "HR-CHS (Descript)" "S 235 EN 10025-2" 300 18
```

### Hot rolled T

#### Macro type:

HR-T

#### Parameters:

[![](./img/wp-content-uploads-2021-08-image-21.png)](./img/wp-content-uploads-2021-08-image-21.png)

| Notation | Definition             |
| -------- | ---------------------- |
| h        | Height                 |
| b        | Flange width           |
| tf       | Flange thickness       |
| tw       | Web thickness          |
| r        | Corner rounding radius |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[tf] \[tw] \[r]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-T "HR-T (Descript)" "S 235 EN 10025-2" 200 100 10 6 12
```

### Flat shape

#### Macro type:

HR-FS

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-14.png)](./img/wp-content-uploads-2021-08-image-14.png)

| Notation | Definition      |
| -------- | --------------- |
| h        | Section height  |
| t        | Plate thickness |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[t]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-FS "HR-FS (Descript)" "S 235 EN 10025-2" 300 25
```

### Hot rolled rectangular hollow section

#### Macro type:

HR-RHS

#### Parameters:

[![](./img/wp-content-uploads-2021-08-image-22.png)](./img/wp-content-uploads-2021-08-image-22.png)

| Notation | Definition             |
| -------- | ---------------------- |
| h        | Height                 |
| b        | Flange width           |
| t        | Plate thickness        |
| r        | Corner rounding radius |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[t] \[r]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-RHS "HR-RHS (Descript)" "S 235 EN 10025-2" 100 80 8 20
```

### Round bar

#### Macro type:

HR-RB

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-15.png)](./img/wp-content-uploads-2021-08-image-15.png)

| **Notation** | **Definition** |
| ------------ | -------------- |
| d            | Diameter       |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[d]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 HR-RB "HR-RB (Descript)" "S 235 EN 10025-2" 20
```

## Cold-formed sections

### Cold-formed rectangular hollow section

#### Macro type:

CF-RHS

#### Parameters:

[![](./img/wp-content-uploads-2021-08-image-24.png)](./img/wp-content-uploads-2021-08-image-24.png)

| Notation | Definition             |
| -------- | ---------------------- |
| h        | Height                 |
| b        | Flange width           |
| t        | Plate thickness        |
| r        | Corner rounding radius |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[t] \[r]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 CF-RHS "CF-RHS (Descript)" "S 235 EN 10025-2" 100 80 5 15
```

### Cold-formed circular hollow section

#### Macro type:

CF-CHS

#### Parameters:

[![](./img/images-e-ea-ColdHotCircularHollow.png)](./img/images-e-ea-ColdHotCircularHollow.png)

| Notation | Definition      |
| -------- | --------------- |
| d        | Outer diameter  |
| t        | Plate thickness |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[d] \[t]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 CF-CHS "CF-CHS (Descript)" "S 235 EN 10025-2" 300 18
```

### Cold-formed L

#### Macro type:

CF-L

#### Parameters:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-16.png)](./img/wp-content-uploads-2021-08-image-16.png)

| **Notation** | **Definition**  |
| ------------ | --------------- |
| h            | Section height  |
| b            | Section width   |
| t            | Plate thickness |
| r            | Radius          |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] [Macro type] [Section name] [Material name] \[h] \[b] \[t] \[r]

#### Sample code
```
LOAD_SECTION_MACRO Sec_ID1 CF-L "CF-L (Descript)" "S 235 EN 10025-2" 400 300 20 30
```

### Cold-formed C
<span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

A simplified version for loading cold-formed C sections is available within the LOAD_SECTION_MACRO command. This simplified version has limited options for stiffener definition. The cold-formed C section can only be defined with single folded edge stiffeners witin the LOAD_SECTION_MACRO command. For more detailed stiffener options use the [LOAD_SECTION_MACRO_STIFFENED ](/docs/descript/command-reference/load_section_macro_stiffened/)command.

#### Macro type:

CF-C

#### Parameters:

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-17.png)](./img/wp-content-uploads-2023-08-image-17.png)

| Notation            | Definition                               |
| ------------------- | ---------------------------------------- |
| h                   | Section height \[mm]                     |
| b1                  | Upper flange width \[mm]                 |
| b2                  | Lower flange width \[mm]                 |
| t                   | Thickness \[mm]                          |
| R                   | Rounding radius \[mm]                    |
| c1                  | Top edge stiffener length \[mm]          |
| alpha1              | Top edge stiffener folding angle \[°]    |
| c2                  | Bottom edge stiffener length \[mm]       |
| alpha2              | Bottom edge stiffener folding angle \[°] |
| Forming method      | Forming method (optional parameter)      |
| Thickness tolerance | Thickness tolerance (optional parameter) |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] CF-C [Section name] [Material name] \[h] \[b1] \[b2] \[t] \[R] \[c1] \[alpha1] \[c2] \[alpha2] [Forming method] [Thickness tolerance]

#### Forming method:
Valid inputs:
- Cold rolled (default)
- Press broken
- Other cold formed

#### Thickness tolerance:
Valid inputs:
- Normal (default)
- Special

#### Sample code

**Minimal parameters:**
```
LOAD_SECTION_MACRO  Sec_ID1  CF-C "CF C (Descript)" "S350GD+Z EN10346" 150 90 100 2 4 20 120 30 90
```

**All parameters:**
```
LOAD_SECTION_MACRO  Sec_ID1  CF-C "CF C (Descript)" "S350GD+Z EN10346" 150 90 100 2 4 20 120 30 90 "Cold rolled" Normal
```

### Cold-formed Z
<span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

A simplified version for loading cold-formed Z sections is available within the LOAD_SECTION_MACRO command. This simplified version has limited options for stiffener definition. The cold-formed Z section can only be defined with single folded edge stiffeners witin the LOAD_SECTION_MACRO command. For more detailed stiffener options use the [LOAD_SECTION_MACRO_STIFFENED ](/docs/descript/command-reference/load_section_macro_stiffened/)command.


#### Macro type:

CF-Z

#### Parameters:

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-27.png)](./img/wp-content-uploads-2023-08-image-27.png)

| Notation            | Definition                               |
| ------------------- | ---------------------------------------- |
| h                   | Section height \[mm]                     |
| b1                  | Upper flange width \[mm]                 |
| b2                  | Lower flange width \[mm]                 |
| t                   | Thickness \[mm]                          |
| R                   | Rounding radius \[mm]                    |
| c1                  | Top edge stiffener length \[mm]          |
| alpha1              | Top edge stiffener folding angle \[°]    |
| c2                  | Bottom edge stiffener length \[mm]       |
| alpha2              | Bottom edge stiffener folding angle \[°] |
| Forming method      | Forming method (optional parameter)      |
| Thickness tolerance | Thickness tolerance (optional parameter) |

Parameter notations substituted into the command syntax:

LOAD_SECTION_MACRO [Object ID] CF-Z [Section name] [Material name] \[h] \[b1] \[b2] \[t] \[R] \[c1] \[alpha1] \[c2] \[alpha2] [Forming method] [Thickness tolerance]

#### Forming method:
Valid inputs:
- Cold rolled (default)
- Press broken
- Other cold formed

#### Thickness tolerance:
Valid inputs:
- Normal (default)
- Special

#### Sample code

**Minimal parameters:**
```
LOAD_SECTION_MACRO  Sec_ID1  CF-Z "CF Z (Descript)" "S350GD+Z EN10346" 150 90 100 2 4 20 120 30 90
```

**All parameters:**
```
LOAD_SECTION_MACRO  Sec_ID1  CF-Z "CF Z (Descript)" "S350GD+Z EN10346" 150 90 100 2 4 20 120 30 90 "Cold rolled" Normal
```
