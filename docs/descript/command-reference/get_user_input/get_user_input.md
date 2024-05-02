---
title: 'GET_USER_INPUT'
description: ""
published: 2023-08-22
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/get_user_input/
hero: ./img/wp-content-uploads-2024-02-image-7.png
---

Requests input from the user during the script run.

### Description

With the GET_USER_INPUT command various types of input data can be requested from the user during the script run. Each individual input request is a new line directly after the GET_USER_INPUT line, except for the OPTION input type, which can take up several lines. One GET_USER_INPUT command will generate one dialogue window, with all the input fields listed. An arbitrary number of inputs can be requested within one GET_USER_INPUT command, but it is advised to take into account the available screen space for the dialogue window that will be generated.

After the user defined all the requested inputs and clicked on the "OK" button, the given values will be saved into their respective variables, and the script run will continue.

Additionally to input inquiries, [images can be inserted](#picture) into the dialogue window. This is typically useful in case there is some explanation needed for the input request in the form of a drawing or a picture.

### Syntax

**GET_USER_INPUT**  
TEXT [Variable name] [Dialogue text] [Default value]  
NUMBER [Variable name] [Dialogue text] [Default value]  
BOOL [Variable name] [Dialogue text] [Default value]  
OPTION [Variable name] [Dialogue text] [Default value]  
[Option 0 value] [Option 0 dropdown text]  
[Option 1 value] [Option 1 dropdown text]  
[Option 2 value] [Option 2 dropdown text]  
ENDOPTION  
POINT [Array name] [Dialogue text]  
OBJECT [Array name] [Dialogue text] [Object type]  
FILE_PATH [Variable name] [Dialogue text] [Default value]  

### Input types

One or more input types can be requested within one GET_USER_INPUT command in arbitrary order.

Available input types:

| **Input type**                | **Description**                                    |
| ----------------------------- | -------------------------------------------------- |
| [Text](#text-input)           | Text input                                         |
| [Number](#numerical-input)    | Numerical input                                    |
| [Bool](#boolean-input)        | Boolean input                                      |
| [Option](#option-input)       | Option choice from dropdown                        |
| [Point](#point-input)         | x,y,z coordinates of a point selected in the model |
| [Object](#object-input)       | Object IDs of model objects selected in the model  |
| [File path](#file-path-input) | File path input with file open button              |

### Sample code
```
GET_USER_INPUT
TEXT TextVariable "Text input" textdefault
NUMBER NumberVariable "Numerical input" 12345
BOOL BoolVariable "Bool input" True
OPTION OptionVariable "Dropdown option" 1
Opt_Value0 "Option 0"
Opt_Value1 "Option 1"
Opt_Value2 "Option 2"
ENDOPTION
POINT PointArray "Point select"
OBJECT ObjectArray "Object select"
FILE_PATH file_path "File path"
```

The above code will result in this input dialogue:

![](./img/wp-content-uploads-2024-02-image-7.png)

---
## Detailed description of input types

## Text input

### Syntax

**GET_USER_INPUT**  
TEXT [Variable name] [Dialogue text] [Default value]

### Command parameters

| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| [Variable name](#Variable-name-txt) | Required       | String           | Local, variable   |
| [Dialogue text](#Dialogue-text-txt) | Required       | String           | Local, variable   |
| [Default value](#Default-value-txt) | Optional       | String           | Local, variable   |

#### Variable name: {#Variable-name-txt}
Name of the variable that will contain the requested input.

#### Dialogue text: {#Dialogue-text-txt}
Text that will appear on the dialogue window.

#### Default value: {#Default-value-txt}
Default value of the requested input variable.

### Sample code
```
GET_USER_INPUT
TEXT TextVariable "Text input" textdefault
```

The above code will result in this input dialogue:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-59.png)](./img/wp-content-uploads-2021-08-image-59.png)

## Numerical input

### Syntax

**GET_USER_INPUT**  
NUMBER [Variable name] [Dialogue text] [Default value]

### Command parameters

| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| [Variable name](#Variable-name-num) | Required       | String           | Local, variable   |
| [Dialogue text](#Dialogue-text-num) | Required       | String           | Local, variable   |
| [Default value](#Default-value-num) | Optional       | Integer, float   | Local, variable   |

#### Variable name: {#Variable-name-num}
Name of the variable that will contain the requested input.

#### Dialogue text: {#Dialogue-text-num}
Text that will appear on the dialogue window.

#### Default value: {#Default-value-num}
Default value of the requested input variable.

### Sample code
```
GET_USER_INPUT
NUMBER NumberVariable "Numerical input" 12345
```

The above code will result in this input dialogue:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-60.png)](./img/wp-content-uploads-2021-08-image-60.png)

## Boolean input

### Syntax

**GET_USER_INPUT**  
BOOL [Variable name] [Dialogue text] [Default value]

### Command parameters

| **Command parameter**                | **Assignment** | **Value format**                            | **Input options** |
| ------------------------------------ | -------------- | ------------------------------------------- | ----------------- |
| [Variable name](#Variable-name-bool) | Required       | String                                      | Local, variable   |
| [Dialogue text](#Dialogue-text-bool) | Required       | String                                      | Local, variable   |
| [Default value](#Default-value-bool) | Optional       | [Predefined strings](#Accepted-inputs-bool) | Local, variable   |

#### Variable name: {#Variable-name-bool}
Name of the variable that will contain the requested input.

#### Dialogue text: {#Dialogue-text-bool}
Text that will appear on the dialogue window.

#### Default value: {#Default-value-bool}
Default value of the requested input variable.

<span id="Accepted-inputs-bool" style={{paddingTop: '80px'}}> Accepted inputs: </span>
- Positive: "True" or "1"
- Negative: "False" or "0"

### Sample code
```
GET_USER_INPUT
BOOL BoolVariable "Bool input" True
```

The above code will result in this input dialogue:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-61.png)](./img/wp-content-uploads-2021-08-image-61.png)

## Option input

The option input creates a dropdown list on the dialogue, from where the user can choose 1 option.

There are 2 ways to set up an option input:
- [Local list](#option-input-defined-by-local-list) in multiple rows closed by "ENDOPTION" line
- [Defined by arrays](#option-input-defined-by-arrays) <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

## Option input defined by local list

One option input takes up several rows within the GET_USER_INPUT command. After the line starting with "OPTION" all dropdown options have to be listed in separate rows. After the row of the last dropdown option, the "OPTION" input is closed with an additional "ENDOPTION" line.

### Syntax

**GET_USER_INPUT**  
OPTION [Variable name] [Dialogue text] [Default value]  
[Option 0 value] [Option 0 dropdown text]  
[Option 1 value] [Option 1 dropdown text]  
[Option 2 value] [Option 2 dropdown text]  
etc.  
ENDOPTION  

### Command parameters

| **Command parameter**                               | **Assignment** | **Value format** | **Input options** |
| --------------------------------------------------- | -------------- | ---------------- | ----------------- |
| [Variable name](#Variable-name-opt)                 | Required       | String           | Local, variable   |
| [Dialogue text](#Dialogue-text-opt)                 | Required       | String           | Local, variable   |
| [Default value](#Default-value-opt)                 | Optional       | Integer          | Local, variable   |
| [Option values](#Option-values-opt)                 | Required       | String           | Local, variable   |
| [Option dropdown texts](#Option-dropdown-texts-opt) | Required       | String           | Local, variable   |

#### Variable name: {#Variable-name-opt}
Name of the variable that will contain the chosen option value.

#### Dialogue text: {#Dialogue-text-opt}
Text that will appear on the dialogue window.

#### Default value: {#Default-value-opt}
Number of the default input option. The numbering of the options starts with 0.

#### Option values: {#Option-values-opt}
The values associated with the individual dropdown options. If a certain option is selected, then its value will be assigned to the resulting variable of the option input.

#### Option dropdown texts: {#Option-dropdown-texts-opt}
Text that will appear within the dropdown of the dialogue window.

### Sample code
```
GET_USER_INPUT
OPTION OptionVariable "Dropdown option" 1
Opt_Value0 "Option 0"
Opt_Value1 "Option 1"
Opt_Value2 "Option 2"
ENDOPTION
```

The above code will result in this input dialogue:

[![](./img/wp-content-uploads-2021-09-image-5.png)](./img/wp-content-uploads-2021-09-image-5.png)

## Option input defined by arrays

With this syntax, the value and text for the items in the dropdown list are given by 2 arrays. These arrays must be the same size. This syntax allows to create dropdown lists with a number of items that are not known at the time of coding.

### Syntax

**GET_USER_INPUT**  
OPTION [Variable name] [Dialogue text] [Value array] [Text array] [Default value]

### Command parameters

| **Command parameter**                  | **Assignment** | **Value format** | **Input options** |
| -------------------------------------- | -------------- | ---------------- | ----------------- |
| [Variable name](#Variable-name-optarr) | Required       | String           | Local, variable   |
| [Dialogue text](#Dialogue-text-optarr) | Required       | String           | Local, variable   |
| [Value array](#Value-array-optarr)     | Required       | String           | Local, variable   |
| [Text array](#Text-array-optarr)       | Required       | String           | Local, variable   |
| [Default value](#Default-value-optarr) | Optional       | Integer          | Local, variable   |

#### Variable name: {#Variable-name-optarr}
Name of the variable that will contain the chosen option value.

#### Dialogue text: {#Dialogue-text-optarr}
Text that will appear on the dialogue window.

#### Value array: {#Value-array-optarr}
An array that contains the corresponding values for each item in the dropdown list.

#### Text array: {#Text-array-optarr}
An array that containst the texts that will be shown in the dropdown UI element for each list item.

#### Default value: {#Default-value-optarr}
Number of the default input option. The numbering of the options starts with 0.

### Sample code
```
ARRAY_CREATE Value_array
ARRAY_ADD Value_array Value1
ARRAY_ADD Value_array Value2
ARRAY_ADD Value_array Value3

ARRAY_CREATE Static_Text_array
ARRAY_ADD Static_Text_array "Option 1"
ARRAY_ADD Static_Text_array "Option 2"
ARRAY_ADD Static_Text_array "Option 3"

GET_USER_INPUT
OPTION Output_Var "Dropdown option" Value_array Static_Text_array 1
```

The above code will result in this input dialogue:

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-5.png)](https://consteelsoftware.com/wp-content/uploads/2021/09/image-5.png)

## Point input

With the point input a selection of a point can be requested from the user. The coordinates of this point will be stored in an array.

### Syntax

**GET_USER_INPUT**  
POINT [Array name] [Dialogue text]

### Command parameters

| **Command parameter**                     | **Assignment** | **Value format** | **Input options** |
| ----------------------------------------- | -------------- | ---------------- | ----------------- |
| [Array name](#Array-name-pnt)             | Required       | String           | Local, variable   |
| [Dialogue text](#Dialogue-text-point-pnt) | Required       | String           | Local, variable   |

#### Array name: {#Array-name-pnt}
Name of the array that will contain the coordinates of the selected point.

#### Dialogue text: {#Dialogue-text-point-pnt}
Text that will appear on the dialogue window.

### Sample code

**Command only:**

```
GET_USER_INPUT
POINT PointArray "Point select"
```

The above code will result in this input dialogue:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-65.png)](./img/wp-content-uploads-2021-08-image-65.png)

The steps of the selection are the following:
- Click on the select button on the dialogue window
- Click on the point in the model
- Click on OK

**Command + coordinate check:**

```
GET_USER_INPUT
POINT PointArray "Point select"

ARRAY_GET PointArray 0 PointX
ARRAY_GET PointArray 1 PointY
ARRAY_GET PointArray 2 PointZ
```

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-66.png)](./img/wp-content-uploads-2021-08-image-66.png)

## Object input

### Syntax

**GET_USER_INPUT**  
OBJECT [Array name] [Dialogue text] [Object type]

### Command parameters

| **Command parameter**               | **Assignment** | **Value format**                                  | **Input options** |
| ----------------------------------- | -------------- | ------------------------------------------------- | ----------------- |
| [Array name](#Array-name-obj)       | Required       | String                                            | Local, variable   |
| [Dialogue text](#Dialogue-text-obj) | Required       | String                                            | Local, variable   |
| [Object type](#Object-type-obj)     | Optional       | [Predefined strings](#Available-object-types-obj) | Local, variable   |

#### Array name: {#Array-name-obj}
Name of the array that will store the IDs of the selected objects.

#### Dialogue text: {#Dialogue-text-obj}
Text that will appear on the dialogue window.

#### Object type: {#Object-type-obj}
Restricts the selectable object types to 1 type.

<span id="Available-object-types-obj" style={{paddingTop: '80px'}}> Available object types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Object type name**            | **Object type**           |
| ------------------------------- | ------------------------- |
| Geometry tab                    | -                         |
| Point                           | Point                     |
| Line                            | Line                      |
| Arc                             | CircleArc                 |
| Two-dimensional figure          | Polygon                   |
| Dimension line                  | Dimension_Line            |
| Dimension radius and diameter   | Dimension_Radius          |
| Dimension arc                   | Dimension_Arc             |
| Dimension angle                 | Dimension_Angle           |
| Dimension height                | Dimension_Height          |
| Dimension textbox               | Dimension_Textbox         |
| Structural members tab          | -                         |
| Member                          | Structural_Member         |
| Plate                           | Structural_Plate          |
| Diaphragm                       | Structural_Diaphragm      |
| Rigid body                      | Structural_RigidBody      |
| Haunch                          | Haunched_Member           |
| Point support                   | Support_Point             |
| Line support                    | Support_Edge              |
| Surface support                 | Support_Plate             |
| Shear field                     | ShearField                |
| Link                            | Link                      |
| Smart link                      | SmartLink                 |
| Purlin line                     | PurlinLine_Place          |
| Purlin overlap and support zone | PurlinJoint_Place         |
| Rectangular cutout              | Hole_Rec                  |
| Circular cutout                 | Hole_Circ                 |
| Hexagonal cutout                | Hole_Hex                  |
| Perpendicular plate stiffener   | Stiffener_PlatePerp       |
| Parallel plate stiffener        | Stiffener_PlatePar        |
| Perpendicular section stiffener | Stiffener_Section         |
| Placed joint                    | Joint_Place               |
| Loads tab                       | -                         |
| Point load                      | NodeForce                 |
| Line load                       | MemberForce               |
| Line wind load                  | LineWindForce             |
| Surface load                    | PlateForce                |
| Load transfer surface           | LoadTransferSurface       |
| Line temperature load           | MemberThermal             |
| Surface temperature load        | PlateThermal              |
| Prescribed displacement         | PresDisp                  |
| Change in length                | Elongation                |
| Tension force                   | Pretension                |
| Influence line                  | MovingLoadPath            |
| Wind surface                    | WindSurface               |
| Snow surface                    | SnowSurface               |
| Surface wind load               | SurfWindForce             |
| Surface snow load               | SurfSnowForce             |
| Fire load                       | MemberFireEffect          |
| Mass tab                        | -                         |
| Node mass                       | NodeMass                  |
| Finite element tab              | -                         |
| Constraint                      | Structural_Constraint     |
| Stiffener warping support       | Stiffener_Warping_Support |

### Sample code

**Command only:**

```
GET_USER_INPUT
OBJECT ObjectArray "Object select"
```

The above code will result in this input dialogue:

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-68.png)](./img/wp-content-uploads-2021-08-image-68.png)

The steps of the selection are the following:
- Click on the select button on the dialogue window
- Select objects in the model
- End the selection with a right click  
  The window after this step should look like this:

[![This image has an empty alt attribute; its file name is image-26.png](https://consteelsoftware.com/wp-content/uploads/2021/08/image-26.png)](./img/wp-content-uploads-2021-08-image-26.png)
- Click on OK

**Command + object ID check:**

```
GET_USER_INPUT
OBJECT ObjectArray "Object select"

ARRAY_GET ObjectArray 0 Obj_ID0
ARRAY_GET ObjectArray 1 Obj_ID1
```

[![](./img/wp-content-uploads-2021-08-image-72-1024x274.png)](https://consteelsoftware.com/wp-content/uploads/2021/08/image-72.png)

**Command with optional object type parameter + object ID check:**

```
GET_USER_INPUT
OBJECT ObjectArray "Select structural members" Structural_Member

ARRAY_GET ObjectArray 0 Obj_ID1
GET $Obj_ID1 Name Obj_name
```

[![](./img/wp-content-uploads-2023-03-image-4-1024x393.png)](https://consteelsoftware.com/wp-content/uploads/2023/03/image-4.png)

## File path input

The file path input is similar to the text input, but with an additional file open button on the right side of the input field. After clicking the file open button, a file explorer window will open, where a file can be selected and opened, which copies the file path into the input field. Alternatively a file path can also be typed or pasted into the input field.

### Syntax

**GET_USER_INPUT**  
FILE_PATH [Variable name] [Dialogue text] [Default value]

### Command parameters

| **Command parameter**              | **Assignment** | **Value format** | **Input options** |
| ---------------------------------- | -------------- | ---------------- | ----------------- |
| [Variable name](#Variable-name-fp) | Required       | String           | Local, variable   |
| [Dialogue text](#Dialogue-text-fp) | Required       | String           | Local, variable   |
| [Default value](#Default-value-fp) | Optional       | String           | Local, variable   |

#### Variable name: {#Variable-name-fp}
Name of the variable that will contain the requested input.

#### Dialogue text: {#Dialogue-text-fp}
Text that will appear on the dialogue window.

#### Default value: {#Default-value-fp}
Default value of the requested input variable.

### Sample code
```
GET_USER_INPUT
FILE_PATH file_path "File path"
```

The above code will result in this input dialogue:

![](./img/wp-content-uploads-2024-02-image-8.png)

## Additional content on dialogue window

## Picture

Images can be inserted into the dialogue window generated by the GET_USER_INPUT command. This is typically useful in case there is some explanation needed for the input request in the form of a drawing or a picture.

### Syntax

**GET_USER_INPUT**  
IMAGE [File path]

### Command parameters

| **Command parameter**       | **Assignment** | **Value format** | **Input options** |
| --------------------------- | -------------- | ---------------- | ----------------- |
| [File path](#File-path-pic) | Required       | String           | Local, variable   |

#### File path: {#File-path-pic}
Path, file name and extension of the image.

### Sample code

**Command only:**

```
GET_USER_INPUT
IMAGE c:\Temp\Sample_Picture.png
```

[![](https://consteelsoftware.com/wp-content/uploads/2021/09/image-8.png)](./img/wp-content-uploads-2021-09-image-8.png)

**Image + all possible input types:**

```
GET_USER_INPUT
IMAGE c:\Temp\Sample_Picture_v02_Wide.png
TEXT TextVariable "Text input" textdefault
NUMBER NumberVariable "Numerical input" 12345
BOOL BoolVariable "Bool input" True
OPTION OptionVariable "Dropdown option" 1
Opt_Value0 "Option 0"
Opt_Value1 "Option 1"
Opt_Value2 "Option 2"
ENDOPTION
POINT PointArray "Point select"
OBJECT ObjectArray "Object select"
FILE_PATH file_path "File path"
```

The above code will result in this input dialogue:

![](./img/wp-content-uploads-2024-02-image-9.png)
