---
sidebar_position: 2
---
# Data containers

## Variable

A **variable** in Descript is a container for a single piece of data. Variables have a name, and the data stored within it is called its value. When referring to the variable, we use the name of the variable, not the data stored in the variable. While the name of a certain variable is fixed after it is created, the data stored within it can be changed, hence the name: variable.

In Descript, the definition of a variable starts with a **_"\$"_** sign, followed by the name of the variable, an equal sign, and finally, the value that will be assigned to that variable:  
```
$x=1000
```

The value of a variable can be:
- numerical     (integer or a fraction with a decimal separator)
- text variable (string of characters)

In case of numerical values, the value can be assigned directly, or as a result of a mathematical expression. These are all valid variable definitions and assignments:
```
$x=1000
$y=1.234
$z=100*2
$var=value
```

After a variable is defined, it can be used in the following lines of the code until the end of the script. Variables can have their value reassigned the same way they are created, with the equal sign. In the value assignment expression of a variable, other variables may also be used.
```
$x=1
$y=2

$x=3
$x=4+$y
```

In this example _\$x_ was first created with the value _1_, then later its value got changed to _3_, then after that we changed its value to _4+\$y = 4+2 = 6_ , so now its value is 6.

When creating or modifying model objects with different kind of [**commands**](#/docs/descript/15_2_scripting-tools/Commands), those commands will require different input parameters _(such as start and end coordinates of a member, combination factors, ID's etc.)_. These parameters can be defined locally as numerical or text values, or as a variable, in which case the value of the variable will be used as a parameter input.


## Array

Arrays are lists of values indexed starting from 0. An array can also be thought of as a table, where each item is represented by a row that has a fixed index number. A value can be assigned to any item and the array will store that value for later use.

| **Index** | **Value** |
| --------- | --------- |
| 0         | Value 0   |
| 1         | Value 1   |
| 2         | Value 2   |
| 3         | Value 3   |
| etc.      | etc.      |


Arrays can be created with the [ARRAY_CREATE ](https://consteelsoftware.com/manual/descript-cspi/array_create/)command. Values can be added to the next available index number with the [ARRAY_ADD ](https://consteelsoftware.com/manual/descript-cspi/array_add/)command or to a specific index number with the [ARRAY_SET ](https://consteelsoftware.com/manual/descript-cspi/array_set/)command.

Stored values can be retrieved from an array with the [ARRAY_GET ](https://consteelsoftware.com/manual/descript-cspi/array_get/)command. The number of stored values can be checked with [ARRAY_COUNT](https://consteelsoftware.com/manual/descript-cspi/array_count/), and all stored values can be deleted with the [ARRAY_CLEAR ](https://consteelsoftware.com/manual/descript-cspi/array_clear/)command.

## Map

A map is a collection of key-value pairs. If we think of a map as a table, then each row of the table represents 1 item in the map, and contains a key and a value paired to that key. Both the key and the value are defined by the user.

Compared to arrays, in a map there are keys instead of indices. Keys can be changed, while indices are fixed.

| **Key** | **Value**   |
| ------- | ----------- |
| Key_1   | Key 1 value |
| Key_2   | Key 2 value |
| Key_3   | Key 3 value |
| etc.    | etc.        |

Maps can be created with the [MAP_CREATE ](https://consteelsoftware.com/manual/descript-cspi/map_create/)command. Key-value pairs can be added to a map with the [MAP_SET ](https://consteelsoftware.com/manual/descript-cspi/map_set/)command.

Stored values can be retrieved from a map with the [MAP_GET ](https://consteelsoftware.com/manual/descript-cspi/map_get/)command. The existence of a key within a map can be checked with the [MAP_KEYEXISTS ](https://consteelsoftware.com/manual/descript-cspi/map_keyexists/)command, and all items can be deleted from a map with the [MAP_CLEAR ](https://consteelsoftware.com/manual/descript-cspi/map_clear/)command.
