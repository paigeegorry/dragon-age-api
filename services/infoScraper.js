const { parse } = require('node-html-parser');
const request = require('superagent');
// const nameScraper = require('./nameScraper');

const infoScraper = () => {
  return request.get('https://dragonage.fandom.com/wiki/Cremisius_Aclassi')
    .then(res => res.text)
    .then(parse)
    .then(html => {
      const labels = html.querySelectorAll('.pi-data-label').map(l => l.childNodes[0].rawText);
      const values = html.querySelectorAll('div .pi-data-value').map(v => v);
      const photoInfo = html.querySelectorAll('.pi-image-thumbnail')[0].rawAttrs.split('"')[1];
      return [labels, values, photoInfo];
      // if last label = Appearances?
      // how to map thru each childNode when it is technically an obj?
      // console.log(values[values.length - 1].childNodes[0].childNodes[0].childNodes[0].rawText);
    })
    .then(organizeInfo);
};

const organizeInfo = ([labels, values, photoInfo]) => {
  if(labels[labels.length - 1] === 'Appearances') {
    const digging = values[values.length - 1];
    console.log(digging);
    // console.log(Object.entries(digging)[0][1][1][0].childNodes);
  }
};

infoScraper();
