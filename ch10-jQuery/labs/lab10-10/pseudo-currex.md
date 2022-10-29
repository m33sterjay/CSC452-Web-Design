# 10.10 Lab: Currency Conversion (jQuery)
+ will use jQuery to implement a currency conversion calculator that parses JSON string format containing exchange rates from USD to other currencies.

__Complete the following tasks:__
+ Create jQuery *ready* listener that updates option within <select id="toCurrency"> element such that:
  - [] the first <option> element is: 
        <option value="" disabled selected>Select currency</option>
  - [] Only currencies listed in the _rates_ property of the **exchangeRates** object should appear in the dropdown
  - [] the <option> element for each currency should show the full currency name followed by the currency's abbreviation in ()
        ex. `Canadian Dollar (CAD)`
  - [] Value for each <option> should be the currency abbrev.
  - [] the _allCurrencies_ object in provided JS template provides a mapping from all possible abbreviates to full currency name

    *** Pseudo ***
    // create 'ready' listener for <select id="toCurrency"> : $(function () {})
    // add  <option value="" disabled selected>Select currency</option>
    // only list currencies from `exchangeRates.rates`
    // each currency shows full currency name: `Canadian Dollar (CAD)`
    // value for each currency is currency abbreviation: `(CAD)`, provided in _allCurrencies{}_

+ Create a jQuery *change* listener for the the select dropdown that:
  - [] Converts the user-entered US dollars to the selected currency using the rates listed in the **exchangeRates** object.
    - display the converted currency with *** two decimal digits ***
        ex. if the user-entered US dollars is 100.00 Canadian Dollar (CAN) is elected, and the exchange rate is "CAD": 1.316853, the resulting converted 
        currency is 131.69.
  - [] Display the resulting converted currency by updating the *readonly* <input> element with `id="resultCurrency"`
  - [] Updates the associated label for *resultCurrency* to the selected currency's full currency name, currency abbreviation in parantheses, and colon
        ex. `Canadian Dollar (CAN):`

    *** Pseudo ***
    // create 'change' listener <select id="toCurrency"> : ${element}.change(function () {});
    // converts entered USD to selected currency based on rates given in _exchangeRates{}_
    // diplay converted currency w/ two decimals by updating: <input type="text" id="resultCurrency" name="resultCurrency" value="---.--" readonly>
    // update <label id="resultLabel" for="resultCurrency"></label>, to selected currencies full name: (abbrev), ex: `Canadian Dollar (CAN):`

+ Create a jQuery _click_ listener for the `Update Rates` button that:
  - [] Updates the _exchangeRates_ object using the JSON string provided in the <textarea> element with `id="exchangeRates"`
  - [] Updates the select dropdown such that only the currencies listed in the *rates* property of the updated _exchangeRates_ object appear in the dropdown
  - [] Resets the *readonly* <input> element with `id="resultCurrency"` to display `"---.--"`
  - [] Resets the associated label for _resultCurrency_ to display `"To Currency ():"`
  
    *** Pseudo ***
    // create 'click' listener <button id="updateRates">Update Rates</button> : ${element}.click(function () {});
    // update _exchangeRates_ using JSON string in <textarea rows="5" id="exchangeRates">
    // resets <option value="" disabled selected>Select currency</option> so only lists currencies from {exchangeRates.rates}
    // resets <input type="text" id="resultCurrency" name="resultCurrency" value="---.--" readonly>
    // resets <label id="resultLabel" for="resultCurrency">To Currency ():</label>