	const Wazirx = new Exchange({
		name: "Wazirx",
		websocketUrl: "wss://stream.wazirx.com/stream",
		allTickerSubscribe: { "event": "subscribe", "streams": ["!ticker@arr"] },
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

				// Check if the event is a trade event
				if (eventData.stream === '!ticker@arr' && Array.isArray(eventData.data)) {
					eventData.data.forEach(tradeData => {
						let s = tradeData.s.toUpperCase();
						if (!(s in data.data)) {
							data.data[s] = {};
						}
						if (!("Wazirx" in data.data[s])) {
							data.data[s].Wazirx = {};
						}
						data.data[s].Wazirx.a = Number(tradeData.a);
						data.data[s].Wazirx.b = Number(tradeData.b);
					});
				} 
			} catch (error) {
				console.error("Error parsing Ascendex data:", error);
			}		
		},
		throttleTime: 10000
	});