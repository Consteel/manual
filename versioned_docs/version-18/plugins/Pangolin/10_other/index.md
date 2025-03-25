# Other

**Layer, dynamic model object deconstruct.**

## Consteel Layer

See the component in use in the script library: [Truss configurator - Advanced](https://consteelsoftware.com/script/truss-configurator-advanced/).

### Inputs

| Name         | Id | Description                       |
| ------------ | -- | --------------------------------- |
| Locked       | L  | Should be the layer locked?       |
| Name         | N  | Name of the CSLayer               |
| UseTypeStyle | U  | Should the layer use type styles? |
| Visible      | V  | Should be the layer visible?      |
| Color        | C  | Color of the layer style.         |

### Outputs

| Name    | Id  | Description                           |
| ------- | --- | ------------------------------------- |
| CSLayer | CSL | Represents a Layer in ConSteel model. |

![alt text](<img/other 3.png>) 

## Get CS Beam's Mesh

See the component in use in the script library: [Tapered frame with results](https://consteelsoftware.com/script/tapered-frame-with-results/).

### Inputs

| Name | Id | Description          |
| ---- | -- | -------------------- |
| Beam | B  | Consteel beam object |

### Outputs

| Name | Id | Description                                                                                 |
| ---- | -- | ------------------------------------------------------------------------------------------- |
| Mesh | M  | Meshes describing the beam. Note: can be multiple meshes in case of complex cross sections. |

![alt text](<img/other 1.png>) 

## Get CS Name

See the component in use in the script library: [Purlin distribution, evaluation and model merging](https://consteelsoftware.com/script/purlin-distribution-evaluation-and-model-merging/).

### Inputs

| Name        | Id | Description                               |
| ----------- | -- | ----------------------------------------- |
| ModelObject | O  | Consteel model object with name attribute |

### Outputs

| Name | Id | Description                                                                                  |
| ---- | -- | -------------------------------------------------------------------------------------------- |
| Name | N  | Name of the given object. Note: unlike GUIDs, names are not forced to be unique in Consteel. |

![alt text](<img/other 2.png>)