module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@common': './src/common',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
