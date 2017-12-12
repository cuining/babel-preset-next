module.exports = (context, opts = {}) => ({
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: opts.targets || {},
        debug: opts.debug,
        modules: false,
        useBuiltIns: opts.useBuiltIns || 'usage',
        shippedProposals: true
      }
    ],
    require.resolve('@babel/preset-react')
  ],
  plugins: [
    require.resolve('babel-plugin-react-require'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-proposal-decorators'),
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      opts['@babel/plugin-proposal-class-properties'] || { loose: true }
    ],
    [
      require.resolve('@babel/plugin-transform-runtime'),
      opts['@babel/plugin-transform-runtime'] || {}
    ]
  ]
})
