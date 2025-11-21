---
sidebar_position: 2
---

# Fire effect and protection

The fire effect and protection can be defined by clicking the **Define fire effect and fire protection** (![](./img/wp-content-uploads-2021-04-12-2-fire.png)) icon on the **Loads** tab.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8584,"sizeSlug":"large","linkDestination":"media"} -->

![](img\wp-content-uploads-2021-04-12-2-fire-effect-and-protection.png)

<!-- /wp:image -->

<!-- wp:image {"align":"center","id":8590,"width":267,"height":328,"sizeSlug":"large","linkDestination":"media"} -->

![alt text](<img/Define fire effect and fire protection window.png>)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

The first option is to set the nominal fire curve. Three EuroCode defined fire curves are implemented and can be used to define fire effect: Standard, External, and Hydrocarbon.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The second one is to set the fire resistance time that can be varied between 15-200 min.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

By clicking on the three-dot button next to the _Fire protection data_ label, different fire protection can be created.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":8596,"width":456,"height":228,"sizeSlug":"large","linkDestination":"media"} -->

![alt text](<img/Define fire protection window.png>)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

Fire protection can be _Unprotected_, _Hot-dip galvanized_ according to EN ISO 1461 and _Protected_.  

_Unprotected_ means that there is no distinctive fire protection method applied on the element. The ’Protection’ still needs to be defined and placed in Consteel in order to initiate fire calculation for the element.  

According to DASt Richtlinie 027, surface emissivity, εₘ value – used to calculate the temperature of the given element in the presence of fire – can be modified from its default (EN 1993-1-2 -non-hot-dip galvanized- steel) value of 0,7 to 0,35 when the element is hot-dip galvanized and until steel temperature of 500°C. When the _Hot-dip galvanized_ according to EN ISO 1461 option is selected, the εₘ field becomes editable and the value given is used to calculate steel temperature under 500°C. 

<!-- /wp:paragraph -->

<!-- wp:list -->

If Protected is chosen, the protection can be passive or reactive. 

- **Passive protection**: in this case, the type of fire protection material and the thickness of the insulation must be specified. There are several predefined materials in the drop-down list, or you can define new materials with the ![](./img/wp-content-uploads-2021-04-3dots-button.png)button.

<!-- /wp:list -->

<!-- wp:list -->

- **Reactive protection**: this should be selected if the fire protection of the given structure (part) will be provided by an intumescent paint coating and the critical temperature calculation is required to select the paint.

  - _Determination of the required thickness_ of the fire resistant coating is optional. There are several products listed in the second drop-down menu to choose from. _Environmental exposure category_ and _Type of structural element_ should be given, so the software can present the necessary coating thickness from the implemented product tables. Result will be displayed in the design result table. 

<!-- /wp:list -->

<!-- wp:paragraph -->

:::danger

Attention! Critical temperature calculation can only be requested for members that have reactive protection!

:::

<!-- wp:spacer {"height":16} -->

<!-- /wp:spacer -->

<!-- wp:paragraph {"align":"justify"} -->

Finally, in the lowest drop-down menu of the dialog box, for any protected or unprotected type, the section grading of the structural element acc. to EN 1993-1-2 - 4.2.5. / 4.2 and 4.3. should be specified.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

By clicking on the **_Apply_** button, fire protection will be saved. With the **_New_** button, several other protections can be created. With _**Delete**_ button, the selected and created protection can be deleted.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The fire effect can be set to a different intensity at the top and the bottom of the member by modifying Ψ1 and Ψ2 multiplication factors. In case of varying intensity, the design parameters acc. to the EN 1993-1-2 4.2.3.3 (7)-(8) also can be set.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Created fire effect can be placed on the members with a simple click on the model. It is possible to apply fire effect to more members at the same time. In this case the members should be selected before clicking the fire icon.

<!-- /wp:paragraph -->
