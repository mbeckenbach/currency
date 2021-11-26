import {Component, OnInit} from '@angular/core';
import {CurrencyListService} from "../../services/currency-list.service";
import {ConverterService} from "../../services/converter.service";
import {debounceTime, filter, map, Observable, switchMap} from "rxjs";
import {Currency, CurrencyListEntities} from "../../models/currency.model";
import {FormControl, FormGroup, Validators, ValidatorsModel} from "@ng-stack/forms";
import {ConverterModel} from "../../models/converter.model";

/**
 * Home screen
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Form for this screen
   */
  form = new FormGroup<ConverterModel>({
    amount: new FormControl<number, ValidatorsModel>(undefined, [
      Validators.required,
      Validators.min(0)
    ]),
    sourceCurrencyId: new FormControl<string, ValidatorsModel>('EUR', [
      Validators.required
    ]),
    targetCurrencyId: new FormControl<string, ValidatorsModel>('USD')
  })

  /**
   * List of available currencies
   */
  currencies$: Observable<Currency[]> = this.currencyListService.currencies$
    .pipe(
      // Sort by name
      map(list => list.sort((a, b) => (a.currencyName > b.currencyName) ? 1 : -1))
    );

  /**
   * List of currencies as entities
   */
  currenciesAsEntities$: Observable<CurrencyListEntities> = this.currencyListService.currenciesAsEntities$;

  /**
   * Label for source currency control
   */
  sourceCurrencyLabel = $localize`:@@home.sourceCurrency:Source Currency`

  /**
   * Label for target currency control
   */
  targetCurrencyLabel = $localize`:@@home.targetCurrency:Target Currency`

  /**
   * Result of the currency conversion
   * Triggers api call on form change
   */
  result$: Observable<number> = this.form.valueChanges
    .pipe(
      debounceTime(200),
      filter(() => this.form.valid),
      switchMap(value => this.converter.convert(value)),
    );

  /**
   * constructor
   * @param currencyListService CurrencyListService
   * @param converter ConverterService
   */
  constructor(private currencyListService: CurrencyListService,
              private converter: ConverterService) {
  }

  /**
   * NG hook
   */
  ngOnInit(): void {
    // Make sure, that our currency cache is populated
    this.currencyListService.loadCurrencies();
  }

}
