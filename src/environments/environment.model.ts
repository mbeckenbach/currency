/**
 * Environment configuration
 */
export interface Environment {
  /**
   * Run angular in prod mode
   */
  production: boolean;
  /**
   * API key for currencyconverterapi.com
   */
  convertApiKey: string;
  /**
   * Server to use with currencyconverterapi.com.
   * See docs at https://www.currencyconverterapi.com/docs
   */
  convertApiServer: string;
}
