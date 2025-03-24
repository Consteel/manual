# I.O. 

Load from file, load from Consteel, save to file or Consteel, send and execute Descript.

## Smadsteel Loader

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