	const symbolsToSubscribe = ["BTC-EUR", "ETH-EUR", "SOL-EUR", "DOGE-EUR", "1INCH-EUR", "ADA-EUR", "AVAX-EUR", "COMP-EUR", "CRV-EUR", "DOT-EUR", "DYDX-EUR", "EOS-EUR", "LINK-EUR", "LTC-EUR", "SHIB-EUR", "SUSHI-EUR", "TRX-EUR", "UNI-EUR", "USDT-EUR", "USDC-EUR", "USDT-TRY", "BTC-USDT", "ETH-USDT", "OKB-USDT", "MATIC-USDT", "XRP-USDT", "SOL-USDT", "DOGE-USDT", "AVIVE-USDT", "OP-USDT", "SATS-USDT", "ORDI-USDT", "ARTY-USDT", "ACE-USDT", "1INCH-USDT", "AAVE-USDT", "ACA-USDT", "ACH-USDT", "ADA-USDT", "AERGO-USDT", "AGIX-USDT", "AGLD-USDT", "AIDOGE-USDT", "AKITA-USDT", "ALCX-USDT", "ALGO-USDT", "ALPHA-USDT", "ANT-USDT", "APE-USDT", "API3-USDT", "APM-USDT", "APT-USDT", "AR-USDT", "ARB-USDT", "ARG-USDT", "AST-USDT", "ASTR-USDT", "ATOM-USDT", "AUCTION-USDT", "AVAX-USDT", "AXS-USDT", "AZY-USDT", "BABYDOGE-USDT", "BADGER-USDT", "BAL-USDT", "BAND-USDT", "BAT-USDT", "BCH-USDT", "BETH-USDT", "BICO-USDT", "BIGTIME-USDT", "BLOK-USDT", "BLUR-USDT", "BNB-USDT", "BNT-USDT", "BONE-USDT", "BORING-USDT", "BORA-USDT", "BRWL-USDT", "BSV-USDT", "BTT-USDT", "BZZ-USDT", "CAPO-USDT", "CEEK-USDT", "CELO-USDT", "CEL-USDT", "CELR-USDT", "CETUS-USDT", "CFG-USDT", "CFX-USDT", "CGL-USDT", "CHZ-USDT", "CITY-USDT", "CLV-USDT", "COMP-USDT", "CONV-USDT", "CORE-USDT", "CQT-USDT", "CRO-USDT", "CRV-USDT", "CSPR-USDT", "CTC-USDT", "CTXC-USDT", "CVC-USDT", "CVP-USDT", "CVX-USDT", "DAI-USDT", "DAO-USDT", "DASH-USDT", "DCR-USDT", "DEP-USDT", "DGB-USDT", "DIA-USDT", "DOME-USDT", "DORA-USDT", "DOSE-USDT", "DOT-USDT", "DYDX-USDT", "EGLD-USDT", "ELF-USDT", "ELON-USDT", "EM-USDT", "ENJ-USDT", "ENS-USDT", "EOS-USDT", "ERN-USDT", "ETC-USDT", "ETHW-USDT", "EURT-USDT", "FAME-USDT", "FET-USDT", "FIL-USDT", "FITFI-USDT", "FLM-USDT", "FLOW-USDT", "FLOKI-USDT", "FLR-USDT", "FORTH-USDT", "FRONT-USDT", "FSN-USDT", "FTM-USDT", "FXS-USDT", "GALA-USDT", "GALFT-USDT", "GAL-USDT", "GARI-USDT", "GAS-USDT", "GEAR-USDT", "GF-USDT", "GFT-USDT", "GHST-USDT", "GLM-USDT", "GLMR-USDT", "GMT-USDT", "GMX-USDT", "GOAL-USDT", "GODS-USDT", "GOG-USDT", "GRT-USDT", "HBAR-USDT", "HC-USDT", "ICP-USDT", "ICX-USDT", "ID-USDT", "IGU-USDT", "ILV-USDT", "IMX-USDT", "INJ-USDT", "IOST-USDT", "IOTA-USDT", "IQ-USDT", "JOE-USDT", "JPG-USDT", "JST-USDT", "KAN-USDT", "KAR-USDT", "KCAL-USDT", "KDA-USDT", "KINE-USDT", "KISHU-USDT", "KLAY-USDT", "KNC-USDT", "KONO-USDT", "KP3R-USDT", "KSM-USDT", "LAMB-USDT", "LAT-USDT", "LBR-USDT", "LDO-USDT", "LEASH-USDT", "LEO-USDT", "LET-USDT", "LHINU-USDT", "LINK-USDT", "LING-USDT", "LITH-USDT", "LON-USDT", "LOOKS-USDT", "LPT-USDT", "LQTY-USDT", "MASK-USDC", "MDT-USDC", "MEME-USDC", "MENGO-USDC", "METIS-USDC", "MILO-USDC", "MINA-USDC", "MKR-USDC", "MLN-USDC", "MOVR-USDC", "MOVEZ-USDC", "MRST-USDC", "MXC-USDC", "MYRIA-USDC", "NEAR-USDC", "NEO-USDC", "NFT-USDC", "NMR-USDC", "NULS-USDC", "NYM-USDC", "OAS-USDC", "OKT-USDC", "OM-USDC", "OMG-USDC", "OMI-USDC", "OMN-USDC", "ONE-USDC", "ONT-USDC", "ORBS-USDC", "ORB-USDC", "OXT-USDC", "PCI-USDC", "PEOPLE-USDC", "PEPE-USDC", "PERP-USDC", "PHA-USDC", "PIT-USDC", "POLS-USDC", "POLYDOGE-USDC", "POR-USDC", "PRQ-USDC", "PSTAKE-USDC", "PYTH-USDC", "QTUM-USDC", "RACA-USDC", "RADAR-USDC", "RAY-USDC", "RDNT-USDC", "REN-USDC", "REP-USDC", "REVV-USDC", "RIO-USDC", "RNDR-USDC", "RON-USDC", "RPL-USDC", "RSR-USDC", "RSS3-USDC", "RVN-USDC", "SAMO-USDC", "SAND-USDC", "SC-USDC", "SD-USDC", "SHIB-USDC", "SIS-USDC", "SKEB-USDC", "SKL-USDC", "SLP-USDC", "SNT-USDC", "SNX-USDC", "SPELL-USDC", "SPURS-USDC", "SSV-USDC", "SSWP-USDC", "STARL-USDC", "STC-USDC", "STETH-USDC", "STORJ-USDC", "STX-USDC", "SUI-USDC", "SUN-USDC", "SUSHI-USDC", "SWEAT-USDC", "SWFTC-USDC", "T-USDC", "TAKI-USDC", "TAMA-USDC", "THETA-USDC", "THG-USDC", "TIA-USDC", "TON-USDC", "TRA-USDC", "TRB-USDC", "TRX-USDC", "TUP-USDC", "TURBO-USDC", "UMA-USDC", "UNI-USDC", "USDC-USDC", "USTC-USDC", "UTK-USDC", "VELO-USDC", "VELODROME-USDC", "VELA-USDC", "VRA-USDC", "VSYS-USDC", "WAVES-USDC", "WAXP-USDC", "WBTC-USDC", "WGRT-USDC", "WIFI-USDC", "WIN-USDC", "WLD-USDC", "WNCG-USDC", "WOO-USDC", "WSB-USDC", "WSM-USDC", "WXT-USDC", "XAUT-USDC", "XCH-USDC", "XEC-USDC", "XEM-USDC", "XETA-USDC", "XLM-USDC", "XMR-USDC", "XNO-USDC", "XPR-USDC", "XTZ-USDC", "YFI-USDC", "YFII-USDC", "YGG-USDC", "ZBC-USDC", "ZEC-USDC", "ZEN-USDC", "ZIL-USDC", "ZKS-USDC", "ZRX-USDC", "BTC-USDC", "ETH-USDC", "OKB-USDC", "MATIC-USDC", "XRP-USDC", "SOL-USDC", "DOGE-USDC", "OP-USDC", "1INCH-USDC", "AAVE-USDC", "ADA-USDC", "AGLD-USDC", "ALGO-USDC", "ANT-USDC", "APE-USDC", "APT-USDC", "AR-USDC", "ASTR-USDC", "ATOM-USDC", "AVAX-USDC", "BCH-USDC", "BLUR-USDC", "BNB-USDC", "BSV-USDC", "CEL-USDC", "CHZ-USDC", "COMP-USDC", "CRO-USDC", "CRV-USDC", "CSPR-USDC", "DOT-USDC", "DYDX-USDC", "EGLD-USDC", "EOS-USDC", "ETC-USDC", "ETHW-USDC", "FIL-USDC", "FLOW-USDC", "FLOKI-USDC", "FLR-USDC", "FTM-USDC", "GALA-USDC", "GRT-USDC", "HBAR-USDC", "ICP-USDC", "JST-USDC", "KLAY-USDC", "KNC-USDC", "KSM-USDC", "LINK-USDC", "LOOKS-USDC", "LRC-USDC", "LSK-USDC", "LTC-USDC", "LUNC-USDC", "LUNA-USDC", "MAGIC-USDC", "MANA-USDC", "MASK-USDC", "MINA-USDC", "MKR-USDC", "NEAR-USDC", "OKT-USDC", "RDNT-USDC", "RPL-USDC", "SAND-USDC", "SHIB-USDC", "SNX-USDC", "STORJ-USDC", "STX-USDC", "SUSHI-USDC", "TON-USDC", "TRX-USDC", "UNI-USDC", "USDT-USDC", "WAVES-USDC", "XLM-USDC", "XMR-USDC", "YFII-USDC", "YGG-USDC", "ZEC-USDC", "ZIL-USDC", "BTC-DAI", "ETH-DAI", "ETH-BTC", "OKB-BTC", "MATIC-BTC", "XRP-BTC", "SOL-BTC", "DOGE-BTC", "AAVE-BTC", "ADA-BTC", "ATOM-BTC", "AVAX-BTC", "BCH-BTC", "BSV-BTC", "CHZ-BTC", "CRO-BTC", "CRV-BTC", "DASH-BTC", "DOT-BTC", "EOS-BTC", "ETC-BTC", "FIL-BTC", "GRT-BTC", "HBAR-BTC", "LINK-BTC", "LTC-BTC", "MANA-BTC", "MKR-BTC", "NEAR-BTC", "NEO-BTC", "OKT-BTC", "QTUM-BTC", "SHIB-BTC", "STX-BTC", "TRX-BTC", "UNI-BTC", "WBTC-BTC", "XCH-BTC", "XLM-BTC", "XMR-BTC", "ZEC-BTC", "ZEN-BTC", "OKB-ETH", "XRP-ETH", "SOL-ETH", "DOGE-ETH", "ADA-ETH", "ATOM-ETH", "BETH-ETH", "EOS-ETH", "FIL-ETH", "LINK-ETH", "LTC-ETH", "OKT-ETH", "STETH-ETH", "TRX-ETH", "XMR-ETH", "OKDOT2-DOT", "BTC-EURT", "ETH-EURT"]; // Add more symbols as needed

	const OKX = new Exchange({
	  name: "OKX",
	  websocketUrl: "wss://ws.okx.com:8443/ws/v5/public",
	  allTickerSubscribe: {
		"op": "subscribe",
		"args": symbolsToSubscribe.map(symbol => ({
		  "channel": "trades",
		  "instId": symbol
		}))
	  },
	  onDataRecieved: function (event) {
        // Throttle the execution of this function
        if (this.throttleTimer) {
            return; // Already in the throttling period
        }

        // Set a new throttle timer
        this.throttleTimer = setTimeout(() => {
            this.throttleTimer = null;
        }, this.throttleTime);	  
		try {
		  const message = JSON.parse(event.data);

		  // Check if the message is a trades data message
		  if (message.arg && message.arg.channel === 'trades' && message.data) {
			const tradesData = message.data[0];
			const symbol = tradesData.instId.toUpperCase().replace("-", "");

			if (!(symbol in data.data)) {
			  data.data[symbol] = {};
			}
			if (!("OKX" in data.data[symbol])) {
			  data.data[symbol].OKX = {};
			}

			if (tradesData.side === 'sell') {
			  data.data[symbol].OKX.a = Number(tradesData.px);
			} else if (tradesData.side === 'buy') {
			  data.data[symbol].OKX.b = Number(tradesData.px);
			}
		  }
		} catch (error) {
		  console.error("Error parsing OKX data:", error);
		}	
	  },
	  throttleTime: 10000
	});