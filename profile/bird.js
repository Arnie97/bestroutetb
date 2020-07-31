module.exports = function(Formatter) {

  function BirdFormatter() {
    Formatter.apply(this, arguments);
  }

  $inherit(BirdFormatter, Formatter, {
    ruleFormat: 'route %prefix/%length via %gw;\n'
  });

  return {
    '%': {
      Formatter: BirdFormatter
    }
  };

};
