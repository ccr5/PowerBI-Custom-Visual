[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <h3 align="center">PowerBI-Custom-Visual</h3>

  <p align="center">
    *-* A little bar chart *-*
    <br />
    <a href="https://github.com/ccr5/PowerBI-Custom-Visual"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ccr5/PowerBI-Custom-Visual/issues">Report Bug</a>
    ·
    <a href="https://github.com/ccr5/PowerBI-Custom-Visual/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#create-a-new-visual ">Create a new visual </a></li>
      </ul>
    </li>
    <li>
        <a href="#usage">Usage</a>
        <ul>
            <li><a href="#development">development</a></li>
            <li><a href="#power-bi">Power BI</a></li>
        </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#links">Links</a></li>
  </ol>
</details>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/ccr5/PowerBI-Custom-Visual)

This repository is a bar chart example developed to use on Power BI.

### Built With

* [Power BI](https://powerbi.microsoft.com)
* [Node JS](https://nodejs.org)
* [Power BI Visual Tools](https://www.npmjs.com/package/powerbi-visuals-tools)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

**Server:**
1. Install PowerBI Visuals Tools
```sh
npm install -g powerbi-visuals-tools
```
2. Install certificates
```sh
pbiviz --install-cert
```
3. go to path of your certificate
4. right click and install PFX
5. insert your passphrase
6. in certificate store, select “place all certificates in the folow store and choose “Trust roots certification authorities”

**View:**
1. Publish custom_visual.pbix on Power BI Service
2. On Power BI Service, enable personalite visual depuration to developer


### Create a new visual 

**Just to new projects**
1. create a folder to your project
2. create a new visual
```sh
pbiviz new barchart
```
3. Start your server
```sh
pbiviz start
```

## Usage

### Development
1. install all packages 
```sh
cd barchart && npm install
```
2. Start server
```sh
pbiviz start
```
3. Open a project with a develop visual in Power BI

### Power BI 
1. / -> run pbiviz package **Just to new projects**
2. On Power BI Desktop -> File -> Power BI visual from file -> ../PowerBI-Custom-Visual/barchart/dist/BarchartD..

## Roadmap

See the [open issues](https://github.com/ccr5/PowerBI-Custom-Visual/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Matheus Nobre Gomes - matt-gomes@live.com

Project Link: [https://github.com/ccr5/PowerBI-Custom-Visual](https://github.com/ccr5/PowerBI-Custom-Visual)

## Links
[Microsoft Docs - Custom visuals](https://docs.microsoft.com/en-us/power-bi/developer/visuals/custom-visual-develop-tutorial "Microsoft Docs")

[D3.js Docs](https://d3js.org/ "D3.js Docs")


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ccr5/PowerBI-Custom-Visual.svg?style=for-the-badge
[contributors-url]: https://github.com/ccr5/PowerBI-Custom-Visual/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ccr5/PowerBI-Custom-Visual.svg?style=for-the-badge
[forks-url]: https://github.com/ccr5/PowerBI-Custom-Visual/network/members
[stars-shield]: https://img.shields.io/github/stars/ccr5/PowerBI-Custom-Visual.svg?style=for-the-badge
[stars-url]: https://github.com/ccr5/PowerBI-Custom-Visual/stargazers
[issues-shield]: https://img.shields.io/github/issues/ccr5/PowerBI-Custom-Visual.svg?style=for-the-badge
[issues-url]: https://github.com/ccr5/PowerBI-Custom-Visual/issues
[license-shield]: https://img.shields.io/github/license/ccr5/PowerBI-Custom-Visual.svg?style=for-the-badge
[license-url]: https://github.com/ccr5/PowerBI-Custom-Visual/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mattnobre
[product-screenshot]: visual.PNG
