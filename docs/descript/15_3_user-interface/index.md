# User interface

## Minimized size

After starting Consteel, the Descript panel appears on the bottom left part of the window in its minimized state.

![](./img/wp-content-uploads-2022-12-Mydescript_mini-1.jpg)

Descript since Consteel 16 

[![](https://consteelsoftware.com/wp-content/uploads/2021/11/image-11.png)](./img/wp-content-uploads-2021-11-image-11.png)

Descript in Consteel 15

For any further action the Descript panel has to be opened up with this button: ![](./img/wp-content-uploads-2021-11-image-12.png)

## Maximized size

After opening up the Descript panel to its maximized state, further functionalities become available. There are 2 parts of the Descript module. First, we are greeted by the MyDescript interface.

### MyDescript

[![](./img/wp-content-uploads-2022-12-descript_max-1024x352.jpg)](https://consteelsoftware.com/wp-content/uploads/2022/12/descript_max.jpg)

MyDescript interface since Consteel 16

[![](./img/wp-content-uploads-2021-11-image-15-1024x323.png)](https://consteelsoftware.com/wp-content/uploads/2021/11/image-15.png)

MyDescript interface in Consteel 15

This interface is designed to manage your own scripts stored on your computer and to access online scripts provided by Consteel.

In the header to the left there are 3 buttons with the following functions:

![](./img/wp-content-uploads-2021-11-Screenshot-2021.11.26.-16_47_22.png) Close the Descript panel to its minimized state

![](./img/wp-content-uploads-2021-11-Screenshot-2021.11.26.-16_48_29.png) Open the code editor and start a new script

![](./img/wp-content-uploads-2021-11-Screenshot-2021.11.26.-16_49_56.png) Add an existing script file from the computer to the script list below

In the header to the right, the user name and membership level are displayed. Also, there is the Licence button.

![](./img/wp-content-uploads-2021-11-Screenshot-2021.11.26.-16_54_50.png) Open the licence settings window.

In the main body to the left, there is the **Script list**, where all the local and online scripts are listed. The different types are shown with different icons in the Type column. Here you can run, edit or remove scripts by clicking the respective buttons in the rows of the individual scripts.

![](./img/wp-content-uploads-2021-11-Screenshot-2021.11.26.-17_15_33-1.png) Run the script

![](./img/wp-content-uploads-2021-11-Screenshot-2021.11.26.-17_17_30.png) Edit the script

![](./img/wp-content-uploads-2021-11-Screenshot-2021.11.26.-17_19_01.png) Remove the script from the list (this does not delete the script file from the computer)

Scripts can also be searched with the **search bar **above the script list.

In the main body to the right there is the **Description area**. Here a picture and a description is displayed for the selected script.

After either starting a new script or editing one from the list the Descript panel switches to the code editor view.

### Quick launch toolbar (Consteel 16 and up)

In Consteel 16, you can select your favorite Descript scripts and pin them to the bottom bar to make them instantly available and ready for your work.

**Creating a quick launch option for scripts**

Open the MyDescript screen and click on the Pin icon next to the chosen script and the script will be available to start instantly for the Descript bar at the left bottom. Click on the Pin icon again to unpin the script.

![](./img/wp-content-uploads-2022-12-descript_pin.jpg)

_Click on the Pin icon to pin a script to the quick launch bar_

Pinned scripts will have a two letter mosaic word from their names and a cloud or computer icon which indicates if they are cloud or local scripts. Hovering with the mouse cursor over the pinned scripts will show their full name. You can also unpin scripts while hovering as an “unpin” icon will appear next to the script’s name.

![](./img/wp-content-uploads-2022-12-descript_hover.jpg)

_Hover with your mouse cursor over the pinned script to reveal it’s full name_

### Code editor (Consteel 15 build 1484 and up)

The code editor is designed to write, modify and debug Descript codes.

[![](./img/wp-content-uploads-2022-03-image-1024x407.png)](https://consteelsoftware.com/wp-content/uploads/2022/03/image.png)

In the header on the left there are several buttons with the following functions:

![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.11.-17_16_15.png) Switch back to the MyDescript view

![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.11.-17_17_04.png) Close the Descript panel to its minimized state

![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.11.-17_32_44.png) Save

![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.11.-17_45_11.png) Undo/redo last edit

![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.11.-18_05_59.png) Run the script

![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.11.-18_06_31.png) Start debugging. More on that at the [Debugging](https://consteelsoftware.com/manual/descript-cspi/debugging/) page

![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.23.-14_05_08.png) In the header on the right there is the button for the watch window. More on that at the [Debugging](https://consteelsoftware.com/manual/descript-cspi/debugging/) page

Below the header there is the **code input area**. This is where variables, cycles, commands can be defined, and will be executed line-by-line after the Run button is clicked. On the left, code lines are numbered. To the right of the code input area, there is a miniaturized view of the code currently in the editor, which acts as a second scrollbar for easier navigation within the code.

The editor applies different colors for commands, variables etc.. The color coding scheme is the following:

[![](https://consteelsoftware.com/wp-content/uploads/2022/03/image-3.png)](./img/wp-content-uploads-2022-03-image-3.png)

**Code editor features**

Command info box

If the mouse pointer is placed over a command, a box will appear with basic information about the command. The info box contains the following data:

- Short description of the command
- Syntax of the command (optional parameters are not shown here)
- Link to the user manual page of the command

[![](https://consteelsoftware.com/wp-content/uploads/2022/03/image-14.png)](./img/wp-content-uploads-2022-03-image-14.png)

Auto search

The editor automatically searches within all the already used variable names and all commands for the text already typed. The search results appear in a box around the cursor. The list of results can be navigated with the arrow buttons and an item can be selected with an Enter.

[![](https://consteelsoftware.com/wp-content/uploads/2022/03/image-13.png)](./img/wp-content-uploads-2022-03-image-13.png)

Autocomplete + insert

After an item is selected from the search results, the selected item gets inserted into the editor. There are 3 different type of inserts:

- **Variable name**  
  Completes the variable name
- **Field insert (for, if)**  
  Inserts a multi-line code segment with the empty structure of the selected item
- **Command**  
  Completes the command, and if there are required parameters for the command then inserts some text for the parameters and enters the parameter definition mode. In this mode parameters can be easily defined. Just type the desired parameter value then switch between parameters with Tab (forward) and Shift+Tab (backward). Exit parameter definition mode with Esc.

Additional code editing features

The code editor provides a lot of additional code editing features to make coding more efficient. To view the full list of code editing features, click with the right mouse button and select Command palette.

[![](https://consteelsoftware.com/wp-content/uploads/2022/03/image-15.png)](./img/wp-content-uploads-2022-03-image-15.png)

Here is a selection with the most useful ones of these features.

Additional code editing features highlight:

| **Feature**            | **Keyboard shortcut** | **Description**                                                |
| ---------------------- | --------------------- | -------------------------------------------------------------- |
| Command palette        | F1                    | Lists all code editing features                                |
| List inserts           | Ctrl+Space            | Lists all variable names in the code and commands              |
| Find                   | Ctrl+F                | Searches the code for a given text                             |
| Replace                | Ctrl+H                | Replaces given text strings with different text                |
| Move line up           | Alt+↑                 | Moves selected code line up                                    |
| Move line down         | Alt+↓                 | Moves selected code line down                                  |
| Change all occurrences | Ctrl+F2               | Changes all occurrences of selected text                       |
| Add line comment       | -                     | Adds "//" in front of all selected lines to make them comments |
| Remove line comment    | -                     | Removes "//" from the front of all selected lines              |
