module.exports = (context, opts = {}) => ({
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          ie: 9,
          uglify: true
        },
        useBuiltIns: false,
        modules: false
      }
    ],
    require.resolve('@babel/preset-react')
  ],
  plugins: [
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-proposal-async-generator-functions'),
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      opts['@babel/plugin-proposal-object-rest-spread'] || { useBuiltIns: true }
    ],
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
