---
sidebar_position: 1
---

# Commands

A command in Descript requests a certain action from Consteel. However the Descript language is **not case-sensitive**, in other words, it is not differentiating between uppercase (capital) and lowercase letters, we usually write commands in all capital letters for easier visual distinction.
A command in Descript needs to have its own line of code, and its line of code has to start with the command itself (excluding any whitespace characters such as a space or a tab).

For example let's look at the [RETURN](/docs/descript/command-reference/return/) command (it exits the script run).

**The following forms are all accepted:** ✅

```
RETURN
```

```
return
```

```
Return
```

```
    RETURN
```
These are all fine, because the command is the first non-whitespace content within the line, and there is nothing within the line after the command.

**However these forms are all erroneous:** ❌

```
$variable=1 RETURN
```
We tried to assign a value to a variable named _\$variable_ in the same line we wrote a command. This will result in _\$variable_ having the value _1RETURN_, which is probably not what we wanted.

```
RETURN RETURN
```
We tried to put 2 commands in one line. In this case the second _RETURN_ is thought to be a parameter of the first _RETURN_ command by Descript, but the RETURN command can't have any parameters, so Descript will give us an error.
But what are command parameters?

## Command parameters

A command parameter is an additional piece of input written after the command within the same line that modifies the command's behavior. Command parameters are part of the command, so they go in the same line as the command. A command can have 1 or more parameters. There are required and optional commands. Required commands are always necessary to be defined, while optional ones can be omitted. Optional parameters are always at the end of one command's series of parameters. The command and the parameters are separated by spaces in Descript.

First, let's look at the [EXCEL_OPEN](/docs/descript/command-reference/excel_open/) command (it opens an Excel file), as an example. The EXCEL_OPEN command has 1 (required) parameter, which is the file path of the Excel file we want to open.

So the right way to write this command should look like this: ✅

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx
```

However, these forms are erroneous: ❌

```
EXCEL_OPEN, c:\Temp\Sample_Excel.xlsx
```
We tried to separate the command and its parameter with a "," (comma character), which is syntactically incorrect in Descript. Now Descript is looking for a command named "_EXCEL_OPEN,_", which doesn't exist, so we will get an error.

```
EXCEL_OPEN c:\Temp\Sample Excel.xlsx
```
Here, we gave a file path in the parameter that contains a space, but spaces are used in Descript to separate parameters, so Descript interprets this as if we were trying to give 2 parameters after the command, but the EXCEL_OPEN command can only have 1 parameter, so we will get an error.

But then, how do we give a parameter input that contains a space?

### Parameters containing spaces

Parameters that contain spaces can be forced to be interpreted as one entry, if the parameter input is put between apostrophes (").

So the previous example can be fixed like this: ✅
```
EXCEL_OPEN "c:\Temp\Sample Excel.xlsx"
```

In Descript, if we put an input between apostrophes, then it will be considered as one single string type input.

### Commands with multiple parameters

There are commands that have multiple parameters. Some can be required, while some might be optional.

As an example, let's look at the [LOAD_SECTION_LIBRARY](/docs/descript/command-reference/load_section_library/) command (it loads a library section from a section bank into the model), which has a total of 5 parameters. The first 2 are required, and the other 3 are optional.

All the following forms are valid ways to use the LOAD_SECTION_LIBRARY command: ✅

Specifying only the first 2, required parameters:
```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 200"
```

Specifying the 2 required, and 1 optional parameters:
```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 200" "S 235 EN 10025-2"
```

Specifying all parameters:
```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 200" "S 235 EN 10025-2" "IPE 300 S 235" European
```

To look up the meaning behind the parameters of the [LOAD_SECTION_LIBRARY](/docs/descript/command-reference/load_section_library/) command, follow the link to its page in the Descript manual.

If we would want to specify, let's say the 3. optional parameter, but not the 2 preceding optional parameters, then we are forced to specify the 2 preceding optional parameters even if we don't want to, since there is no way to leave an optional parameter "empty" in Descript.

## Commands that take up multiple lines

In Descript, some commands can take up more than one line. In these cases the additional lines come immediately after the line, where the command is written. Some of these commands can optionally have additional lines, others are invalid without certain additional lines.

The following commands can have additional lines (as of Consteel 17 build 3325):
- ANALYSIS RUN
- CREATE
- DESIGN RUN
- FILTER 
- GENERATE
- GET_RESULT 
- GET_USER_INPUT
- LOAD_SECTION_MACRO_STIFFENED 
- MSG_BOX  

As an example let's look at the [CREATE](/docs/descript/command-reference/create/) command (creates an object in Consteel):

The CREATE command always has 2 required parameters in the first line of the command after the _CREATE_, and then possibly several other parameters depending on the type of object we are trying to create. Additionally it may have several additional lines immediately after the first one, again depending on the type of object we are trying to create. For example if we are trying to create a structural member, there are 2 additional lines required immediately after the first line of the CREATE command, and those lines must contain the location coordinates of the start and the end point of the structural member. A valid syntax looks like this:

```
CREATE Mem_ID1 Structural_Member "HEA 200"
0 0 0
0 0 1000
```

:::warning 
If Descript sees one of these commands, then it tries to interpret any following non-empty line as an additional line to that command. Therefore **after we have finished writing any additional lines after one of these commands it is necessary to put an empty line**, to tell Descript that we have finished adding additional lines to the current command, and the following line of code after the empty line should not be considered as part of the command.
:::

For example, this code will give us an error: ❌
```
FILTER Steel_IDs
Objecttypes Steel
RETURN
```
Since the [FILTER](/docs/descript/command-reference/filter/) command has no additional lines, for which the _RETURN_ would be a valid input.

However, if we put an empty line before the _RETURN_, the code will run correctly: ✅
```
FILTER Steel_IDs
Objecttypes Steel

RETURN
```

## Command reference

To look at all the commands that exist in Descript, follow the link to the [command reference](/docs/descript/command-reference/) page.