const calculateNumber = require('./1-calcul');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(
    `The total is: ${calculateNumber('SUM', totalAmount, totalShipping)}`
  );
}
module.exports = sendPaymentRequestToApi;
