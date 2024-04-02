module.exports = {
    presets: [
      [
        '@babel/preset-env',
        { module: false }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
    ]
  }