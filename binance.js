    const Binance = new Exchange({
        name: "Binance",
        websocketUrl: "wss://stream.binance.com:9443/ws/!ticker@arr",
        onDataRecieved: function (event) {
			// Throttle the execution of this function
			if (this.throttleTimer) {
				return; // Already in the throttling period
			}

			// Set a new throttle timer
			this.throttleTimer = setTimeout(() => {
				this.throttleTimer = null;
			}, this.throttleTime);

            // Process WebSocket data
            try {
                JSON.parse(event.data).forEach(item => {
                    let s = item["s"].toUpperCase();
                    if (!(s in data.data)) {
                        data.data[s] = {};
                    }
                    if (!("Binance" in data.data[s])) {
                        data.data[s].Binance = {};
                    }
                    data.data[s].Binance.a = Number(item.a);
                    data.data[s].Binance.b = Number(item.b);
                });
            } catch (error) {
                console.error(`Error parsing Binance data:`, error);
            }
        },
        throttleTime: 10000
    });