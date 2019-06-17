const { parse } = require('node-html-parser');
const request = require('superagent');
const nameScraper = require('./nameScraper');

const reformatData = ({ labels, values, photoInfo, name }) => {
  const obj = {};
  obj.photo = photoInfo;
  obj.name = name;
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
      obj.affiliation = affiliations.filter(aff => !aff.includes('('));
    }
    else if(label === 'Title') {
      obj.title = values[i].structuredText.split('\n');
    }
    else if(label === 'Family') {
      obj.family = values[i].structuredText.split('\n');
    }
    else {
      obj[label.toLowerCase()] = values[i].text;
    }
  });
  console.log(obj);
  return obj;
};

const infoScraper = async() => {
  const names = await nameScraper();
  return names.map(name => {
    return request.get(`https://dragonage.fandom.com/wiki/${name}`)
      .then(res => res.text)
      .then(parse)
      .then(html => {
        const labels = html.querySelectorAll('.pi-data-label').map(l => l.structuredText);
        const values = html.querySelectorAll('div .pi-data-value');
        const photoInfo = html.querySelectorAll('.pi-image-thumbnail') ? html.querySelectorAll('.pi-image-thumbnail')[0].rawAttrs.split('"')[1] : 'https://pbs.twimg.com/profile_images/514121481702227968/XxIE7ASP_400x400.jpeg';
        const name = html.querySelectorAll('.selflink') ? html.querySelectorAll('.selflink')[0].text : '';
        return { labels, values, photoInfo, name };
      })
      .then(reformatData)
      .catch(err => console.log(err, name));
  });
};

infoScraper();
