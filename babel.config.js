module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Allow importing core-js in entrypoint and use browserlist to select polyfills
        useBuiltIns: 'entry',
        // Use corejs@3
        corejs: 3,
        // Do not transform modules to CJS
        modules: false,
        // Exclude transforms that make all code slower
        exclude: ['transform-typeof-symbol']
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        // Enabled dead code elimination on styled-components
        pure: true
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
};
