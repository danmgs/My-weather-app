module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
      'references-empty': [2, 'never'],
      'header-max-length': [0, 'always', 100],
  },
  parserPreset: {
      parserOpts: {
          issuePrefixes: ['#']
      }
  },
}
