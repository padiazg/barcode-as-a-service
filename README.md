#Barcode as a service
Can generate:
* EAN13
* CODE39
* CODE128
* PDF417
* QR

#Install
You need [node.js](https://nodejs.org) to run this project.

Install dependencies:
``npm install``

Run the service
``node barcode-service``

#Usage
Point your browser to http://localhost:3000/ to see a basic example

The syntax is: 
`http://serverhost:port/<barcode>?text=<your_code>`

where

Examples:

**EAN13**  
`http://localhost:3000/ean13?text=7840058004215`

**CODE39**  
`http://localhost:3000/code39?text=12345678`

**CODE128**
`http://localhost:3000/code128?text=98380d7d-85df-456f-901d-3b325ee86e07`

**PDF417**
`http://localhost:3000/pdf417?text=patricio+antonio+diaz+gimenez`

**QR**
`http://localhost:3000/qr?text=patricio+antonio+diaz+gimenez`

#License
GPL v3

#Keep in touch
Patricio Diaz <padiazg@gmail.com>

> Written with [StackEdit](https://stackedit.io/).