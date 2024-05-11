	const Gemini = new Exchange({
		name: "Gemini",
		websocketUrl: "wss://api.gemini.com/v1/multimarketdata?symbols=btcusd,ethbtc,ethusd,zecusd,zecbtc,zeceth,zecbch,zecltc,bchusd,bchbtc,bcheth,ltcusd,ltcbtc,ltceth,ltcbch,batusd,daiusd,linkusd,oxtusd,batbtc,linkbtc,oxtbtc,bateth,linketh,oxteth,ampusd,compusd,paxgusd,mkrusd,zrxusd,manausd,storjusd,snxusd,crvusd,uniusd,renusd,umausd,yfiusd,btcdai,ethdai,aaveusd,filusd,btceur,btcgbp,etheur,ethgbp,btcsgd,ethsgd,sklusd,grtusd,lrcusd,sandusd,cubeusd,lptusd,maticusd,injusd,sushiusd,dogeusd,ftmusd,ankrusd,btcgusd,ethgusd,ctxusd,xtzusd,axsusd,lunausd,dogebtc,dogeeth,rareusd,qntusd,maskusd,fetusd,api3usd,usdcusd,shibusd,rndrusd,galausd,ensusd,elonusd,tokeusd,ldousd,rlyusd,solusd,apeusd,gusdsgd,qrdousd,zbcusd,chzusd,jamusd,gmtusd,aliusd,gusdgbp,dotusd,ernusd,galusd,samousd,imxusd,iotxusd,avaxusd,atomusd,usdtusd,btcusdt,ethusdt,pepeusd,xrpusd,hntusd",
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
		  if (eventData.type === 'update' && Array.isArray(eventData.events)) {
			eventData.events.forEach(tradeEvent => {
			  if (tradeEvent.type === 'trade') {
				let symbol = tradeEvent.symbol.toUpperCase(); // Use the symbol as the key
				if (!(symbol in data.data)) {
				  data.data[symbol] = {};
				}
				if (!("Gemini" in data.data[symbol])) {
				  data.data[symbol].Gemini = {};
				}
				data.data[symbol].Gemini.a = Number(tradeEvent.price);
				data.data[symbol].Gemini.b = Number(tradeEvent.price);
			  }
			});
		  }
		} catch (error) {
		  console.error("Error parsing Gemini data:", error);
		}	
	  },
	  throttleTime: 10000
	});