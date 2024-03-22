---
sidebar_position: 5
---
# Creating response spectrums

With the **Create response spectrum **(![](./img/wp-content-uploads-2021-04-cmd_response_spectrum.png)) function, two types of response spectrums can be defined:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Standard elastic spectrum: Response spectrum definition according to the selected standard and national annex. Parameters for the definition may vary in different annexes.
- User-defined response spectrum: Response spectrum definition by defining the points of the spectrum manually

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":10470,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-6-CREATING-RESPONSE-SPECTRUMS.png)](./img/wp-content-uploads-2021-04-7-6-CREATING-RESPONSE-SPECTRUMS.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### New standard elastic response spectrum

<!-- /wp:heading -->

<!-- wp:paragraph -->

By choosing the **New Standard elastic spectrum** option, the spectrum can be created according to the active national which can be used later for response spectrum analysis, and earthquake calculations.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":10476,"width":296,"height":377,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-6-1-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)](./img/wp-content-uploads-2021-04-7-6-1-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

According to the recommended values of _EuroCode_, the following parameters are necessary for the definition of an elastic response spectrum:

<!-- /wp:paragraph -->

<!-- wp:list -->

- \_Type of spectrum: \_the dropdown menu is filled up with the possible types of the active annex
- _Importance class:_ with the dropdown menu, the importance class of the structure can be selected. Value for each selected class is written into the edit box, next to the dropdown menu, according to the selected annex
- _Ground type_: with the (![](./img/wp-content-uploads-2021-04-3dots-button.png)) button, the type of ground below the structure can be selected. At the bottom of the pop-up dialogue, all of the parameters are represented with their values, according to the active annex.
- _Ground acceleration - agR \[m/s2]:_ can be defined manually through the edit box, or by clicking on the (![](./img/wp-content-uploads-2021-04-3dots-button.png)) button, it can be chosen by clicking on a region on the built-in maps:

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":10482,"width":437,"height":330,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-6-1.2-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)](./img/wp-content-uploads-2021-04-7-6-1.2-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)

<!-- /wp:image -->

<!-- wp:list -->

- _Vertical acceleration - avg/ag: can not be edited, it is for informative purposes. It shows the actual used value according to the active annex._

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":10488,"width":440,"height":484,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-6-1.3-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)](./img/wp-content-uploads-2021-04-7-6-1.3-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

On the bottom of the Elastic response spectrum dialogue, the defined spectrum is given graphically too. By hovering the cursor above the graph, the value of each point can be obtained. Switching between vertical/horizontal spectrums can be performed using the dropdown menu.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10494,"width":408,"height":200,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7-6-1.4-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)](./img/wp-content-uploads-2021-04-7-6-1.4-NEW-STANDARD-ELASTIC-RESPONSE-SPECTRUM.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### New user defined response spectrum

<!-- /wp:heading -->

<!-- wp:paragraph -->

ConSteel provides two ways for the definition of **new user defined response spectrums**:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10500,"width":582,"height":194,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7.6.2.-NEW-USER-DEFINED-RESPONSE-SPECTRUM.png)](./img/wp-content-uploads-2021-04-7.6.2.-NEW-USER-DEFINED-RESPONSE-SPECTRUM.png)

<!-- /wp:image -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. Response spectrum can be created manually from scratch, by simply clicking on the **Create **button
2. Response spectrum creation based on an existing standard spectrum, by cloning and modifying it. If the _Clone an existing response spectrum_ checkbox is checked in, the dropdown menu of the previously defined spectrums will become active. By choosing a standard response spectrum, and clicking on the **Create **button, modification of the selected spectrum can be started.

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Manual definition of response spectrum

<!-- /wp:heading -->

<!-- wp:paragraph -->

After selecting the New User defined response spectrum option, and clicking on the create button, the creation dialogue will appear.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":10506,"width":467,"height":512,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/7.6.2.1-MANUAL-DEFINITION-OF-RESPONSE-SPECTRUM.png)](./img/wp-content-uploads-2021-04-7.6.2.1-MANUAL-DEFINITION-OF-RESPONSE-SPECTRUM.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

On the _Response spectrum parameters_ part (#1), the following parameters has to be set:

<!-- /wp:paragraph -->

<!-- wp:list -->

- _Ground acceleration -_ \_a \[m/s2]: \_can be defined manually through the editbox, or by clicking on the (![](./img/wp-content-uploads-2021-04-3dots-button.png)) button, it can be chosen by clicking on a region on the built-in maps.
- Vertical acceleration _av/a: ratio of the vertical/horizontal acceleration can be set in the editbox_
- _Type of the response spectrum:_ Design or Elastic response spectrum can be chosen. Design response spectrum will be used in design situations, while elastic response spectrum will be used in case of serviceability situations

<!-- /wp:list -->

<!-- wp:paragraph -->

In the \_Edit spectrum points \_part of the dialogue, the graph of the response spectrum can be defined, by giving the time parameter in seconds, and the corresponding spectrum value divided by the acceleration.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Any number of columns can be added to the spectrum definition grid. By pressing the ![](./img/wp-content-uploads-2021-04-spectr_add_col.png), new columns can be added. Using the ![](./img/wp-content-uploads-2021-04-spectr_remove_col.png), columns can be deleted.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A newly defined user response spectrum is the same in all (X,Y,Z) directions. If it is necessary, different spectrums can be defined for each direction, using the dropdown menu on the dialogue.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The data of the spectrum can be saved in \*.csv and \*.txt format, using the ![](./img/wp-content-uploads-2021-04-cmd_save.png) button.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Previously created and saved spectrums can be imported using the ![](./img/wp-content-uploads-2021-04-cmd_open.png) button

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Manual definition of response spectrum, based on a cloned standard spectrum

<!-- /wp:heading -->

<!-- wp:paragraph -->

After selecting the **New user defined response spectrum** by cloning an existing response spectrum, and pressing the **Create **button, the modification of the selected standard spectrum can be started. All points of the standard design spectrum will automatically be loaded into the table of the definition dialogue, where any point and parameter is free for to edit.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

All of the modification options are the same as it is written in chapter **_[Manual definition of response spectrum, Chapter 7.6.2.1](#Manual-definition-of-response-spectrum)_**

<!-- /wp:paragraph -->
