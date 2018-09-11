module.exports = (context, opts = {}) => ({
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: opts.targets || { ie: 9 },
        debug: opts.debug,
        modules: opts.modules || false,
        useBuiltIns: opts.useBuiltIns || false,
        shippedProposals: true
      }
    ],
    require.resolve('@babel/preset-react')
  ],
  plugins: [
    require.resolve('babel-plugin-react-require'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
    [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
    [
      require.resolve('@babel/plugin-transform-runtime'),
      {
        helpers: false
      }
    ]
  ]
})
