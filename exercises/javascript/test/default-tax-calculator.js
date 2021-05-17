const { TaxCalculator } = require("../tax-calculator");

let DefaultTaxCalculator = class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }

  calculateTax(vehicle) {
    let taxPayment = 0;
    let { co2Emissions } = vehicle;

    if (co2Emissions === 0) {
      taxPayment;
    } else if (co2Emissions <= 50) {
      taxPayment = 10;
    } else if (co2Emissions <= 75) {
      taxPayment = 25;
    } else if (co2Emissions <= 90) {
      taxPayment = 105;
    } else if (co2Emissions <= 100) {
      taxPayment = 125;
    } else if (co2Emissions <= 110) {
      taxPayment = 145;
    } else if (co2Emissions <= 130) {
      taxPayment = 165;
    } else if (co2Emissions <= 150) {
      taxPayment = 205;
    } else if (co2Emissions <= 170) {
      taxPayment = 515;
    } else if (co2Emissions <= 190) {
      taxPayment = 830;
    } else if (co2Emissions <= 225) {
      taxPayment = 1240;
    } else if (co2Emissions <= 255) {
      taxPayment = 1760;
    } else {
      taxPayment = 2070;
    }
    return taxPayment;
  }
};

module.exports = {
  DefaultTaxCalculator: DefaultTaxCalculator,
};
