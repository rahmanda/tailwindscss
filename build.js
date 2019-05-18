const path = require('path');
const fs = require('fs');
const sass = require('node-sass');

sass.render(
  {
    file: path.resolve(__dirname, './tailwind.scss'),
  },
  function done(sassError, result) {
    if (!sassError) {
      const outputFile = path.join(__dirname, './tailwind.css');
      fs.writeFile(outputFile, result.css, function err(fsError) {
        if (fsError) {
          console.log('There is an error when writing css file.');
          console.log(fsError);
        }
      });
    } else {
      console.log('There is an error when parsing sass file.');
      console.error(sassError);
    }
  }
);
