import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map, Observable, of} from "rxjs";
import {ConverterModel} from "../models/converter.model";
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * Converts currencies using currencyconverterapi.com
 */
@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  /**
   * constructor
   * @param http HttpClient
   * @param snackbar MatSnackBar --> TODO: Should be moved out of core, but fine for a demo
   */
  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) {
  }

  /**
   * Converts the currency
   * @param model ConverterModel
   */
  convert(model: ConverterModel): Observable<number> {

    // Build query string value
    const queryPair = `${model.sourceCurrencyId}_${model.targetCurrencyId}`;

    return this.http.get(`${environment.convertApiServer}/api/v7/convert`, {
      params: {
        q: queryPair,
        apiKey: environment.convertApiKey
      }
    })
      .pipe(
        map((response: any) => {
          // Extract multiplier
          return response.results[queryPair].val as number
        }),
        map((multiplier: number) => {
          // Calculate results
          return model.amount * multiplier;
        }),
        catchError(() => {
          this.snackbar.open($localize`:@@error.convert:Server error while converting. See https://www.currencyconverterapi.com/server-status`, undefined, {
            verticalPosition: 'top'
          });
          // Return 0 as there can't be a result
          // Could be catched more nice, but ok for a demo
          // You can emulate success by replacing the 0 with some decimal
          return of(0);
        })
      );
  }
}
