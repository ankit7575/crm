import path from 'path';
import webpack from 'webpack';

export default {
  entry: './src/index.js', // Specify your entry point
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Make sure these extensions are resolved
    fallback: {
      process: 'process/browser',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply Babel to JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
