// call with `node r.js -o build.js`
// add `optimize=none` to skip script optimization (useful during debugging).

({
  appDir: "./",
  baseUrl: "./",
  dir: "./compiled",
  mainConfigFile: "./main.js",

  optimize: "uglify2",
  skipDirOptimize: true,
  generateSourceMaps: true,
  findNestedDependencies: true,
  preserveLicenseComments: false,

  onBuildWrite: function (moduleName, path, singleContents) {
    return singleContents.replace(/jsx!/g, '');
  },

  modules: [
    {
      name: "main",
      exclude: ['jsx']
    }
  ]
})
