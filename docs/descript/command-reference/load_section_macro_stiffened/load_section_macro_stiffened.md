---
title: 'LOAD_SECTION_MACRO_STIFFENED'
description: ""
published: 2023-08-22
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/load_section_macro_stiffened/
hero: ./img/wp-content-uploads-2023-08-image-12.png
---
<!-- wp:paragraph -->

Loads a stiffened macro section into the section list. _(since CS 17)_

<!-- /wp:paragraph -->

<!-- wp:heading {"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**LOAD_SECTION_MACRO_STIFFENED**  
S1 Stiffener parameters...  
S2 Stiffener parameters...  
...

<!-- /wp:paragraph -->

<!-- wp:heading {"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                             |                |                                         |                   |
| ------------------------------------------- | -------------- | --------------------------------------- | ----------------- |
| **Command parameter**                       | **Assignment** | **Value format**                        | **Input options** |
| [Object ID](#Oject-ID)                      | Required       | String                                  | Local, variable   |
| [Macro type](#Macro-type)                   | Required       | [Predefined strings](#Macro-type-table) | Local, variable   |
| [Section name](#Section-name)               | Required       | String                                  | Local, variable   |
| [Material name](#Material-name)             | Required       | [Predefined strings](#material-names)   | Local, variable   |
| [Size parameters](#Size-parameters)         | Required       | Numerical                               | Local, variable   |
| [Forming method](#Forming-method)           | Optional       | [Predefined strings](#Valid-inputs-fm)  | Local, variable   |
| [Thickness tolerance](#Thickness-tolerance) | Optional       | [Predefined strings](#Valid-inputs-tt)  | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

A string of characters that is used to identify the object that is being created. The string can contain letters, numbers and special characters as well. It can be defined as a variable that contains the string or directly as a string of characters between apostrophes.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

For example:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED **\$Section_ID** etc.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

or

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED **“Section ID 1”** etc.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Object ID-s have to be unique for every object across all object types (eg.: sections, members, plates, loads, etc.).

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Macro type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Type of macro to be used.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available macro types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"caption-align-left is-style-stripes","captionAlignment":"left"} -->

| **Macro type name**                     |     | **Macro type** |
| --------------------------------------- | --- | -------------- |
| [Cold-formed C](#Cold-formed-C)         |     | CF-C           |
| [Cold-formed Z](#Cold-formed-Z)         |     | CF-Z           |
| [Cold-formed Sigma](#Cold-formed-Sigma) |     | CF-SIGMA       |
| [Cold-formed Zeta](#Cold-formed-Zeta)   |     | CF-ZETA        |
| [Cold-formed Omega](#Cold-formed-Omega) |     | CF-OMEGA       |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Section name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the section that will appear in the section list in Consteel. String of characters between apostrophes.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Material name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the material to be used for the section. String of characters between apostrophes. Exact match is necessary with the Consteel material names.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

For example:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED ** "S350GD+Z EN10346"** \[parameter1] \[parameter2] etc.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The material names can be viewed in Consteel at the highlighted area of the material dialogue name dropdown.

<!-- /wp:paragraph -->

<!-- wp:image {"id":67969,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-12.png)](./img/wp-content-uploads-2023-08-image-12.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Size parameters:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Section parameters like height, breadth, thickness, etc.. The quantity and meaning of the parameters depend on the macro type.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Forming method:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Valid inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Cold rolled (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Press broken
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Other cold formed
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Thickness tolerance:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Valid inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Normal (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Special
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading -->

## Stiffener definition:

<!-- /wp:heading -->

<!-- wp:paragraph -->

To add a stiffener to the section, the stiffener data have to be defined in a row immediately after the LOAD_SECTION_MACRO_STIFFENED command. The available stiffener positions and their types depend on the macro type. Each additional row defines 1 stiffener.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax:

<!-- /wp:heading -->

<!-- wp:paragraph -->

...

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Stiffener position:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Defines into which position the stiffener will be added. The available stiffener positions depend on the macro type.

<!-- /wp:paragraph -->

<!-- wp:image {"id":68191,"sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-33-1024x196.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Valid inputs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- S1
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S2
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S3
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S4
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S5
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Stiffener types:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available stiffener types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                         |                                              |
| ----------------------- | -------------------------------------------- |
| **Stiffener type name** | **Stiffener type** (type this into Descript) |
| Edge stiffener          | Edge_Stiffener                               |
| Flange stiffener        | Flange_Stiffener                             |
| Web stiffener           | Web_Stiffener                                |

Web_Stiffener

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Edge stiffener (single folded):

<!-- /wp:heading -->

<!-- wp:image {"id":68040,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-18.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Edge_Stiffener** \[b] \[alpha] \[R]

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- b: stiffener length \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- alpha: fold angle \[°]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R: rounding radius \[mm]
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Sample code:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
S1 Edge_Stiffener 30 120 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Edge stiffener (double folded):

<!-- /wp:heading -->

<!-- wp:image {"id":68050,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-19.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Edge_Stiffener** \[b] \[alpha] \[R1] \[c] \[beta] \[R2]

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- b: 1st fold length \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- alpha: 1st fold angle \[°]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R1: 1st rounding radius \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- c: 2nd fold length \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- beta: 2ndfold angle \[°]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R2: 2nd rounding radius \[mm]
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Sample code:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
S5 Edge_Stiffener 20 90 4 20 90 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Flange stiffener (Triangular):

<!-- /wp:heading -->

<!-- wp:image {"id":68060,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-20.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Flange \_Stiffener** **Triangular** \[l] \[h] \[R] \[x]

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- l: length \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- h: height \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R: rounding radius \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x: distance from flange end \[mm]
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Sample code:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
S2 Flange_Stiffener Triangular 6 6 2 20
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Flange stiffener (Rounded):

<!-- /wp:heading -->

<!-- wp:image {"id":68070,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-21.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Flange \_Stiffener** **Rounded** \[d] \[R] \[x]

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- d: diameter \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R: rounding radius \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x: distance from flange end \[mm]
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Sample code:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
S4 Flange_Stiffener Rounded 6 2 20
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Web stiffener (Triangular):

<!-- /wp:heading -->

<!-- wp:image {"id":68100,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-24.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Web \_Stiffener** **Triangular** \[l] \[h] \[R] \[Position] \[x1]

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- l: length \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- h: height \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R: rounding radius \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Position: Valid inputs: FromA, FromB, RelFromA
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x1: 1st distance from flange end \[mm] or \[%]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Side 1: 1st stiffener side. Valid inputs: Left, Right
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x2: 2nd distance from flange end \[mm] or \[%] (optional parameter)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Side 2: 2nd stiffener side. Valid inputs: Left, Right (optional parameter)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

The presence of the _x2_ and _Side 2_ parameters tell descript that we want a duplicated web stiffener. Therefore these parameters need to be either both present or both missing.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Sample code:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
S3 Web_Stiffener Triangular 6 6 2 RelFromA 50 Left             // Single

S3 Web_Stiffener Triangular 6 6 2 RelFromA 25 Left 50 Left     // Duplicated
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Web stiffener (Rounded):

<!-- /wp:heading -->

<!-- wp:image {"id":68110,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-25.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Web \_Stiffener** **Rounded** \[d] \[R] \[Position] \[x1]

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- d: diameter \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R: rounding radius \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Position: Valid inputs: FromA, FromB, RelFromA
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x1: 1st distance from flange end \[mm] or \[%]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Side 1: 1st stiffener side. Valid inputs: Left, Right
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x2: 2nd distance from flange end \[mm] or \[%] (optional parameter)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Side 2: 2nd stiffener side. Valid inputs: Left, Right (optional parameter)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

The presence of the _x2_ and _Side 2_ parameters tell descript that we want a duplicated web stiffener. Therefore these parameters need to be either both present or both missing.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Sample code:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
S3 Web_Stiffener Rounded 6 2 FromA 50 Left              // Single

S3 Web_Stiffener Rounded 6 2 FromA 50 Left 51 Right     // Duplicated
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Web stiffener (Trapezoidal):

<!-- /wp:heading -->

<!-- wp:image {"id":68120,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-26.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Web \_Stiffener** **Trapezoidal** \[l] \[h] \[alpha] \[R] \[Position] \[x1]

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- l: length \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- h: height \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- alpha: fold angle \[°]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- R: rounding radius \[mm]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Position: Valid inputs: FromA, FromB, RelFromA
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x1: 1st distance from flange end \[mm] or \[%]
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Side 1: 1st stiffener side. Valid inputs: Left, Right
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- x2: 2nd distance from flange end \[mm] or \[%] (optional parameter)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Side 2: 2nd stiffener side. Valid inputs: Left, Right (optional parameter)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

The presence of the _x2_ and _Side 2_ parameters tell descript that we want a duplicated web stiffener. Therefore these parameters need to be either both present or both missing.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Sample code:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
S2 Web_Stiffener Trapezoidal 20 6 15 2 FromA 50 Right              // Single

S2 Web_Stiffener Trapezoidal 20 6 15 2 FromA 50 Right 50 Right     // Duplicated
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Sections have to be loaded into the current model file to be able to be used in the model. Initially in a new model file the section list is empty. There are several ways to load in, or create a section: library section, macro section, user drawn section. This command loads in cold-formed macro sections with optional stiffeners.

<!-- /wp:paragraph -->

<!-- wp:image {"id":68013,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-16.png)

<!-- /wp:image -->

<!-- wp:heading {"level":1,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

# Detailed description of macro types

<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"left","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## Cold-formed C

<!-- /wp:heading -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Macro type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

CF-C

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Parameters:

<!-- /wp:heading -->

<!-- wp:image {"id":68027,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-17.png)

<!-- /wp:image -->

<!-- wp:table {"className":"is-style-stripes"} -->

| Notation | Definition         |
| -------- | ------------------ |
| h        | Section height     |
| b1       | Upper flange width |
| b2       | Lower flange width |
| t        | Thickness          |
| R        | Rounding radius    |

<!-- /wp:table -->

<!-- wp:paragraph -->

Parameter notations substituted into the command syntax:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Stiffeners:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available stiffener positions and types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- S1: Edge stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S2: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S3: Web stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S4: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S5: Edge stiffener
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Sample code:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Simplest form: (minimal parameters, no stiffeners)

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-C "CF C (Descript)" "S350GD+Z EN10346" 150 90 90 2 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All parameters and stiffeners:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-C "CF C (Descript)" "S350GD+Z EN10346" 150 90 90 2 4 "Press broken" Special
S1 Edge_Stiffener 30 120 4
S2 Flange_Stiffener Triangular 6 6 2 20
S3 Web_Stiffener Triangular 6 6 2 RelFromA 25 Left 50 Left
S4 Flange_Stiffener Rounded 6 2 20
S5 Edge_Stiffener 20 90 4 20 90 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## Cold-formed Z

<!-- /wp:heading -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Macro type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

CF-Z

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Parameters:

<!-- /wp:heading -->

<!-- wp:image {"id":68130,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-27.png)

<!-- /wp:image -->

<!-- wp:table {"className":"is-style-stripes"} -->

| Notation | Definition         |
| -------- | ------------------ |
| h        | Section height     |
| b1       | Upper flange width |
| b2       | Lower flange width |
| t        | Thickness          |
| R        | Rounding radius    |

<!-- /wp:table -->

<!-- wp:paragraph -->

Parameter notations substituted into the command syntax:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Stiffeners:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available stiffener positions and types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- S1: Edge stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S2: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S3: Web stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S4: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S5: Edge stiffener
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Sample code:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Simplest form: (minimal parameters, no stiffeners)

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-Z "CF Z (Descript)" "S350GD+Z EN10346" 150 90 90 2 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All parameters and stiffeners:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-Z "CF Z (Descript)" "S350GD+Z EN10346" 150 90 90 2 4 "Press broken" Special
S1 Edge_Stiffener 30 120 4
S2 Flange_Stiffener Triangular 6 6 2 20
S3 Web_Stiffener Rounded 6 2 FromA 50 Left 51 Right
S4 Flange_Stiffener Rounded 6 2 20
S5 Edge_Stiffener 20 90 4 20 90 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## Cold-formed Sigma

<!-- /wp:heading -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Macro type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

CF-SIGMA

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Parameters:

<!-- /wp:heading -->

<!-- wp:image {"id":68141,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-28.png)

<!-- /wp:image -->

<!-- wp:table {"className":"is-style-stripes"} -->

| Notation | Definition         |
| -------- | ------------------ |
| h        | Section height     |
| b1       | Upper flange width |
| b2       | Lower flange width |
| t        | Thickness          |
| R        | Rounding radius    |
| a1       | Web top height     |
| a2       | Web bottom height  |
| alpha    | Folding angle      |
| d        | Web distance       |

<!-- /wp:table -->

<!-- wp:paragraph -->

Parameter notations substituted into the command syntax:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Stiffeners:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available stiffener positions and types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- S1: Edge stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S2: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S3: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S4: Edge stiffener
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Sample code:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Simplest form: (minimal parameters, no stiffeners)

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-SIGMA "CF SIGMA (Descript)" "S350GD+Z EN10346" 150 90 90 2 4 40 40 50 20
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All parameters and stiffeners:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-SIGMA "CF SIGMA (Descript)" "S350GD+Z EN10346" 150 90 90 2 4 40 40 50 20 "Press broken" Special
S1 Edge_Stiffener 30 120 4
S2 Flange_Stiffener Triangular 6 6 2 20
S3 Flange_Stiffener Rounded 6 2 20
S4 Edge_Stiffener 20 90 4 20 90 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## Cold-formed Zeta

<!-- /wp:heading -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Macro type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

CF-SIGMA

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Parameters:

<!-- /wp:heading -->

<!-- wp:image {"id":68151,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-29.png)

<!-- /wp:image -->

<!-- wp:table {"className":"is-style-stripes"} -->

| Notation | Definition         |
| -------- | ------------------ |
| h        | Section height     |
| b1       | Upper flange width |
| b2       | Lower flange width |
| t        | Thickness          |
| R        | Rounding radius    |
| a1       | Web top height     |
| a2       | Web bottom height  |
| alpha    | Folding angle      |
| d1       | Web distance 1     |
| d2       | Web distance 2     |

<!-- /wp:table -->

<!-- wp:paragraph -->

Parameter notations substituted into the command syntax:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Stiffeners:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available stiffener positions and types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- S1: Edge stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S2: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S3: Flange stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S4: Edge stiffener
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Sample code:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Simplest form: (minimal parameters, no stiffeners)

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-ZETA "CF ZETA (Descript)" "S350GD+Z EN10346" 150 90 90 2 4 40 40 50 20 20
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All parameters and stiffeners:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-ZETA "CF ZETA (Descript)" "S350GD+Z EN10346" 150 90 90 2 4 40 40 50 20 20 "Press broken" Special
S1 Edge_Stiffener 30 120 4
S2 Flange_Stiffener Triangular 6 6 2 20
S3 Flange_Stiffener Rounded 6 2 20
S4 Edge_Stiffener 20 90 4 20 90 4
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"textAlign":"left","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

## Cold-formed Omega

<!-- /wp:heading -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Macro type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

CF-OMEGA

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Parameters:

<!-- /wp:heading -->

<!-- wp:image {"id":68171,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-31.png)

<!-- /wp:image -->

<!-- wp:table {"className":"is-style-stripes"} -->

| Notation | Definition      |
| -------- | --------------- |
| h        | Section height  |
| b        | Flange width    |
| a        | Lip size        |
| t        | Thickness       |
| R        | Rounding radius |
| alpha    | Folding angle   |

<!-- /wp:table -->

<!-- wp:paragraph -->

Parameter notations substituted into the command syntax:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

LOAD_SECTION_MACRO_STIFFENED

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Stiffeners:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Available stiffener positions and types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- S1: Edge stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S2: Web stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S3: Web stiffener (can not be duplicated, only single)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S4: Web stiffener
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- S5: Edge stiffener
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Sample code:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Simplest form: (minimal parameters, no stiffeners)

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-OMEGA "CF OMEGA (Descript)" "S350GD+Z EN10346" 150 120 40 2.5 4 60
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

All parameters and stiffeners:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO_STIFFENED Sec_ID1 CF-OMEGA "CF OMEGA (Descript)" "S350GD+Z EN10346" 150 120 40 2.5 4 60 "Press broken" Special
S1 Edge_Stiffener 30 120 4
S2 Web_Stiffener Trapezoidal 20 6 15 2 FromA 50 Right 50 Right
S3 Web_Stiffener Rounded 6 2 Right
S4 Web_Stiffener Trapezoidal 20 6 15 2 FromA 50 Right 50 Right
S5 Edge_Stiffener 30 120 4
```

<!-- /wp:loos-hcb/code-block -->
