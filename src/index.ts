#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { createWeeklyReport } from './write';
import { date } from './date';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

program
  .version('0.1.0');

// create command
program.command('create')
  .description('Create Weekly Report')
  .option("-n, --name <name>", "Your name")
  .option("-p, --prevent <prefile>", "Prevent file")
  .option("-f, --filename <filename>", "Output file name")
  .action(function (cmd: any, options: any) {
    console.table(options)
    const name = 'name' in cmd ? cmd.name : 'name';
    const prevent = 'prevent' in cmd  ? cmd.prevent : 'prevent';
    const out = 'out' in cmd ? cmd.out : `${outFileName(name)}`;
    console.log('start creating weekly report');
    console.log(name, prevent, out);
    createWeeklyReport(name, out);
  });

program
  .parse(process.argv);

function outFileName(name: string): string {
  return `WeeklyReport_${date(0).year}${date(0).month}${date(0).day}_${name}`;
}
