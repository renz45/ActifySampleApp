var a = require('Actify');
var path = require('path');
a.settings.viewsPath = path.join(__dirname, 'app', 'views')
a.init();