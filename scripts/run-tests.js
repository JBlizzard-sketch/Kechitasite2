const fs = require('fs');
const paths = [
  'src/pages/index.js',
  'src/pages/services.js',
  'src/pages/products.js',
  'src/pages/industries.js',
  'src/pages/contact.js',
  'src/pages/blog/index.js',
  'src/lib/content.js',
  'netlify.toml',
  'package.json'
];
let ok = true;
paths.forEach(p => {
  if(!fs.existsSync(p)){ console.error('MISSING', p); ok = false; }
});
if(!ok){ process.exit(2); } else { console.log('Basic smoke tests passed'); }
