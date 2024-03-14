---
sidebar_position: 11
---
# Link elements

Link elements connecting elements that are not directly connected to each other. Three types of link elements can be used in Consteel:

<!-- /wp:paragraph -->

<!-- wp:list -->

- [Link](#link)
- [Smart link](#smart-link)
- [Constraints](#constraints)

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Link

<!-- /wp:heading -->

<!-- wp:paragraph -->

Link element (![](./img/wp-content-uploads-2021-04-cmd_link.png)) can be used to connect elements that are not directly connected to each other.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Parameters of the link element can be defined in the middle part of the dialog:

<!-- /wp:paragraph -->

<!-- wp:list -->

- \_Position of connection: \_this parameter defines the place where the continuity acts in the percentage of the length of the link element. Value can be between 0 and 1
- Rotation: rotation value defines the angle of the link element in degrees
- Release: predefined releases can be assigned to the specified position. If a new release type is needed the **_Release_** dialogue can be called by pressing the button next to the combo

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

There are two different types of link element.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Connect two structural points (![](./img/wp-content-uploads-2021-04-cmd_link_point.png))

<!-- /wp:heading -->

<!-- wp:paragraph -->

This type of link element can be used to connect two structural points.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9034,"width":299,"height":161,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-10-Link-elements.png)](./img/wp-content-uploads-2021-04-6-10-Link-elements.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

For example, if there is a cantilever on a relatively high tapered column (see image below) it is advisable to connect it not directly to the reference line of the column but with the link element. If it is connected this way the analysis and design results are more accurate and the modeling is more exact.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9040,"width":699,"height":386,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-10-Connection-element.png)](./img/wp-content-uploads-2021-04-6-10-Connection-element.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Connect two structural edges that are equal length and parallel (![](./img/wp-content-uploads-2021-04-cmd_link_line.png))

<!-- /wp:heading -->

<!-- wp:paragraph -->

Equal length and parallel edges and members can be connected with this kind of link element.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This type of link element can be used for example when connecting a slab eccentrically to a beam.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9046,"width":698,"height":296,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-10-slab-to-beam_1.jpg)](./img/wp-content-uploads-2021-04-6-10-slab-to-beam_1.jpg)

<!-- /wp:image -->

<!-- wp:image {"align":"center","id":9052,"width":698,"height":295,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-10-slab-to-beam_2.jpg)](./img/wp-content-uploads-2021-04-6-10-slab-to-beam_2.jpg)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Smart Link (![](./img/wp-content-uploads-2021-04-cmd_smartlink.png))

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

This type of link element makes it easier to handle geometric changes between connected members. The element follows the geometric changes (movement, rotation, section change) of the member on which it is placed (Main section). In addition, the other member connected to it (Connecting section) also follows the changes of the link element and thus the main section.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

A typical application is a connection between the main beam and the purlin. With this object, we can place link elements at specific points on the main beam, to the endpoint of which we can easily connect members at a later time, based on the predefined eccentricity parameters. In the case of any change in geometry or profile, the smart link element follows the modification of the main beam, together with the member attached to it.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

After starting the command, the Edit smart link dialog box appears:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":13567,"width":578,"height":475,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-10-Edit-smart-link-1.png)](./img/wp-content-uploads-2021-04-6-10-Edit-smart-link-1.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

\# 1 In the Main Section (A) field has to be specified the local eccentricity of the link element relative to a notable point on the main section.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

\# 2 In the _Release_ field has to be set the continuity of the connection element by choosing from existing types or creating a new type. The connection point between the two members can be specified manually by selecting the "Setting position manually" checkbox or automatically by leaving it blank. In this case, the position will always be at the edge of the profile of the main section.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

\# 3 In the _Connecting section_ (B) field, you can specify an eccentricity increment for the link element by specifying the connecting section. The program determines the length of the link element, taking into account the height of the section specified here and the section reference point.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

There are two options for placing the smart link element(s).

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-5-3-draw-ico-11.png) With this function, the link elements can be placed one by one by clicking on a specific point on the member. The placed smart link element is always parallel to the Z axis of the member.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-cmd_multi_place.png) For group placement, you must first enter the placement distances measured from the start point of the member at the bottom of the dialog box (#4) and then click on a member to place it. If that cannot be placed on that particular member (e.g. because the member is not long enough), the program will not perform the operation and a warning message of "_A smart link cannot be defined with these settings of the Main section!_" will inform you.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

**It is important to know** that the smart link elements cannot be copied together with the members currently. When copying a member containing smart links already placed on it, the smart links will not be copied together, but they have to be selected and copied separately.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Constraints

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

These types of link elements are special since these cannot be created manually, therefore there is no command icon on the menu bar. Constraints are generated automatically during the finite element generation if the following objects are present in the model:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Frame corners with the help of the [**_Frame corner wizard_**](/manual/structural-modelling/frame-corner-wizard/)
- If any bar member is set to shell FE representation (see **_[Superbeam](https://consteelsoftware.com/manual/structural-modelling/superbeam/)_** for more info)

<!-- /wp:list -->

<!-- wp:paragraph -->

Constraint elements are represented with thick orange lines in the Finite element view of the model. Constraints transfer all or just some of the 7DOF beam element-like deformations from one node to another or from the beam to its shell element-based representation.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Frame corners**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Constraints created in the frame corners transferring only the warping deformations between the beam and the column according to the type of the frame corner object. More information about the frame corner types: [**_Frame corner wizard_**](/manual/structural-modelling/frame-corner-wizard/)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Superbeam**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":29490,"width":368,"height":105,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/12/combo_constr_type.png)](./img/wp-content-uploads-2021-12-combo_constr_type.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

The definition of which type of deformations are transferred depends on the value of the combobox in the property tree. The default value for constraints is _Translational_. The properties of the constraint elements can be accessed either by selecting the beam or selecting the constraint element itself on the Finite Elements view of the model.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

In the first case constraints at both ends of the member can only be modified together, in the second case the constraint elements can be modified separately (only if the superbeam member is already converted to plates) .

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The setting „Translational” results in coupling of displacements in all 3 global directions where the warping deformations of the 7DOF beam elements are also considered. The setting „Translational and rotational” will result in coupling additionally the rotations in all 3 global directions.

<!-- /wp:paragraph -->
