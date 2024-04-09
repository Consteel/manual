---
sidebar_position: 1
---
# Mass cases and mass groups

Masses on the structure, just like in the case of loads, has to be grouped together in mass cases and mass groups. Before defining masses on the structure, groups and cases should be defined with using the **Create mass cases and mass groups** (![](./img/wp-content-uploads-2021-04-cmd_masscases-1.png)) function.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10427,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-2-Mass-Cases-and-mass-groups.png)](./img/wp-content-uploads-2021-04-7-2-Mass-Cases-and-mass-groups.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The dialogue can be separated into two main parts:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

On the left side of the dialogue (#1), loadcases that were defined on the **Loads** tab can be converted automatically into masses for the dynamic calculations. On the right side of the dialogue (#2), mass groups and cases can be defined manually.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10434,"width":620,"height":469,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-2-Mass-Cases-and-mass-groups.2.png)](./img/wp-content-uploads-2021-04-7-2-Mass-Cases-and-mass-groups.2.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Converting loads into masses

<!-- /wp:heading -->

<!-- wp:paragraph -->

Loads placed on the Loads tab can be converted into masses on the left side of the Mass cases and mass groups dialogue. The tree panel will automatically be filled up with the previously created permanent, variable, and snow load groups and their corresponding loadcases. If a checkbox of a load case is clicked, it will be converted into mass, after pressing the **OK** or **Apply** button on the dialogue.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":10440,"width":667,"height":503,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-3-Manual-definition-of-Mass-Cases-and-mass-groups.png)](./img/wp-content-uploads-2021-04-7-3-Manual-definition-of-Mass-Cases-and-mass-groups.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Manual definition of mass groups and mass cases

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Mass cases and mass groups** can be created manually, on the right side of the dialogue, just like in the cases of load cases and load groups.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With the **New** button on the _Mass groups_ (#2) part of the dialogue, new mass groups can be added to the _Manually defined_ tree panel. Permanent, Variable, and Snow mass groups can be created. After choosing the correct type, a new element will be added to the tree panel (#1), as a mass group.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With the **New mass case** button on the Mass case panel (#3), cases can be added to a previously selected mass group in the tree panel. Any number of mass cases can be added to a mass group. The color of each mass case can be set manually with the color palette, which will be used for the graphical object representation in the modeling area.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Each mass case can be moved from a mass group to another, using the drag-and-drop feature of the tree panel (#1).

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Considered direction of masses

<!-- /wp:heading -->

<!-- wp:paragraph -->

Both for masses converted from loadcases, and for masses defined manually, the direction in which they will be taken into consideration during the dynamic calculations can be set, on the bottom of the **Mass cases and mass groups dialogue** using the checkboxes, after the selection of a mass case in the tree. In case of seismic analysis, only the global Z direction can be turned off, while in the case of vibration analysis, any direction is free to switch on or off (X,Y,Z).

<!-- /wp:paragraph -->
