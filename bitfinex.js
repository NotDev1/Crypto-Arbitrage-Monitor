
	const symbolsBitfinex = ["tBTCUSD", "tLTCUSD", "tLTCBTC", "tETHUSD", "tETHBTC", "tETCBTC", "tETCUSD", "tRRTUSD", "tZECUSD", "tZECBTC", "tXMRUSD", "tXMRBTC", "tDSHUSD", "tDSHBTC", "tBTCEUR", "tBTCJPY", "tXRPUSD", "tXRPBTC", "tIOTUSD", "tIOTBTC", "tEOSUSD", "tEOSBTC", "tEOSETH", "tOMGUSD", "tOMGBTC", "tOMGETH", "tNEOUSD", "tNEOBTC", "tQTMUSD", "tBATUSD", "tMNAUSD", "tMNABTC", "tFUNUSD", "tZRXUSD", "tTRXUSD", "tTRXBTC", "tTRXETH", "tBTCGBP", "tETHEUR", "tETHJPY", "tETHGBP", "tREQUSD", "tLRCUSD", "tDAIUSD", "tXLMUSD", "tXLMBTC", "tXVGUSD", "tMKRUSD", "tKNCUSD", "tLYMUSD", "tUTKUSD", "tZILUSD", "tBNTUSD", "tVETUSD", "tVETBTC", "tXTZUSD", "tXTZBTC", "tTRXEUR", "tMLNUSD", "tOMNUSD", "tPNKUSD", "tUSTUSD", "tEUTEUR", "tEUTUSD", "tUDCUSD", "tTSDUSD", "tPAXUSD", "tVSYUSD", "tBTTUSD", "tBTCUST", "tETHUST", "tLTCUST", "tEOSUST", "tGNOUSD", "tATOUSD", "tATOBTC", "tWBTUSD", "tLEOUSD", "tLEOBTC", "tLEOUST", "tLEOETH", "tGTXUSD", "tKANUSD", "tGTXUST", "tKANUST", "tAMPUSD", "tALGUSD", "tALGBTC", "tALGUST", "tAMPUST", "tUOSUSD", "tUOSBTC", "tAMPBTC", "tPAXUST", "tUDCUST", "tTSDUST", "tCHZUSD", "tCHZUST", "tDOTUSD", "tADAUSD", "tADABTC", "tADAUST", "tFETUSD", "tFETUST", "tDOTUST", "tKSMUSD", "tKSMUST", "tUNIUSD", "tUNIUST", "tSNXUSD", "tSNXUST", "tYFIUSD", "tYFIUST", "tBALUSD", "tBALUST", "tFILUSD", "tFILUST", "tJSTUSD", "tJSTBTC", "tJSTUST", "tXDCUSD", "tXDCUST", "tPLUUSD", "tSUNUSD", "tSUNUST", "tEUTUST", "tXMRUST", "tXRPUST", "tDOTBTC", "tXLMUST", "tSOLUSD", "tSOLUST", "tIDXUSD", "tQTFUSD", "tQTFBTC", "tFTMUSD", "tFTMUST", "tICPUSD", "tICPUST", "tFCLUSD", "tFCLUST", "tGRTUSD", "tGRTUST", "tBTCEUT", "tXRDUSD", "tXRDBTC", "tETCUST", "tNEOUST", "tATOUST", "tXTZUST", "tVETUST", "tTRXUST", "tETHEUT", "tEURUST", "tAXSUSD", "tAXSUST", "tHMTUSD", "tHMTUST", "tSOLBTC", "tMIMUSD", "tMIMUST", "tBTCMIM", "tMKRUST", "tCRVUSD", "tCRVUST", "tDVFUSD", "tWOOUSD", "tWOOUST", "tSGBUSD", "tSGBUST", "tSXXUSD", "tCCDUSD", "tCCDUST", "tGBPUST", "tGBPEUT", "tJPYUST", "tBMNUSD", "tBMNBTC", "tHIXUSD", "tHIXUST", "tAPEUSD", "tAPEUST", "tB2MUSD", "tB2MUST", "tSTGUSD", "tSTGUST", "tVRAUSD", "tVRAUST", "tRLYUSD", "tRLYUST", "tFBTUSD", "tXCNUSD", "tSMRUSD", "tSMRUST", "tAPTUSD", "tAPTUST", "tBTCTRY", "tTRYUST", "tHTXUSD", "tHTXUST", "tFLRUSD", "tFLRUST", "tWBTBTC", "tOGNUSD", "tOGNUST"];

	const batchSizeBitfinex = 10;
	const delayBetweenBatchesBitfinex = 20000;

	// Function to open connections sequentially in batches
	const openConnectionsSequentiallyy = async (symbols, batchSize) => {
	  for (let i = 0; i < symbols.length; i += batchSize) {
		const symbolsBatch = symbols.slice(i, i + batchSize);
		const bitfinexInstance = new Exchange({
		  name: "Bitfinex",
		  websocketUrl: "wss://api-pub.bitfinex.com/ws/2",
		  symbolMap: {},
		  onDataRecieved: function (event) {
			// Throttle the execution of this function
			if (this.throttleTimer) {
			  return; // Already in the throttling period
			}

			// Set a new throttle timer
			this.throttleTimer = setTimeout(() => {
			  this.throttleTimer = null;
			}, this.throttleTime);

			// Process WebSocket data for Bitfinex
			try {
			  const eventData = JSON.parse(event.data);

			  // Check if the event is for ticker data
			  if (eventData.event === 'subscribed' && eventData.channel === 'ticker') {
				// Subscription successful
				const subscribedSymbol = eventData.symbol;
				const chanId = eventData.chanId;

				// Ensure the symbolMap is initialized
				this.symbolMap = this.symbolMap || {};
				// Store the mapping of chanId to symbol in symbolMap
				this.symbolMap[chanId] = subscribedSymbol;
			  } else if (Array.isArray(eventData) && eventData.length > 1) {
				const tickerData = eventData[1];

				// Check if the ticker data array has the expected structure
				if (Array.isArray(tickerData) && tickerData.length >= 10) {
				  const chanId = eventData[0];
				  const bid = tickerData[0];
				  const ask = tickerData[2];

				  // Ensure bid and ask are valid numbers
				  if (!isNaN(bid) && !isNaN(ask)) {
					// Get the symbol from the symbolMap using the chanId
					const symbol = this.symbolMap[chanId];

					// Process the ticker data only if symbol is defined
					if (symbol) {
					  const symbolUpperCase = symbol.replace('t', '').replace('UST', 'USDT').replace('EUT', 'EURT');

					  // Ensure the nested data structure is initialized
					  data.data[symbolUpperCase] = data.data[symbolUpperCase] || {};
					  data.data[symbolUpperCase].Bitfinex = {
						a: Number(ask),
						b: Number(bid),
					  // Add other relevant data fields as needed
					  };
					}
				  }
				}
			  }
			} catch (error) {
			  console.error("Error parsing Bitfinex ticker data:", error);
			}
		  },
		  pingTime: 15000,
		  throttleTime: 10000, // Adjust as needed
		});

		// Implement custom ping-pong mechanism using arrow function
		bitfinexInstance.socket.addEventListener('open', () => {
		  const pingMsg = { event: 'ping' };
		  setInterval(() => {
			if (bitfinexInstance.socket.readyState === WebSocket.OPEN) {
			  bitfinexInstance.socket.send(JSON.stringify(pingMsg));
			}
		  }, bitfinexInstance.pingTime);
		});

		// Use a Promise to wait for the WebSocket to open
		await new Promise((resolve) => {
		  bitfinexInstance.socket.addEventListener('open', resolve);
		});

		symbolsBatch.forEach((symbol, index) => {
		  subscribeWithDelay(bitfinexInstance, symbol, index);
		});

		// Wait for a short duration before opening the next connection
		await new Promise((resolve) => setTimeout(resolve, delayBetweenBatchesBitfinex));
	  }
	};

	const subscribeWithDelay = (exchangeInstance, symbol, index) => {
	  setTimeout(() => {
		const subscriptionMsg = { event: "subscribe", channel: "ticker", symbol: symbol };
		exchangeInstance.socket.send(JSON.stringify(subscriptionMsg));
	  }, index * 30000); // Delay of 3 seconds between each subscription
	};

	openConnectionsSequentiallyy(symbolsBitfinex, batchSizeBitfinex);