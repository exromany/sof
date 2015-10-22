var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var host = process.env.HOST || 'localhost';
var port = parseInt(process.env.PORT, 10) || 3000;

config.entry.unshift('webpack/hot/dev-server');
config.entry.unshift('webpack-dev-server/client');

var compiler = webpack(config);
var app = new WebpackDevServer(compiler, config.devServer);

app.listen(port, 'localhost', function onAppListening (err) {
  if (err) {
    console.log(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
    console.log('==> 💻  Open http://' + host + ':' + port + ' in a browser to view the app.');
  }
});
