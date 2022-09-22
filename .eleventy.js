const CleanCSS = require("clean-css");

module.exports = function(config) {

  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {

    // what goes where?
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },

    // some handy options
    templateFormats : ["njk"],
    passthroughFileCopy: true

  };
};
