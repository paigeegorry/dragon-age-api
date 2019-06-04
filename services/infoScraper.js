const { parse } = require('node-html-parser');
const request = require('superagent');
// const nameScraper = require('./nameScraper');

const infoScraper = () => {
  return request.get('https://dragonage.fandom.com/wiki/Cole')
    .then(res => res.text)
    .then(parse)
    .then(html => {
      const labels = html.querySelectorAll('.pi-data-label').map(l => l.childNodes[0].rawText);
      const values = html.querySelectorAll('div .pi-data-value').map(v => v);

      // if last label = Appearances?
      // how to map thru each childNode when it is technically an obj?
      console.log(values[values.length - 1].childNodes[0].childNodes[0].childNodes[0].rawText);
    });
};

infoScraper();
