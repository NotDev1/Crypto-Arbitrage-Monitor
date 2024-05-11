	const symbols = ["btcusd", "btceur", "btcgbp", "btcpax", "gbpusd", "eurusd", "xrpusd", "xrpeur", "xrpbtc", "xrpgbp", "ltcbtc", "ltcusd", "ltceur", "ltcgbp", "ethbtc", "ethusd", "etheur", "ethgbp", "ethpax", "bchusd", "bcheur", "bchbtc", "paxusd", "xlmbtc", "xlmusd", "xlmeur", "xlmgbp", "linkusd", "linkeur", "linkgbp", "linkbtc", "usdcusd", "usdceur", "btcusdc", "ethusdc", "eth2eth", "aaveusd", "aaveeur", "aavebtc", "batusd", "bateur", "umausd", "umaeur", "daiusd", "kncusd", "knceur", "mkrusd", "mkreur", "zrxusd", "zrxeur", "gusdusd", "algousd", "algoeur", "algobtc", "audiousd", "audioeur", "audiobtc", "crvusd", "crveur", "snxusd", "snxeur", "uniusd", "unieur", "unibtc", "yfiusd", "yfieur", "compusd", "compeur", "grtusd", "grteur", "lrcusd", "lrceur", "usdtusd", "usdteur", "usdcusdt", "btcusdt", "ethusdt", "xrpusdt", "eurteur", "eurtusd", "flrusd", "flreur", "manausd", "manaeur", "maticusd", "maticeur", "sushiusd", "sushieur", "chzusd", "chzeur", "enjusd", "enjeur", "hbarusd", "hbareur", "alphausd", "alphaeur", "axsusd", "axseur", "sandusd", "sandeur", "storjusd", "storjeur", "adausd", "adaeur", "adabtc", "fetusd", "feteur", "sklusd", "skleur", "slpusd", "slpeur", "sxpusd", "sxpeur", "sgbusd", "sgbeur", "avaxusd", "avaxeur", "dydxusd", "dydxeur", "ftmusd", "ftmeur", "shibusd", "shibeur", "ampusd", "ampeur", "ensusd", "enseur", "galausd", "galaeur", "perpusd", "perpeur", "wbtcbtc", "ctsiusd", "ctsieur", "cvxusd", "cvxeur", "imxusd", "imxeur", "nexousd", "nexoeur", "antusd", "anteur", "godsusd", "godseur", "radusd", "radeur", "bandusd", "bandeur", "injusd", "injeur", "rlyusd", "rlyeur", "rndrusd", "rndreur", "vegausd", "vegaeur", "1inchusd", "1incheur", "solusd", "soleur", "apeusd", "apeeur", "mplusd", "mpleur", "eurocusdc", "euroceur", "dotusd", "doteur", "nearusd", "neareur", "ldousd", "ldoeur", "dgldusd", "dgldeur", "dogeusd", "dogeeur", "suiusd", "suiusd", "eurcvusdt", "eurcveur", "pyusdusd", "pyusdeur"];

	const Bitstamp = new Exchange({
		name: "Bitstamp",
		websocketUrl: "wss://ws.bitstamp.net",
		pingTime: 30000,
		pingMessage: { "event": "bts:heartbeat" },
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
				const eventData = JSON.parse(event.data);

				if (eventData.event === 'trade') {
					const tradeData = eventData.data;
					const symbol = eventData.channel.split('_')[2].toUpperCase();
					if (!(symbol in data.data)) {
						data.data[symbol] = {};
					}
					if (!("Bitstamp" in data.data[symbol])) {
						data.data[symbol].Bitstamp = {};
					}
					data.data[symbol].Bitstamp.a = Number(tradeData.price);
					data.data[symbol].Bitstamp.b = Number(tradeData.price);
				}
			} catch (error) {
				console.error("Error parsing Bitstamp data:", error);
			}		
		},
		onReconnectRequest: function (event) {
			console.log("Received forced reconnection request from Bitstamp");
		},
		throttleTime: 10000
	});

	// Wait for the WebSocket connection to be open before sending subscription messages
	Bitstamp.socket.addEventListener('open', () => {
		// Subscribe to each symbol individually
		symbols.forEach(symbol => {
			const channel = `live_trades_${symbol}`;
			Bitstamp.socket.send(JSON.stringify({
				"event": "bts:subscribe",
				"data": {
					"channel": channel
				}
			}));
		});
	});