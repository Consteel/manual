---
sidebar_position: 1
---
# Commands grouped by function

## Data handling

  - Text
    - [STRISNUM ](https://consteelsoftware.com/manual/descript-cspi/strisnum/)→ Tells if a string is a number or not
    - [CONCAT ](https://consteelsoftware.com/manual/descript-cspi/concat/)→ Assigns a new value to a variable by combining 2 values
    - [STRFIND ](https://consteelsoftware.com/manual/descript-cspi/strfind/)→ Finds a string within another string
    - [EXPLODE ](https://consteelsoftware.com/manual/descript-cspi/explode/)→ Chops up a string with the given separator character and stores the parts in an array
    - <!-- /wp:list-item -->

  - Arrays
    - [ARRAY_CREATE ](https://consteelsoftware.com/manual/descript-cspi/array_create/)→ Creates an array
    - [ARRAY_ADD ](https://consteelsoftware.com/manual/descript-cspi/array_add/)→ Adds an item to an array
    - [ARRAY_SET ](https://consteelsoftware.com/manual/descript-cspi/array_set/)→ Sets the value of an item in an array
    - [ARRAY_GET ](https://consteelsoftware.com/manual/descript-cspi/array_get/)→ Gets the value of an item in an array
    - [ARRAY_COUNT ](https://consteelsoftware.com/manual/descript-cspi/array_count/)→ Counts the items in an array
    - [ARRAY_CLEAR ](<https://consteelsoftware.com/manual/descript-cspi/array_clear/(opens in a new tab)>)→ Clears an array
    - <!-- /wp:list-item -->

  - Maps
    - [MAP_CREATE ](https://consteelsoftware.com/manual/descript-cspi/map_create/)→ Creates a map
    - [MAP_SET ](https://consteelsoftware.com/manual/descript-cspi/map_set/)→ Sets a key-value pair in a map
    - [MAP_KEYEXISTS ](https://consteelsoftware.com/manual/descript-cspi/map_keyexists/)→ Checks whether a key exists in a map or not
    - [MAP_GET ](https://consteelsoftware.com/manual/descript-cspi/map_get/)→ Gets the value paired to a key from a map
    - [MAP_CLEAR ](https://consteelsoftware.com/manual/descript-cspi/map_clear/)→ Deletes the contents of a map


## Model object handling


- Object creation
  - [LOAD_SECTION_LIBRARY ](https://consteelsoftware.com/manual/descript-cspi/load_section_library/)→ Loads a section into the section list from the standard section library
  - [LOAD_SECTION_MACRO ](https://consteelsoftware.com/manual/descript-cspi/load_section_macro/)→ Loads a macro section into the section list
  - [LOAD_SECTION_MACRO_STIFFENED ](https://www.consteelsoftware.com/manual/descript-cspi/load_section_macro_stiffened/)→ Loads a stiffened macro section into the section list _(since CS 17)_
  - [CREATE ](https://consteelsoftware.com/manual/descript-cspi/create/)→ Creates an object
  - [GENERATE ](https://consteelsoftware.com/manual/descript-cspi/generate/)→ Generates multiple objects
  - [CONVERT_AND_LOAD_SECTIONS ](https://www.consteelsoftware.com/manual/descript-cspi/convert_and_load_sections/)→ Converts and loads sections from section bank _(since CS 17 build 3303)_


 ## Object selection


  - [SELECT](https://consteelsoftware.com/manual/descript-cspi/select/) → Selects objects in the model
  - [DESELECT](https://consteelsoftware.com/manual/descript-cspi/deselect/) → Deselects objects in the model


## Object modification

  - [MOVE_SELECTED ](https://consteelsoftware.com/manual/descript-cspi/move_selected/)→ Moves pre-selected objects
  - [COPY_SELECTED ](https://consteelsoftware.com/manual/descript-cspi/copy_selected/)→ Copies pre-selected objects
  - [ROTATE_SELECTED ](https://consteelsoftware.com/manual/descript-cspi/rotate_selected/)→ Rotates pre-selected objects
  - [MIRROR_SELECTED ](https://consteelsoftware.com/manual/descript-cspi/mirror_selected/)→ Mirrors pre-selected objects
  - [MOVE_SELECTED_POINT_OR_EDGE ](https://consteelsoftware.com/manual/descript-cspi/move_selected_point_or_edge/)→ Moves pre-selected points and edges
  - [SET ](https://consteelsoftware.com/manual/descript-cspi/set/)→ Sets or modifies an attribute value of an object


## Object removal

  - [DELETE ](https://www.consteelsoftware.com/manual/descript-cspi/delete/)→ Deletes an object _(since CS 17)_


## Query tools

  - [GET ](https://consteelsoftware.com/manual/descript-cspi/get/)→ Gets an attribute value of an object
  - [GET_LOADED_SECTIONS ](https://consteelsoftware.com/manual/descript-cspi/get_loaded_sections/)→ Saves all section IDs into an array
  - [GET_RELEASE_NAME ](https://consteelsoftware.com/manual/descript-cspi/get_release_name/)→ Gets the name of a release type
  - [GET_SUPPORT_NAME ](https://consteelsoftware.com/manual/descript-cspi/get_support_name/)→ Gets the name of a support type
  - [FILTER ](https://consteelsoftware.com/manual/descript-cspi/filter/)→ Creates an ID list of model objects based on object type and attributes
  - [GET_RESULT ](https://consteelsoftware.com/manual/descript-cspi/get_result/)→ Queries results from an analysis or design run
  - [GET_REFERENCING_OBJECTS ](https://www.consteelsoftware.com/manual/descript-cspi/get_referencing_objects/)→ Gets the IDs of objects referencing the input object _(since CS 17)_

## Calculation

  - [ANALYSIS RUN](https://consteelsoftware.com/manual/descript-cspi/analysis-run/) → Starts an analysis run
  - [DESIGN RUN](https://consteelsoftware.com/manual/descript-cspi/design-run/) → Starts a design calculation


## Input/output

  - Text files
    - [OPEN_FILE ](https://consteelsoftware.com/manual/descript-cspi/open_file/)→ Selects a text file for output
    - [WRITE_FILE ](https://consteelsoftware.com/manual/descript-cspi/write_file/)→ Writes an output to the currently open text file
    - [CLOSE_FILE ](https://consteelsoftware.com/manual/descript-cspi/close_file/)→ Closes the currently open text file

  - Excel
    - [EXCEL_OPEN ](https://consteelsoftware.com/manual/descript-cspi/excel_open/)→ Opens an excel file
    - [EXCEL_WRITE_CELL ](https://consteelsoftware.com/manual/descript-cspi/excel_write_cell/)→ Writes a value into a specific cell in an excel spreadsheet
    - [EXCEL_READ_CELL ](https://consteelsoftware.com/manual/descript-cspi/excel_read_cell/)→ Reads out the value stored in a specific cell in an excel spreadsheet
    - [EXCEL_COUNT_FILLED_ROWS ](https://consteelsoftware.com/manual/descript-cspi/excel_count_filled_rows/)→ Counts the filled rows in a column of an excel spreadsheet
    - [EXCEL_CLOSE ](https://consteelsoftware.com/manual/descript-cspi/excel_close/)→ Closes the currently open excel file

## Other

  - [GET_USER_INPUT ](https://consteelsoftware.com/manual/descript-cspi/get_user_input/)→ Requests input from the user during the script run
  - [TAB ](https://www.consteelsoftware.com/manual/descript-cspi/tab/)→ Changes tab in the main window _(since CS 17)_
  - [MSG_BOX ](https://www.consteelsoftware.com/manual/descript-cspi/msg_box/)→ Pops up a message box _(since CS 17)_
  - [WAIT ](https://consteelsoftware.com/manual/descript-cspi/wait/)→ Waits a specified time before executing the next command
  - [CLEAR_ALL ](https://consteelsoftware.com/manual/descript-cspi/clear_all/)→ Clears all content in the model file
  - [RETURN ](https://consteelsoftware.com/manual/descript-cspi/return/)→ Exits the script run
  - [SAVE_AS ](https://consteelsoftware.com/manual/descript-cspi/save_as/)→ Saves the model to specific storage location
  - [EXIT ](https://consteelsoftware.com/manual/descript-cspi/exit/)→ Exits Consteel