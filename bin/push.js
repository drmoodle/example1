#! /usr/bin/env node
var shell = require("shelljs");

console.log("\npushing to github")

shell.exec("git push origin master --force");
