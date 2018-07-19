module.exports = function(config) {

  // just pass the css we find through to the dist folder
  config.addPassthroughCopy("src/css");

  config.addFilter("time", require("./filters/time.js") );
  config.addFilter("zone", require("./filters/zone.js") );

  return {

    // what goes where?
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },

    // some handy options
    templateFormats : ["njk", "md"],
    passthroughFileCopy: true

  };
};
