function getPaletteKey(r,g,b) {
  return [r,g,b].join('.');
}

function SimpleQuant(pixels) {
  this.pixels = pixels;
  this.palette = [];
  this.paletteIndex = {};
  this.getColormap = function () {
    return this.palette;
  };

  this.buildColormap = function () {
    var npixels = this.pixels.length/3;
    var k = 0;
    for (var i = 0 ; i < npixels ; i++) {
      var r = this.pixels[k++],
          g = this.pixels[k++],
          b = this.pixels[k++];
      var key = getPaletteKey(r,g,b);
      if (!this.paletteIndex[key]) {
        this.palette.push(r);
        this.palette.push(g);
        this.palette.push(b);
        this.paletteIndex[key] = (this.palette.length/3) - 1;
      }
    }
  };

  this.lookupRGB = function (r, g, b) {
    return this.paletteIndex[getPaletteKey(r,g,b)];
  };
}

module.exports = SimpleQuant;