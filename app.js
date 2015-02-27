var actify = require('Actify');
var path = require('path');

actify.settings.viewsPath = path.join(__dirname, 'app', 'views');
actify.init();