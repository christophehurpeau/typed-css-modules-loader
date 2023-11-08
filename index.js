var DtsCreator = require('typed-css-modules').default;
var loaderUtils = require('loader-utils');

module.exports = function(source, map) {
  this.cacheable && this.cacheable();
  this.addDependency(this.resourcePath);
  var callback = this.async();

  // Pass on query parameters as an options object to the DtsCreator. This lets
  // you change the default options of the DtsCreator and e.g. use a different
  // output folder.
  var options = loaderUtils.getOptions(this) || {};
  
  // Make sure to not modify options object directly
  var creatorOptions = Object.assign({}, options);
  var creator = new DtsCreator(creatorOptions);

  // creator.create(..., source) tells the module to operate on the
  // source variable. Check API for more details.
  creator
    .create(this.resourcePath, source)
    .then(content => {
      return content.writeFile().then(_ => {
        callback(null, source, map);
      });
    })
    .catch(callback);
};
