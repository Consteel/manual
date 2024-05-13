---
sidebar_position: 2
---
# Reinforced concrete design

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Design of concrete members are available at the Global checks tab. By clicking on the ![](./img/wp-content-uploads-2021-04-DesignSettingsIcon.jpg) button, the Design… dialog will appear, where below the _Steel_ and _Composite design_, the Concrete design EN 1992-1-1 panel can be found. On the panel, Beam, Column design and slab reinforcement calculations are available. If the necessary input parameters for these calculations are available _(cross sections, reinforcement data, design parameters and analysis results)_, the checkboxes for the different design options are active, and choosing the desired item. Calculation can be initiated to obtain utilizations.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":44239,"width":441,"height":424,"sizeSlug":"full","linkDestination":"none","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![](./img/wp-content-uploads-2022-12-image-14.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Required input parameters for reinforced concrete design are the following (see Chapter Concrete Reinforced members for details):


1. In case of reinforced concrete beam

   - Reinforced concrete cross sections with [design option](../5_0_structural-modeling/5_2_line-members.md)

   - Beam reinforcement object assigned to the concrete member 

   - First or second order analysis [result](../8_0_structural-analysis/8_5_analysis-results.md) 

3. In case of reinforced concrete columns

   - Reinforced concrete cross sections with design option 

   - Column reinforcements set assigned to the concrete member

   - Design parameter to control design settings assigned to the concrete member

   - Appropriate global imperfections if required

   - First or second order analysis results


4. In case of reinforced concrete slabs

    - Defined reinforcement schemes in the [main directions](../5_0_structural-modeling/5_3_surface-members.md) 
  
    - First or second order shell [results](../8_0_structural-analysis/8_5_analysis-results.md)


During the design, Consteel will perform the available standard checks according to EN1992-1-1 for all of the cross sections automatically. Cross sections with their dominant utilizations will be collected into the results grid, and will be shown using the color-coded visualization in the modeling area.


[![](./img/wp-content-uploads-2021-04-10-4-rc-design-res.jpg)](./img/wp-content-uploads-2021-04-10-4-rc-design-res.jpg)


[](https://Consteelsoftware.com/wp-content/uploads/2021/04/10-4-rc-design-res.jpg)


Results of the individual standard checks can also be obtained using the dropdown menu in the upper left corner of the design tab.


**Consteel 15**


Design of concrete members are available at the Global checks tab. By clicking on the ![](./img/wp-content-uploads-2021-04-Glob-Design-Start-button.png) button, the Design… dialog will appear, where below the _Steel_ and _Composite design_, the Concrete design EN 1992-1-1 panel can be found. On the panel, Beam reinforcement, Column reinforcement and slab reinforcement calculations are available. If the necessary input parameters for these calculations are available _(cross sections, reinforcement data, design parameters and analysis results)_, the checkboxes are active, and choosing the desired item, Calculation can be initiated to obtain utilizations.


[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/10-4-design-dial-concr.png)](./img/wp-content-uploads-2021-04-10-4-design-dial-concr.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Required input parameters for concrete design are the following (see Chapter Reinforced concrete members for details):


- In case of concrete beams and columns

  - Reinforced concrete cross sections with design option 

  - Beam/column reinforcement object assigned to the concrete member 

  - First or second order analysis results 


* In case of reinforced concrete slabs

  - Defined reinforcement schemes in the main directions 

  - First or second order shell results 


During the design, Consteel will perform the available standard checks according to EN1992-1-1 for all of the cross sections automatically. Cross sections with their dominant utilizations will be collected into the results grid, and will be shown using the color-coded visualization in the modeling area.


[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/10-4-rc-design-res.jpg)](https://Consteelsoftware.com/wp-content/uploads/2021/04/10-4-rc-design-res.jpg)


Results of the individual standard checks can also be obtained using the dropdown menu in the upper left corner of the design tab.

### Reinforced concrete beam design


In case of concrete beam design, the following checks of EN1992-1-1 will be performed:


- Longitudinal reinforcement

  - EN1992-1-1 9.2.1.1 (1) (9.1.n) formula - Minimum longitudinal reinforcement

  - EN1992-1-1 9.2.1.1 (3) formula - Maximum longitudinal reinforcement

  - EN1992-1-1 6.1 – Major axis bending


* Shear reinforcement

  - EN1992-1-1 9.2.2. (6) (9.6.N) formula – Maximim stirrup distance

  - EN1992-1-1 9.2.2 (5) (9.5.n) formula – Minimum percentage of reinforcement

  - EN1992-1-1 6.2.2. (1) (6.2.a) and (6.2.b) formula – Shear resistance without shear reinforcement

  - EN1992-1-1 6.2.3. (3) (6.8) and (6.9) formula – Shear resistance with shear reinforcement


- Interaction of shear and torsion

  - EN1992-1-1 6.3.2. (4) (6.29) formula – Resistance of inclined compression concrete bars

  - EN1992-1-1 6.3.2. (5) (6.31) formula – Required longitudinal torsion reinforcement

  - EN 1992-1-1 6.3.2. (3) (6.28) formula – Applied longitudinal torsion reinforcement


### Reinforced concrete column design


**Consteel 16**


![](./img/wp-content-uploads-2022-12-image-16.png)


Consteel supports different design methods defined by EN 1992-1-1, including


- Method based on nominal stiffness (EN 1992-1-1 5.8.7)


* Method based on nominal curvature (EN 1992-1-1 5.8.8)

  - design with manually controlled parameters

  - design with automatically set parameters


The type of method and additionally required or optional parameters can be specified as a property of a member assigned with a reinforced concrete column type cross-section.


:::warning


For the use of method based on nominal stiffness and for the automatic option of the method based on nominal curvature the definition of appropriate global imperfections might be required. (see Global imperfections)
:::

#### **Design parameters for reinforced concrete columns**


A Consteel model may contain several column design parameter sets, which can be assigned to concrete column members. All the actually defined sets are shown in a Summary screen. **_Parameter sets for concrete column design_** dialog can be opened by clicking on the ... in the _Design parameters_ row in the property tree of a bar member with reinforced concrete column cross section.


![](./img/wp-content-uploads-2022-12-image-27.png)


The definition of a new design parameter set can be initiated with the **_+ Create new_** button. A new set can also be defined starting from an already existing set using the **_+ Create from selected_** button.


First the applied design method is set


![](./img/wp-content-uploads-2022-12-image-18.png)


Depending on this selection, the dialog will ask for additional information


**Method based on nominal curvature**


![](./img/wp-content-uploads-2022-12-image-19.png)


The automatic option is based on additional analysis results, such as Buckling analysis and Buckling sensitivity analysis.


The selection of custom value is recommended when the designer wants to manually control important design input parameters such as buckling lengths


![](./img/wp-content-uploads-2022-12-image-20.png)


or directly modify the parameters responsible to calculate the considered maximum curvature value:


![](./img/wp-content-uploads-2022-12-image-21.png)


The automatic option does not require such definitions.


In addition, optional stiffness reduction values can be specified


![](./img/wp-content-uploads-2022-12-image-22.png)


**Method based on nominal stiffness**


Using this method, it is compulsory to define the applicable stiffness values, not only to column, but also to connected beam elements. There are 2 options available.


Through the definition of _Ks_ and _Kc_ factors (see EN 1992-1-1 5.8.7.2)


![](./img/wp-content-uploads-2022-12-image-23.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

or through the definition of direct stiffness reduction factors to be applied to _EIy_ and _EIz_ bending stiffness quantities of the member.


![](./img/wp-content-uploads-2023-07-Direct_Stiffness_Modification_NominalStiffnessMethod.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The values to be introduced shall be defined by the user. In case of using direct stiffness modification factors, the introduced values will be automatically reduced to contain the effect of creep.


#### **Design parameters for reinforced concrete beams**

<!-- /wp:heading -->

<!-- wp:paragraph -->

Similarly to column design parameters, several concrete beam parameter sets can be present in a Consteel model and they can be assigned to concrete beam members at the Property tree. All the actually defined sets are shown in a Summary screen. **_Parameter sets for concrete beams_** dialog can be opened by clicking on the ... in the _Design parameters_ row in the property tree of a bar member with reinforced concrete beam cross section.


![](./img/wp-content-uploads-2022-12-image-28-1024x375.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The definition of a new design parameter set can be initiated with the **_+ Create new_** button. A new set can also be defined starting from an already existing set using the **_+ Create from selected_** button.

:::info

When the method based on nominal stiffness is used for the design of reinforced concrete columns, an appropriate stiffness reduction must be assigned also to every reinforced concrete beam contributing to the stiffness of the structure.
:::

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The dialog is similar to that of the columns', but contains only the part related to the definition of the stiffness reduction parameters.


![](./img/wp-content-uploads-2022-12-image-25-928x1024.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

No design parameter is required to be assigned to beams when columns are designed with the method based on nominal curvature.


:::warning

Although for each member a design parameter specifying different design methods can be assigned, mixing of these design methods must be done carefully. The method based on nominal stiffness assumes that every member contributing to the stiffness of the structure has been assigned with adequate stiffness reduction values.

:::

In case of concrete column design, the following checks of EN1992-1-1 will be performed:


- Longitudinal reinforcement

  - EN1992-1-1 9.5.2 (1) formula – Minimum diameter of longitudinal reinforcement
 
  - EN1992-1-1 9.5.2 (2) formula – Minimum longitudinal reinforcement

  - EN1992-1-1 9.5.2 (3) formula – Maximum longitudinal reinforcement

  - EN1992-1-1 5.8.3 and 5.8.8 – Biaxial bending


* Shear reinforcement

  - EN1992-1-1 9.5.3 (1) formula – Minimum diameter of stirrup

  - EN1992-1-1 9.5.3 (2) formula - Maximum distance of stirrups

  - EN1992-1-1 6.2.2 (1) (6.2.a) and (6.2.b) formula – Shear resistance without shear reinforcement

  - EN1992-1-1 6.2.3 (3) (6.8) and (6.9) formula – Shear resistance with shear reinforcement


**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In case of concrete column design, the following checks of EN1992-1-1 will be performed:


- Longitudinal reinforcement

  - EN1992-1-1 9.5.2 (1) formula – Minimum diameter of longitudinal reinforcement

  - EN1992-1-1 9.5.2 (2) formula – Minimum longitudinal reinforcement

  - EN1992-1-1 9.5.2 (3) formula – Maximum longitudinal reinforcement
 
  - EN1992-1-1 5.8.3 and 5.8.8 – Biaxial bending


* Shear reinforcement


  - EN1992-1-1 9.5.3 (1) formula – Minimum diameter of stirrup
 
  - EN1992-1-1 9.5.3 (2) formula - Maximum distance of stirrups

  - EN1992-1-1 6.2.2 (1) (6.2.a) and (6.2.b) formula – Shear resistance without shear reinforcement
 
  - EN1992-1-1 6.2.3 (3) (6.8) and (6.9) formula – Shear resistance with shear reinforcement


### Reinforced concrete slab design


If there is a concrete slab placed in the model, with applied reinforcement in the main directions (see chapter 5.3), the slab reinforcement calculation option will be available in the Design… dialogue.


Result of the calculation is the required area of reinforcement \[mm2/m] in each of the main directions, both in upper and lower positions. Change between the visualization of the directions is possible with the dropdown menu in the upper left corner. Results are represented with contour surface visualization:


[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/10-4-rc-slab-reinf.png)](./img/wp-content-uploads-2021-04-10-4-rc-slab-reinf.png)


By clicking ont he colour palette with the right mouse button, properties (such as scale division, values of divisions) can be modified:


[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/10-4-rc-design-palette.png)](./img/wp-content-uploads-2021-04-10-4-rc-design-palette.png)


The result of the calculation, the contour surface with the colour palette itself can be exported into dxf form from File/Export menu (see Chapter 2.6).