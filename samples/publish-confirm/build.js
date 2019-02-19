const fs = require('fs');
const path = require('path');

const ENC = { encoding: 'utf8' };
const SCRIPT_PLACEHOLDER = '<placeholder>SCRIPT_PLACEHOLDER</placeholder>';
const STYLES_PLACEHOLDER = '<placeholder>STYLES_PLACEHOLDER</placeholder>'

const resolve = file => path.resolve(__dirname, file);
const read = file => fs.readFileSync(resolve(file), ENC);

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style type="text/css">${STYLES_PLACEHOLDER}</style>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">${SCRIPT_PLACEHOLDER}</script>
  </body>
</html>
`;

let result = html;

result = result.replace(SCRIPT_PLACEHOLDER, read('./build/index.js'));
result = result.replace(STYLES_PLACEHOLDER, read('./build/index.css'));

fs.writeFileSync(resolve('./build/index.html'), result, ENC);
