	const Ascendex = new Exchange({
	  name: "Ascendex",
	  websocketUrl: "wss://ascendex.com/1/api/pro/v1/stream",
	  allTickerSubscribe: {
		"op": "sub",
		"id": "abc123",
		"ch": "trades:*"
	  },
	  pingTime: 10000, // Set the ping time to 15 seconds (adjust as needed)
	  pingMessage: { "op": "ping", "hp": 3 },
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
		  if (eventData.m === 'trades') {
			const tradeData = eventData.data[0];
			const symbol = eventData.symbol.toUpperCase().replace("/", "");
			if (!(symbol in data.data)) {
			  data.data[symbol] = {};
			}
			if (!("Ascendex" in data.data[symbol])) {
			  data.data[symbol].Ascendex = {};
			}
			data.data[symbol].Ascendex.a = Number(tradeData.p);
			data.data[symbol].Ascendex.b = Number(tradeData.p);
		  }
		} catch (error) {
		  console.error("Error parsing Ascendex data:", error);
		}	
	  },
	  onPing: function (event) {
		// Handle server pong response here
		const pongData = JSON.parse(event.data);
		if (pongData.m === 'pong' && pongData.code === 0) {
		  const serverTime = new Date(pongData.ts);
		  const healthPoint = pongData.hp;
		  console.log(`Received Pong. Server Time: ${serverTime}, Health Point: ${healthPoint}`);
		}
	  },
	  throttleTime: 10000
	});