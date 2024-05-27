---
sidebar_position: 2
---
# Selection

Objects can be selected in the graphical window, in the object tree, or by the additional selection options. As a general rule, only the visible objects can be selected graphically, accordingly, the result of the same selection on different tabs or model views may be different. A selected object can be unselected by clicking on it while pressing the SHIFT button. The ESC button always unselects all objects.


The basic selection modes and their operation are the followings:


- **simple graphical selection**: click on the object on the graphical window by the left mouse button. All objects whose graphic symbol intersects the imaginary line perpendicular to the plane of the image at the clicked point are selected. It means, that you do not have to click exactly on the contour line of an element but between them. The item will be selected also in this case. Items currently being covered by other objects (that are closer to the viewer) are also selected.


* **window selection**: holding down the left button and moving the mouse will create a window with dashed lines. The selection will be completed when the mouse button is released. When drawing the window from left to right, only those members are selected that are within the window with their full size (inclusion window selection). When drawing from right to left all objects touched by the selection window are selected no matter how small part is found in the rectangle (section and inclusion window selection).



* **selection by property**: this option can be reached on the left **Side bar** or by a right mouse button click on the graphical window. The selection can be made by choosing the required object type at the top of the Select by property window and narrow down the selection by specifying different properties. After setting the required properties there are several different ways to finish the selection:


  - On the lower-left corner, three options are available

    - _Accurate selection_ = only objects that match the currently set parameters will be selected,

    - _Add to selection_ = objects that match the currently set parameters will be selected and added to the already selected set of objects,
   
    - _Delete from selection_ = objects that match the currently set parameters will be unselected and removed from the already selected set of objects.
    

  * With the action button the following operations can be made:

    - **Close**: closes the window and does not change the selection,

    - **Apply**: makes the selection according to the currently set parameters and let the window open,
   
    - **OK**: makes the selection according to the currently set parameters and closes the window.
  

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/4-3-selection-1.png)](./img/wp-content-uploads-2021-04-4-3-selection-1.png)


[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/4-3-selection-2.png)](./img/wp-content-uploads-2021-04-4-3-selection-2.png)



[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/Dia_select_by_prop.png)](./img/wp-content-uploads-2021-04-Dia_select_by_prop.png)


- **object tree selection**: select objects by clicking on elements of the **_Model Content window_**.


[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/4-3-selection-3.png)](./img/wp-content-uploads-2021-04-4-3-selection-3.png)


Clicking the object names in the object tree while holding down the Ctrl or Shift key results in multiple objects selection. To unselect any of the selected objects: hold down the Ctrl key and click on the object name again in the object tree.



The additional generalized selection options (select all, unselect all, inverse selection) can be found on the left **_[Side bar](../1_0_general-description/1_2_the-main-window.md#side-bar)_**, they can be reached by a right mouse button click on the graphical window (see _picture_ above), or with **_[Hot keys](../1_0_general-description/1_5_hot-keys.md)_**.

<!-- /wp:paragraph -->
