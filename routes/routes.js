var express = require('express');
var path    = require('path');
var codes   = require('rescode');

var router  = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/code128', function(req, res, next) {
    var value = req.query.value;

    var bc_options = { 
        "includetext"     : false
        ,"guardwhitespace": false 
        ,"inkspread"      : 0
        ,"scaleX"         : 2
        //,"textyoffset"    : -15
    };

    codes.loadModules(["code128"], bc_options);
    var bc =  codes.create("code128", value);
  
    res.type('image/png');
    res.send(bc);
});

router.get('/code39', function(req, res, next) {
    var value = req.query.value;
    
    var bc_options = { 
        "includetext"     : false
        ,"guardwhitespace": false 
        ,"inkspread"      : 0
        ,"scaleX"         : 2 
        //,"textyoffset"    : -15
    };
    
    codes.loadModules(["code39"], bc_options);
    var bc =  codes.create("code39", value);
   
    res.type('image/png');
    res.send(bc);
    //code128_image.pipe(res);

});

router.get('/ean13', function(req, res, next) {
    var value = req.query.value;

    var bc_options = { 
         "includetext"    : true
        ,"guardwhitespace": true 
        ,"inkspread"      : 0
        ,"scaleX"         : 2
        ,"scaleY"         : 2
        //,"textyoffset"    : -15
    };
  
    codes.loadModules(["ean2", "ean5", "ean8", "ean13"], bc_options);
    var bc =  codes.create("ean13", value);
    
    res.type('image/png');
    res.send(bc);

});

router.get('/pdf417', function(req, res, next) {
    var value = req.query.value;

    var bc_options = { 
         "inkspread": 0
        ,"scaleX"   : 3
        //,"scaleY"   : 3
    };
  
    codes.loadModules(["pdf417"], bc_options);
    var bc =  codes.create("pdf417", value);
    
    res.type('image/png');
    res.send(bc);

});

router.get('/qr', function(req, res, next) {
    var value = req.query.value;

    var bc_options = { 
        "eclevel": "Q" , 
        "version": "4", 
        "scaleX" : 3, 
        "scaleY" : 3
    };
   
    codes.loadModules(["qrcode"], bc_options);
    var bc =  codes.create("qrcode", value);
    
    res.type('image/png');
    res.send(bc);

});

module.exports = router;
