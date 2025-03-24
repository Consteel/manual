# Input-Output

Load from file, load from Consteel, save to file or Consteel, send and execute Descript.

## Smadsteel Loader

See the component in use in the script library: [Continuous multispan beam](https://consteelsoftware.com/script/continuous-3-span-beam/).


### Inputs

| Name      | Id | Description                                                                                                            |
| --------- | -- | ---------------------------------------------------------------------------------------------------------------------- |
| File path | F  | Absolute or relative path to .smadsteel file.By default initialized to path of the default model attached to Pangolin. |

### Outputs

| Name           | Id  | Description    |
| -------------- | --- | -------------- |
| ConSteel Model | csm | ConSteel model |

![alt text](<img/IO 1.png>) 

## Consteel Input


### Inputs

| Name        | Id | Description                                |
| ----------- | -- | ------------------------------------------ |
| Read        | R  | Set to true to load Consteel model.        |
| ObjectTypes | OT | The object types that should be loaded in. |

### Outputs

| Name           | Id  | Description    |
| -------------- | --- | -------------- |
| ConSteel Model | csm | ConSteel model |


![alt text](<img/IO 2.png>) 

## Descript



### Inputs

| Name                 | Id  | Description                                                                                                                                                                                                                    |
| -------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Descript File Path   | DFP | The path for the file to read. If left empty, will prompt for a path.                                                                                                                                                          |
| Predefined Variables | PV  | Creates 1 or more variables with their given values in the beginning of the Descript code. Input example: “variable=value” or “$variable=value”. For multiple variables use more lines in the input string or multiple panels. |

### Outputs

| Name          | Id | Description        |
| ------------- | -- | ------------------ |
| Descript code | DC | The descript code. |


![alt text](<img/IO 3.png>)

## Consteel Connection

See the component in use in the script library: [Simple cantilever beam](https://consteelsoftware.com/script/simple-cantilever-beam/?search=).

### Inputs

| Name        | Id | Description                                |
| ----------- | -- | ------------------------------------------ |
| Model | M | Objects to send to ConSteel. Note: you only have to specify the top level objects, Pangolin will automatically send all other required objects referenced by the ones specified manually. |
| Live Connection | LCon | If set to true, the component will automatically send the objects every time there is a change upstream. If set to false, you have to manually send the objects by right clicking on the send button. |
| Start Analysis | SA | If set to true, ConSteel will automatically start the analysis calculation after the model is sent over. After the analysis is finished, the component imports the results from ConSteel. Only works with live connection! |
| Start Design | SD | If set to true, ConSteel will automatically start the analysis and design calculation after the model is sent over. After the design is finished, the component imports the results from ConSteel. Only works with live connection! |
| Calculation Timeout Seconds | CT | The calculation is considered failed after this number of seconds. |
| Save File | SF | If set to true, the component will also save a .smadsteel file every time it is run. If set to false, you can manually save a file from the right-click menu. |
| File Path | FP | The path for the saved file. If left empty, will prompt for a path. If set to false, you can manually save a file by right clicking on the send button. |
| Descript | D | Data about the descript file to execute. |
| Execute Descript | ED | ConSteel will automatically execute the descript code after the model is sent over and the analysis / design is executed. After the descript is executed, the component imports the results from ConSteel. Only works with live connection! |


### Outputs

| Name           | Id  | Description    |
| -------------- | --- | -------------- |
| Beams With Results | BR | New Beam objects, with the calculated results. You can pair the results with the origin object using the GUIDs. Note: do not mix these in with the beams created inside Grasshopper. |
| Point Supports With Results | PSR | New Point support objects, with the calculated results. You can pair the results with the origin object using the GUIDs. Note: do not mix these in with the beams created inside Grasshopper. |

![alt text](<img/ConSteel Connection.png>)