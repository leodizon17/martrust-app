/**
 * interfaces fill the role of naming types,
 * and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
 */
 export interface ICurrency {
    readonly label: string;
    readonly value: string;
    readonly currency_name: string;
  }
  /**
   * create type for Array
   */
  export type CurrencyPairs = Array<ICurrency>;
  
  /**
   * create new instance of property that allow to modify elements
   */
  export class Currency implements ICurrency {
    public readonly label: string;
    public readonly value: string;
    public readonly currency_name: string;
  
    constructor(data: ICurrency) {
      this.currency_name = data.currency_name;
      this.value = data.currency_name;
      /**
       * modify currency_name, to add '/' between currency name
       */
      this.label = data.currency_name.replace(new RegExp(`^(.{${3}})(.)`), `$1${'/'}$2`);
    }
  }