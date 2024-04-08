---
sidebar_position: 7
---
# Frame corner wizard

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-7-Frame-corner-wizard.png)](./img/wp-content-uploads-2021-04-6-7-Frame-corner-wizard.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

The **_Frame corner wizard_** is an optional function for modeling and calculation of the corner regions of structural models more realistically considering the overlapping of connected members. The function automatically identifies the corner zones and applies special treatment for the geometrical modeling, buckling analysis, plastic analysis, and global checks.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The main mechanical background is that these – generally stiffened – corner zones have usually significantly different behavior than the connected beam members. Since these zones are very short the behavior is influenced dominantly by the shear effect while the connected members have beam-column behavior with a dominant bending effect.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Functions of the frame corner wizard dialogue:

<!-- /wp:paragraph -->

<!-- wp:image {"id":8831,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-7-Frame-corner-wizard-dialogue.png)](./img/wp-content-uploads-2021-04-6-7-Frame-corner-wizard-dialogue.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

\#1 - With the button frame corner recognition can be turned on, and off: By turning on frame corner recognition, frame corner definition can be started. Already defined frame corners can be turned off by clicking the button, and turned on again if it is desired.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

\#2 - With the more about the function button, a new panel will open, where detailed information about the function is available.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

\#3 - Displays the model portion tree, in which it can be decided that what type of frame corner should be applied on which portion. It is important to note, that special frame corners (#5, #6, #7) can only be placed on model portions. The default frame corner type can be applied to the whole model. To place a special frame corner, it is necessary to select a model portion, and then with a click on a type of frame corner and on the **Apply button**, the frame corner will be placed on the model.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

\#4 - Default frame corner: 7. DOF displacements of end nodes of neighboring elements are transferred independently of the topology of the joint

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

\#5 - Box-type stiffened bolted or welded joint: Placement of a constraint element between neighboring elements, resulting in displacements with opposite sign of 7. DOF of their nodes located at the boundary of the corner zones.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

\#6 - Bolted or welded joint with diagonal endplate: Placement of a constraint element between neighboring elements, resulting in equal displacements of 7. DOF of their nodes located at the boundary of the corner zones.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

\#7 - Box-type stiffened bolted or welded joint with additional 1 or 2 diagonal stiffener(s): Placement of a constraint element between neighboring elements, resulting in no displacements of 7. DOF of their nodes located at the boundary of the corner zones.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8837,"width":990,"height":490,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-7-Frame-corner-zones.png)](./img/wp-content-uploads-2021-04-6-7-Frame-corner-zones.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

After clicking on the **Apply** button the program detects the overlapping zones of the members in the identified connection nodes including occurrent eccentricities, haunches, or tapered members.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The member segments inside the overlapping zones are separated and handled specifically:

<!-- /wp:paragraph -->

<!-- wp:list -->

- _Geometry_: the haunch is started at the end of the truncated member (at the end of the overlapping member segment). In this way, the real dimensions and position of the haunch are modeled.

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":8844,"width":464,"height":300,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-7-Geometry.png)](./img/wp-content-uploads-2021-04-6-7-Geometry.png)

<!-- /wp:image -->

<!-- wp:list -->

- _Buckling analysis_: the finite elements belonging to the beam segments inside the overlapping nodes are left out from the buckling analysis (as it would be an unselected model portion). The reason is that in this zone member buckling cannot occur, and the effective buckling lengths of the members actually start outside of this zone
- Plastic analysis: the plastic hinges cannot be formed inside the corner zone. Accordingly, the plastic hinges are formed at the theoretically exact positions (for instance on the column below the haunch) and not in the connection node where the “virtual” bending moment is the highest

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":8850,"width":515,"height":360,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-7-Plasic-analysis.png)](./img/wp-content-uploads-2021-04-6-7-Plasic-analysis.png)

<!-- /wp:image -->

<!-- wp:list -->

- _Global checks_: the global checks (including section and stability checks) are performed only for the member parts outside of the corner zone. In this way, the “virtual” peaks of the bending moments at the connection nodes inside the corner zones (which has no real mechanical meaning) are left out from the design checks and members are checked for the real, considerably bending moment (and the corresponding other internal force) values.

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":8857,"width":383,"height":275,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-7-Global-checks.png)](./img/wp-content-uploads-2021-04-6-7-Global-checks.png)

<!-- /wp:image -->

<!-- wp:list -->

- _Connection design_: similarly to the earlier point the design bending moment and shear force values for the connection design are taken from the end of the truncated members where a beam-to-column connection is applied to the connection node where corner zone is defined

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
