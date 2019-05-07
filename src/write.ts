import { date } from './date';

const fs = require('fs');

export function createWeeklyReport(name: string, fileName: string) {
  const dest = fs.createWriteStream(`${fileName}.md`, 'utf8');

  dest.write(`
■週間報告書(Weekly Report)
報告週　${date(-7).year}/${date(-7).month}/${date(-7).day}-${date(0).year}/${date(0).month}/${date(0).day}
報告者　${name}

■１．総括、特記事
(1) title : time


■２．個別報告
${date(-6).month}/${date(-6).day}(${date(-6).date}) : 
${date(-5).month}/${date(-5).day}(${date(-5).date}) : 
${date(-4).month}/${date(-4).day}(${date(-4).date}) : 
${date(-3).month}/${date(-3).day}(${date(-3).date}) : 
${date(-2).month}/${date(-2).day}(${date(-2).date}) : 
${date(-1).month}/${date(-1).day}(${date(-1).date}) : 
${date( 0).month}/${date( 0).day}(${date( 0).date}) : 

■３．その他報告


■４．次週予定
${date(1).month}/${date(1).day}(${date(1).date}) : 
${date(2).month}/${date(2).day}(${date(2).date}) : 
${date(3).month}/${date(3).day}(${date(3).date}) : 
${date(4).month}/${date(4).day}(${date(4).date}) : 
${date(5).month}/${date(5).day}(${date(5).date}) : 
${date(6).month}/${date(6).day}(${date(6).date}) : 
${date(7).month}/${date(7).day}(${date(7).date}) : 
`);
}
