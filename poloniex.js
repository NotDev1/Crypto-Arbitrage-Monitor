	const Poloniex = new Exchange({
		name: "Poloniex",
		websocketUrl: "wss://ws.poloniex.com/ws/public",
		allTickerSubscribe: {
			event: "subscribe",
			channel: ["trades"],
			symbols: ["all"]
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
				const eventData = JSON.parse(event.data);

				if (eventData.event === 'subscribe' || eventData.event === 'pong') {
					// Subscription confirmation or pong event, ignore
					return;
				}

				if (eventData.channel !== 'trades' || !eventData.data || eventData.data.length === 0) {
					// Unexpected data, log and ignore
					console.error("Unexpected data from Poloniex:", eventData);
					return;
				}

				const tradeData = eventData.data[0];

				let symbol = tradeData.symbol.toUpperCase();
				symbol = symbol.replace("_", ""); // Adjust as needed

				if (!(symbol in data.data)) {
					data.data[symbol] = {};
				}

				if (!("Poloniex" in data.data[symbol])) {
					data.data[symbol].Poloniex = {};
				}

				if (tradeData.takerSide === 'sell') {
					data.data[symbol].Poloniex.a = Number(tradeData.price);
				} else if (tradeData.takerSide === 'buy') {
					data.data[symbol].Poloniex.b = Number(tradeData.price);
				}

				// Your additional logic here if needed

			} catch (error) {
				console.error("Error parsing Poloniex data:", error);
			}
		},
		throttleTime: 10000,
		pingTime: 10000,
		pingMessage: { event: "ping" },
	});