# Installing FALCON


To utilize the wind simulation feature initially, users are required to install the **FALCON plugin**. This plugin can be accessed via the Consteel website under the “Downloads” section. Within the plugins category, select  “Consteel 18” and proceed to download the “FALCON” plugin.
Starting from Consteel 18 the Plugin is compatible. 

![alt text](img/downloads.png)
 
After downloading the plugin .exe file, ensure that you check the “Install OpenFOAM” checkbox if it was **not** installed previously. Then, press “Next.”

### Is there an OpenFOAM installation on your computer?


### YES
*** 
![alt text](image-4.png)

-  If OpenFOAM is already installed but you check the checkbox anyway, the following message will appear:

_"An OpenFOAM installation is already detected on your device. Would you like to install another instance? Install OpenFOAM."_

If you press Install, a new OpenFOAM instance will be installed, which will **slow down** the installation process. It is recommended to go **Back** and uncheck the installation checkbox.

-  Press **Next** on the Select _Additional Tasks_ window.

-  On the _Ready to Install_ page, press **Install**.

-  On the final window, _Completing the FalconPlugin 1 Setup Wizard_, press **Finish**.

 ![alt text](image-3.png)

### NO

*** 
![alt text](image-5.png)

•	If OpenFOAM is **not** already installed, the following message will appear:

_"No OpenFOAM installation was found on your device. You need to install it before proceeding. Install OpenFOAM."_

• **Do not use Consteel** while installing the plugin. If the software is open, the following message will appear:

_"The following applications are using files that need to be updated by Setup. It is recommended that you allow Setup to automatically close these applications. After the installation has completed, Setup will attempt to restart the applications."_

•	Press **Install** to continue the installation.

•	On the _Welcome to OpenFOAM_ for Windows Setup window, press **Next**.

•	On the _Preliminaries_ window, check the **Skip this feature** checkbox and press **Next**.
![alt text](image-7.png)
 
•	On the following seven windows, press **Next** and **Install** without changing the default settings.
•	When you reach the Complete the Microsoft MPI Setup Wizard window, press **Finish**.

 ![alt text](image-8.png)

•	After the Microsoft MPI installation is completed by pressing **OK**, Cygwin and OpenFOAM need to be installed in five steps:
- 	Step 1: Installing Open FOAM
- 	Step 2: Install ParaView – It is recommended only for research purposes; for regular engineering projects, users can skip the installation of ParaView.

   ![alt text](image-9.png)

- 	Step 3: Install swak4Foam
- 	Step 4: Install PyFoam
- 	Step 5: Install Gnuplot

•	Next, the language needs to be selected for the installation. Press **OK**.

•	On the following window, the _License Agreement_ has to be accepted. Press **Next**.

•	Press **Next** on the _Information_ window.

•	Select the destination location and components, then press **Next**.

•	Select the _Start Menu Folder_, and press **Next**.

•	Additional tasks can be selected; then press **Install** on the _Ready to Install_ window.

•	Press **Next** on the Information window, then **Finish**.
   
   ![alt text](image-10.png)
 

If the installation was **successful**, upon opening **Consteel 18**, two new FALCON icons will appear on the Loads tab.
-	**FALCON – Wind simulation**  ![alt text](image-14.png)
-	**FALCON- Wind Load generation from simulation results** ![alt text](image-15.png)


![alt text](image-13.png)