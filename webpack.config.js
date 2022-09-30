const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: { // The output is AMD as it will be loaded by requirejs
      type: 'amd'
    }
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    '@mui/material': 'material-ui',
    'ag-grid-react': 'ag-grid-react',
  },
  mode: 'development',
  devtool: false, // Just to make the webpack output readable
};
