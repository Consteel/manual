---
sidebar_position: 1
---
# Steel design

Steel design related functions can be found on the Global checks and the Member checks tabs.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Global checks

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Basics

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":72908,"width":"877px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-STEEL-Global-checks-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Starting from Consteel 17, the Serviceability Limit State Checks ![](./img/wp-content-uploads-2024-02-9.1.-SLS-Check-icon.png) are also included in the Global Check tab beside the Ultimate Limit State checks ![](./img/wp-content-uploads-2024-02-9.1.-ULS-Check-icon.png).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The global checks run button ![](./img/wp-content-uploads-2024-02-9.1.-global-checks-run-icon.png) initiates all the checks with the previously applied settings. This button is meant to be used when we don’t change the settings for the analysis and the load combinations, just in case of repeating calculations, for example when we change the section for an element.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":46154,"width":"861px","height":"auto","sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-03-image-1024x59.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Cross-section and global buckling checks (according to the Section 6.3.4 (General method) of EN 1993-1-1) which are independent of any specific member parameter can be fully automatically evaluated on the global checks tab.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Design settings are available by clicking on the ![](./img/wp-content-uploads-2021-04-DesignSettingsIcon-1.jpg) icon (or F7).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

When selecting the ![](./img/wp-content-uploads-2021-04-Design_Icon.jpg) icon (or F8), the global checks will run with the previously saved settings.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

As basic settings the analysis result type (first or second order) should be selected and the load combinations which should be evaluated.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10523,"width":698,"height":50,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-Glob-design-tab.png)](./img/wp-content-uploads-2021-04-10-2-Glob-design-tab.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Cross-section and global buckling checks (according to the Section 6.3.4 (General method) of EN 1993-1-1) which are independent of any specific member parameter can be fully automatically evaluated on the global checks tab.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

As basic settings the analysis result type (first or second order) should be selected and the load combinations which should be evaluated.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Cross section check

<!-- /wp:heading -->

<!-- wp:image {"align":"center","id":10529,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-section-check.png)](./img/wp-content-uploads-2021-04-10-2-section-check.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Cross-section check can be done according to the EN 1993-1-1 6.2 or EN 1993-1-2 4.2 (if the combination contains fire effect).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Check can be performed for the whole model or partial model.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Used safety factor can be selected. If it is necessary γM1 can be used instead of γM0 by clicking on the checkbox.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If the model also includes cold-formed sections, their cross-sectional dimensioning according to EN 1993-1-3 can be performed only, if the check box on the Set Design parameters window is checked.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10535,"width":685,"height":54,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-1993-1-3.png)](./img/wp-content-uploads-2021-04-10-2-1993-1-3.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Stable length check

<!-- /wp:heading -->

<!-- wp:paragraph -->

According to the Eurocode (1993-1-1 BB3), stable length check can be defined using the results of a plastic hinge analysis. During the calculation, the distance between the plastic hinge and the nearest lateral (Lub) or torsional restraint (Lm, Ls) is being compared with the calculated stable length of the corresponding plastic segment. If the stable length of a plastic segment is bigger than the distance between the plastic hinge and the lateral/torsional restraint, lateral torsional buckling of the member can be neglected.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

During the stable length check, the following checks are performed by ConSteel:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"className":"is-style-default"} -->

1. <!-- wp:list-item -->

2. Automatic recognition of the plastic hinges on the structure

3. <!-- /wp:list-item -->

4.

5) <!-- wp:list-item -->

6) Searching for the nearest supports of each plastic hinges

   <!-- wp:list -->

   - <!-- wp:list-item -->
   - Lateral restraint
   - <!-- /wp:list-item -->
   -
   - <!-- wp:list-item -->
   - Torsional restraint
   - <!-- /wp:list-item -->

   <!-- /wp:list -->

7) <!-- /wp:list-item -->

8)

9. <!-- wp:list-item -->

10. Defining the distance between the plastic hinge and the nearest supports

11. <!-- /wp:list-item -->

12.

13) <!-- wp:list-item -->

14) Calculating the stable length (depending on the type of the support) for the plastic segments, between the plastic hinge and the nearest supports

15) <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

On the elastic segments global stability resistance will be evaluated according to the General method of Eurocode.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Buckling check

<!-- /wp:heading -->

<!-- wp:paragraph -->

Buckling check can be evaluated for steel structures according to the EN 1993-1-1 6.3.4.

<!-- /wp:paragraph -->

<!-- wp:image {"id":10541,"width":"109px","height":"50px","sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-buckling-formula.png)](./img/wp-content-uploads-2021-04-10-2-buckling-formula.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

To run the buckling check, it is required to have buckling analysis results.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10547,"width":462,"height":214,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-buckling-check.png)](./img/wp-content-uploads-2021-04-10-2-buckling-check.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

For the buckling check the following parameters can be set:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Elastic critical load factor acr,op: eigenvalue of the buckling analysis. It can be the first or the selected eigenvalue according to the design situation or can be automatically selected for each members based on the results of the sensitivity analysis.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Eigenvalue can be selected on the Analysis tab to click in the model area with right click.

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Ultimate resistance factor ault,k: reciprocal of utilization calculated with characteristic resistances of axial force and strong axial bending dominant in terms of loss of stability. Value of the utilization can be considered by members or by the model portion.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"id":10553,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-lambda-op.png)](./img/wp-content-uploads-2021-04-10-2-lambda-op.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Reduction factor cop: reduction factor for the lop slenderness. It can be determined from the minimum of (c,cLT) or from the interpolated value of (c,cLT).
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Check can be performed for the whole model or partial model.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Results

<!-- /wp:heading -->

<!-- wp:paragraph -->

The results of the performed checks are demonstrated with graphical visualization and result tables (for the general functionality of tables used in _ConSteel_ see section 1.4 General functions for tables).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The shown results can be changed in the drop down menu.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Consteel 17

<!-- /wp:paragraph -->

<!-- wp:image {"id":72928,"width":"199px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Design-results-and-predesign-parameters-2.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

In the first dropdown menu, users can choose between Design results and Predesign parameters.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Design results**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Under the dominant calculations, there are two subcategories: Ultimate Limit State (ULS) and Serviceability Limit State (SLS) design.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The ULS results are further subcategorized based on the materials and calculations used.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

For the steel materials, not only the dominant results but also results from every load combination are saved and can be visualized with the help of the last dropdown menu:

<!-- /wp:paragraph -->

<!-- wp:image {"id":72938,"width":"182px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Design-results-steel-combinations-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The SLS checks are only listed by the selected check criteria. Each criterion has results for all the combinations, as well as dominant calculation.

<!-- /wp:paragraph -->

<!-- wp:image {"id":72948,"width":"678px","height":"auto","sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Design-results-1-1024x502.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The Predesign Parameters can be seen according to the 4 categories: Sensitivity, Fire, Secon- order concrete column internal forces and Slab reinforcement area.

<!-- /wp:paragraph -->

<!-- wp:image {"id":72958,"width":"434px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Predesign-parameters-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

For parameters that are combination-related, such as sensitivity and second-order concrete column internal forces, the third dropdown menu is also available to choose the load combination to be investigated.

<!-- /wp:paragraph -->

<!-- wp:image {"id":72968,"width":"203px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-parameters-combinations-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

At the bottom part of the window, a table with the results will appear. It will display the relevant information according to the selected calculation criteria above.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

For the Ultimate Limit State (ULS) calculations, information is displayed regarding the Bar, Element, Node, Load combination, Limit State, Examination, and Utilization. However, for the Serviceability Limit State (SLS) checks, the Bar and the Element are irrelevant.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

By clicking on any cell in the table, a blue arrow will appear pointing to the element with the selected properties.

<!-- /wp:paragraph -->

<!-- wp:image {"id":73656,"width":"733px","height":"auto","sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1-Results-table-1-1024x630.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Users can calculate the section or select the whole member by right-clicking on a cell.

<!-- /wp:paragraph -->

<!-- wp:image {"id":73676,"width":"737px","height":"auto","sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Design-results-selection-1-1024x157.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The **‘Calculate section’** brings automatically to the Section module.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

It is possible to select all the chosen members by selecting multiple cells, even if they are not in the same column.

<!-- /wp:paragraph -->

<!-- wp:image {"id":73686,"width":"736px","height":"auto","sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Design-results-select-memeber-2-1024x101.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

For more detailed information about the selection process, please visit the **[Selection](https://www.consteelsoftware.com/manual/model-view/selection/)** page.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With a right-click on a load combination, an additional option appears: "Select only these load combinations for the Analysis" allowing users to repeat the analysis only with those combinations that require further investigation.

<!-- /wp:paragraph -->

<!-- wp:image {"id":73696,"width":"504px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Load-combination-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

For some of the predesign parameters also exist result table:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Sensitivity
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"id":73706,"width":"327px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Sensitivity-1.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Fire
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:image {"id":73716,"width":"457px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-02-9.1.-Fire-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The right-click function on the cells operates similarly to the design results table.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Consteel 16

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10559,"width":444,"height":536,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-buckl-result-pic.png)](./img/wp-content-uploads-2021-04-10-2-buckl-result-pic.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

When moving the mouse along the structural elements the result markers continuously appear showing the actual utilization.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The detail of the results can be seen in the Section module (see section 10 Section module). Section module can be opened directly from the Global checks tab to click on the proper cross section on the model area or in the result table with right click.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Member checks

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Basics

<!-- /wp:heading -->

<!-- wp:image {"align":"center","id":10565,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-member-check-tab.png)](./img/wp-content-uploads-2021-04-10-2-2-member-check-tab.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

All steel member design related functions can be found on the Member design tab.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The following parts of the Eurocode 3 (EN 1993-1-1) can be evaluated:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

6.3.1 Uniform members in compression

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

6.3.2 Uniform members in bending

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

6.3.3 Uniform members in bending and axial compression

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Individual Member Design

<!-- /wp:heading -->

<!-- wp:paragraph -->

To run steel member design go to Member checks tab and select Steel tab in the table at the bottom of the screen. First the members have to be selected and then added to the list. It can be performed by clicking on the Add button. After that one member has to be chosen and Select button is clicked.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10571,"width":700,"height":94,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-member-select.png)](./img/wp-content-uploads-2021-04-10-2-2-member-select.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

If a member is selected, the corresponding row highlighted with green and analysis results are automatically loaded. Member design can be run if there is analysis result (first and second order) and cross check for the member. Same like in the analysis the type of the result view can be set by three drop down menus.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10577,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-3519.png)](./img/wp-content-uploads-2021-04-image-3519.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Special analysis can be run by clicking on the second icon (#1). Only one load combination can be selected at the same time. Buckling and lateral torsional buckling analysis is performed just for the selected member. If the normal force is negligible then no buckling analysis can be run. On the basis of these special analysis, _ConSteel_ can determine the factors (effective length factors, warping factor etc.) for the buckling and the lateral-torsion buckling design.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10583,"width":487,"height":299,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-check-comb.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-check-comb.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The next step is to choose the load combination and design type from the options: pure cases (strong axis buckling, weak axis buckling, lateral-torsional buckling) and interaction stability (interaction of buckling and lateral torsional buckling, interaction of buckling and bending, interaction of lateral-torsional buckling and bending). The dominant load combination is automatically selected and marked with a \* symbol.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10589,"width":350,"height":419,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-check-des-type.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-check-des-type.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Depending on the member not all checks can be performed. If the normal force is negligible then strong or weak axis buckling design cannot be run.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If **strong or weak axis buckling option** is selected then first the design parameters has to be set. The program automatically identifies the supports which could have effect on the buckling check.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10595,"width":605,"height":414,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-check-segments-1.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-check-segments-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Among the supports the member is divided to segments. Segments can also be turned off in order not to calculate them during the analysis. The design parameters can be individually set for each segment by clicking on the three dots icon.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10601,"width":377,"height":275,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-check-segments-2.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-check-segments-2.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The actual segment is highlighted with green. There are two options to set the design parameters: set the effective length factor manually by typing in the appropriate value or by choosing the right critical load multiplier. The second option is possible if the special analysis has already been run. In both cases the elastic critical axial force is automatically calculated.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If all the design parameters has been properly set then design check can be performed by clicking on the Check button. Results will be displayed.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10607,"width":347,"height":511,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-check-results.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-check-results.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

There are three drop down menus in order to view different results. The first one can be used to change member, the second one is to change load combinations and the third one is to change the buckling case. The corresponding case is highlighted with green in the image. A short explanation can be read in the bottom when any of the rows is selected.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Lateral torsional buckling design** is more or less the same as the buckling design in _ConSteel_ usage, there are only small differences. New cases can be defined and unnecessary cases can be deleted. For each segment start and end node can be set.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10613,"width":532,"height":440,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-check-LTB.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-check-LTB.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

By clicking on the three dots button the design parameters can be altered. The elastic critical bending moment can be calculated from the analytic formula or from the critical load multiplier. When the first method is used the factors can be typed in or a special automatic C factor calculator can be used by clicking on the AutoC button. The second option is to choose the corresponding critical load multiplier from the list.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10619,"width":345,"height":352,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-check-AutoC.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-check-AutoC.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Interaction stability** **design** goes through the steps of the pure cases.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

After the check is made the state of the member in the list at the bottom changes to ‘Examined’ from ‘Unexamined’.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Member Group Design

<!-- /wp:heading -->

<!-- wp:paragraph -->

By using the Select (+) button it is possible to select more members for the member design. Select (-) can be used for remove members from the selection. Member group design works nearly the same as individual member design there are just minor differences. No special analysis can be run in member group design therefore the critical load factor cannot be selected.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If the members are selected then the next step is to select the design type and set the design parameters, then click Check button similar to the individual member design.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10625,"width":346,"height":503,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-group.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-group.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

For each load combination member design can be turned off. It is important to know that not all the design options can be run for all members in load combinations. It depends on the analysis result.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In the results tab the dominant member is automatically shown. The number next to the member number shows the capacity.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10517,"width":354,"height":734,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/10-2-2-memb-group-res.png)](./img/wp-content-uploads-2021-04-10-2-2-memb-group-res.png)

<!-- /wp:image -->
