module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ],
  // plugins: [
  //     ["@babel/plugin-transform-runtime", {
  //         corejs: 3
  //     }]
  // ]
};
