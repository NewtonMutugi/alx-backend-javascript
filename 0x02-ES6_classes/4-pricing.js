import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(myAmount) {
    if (typeof myAmount !== 'number') {
      this._amount = myAmount;
    } else {
      throw new TypeError('Amount must be a Number');
    }
  }

  get amount() {
    return this._amount;
  }

  set currency(myCurrecy) {
    if (myCurrecy instanceof Currency) {
      this._currency = new Currency();
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
