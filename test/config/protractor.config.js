exports.config = {
  capabilities: {
    'browserName': 'chrome',
  },
  //directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  //baseUrl: 'localhost',
  framework: 'mocha',
  specs: [
    '../specs/*.js',
  ],
  mochaOpts: {
    reporter: 'spec',
    timeout: 70000
  }
};
