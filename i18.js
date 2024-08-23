// i18n.js
const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['es', 'de'],
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales'
});

module.exports = NextI18NextInstance;
module.exports.default = NextI18NextInstance;
