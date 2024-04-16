---
sidebar_position: 8
---
# DLUBAL Rstab and SAP2000 model import(.xlsx)


Consteel is able to import model data, contained in an Excel (.xlsx) file, where different model data is stored on different worksheets. These table files can be exported from the softwares above.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To import the model data, click on the File menu, Import tools. Choose DLUBAL(xlsx) or SAP2000(xlsx) from the available import functions. Import settings for the two software work the same. After selecting the import function, the Import dialog will appear:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7616,"width":268,"height":374,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-7-Dlubal-1.png)](./img/wp-content-uploads-2021-04-3-7-Dlubal-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

For the import process, the following settings has to be made:

<!-- /wp:paragraph -->

<!-- wp:list -->

- The path of the file on the users coordinate has to be set by clicking on the ![](./img/wp-content-uploads-2021-04-3-7-Dlubal-open.png) button

- Unit of the original model file in the other software has to be set (mm/cm/m)

- The direction of the model Z-axis has to be set, since it may be different in the other software

- The following model data can be imported

  - Cross-sections (cross-section parameters, rotation, eccentricities)

  - Nodal supports(rotation, eccentricities)

  - Loadcases

  - Nodal forces

  - Concentrated forces on members

  - Member forces

<!-- /wp:list -->

<!-- wp:paragraph -->

It is important to know for the proper import process, that only those checkboxes should be checked in, which data is available in the xlsx file, or in other words, the model includes it.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

After the settings are made and clicked on the OK button, the import process will be initiated, and the Section import manager will be shown. It is possible to change the conversion file for grades and for sections or edit the section name and grade manually.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7622,"width":505,"height":545,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/3-7-Dlubal-2.png)](./img/wp-content-uploads-2021-04-3-7-Dlubal-2.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

If manual changes have been made the list can be saved (![](./img/wp-content-uploads-2021-04-Icon-save.png)) and can be used as a conversion file in future imports. After clicking the OK button the model will be exported.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

After clicking OK on the section import tab, the model will appear in the modeling area. It is also important to know, that the xlsx model export file has to be created using the English language, otherwise, the import process will not work.

<!-- /wp:paragraph -->
