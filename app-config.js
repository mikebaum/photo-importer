/**
 * Created by mike on 15-06-13.
 */
var os = require('os');
var config = require( 'config' );

// read the mount file from config. FIXME: need to add an admin screen to the web app.
var platform = os.platform();
console.log( "found platform: " + platform );

module.exports = config.platform[platform];
