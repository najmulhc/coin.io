import React from 'react'
import { useDispatch } from 'react-redux';
import { setCurrency } from '../../Feature/currencySlice'
const CurrencySelector = () => {
    const dispatch = useDispatch();
    const currencies = [
        "aed",
        "ars",
        "aud",
        "bch",
        "bdt",
        "bhd",
        "bmd",
        "bnb",
        "brl",
        "btc",
        "cad",
        "chf",
        "clp",
        "cny",
        "czk",
        "dkk",
        "dot",
        "eos",
        "eth",
        "eur",
        "gbp",
        "hkd",
        "huf",
        "idr",
        "ils",
        "inr",
        "jpy",
        "krw",
        "kwd",
        "lkr",
        "ltc",
        "mmk",
        "mxn",
        "myr",
        "ngn",
        "nok",
        "nzd",
        "php",
        "pkr",
        "pln",
        "rub",
        "sar",
        "sek",
        "sgd",
        "thb",
        "try",
        "twd",
        "uah",
        "usd",
        "vef",
        "vnd",
        "xag",
        "xau",
        "xdr",
        "xlm",
        "xrp",
        "yfi",
        "zar",
        "bits",
        "link",
        "sats",
      ];
  return (
    <select
    name=""
    id=""
    className="w-full  md:w-21 bg-neutral text-white opacity-50 mr-12 font-semibold"
    onChange={(e) => dispatch(setCurrency(e.target.value))}
  >
    {currencies.map((currency) => (
      <option value={currency} key={currency}>
        {currency.toUpperCase()}
      </option>
    ))}
  </select>
  )
}

export default CurrencySelector