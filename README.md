#Barcode as a service
A service that allows you to generate barcodes for:
* EAN13
* CODE39
* CODE128
* PDF417
* QR
* DataMatrix
* Interleaved 2 of 5

#Install
You need [node.js](https://nodejs.org) and [NPM](https://www.npmjs.com/) to run this project. In order to generate output images in JPG format you'll also need [GraphicsMagick](http://www.graphicsmagick.org/).

Install dependencies:
``npm install``

* In case you need to generate images in JPG format, download and install the version of GraphicsMagick that suits your system. For this project there is no need to worry about GhostScript and fonts.

Run the service
``node barcode-service``

#Usage
Point your browser to http://localhost:3000/ to see a basic example

The syntax is: 
`http://serverhost:port/<barcode>?value=<your_code>&scale=<value>&fmt=<PNG|JPG>`

where:

___server___ and ___port___ are where you are running the service  
___barcode___ is the barcode or code solicited  
___value___ is the value to generate  
___scale___ is is the scale for the image (defaults to 0)  
and ___fmt___ is the desired image format, posible values are PNG and JPG, defaults to PNG.

###Examples:

**EAN13**  
`http://localhost:3000/ean13?value=7840058004215`

**CODE39**  
`http://localhost:3000/code39?value=12345678`

**CODE128**  
`http://localhost:3000/code128?value=98380d7d-85df-456f-901d-3b325ee86e07`

**PDF417**  
`http://localhost:3000/pdf417?value=patricio+antonio+diaz+gimenez`

**QR**  
`http://localhost:3000/qr?value=patricio+antonio+diaz+gimenez`

**DataMatrix**  
`http://localhost:3000/datamatrix?value=patricio+antonio+diaz+gimenez`

**Interleaved2of5**  
`http://localhost:3000/interleaved2of5?value=1234567890`

#Roadmap
This service uses [rescode](https://www.npmjs.com/package/rescode) to generate the codes. This component can generate a lot of codes but I only needed those used in this project. It's possible to implement the rest of the codes if someone needs it. 

#License
GPL v3

#Keep in touch
Patricio Diaz <padiazg@gmail.com>  

> Written with [StackEdit](https://stackedit.io/).
