---
sidebar_position: 3
---
# Tekla Structures model import, export and update

The smooth and quick transition from the structural model to the detailing model can save significant time and cost. Therefore, _Consteel_ has a high-level interface module to _Tekla Structures 64-bit_. Besides the export of the global structural model (ie. beams, columns, slabs, walls) also the joint models of _Consteel_ have the corresponding _Tekla_ component. The designed structural model with the placed joint models can be converted into one detailed model without additional modeling efforts for the joints. This unique interface can save significant detailing time and therefore reduce appreciably the project costs.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Consteel_ uses _Tekla_ Open API (Application Programming Interface), also known as the .NET API. This provides an interface for third-party applications to interact with the model in _Tekla Structures_. Therefore, both applications need to have to be installed and running at the same time in order to export a model from _Consteel_ to _Tekla Structures_.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Import structural modell from Tekla Structures

<!-- /wp:heading -->

<!-- wp:paragraph -->

During the process, we have the possibility to import the structural members defined in Tekla Structures to Consteel. From the structural parts of Tekla Structures, 1D members can be imported (beams, columns, curved members).

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"right","id":7436,"width":354,"height":261,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-2-tekla-1.jpg)](./img/wp-content-uploads-2021-04-3-2-tekla-1.jpg)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"left","id":7442,"width":354,"height":261,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-2-tekla-2.jpg)](./img/wp-content-uploads-2021-04-3-2-tekla-2.jpg)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

Import function is compatible with the following versions of Tekla Structures:

<!-- /wp:paragraph -->

<!-- wp:list {"type":"1","className":"is-style-checked","editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

- 19.0, 19.1 64 bit
- 20.0, 20.1 64 bit
- 21.0, 21.1 64 bit
- 2016, 2016i 64 bit
- 2017, 2017i
- 2019, 2019i
- 2020
- 2021

<!-- /wp:list -->

<!-- wp:paragraph -->

For the import process from Tekla Structures, it is indispensable to run Tekla and Consteel in parallel. In Tekla Structure the model that is desired to be exported has to be opened, alongside an empty model opened in Consteel. For the proper importation process, it is recommended to use the Default environment of Tekla Structures. To start the import procedure, open the **File** menu, select the **Import** tools and click on **Tekla Structures**.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7450,"width":281,"height":212,"sizeSlug":"full","linkDestination":"media"} -->

![alt text](<img/tekla import.png>)

<!-- /wp:image -->

<!-- wp:paragraph -->

On the opened import dialogue, you have the possibility to choose whether the whole model or just the selected parts are desired to be imported to Consteel from the parallelly running Tekla Structures model. If only the selected model parts would be imported, these parts have to be already selected in the Tekla model.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Furthermore, you have to decide the layer handling of the imported model. By default, the imported model will use the layers defined by the classes in Tekla Structures, but optionally it is possible to use any of the Consteel layers instead. In the first case, members of a Tekla Structure class will be imported to a new layer in Consteel, which will get the colors of the corresponding class.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With the import button, the process can be initiated.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7456,"width":248,"height":254,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-2-tekla-import-dialog.png)](./img/wp-content-uploads-2021-04-3-2-tekla-import-dialog.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

In the next step, the reference point has to be clicked in Tekla Structures. It is important to check the alignment of the coordinate system in Tekla Structures. After selecting the reference point in _Tekla_ the **Section conversion** window appears. It is possible to change the conversion file for grades and for sections or edit the section name and grade manually.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7462,"width":723,"height":343,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-2-tekla-conv.png)](./img/wp-content-uploads-2021-04-3-2-tekla-conv.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The two main cases of the conversion:

<!-- /wp:paragraph -->

<!-- wp:list {"type":"A","className":"is-style-arrow"} -->

- Automatic conversion:

  - Standard section library based conversion: Based on the conversion files, sections coming from Tekla structures can automatically be assigned to a section from the Standard section library of Consteel
  - Standard macro-based conversion: For those sections, which can not be converted directly to a standard library section, Consteel will try to align a so-called „Standard macro” section based on the parameters of the imported section.

- Manual conversion: If based on the conversion file, Consteel is not able to align any standard library section for the imported section, and the parameters do not fit any of the standard library cross sections, section conversion has to be performed manually. This can be done by either selecting a previously loaded cross-section from the dropdown menu or by clicking on the (…) button and selecting a proper section from the library. These automatically unconvertible sections are represented with their shapes at the properties part of the conversion dialogue.

<!-- /wp:list -->

<!-- wp:paragraph -->

If manual changes have been made the list can be saved and can be used as a conversion file in future exports. After clicking OK button the model will be exported.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Limitations of the import of bar members

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Bar members**

<!-- /wp:paragraph -->

<!-- wp:list {"type":"I"} -->

- I and H profiles:

  - Hot rolled
  - Symmetric welded section with constant and variable height
  - Not-symmetric welded section with constant and variable height

- L profiles:

  - Hot rolled, with equal and unequal plates
  - Cold formed, with equal and unequal plates

- U profiles:

  - Hot rolled

- T profiles:

  - Hot rolled

- Box sections:

  - Symmetric welded section with constant height
  - Not-symmetric welded sections with constant height (section will be defined with the thicker flange thickness)
  - WQ section can not be imported

- Round bars:

  - Constant height
  - Sections with different diameter in the main and sub axes are not possible

- Hollow sections:

  - Hot-rolled square and rectangular, constant height
  - In the case of a tapered member, parameters have to be set manually

- Tube sections:

  - Hot rolled sections with constant and variable height
  - Ellipse shaped section can not be imported

- Z profiles

  - Cold-formed, folded edges
  - Cold-formed sections without folded edges can not be imported

- C profiles

  - Cold-formed, folded edges
  - Cold-formed sections without folded edges can not be imported

- Multi-line,continuous beam can not be imported

<!-- /wp:list -->

<!-- wp:paragraph -->

**Plates**

<!-- /wp:paragraph -->

<!-- wp:list -->

- Contour plates can not be imported

<!-- /wp:list -->

<!-- wp:paragraph -->

**Connections**

<!-- /wp:paragraph -->

<!-- wp:list -->

- Macros defined in Tekla Structures can not be imported

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Complete model export into Tekla structures

<!-- /wp:heading -->

<!-- wp:paragraph -->

Besides the export of the global structural model (ie. beams, columns, slabs, walls) all the joint models of _Consteel_ have the corresponding _Tekla_ component. The designed structural model with the placed joint models can be converted into one detailed model without additional modeling efforts for the joints. This unique interface can save significant detailing time and therefore reduce appreciably the project costs.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7468,"width":467,"height":212,"sizeSlug":"full","linkDestination":"media"} -->
![alt text](<img/tekla to consteel.png>)

<!-- /wp:image -->

<!-- wp:paragraph -->

The _Consteel_ export to _Tekla Structures_ can be used from version 19 onward.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To export a model from Consteel it is important to run both programs at the same time and to have a model opened in _Tekla Structures_. Then click on the File menu and select Export then select Tekla Structures.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7474,"width":335,"height":199,"sizeSlug":"full","linkDestination":"media"} -->


![alt text](<img/tekla export.png>)

<!-- /wp:image -->

<!-- wp:paragraph -->

A dialog window opens asking for selecting model parts to be exported. Keep in mind that only those joints will be exported which are placed in the model and selected before exporting. Exportation of the model grid is also possible if the checkbox is checked. The next step is to select a reference point in Consteel and to click on the Export button.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7480,"width":273,"height":254,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-2-tekla-export-dialog.png)](./img/wp-content-uploads-2021-04-3-2-tekla-export-dialog.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

After selecting the reference point in _Consteel_ the **Section conversion** dialogue appears. It is possible to change the conversion file for grades and for sections or edit the section name and grade manually.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7486,"width":723,"height":343,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-2-tekla-exp-conv.png)](./img/wp-content-uploads-2021-04-3-2-tekla-exp-conv.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

If manual changes have been made the list can be saved (![](./img/wp-content-uploads-2021-04-3-2-tekla-save-to-file.png)) and can be used as a conversion file in future exports. At the Properties part of the dialogue, the parameters of the selected member are shown. After clicking the OK button you have to select the insertion point in Tekla Structures, and the model will be exported.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Limitations of the export of Joints and bar members

<!-- /wp:heading -->

<!-- wp:paragraph -->

_Bar members_

<!-- /wp:paragraph -->

<!-- wp:list {"type":"A","className":"is-style-arrow"} -->

- Curved members are not exported
- Compound sections are not exported

<!-- /wp:list -->

<!-- wp:paragraph -->

_Semi rigid or pinned base plate ► Base Plate (1042)_

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- No haunch can be exported
- Anchor rod type must be set manually in Tekla (Consteel settings has no effect on the export)
- Anchor rod properties that have an effect on the export are the followings: diameter, grade
- Foundation will not be exported
- Upper and lower flange weld thickness would be the same in the _Tekla_ model(different _Consteel_ settings has no effect on the export)

<!-- /wp:list -->

<!-- wp:paragraph -->

*Beam to column, moment end plate with haunch *►* Haunch (40)*

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- Upper and lower haunch dimensions are the same (upper haunch dimensions come from the lower)
- No shear stiffeners are exported into _Tekla_ only supplementary web plate
- Flange stiffeners are not exported into _Tekla_

<!-- /wp:list -->

<!-- wp:paragraph -->

_Beam to column, simple end plate ► Haunch (144)_

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- Column top height modification must be set manually

<!-- /wp:list -->

<!-- wp:paragraph -->

Beam to column, simple end plate ► Haunch (146)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Beam splice connected with a pitch, simple or moment end plate without haunch ► Haunch (40)

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- Left and right sided macros are exported separately, explosion of components and redefinition of bolt parts are needed in Tekla

<!-- /wp:list -->

<!-- wp:paragraph -->

Beam splice connected in line, simple or moment end plate without haunch ► Joining plates (14)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Beam splice, moment end plate with haunch ► Apex haunch (106)

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- No upper haunch

<!-- /wp:list -->

<!-- wp:paragraph -->

Beam splice plate ► Splice connection (77)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Bolted circular flange plate ► Round joining plates (124)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Stiffened end plate (27)

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- There is no web stiffener plate in _Tekla_

<!-- /wp:list -->

<!-- wp:paragraph -->

Beam to beam, simple end plate ► End plate (144)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Beam to beam, web fin plate ► Fin plate (146)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Gusset plate for hollow and tube brace sections ► Tube gusset (20)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Bolted gusset plate for angle brace ► Bolted gusset (11)

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Change management between Tekla and Consteel: Tekla update

<!-- /wp:heading -->

<!-- wp:paragraph -->

Besides the import and export functions _Consteel_ can check and update _Tekla Structures_ models during the detailing. Update of _Tekla Structures_ model is always based on _Consteel_ model with the following attributes:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Element name
- Material name
- Section name
- Section parameters
- Element geometry and position

<!-- /wp:list -->

<!-- wp:paragraph -->

Before doing model update a complete model import (or export) process is necessary.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To update the Tekla model it is important to have running both software at the same time and to have the model opened in _Tekla Structures_. Then click on the **File** menu and select **Update** then select **Tekla Structures**.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7521,"width":273,"height":179,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-3-tekla-update-1.png)](./img/wp-content-uploads-2021-04-3-3-tekla-update-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A dialog window opens, and you have the possibility to choose whether the whole model or only the selected parts of the model is desired to be updated. Then click on the Continue button.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

During the process _Tekla Structures_ model and parts will be updated. In case of conflict the following dialog will be appeared, and users can make the decision and applied which model parts will be used.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7527,"width":705,"height":304,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-3-tekla-update-dialog.png)](./img/wp-content-uploads-2021-04-3-3-tekla-update-dialog.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Clicking on Update button the whole process will be finished. New elements created in _Consteel_ will be automatically exported to _Tekla Structures_. The next table consists the merge cases.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7533,"width":423,"height":331,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-3-tekla-change-options.png)](./img/wp-content-uploads-2021-04-3-3-tekla-change-options.png)

<!-- /wp:image -->
