import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, map} from "rxjs";
import {Currency, CurrencyListEntities} from "../models/currency.model";
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * Keys for the local storage
 */
enum LOCAL_STORAGE_KEYS {
  CURRENCIES = 'cc_currencies'
}

/**
 * Provides a list of available currencies
 */
@Injectable({
  providedIn: 'root'
})
export class CurrencyListService {

  /**
   * Observable of available currencies
   */
  currencies$ = new BehaviorSubject<Currency[]>(this.toArray(this.currencies));

  /**
   * Observable of available currencies
   */
  currenciesAsEntities$ = new BehaviorSubject<CurrencyListEntities>(this.currencies);

  /**
   * constructor
   * @param http HttpClient
   * @param snackbar MatSnackBar --> TODO: Should be moved out of core, but fine for a demo
   */
  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) {
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Gets currencies from local storage, empty array if not loaded yet
   * @private
   */
  private get currencies(): CurrencyListEntities {
    // Read from storage
    const cached = localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENCIES);
    // Return data or empty array
    return cached ? JSON.parse(cached) : {};
  }

  /**
   * Writes currencies to localstorage and updates currencies$
   * @param currencies
   * @private
   */
  private set currencies(currencies: CurrencyListEntities) {
    // Update storage
    localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENCIES, JSON.stringify(currencies));

    // Update obervables
    this.currencies$.next(this.toArray(currencies));
    this.currenciesAsEntities$.next(currencies);
  }

  /**
   * Loads the currencies from api and updates cache
   * @param force Force reload from server
   */
  loadCurrencies(force?: boolean): void {
    // Only load if cache is empty or force load is set
    if (Object.keys(this.currencies).length === 0 || force) {
      this.http.get(`${environment.convertApiServer}/api/v7/currencies`, {
        params: {
          apiKey: environment.convertApiKey
        }
      })
        .pipe(
          // Map object keys into an array for consuming in nfFor
          map((response: any) => {
            return response.results;
          }),
        )
        .subscribe({
          next: (currencies) => {
            this.currencies = currencies;
          },
          error: () => {
            this.snackbar.open($localize`:@@error.load-currencies:Error loading currencies. See https://www.currencyconverterapi.com/server-status`,
              undefined, {
                verticalPosition: 'top'
              });
          }
        });
    }
  }

  /**
   * Converts entities to array
   * @param currencies CurrencyListEntities
   * @private
   */
  private toArray(currencies: CurrencyListEntities): Currency[] {
    return Object.keys(currencies).map(index => {
      return currencies[index];
    }) as Currency[];
  }
}
