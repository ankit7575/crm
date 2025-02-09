import webpack from 'webpack';

const config = {
  resolve: {
    fallback: {
      process: 'process/browser',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};

export default config;
