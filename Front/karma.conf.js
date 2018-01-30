var webpackConfig = require('./webpack.config.js');

module.exports = function (config){
    config.set({
        browsers: ['Chrome'],
        singleRun: false,
        frameworks: ['mocha'],
        files: ['./test.js'],
        preprocessors: {
            './test.js': ['webpack']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
          noInfo: true
        }
    });
}