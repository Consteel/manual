---
sidebar_position: 6
---
# Joint export

## Joint types for export
At the **Structural Members** tab, when creating a joint, users can choose from three distinct joint types. The first type is the **Consteel Joint**, which is described in detail in the [previous chapters](../14_0_joint-module/14_2_create-joint.md).
The other two options enable users to either export all joint information to an Excel file for further processing or establish a live connection with **IDEA StatiCa Connection**.

![alt text](<img/Build new joint boject- type.png>)

### 1.	Fictive Joint
This function allows the export of internal forces of joints into .csv format. It utilizes the advantages of placed joints, meaning that a **fictive joint** can be positioned at multiple locations within the model if they share geometric similarity. The internal forces from all placements will be collected and exported together, ensuring a comprehensive data set.
  
![alt text](<img/Fictive joint.png>)  

The exported .csv files can be opened in Excel, allowing the data to be organized according to specific user’s needs and used for connection design.
In addition to the .csv file, two images are generated during the export:
- 	One displaying the joint geometry
- 	One illustrating the interpretation of internal forces and local coordinate system 
 ![alt text](<img/Fictive joint export pictures.png>)

### 2.	IDEA StatiCa Connection
"The IDEA StatiCa Connection is available on the Structural Elements tab, under the Create joint by model menu item (see below for supported versions)."
![alt text](<img/Idea Statica Joint-Consteel.png>)

After selecting the **IDEA StatiCa Connection** type and pressing the Create button, **IDEA StatiCa Connection** will automatically open, and two new folders will be created in the same location where the Consteel model is stored: **IDEA JOINT** and **IDEA IOM**.

The new joint can be accessed from its folder (IDEA JOINT) or directly from the Consteel model, just like any other joint, via the **Structural Members** tab by opening the **Edit Joint** window.
![alt text](<img/Edit Joint.png>) It can also be placed in the model in the usual manner using the **Place Joint** function ![alt text](<img/Place Joint.png>) or immediately after creation. 

:::info Version compatibility

Due to the changes implemented in IDEA StatiCa, the following IDEA StatiCa versions are supported for Consteel 19 versions:
•	Consteel 19 Build 4446–4603 – IDEA StatiCa 22.1.6.0493–24.0.1.1233
•	Consteel 19 Build 4646 and later – IDEA StatiCa 25.1.3.1526 (earlier IDEA versions are not compatible with this build)

The two version ranges are not interchangeable. Consteel build 4603 cannot be used with IDEA 25.1.3.1526, and build 4646 does not work with IDEA versions 22.1.6.0493–24.0.1.1233.
The list of supported IDEA versions for the current Consteel version, along with the tested versions and related information, is available under Settings → Model Settings → IDEA StatiCa transition. The Consteel–IDEA Connection transition can only be used with IDEA StatiCa 25.1.3 or later. 

:::

## Whole Model Export with Integrated Joints 
![alt text](<img/Idea statica chackbot.png>)

### 1.	IDEA StatiCa Checkbot
The entire model, including analysis results, can be exported in .xml format, which can then be imported into IDEA StatiCa Checkbot using the IOM import feature for connection design.

**To export your model:**
- 	Complete your model design.
- 	Navigate to the File menu and select Export.
- 	Choose IDEA StatiCa Checkbot from the list of export options.
- 	Select the destination path for the open model file, where the IOM file will be saved.
- 	Click Export.

**To open the exported model in IDEA StatiCa:**

- 	Launch IDEA StatiCa and select the Checkbot module.
- 	Create a new project.
- 	In the initial window, select the Import IOM option.
- 	Locate and select the previously saved IOM file.
- 	Wait for the structural model to be imported, then begin your connection design.


For more detailed information about the IDEA StatiCa Checkbot workflow, please visit their [Support Center](https://www.ideastatica.com/support-center/checkbot-bulk-bim-workflows).

![alt text](<img/IDEA Checkbot.png>)

:::info
 This is a one-way link, not a live interface, and is only compatible with **IDEA StatiCa 24.1. and 25.0** Additionally, the export is only possible when there are no SLS results in the model.
:::

Due to certain limitations and potential issues, this feature is released as a **beta** version.

### 2.	Joint export into detailing software

All joints can be exported to _TEKLA Structures_ steel detailing software. See chapter [File handling](../2_0_file-handling/2_3_tekla-structures-model-import-export-and-update.md) for more detailed information.

![alt text](img/cstotekla.png)

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
