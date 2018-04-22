module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'comma-dangle': 0,
    'react/jsx-filename-extension': 0,
  },
  globals: {
    document: true
  }
};
