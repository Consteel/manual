---
sidebar_position: 2
---
# Data containers

## Variable

**Variables** in a computer program are analogous to "Buckets" or "Envelopes" where information can be maintained and referenced. On the outside of the bucket is a name. When referring to the bucket, we use the name of the bucket, not the data stored in the bucket.

When creating or modifying objects with different kind of **commands**, they will require different input parameters _(such as start-end coordinates of a member, combination factors, ID's etc…)_. These parameters can be defined locally as numerical values, or as a variable.

In Descript, definition of a variable starts with a **_"\$"_** sign, followed by the name of the variable, and after an equal sign, the value assignment:  
**\$x=1000**

Value of a variable can be:

- numerical
- text variable (string of characters)

If **variables** are defined, they are free to use in the following lines of the code. They can either used as command attributes, and object attributes too.

## Array

Arrays are lists of values indexed starting from 0. An array can also be thought of as a table, where each item is represented by a row that has a fixed index number. A value can be assigned to any item and the array will store that value for later use.

|           |           |
| --------- | --------- |
| **Index** | **Value** |
| 0         | Value 0   |
| 1         | Value 1   |
| 2         | Value 2   |
| 3         | Value 3   |
| etc.      | etc.      |


Arrays can be created with the [ARRAY_CREATE ](https://consteelsoftware.com/manual/descript-cspi/array_create/)command. Values can be added to the next available index number with the [ARRAY_ADD ](https://consteelsoftware.com/manual/descript-cspi/array_add/)command or to a specific index number with the [ARRAY_SET ](https://consteelsoftware.com/manual/descript-cspi/array_set/)command.

Stored values can be retrieved from an array with the [ARRAY_GET ](https://consteelsoftware.com/manual/descript-cspi/array_get/)command. The number of stored values can be checked with [ARRAY_COUNT](https://consteelsoftware.com/manual/descript-cspi/array_count/), and all stored values can be deleted with the [ARRAY_CLEAR ](https://consteelsoftware.com/manual/descript-cspi/array_clear/)command.

## Map

A map is a collection of key-value pairs. If we think of a map as a table, then each row of the table represents 1 item in the map, and contains a key and a value paired to that key. Both the key and the value are defined by the user.

Compared to arrays, in a map there are keys instead of indices. Keys can be changed, while indices are given.

|         |             |
| ------- | ----------- |
| **Key** | **Value**   |
| Key_1   | Key 1 value |
| Key_2   | Key 2 value |
| Key_3   | Key 3 value |
| etc.    | etc.        |

Maps can be created with the [MAP_CREATE ](https://consteelsoftware.com/manual/descript-cspi/map_create/)command. Key-value pairs can be added to a map with the [MAP_SET ](https://consteelsoftware.com/manual/descript-cspi/map_set/)command.

Stored values can be retrieved from a map with the [MAP_GET ](https://consteelsoftware.com/manual/descript-cspi/map_get/)command. The existence of a key within a map can be checked with the [MAP_KEYEXISTS ](https://consteelsoftware.com/manual/descript-cspi/map_keyexists/)command, and all items can be deleted from a map with the [MAP_CLEAR ](https://consteelsoftware.com/manual/descript-cspi/map_clear/)command.
