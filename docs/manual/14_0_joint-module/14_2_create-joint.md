---
sidebar_position: 2
---
# Create joint

### Create joint without model

<!-- /wp:heading -->

<!-- wp:paragraph -->

Joint models can be created without global model by clicking on the Edit Joint icon on the Structural members tab.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9499,"width":696,"height":73,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/14-3-tab.png)](./img/wp-content-uploads-2021-04-14-3-tab.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

In this case the joint type, geometry and the loads need to be set manually. One of the advantages of _Consteel_, that in _csJoint_ it is possible to handle several connections inside of a joint. By this, a large scale of customised joints can be designed. In the following, a creation of a beam-to-column joint will be demonstrated.

<!-- /wp:paragraph -->

<!-- wp:list -->

- **Step 1 - Joint identification**

<!-- /wp:list -->

<!-- wp:paragraph -->

After clicking on the Create button (![](./img/wp-content-uploads-2021-04-14-3-create-button.png)) on the top left corner the name of the joint must be given. Comment for the joint can be optionally given, and _Default settings_ of the joint can be modified (see later in chapter **[Default joint settings](#default-joint-settings)** ).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9589,"width":463,"height":362,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/14-3-create-dial1.png)](./img/wp-content-uploads-2021-04-14-3-create-dial1.png)

<!-- /wp:image -->

<!-- wp:list -->

- **Step 2 – Joint configuration**

<!-- /wp:list -->

<!-- wp:paragraph -->

The type of the joint has to be defined on the next dialog. _csJoint_ can handle great variety of joint types, which covers nearly the whole joint standard Eurocode 3 Part 1-8. 

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9595,"width":589,"height":362,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/14-3-create-dial2.png)](./img/wp-content-uploads-2021-04-14-3-create-dial2.png)

<!-- /wp:image -->

<!-- wp:list -->

- **Step 3 – Connections configuration**

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":9601,"width":464,"height":394,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/14-3-create-dial3.jpg)](./img/wp-content-uploads-2021-04-14-3-create-dial3.jpg)

<!-- /wp:image -->

<!-- wp:paragraph -->

Here (picture above) it is possible to set connections both to the flanges and the web. For eligible list of connections, please see chapter [**Create joint**](../14_0_joint-module/14_2_create-joint.md). In this dialog, the section of the column is also has to be set. It can be chosen from the drop down menu, or loaded from the section administrator by clicking the three dot button (![](./img/wp-content-uploads-2021-04-3dots-button.png)).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9565,"width":464,"height":393,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/14-3-create-dial4.png)](./img/wp-content-uploads-2021-04-14-3-create-dial4.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

When setting a connection (picture above), the type and the cross section of the connected element has to be set. It can be chosen from the drop down menu, or loaded from the section administrator by clicking the three dot button (![](./img/wp-content-uploads-2021-04-3dots-button.png)). For eligible list of connections, please see [Chapter.](../14_0_joint-module/14_2_create-joint.md)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

After the desired connections have been set (picture below), by clicking the Create button the joint will be created.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9571,"width":463,"height":394,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/14-3-create-dial5.png)](./img/wp-content-uploads-2021-04-14-3-create-dial5.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Joint loads can be given manually and the manipulations of the connection elements can be made as a last step.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9577,"width":1034,"height":724,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/14-3-create-joint-window.png)](./img/wp-content-uploads-2021-04-14-3-create-joint-window.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

For complete information about manipulating the connection, please see chapter _**[ Manipulating connections](#manipulating-joints)**_.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Create joint by model

<!-- /wp:heading -->

<!-- wp:paragraph -->

Creating joint by the model is simple and easy. Just click on the **_Create joint by model_** button and select the joint.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9734,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-create-model-tab.png)](./img/wp-content-uploads-2021-04-15-3-create-model-tab.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The members will be automatically identified and the possible connection types are offered. Here is possibility to remove some members from the identified connection by removing the appropriate tick.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9728,"width":648,"height":567,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-create-model-pic.png)](./img/wp-content-uploads-2021-04-15-3-create-model-pic.png)

<!-- /wp:image -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Place joint in the global model

<!-- /wp:heading -->

<!-- wp:paragraph -->

After creating the joint it is advisable to place it in the global model. There are two options to do this:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The fastest way of placing a joint, is to place it from the Joint details dialog directly, right after when it is been created. Place… button can be found at the bottom left corner of Joint details dialog (see picture below). By choosing it, it is possible to place the joint to several places by single clicks on the 3D structural model where the same geometry exists. By clicking End joint placement button (see picture below), loads will automatically imported from the model if analysis results are available.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9800,"width":917,"height":660,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-place-dial-1.jpg)](./img/wp-content-uploads-2021-04-15-3-place-dial-1.jpg)

<!-- /wp:image -->

<!-- wp:paragraph -->

The other way of placing a joint, is to use Place joint function, which can be found on the Structural members tab. This function is useful when more previously created joints have to be placed. One joint can be placed to several places in the model where the same geometry exists. After the joint is placed, _csJoint_ automatically import the loads from the global model if analysis results are available.

<!-- /wp:paragraph -->

<!-- wp:media-text {"mediaId":9849,"mediaType":"image","mediaWidth":15} -->

![](./img/wp-content-uploads-2021-04-croco.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->
:::warning

It should be bear in mind that the settings in the csJoint module (profiles sizes, material grades, etc.) will not effect the 3D model. the changed values will be considered in the joint calculation only! The user has to way to keep the model consistent: 1. After modifying the connection the 3D model has to be changed accordingly, 2. Change the 3D model first run the analysis, redefine the connection.
:::
<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Manipulating joints

<!-- /wp:heading -->

<!-- wp:paragraph -->

No matter if a joint is created with or without model manipulating the joint is the same. Joint details appear in a new window where numerous settings can be made. In the following pages we would like to give an overview of the _csJoint_ module using a beam-to-column connection as an example.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Select the joint from the tree structure on the Joint dialog, and press Details (![](./img/wp-content-uploads-2021-04-15-3-place-det-button.png)) button, or double click on the name of the joint.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9740,"width":776,"height":530,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-edit-dial.png)](./img/wp-content-uploads-2021-04-15-3-edit-dial.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Joint details dialog

<!-- /wp:heading -->

<!-- wp:paragraph -->

After the creation of a new joint, or opening an existing one for modification, the Joint details dialog appears, which can be separated into four parts. The window contains the general information about the joint: Joint name, project, engineer, date, etc. These properties will appear in the joint documentation and also useful to distinguish joints from each other.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9782,"width":728,"height":539,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-dial.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-dial.png)

<!-- /wp:image -->

<!-- wp:list -->

- (#1) The first part shows the tree structure about the joint: all components of the connection can be seen and selected.

- (#2) On the second part, the selected component related information / properties can be seen and set: Joint name, project, engineer, date, etc. These properties will appear in the joint documentation and also useful to distinguish joints from each other.

- (#3) The third part is the graphical window. Predefined views of the joint can be selected with the view tools:![](./img/wp-content-uploads-2021-04-15-3-joint-det-view-ico.png)

- (#4) The fourth part shows the results of the joint calculation. Calculation is automatically run when any changes take place and the Automatic calculation checkbox is clicked. If the checkbox is unchecked the calculation can be run with the Calculation button. In the pull down menu the type of the result visualisation can be set to three different types:

  - Summary for the whole joint

  - Summary for the selected connection

  - Detailed results of the selected connection

<!-- /wp:list -->

<!-- wp:paragraph -->

In the last two cases a connection must be chosen in the connection tree.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Documentation of the Joint can be started with the Document… button on the bottom left corner of the dialog.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Manipulating join

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Column**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If the _Column_ is selected in the connection tree, then column related properties of the connection can be set like the section size and material grade (#1). Setting the position of the column is also very important (#2). Furthermore the position of the reference plane is essential for the joint calculation. The image on the right gives a visual help about the meaning of ‘Lsr’ and ‘Lc’ variables.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9746,"width":686,"height":494,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-1-col.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-1-col.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Stiffeners**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Stiffeners can be added if _Stiffeners_ is clicked in the connection tree. Upper and lower stiffener plate properties can be seen in the #1 part of the image below. Additional web and flange stiffeners can also be defined (#2). In order to place shear stiffener in the joint click on ‘Use stiffener’ check box (#3). Bear in mind that the position of the stiffeners are measured from the reference plane of the beam, which can be set if the _Beam_ is clicked in the joint tree (see below!).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9752,"width":680,"height":477,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-2-stiff.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-2-stiff.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Joint loading**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If _Joint loading_ is selected, it is possible to choose from two options (#1). When “User defined joint loading” is selected, joint loads can be given manually by defining load cases, and internal forces (#2). If “Model based joint loading” is selected, _csJoint_ automatically imports the internal forces from all of the combinations after the joint is placed in the modelling area.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9758,"width":656,"height":461,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-3-loads.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-3-loads.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Beam**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If the _Beam_ is selected in the connection tree, then beam related properties of the connection can be set like the section size and material grade (#1). Beam end configuration can be set such as haunch (#2). Furthermore the beam span and position of the beam are essential for the joint calculation (#3).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9764,"width":680,"height":476,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-4-beam.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-4-beam.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**End plate**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_End plate_ properties (geometry, material) can be edited in the #1 part of the image below. Bolt properties can be seen on #2 part.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9770,"width":679,"height":477,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-5-endpl.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-5-endpl.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Welds**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

At _Welds_, it is possible to choose if welds should be optimized automatically or not (#1). If not, weld properties can be set manually (#2). Method of weld design also can be set in this window (#3)

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9776,"width":674,"height":472,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-6-welds.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-6-welds.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Any changes made on the joint will take place either when pressing Enter or by clicking to another editable field on the window. If _Automatic calculation_ is turned on and any changes take place then the calculation of the joint is automatically rerun. It can be turned off. In that case click on the Calculation button to run the calculation.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In the pull down menu the type of the result visualisation can be set to three different types: Summary for the whole joint, Summary for the selected connection, Detailed results of the selected connection. In the last two cases a connection must be chosen in the connection tree.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9842,"width":455,"height":386,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-joint-det-7-results.png)](./img/wp-content-uploads-2021-04-15-3-joint-det-7-results.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The result of the joint calculation can be seen in the highlighted part of the window. If the detailed result is selected then all the results of the necessary calculations can be seen according to the selected load combination or according to the dominant load case.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Default joint settings

<!-- /wp:heading -->

<!-- wp:paragraph -->

The default joint setting like weld sizes, bolt diameter, etc. can be changed and saved.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Default joint settings_ can be changed and saved by clicking the Default joint settings (![](./img/wp-content-uploads-2021-04-15-3-def-butt.png)) icon on the Joints dialog.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9812,"width":512,"height":498,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/15-3-def-dial.png)](./img/wp-content-uploads-2021-04-15-3-def-dial.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The default joint configuration file is saved to the Documents \Consteel folder as UserConfig.xml.

<!-- /wp:paragraph -->
