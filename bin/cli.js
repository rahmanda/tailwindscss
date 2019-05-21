#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const [,, ...args] = process.argv;

if (args[0] === 'init') {
  const configFilename = 'tailwind.config.scss';
  const configFilepath = path.resolve(__dirname, '../' + configFilename);
  const targetPath = path.join(process.cwd(), configFilename);

  if (fs.existsSync(targetPath)) {
    console.error('File tailwind.config.scss is already existed in your current directory!');
    process.exit(0);
  }

  fs.copyFile(configFilepath, targetPath, function err(error) {
    if (error) {
      throw error;
    }
    console.log('File tailwind.config has been generated in your current directory');
  });
}

else {
  console.error('Input command is invalid!');
}
