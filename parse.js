var parse = require('parse-svg-path')
var translate = require('translate-svg-path')
var serialize = require('serialize-svg-path')
 
var path = parse('M178 71c-2.1 0.3-4.8 0.5-6.8 0.5c-9.6 0-14.2-2.5-14.2-14 V21l-10.2-1.2c-1.2-0.1-2-0.7-2-1.9v-2.8c0-1.2 0.8-1.9 2-1.9 h10.2V2.9c0-1 0.7-1.9 1.9-2.1l5.4-0.8c0.1 0 0.2 0 0.3 0c0.8 0 1.6 0.7 1.6 1.8v11.4h11.3c1.2 0 2.1 0.9 2.1 2.1v3.6 c0 1.2-0.9 2.1-2.1 2.1h-11.3v36.6c0 5.8 1.5 6.6 5.7 6.6h5.9c1.5 0 2.2 0.4 2.2 1.5v3.7C179.8 70.2 179.3 70.8 178 71z')
var x = translate(path, 20)
var xy = translate(path, 20, 10)
 
serialize(x)
// => 'M30 10 L35 15' 
 
serialize(xy)
// => 'M30 20 L35 25' 