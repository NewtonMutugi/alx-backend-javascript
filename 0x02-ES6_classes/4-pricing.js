import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(myAmount) {
    if (typeof myAmount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = myAmount;
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

  get currency() {
    return this.currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}

export default Pricing;
