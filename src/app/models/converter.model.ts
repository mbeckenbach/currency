/**
 * Model to convert an amount from one currency to another
 */
export interface ConverterModel {
  /**
   * Amount to convert
   */
  amount: number;
  /**
   * Source currency id
   */
  sourceCurrencyId: string;
  /**
   * Source currency id
   */
  targetCurrencyId: string;
}
