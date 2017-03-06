    var colors = require('colors');
    var NwBuilder = require('nw-builder');	
    
    var nw = new NwBuilder({
        appName:'Wallet',
        appVersion:'0.0.1',
        macIcns:'resources/mac/app.icns',
		files:'./www/**/**',
		buildDir:'webkitbuilds',
		platforms:['osx64','linux64','win64'],
        manifestUrl:'https://cssxn.github.io/versions.json',
        version:'0.20.3'
	});

    // Log
    nw.on('log',console.log);
    
   // Build    
    nw.build().then(function(){
        console.log('Build Success! Preparing compile DMG file'.green);
    }).catch(function(err){
        console.log('Build Failedl'.red,err);
        console.log('到这里下载SDK：https://cnpmjs.org/mirrors/nwjs/'.green);
    });


