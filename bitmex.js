	const Bitmex = new Exchange({
		name: "Bitmex",
		websocketUrl: "wss://ws.bitmex.com/realtime?subscribe=trade",
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

				if (eventData.data && eventData.data.length > 0) {
					eventData.data.forEach(tradeData => {
						let symbol = tradeData.symbol.toUpperCase();
						symbol = symbol.replace("xbt", "btc");
						
						if (!(symbol in data.data)) {
							data.data[symbol] = {};
						}
						if (!("Bitmex" in data.data[symbol])) {
							data.data[symbol].Bitmex = {};
						}

						// Check both ask and bid in each iteration
						if (tradeData.side === 'Sell') {
							data.data[symbol].Bitmex.a = Number(tradeData.price);
						} else if (tradeData.side === 'Buy') {
							data.data[symbol].Bitmex.b = Number(tradeData.price);
						}
					});
				}
			} catch (error) {
				console.error("Error parsing BitMEX data:", error);
			}		
		},
		throttleTime: 10000
	});