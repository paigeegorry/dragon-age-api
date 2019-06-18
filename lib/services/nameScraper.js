const { parse } = require('node-html-parser');
const request = require('superagent');

const queries = [
  'Cousland%2C+Oriana%0AOriana+Cousland',
  'Hammerspur%2C+Thaulid%0AThaulid+Hammerspur',
  'Madrigal%0AMadrigal',
  'Rylen',
  'Zinovia%2C+Eleni%0AEleni+Zinovia'
];

module.exports = () => {
  return Promise.all(queries.map(query => {
    return request.get(`http://dragonage.fandom.com/wiki/Category:Characters?from=${query}`)
      .then(res => res.text)
      .then(parse)
      .then(findCharLink)
      .then(findCharNames);
  }))
    .then(([array1, array2, array3, array4, array5]) => {
      const nameList = [...array1, ...array2, ...array3, ...array4, ...array5];
      return nameList;
    });
};

const findCharLink = html => html.querySelectorAll('.category-page__member-link');
const findCharNames = objs => {
  const names = objs.map(obj => obj.childNodes[0].rawText);
  return names.filter(name => !name.includes('Category:'));
};
