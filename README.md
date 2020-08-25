# PowerBI-Custom-Visual
*-* A little bar chart *-*


------------


### Description
This repository is a bar chart example developed to use on Power BI.


------------


### Requirements
* Power BI Desktop & Service
* Node JS


------------


### Install dependencies

**Server:**
1. run npm install -g powerbi-visuals-tools
2. run pbiviz --install-cert
3. go to path of your certificate
4. right click and install PFX
5. insert your passphrase
6. in certificate store, select “place all certificates in the folow store and choose “Trust roots certification authorities”

**View:**
1. Publish custom_visual.pbix on Power BI Service
2. On Power BI Service, enable personalite visual depuration to developer


##### Create a new visual (Just to new projects)
1. create a folder to your project
2. run pbiviz new barchart
3. in barchart folder, run pbiviz start to run your server


------------


### Usage

##### Development
1. install all packages using npm install
2. Start server (pbiviz start)
3. Open a project with a develop visual

##### Power BI 
1. / -> run pbiviz package !!!Just to new projects!!!
2. On Power BI Desktop -> File -> Power BI visual from file -> ../PowerBI-Custom-Visual/barchart/dist/BarchartD..


------------


### Links
[Microsoft Docs - Custom visuals](https://docs.microsoft.com/en-us/power-bi/developer/visuals/custom-visual-develop-tutorial "Microsoft Docs")

[D3.js Docs](https://d3js.org/ "D3.js Docs")
