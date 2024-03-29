---
sidebar_position: 2
---
# Line members

The line members can be modelled with steel thin-walled, reinforced concrete, and composite cross-section. The members – depending on the placement – can be **columns **or **beams**. The column is a special positioned line member, which is always vertical, so the placement is simpler, because only the height should be defined.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The dialogue allows the following modelling options for creating line members:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_draw.png) Draw the reference line of the member

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_draw_line.png) Draw as a line segment or continuous line

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_draw_arc-2.png) Draw as an arc by a center point, start point and angle, by 3 points, or start point, endpoint, and tangent

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_draw_select.png)Select an existing line for the section as a reference line of a member

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-cmd_draw_get.png) Read out the parameter of an existing member by clicking on it and assigning those parameters to the one to be created

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Member parameters can be defined in the middle part of the dialogs:

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":43906,"width":378,"height":370,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/12/Beam.jpg)](./img/wp-content-uploads-2022-12-Beam.jpg)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":43913,"width":413,"height":438,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/12/Column.jpg)](./img/wp-content-uploads-2022-12-Column.jpg)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:list {"className":"is-style-arrow"} -->

- <!-- wp:list-item -->
- _Section: \_the appropriate cross-section can be selected from the drop-down box. If no section has been loaded into the model, the \*\*\_Section_** dialogue should be opened by pressing the three dots button (![](./img/wp-content-uploads-2021-04-3dots-button.png)) next to the drop-down box. For more information about **Section administration** and for details on the section models and standard tests used in ConSteel, see **_[Chapter 10 Section module](/manual/section-module/)_\*\*.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":21905,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/dial_section_admin.png)](./img/wp-content-uploads-2021-04-dial_section_admin.png)

<!-- /wp:image -->

<!-- wp:list {"className":"is-style-arrow"} -->

- <!-- wp:list-item -->
- _Release (start, end)_: predefined releases can be assigned to the ends of the members. If a new release type is needed the **_Release_** dialogue can be called by pressing the ![](./img/wp-content-uploads-2021-04-3dots-button.png) button next to the combo.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:list {"className":"is-style-arrow"} -->

- <!-- wp:list-item -->
- _Initial bow imp.:_ half sine-wave shaped initial curvature can be defined in the two local directions perpendicular to the member reference axes (“y,z”) with the given amplitude at the mid-length of the member.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:list {"className":"is-style-arrow"} -->

- <!-- wp:list-item -->
- Type of finite e*lement*
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

**For steel members:**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

The available element types depend on the chosen section.

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-default"} -->

- <!-- wp:list-item -->

- For welded single or double symmetrical cross-sections (macro section) there are four choices possible:

  <!-- wp:list -->

  - <!-- wp:list-item -->

  - **7 DOF beam element**: element with nodes of 7 degrees of freedom, including the warping of the thin-walled cross-section. It is an important effect in the case of structures with standard, open steel profiles.

  - <!-- /wp:list-item -->

  -

  * <!-- wp:list-item -->

  * **Shell element**: the member will be converted into shell elements according to its cross-section during the analysis. The applied loads, supports, stiffeners, and holes will be converted as well. This conversion is reversible. The member keeps its 1D attributes and can be converted back anytime to a normal line member. Currently, the code design of these members is not available.

    <!-- wp:list -->

    - <!-- wp:list-item -->
    - ![](./img/wp-content-uploads-2021-04-cmd_draw_get.png) This type cannot be selected in this dialog. You must first place the member in the model before you can change the type in the **_[Object properties window](/manual/how-to-open-consteel/the-main-window/#Object-properties-window)_**. See more info about this type of member in chapter **_[Superbeam](/manual/structural-modelling/superbeam/)_**.
    - <!-- /wp:list-item -->

    <!-- /wp:list -->

  * <!-- /wp:list-item -->

  *

  - <!-- wp:list-item -->

  - **Tension bar**: cannot resist compressional axial force but it can resist any other internal forces. If it got compression the analysis neglects its effect.

  - <!-- /wp:list-item -->

  -

  * <!-- wp:list-item {"className":"Xbrace"} -->

  * **Tension bar (X Brace)** starting from **Consteel 17 **used for individual members of bracing systems made of elements working in tension only which are arranged in a way, that from a pair of members always just one is working in tension and the another is assumed to be efficient due to buckling. This option will linearize the behaviour of such members for a linear buckling eigenvalue calculation by considering the member working in both tension and compression, but with half cross-section properties.

  * <!-- /wp:list-item -->

  <!-- /wp:list -->

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* For any other steel cross-sections, three of the above mentioned possible choices are available:

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - 7 DOF beam element
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Tension bar
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Tension bar (X Brace) from** Consteel 17**
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

* <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

**For reinforced concrete or composite members:**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify","editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

There is only one choice available: the _**6 DOF beam element**_ type. This is the commonly used finite element with nodes of 6 degrees of freedom.

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- _Element group_: the members can be sorted out into element groups for various purposes (selection, dominant results, sensitivity analysis, etc.).  
  if new element group is needed the **_Groups of structural members_** dialogue can be called by pressing the ![](./img/wp-content-uploads-2021-04-3dots-button.png) button next to the combo.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:list -->

- <!-- wp:list-item -->
- _Number of finite elements_: the required number of finite elements used on the member in the analysis can be set. I The default \_automatic \_option gives a sufficient result in the most cases.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:list -->

- <!-- wp:list-item -->
- _Local eccentricity_: member eccentricity can be defined in the local coordinate system (“y, z”) of the member, and the section can be rotated about the local coordinate “x”.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:list -->

- <!-- wp:list-item -->
- At the bottom of this dialog there is an instruction and command area for guiding the user.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:columns {"className":"is-style-gapless"} -->

<!-- wp:column {"verticalAlignment":"center","width":"5%"} -->

<!-- wp:image {"align":"right","id":11256,"width":68,"height":68,"sizeSlug":"large","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](./img/wp-content-uploads-2021-04-exclam.png)](./img/wp-content-uploads-2021-04-exclam.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"95%"} -->

<!-- wp:paragraph -->

It should be noted that not only the eccentric axial force influences the analysis (additional bending moments), but also the eccentric bending and torsional moments (additional bending and torsional moments and **bimoment)**!

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:heading {"level":3} -->

### Steel members

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

As the first step of line member modeling, cross-sections have to be loaded into the model. This can be performed either from the **_Section administrator_** directly or from the **_Beam_** dialogue window. In ConSteel, there are three options for defining cross-sections:

- Library sections,
- Macro sections,
- Drawn sections.

<!-- /wp:paragraph -->

<!-- wp:columns {"className":"is-style-gapless"} -->

<!-- wp:column {"verticalAlignment":"center","width":"5%"} -->

<!-- wp:image {"align":"right","id":11256,"width":68,"height":68,"sizeSlug":"large","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/exclam.png)](./img/wp-content-uploads-2021-04-exclam.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"95%"} -->

<!-- wp:paragraph -->

It is important to note that in ConSteel, material quality is an attribute of the cross-section, therefore it must be defined when loading the cross-section!

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:heading {"level":4} -->

#### Cross section libraries

<!-- /wp:heading -->

<!-- wp:paragraph -->

In _ConSteel_, the following standard cross-section libraries are available:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Standard (European) cross-section library
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- American cross-section library (metric and imperial)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- British cross-section library
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Chinese cross-section library
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Russian cross-section library
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Manufacturers 'profiles (catalogs of individual manufacturers' profiles)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Macro sections

<!-- /wp:heading -->

<!-- wp:paragraph -->

In _ConSteel_, the following macro sections are available organized into 4 groups:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. <!-- wp:list-item -->
2. **Sheet welded types**
3. <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"align":"right","id":7365,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-1713.png)](./img/wp-content-uploads-2021-04-image-1713.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Welded I or H section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Welded box section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Welded Maltese cross-section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Welded half Maltese cross-section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Welded hat section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Welded T
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- WQ section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Slant flange welded I or H section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- C section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

2\. **Hot rolled types**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":7371,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-1752.png)](./img/wp-content-uploads-2021-04-image-1752.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Rolled I or H shape (with parallel flange)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rolled angle (parallel leg)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rolled channel (parallel flange)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- CHS shape
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- T shape (half I)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Plate
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- RHS
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Round bar
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

3\. **Cold-formed types**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":7377,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-1755.png)](./img/wp-content-uploads-2021-04-image-1755.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- RHS
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- CHS
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- L profile
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- unsymmetrical U section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Z shape
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- C shape
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Sigma section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Zeta section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Slope omega section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

In the case of cold-formed macros, it is also possible to provide profile stiffeners for the last 5 profile types. On the flanges, single or double folded edge stiffeners, and two different types of intermediate stiffeners can be defined. On the webs, three different types of intermediate stiffeners can be defined, and web stiffeners can also be double stiffeners. The stiffeners defined this way are taken into account in the calculation of distortional buckling as defined in EN 1993-1-3. I

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"id":7498,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-1771.png)](./img/wp-content-uploads-2021-04-image-1771.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"id":7505,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-1774.png)](./img/wp-content-uploads-2021-04-image-1774.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->

For cold-formed macro sections made of coated material, the thickness tolerance category as defined in EN 10143 shall also be provided. There are two categories: normal and special. Accordingly, the design wall thickness of the cross-section is calculated according to EN 1993-1-3 section 3.2.4. In general construction practice, such sections are most often made of coated steel sheets according to the aforementioned EN 10143 standard, and therefore these macros are based on the thickness tolerance categories defined in this standard.

<!-- /wp:paragraph -->

<!-- wp:media-text {"align":"wide","mediaId":6758,"mediaType":"image","mediaWidth":15} -->

![warning](./img/wp-content-uploads-2021-04-warning_croc.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->

Important, that if the designer does not choose the coated material from the database and that the selected material has a thickness tolerance of more than 5%, in this case, the calculation will not be exact. To avoid this, you must import the cross-section into the **_Section drafter_** module and provide the real thickness tolerance. (See **_Section drafter_** in the following chapter!)

<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:paragraph -->

4\. **Compound types**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":7511,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-1780.png)](./img/wp-content-uploads-2021-04-image-1780.png)

<!-- /wp:image -->

<!-- wp:list {"type":"upper-roman"} -->

- <!-- wp:list-item -->
- I or H shape reinforced by channel at one flange
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I or H shape reinforced by channels at both flanges
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I or H shape reinforced by half I or H
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I or H shape reinforced by half I or H shapes at the web
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I or H shape reinforced by angels at the flange
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I or H shape reinforced by plates at flanges
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I or H shape reinforced by I or H shape at the flange
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Closed shape with angles and plates
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Closed 2U
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Closed 2I
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I plus U
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I from 2U
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Half Maltese
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Battened section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Section drafter

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

The third option for creating a cross-section is the section drawing in the **Section drafter **module. The function can be started by pressing the **Draw section** button in the Section Administration dialog box.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

As a first step, after the command has been executed, you have to select a section type and a material quality in a pop-up window and enter the section name. There are two types of cross-sections:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Cold formed section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- General thin-walled section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"align":"left","id":11271,"width":308,"height":177,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_sectiondrafter_select_type.png)](./img/wp-content-uploads-2021-05-dial_sectiondrafter_select_type.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

The type of cross-section has a fundamental influence on its later operation. Choosing the **cold-formed section** type, you can create sections drawn by one line, which have a uniform wall thickness, with automatically created curves between segments, and it cannot be closed. In the calculation of these sections, the effective cross-sectional reduction due to distortional buckling is also taken into account, following EN 1993-1-3.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

In the case of **general thin-walled sections**, sheets of different thicknesses may be used, the section need not be drawn with a single line, and single-closed sections may also be created. This type is basically used to create sheet welded sections. For these sections, only strength, local and global stability tests can be performed.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

After selecting the section type, clicking on the **_Next_** button opens a separate window for the **_Section Drafter module_**, the contents of which are slightly different depending on the type of section you choose.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The profile drawing window is structured as follows:

<!-- /wp:paragraph -->

<!-- wp:image {"id":8039,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-profile-drawing-window.png)](./img/wp-content-uploads-2021-04-6-2-profile-drawing-window.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**1# Drawing Area**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**2# Commands**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**3# Diagnostic Messages**: Displays various warning and error messages

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

**4# Navigation**: Use the **_Back_** and **_Next_** buttons to move between the different phases of the section drawing

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

**5# User Interface Settings**: There are four tabs on the pop-up window that provide parameters and switches for adjusting the **_Visibility_**, **_Grid_**, **_Snap_**, and **_Object Sizes_**.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

**6# Specify Parameters**: always displays parameter panels for the current function and the selected item.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Drawing of Cold-Formed Sections

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

Cold-formed sections are defined in 4 phases.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

(1) Drawing of the geometry

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

(2) Specify design parameters for strength and global stability tests

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

(3) Specify design parameters for local buckling tests

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

(4) Defining stiffeners

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**(1) Drawing of the geometry** ![](./img/wp-content-uploads-2021-04-image-1813.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The section geometry is edited in the first phase. Stiffeners can be easily and quickly drawn using macros. It is also possible to import a previously loaded cross-section.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_polyline.png) **Draw Polyline** command to start editing geometry. Drawing can also be done by selecting endpoints in the drawing space or by entering coordinates in the **Draw line** pop-up window. Coordinates can be specified in Cartesian ![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_cart.png) or Polar ![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_polar.png) coordinates, local ![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_local.png) or global ![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_global.png). In the case of local input, the coordinate system is rotated according to the grid angle, in the case of global input the coordinate system does not change. The positioning of the plate segments relative to the drawn reference line (offset) ![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_offset.png) can be centered, left, or right-aligned. You can change this during drawing or later, one by one, in the Plate segment parameters panel on the sidebar. Roundings are created automatically when you draw plate segments. The radius of roundings can be modified subsequently, by selecting the curvature, individually in the sidebar, or uniformly over the entire section. You can also enter the nominal sheet thickness here.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8071,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-1836.png)](./img/wp-content-uploads-2021-04-image-1836.png)

<!-- /wp:image -->

<!-- wp:columns {"className":"is-style-gapless"} -->

<!-- wp:column {"verticalAlignment":"center","width":"5%"} -->

<!-- wp:image {"align":"right","id":11256,"width":68,"height":68,"sizeSlug":"large","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/exclam.png)](https://consteelsoftware.com/wp-content/uploads/2021/04/exclam.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"95%"} -->

<!-- wp:paragraph -->

In the section drawing window, you must also press ENTER after entering each parameter for the entered value to take effect!

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->

You can continue drawing plate segments only from one endpoint. When you have finished drawing, you can exit the command by pressing the ESC key or by clicking the EXIT button. If you want to edit the drawing, you can delete and redraw that section to fix the problem.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_stiff.png) The following two commands will launch the **_Intermediate Stiffener_** and **_Edge stiffener_** macros. There are three types of intermediate stiffeners and two types of edge stiffeners. A panel for specifying the geometry parameters of the stiffener appears in the right sidebar. You can also specify which side of the segment the stiffener has to be placed. After the command is executed, pointing to a plate segment with the cursor, the stiffener corresponding to the set parameters appears. After adjusting the parameters, you can place the stiffener by clicking on the desired location. After positioning, by selecting the stiffener, the parameters, and in the case of intermediate stiffeners, the positions remain adjustable. Note that these commands are just macros to make the drawing process easier. The plate segments drawn in this way only become code-compliant stiffeners, after defining other parameters in Phase 4.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_inport.png) With the **Import section** command, you can import and further edit a previously created library, macro, or drawn section. Obviously, only a cold-formed, one-line drawing can be imported. After the command has been issued, a window will pop up showing the sections that are suitable for importing. Pressing the Next button loads the selected section. If you have a previously drawn geometry, the program will warn you that the current section you have drawn so far will be deleted. The section imported retains all its geometry and design parameters and remains editable.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_explode.png) The **Explode section** command converts the drawn stiffeners and roundings into individual line and arc segments. After the exploding, also for these elements, only the thickness and offset can be changed, not their size and position. By exploding, elements previously defined as one segment, turn into separate segments whose classification can be defined independently.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_dim.png) The **Place dimension** command is used to apply dimension lines to each segment of the section. There are two icons in the pop-up window that allow you to choose how to place the dimension line:

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_dim_proj.png) Dimension placement in projection to the coordinate system. You can specify dimension lines in the Y or Z direction.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-ico_sect_draft_draw_dim_length.png) Placing a dimension line parallel to the line segment.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

To place a dimension line, click on one of the line segments and click again to place the dimension line in the desired position.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**(2) Specify design parameters for strength and global stability tests** ![](./img/wp-content-uploads-2021-04-image-1861.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

After the geometry has been drawn, the standard parameters required for the strength and global stability analysis must be set.

<!-- /wp:paragraph -->

<!-- wp:media-text {"align":"full","mediaPosition":"right","mediaId":12340,"linkDestination":"media","mediaType":"image","mediaWidth":15} -->

<!-- wp:paragraph {"placeholder":"Content…"} -->

In the first drop-down menu, you have to choose the manufacturing type of the cross-section. It can be cold-rolled, press broken, or other cold-formed.

<!-- /wp:paragraph -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/drop_sectdraw_CF_manu.png)](./img/wp-content-uploads-2021-04-drop_sectdraw_CF_manu.png)

<!-- /wp:media-text -->

<!-- wp:media-text {"align":"full","mediaPosition":"right","mediaId":12358,"linkDestination":"media","mediaType":"image","mediaWidth":15} -->

<!-- wp:paragraph {"placeholder":"Content…"} -->

After that, the thickness tolerance required to calculate the design wall thickness and the number of the 90° bends have to be entered. The number of bends is automatically calculated when a macro profile is imported. In the case of a drawn section, this field must be completed by hand.

<!-- /wp:paragraph -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/drop_sectdraw_CF_thick.png)](./img/wp-content-uploads-2021-04-drop_sectdraw_CF_thick.png)

<!-- /wp:media-text -->

<!-- wp:media-text {"align":"full","mediaPosition":"right","mediaId":12365,"linkDestination":"media","mediaType":"image","mediaWidth":15,"verticalAlignment":"top"} -->

<!-- wp:paragraph {"placeholder":"Content…"} -->

Next, the flexural and torsional buckling curves have to be selected. If the section is later used on a line member which is part of a **_[Purlin line](/manual/structural-modelling/purlins/#place-purlin-line)_** object, the lowest curve selected in the _Lateral-torsional buckling for purlin line_ field will be considered in the analysis.

<!-- /wp:paragraph -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_panel_CF_bucklingcurves.png)](./img/wp-content-uploads-2021-04-sectdraw_panel_CF_bucklingcurves.png)

<!-- /wp:media-text -->

<!-- wp:paragraph -->

**(3) Specify design parameters for local buckling tests** ![](./img/wp-content-uploads-2021-04-image-1862.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Moving to the third phase, the drawing area displays the lengths of the segments used to calculate the effective length (bp). By selecting a segment, you can specify on the sidebar whether, and in which direction, that segment should be considered in the calculation of the shear buckling.

<!-- /wp:paragraph -->

<!-- wp:media-text {"align":"full","mediaPosition":"right","mediaId":12435,"linkDestination":"media","mediaType":"image","mediaWidth":15,"verticalAlignment":"top"} -->

<!-- wp:paragraph {"placeholder":"Content…"} -->

The following field specifies how the segment is to be considered in the classification. There are three options to choose from

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Automatic classification and efficient length calculation ![](./img/wp-content-uploads-2021-04-sectdraw_cmd_class_auto.png) (default)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Ignore classification and consider the total length ![](./img/wp-content-uploads-2021-04-sectdraw_cmd_class_tot.png)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Ignore classification and do not consider the plate in the effective cross-section ![](./img/wp-content-uploads-2021-04-sectdraw_cmd_class_no.png)
- <!-- /wp:list-item -->

<!-- /wp:list -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_panel_CF_plateclass.png)](./img/wp-content-uploads-2021-04-sectdraw_panel_CF_plateclass.png)

<!-- /wp:media-text -->

<!-- wp:paragraph -->

**(4) Defining stiffeners** ![](./img/wp-content-uploads-2021-04-sectdraw_CF_progbar_4.png)

<!-- /wp:paragraph -->

<!-- wp:media-text {"align":"full","mediaPosition":"right","mediaId":12495,"linkDestination":"media","mediaType":"image","mediaWidth":15} -->

<!-- wp:paragraph {"placeholder":"Content…"} -->

In order for the drawn stiffeners to be really standard-compliant stiffeners in the calculation, they need to be defined at this phase. The first step is to decide whether the section is cold-formed Z- or C-like section or whether it is a general shape. You can choose by using the radio buttons in the sidebar.

<!-- /wp:paragraph -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_CF_panel_sectfamily.png)](./img/wp-content-uploads-2021-04-sectdraw_CF_panel_sectfamily.png)

<!-- /wp:media-text -->

<!-- wp:paragraph {"align":"justify"} -->

When choosing a Z- or C-like profile, the calculation takes into account the stress of the other flange as well as the stiffness of the web when supporting the flange. To do this, of course, you need to specify which parts of the section make up the lower and upper belts, and the web, and you must add its length. By choosing a general shape section, the edge stiffeners are calculated independently of each other.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

A further important difference is that only line members created as a Z-C-like section can later be used in a [_**Purlin line**_](/manual/structural-modelling/purlins/#place-purlin-line), [**_Purlin support zone_**](/manual/structural-modelling/purlins/#support-zone), or [_**Purlin overlap**_](/manual/structural-modelling/purlins/#purlin-overlap-zone). (See [_**Chapter Purlins**_.](/manual/structural-modelling/purlins/))

<!-- /wp:paragraph -->

<!-- wp:media-text {"align":"wide","mediaPosition":"right","mediaId":12519,"linkDestination":"media","mediaType":"image","mediaWidth":15,"verticalAlignment":"center"} -->

<!-- wp:paragraph {"placeholder":"Content…"} -->

A new panel appears next to the left-hand diagnostic panel, which shows the stiffeners in a tree structure.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To specify the stiffeners, use the icons on the command line in the top left of the window:

<!-- /wp:paragraph -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_CF_create_stiffeners.png)](./img/wp-content-uploads-2021-04-sectdraw_CF_create_stiffeners.png)

<!-- /wp:media-text -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-sectdraw_CF_create_stiffeners_nonstiff.png) **_Select non-stiffened flange_**: Only applicable for Z- or C-like sections. If one of the flanges is unstiffened, this command defines this flange. You have to select the line segments of the unstiffened flange, and then click on \_**ENTER **\_or press the ENTER key to finish entering.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"top","width":"75%"} -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-sectdraw_CF_create_stiffeners_edge.png) _**Select edge stiffener and double edge stiffener**_: Follow the instructions in the popup window to define the stiffener in 4 steps. The first step is to select the segment(s) that make up the stiffener by framing or clicking on it and then click **_ENTER _**or press ENTER key to finish the entry. Then, select the flange which has to be stiffened and press ENTER again to complete the operation. The next step is to specify the segment that forms the web, and finally determine the length of the web by two points. Each step must be completed in the same way closed with the ENTER. The process steps can be followed in the right panel where OK will be displayed on all three lines when correctly entered.

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"25%"} -->

<!-- wp:image {"align":"center","id":12564,"width":174,"height":137,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_CF_create_stiffeners_stiff_set.png)](./img/wp-content-uploads-2021-04-sectdraw_CF_create_stiffeners_stiff_set.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"top","width":"75%"} -->

<!-- wp:paragraph -->

If the section is set to Z or C, the position of the belt must also be entered in the drop-down menu at any step of the process. Click the arrow icon ![](./img/wp-content-uploads-2021-04-sectdraw_CF_create_stiffeners_whitearrow.png) to re-enter a component.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Finally, the critical stress of the stiffener must be specified in the lowest section of the panel. Here you can choose between automatic calculation or manual input. It is important that the automatic calculation only works with Z- or C-like sections, as the Eurocode gives solutions only for such cases.

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"25%"} -->

<!-- wp:image {"align":"center","id":12630,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_CF_crit_stress.png)](./img/wp-content-uploads-2021-04-sectdraw_CF_crit_stress.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-sectdraw_CF_create_stiffeners_inter.png) **_Select intermediate stiffener and double intermediate stiffener_**: Like the process of defining edge stiffener, you must select the segments that make up the stiffener and press ENTER to accept the entry. No further steps are required; however, the critical stress of the stiffener must be specified.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The stiffeners can be selected after input and their parameters can be changed or they can be deleted by pressing the DEL key.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Finally, you can close the section drawing by pressing the save exit button on the phase indicator panel. ![](./img/wp-content-uploads-2021-04-sectdraw_CF_progbar_4.png)

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### General Thin-walled Sections

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

General thin-wall sections are defined in 3 phases.

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"className":"is-style-default"} -->

1. <!-- wp:list-item -->
2. Drawing of the geometry
3. <!-- /wp:list-item -->
4.
5. <!-- wp:list-item -->
6. Specify design parameters for strength and global stability tests
7. <!-- /wp:list-item -->
8.
9. <!-- wp:list-item -->
10. Specify design parameters for local buckling tests
11. <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

**(1) Drawing of the geometry** ![](./img/wp-content-uploads-2021-04-sectdraw_TW_progbar_1.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Fewer commands are available for editing this type of section since it is not possible to draw and define stiffeners. The editing process is similar to the previous one.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-sectdraw_TW_cmd_draw.png) The dialog used for the **_Draw line_** command is the same as the dialog for the cold-formed section, see the [previous ](#Draw-Polyline)subchapter for details.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"top","width":"75%"} -->

<!-- wp:paragraph {"align":"justify"} -->

Due to the nature of the section, the drawing differs from the previous one, since each segment can be given different thicknesses and a closed segment can also be created. When drawing from an endpoint and clicking on an intermediate point of an already drawn segment will cause the line drawing to "skip" to that point and continue editing from that point. The so-called "Dummy" segments required for section modeling are also created, which appear on the screen as a brown dashed curved line.

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"25%"} -->

<!-- wp:image {"align":"center","id":12698,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_TW_scr_1.png)](./img/wp-content-uploads-2021-04-sectdraw_TW_scr_1.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:columns {"verticalAlignment":"top"} -->

<!-- wp:column {"verticalAlignment":"top","width":"75%"} -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-sectdraw_TW_cmd_move.png) **_Move Point and Edge_** can be used to move an endpoint or an entire segment. If you select a point, the next step is to enter the endpoint of the move immediately, if selecting an edge, first click on the start point and then the endpoint of the move***.***

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"25%"} -->

<!-- wp:image {"align":"center","id":12704,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_TW_scr_2.png)](./img/wp-content-uploads-2021-04-sectdraw_TW_scr_2.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->

![](./img/wp-content-uploads-2021-04-sectdraw_TW_cmd_import.png) The **_Import section_** command works exactly as described in the previous part. See [here ](#Drawing-of-Cold-Formed-Sections)for details.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-04-sectdraw_TW_cmd_dim.png) The **_Place dimension_** command works exactly as described in the previous part. See [here ](#Drawing-of-Cold-Formed-Sections)for details.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**(2) Specify design parameters for strength and global stability tests** ![](./img/wp-content-uploads-2021-04-sectdraw_TW_progbar_2.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

After the geometry has been done, the standard parameters required for the strength and global stability boundaries must be provided. Compared to the previous subchapter, it is not possible to specify a thickness tolerance here, nor is it possible to define a purlin line buckling curve, since these sections cannot be used for a purlin line object.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**(3) Specify design parameters for local buckling tests** ![](./img/wp-content-uploads-2021-04-sectdraw_TW_progbar_3.png)

<!-- /wp:paragraph -->

<!-- wp:columns {"verticalAlignment":"top"} -->

<!-- wp:column {"verticalAlignment":"top","width":"75%"} -->

<!-- wp:paragraph {"align":"justify"} -->

By moving to the third and final phase, the classification of the segments has to be made in the same way as described in the previous section. See details in the previous chapter.

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"25%"} -->

<!-- wp:image {"align":"center","id":12796,"width":152,"height":85,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/sectdraw_TW_panel_plateclass.png)](./img/wp-content-uploads-2021-04-sectdraw_TW_panel_plateclass.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->

You can finish editing with the **_SAVE EXIT_** button.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Reinforced concrete members

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Definition of reinforced macro sections to be used for columns and beams can be performed from the **_Macro dialogue. _**There are two main types of reinforced concrete sections. **_Sections with design option_** (#1) and **_sections without design option_** (#2).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":43920,"width":435,"height":277,"sizeSlug":"large","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-5-1024x652.png)

<!-- /wp:image -->

<!-- wp:image {"align":"center","id":43927,"width":430,"height":276,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-6.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Definition of reinforced macro sections can be performed from the **_Macro dialogue. _**There are two main types of reinforced concrete sections. **_Sections with design option_** (#1) and **_sections without design option_** (#2).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8304,"width":427,"height":267,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Macro-section.png)](./img/wp-content-uploads-2021-04-6-2-Macro-section.png)

<!-- /wp:image -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Reinforced concrete cross sections with design option

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_**Reinforced concrete cross-sections with design option**_, are represented with a gray cross-section pictogram with a grid on the _**Macro section**_ dialogue. In ConSteel, there are two section types with design options:

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"66.66%"} -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Solid Circular section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Solid Rectangular section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Design option is available both for columns and for beams.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

After choosing one of the available cross-sections on the section dialogue, only the overall dimensions, the concrete material grade, and the modulus of elasticity applied in the structural analysis have to be set.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Because the reinforcement distribution may vary along the span of the concrete member, the definition of the reinforcement settings has to be made through a dedicated function:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- **_Column reinforcement_** ![](./img/wp-content-uploads-2021-04-Column_reinforcement_icon.png) or
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:list -->

- <!-- wp:list-item -->
- **_Beam rebar editor _**![](./img/wp-content-uploads-2021-04-BeamRebarEditorIcon.jpg)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

on the Structural members tab. Reinforcements should be assigned to members with concrete cross-section. Assignment can be done in the Property tree after selecting the member.

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"33.33%"} -->

<!-- wp:image {"id":43934,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-12-image-7.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

**_Reinforced concrete cross-sections with design option_**, are represented with a gray cross-section pictogram on the **_Macro section_** dialogue. In ConSteel, there are two section types with design options:

<!-- /wp:paragraph -->

<!-- wp:columns {"verticalAlignment":"top"} -->

<!-- wp:column {"verticalAlignment":"top","width":"70%"} -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Solid circle section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rectangular section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

After choosing one of the available cross-sections on the section dialogue, only the overall dimensions, the concrete material grade, and the modulus of elasticity applied in the structural analysis have to be set.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Because the reinforcement distribution may vary along the span of the concrete member, the definition of the reinforcement settings has to be made through a dedicated **_Rebar editor_** (![](./img/wp-content-uploads-2021-04-cmd_rebareditor.png)) function, which can be found on the **_Structural members tab_**.

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"30%"} -->

<!-- wp:image {"align":"center","id":12842,"width":299,"height":539,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/dial_sect_rc_rect_designopt.png)](./img/wp-content-uploads-2021-04-dial_sect_rc_rect_designopt.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:heading {"level":4} -->

#### Beam reinforcement definition

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Starting the **_Beam rebar editor _**![](./img/wp-content-uploads-2021-04-BeamRebarEditorIcon.jpg), which can be found on the Structural members tab, the Rebar editor dialog appears.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

It can be reached also from the Property tree after selecting a member with reinforced concrete beam macro section with design option, by clicking on the ... in the Reinforcement cell.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":44368,"width":269,"height":332,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-30.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Beam reinforcement can be created only if there is a reinforced concrete beam cross section loaded into the model.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":44361,"width":504,"height":472,"sizeSlug":"large","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-29-1024x958.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->

- \#1 - New beam reinforcement objects can be created by pressing the **_Add_** button. Switching between different reinforcement objects is possible by selecting from the dropdown menu. Using the **_Copy _**button, the copied object will inherit the parameters of the original object. The **_Delete_** button will delete the actively selected reinforcement object only.

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* \#2 – On the middle part of the dialog, the cross-section has to be selected, to which the reinforcement settings will apply. The overall dimensions and the material grade are shown below the dropdown menu of the selected cross-section. You can specify here:

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - concrete covers
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - rebar material grades
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - diameter of stirrups
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - strut inclination
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - max. aggregate size of concrete
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - considering torsional rebars or not. If the check-box is selected, you can also specify a cross-sectional area for this reinforcement.
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- \#3 – The bottom part of the dialog is a multifunctional panel. Here, the longitudinal and transverse rebars can be defined, envelope diagrams for internal bending and shear forces are shown, predesign values like (MRd and VRd) are shown, and detailing rules are checked. Functions of the panel in details:

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - **Graphical display**: after a reinforcement object is assigned to a concrete member by selecting it into the Reinforcement cell of the Property tree, the length of the member, on which the object is applied, is highlighted. If there are available analysis results for the member, the bending moment and shear force diagrams are also shown on the panel, both for individual load combinations and also as envelope diagrams which you can select from the drop-down menu. Switching between the bending and shear diagrams can be performed by selecting longitudinal or transversal reinforcement from the first drop-down menu. MEd and VEd values are also shown.  
    MRd, VRd VRd,c and VRd,max values are also represented on the panel if there are applied longitudinal and shear reinforcements (more on that below). Unfilled detailing rules are also highlighted as warnings at the bottom of the panel.
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Adding longitudinal rebars: If the **_Longitudinal reinforcement_** option is selected in the upper left dropdown menu, using the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_add.png) button it is possible to add rebars to the member. On the **_Add beam rebar_** dialogue the position, quantity, and diameter settings have to be entered. After pressing the **_Add_** button, the graphical representation of the rebars will appear on the graphical display. Deletion of a rebar can be performed by pressing the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_del.png) button and choosing the rebar with the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_erase.png) sign.  
    ![](./img/wp-content-uploads-2021-04-image-1966.png)
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Adding stirrups: If the **_Transverse reinforcement_** option is selected in the upper left dropdown menu, using the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_add.png) button it is possible to add stirrups to the member. On the **_Add beam rebar_** dialogue, the spacing and the start-end position has to be defined. The diameter of the stirrups has to be given on the main rebar editor dialogue. After pressing the **_Add_** button, the graphical representation of the rebars will appear on the graphical display. Deletion of a rebar can be performed by pressing the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_del.png) button and choosing the rebar with the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_erase.png) sign.
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

A reinforcement object can be assigned to more members if the members have the same parameters (length and cross-section).

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

If a reinforcement object is placed on more members with different lengths, a copy of the original reinforcement object will automatically be created for each different member's length.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Starting the **_Rebar editor_** ![](./img/wp-content-uploads-2021-04-cmd_rebareditor.png) - can be found on the Structural members tab - the Rebar editor dialog appears. Beam reinforcement objects can be created by selecting the **_Beam rebars_** option on the left panel (#1) of this dialogue window.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8310,"width":506,"height":383,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Rebar-editor.png)](./img/wp-content-uploads-2021-04-6-2-Rebar-editor.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->

- \#2 - If there are reinforced concrete cross-sections with design option loaded into the model, new beam reinforcement objects can be created by pressing the **_Add_** button. Switching between different reinforcement objects is possible by selecting from the dropdown menu. Using the **_Copy _**button, the copied object will inherit the parameters of the original object. The **_Delete_** button will delete the actively selected reinforcement object only.

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* \#3 – On the middle part of the dialogue, the cross-section has to be selected, to which the reinforcement settings will apply. The overall dimensions and the material grade are shown below the dropdown menu of the selected cross-section. You can specify here:

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - concrete covers
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - rebar material grades
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - diameter of stirrups
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - strut inclination
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - max. aggregate size of concrete
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - considering torsional rebars or not. If the check-box is selected, you can also specify a cross-sectional area for this reinforcement.
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- \#4 – The bottom part of the dialogue is a multifunctional panel. Here, the longitudinal and transverse rebars can be defined, envelope diagrams for internal bending and shear forces are shown, predesign values like (MRd and VRd) are shown, and detailing rules are checked. Functions of the panel in details:

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - **Graphical display**: after a reinforcement object is placed on a concrete member using the **_Place_** button, the length of the member on which the object is applied is highlighted. If there are available analysis results for the member, the bending moment and shear force diagrams are also shown on the panel, both for individual load combinations and also as envelope diagrams which you can select from the drop-down menu. Switching between the bending and shear diagrams can be performed by selecting longitudinal or transversal reinforcement from the first drop-down menu. MEd and VEd values are also shown.  
    MRd, VRd VRd,c and VRd,max values are also represented on the panel if there are applied longitudinal and shear reinforcements (more on that below). Unfilled detailing rules are also highlighted as warnings at the bottom of the panel.
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Adding longitudinal rebars: If the **_Longitudinal reinforcement_** option is selected in the upper left dropdown menu, using the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_add.png) button it is possible to add rebars to the member. On the **_Add beam rebar_** dialogue the position, quantity, and diameter settings have to be entered. After pressing the **_Add_** button, the graphical representation of the rebars will appear on the graphical display. Deletion of a rebar can be performed by pressing the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_del.png) button and choosing the rebar with the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_erase.png) sign.  
    ![](./img/wp-content-uploads-2021-04-image-1966.png)
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Adding stirrups: If the **_Transverse reinforcement_** option is selected in the upper left dropdown menu, using the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_add.png) button it is possible to add stirrups to the member. On the **_Add beam rebar_** dialogue, the spacing and the start-end position has to be defined. The diameter of the stirrups has to be given on the main rebar editor dialogue. After pressing the **_Add_** button, the graphical representation of the rebars will appear on the graphical display. Deletion of a rebar can be performed by pressing the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_del.png) button and choosing the rebar with the ![](./img/wp-content-uploads-2021-04-sect_rc_rebaredit_erase.png) sign.
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

A reinforcement object can be placed on more members if the members have the same parameters (length and cross-section), using the **_Place_** button.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

If a reinforcement object is placed on more members with different lengths, a copy of the original reinforcement object will automatically be created for each different member's length.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Column reinforcement definition

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A Consteel model may contain several column reinforcement definition sets which can be assigned to the relevant members. All the actually defined sets are shown in a summary screen.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":43898,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-12-image-4.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Different tab pages exist for columns with rectangular and circular cross-section. The already defined sets are listed in a table with their relevant information.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The definition of a new set can be initiated with the **_+ Create new_** button. A new set can also be defined starting from an already existing set using the **_+ Create from selected_** button.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A set can be _modified_ by double clicking on the row or using the pencil ![](./img/wp-content-uploads-2021-04-Pencil.png)command and can be _deleted_ with the bin ![](./img/wp-content-uploads-2021-04-Bin.png)command.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":43941,"width":737,"height":537,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-8.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Using the dialog, longitudinal reinforcement bars and stirrups can be positioned in the actual cross-section. The rebars are shown on a dynamically scaled picture of the actual cross-section.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The positioning is made using relative location definitions. The available _longitudinal rebar_ positions are:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- **main corner rebars**. Their use is compulsory and are running from the beginning to the end of the member to which the actual cross-section is assigned to. Rectangular cross-sections have a fixed number of corner rebars (4). The actual diameters can be selected from a drop-down list.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- **additional corner rebars in Y and Z directions**. These rebars will be placed as close as possible to the corner rebars, considering the relevant detailing rules, in the corresponding direction. The Y and Z directions of the coordinate system used for the definition correspond to the member’s local coordinate system used in the 3D Consteel model. These rebars are not compulsory and can be defined as partial reinforcement bars using the _Distance from start_ and _Custom_ length values. Consteel assumes that this definition contains the necessary anchorage lengths, no additional automatic length corrections are made.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- **side rebars in Y and Z directions.** Additional full length bars can be equally distributed between the rebars located around the corners.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

The definition of the stirrup is made by the definition of its diameter and the distance between each stirrup, placed equidistantly along the member.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In case of Reinforcement sets of circular cross-sections only one type of longitudinal rebar position exists. The specified number of bars will be distributed equally inside the circular stirrup.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":43948,"width":411,"height":678,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-9.png)

<!-- /wp:image -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

By choosing the **_Column rebar_** option (#1) on the left side panel of the **_Rebar editor_** dialogue, column-related data will be available on the dialogue.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8533,"width":455,"height":341,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Rebar-editor-column-rebars.png)](./img/wp-content-uploads-2021-04-6-2-Rebar-editor-column-rebars.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->

- **#2** – If there are loaded cross-sections with a design option in the model, a new reinforcement object can be created using the **_Add_** button. A default reinforcement object is created automatically, but any number of objects can be created. Switching between them is possible using the upper dropdown menu, **_Deletion_** and **_Copy_** can be performed using the dedicated buttons.

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* **#3** – In the dropdown menu, the available reinforced concrete cross-sections with a design option are listed. Overall dimensions and material grade are shown below the chosen cross-section, while the graphical representation of the section is shown in the middle panel (#5).

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- \#4 – On the left side of the dialogue, parameters of the main reinforcement (diameter, material grade), concrete cover, parameters of the stirrups (diameter, spacing), and the maximum aggregate size of the concrete can be specified.

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* \#5 – In the middle part of the dialogue, the cross-section selected at the right panel (#3) is shown, with the dynamic representation of the specified reinforcement. On this panel, additional reinforcements can be added both for the y and z sides, by checking the checkboxes at the bottom part and defining the parameters of diameter, quantity and spacing.

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- \#6 – In order to be able to run the design process (discussed in detail in chapter**_ [Reinforce concrete design](/manual/standard-design/reinforced-concrete-design/)_**) for the column, additional design parameters have to be set. By clicking the (![](./img/wp-content-uploads-2021-04-3dots-button.png)) button, the **_Design parameters_** window will be opened, where all of the necessary parameters are listed and can be set individually. Design parameters are separate objects, which means that more sets of parameters can be created, saved, and used for the reinforcement objects. The required parameters are

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - Buckling parameters,
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Parameters of curvature calculation, and
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - Shear check parameters.
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":8544,"width":506,"height":421,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Design-parameters.png)](./img/wp-content-uploads-2021-04-6-2-Design-parameters.png)

<!-- /wp:image -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Reinforced concrete cross sections without design option

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Members created with _**Reinforced concrete cross-sections without design option**_ can provide analysis results (see chapter [**_Analysis results_**](https://consteelsoftware.com/manual/structural-analysis/analysis-results/)) and section resistance surface diagram (see [**_Resistance of composite and reinforced concrete cross-sections_**](https://consteelsoftware.com/manual/section-module/10-4-section-tools/#resistance-surface-diagram)) considering the stiffness corresponding to the applied reinforcement in the calculation. However, these members are not suitable for concrete column and beam design verifications.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available column cross-sections are:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Rectangular section with hole
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Circular section with hole
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Available beam cross-sections are:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Double symmetric I section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Singly symmetric I section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I section with tapered flange thickness
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rectangular section with hole
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rectangular section with tab
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- T shaped section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- T shaped section with tapered flange thickness
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Trapezoid section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Reverse T shaped section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"align":"left","id":6758,"width":122,"height":130,"sizeSlug":"large","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![warning](./img/wp-content-uploads-2021-04-warning_croc.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Models created with earlier version of Consteel may use solid rectangular and circular sections without design option. The creation of such sections is not anymore available, but models containing such section will continue to work normally even in newer versions of Consteel.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The functions of these deprecated sections have been completely replaced by new functionalities starting with Consteel 16.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Members created with **_Reinforced concrete cross-sections without design option_** can provide analysis results (see chapter **_[Analysis results](/manual/structural-analysis/analysis-results/)_**) and section resistance surface diagram (see _**[Resistance of composite and reinforced concrete cross-sections](/manual/section-module/10-4-section-tools/#resistance-surface-diagram)**_) considering the stiffness corresponding to the applied reinforcement in the calculation. However, these members are not suitable for concrete design and rebar check.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available cross-sections are:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Solid circle section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Ring shaped section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Double symmetric I section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Singly symmetric I section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- I section with tapered flange thickness
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rectangular section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rectangular section with hole
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Rectangular section with tab
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- T shaped section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- T shaped section with tapered flange thickness
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Trapezoid section
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Reverse T shaped section
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

When defining the sections, overall dimensions, concrete material grade, reinforcement parameters, and the applied stiffness during the analysis have to be set.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8604,"width":455,"height":533,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Singly-symmetric-I-section-1.png)](./img/wp-content-uploads-2021-04-6-2-Singly-symmetric-I-section-1.png)

<!-- /wp:image -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Composite columns

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

The first step is to define a composite column cross-section. Five types of cross-sections are available: fully encased I-section in concrete partially encased I-section in concrete, encased Maltese cross-section in concrete, fully encased I-section in hollow section, and fully encased I-section in circular hollow section. The cross-section macros can be found among the **_Macro sections_**.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8614,"width":425,"height":268,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Macro-section-Columns.png)](./img/wp-content-uploads-2021-04-6-2-Macro-section-Columns.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

During the creation of the cross-section, the parameters of the concrete section, reinforcement, and the encased steel section have to be set.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8620,"width":466,"height":410,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Partially-encased-I-section-in-concrete.png)](./img/wp-content-uploads-2021-04-6-2-Partially-encased-I-section-in-concrete.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

For the structural analysis, two types of elastic modulus can be used which can be selected on the middle part of the cross-section creation dialog.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Standard initial sways can also be defined both in y and z directions. With the use of initial sway, for columns with composite cross-section, the cross-section check is sufficient according to the Eurocode, and a stability check is not necessary.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Composite beams

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

The first step is to define a composite beam cross-section. There are two types available: composite beam with solid concrete slab and composite beam with profiled steel sheeting. The cross-section macros can be found among the **_Macro sections_**.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8628,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Macro-section-Composite-beams.png)](./img/wp-content-uploads-2021-04-6-2-Macro-section-Composite-beams.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

When creating a new composite cross-section the effective width must be defined. It is important to know that during the analysis the actual effective width is automatically calculated based on the design parameters. The effective width set by the user is used in the graphic representation and for determining the self-weight of the beam. It is also possible to create an edge composite beam with different widths on the left and the right sides. Rebars can be easily defined either with pitch or with a cross-sectional area (mm2/m).

<!-- /wp:paragraph -->

<!-- wp:image {"id":8634,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Composite-beam-with-constant-slab-thickness.png)](./img/wp-content-uploads-2021-04-6-2-Composite-beam-with-constant-slab-thickness.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

After the composite cross-section is defined it can be used for member creation the same way as a steel cross-section.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Before running the analysis select the composite beam(s) and set the **_Design parameters_** on the **_Object properties_**.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8641,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Object-properties.png)](./img/wp-content-uploads-2021-04-6-2-Object-properties.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

In the Design settings window you can set the distance between parallel beams, the number of shear studs, the type of analysis, moment redistribution, and the support point positions along with the member. The support position table can be automatically filled up by clicking on the button above the table.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

You can create more design parameters and assign them to different members. You can also use more design parameters to easily switch between them to find the best parameters or to simply compare different settings.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8648,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Design-settings.png)](./img/wp-content-uploads-2021-04-6-2-Design-settings.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Haunched members

<!-- /wp:heading -->

<!-- wp:paragraph -->

The created members can be strengthened, if necessary, by using the **_Haunch_** function (![](./img/wp-content-uploads-2021-04-cmd_haunch.png)).

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The haunch can only be used for I-shaped sections (IPE, HEA, welded I), and the shape of the haunch is considered as half of a welded or hot-rolled I section (with one flange) with decreasing web height.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

In the case of welded haunch, on the dialogue panel the length (L), start height (hs), end height (he) web thickness (tw), flange width (b), flange thickness (tf), and the characteristics of the haunch should be set.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

In the case of hot-rolled haunch, on the dialogue panel the Length (L), start height (hs), end height (he), the section (roll radius), and the characteristics of the haunch should be set. With a click on the (![](./img/wp-content-uploads-2021-04-3dots-button.png)) button, sections can be loaded from the section administrator.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

With the black arrow button (![](./img/wp-content-uploads-2021-04-ico-pointer.png)) the geometrical parameters of the haunches can be loaded from the selected beam.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8656,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Haunch-on-bar.png)](./img/wp-content-uploads-2021-04-6-2-Haunch-on-bar.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

The position of the haunch is set by simply clicking on the member the start point (where the height of the haunch is full) and the direction point of the haunch on the member. It should be noted that if the start point is a common endpoint of more members (this is the usual case, for instance at a beam-to-column connection point) then this point should be approached and clicked on the member to be haunched. The characteristics of the haunch denote the appropriate side of the haunch on the member according to the direction of its local “z” axis. In the case of usual beam position it results in the followings:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- lower
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"id":8662,"width":342,"height":257,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Lower.png)](./img/wp-content-uploads-2021-04-6-2-Lower.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- upper
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"id":8668,"width":347,"height":257,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Upper.png)](./img/wp-content-uploads-2021-04-6-2-Upper.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- symmetric
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"id":8675,"width":347,"height":257,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2021-04-6-2-Symmetric.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The haunches can be selected and modified in the parameter table as separate objects.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8681,"width":358,"height":205,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Haunch.png)](./img/wp-content-uploads-2021-04-6-2-Haunch.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Important to know** that for the haunched part of the member new sections are created during the automatic finite element generation which consists of the original section and the haunch with appropriate web height. These new sections are placed eccentrically on the reference line of the member (except the symmetrical haunch type).

<!-- /wp:paragraph -->

<!-- wp:image {"id":8688,"width":344,"height":274,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Haunch-new-section.png)](./img/wp-content-uploads-2021-04-6-2-Haunch-new-section.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

This eccentricity causes additional effects in the analysis results due to the eccentric position of the sectional forces (for instance at the beam-to-column connection point of a frame with haunched beams and/or columns the equilibrium of the in-plane bending moments exists only if the additional moments from the eccentric axial forces are taken into account)

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Tapered members

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

Tapered members are often used in the economic design of steel-framed structures, so the fast and simple modeling of tapered members is of high importance. For the definition of a tapered member, a line member with welded I or H, box, or cold-formed C section should be created in the model.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Hot rolled and other shapes of macro section can’t be tapered.**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With the **_Tapered member_** function (![](./img/wp-content-uploads-2021-04-cmd_tapered.png)) the section height of these sections can be set to linearly varying along the member length.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8696,"width":300,"height":292,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Tapered-member.png)](./img/wp-content-uploads-2021-04-6-2-Tapered-member.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

First, the user has to specify the parameters and beam eccentricity options for the member to be tapered on the **_Tapered member_** dialogue.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Specification of the start (H1) and end section height (H2) is not totally independent from the original section height of the cross-section. It is adviseable to define the original section with approximately the smaller height of the tapered member. If either H1 or H2 is smaller than 0.5 times the original height, the software will automatically overwrite the height to be the half of the orginal section height.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The start value for section height is applied at the start point of the member, the end value is applied at the other end. To change the H1 and H2 values click the ![](./img/wp-content-uploads-2021-04-tapered_cmd_change.png) icon. The values will be changed, and selecting again the member for tapering, the sizes of the tapering will change adequately.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The rules for the beam eccentricity of the tapered member relate to the axis of the originally positioned member to be tapered.

<!-- /wp:paragraph -->

<!-- wp:image {"id":8702,"width":371,"height":83,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-Set-beam-eccentricity.png)](./img/wp-content-uploads-2021-04-6-2-Set-beam-eccentricity.png)

<!-- /wp:image -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. <!-- wp:list-item -->
2. \_Place the centroid of the smaller section to the axis of the beam: \_the centre of smaller H value of the tapered member will be positioned to the axis of the original beam
3. <!-- /wp:list-item -->
4.
5. <!-- wp:list-item -->
6. _Place the centroid of the bigger section to the axis of the beam:_ the centre of bigger H value of the tapered member will be positioned to the axis of the original beam
7. <!-- /wp:list-item -->
8.
9. <!-- wp:list-item -->
10. _Place the centroid of the original section to the axis of the beam:_ the edge of the tapered member is coincident with the original member end and the tapering will start from this position.
11. <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

The relative position of the tapering can be –z (the left side of the tapered member will be parallel to the axis of the originally placed member), symmetric or +z (the right side of the tapered member will be parallel to the axis of the originally placed member). These definitions regulate the directions of the offset of the given height values along the local “z” axis of the tapered beam.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Below shown the effect of the different relative positioning by the chosen eccentricity:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. <!-- wp:list-item -->
2. _Place the centroid of the smaller section to the axis of the beam:_ the centre of smaller H value of the tapered member will be positioned to the axis of the original beam
3. <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"top","width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**-z**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**symmetric**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**+z**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8716,"width":120,"height":248,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-1-z-1.png)](./img/wp-content-uploads-2021-04-6-2-1-z-1.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8724,"width":103,"height":225,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2021-04-6-2-1symmetric.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8730,"width":118,"height":248,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-1z.png)](./img/wp-content-uploads-2021-04-6-2-1z.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

2\. _Place the centroid of the bigger section to the axis of the beam:_ the center of the bigger H value of the tapered member will be positioned to the axis of the original beam

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"top","width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**-z**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**symmetric**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**+z**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8736,"width":147,"height":310,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-2-z.png)](./img/wp-content-uploads-2021-04-6-2-2-z.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8742,"width":143,"height":304,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-2symmetric.png)](./img/wp-content-uploads-2021-04-6-2-2symmetric.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8748,"width":156,"height":308,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-2z.png)](./img/wp-content-uploads-2021-04-6-2-2z.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->

3\. _Place the centroid of the original section to the axis of the beam:_ The edge of the tapered member is coincident with the original member end the tapering starts from this position

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"top","width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**-z**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**symmetric**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"33%"} -->

<!-- wp:paragraph {"align":"center"} -->

**+z**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8755,"width":194,"height":426,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-3-z.png)](./img/wp-content-uploads-2021-04-6-2-3-z.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8761,"width":189,"height":428,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-3symmetric.png)](./img/wp-content-uploads-2021-04-6-2-3symmetric.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8767,"width":221,"height":434,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-2-3z.png)](./img/wp-content-uploads-2021-04-6-2-3z.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->

Activating the ![](./img/wp-content-uploads-2021-04-cmd_draw_get.png) icon, by clicking an earlier created tapered member in the model, the values, the eccentricity, and the relative positioning will be read out of that clicked, and appear in the dialog box. By clicking another member for taper, these parameters will be applied.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In the case of selecting a tapered member, not only the member but the tapering will be selected automatically and can be modified in the parameter table as a separate object.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

**Important to know** that for the tapered members, new sections are created during the automatic finite element generation with appropriate section heights. These new sections are placed eccentrically on the reference line of the member (except the symmetrical tapering). This eccentricity causes additional effects in the analysis results due to the eccentric position of the sectional forces (for instance at the beam-to-column connection point of a frame with tapered beams and/or columns the equilibrium of the in-plane bending moments exists only if the additional moments from the eccentric axial forces are taken into account)

<!-- /wp:paragraph -->
