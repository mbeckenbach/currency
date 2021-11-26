/**
 * A currency as it is returned by the api
 */
export interface Currency {
  /**
   * Name of the currency
   */
  currencyName: string
  /**
   * Symbol of the currency
   */
  currencySymbol?: string
  /**
   * ID for further queries
   */
  id: string
}

/**
 * The currency entities as the api returns those
 */
export interface CurrencyListEntities {
  [x: string]: Currency;
}
