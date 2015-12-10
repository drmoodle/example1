#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("echo shell.exec works");

// do a commit
shell.exec("git add -A . && git commit -a -m 'gh-pages update'");
