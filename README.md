#Barcode as a service
Can generate:
* EAN13
* CODE39
* CODE128
* PDF417
* QR

#Install
You need [node.js](https://nodejs.org) and NPM(https://www.npmjs.com/) to run this project.

Install dependencies:
``npm install``

Run the service
``node barcode-service``

#Usage
Point your browser to http://localhost:3000/ to see a basic example

The syntax is: 
`http://serverhost:port/<barcode>?value=<your_code>`

where ___server___ and ___port___ are where you are running the service, ___barcode___ is the barcode or code solicited and ___value___ is the value to generate.

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

#License
GPL v3

#Keep in touch
Patricio Diaz <padiazg@gmail.com>  

> Written with [StackEdit](https://stackedit.io/).
