export default {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-clean-order',
    'stylelint-config-recommended-scss',
  ],
  overrides: [
    {
      files: ['**/*.module.scss'],
      rules: {
        'selector-class-pattern': [
          '^[a-z]+([A-Z][a-zA-Z]+)*$',
          {
            message: (selector) =>
              `Expected class selector "${selector}" to be lowerCamelCase`,
          },
        ],
        'import-notation': 'string',
      },
    },
  ],
};
