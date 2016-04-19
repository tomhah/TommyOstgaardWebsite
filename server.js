/* eslint no-console: 0 */

import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import compression from 'compression';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use(compression());

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

if (isDeveloping) {
  const compiler = webpack(config);

  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));

  app.listen(port, function onStart(err) {
    if (err) {
      console.log(err);
    }
    console.info('==> 🌎 Listening on port ' + port);
  });
} else {
  app.listen(port, function onStart(err) {
    if (err) {
      console.log(err);
    }
    console.info('==> 🌎 Listening on port ' + port);
  });
}
