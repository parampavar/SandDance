const fs = require('fs');
fs.copyFileSync('./dist/css/sanddance-app.css', '../../docs/app-3.0.0-alpha.3/css/sanddance-app.css');
fs.copyFileSync('./dist/umd/sanddance-app.js', '../../docs/app-3.0.0-alpha.3/js/sanddance-app.js');
