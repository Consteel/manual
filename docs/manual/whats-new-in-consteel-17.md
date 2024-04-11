---
sidebar_position: 2
---
# What's new in Consteel 17?

The primary focus of the year was to make the program easy to use. The new functions increase usability across the software, enhancing model manipulation, modification, and information clarity in Consteel, Descript, and Steelspace.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Automatic model portions**

<!-- /wp:heading -->

<!-- wp:paragraph -->

To meet our customers' needs, we created a collection of commonly used portion categories and developed a new automatic model portion function beside the existing manual model portion feature. This new functionality automatically generates model portions by grouping members based on the following categories: cross-section, material, placement, utilization for bar members; thickness, material, and placement for plate elements. The [**auto portions**](../manual/3_0_model-view/3_3_portions-manager.md#portions-manager) are updated according to the model's status and can also be used in conjunction with manually created custom portions.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **X Bracing members**

<!-- /wp:heading -->

<!-- wp:paragraph -->

To address potential challenges in handling non-linear tension-only members in linear calculations, a new development has been introduced. With the latest update, users can now designate the finite element type of these members as [**X Brace**](../manual/5_0_structural-modeling/5_2_line-members.md). It is intended to be used for individual members of bracing systems arranged in pairs and always one of them working in tension. This option will linearize the behaviour of such members.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Load transfer surface improvements**

<!-- /wp:heading -->

<!-- wp:paragraph -->

To enhance the automatic distribution methodology, users now have the capability to edit the properties of the generated line loads after detaching them from [**surface loads**](../manual/6_0_structural-loads/6_3_load-types.md#load-transfer-surface). Additionally, users can control the regeneration of the line loads function according to their preferences.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Extended and unified design results**

<!-- /wp:heading -->

<!-- wp:paragraph -->

The visualization and presentation of design results have been reworked to better suit user preferences. Ultimate Limit State (ULS) and Serviceability Limit State (SLS) [**design checks**](../manual/9_0_standard-design/9_1_steel-design.md#results) have been unified in terms of execution and result display. Users can now access all significant results on the Global checks tab regardless of the limit state. Additionally, all utilizations from various load combinations are saved and displayed, allowing a more detailed investigation of structural adequacy.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **New environment for software interactions**

<!-- /wp:heading -->

<!-- wp:paragraph -->

Interaction capabilities between software have been achieved through the implementation of an SDK-based environment. Translation to a general format (.smadsteel) compatible with Consteel and Steelspace has been facilitated. Additionally, a [**plugin for AXISVM**](../plugins/axis/axisvm-plugin.md) structural analysis has been developed. With this approach, AXISVM models can now be converted into .smadsteel format, allowing them to be opened in Consteel. The conversion process has been developed to include mechanical objects (such as supports and releases), loads, and load combinations, in addition to geometry and sectional properties. The environment also provides tools for cross-section and material conversion at various levels, along with a comprehensive import report that includes visualization of problematic objects in the model.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Descript language developments**

<!-- /wp:heading -->

<!-- wp:paragraph -->

As more people use our [**script system, Descript**](../descript/15_1_introduction/15_1_1_what-is-descript.md), we keep receiving new requests for different kinds of programs. To address these needs, we're adding new features and improving the language. For example, we've enhanced object creation (CREATE), manipulation (SET, FILTER), and querying (GET). Additionally, users can now create custom cold-formed cross-sections.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Improvements for efficient modelling (user requests)**

<!-- /wp:heading -->

<!-- wp:paragraph -->

In response to our customers' requests, this version incorporates several improvements to make Consteel even more user-friendly:

- [**hiding**](../manual/3_0_model-view/3_1_model-views.md) of selected objects
- [**separation**](../manual/1_0_general-description/1_2_the-main-window.md#side-panel) of copy and move functions
- bulk material [**modification**](../manual/5_0_structural-modeling/5_1_section-administration.md) for steel cross-sections
- [**highlighted**](../manual/1_0_general-description/1_2_the-main-window.md#object-properties-window) start and end points for structural members
- quick select by property directly from the [**property tree**](../manual/3_0_model-view/3_2_selection.md) by double-click
- structural member selection from analysis and [**design result**](../manual/3_0_model-view/3_2_selection.md) tables

## **Detailed model comparison in Steelspace**

<!-- /wp:heading -->

<!-- wp:paragraph -->

Users can compare saved milestones and stages of modelling with the new function implemented in [**Steelspace**](https://steelspace.io). The comparison can be customized by users focusing solely on relevant objects and attributes. From the comparison, users can identify parameter differences since designated objects and attributes are highlighted. Some elements of the user interface, such as the selection tab and object properties, have been redesigned to facilitate easier access.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Clipping Plane feature in Steelspace**

<!-- /wp:heading -->

<!-- wp:paragraph -->

For improved visibility, we've introduced the clipping plane feature in Steelspace. This tool enables users to create a clipping plane object, which selectively hides parts of geometry from view within a specific viewpoint in the model.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Improved collaboration management**

<!-- /wp:heading -->

<!-- wp:paragraph -->

With the implementation of Model Version History, our customers can now grant access, customized with different permission levels, to their models for multiple engineers or team members. Using this method, more people can save new versions into the model history of the same project, with each version now including the creator's information.

<!-- /wp:paragraph -->
