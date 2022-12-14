// Mapping of all currency abbreviations to full currency name
var allCurrencies = {
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudan Dollar",
    BND: "Brunei Dollar",
    BOB: "Bolivian Boliviano",
    BRL: "Brazilian Real",
    BSD: "Bahamian Dollar",
    BTC: "Bitcoin",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswanan Pula",
    BYN: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CLF: "Chilean Unit of Account (UF)",
    CLP: "Chilean Peso",
    CNH: "Chinese Yuan (Offshore)",
    CNY: "Chinese Yuan",
    COP: "Colombian Peso",
    CRC: "Costa Rican Colón",
    CUC: "Cuban Convertible Peso",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Republic Koruna",
    DJF: "Djiboutian Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    EUR: "Euro",
    FJD: "Fijian Dollar",
    FKP: "Falkland Islands Pound",
    GBP: "British Pound Sterling",
    GEL: "Georgian Lari",
    GGP: "Guernsey Pound",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanaese Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    IMP: "Manx pound",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Króna",
    JEP: "Jersey Pound",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    KES: "Kenyan Shilling",
    KGS: "Kyrgystani Som",
    KHR: "Cambodian Riel",
    KMF: "Comorian Franc",
    KPW: "North Korean Won",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Cayman Islands Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Laotian Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Lesotho Loti",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanma Kyat",
    MNT: "Mongolian Tugrik",
    MOP: "Macanese Pataca",
    MRO: "Mauritanian Ouguiya (pre-2018)",
    MRU: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NIO: "Nicaraguan Córdoba",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Nuevo Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Riyal",
    SBD: "Solomon Islands Dollar",
    SCR: "Seychellois Rupee",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SHP: "Saint Helena Pound",
    SLL: "Sierra Leonean Leone",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    SSP: "South Sudanese Pound",
    STD: "São Tomé and Príncipe Dobra (pre-2018)",
    STN: "São Tomé and Príncipe Dobra",
    SVC: "Salvadoran Colón",
    SYP: "Syrian Pound",
    SZL: "Swazi Lilangeni",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TOP: "Tongan Pa'anga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "United States Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistan Som",
    VEF: "Venezuelan Bolívar Fuerte",
    VND: "Vietnamese Dong",
    VUV: "Vanuatu Vatu",
    WST: "Samoan Tala",
    XAF: "CFA Franc BEAC",
    XAG: "Silver Ounce",
    XAU: "Gold Ounce",
    XCD: "East Caribbean Dollar",
    XDR: "Special Drawing Rights",
    XOF: "CFA Franc BCEAO",
    XPD: "Palladium Ounce",
    XPF: "CFP Franc",
    XPT: "Platinum Ounce",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMW: "Zambian Kwacha",
    ZWL: "Zimbabwean Dollar",
};
// Initial data for exchange rates
var exchangeRates = {
    disclaimer: "Usage subject to terms: https://openexchangerates.org/terms",
    license: "https://openexchangerates.org/license",
    timestamp: 1534107604,
    base: "USD",
    rates: {
        BTC: 0.000157753542,
        CAD: 1.316853,
        EUR: 0.879353,
        JPY: 110.46550427,
        USD: 1,
    },
};
/* Your solution goes here */
const $toCurrencyID = $('select[id="toCurrency"]');
const $usdInputID = $('input[id="usdInput"]');
const $resultCurrencyID = $('input[id="resultCurrency"]');
const $resultLabelID = $('label[id="resultLabel"]');
var $options = $("option");
const $updateRatesID = $('button[id="updateRates"]');
const apiKey = "1e38b730b8ee40879741630d9dc3c39a";
const $exchangeRatesID = $('textarea[id="exchangeRates"]');
// create 'ready' listener for <select id="toCurrency"> : $(function () {})
$(function () {
    readyCallback();
    changeCallback();
    clickCallback();
});
function readyCallback() {
    // add  <option value="" disabled selected>Select currency</option>
    $toCurrencyID.prepend('<option value="" disabled selected>Select currency</option>');
    // only list currencies from `exchangeRates.rates`
    for (const currency in exchangeRates.rates) {
        if (Object.hasOwnProperty.call(exchangeRates.rates, currency)) {
            const conversion = exchangeRates.rates[currency];
            // prepend currency <option>'s to 'id="toCurrency"'
            $toCurrencyID.append(function (ratesName) {
                ratesName = currency;
                // each currency shows full currency name: `Canadian Dollar (CAD)`
                for (const currencyName in allCurrencies) {
                    if (Object.hasOwnProperty.call(allCurrencies, currencyName)) {
                        const fullName = allCurrencies[currencyName];
                        // matching up _exchangeRate[rates]_ to _allCurrencies[currencyName]_
                        if (ratesName == currencyName) {
                            // value for each currency is currency abbreviation: `(CAD)`, provided in _allCurrencies{}_
                            return `<option value="${ratesName}">${fullName} (${ratesName})</option>`;
                        }
                    }
                }
            });
        }
    }
}
// create 'change' listener <select id="toCurrency"> : ${element}.change(function () {});
function changeCallback() {
    $toCurrencyID.change(function () {
        const $selectedIndex = $("option:selected");
        var $optionSelected = $selectedIndex[0];
        if ($usdInputID[0].value != null) {
            var usdValue = $usdInputID[0].value;
            //alert(`${usdValue}`); //test
        }
        for (const currency in exchangeRates.rates) {
            if (Object.hasOwnProperty.call(exchangeRates.rates, currency)) {
                const conversion = exchangeRates.rates[currency];
                if ($optionSelected.value == currency) {
                    // converts entered USD to selected currency based on rates given in _exchangeRates{}_
                    var convertedUSD = conversion * usdValue;
                    //alert(`${convertedUSD}`); //test
                }
            }
        }
        var displayConvertedUSD = convertedUSD.toFixed(2); //alert(`${displayConvertedUSD}`); //test
        $resultCurrencyID[0].value = `${displayConvertedUSD}`;
        // diplay converted currency w/ two decimals by updating: <input type="text" id="resultCurrency" name="resultCurrency" value="---.--" readonly>
        for (const currencyName in allCurrencies) {
            if (Object.hasOwnProperty.call(allCurrencies, currencyName)) {
                const fullName = allCurrencies[currencyName];
                if ($optionSelected.value == currencyName) {
                    // update <label id="resultLabel" for="resultCurrency"></label>, to selected currencies full name: (abbrev), ex: `Canadian Dollar (CAN):`
                    $resultLabelID.text(`${fullName}: (${currencyName})`);
                }
            }
        }
    });
}
// create 'click' listener <button id="updateRates">Update Rates</button> : ${element}.click(function () {});
function clickCallback() {
    $updateRatesID.click(function () {
        let $rates = JSON.parse(
            `{"disclaimer": "Usage subject to terms: https://openexchangerates.org/terms", "license": "https://openexchangerates.org/license", "timestamp": 1534467600, "base": "USD", "rates": { "CAD": 1.316145, "CNY": 6.882134, "EUR": 0.879303, "INR": 70.015 }}`
        );
        let rmOption = document.querySelectorAll(`option`);
        for (let i = 0; i < rmOption.length; i++) {
            rmOption[i].parentNode.removeChild(rmOption[i]);
        }
        // resets <option value="" disabled selected>Select currency</option> so only lists currencies from {exchangeRates.rates}
        $toCurrencyID.prepend('<option value="" disabled selected>Select currency</option>');
        exchangeRates = Object.assign(exchangeRates, $rates, {
            disclaimer: $rates.disclaimer,
            license: $rates.license,
            timestamp: $rates.timestamp,
            base: $rates.base,
            rates: {
                CAD: $rates.rates[`CAD`],
                CNY: $rates.rates[`CNY`],
                EUR: $rates.rates[`EUR`],
                INR: $rates.rates[`INR`],
            },
        });
        for (const currency in exchangeRates.rates) {
            if (Object.hasOwnProperty.call(exchangeRates.rates, currency)) {
                const conversion = exchangeRates.rates[currency];
                // prepend currency <option>'s to 'id="toCurrency"'
                $toCurrencyID.append(function (ratesName) {
                    ratesName = currency;
                    // each currency shows full currency name: `Canadian Dollar (CAD)`
                    for (const currencyName in allCurrencies) {
                        if (Object.hasOwnProperty.call(allCurrencies, currencyName)) {
                            const fullName = allCurrencies[currencyName];
                            // matching up _exchangeRate[rates]_ to _allCurrencies[currencyName]_
                            if (ratesName == currencyName) {
                                // value for each currency is currency abbreviation: `(CAD)`, provided in _allCurrencies{}_
                                return `<option value="${ratesName}">${fullName} (${ratesName})</option>`;
                            }
                        }
                    }
                });
            }
        }
        // resets <input type="text" id="resultCurrency" name="resultCurrency" value="---.--" readonly>
        $resultCurrencyID[0].value = `---.--`;
        // resets <label id="resultLabel" for="resultCurrency">To Currency ():</label>
        $resultLabelID.text(`To Currency ():`);
    });
}
/*$.ajax({
        // update _exchangeRates_ using JSON string in <textarea rows="5" id="exchangeRates">
        url: `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`,
        method: "GET",
        data: `${exchangeRates}`,
        dataType: "json",
    })
        .done(function (data) {
            exchangeRates = Object.assign(exchangeRates, data, {
                disclaimer: data[`disclaimer`],
                license: data[`license`],
                timestamp: data[`timestamp`],
                base: data[`base`],
                rates: {
                    BTC: data.rates[`BTC`],
                    CAD: data.rates[`CAD`],
                    EUR: data.rates[`EUR`],
                    JPY: data.rates[`JPY`],
                    USD: data.rates[`USD`],
                },
            });
            $exchangeRatesID.text(JSON.stringify(exchangeRates));
            //alert(`${exchangeRates.timestamp}`); //test
            //alert(`${exchangeRates.rates[`BTC`]}`); //test
        })
        .fail(function (jqXHR) {
            let textAreaJSON = JSON.stringify(jqXHR);
            //alert(`fail`); //test
            $exchangeRatesID.text(`${textAreaJSON}`);
        });*/
