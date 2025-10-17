---
sidebar_position: 6
---
# Postprocessor

The development aimed a main feature which offers an automated conversion from the resulted pressure values to usable surface loads according to the users’ preferences. It is possible to directly assign the simulation results to the structure via the premesh, or to apply a zoning logic, similar to the standard, or even define loads on specific zones (i.e., Eurocode zones).

![alt text](img/image-11.png)
_Different posprocess to obtain surface loads using the same simulation result_

The load generation procedures of the postprocessor are the following:

- Uniform surface loads on faces

- Linear surface loads on faces

- Uniform surface loads on automatic zones

- Linear surface loads on zones

- Uniform surface loads on specific zones

It is also possible to retrieve field results in specific points (i.e. velocity, turbulent kinetic energy).