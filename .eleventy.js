module.exports = function(config) {

  // just pass our css and redirect rules through to the dist folder
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("_redirects");

  // Add some handy filters
  config.addFilter("time", require("./filters/time.js") );
  config.addFilter("coloncapture", require("./filters/coloncapture.js") );

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
