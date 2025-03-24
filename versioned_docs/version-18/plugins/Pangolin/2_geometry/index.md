# Geometry

**Arcs, lines, polygons.**

### CS Arc From Arc

### Inputs

| Name | Id | Description        |
| ---- | -- | ------------------ |
| Arc  | A  | Standard Rhino arc |

### Outputs

| Name         | Id | Description                          |
| ------------ | -- | ------------------------------------ |
| ConSteel Arc | A  | Represents an arc in ConSteel model. |

![alt text](<img/geometry 1.png>)

### CS Line From Line

See the component in use in the script library: [Simple Cantilever Beam](https://consteelsoftware.com/script/simple-cantilever-beam/?search=).

### Inputs

| Name           | Id      | Description                           |
| -------------- | ------- | ------------------------------------- |
| ConSteel Layer | CSLayer | Represents a Layer in ConSteel model. |
| Line           | L       | The native line                       |

### Outputs

| Name          | Id   | Description                          |
| ------------- | ---- | ------------------------------------ |
| ConSteel Line | CS L | Represents a Line in ConSteel model. |

![alt text](<img/geometry 2.png>)

### CS Polygon From Polygon


### Inputs

| Name     | Id  | Description                           |
| -------- | --- | ------------------------------------- |
| Polyline | P   | Standard Rhino polyline curve         |
| Hole     | H   | Standard Rhino polyline curve         |
| CSLayer  | CSL | Represents a Layer in ConSteel model. |

### Outputs

| Name             | Id | Description                                                  |
| ---------------- | -- | ------------------------------------------------------------ |
| ConSteel Polygon | P  | Represents a polygon in ConSteel model (closed, and simple.) |


![alt text](<img/geometry 3.png>)