/*
Author: Sabyasachi Ganguli
Date: July 10, 2024
Time: 02:57 AM
Place: Kolkata
--------------------------------------------------------------------------------------------------------- 
*/


const populate = async (value, currency) => {
    let myStr = ""
    // url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_HTCjKvGgjUnM4rxdZ2j8NCHZwcav2qJJjgr5sao9&base_currency=" + currency
    // let response = await fetch(url)
    // let rJson = await response.json()
    let rJson = JSON.parse(`{
  "meta": {
    "last_updated_at": "2024-07-08T23:59:59Z"
  },
  "data": {
    "ADA": {
      "code": "ADA",
      "value": 2.7086757608
    },
    "AED": {
      "code": "AED",
      "value": 3.6720505359
    },
    "AFN": {
      "code": "AFN",
      "value": 71.0966627091
    },
    "ALL": {
      "code": "ALL",
      "value": 92.4434811984
    },
    "AMD": {
      "code": "AMD",
      "value": 388.1229402305
    },
    "ANG": {
      "code": "ANG",
      "value": 1.7861202261
    },
    "AOA": {
      "code": "AOA",
      "value": 872.6689579901
    },
    "ARB": {
      "code": "ARB",
      "value": 1.4974709951
    },
    "ARS": {
      "code": "ARS",
      "value": 916.7799436645
    },
    "AUD": {
      "code": "AUD",
      "value": 1.4829601975
    },
    "AVAX": {
      "code": "AVAX",
      "value": 0.0396169223
    },
    "AWG": {
      "code": "AWG",
      "value": 1.79
    },
    "AZN": {
      "code": "AZN",
      "value": 1.7
    },
    "BAM": {
      "code": "BAM",
      "value": 1.8049302915
    },
    "BBD": {
      "code": "BBD",
      "value": 2
    },
    "BDT": {
      "code": "BDT",
      "value": 117.5983834282
    },
    "BGN": {
      "code": "BGN",
      "value": 1.8042602886
    },
    "BHD": {
      "code": "BHD",
      "value": 0.376
    },
    "BIF": {
      "code": "BIF",
      "value": 2878.0379233571
    },
    "BMD": {
      "code": "BMD",
      "value": 1
    },
    "BNB": {
      "code": "BNB",
      "value": 0.0019554179
    },
    "BND": {
      "code": "BND",
      "value": 1.3481502463
    },
    "BOB": {
      "code": "BOB",
      "value": 6.9223906987
    },
    "BRL": {
      "code": "BRL",
      "value": 5.4712505661
    },
    "BSD": {
      "code": "BSD",
      "value": 1
    },
    "BTC": {
      "code": "BTC",
      "value": 0.0000176333
    },
    "BTN": {
      "code": "BTN",
      "value": 83.6306401794
    },
    "BWP": {
      "code": "BWP",
      "value": 13.59286193
    },
    "BYN": {
      "code": "BYN",
      "value": 3.2699320022
    },
    "BYR": {
      "code": "BYR",
      "value": 32699.349680519
    },
    "BZD": {
      "code": "BZD",
      "value": 2
    },
    "CAD": {
      "code": "CAD",
      "value": 1.3630901473
    },
    "CDF": {
      "code": "CDF",
      "value": 2846.3883511973
    },
    "CHF": {
      "code": "CHF",
      "value": 0.8976901143
    },
    "CLF": {
      "code": "CLF",
      "value": 0.0246600035
    },
    "CLP": {
      "code": "CLP",
      "value": 939.2919752773
    },
    "CNY": {
      "code": "CNY",
      "value": 7.2658408338
    },
    "COP": {
      "code": "COP",
      "value": 4043.8776210642
    },
    "CRC": {
      "code": "CRC",
      "value": 528.5664389
    },
    "CUC": {
      "code": "CUC",
      "value": 1
    },
    "CUP": {
      "code": "CUP",
      "value": 24
    },
    "CVE": {
      "code": "CVE",
      "value": 101.7845804783
    },
    "CZK": {
      "code": "CZK",
      "value": 23.2226944038
    },
    "DAI": {
      "code": "DAI",
      "value": 1.0000270866
    },
    "DJF": {
      "code": "DJF",
      "value": 177.721
    },
    "DKK": {
      "code": "DKK",
      "value": 6.8856911945
    },
    "DOP": {
      "code": "DOP",
      "value": 59.0549775128
    },
    "DOT": {
      "code": "DOT",
      "value": 0.1681089839
    },
    "DZD": {
      "code": "DZD",
      "value": 134.715282911
    },
    "EGP": {
      "code": "EGP",
      "value": 47.9254650933
    },
    "ERN": {
      "code": "ERN",
      "value": 15
    },
    "ETB": {
      "code": "ETB",
      "value": 57.7523185737
    },
    "ETH": {
      "code": "ETH",
      "value": 0.0003312259
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9230701175
    },
    "FJD": {
      "code": "FJD",
      "value": 2.2332703911
    },
    "FKP": {
      "code": "FKP",
      "value": 0.7802965565
    },
    "GBP": {
      "code": "GBP",
      "value": 0.7803100938
    },
    "GEL": {
      "code": "GEL",
      "value": 2.7654803414
    },
    "GGP": {
      "code": "GGP",
      "value": 0.7802966836
    },
    "GHS": {
      "code": "GHS",
      "value": 15.3495020604
    },
    "GIP": {
      "code": "GIP",
      "value": 0.7802967571
    },
    "GMD": {
      "code": "GMD",
      "value": 57.8008563934
    },
    "GNF": {
      "code": "GNF",
      "value": 8584.8289641129
    },
    "GTQ": {
      "code": "GTQ",
      "value": 7.746620908
    },
    "GYD": {
      "code": "GYD",
      "value": 208.8581250473
    },
    "HKD": {
      "code": "HKD",
      "value": 7.8086510947
    },
    "HNL": {
      "code": "HNL",
      "value": 24.7531146484
    },
    "HRK": {
      "code": "HRK",
      "value": 6.6057210677
    },
    "HTG": {
      "code": "HTG",
      "value": 134.2369470949
    },
    "HUF": {
      "code": "HUF",
      "value": 364.2641334805
    },
    "IDR": {
      "code": "IDR",
      "value": 16230.240623863
    },
    "ILS": {
      "code": "ILS",
      "value": 3.6857203781
    },
    "IMP": {
      "code": "IMP",
      "value": 0.7802971518
    },
    "INR": {
      "code": "INR",
      "value": 83.430099795
    },
    "IQD": {
      "code": "IQD",
      "value": 1307.7471717002
    },
    "IRR": {
      "code": "IRR",
      "value": 41993.312846923
    },
    "ISK": {
      "code": "ISK",
      "value": 137.7647432695
    },
    "JEP": {
      "code": "JEP",
      "value": 0.7802965762
    },
    "JMD": {
      "code": "JMD",
      "value": 156.23002617
    },
    "JOD": {
      "code": "JOD",
      "value": 0.71
    },
    "JPY": {
      "code": "JPY",
      "value": 160.833089708
    },
    "KES": {
      "code": "KES",
      "value": 127.7707814481
    },
    "KGS": {
      "code": "KGS",
      "value": 85.8131745128
    },
    "KHR": {
      "code": "KHR",
      "value": 4109.7590353061
    },
    "KMF": {
      "code": "KMF",
      "value": 454.2121823762
    },
    "KPW": {
      "code": "KPW",
      "value": 900.0025978424
    },
    "KRW": {
      "code": "KRW",
      "value": 1380.6828492129
    },
    "KWD": {
      "code": "KWD",
      "value": 0.3058900611
    },
    "KYD": {
      "code": "KYD",
      "value": 0.83333
    },
    "KZT": {
      "code": "KZT",
      "value": 479.2438127159
    },
    "LAK": {
      "code": "LAK",
      "value": 22113.32072104
    },
    "LBP": {
      "code": "LBP",
      "value": 89531.361759541
    },
    "LKR": {
      "code": "LKR",
      "value": 304.0959088599
    },
    "LRD": {
      "code": "LRD",
      "value": 195.695833337
    },
    "LSL": {
      "code": "LSL",
      "value": 18.1615930576
    },
    "LTC": {
      "code": "LTC",
      "value": 0.0154014492
    },
    "LTL": {
      "code": "LTL",
      "value": 3.1878315398
    },
    "LVL": {
      "code": "LVL",
      "value": 0.6488666221
    },
    "LYD": {
      "code": "LYD",
      "value": 4.8494707106
    },
    "MAD": {
      "code": "MAD",
      "value": 9.8398016118
    },
    "MATIC": {
      "code": "MATIC",
      "value": 1.9929716807
    },
    "MDL": {
      "code": "MDL",
      "value": 17.6590734403
    },
    "MGA": {
      "code": "MGA",
      "value": 4489.1622385396
    },
    "MKD": {
      "code": "MKD",
      "value": 56.636237977
    },
    "MMK": {
      "code": "MMK",
      "value": 2094.6753836614
    },
    "MNT": {
      "code": "MNT",
      "value": 3400.788140884
    },
    "MOP": {
      "code": "MOP",
      "value": 8.0343215133
    },
    "MRO": {
      "code": "MRO",
      "value": 356.999828
    },
    "MRU": {
      "code": "MRU",
      "value": 39.7295581624
    },
    "MUR": {
      "code": "MUR",
      "value": 46.707557281
    },
    "MVR": {
      "code": "MVR",
      "value": 15.4476624519
    },
    "MWK": {
      "code": "MWK",
      "value": 1733.0557525676
    },
    "MXN": {
      "code": "MXN",
      "value": 17.9786828428
    },
    "MYR": {
      "code": "MYR",
      "value": 4.7074106665
    },
    "MZN": {
      "code": "MZN",
      "value": 63.546209365
    },
    "NAD": {
      "code": "NAD",
      "value": 18.0621020947
    },
    "NGN": {
      "code": "NGN",
      "value": 1505.1268554208
    },
    "NIO": {
      "code": "NIO",
      "value": 36.8114045324
    },
    "NOK": {
      "code": "NOK",
      "value": 10.6017811417
    },
    "NPR": {
      "code": "NPR",
      "value": 133.5541811299
    },
    "NZD": {
      "code": "NZD",
      "value": 1.6311202882
    },
    "OMR": {
      "code": "OMR",
      "value": 0.3830500585
    },
    "OP": {
      "code": "OP",
      "value": 0.6748317116
    },
    "PAB": {
      "code": "PAB",
      "value": 0.9991301879
    },
    "PEN": {
      "code": "PEN",
      "value": 3.7902007113
    },
    "PGK": {
      "code": "PGK",
      "value": 3.8497406749
    },
    "PHP": {
      "code": "PHP",
      "value": 58.5249105487
    },
    "PKR": {
      "code": "PKR",
      "value": 278.362016241
    },
    "PLN": {
      "code": "PLN",
      "value": 3.9388806052
    },
    "PYG": {
      "code": "PYG",
      "value": 7559.3123680084
    },
    "QAR": {
      "code": "QAR",
      "value": 3.6392405052
    },
    "RON": {
      "code": "RON",
      "value": 4.5921208561
    },
    "RSD": {
      "code": "RSD",
      "value": 107.697010528
    },
    "RUB": {
      "code": "RUB",
      "value": 87.5688772975
    },
    "RWF": {
      "code": "RWF",
      "value": 1308.0358537279
    },
    "SAR": {
      "code": "SAR",
      "value": 3.7426805582
    },
    "SBD": {
      "code": "SBD",
      "value": 8.3333586155
    },
    "SCR": {
      "code": "SCR",
      "value": 14.561621856
    },
    "SDG": {
      "code": "SDG",
      "value": 601.5
    },
    "SEK": {
      "code": "SEK",
      "value": 10.5817212172
    },
    "SGD": {
      "code": "SGD",
      "value": 1.3493902696
    },
    "SHP": {
      "code": "SHP",
      "value": 0.7803101492
    },
    "SLL": {
      "code": "SLL",
      "value": 22449.243665756
    },
    "SOL": {
      "code": "SOL",
      "value": 0.0071626327
    },
    "SOS": {
      "code": "SOS",
      "value": 571.583490696
    },
    "SRD": {
      "code": "SRD",
      "value": 29.8741453084
    },
    "STD": {
      "code": "STD",
      "value": 22702.526263763
    },
    "STN": {
      "code": "STN",
      "value": 22.7025255365
    },
    "SVC": {
      "code": "SVC",
      "value": 8.75
    },
    "SYP": {
      "code": "SYP",
      "value": 13001.87562371
    },
    "SZL": {
      "code": "SZL",
      "value": 18.0962028625
    },
    "THB": {
      "code": "THB",
      "value": 36.3997238876
    },
    "TJS": {
      "code": "TJS",
      "value": 10.6681013675
    },
    "TMT": {
      "code": "TMT",
      "value": 3.5
    },
    "TND": {
      "code": "TND",
      "value": 3.1054804264
    },
    "TOP": {
      "code": "TOP",
      "value": 2.3338502903
    },
    "TRY": {
      "code": "TRY",
      "value": 32.6937152039
    },
    "TTD": {
      "code": "TTD",
      "value": 6.7366713217
    },
    "TWD": {
      "code": "TWD",
      "value": 32.5177544353
    },
    "TZS": {
      "code": "TZS",
      "value": 2652.2079765461
    },
    "UAH": {
      "code": "UAH",
      "value": 40.6592151888
    },
    "UGX": {
      "code": "UGX",
      "value": 3704.4263336229
    },
    "USD": {
      "code": "USD",
      "value": 1
    },
    "USDC": {
      "code": "USDC",
      "value": 1.0008043144
    },
    "USDT": {
      "code": "USDT",
      "value": 0.999677666
    },
    "UYU": {
      "code": "UYU",
      "value": 39.9952450485
    },
    "UZS": {
      "code": "UZS",
      "value": 12638.780804753
    },
    "VEF": {
      "code": "VEF",
      "value": 3644339.5764362
    },
    "VES": {
      "code": "VES",
      "value": 36.4433961956
    },
    "VND": {
      "code": "VND",
      "value": 25405.843092121
    },
    "VUV": {
      "code": "VUV",
      "value": 118.8498738571
    },
    "WST": {
      "code": "WST",
      "value": 2.7263665813
    },
    "XAF": {
      "code": "XAF",
      "value": 605.5613841599
    },
    "XAG": {
      "code": "XAG",
      "value": 0.0323950979
    },
    "XAU": {
      "code": "XAU",
      "value": 0.0004233688
    },
    "XCD": {
      "code": "XCD",
      "value": 2.7
    },
    "XDR": {
      "code": "XDR",
      "value": 0.7576301129
    },
    "XOF": {
      "code": "XOF",
      "value": 605.5613762798
    },
    "XPD": {
      "code": "XPD",
      "value": 0.0009819973
    },
    "XPF": {
      "code": "XPF",
      "value": 110.0753953729
    },
    "XPT": {
      "code": "XPT",
      "value": 0.0009917627
    },
    "XRP": {
      "code": "XRP",
      "value": 2.3179410884
    },
    "YER": {
      "code": "YER",
      "value": 249.7838856531
    },
    "ZAR": {
      "code": "ZAR",
      "value": 18.0969018472
    },
    "ZMK": {
      "code": "ZMK",
      "value": 9001.2
    },
    "ZMW": {
      "code": "ZMW",
      "value": 24.6864739165
    },
    "ZWL": {
      "code": "ZWL",
      "value": 13.7518937842
    }
  }
}`)
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})