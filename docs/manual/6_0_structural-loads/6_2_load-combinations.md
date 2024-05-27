---
sidebar_position: 2
---
# Load combinations

### **Limit states**



<!-- /wp:paragraph -->

<!-- wp:paragraph -->

According to EN 1990, structural verifications should be executed in either ultimate (ULS) or serviceability limit states (SLS). Limit states shall be related to design situations.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Ultimate limit states: EQU (for loss of equilibrium of the foundation), STR (for structural design), GEO (for geotechnical design), etc.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Serviceability limit states: characteristic, frequent, quasi-permanent

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Design situations: persistent and transient (P/T), accidental (Acc), seismic

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Limit states introduced in Consteel are combination of limit states and design situations defined in the Eurocode.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":43868,"width":669,"height":326,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-1.png)

- ULS STR P/T

- ULS GEO P/T

- ULS STR/GEO P/T (this is a combined limit state for cases when STR and GEO combinations would be the same)

- ULS EQU P/T

- ULS Acc

- ULS Seismic

- ULS Other

- SLS Char

- SLS Freq

- SLS Q-p

- SLS Seismic

- SLS Other


In order to cover cases not strictly under EC scope, and make sure of smooth transition of old files, there is an ‘Other’ limit state for ULS and SLS too.


When opening models saved in previous Consteel versions, the limit states will be converted as follows:

- ULS -> ULS Other

- SLS -> SLS Other

- ULS EQ (Seismic generated) -> ULS Seismic

- SLS EQ (Seismic generated) -> SLS Seismic


For manually defined load combinations, the limit states can be selected. Seismic combinations can not be defined manually, they can be created only by automatic generation. Load combinations in ULS GEO P/T and ULS EQU P/T limit states are used only for foundation design. Consequently, global design checks will not be performed in these limit states and analysis results are not transferred for connection design (except for spread footing).


### **Load combinations**


<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

According to the actual _[structural design code](../1_0_general-description/1_2_the-main-window.md)_, load case combinations must be created from the _[load cases](./6_1_load-cases-and-load-groups.md#creating-new-load-case)_. Load combinations can be created manually by defining the combination factors manually for each load case or can be created automatically by using the **Automatic load combination generation** function of _Consteel_.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The load combinations can be managed in the table of load combinations which can be opened by clicking on the **Load combination** (![](./img/wp-content-uploads-2021-04-cmd_loadcombi-1.png)) command on the Loads tab.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":9943,"width":510,"height":320,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/7-3-Load-combinations.png)](./img/wp-content-uploads-2021-04-7-3-Load-combinations.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

At the top of the window there are commands for creating and modifying combinations. Below the commands, the table itself can be found. The first column is the name of the load combination. The name is built up from a default name and an ascending sequence number. This can be changed only one-by-one.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The second column defines in which limit state the load combination is working. It is important to set the limit state correctly because design checks are performed only on ultimate limit state (_ULS_) load combinations, while serviceability checks are only performed on serviceability (_SLS_) combinations.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In the further columns, there are the combination factors for each load case. It is possible to edit multiple safety factors at the same time: select safety factors and right-click over them, then enter the desired value in the pop-up window. Multiple cells can be selected using Ctrl or Shift buttons or holding down the left mouse button and moving the cursor over the cells. Cell contents can also be copied and pasted. On the table, select the cells that you want to copy and press **Ctrl+C**. Select the upper-left cell of the paste area and press **Ctrl+V**. Cell contents can be copied from MS Excel and other spreadsheet applications also.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The yellow rows in the load combination table are the automatically generated combinations. The white ones are the ones created or edited manually.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_LCC_new.png) **Create new load combination** - creates a new line in the table of load combinations. The combination factors have to be filled in manually.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_LCC_copy.png) **Copy load combination** - Creates a copy of the previously selected rows. The new load combinations will have sequence numbers and white background.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_LCC_del.png) **Delete load combination** - Deletes the previously selected rows.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_LCC_renum.png) **Renumber load combination** - Change the names of all load combinations in the table to the original.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":9950,"width":432,"height":326,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/7-3-Automatic-generation-of-load-combinations.png)](./img/wp-content-uploads-2021-04-7-3-Automatic-generation-of-load-combinations.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_LCC_new.png)**Automatic generation of load combination** - according to the design standard and the _[settings of load groups and load cases](../6_0_structural-loads/6_1_load-cases-and-load-groups.md)_. A new window will appear where the desired combination creating formulas can be selected. The ULS and SLS combinations are placed on two separate tabs. To create combinations according to the desired formula, select the checkbox before it. The load cases to be combined can be selected from the tree structure on the right. Press **Apply** to create the combinations.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A huge number of load combinations needs a long period of time to be calculated in the analysis. So it is good to keep the number of the load combinations to the minimum. If the automatic load combination feature is used, it is advisable to filter the unnecessary load cases before the generation. A ticked checkbox means, that the load case will be used for the load combination generation.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

After the generation of load combinations, deletion of those rows that cannot be relevant is also possible to minimize calculation time.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

