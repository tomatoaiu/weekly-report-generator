#!/usr/bin/env node
"use strict";
/**
 * Module dependencies.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var write_1 = require("./write");
var date_1 = require("./date");
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
program
    .version('0.1.0');
// create command
program.command('create')
    .description('Create Weekly Report')
    .option("-n, --name <name>", "Your name")
    .option("-p, --prevent <prefile>", "Prevent file")
    .option("-f, --filename <filename>", "Output file name")
    .action(function (cmd, options) {
    console.table(options);
    var name = 'name' in cmd ? cmd.name : 'name';
    var prevent = 'prevent' in cmd ? cmd.prevent : 'prevent';
    var out = 'out' in cmd ? cmd.out : "" + outFileName(name);
    console.log('start creating weekly report');
    console.log(name, prevent, out);
    write_1.createWeeklyReport(name, out);
});
program
    .parse(process.argv);
function outFileName(name) {
    return "WeeklyReport_" + date_1.date(0).year + date_1.date(0).month + date_1.date(0).day + "_" + name;
}
