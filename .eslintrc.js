module.exports = {
  env: {
    node: true,
    es2021: true,
    // jest: true, // пока не нужен, если нет тестов
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Отключает правила ESLint, конфликтующие с Prettier
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Возможные ошибки
    'no-console': 'off', // Разрешаем console.log для разработки
    'no-debugger': 'warn', // debugger - предупреждение
    'no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_' 
    }],
    
    // Лучшие практики (без правил форматирования - это работа Prettier)
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'warn',
    
    // Современные возможности
    'no-await-in-loop': 'warn',
    'require-await': 'error',
    'no-return-await': 'error',
  },
};