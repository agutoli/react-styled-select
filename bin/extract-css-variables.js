#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require("glob")

glob("src/**/*.js", {}, function (er, files) {
  const variables = {};
  const pattern = /\-\-styled\-select\-([\w-]*)/g
  files.forEach((file) => {
    const filename = path.resolve(`${__dirname}/../`, file);
    const data = fs.readFileSync(filename, "utf8");
    const res = data.replace(/\n|\s\s+/g, ' ')
    let a;
    while(a = pattern.exec(res)) {
      variables[a[0]] = path.basename(file);
    }
  })
  Object.keys(variables).sort().forEach((varname, _filename) => {
    console.log(varname);
  });
});
