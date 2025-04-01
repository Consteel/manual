# Section

**More than 7000 predefined from Consteel section bank, or custom defined by section macros, including cold-formed sections with stiffener definition support.**

## IEdge Stiffener

See the component in use in the script library: [Continuous multispan beam](https://consteelsoftware.com/script/continuous-3-span-beam/).

### Inputs

| Name         | Id | Description                                                                               |
| ------------ | -- | ----------------------------------------------------------------------------------------- |
| Angle1 [deg] | A1 | Angle of the first fold in degrees.                                                       |
| Angle2 [deg] | A2 | Angle of the second fold in degrees. Note: only relevant if Type is set to double folded. |
| B1 [mm]      | B1 | Length of the first fold in mm-s.                                                         |
| B2 [mm]      | B2 | Length of the second fold in mm-s. Note: only relevant if Type is set to double folded.   |
| R1 [mm]      | R1 | Radius of the first fold in mm-s.                                                         |
| R2 [mm]      | R2 | Radius of the second fold in mm-s. Note: only relevant if Type is set to double folded.   |
| Type         | T  | Single or double folded edge stiffener type specification.                                |

### Outputs

| Name                   | Id | Description                                    |
| ---------------------- | -- | ---------------------------------------------- |
| ConSteel EdgeStiffener | ES | Represents an EdgeStiffener in ConSteel model. |

![alt text](<img/section 1.png>) 

## Intermediate Stiffener

See the component in use in the script library: [Continuous multispan beam](https://consteelsoftware.com/script/continuous-3-span-beam/).

### Inputs

| Name             | Id  | Description                                                                                                                                                                                                                                                                        |
| ---------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alpha [deg]      | A   | Angle of the plates if plated type, in degrees.                                                                                                                                                                                                                                    |
| D [mm]           | D   | Diameter of the stiffener, if rounded type, mm-s.                                                                                                                                                                                                                                  |
| PositionFrom     | PF  | Specifies how to interpret the following position value. Relative expects a value between 0.0 and 1.0, with 0 meaning at the start, 0.5 meaning halfway, etc. Otherwise in mm-s.                                                                                                   |
| H [mm]           | H   | Height of the stiffener, in mm-s.                                                                                                                                                                                                                                                  |
| Doubled          | Do  | Set to true, if you wish to create a double intermediate stiffener.                                                                                                                                                                                                                |
| Length [mm]      | L   | Length of the intermediate stiffener, as measured along the stiffened plate segments axis, in mm-s.                                                                                                                                                                                |
| PlateSide        | PS  | Specifies which side of the plate the stiffener should face.                                                                                                                                                                                                                       |
| R [mm]           | R   | Radius of the stiffener, if rounded type, in mm-s.                                                                                                                                                                                                                                 |
| PlateSide2       | PS2 | Specifies which side of the plate the optional second stiffener should face, if this is a double stiffener.                                                                                                                                                                        |
| Type             | T   | Rounded, triangle or plated intermediate stiffener type specification.                                                                                                                                                                                                             |
| X2 [mm or ratio] | X2  | Position of the optional second stiffener's center along the stiffened plate segment's axis if this is a double stiffener. The PositionFrom parameter specifies how to interpret the value, but this value always understood from the first stiffener, not from the segment point. |
| X [mm or ratio]  | X   | Position of the stiffener's center along the stiffened plate segment's axis. The PositionFrom parameter specifies how to interpret the value.                                                                                                                                      |

### Outputs

| Name                           | Id | Description                                           |
| ------------------------------ | -- | ----------------------------------------------------- |
| ConSteel IntermediateStiffener | IS | Represents an IntermediateStiffener in ConSteel model |

![alt text](<img/section 2.png>) 

## Macro Section

See the component in use in the script library: [Simple Cantilever Beam](https://consteelsoftware.com/script/simple-cantilever-beam/?search=).

### Inputs

| Name            | Id | Description                     |
| --------------- | -- | ------------------------------- |
| Material        | M  | The material of the section.    |
| Name            | N  | Name of the section.            |        

The rest of the inputs can dynamically change depending on the selected macro.


### Outputs

| Name             | Id      | Description      |
| ---------------- | ------- | ---------------- |
| ConSteel Section | Section | ConSteel Section |

![alt text](<img/section 2a.png>) 


## Section Bank previews

See the component in use in the script library: [Haunched frame](https://consteelsoftware.com/script/haunched-frame/).

### Inputs

| Name         | Id | Description                                                                                                                                                                    |
| ------------ | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      MacroFilter        | MF   | Filter out section previews by the provided macro codes. If left at unset, no filter is active.                                                       |                                                                                                                                                                                |
| NameFilte    | N  | Filter by the section's name (eg.: \"IPE 180\") or by a regular expression that matches the name (eg.: \"" + @"IPE [12][\d]{2}\b\" + "\"). If left empty, no filter is active. |
| OriginFilter | OF | Filter by the section bank origin, eg \"European\". If left empty no filter is active.                                                                                         |


### Outputs

| Name                     | Id       | Description                                                |
| ------------------------ | -------- | ---------------------------------------------------------- |
| ConSteel Section preview | SectPrev | Represents a Section preview from a ConSteel section bank. |



![alt text](<img/section 8.png>) 

## Section From Bank

See the component in use in the script library: [Haunched frame](https://consteelsoftware.com/script/haunched-frame/).

### Inputs

| Name           | Id | Description                                                                                                                                                    |
| -------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SectionPreview | SP | he section preview of a section from the bank. Get and filter previews using the SectionBankPreview component. Loading excessive ammounts of sections is slow. |
| Material       | M  | The material of the section.                                                                                                                                   |

### Outputs

| Name | Id | Description            |
| ---- | -- | ---------------------- |
|  Section    | S | The loaded in section. |


![alt text](<img/Section From Bank.png>)