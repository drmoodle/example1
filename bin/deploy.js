#! /usr/bin/env node
var shell = require("shelljs");
console.log("\npushing to github")
shell.exec("github-pages-commit && github-pages-push");
