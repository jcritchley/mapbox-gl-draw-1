const xtend = require('xtend');

module.exports = function(lng = 0, lat = 0, eventProperties = {}) {
  const e = {
    originalEvent: xtend({
      stopPropagation() {},
      preventDefault() {},
      button: 0,
      clientX: lng,
      clientY: lat
    }, eventProperties),
    point: {x: lng, y:lat},
    lngLat: {lng, lat}
  };

  return e;
};
