const CleanCSS = require("clean-css");

module.exports = function(config) {


  // just pass our css and redirect rules through to the dist folder
  // config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("_redirects");

  // Add some handy filters
  config.addFilter("time", require("./filters/time.js") );

  config.addFilter("coloncapture", function(str){
    return str.replace(":","<span>:</span>");
  });

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
