module.exports = function(config) {

  // just pass our css and redirect rules through to the dist folder
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("_redirects");

  // Add a handy date formatter
  config.addFilter("time", require("./filters/time.js") );

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
