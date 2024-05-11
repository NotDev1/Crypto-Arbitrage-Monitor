	const BinanceUS = new Exchange({
		name: "BinanceUS",
		websocketUrl: "wss://stream.Binance.us:9443/stream?streams=!ticker@arr",
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

				// Check if the event is for ticker data and is an array
				if (eventData.stream === '!ticker@arr' && Array.isArray(eventData.data)) {
					eventData.data.forEach(tickerData => {
						let s = tickerData.s.toUpperCase();
						if (!(s in data.data)) {
							data.data[s] = {};
						}
						if (!("BinanceUS" in data.data[s])) {
							data.data[s].BinanceUS = {};
						}
						data.data[s].BinanceUS.a = Number(tickerData.a);
						data.data[s].BinanceUS.b = Number(tickerData.b);
					});
				} else {
					console.error("Unexpected data format:", eventData);
				}
			} catch (error) {
				console.error("Error parsing Binance US ticker data:", error);
			}
		},
		throttleTime: 10000
	});