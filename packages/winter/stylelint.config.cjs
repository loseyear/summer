module.exports = {
  processors: [],
  customSyntax: 'postcss-styled-syntax',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-styled-components',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'keyframes-name-pattern': '^((key-frame)|([a-z][a-z0-9]*)(-[a-z0-9]+)*)$',
    'alpha-value-notation': 'number',
  },
}
