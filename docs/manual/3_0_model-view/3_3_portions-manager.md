---
sidebar_position: 3
---
# Portions manager


The Portions Manager is a great tool to manage complicated models. Parts of the model ie. floors, frames, columns, bracings, beams, etc. This function can be achieved on the **Portions Manager** tab (Located on the right **_[Side panel](/manual/how-to-open-consteel/the-main-window/#side-panel)_** as a default.).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The **Custom portions **tab is used to define manually Portions and Storeys from the existing model. (for more information scroll down to _[Consteel 16](#Consteel16pm)_ ) For analysis, only custom-created portions can be used.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The **Auto portions** are generated automatically while modelling the structures. These are always updated to the current state of the model. This tab divides the model into portions according to their properties.

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- in case of **Bar members,** the automatic separation can be done according to their Section, Material, Placement, and Dominant utilization.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- for the **Plate elements**, Auto portions are created conforming to their Thickness, Material, and Placement.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

These functions are located on the **Custom portions** and **Auto portions** tab (Located on the right [**_Side panel_**](/manual/how-to-open-consteel/the-main-window/#side-panel) as a default).\*\*\*\*

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":71196,"width":"284px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Custom-portions-and-Auto-Portions.png)

<!-- /wp:image -->

<!-- wp:image {"align":"left","id":71146,"width":"268px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Auto-Portions-and-Custom-portions.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

By clicking on the + icon in front of each category of **Auto portions**, the automatically generated portions will appear. They contain only the bar members with their lines or plate elements with their polygon. No support, load, link element, etc. can be part of the auto portions.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The **Placement** of the elements indicates the orientation and plane in which the members are positioned.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The **Dominant utilization** category can only be used after obtaining results from global checks. Elements are included in the auto portions based on their dominant utilization, no matter which result is visualized on them.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To turn on a portion, check the check-box in front of the name of the portion. More **Auto portions** can be turned on at the same time by checking more check-boxes.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Custom portions** and **Auto portions** can be used at the same time. In this case only those members will appear that match both criteria in the same time.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

For example, if in the **Custom portions** the ‘_main structure_’ is turned on, all the members that are included in the portion will be visible.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71206,"width":"586px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Custom-portions-example.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Maintaining the **Custom portion** criteria while concurrently enabling the **Auto portions** of ‘_Section IPE400’_ only those elements will be shown, that pertain to both the ‘_main structure’_ and satisfy the criteria of Section IPE400. (see picture below)

<!-- /wp:paragraph -->

<!-- wp:image {"id":71166,"width":"594px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Auto-portions-example.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

If the Show hidden parts of the structure translucently check box is clicked at the bottom of the **Auto portions** tab, then the hidden parts of the model are also shown with faint grey lines.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71156,"width":"610px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Auto-Portions-category.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

To turn off all portions, click on the **Full view** (Alt+W) icon. ( ![](./img/wp-content-uploads-2024-01-Auto-Portions-Full-view-tab.png) ) (It is located on the top left side of the **Auto portions** tab).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In addition, **plate elements** are grouped by thickness of the elements, as shown in the figure below:

<!-- /wp:paragraph -->

<!-- wp:image {"id":71186,"width":"624px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Auto-Portions-Plate-element.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

If modifications are needed to be made on the elements in the selected portions, please note that the portion selection is not identical with the object selection. This tool is only to be used for visual purposes and to facilitate the selection of elements.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%"} -->

<!-- wp:image {"align":"center","id":7817,"width":383,"height":340,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/4-4-portions-2.png)](./img/wp-content-uploads-2021-04-4-4-portions-2.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%"} -->

<!-- wp:image {"align":"center","id":7811,"width":436,"height":341,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/4-4-portions-1.png)](./img/wp-content-uploads-2021-04-4-4-portions-1.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

A new portion can be added by clicking the **New Portion** icon (#2) and entering the name of it. If part of the model has been previously selected, these objects will be added to the new portion at the same time.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The portions can be arranged into folders. A new folder can be created by clicking the **New folder** icon (#1).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To turn on a portion, check the check-box in front of the name of the portion. More portions can be turned on at the same time by checking more check-boxes or also by checking folders.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If the _Show hidden parts of the structure translucently_ check box (#6) is clicked at the bottom of the **Portions Manager** tab, then the hidden parts of the model are also shown with faint grey lines.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Any objects of the structural model can be part of more portions at the same time.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To modify a previously defined portion, select the relevant parts of the model which will be the subject of the modification, then select the portion you are going to modify, and finally click on the **Modify **icon (#3).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7823,"width":705,"height":551,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/4-4-portions-3.png)](./img/wp-content-uploads-2021-04-4-4-portions-3.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The **Modify portion** window will appear with the following options:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7805,"width":274,"height":203,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/4-4-portions-4.png)](./img/wp-content-uploads-2021-04-4-4-portions-4.png)

<!-- /wp:image -->

<!-- wp:list {"type":"upper-alpha","className":"is-style-arrow"} -->

- <!-- wp:list-item -->
- **Add selected elements to the portion:** by clicking the OK button, the selected members will be added to the active portion. If some members in the selection already belong to the actually modified portion, this operation will have no additional effect.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- **Remove selected elements from the portion:** all those selected elements will be removed from the modified portion.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- **Assign only the selected elements to the portion:** the modified portion will contain only the selected elements.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Renaming the Portion can be done by clicking the name of the portion and clicking on the **Rename** icon (#5).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A portion can be deleted by clicking the name of the portion and clicking the **Delete **button (#4).

<!-- /wp:paragraph -->
