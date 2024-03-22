---
sidebar_position: 1
---
# Load cases and load groups

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-2-Loadcase.png)](./img/wp-content-uploads-2021-04-7-2-Loadcase.png)

<!-- /wp:image -->

<!-- wp:image {"align":"right","id":22807,"width":375,"height":412,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/dial_LG_Var.png)](./img/wp-content-uploads-2021-04-dial_LG_Var.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

Before placing any loads in the model, load cases and load groups must be defined. As a default, one load group and one load case have been defined in ConSteel for quick calculations. Clicking on the **Create load cases and load groups** command (![](./img/wp-content-uploads-2021-04-cmd_loadgroups.png)) on the Loads tab the Load cases and load groups dialogue window appears.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The created load groups and load cases are listed on the left side of the dialogue. The right side is divided into two parts: the top part is for creating load groups and the bottom part is for creating load cases.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In a load group, several load cases can be defined. Properly specified load groups are needed to automatically generate load combinations.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

There are 9 different load group types in _Consteel_: Permanent, Variable, Meteorological, Wind, Snow, Crane, Accidental, Accidental snow, Fire, Seismic.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Create new load group

<!-- /wp:heading -->

<!-- wp:image {"align":"right","id":19569,"width":260,"height":207,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-2-Load-cases-and-load-groups-e1626273431984.png)](./img/wp-content-uploads-2021-04-7-2-Load-cases-and-load-groups-e1626273431984.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

By clicking on the **New load group** button, the list of available load group types will appear. The list depends on the chosen _[design standard](/manual/how-to-open-consteel/the-main-window/#Standards-menu)_. Selecting one of the names, the new load group is created.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The name of the load group will be automatically given according to the type. It can be changed on the top of the dialog.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

For each load group, safety factors are taken from the actually chosen standard. This value cannot be changed in this dialog. If you want to specify different safety factors, create a user-defined design standard in the _[dialog of design standards](/manual/how-to-open-consteel/the-main-window/#Standards-menu)_.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":9934,"width":276,"height":194,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-2-Multipliers-of-representative-values.png)](./img/wp-content-uploads-2021-04-7-2-Multipliers-of-representative-values.png)

<!-- /wp:image -->

<!-- wp:image {"align":"right","id":22816,"width":215,"height":172,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/dial_LG_Var_LG.png)](./img/wp-content-uploads-2021-04-dial_LG_Var_LG.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

For variable type load groups (Variable, Meteorological, Crane) combination factors must be given as well. The combination factors can be edited manually or can be selected by clicking on the **Standard values of factors **dialog button. On the dialog that opens, typical cases can be selected which are provided by the Eurocode and the Spanish EAE standard. Factor values are dependent on the selected NA. The desired values can be selected with the checkbox at the beginning of the line.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Creating new load case

<!-- /wp:heading -->

<!-- wp:image {"align":"right","id":22823,"width":214,"height":160,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/07/dial_LG_create-_LC.png)](./img/wp-content-uploads-2021-07-dial_LG_create-_LC.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

New load cases can be created by clicking on the** New load case** button on the bottom right panel of the dialog. There are three edit boxes on the top of this panel that are common for all load group types:

<!-- /wp:paragraph -->

<!-- wp:list {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

- Name: name of the load case
- Load group: the load group to which the load case belongs can be changed here. By changing the load group, the load case will be moved also in the tree of load cases.
- Color: the color with which the load case is represented in the model can be changed here.

<!-- /wp:list -->

<!-- wp:paragraph -->

For other options see below.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":22869,"width":307,"height":47,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/07/image-2.png)](./img/wp-content-uploads-2021-07-image-2.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Self weight

<!-- /wp:heading -->

<!-- wp:paragraph -->

_ConSteel_ can add the structure’s self-weight to one of the load cases if necessary. To do so, please select the appropriate load case at the bottom right corner of the dialog.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Options for controlling the automatic combination generation

<!-- /wp:heading -->

<!-- wp:paragraph -->

The automatic combination generation (see _**[Load combinations](/manual/structural-loads/load-combination/)**_ chapter) works according to the rules of the chosen design standard and the settings of the load groups and load cases. These settings affect the values of the combination factors. To have appropriate load combinations, the controllers for each load case have to be set correctly. These options are as follows:

<!-- /wp:paragraph -->

<!-- wp:list -->

- "_The load case can be applied along with each other_" - only for \_Variable \_and \_Meteorological \_load group types and applies uniformly to all load cases in the load group.

  - unchecked (default) - load cases in this load group will be included in the combinations only separated.
  - checked - load cases in this load group may be included in the combinations at the same time.

- "_The action can be favorable in the combination_" - for all load group types except accidental ones. It can be specified per load case.

  - unchecked (default)

    - permanent load group - only the unfavorable safety factor will be used
    - variable load group - default safety factor for the load group type will be used

  - checked

    - permanent load group - favorable and unfavorable safety factor will be used as well
    - variable load group - safety factor may be zero in the combination

- "_Can't be the main in permanent and variable combination_"

  - unchecked (default) - the load case can be the leading action in permanent and transient design situations
  - checked - the load case can only be accompanying action in permanent and transient design situations

- "_Can't be the main in accidental combination_"

  - uncheked (default) - the load case can be the leading action in accidental design situations
  - checked - the load case can only be accompanying action in accidental design situations

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

<!-- /wp:paragraph -->
