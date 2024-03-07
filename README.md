[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/en/download/)

# yaml-loader
## Install
```cmd
npm i git@github.com:David-Vandensteen/yaml-loader.git#release/1.0.0
```

This function reads and parses YAML configuration files.  
The function searches for the specified YAML file and returns the corresponding configuration object.  
If the YAML file is not found, it looks for fallback files in the provided order and returns the configuration object from the first found file.  
If no file is found, an error is thrown.  

```javascript
try {
  const config = YAMLLoader('config.yaml', { fallBack: ['config.production.yaml', 'config.default.yaml'] });
  console.log('Database configuration:', config.db);
  // Use the config object to connect to the database
} catch (err) {
  console.error('Error loading configuration:', err);
}
```
