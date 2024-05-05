# Crypto-Arbitrage-Monitor
Crypto Arbitrage Monitor allows you to find opportunities between crypto exchanges where a price can be lower on one exchange and more expensive on another one.

In public files you can see a version of a crypto arbitrage monitor using websocket to recive fast data.



![Crypto Arbitrage Monitorblack-1](https://github.com/NotDev1/Crypto-Arbitrage-Monitor/assets/163204762/73868452-d5ea-4c38-87ae-742905045957)


# Exchange informations provided by their API

| Exchange  | ASK / BID | Withdraw / Deposit | Fee | Volume24h | Chart | Orderbook |
|-----------|-----------|--------------------|-----|-----------|-------|-----------|
| Ascendex  | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Azbit     | ✔️        | ❌                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Bequant   | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Bigone    | ✔️        | ❌                 | ❌  | ✔️        | ✔️    | ✔️        |
| Binance   | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| BinanceUS | ✔️        | ❌                 | ❌  | ✔️        | ✔️    | ✔️        |
| Bingx     | ❌ (in develop) | ❌            | ❌  | ❌        | ❌    | ❌        |
| Bitbns    | ✔️        | ❌                 | ❌  | ✔️        | ❌    | ✔️ (trade history ❌) |
| Bitdelta  | ✔️        | ✔️                 | ❌ (only maker/taker) | ✔️ | ✔️ | ✔️        |
| Bitfinex  | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Bitget    | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Bitmart   | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Bitso     | ✔️        | ❌                 | ❌  | ✔️        | ❌    | ✔️        |
| Bitstamp  | ✔️        | ✔️(no chains)      | ❌  | ✔️        | ✔️    | ✔️        |
| Bitrue    | ✔️        | ✔️                 | ❌  | ❌        | ✔️    | ✔️        |
| Bitvavo   | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Bybit     | ✔️        | ❌                 | ❌  | ✔️        | ✔️    | ✔️        |
| Coinbase  | ❌ (only last price) | ✔️   | ❌  | ✔️        | ✔️    | ✔️        |
| Coinex    | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Delta     | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Digifinex | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Exmo      | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Fmfw      | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Gateio    | ✔️        | ✔️                 | ❌  | ✔️        | ✔️    | ✔️        |
| Hitbtc    | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Huobi     | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Kraken    | ✔️        | ✔️(no chains)      | ❌  | ✔️        | ✔️    | ✔️        |
| Kucoin    | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Mexc      | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Okx       | ✔️        | ❌                 | ❌  | ✔️        | ✔️    | ❌        |
| Phemex    | ✔️        | ✔️                 | ❌  | ✔️        | ✔️    | ✔️ (Scaled!) |
| Poloniex  | ✔️        | ✔️                 | ✔️  | ✔️        | ✔️    | ✔️        |
| Probit    | ❌ (only last price) | ✔️   | ✔️  | ✔️        | ✔️    | ✔️        |
| Timex     | ✔️        | ✔️                 | ❌  | ✔️        | ✔️    | ❌        |
| Wazirx    | ✔️        | ❌                 | ❌  | ✔️        | ✔️    | ✔️        |
| Websea    | ✔️        | ✔️                 | ❌  | ❌        | ✔️    | ✔️        |
| Whitebit  | ✔️        | ✔️                 | ❌  | ❌        | ✔️    | ✔️        |
