module.exports = {
  appJSLibPaths: [
    'node_modules/angular/*.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-aria/angular-aria.min.js',
    'node_modules/angular-material/angular-material.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js'
  ],
  appCSSLibPaths: [
    'node_modules/angular-material/angular-material.min.css'
  ],
  appFontsLibPaths: 'app/fonts/*',
  appImagePath: 'app/imgs/*',
  cssPath: 'app/css/*.css',
  appHTMLPaths: 'app/**/*.html',
  indexPath: 'app/index.html',
  viewFolder: 'views',
  initPath: 'app/**/*.init.js',
  jsPath: 'app/**/*.js',
  distFolder: './'
};
