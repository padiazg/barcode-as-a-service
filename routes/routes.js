var express = require('express');
var path    = require('path');
var codes   = require('rescode');
var fs      = require('fs');
var gm      = require('gm');

var router  = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

 router.get('/:code', function(req, res) {   
    // wich code is requested?
    var code   = req.params.code.toLowerCase();
    
    // get parameters, overrides general parameters
    var value = req.query.value;
    
    // scale
    var scale = req.query.scale;    
    scale=scale?scale:0;
    
    // ourput format
    var format = req.query.fmt;    
    format=format?format.toLowerCase():'png';
    console.log('output_format:'+format);
    
    var bc_options={};
    var modules=[];
    
    switch (code) {
        case 'code128':
            bc_options = { 
                "includetext"     : true
                ,"guardwhitespace": true 
                ,"inkspread"      : 0
                ,"scaleX"         : scale
                ,"scaleY"         : scale
            };
            modules=["code128"];
            break;
            
        case 'code39':
            bc_options = { 
                 "includetext"    : true
                ,"guardwhitespace": true 
                ,"inkspread"      : 0
                ,"scaleX"         : scale
                ,"scaleY"         : scale
            };
            modules=["code39"];
            break;
        
        case 'ean13':
            bc_options = { 
                 "includetext"    : true
                ,"guardwhitespace": true 
                ,"inkspread"      : 0
                ,"scaleX"         : scale
                ,"scaleY"         : scale
            };
            modules=["ean2", "ean5", "ean8", "ean13"];
            break;
            
        case 'pdf417':
            bc_options = { 
                 "includetext"    : false
                ,"guardwhitespace": true
                ,"inkspread"      : 0
                ,"scaleX"         : scale
                ,"scaleY"         : scale
            };
            modules=["pdf417"];
            break;
        
        case 'qr':
            bc_options = { 
                 "includetext"    : false
                ,"guardwhitespace": true
                ,"inkspread"      : 0
                ,"scaleX"         : scale
                ,"scaleY"         : scale
            };
            modules=["qrcode"];
            code="qrcode";
            break;
            
        case 'datamatrix':
            bc_options = { 
                 "includetext"    : false
                ,"guardwhitespace": true
                ,"inkspread"      : 0
                ,"scaleX"         : scale
                ,"scaleY"         : scale
            };
            modules=["datamatrix"];
            break;
        
        default: 
            console.log('Unknown:' + code);
            res.status(404).send();
            break;
    } // switch (code)  ...

    codes.loadModules(modules, bc_options);
    var bc=codes.create(code, value);    
    
    // format output
    if (format==='jpg') {
        gm(bc).toBuffer('JPG',function (err, buffer) {
            if (err) return handle(err);
            res.type('image/jpeg');
            res.send(buffer); 
            console.log('done!');
        });
    } else {
        res.type('image/png');
        res.send(bc);           
    }
});

module.exports = router;
