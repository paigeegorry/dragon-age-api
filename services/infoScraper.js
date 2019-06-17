const { parse } = require('node-html-parser');
const request = require('superagent');
// const nameScraper = require('./nameScraper');

const reformatData = ({ labels, values, photoInfo, name }) => {
  const obj = {};
  labels.map((label, i) => {
    if(label === 'Appearances') {
      const appearances = values[i].innerHTML.split('"');
      obj.appearances = appearances.map((val, i) => {
        if(val === ' title=') return appearances[i + 1];
      }).filter(str => str);
    }
    else if(label === 'Quests') {
      const quests = values[i].innerHTML.split('"');
      obj.quests = quests.map((val, i) => {
        if(val === ' title=') return quests[i + 1];
      }).filter(str => str);
    }
    else if(label === 'Affiliation') {
      const affiliations = values[i].text.split('  ');
      obj.affiliations = affiliations.filter(aff => !aff.includes('('));
    }
    else {
      obj[label.toLowerCase()] = values[i].text;
    }
    obj.photo = photoInfo;
    obj.name = name;
    // console.log(label);
  });
  console.log(obj);
};

const infoScraper = () => {
  return request.get('https://dragonage.fandom.com/wiki/Iron_Bull')
    .then(res => res.text)
    .then(parse)
    .then(html => {
      const labels = html.querySelectorAll('.pi-data-label').map(l => l.childNodes[0].rawText);
      const values = html.querySelectorAll('div .pi-data-value');
      const photoInfo = html.querySelectorAll('.pi-image-thumbnail')[0].rawAttrs.split('"')[1];
      const name = html.querySelectorAll('.selflink')[0].text;
      return { labels, values, photoInfo, name };
    })
    .then(reformatData);
};

infoScraper();
