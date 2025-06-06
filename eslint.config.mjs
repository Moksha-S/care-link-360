// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    // Global ESLint settings
    ignores: ['dist', '.output', 'node_modules', '.nuxt', '*.log'],
  },
  {
    // Default rules for all files
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,vue}'],
    rules: {
      // Basic code style
      semi: ['error', 'always'],
      // 'quotes': ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'vue/html-self-closing': ['off'],

      // Common best practices
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',

      // Vue-specific rules
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'warn',
    },
  },
  {
    // TypeScript-specific rules
    files: ['**/*.{ts,tsx,vue}'],

    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
