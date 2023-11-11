const fs = require('fs');

const path = './node_modules/react-native-reanimated/lib/module/index.web.js';

let data = fs.readFileSync(path, 'utf-8');

data = data.replace('{ _default as default }', 'default _default');


fs.writeFileSync(path, data);