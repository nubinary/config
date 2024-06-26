import tseslint from 'typescript-eslint'
import pluginImport from 'eslint-plugin-import-x'
import globals from 'globals'
// @ts-expect-error
import eslint from '@eslint/js'
// @ts-expect-error
import configPrettier from 'eslint-config-prettier'

export const rootConfig = [
  {
    name: 'eslint/rules',
    rules: {
      ...eslint.configs.recommended.rules,
      'no-async-promise-executor': 'off',
      'no-empty': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'error',
      'no-undef': 'off',
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
  {
    name: 'prettier/rules',
    ...configPrettier,
  },
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    name: 'import/rules',
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/newline-after-import': 'error',
      'import/no-cycle': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
    },
  },
  {
    name: 'tanstack/custom',
    ignores: ['**/build', '**/coverage', '**/dist', '**/snap'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        { default: 'generic', readonly: 'generic' },
      ],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
          custom: {
            regex: '^(T|T[A-Z][A-Za-z]+)$',
            match: true,
          },
        },
      ],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: true },
      ],
    },
  },
]
