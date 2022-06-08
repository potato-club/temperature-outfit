module.exports = {
  presets: [
    '@babel/preset-react', // necessary for all .jsx files
    'next/babel',
  ],
  overrides: [
    {
      include: ['./node_modules'],
      plugins: [
        [
          'babel-plugin-transform-require-ignore',
          {
            extensions: ['.css'],
          },
        ],
      ],
    },
  ],
};
