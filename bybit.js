	const bybitSymbols = ["BTCUSDT", "ETHUSDT", "XRPUSDT", "EOSUSDT", "ETHBTC", "XRPBTC", "DOTUSDT", "XLMUSDT", "LTCUSDT", "DOGEUSDT", "CHZUSDT", "AXSUSDT", "MANAUSDT", "DYDXUSDT", "MKRUSDT", "COMPUSDT", "AAVEUSDT", "YFIUSDT", "LINKUSDT", "SUSHIUSDT", "UNIUSDT", "KSMUSDT", "ICPUSDT", "ADAUSDT", "ETCUSDT", "KLAYUSDT", "XTZUSDT", "BCHUSDT", "SRMUSDT", "QNTUSDT", "USDCUSDT", "GRTUSDT", "SOLUSDT", "FILUSDT", "OMGUSDT", "TRIBEUSDT", "BATUSDT", "ZRXUSDT", "CRVUSDT", "AGLDUSDT", "ANKRUSDT", "PERPUSDT", "MATICUSDT", "WAVESUSDT", "LUNCUSDT", "SPELLUSDT", "SHIBUSDT", "FTMUSDT", "ATOMUSDT", "ALGOUSDT", "ENJUSDT", "CBXUSDT", "SANDUSDT", "AVAXUSDT", "WOOUSDT", "FTTUSDT", "GODSUSDT", "IMXUSDT", "ENSUSDT", "GMUSDT", "CWARUSDT", "CAKEUSDT", "STETHUSDT", "GALFTUSDT", "LFWUSDT", "SLPUSDT", "C98USDT", "PSPUSDT", "GENEUSDT", "AVAUSDT", "ONEUSDT", "PTUUSDT", "SHILLUSDT", "XYMUSDT", "BOBAUSDT", "JASMYUSDT", "GALAUSDT", "RNDRUSDT", "TRVLUSDT", "WEMIXUSDT", "XEMUSDT", "BICOUSDT", "CELUSDT", "UMAUSDT", "HOTUSDT", "NEXOUSDT", "BNTUSDT", "SNXUSDT", "RENUSDT", "1INCHUSDT", "TELUSDT", "SISUSDT", "LRCUSDT", "LDOUSDT", "REALUSDT", "KRLUSDT", "DEVTUSDT", "ETHUSDC", "BTCUSDC", "1SOLUSDT", "PLTUSDT", "IZIUSDT", "QTUMUSDT", "DCRUSDT", "ZENUSDT", "THETAUSDT", "MXUSDT", "DGBUSDT", "RVNUSDT", "EGLDUSDT", "RUNEUSDT", "XLMBTC", "XLMUSDC", "SOLUSDC", "XRPUSDC", "ALGOBTC", "SOLBTC", "RAINUSDT", "XECUSDT", "ICXUSDT", "XDCUSDT", "HNTUSDT", "BTGUSDT", "ZILUSDT", "HBARUSDT", "FLOWUSDT", "SOSUSDT", "KASTAUSDT", "STXUSDT", "SIDUSUSDT", "VPADUSDT", "GGMUSDT", "LOOKSUSDT", "MBSUSDT", "DAIUSDT", "BUSDUSDT", "ACAUSDT", "MVUSDT", "MIXUSDT", "LTCUSDC", "MANABTC", "MATICBTC", "LTCBTC", "DOTBTC", "SANDBTC", "MANAUSDC", "MATICUSDC", "SANDUSDC", "DOTUSDC", "LUNCUSDC", "RSS3USDT", "SYNRUSDT", "TAPUSDT", "ERTHAUSDT", "GMXUSDT", "TUSDT", "ACHUSDT", "JSTUSDT", "SUNUSDT", "BTTUSDT", "TRXUSDT", "NFTUSDT", "POKTUSDT", "SCRTUSDT", "PSTAKEUSDT", "SONUSDT", "HEROUSDT", "DOMEUSDT", "USTCUSDT", "BNBUSDT", "NEARUSDT", "PAXGUSDT", "SDUSDT", "APEUSDT", "BTC3SUSDT", "BTC3LUSDT", "FIDAUSDT", "MINAUSDT", "SCUSDT", "RACAUSDT", "CAPSUSDT", "STGUSDT", "GLMRUSDT", "MOVRUSDT", "ZAMUSDT", "ETHDAI", "BTCDAI", "WBTCUSDT", "XAVAUSDT", "MELOSUSDT", "GMTUSDT", "GSTUSDT", "CELOUSDT", "SFUNDUSDT", "ELTUSDT", "LGXUSDT", "APEXUSDT", "CTCUSDT", "COTUSDT", "KMONUSDT", "PLYUSDT", "XWGUSDT", "FITFIUSDT", "STRMUSDT", "GALUSDT", "ETH3SUSDT", "ETH3LUSDT", "KOKUSDT", "FAMEUSDT", "XRP3SUSDT", "XRP3LUSDT", "USDDUSDT", "OPUSDT", "LUNAUSDT", "DFIUSDT", "MOVEZUSDT", "THNUSDT", "DOT3SUSDT", "DOT3LUSDT", "VINUUSDT", "BELUSDT", "FORTUSDT", "AVAX2SUSDT", "AVAX2LUSDT", "ADA2SUSDT", "ADA2LUSDT", "WLKNUSDT", "KONUSDT", "LTC2SUSDT", "LTC2LUSDT", "SAND2SUSDT", "SAND2LUSDT", "OBXUSDT", "SEORUSDT", "MNZUSDT", "CULTUSDT", "DOGEUSDC", "EOSUSDC", "CUSDUSDT", "SLGUSDT", "CMPUSDT", "KUNCIUSDT", "GSTSUSDT", "XETAUSDT", "AZYUSDT", "MMCUSDT", "FLOKIUSDT", "BABYDOGEUSDT", "STATUSDT", "SAITAMAUSDT", "MATIC2SUSDT", "MATIC2LUSDT", "ETC2SUSDT", "ETC2LUSDT", "DICEUSDT", "WAXPUSDT", "ARUSDT", "KDAUSDT", "ROSEUSDT", "SLGUSDC", "APE2SUSDT", "APE2LUSDT", "GMT2SUSDT", "GMT2LUSDT", "DEFYUSDT", "PSGUSDT", "BARUSDT", "JUVUSDT", "ACMUSDT", "INTERUSDT", "AFCUSDT", "CITYUSDT", "LINK2LUSDT", "LINK2SUSDT", "FTM2LUSDT", "FTM2SUSDT", "SOLOUSDT", "WBTCBTC", "AVAXUSDC", "ADAUSDC", "OPUSDC", "DOGE2SUSDT", "DOGE2LUSDT", "ATOM2SUSDT", "ATOM2LUSDT", "APEXUSDC", "TRXUSDC", "ICPUSDC", "LINKUSDC", "GMTUSDC", "CHZUSDC", "SHIBUSDC", "LDOUSDC", "APEUSDC", "FILUSDC", "CHRPUSDT", "EOS2SUSDT", "EOS2LUSDT", "WWYUSDT", "LINGUSDT", "SWEATUSDT", "DLCUSDT", "OKGUSDT", "ETHWUSDT", "INJUSDT", "MPLXUSDT", "MIBRUSDT", "COUSDT", "AGLAUSDT", "RONDUSDT", "QMALLUSDT", "PUMLXUSDT", "GCAKEUSDT", "APTUSDT", "APTUSDC", "USDTEUR", "MTKUSDT", "MCRTUSDT", "MASKUSDT", "ECOXUSDT", "HFTUSDC", "HFTUSDT", "KCALUSDT", "PEOPLEUSDT", "TWTUSDT", "ORTUSDT", "HOOKUSDT", "PRIMALUSDT", "MCTUSDT", "OASUSDT", "MAGICUSDT", "MEEUSDT", "TONUSDT", "BONKUSDT", "FLRUSDT", "TIMEUSDT", "3PUSDT", "RPLUSDT", "SSVUSDT", "FXSUSDT", "COREUSDT", "RDNTUSDT", "BLURUSDT", "LISUSDT", "AGIXUSDT", "MDAOUSDT", "ACSUSDT", "HVHUSDT", "GNSUSDT", "DPXUSDT", "PIPUSDT", "PRIMEUSDT", "EVERUSDT", "VRAUSDT", "GPTUSDT", "FBUSDT", "DZOOUSDT", "IDUSDT", "ARBUSDC", "ARBUSDT", "XCADUSDT", "MBXUSDT", "AXLUSDT", "CGPTUSDT", "PLAYUSDT", "AGIUSDT", "RLTMUSDT", "SUIUSDT", "SUIUSDC", "TAMAUSDT", "MVLUSDT", "PEPEUSDT", "LADYSUSDT", "LMWRUSDT", "BOBUSDT", "TOMIUSDT", "KARATEUSDT", "SUIAUSDT", "TURBOSUSDT", "FMBUSDT", "CAPOUSDT", "TENETUSDT", "VELOUSDT", "ELDAUSDT", "CANDYUSDT", "FONUSDT", "OMNUSDT", "TOMSUSDT", "MTCUSDT", "VELAUSDT", "USDTBRZ", "BTCBRZ", "PENDLEUSDT", "EGOUSDT", "PEPE2USDT", "NYMUSDT", "MNTUSDT", "MNTUSDC", "MNTBTC", "GSWIFTUSDT", "SALDUSDT", "ARKMUSDT", "NEONUSDT", "WLDUSDC", "WLDUSDT", "PLANETUSDT", "DSRUNUSDT", "SPARTAUSDT", "TAVAUSDT", "SEILORUSDT", "SEIUSDT", "CYBERUSDT", "ORDIUSDT", "KAVAUSDT", "VVUSDT", "SAILUSDT", "PYUSDUSDT", "SOLEUR", "USDCEUR", "ADAEUR", "DOGEEUR", "LTCEUR", "XRPEUR", "ETHEUR", "BTCEUR", "VEXTUSDT", "CTTUSDT", "NEXTUSDT", "KASUSDT", "NESSUSDT", "CATUSDT", "FETUSDT", "LEVERUSDT", "VEGAUSDT", "ZTXUSDT", "JEFFUSDT", "PPTUSDT", "TUSDUSDT", "BEAMUSDT", "POLUSDT", "TIAUSDT", "TOKENUSDT", "MEMEUSDT", "SHRAPUSDT", "RPKUSDT", "FLIPUSDT", "CRDSUSDT", "VRTXUSDT", "ROOTUSDT", "PYTHUSDT", "MLKUSDT", "TVKUSDT", "KUBUSDT", "5IREUSDT", "KCSUSDT", "VANRYUSDT", "INSPUSDT", "JTOUSDT", "METHUSDT", "METHETH", "CBKUSDT", "ZIGUSDT", "TRCUSDT", "FMCUSDT", "MYRIAUSDT", "AKIUSDT", "MBOXUSDT", "IRLUSDT", "ARTYUSDT", "GRAPEUSDT"];

	const batchSizebybit = 10;

	const openBybitConnection = (symbolsBatch) => {
	  const subscriptionArgs = symbolsBatch.map(symbol => `publicTrade.${symbol}`);

	  const Bybit = new Exchange({
		name: "Bybit",
		websocketUrl: "wss://stream.bybit.com/v5/public/spot",
		allTickerSubscribe: { "op": "subscribe", "args": subscriptionArgs },
		onopen: function (event) {
		  // Connection opened. You can now safely send data.
		  console.log("WebSocket connection opened");

		  if (this.allTickerSubscribe) {
			this.socket.send(JSON.stringify(this.allTickerSubscribe));
		  }
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
			// Check if the message is a trade data message
			if (message.topic && message.topic.startsWith('publicTrade.')) {
			  const symbol = message.topic.replace('publicTrade.', '');
			  const s = symbol.toUpperCase();

			  if (!(s in data.data)) {
				data.data[s] = {};
			  }
			  if (!("Bybit" in data.data[s])) {
				data.data[s].Bybit = {};
			  }

			  message.data.forEach(trade => {
				if (trade.S === 'Sell') {
				  data.data[s].Bybit.a = Number(trade.p);
				} else if (trade.S === 'Buy') {
				  data.data[s].Bybit.b = Number(trade.p);
				}
			  });
			} 
		  } catch (error) {
			console.error("Error parsing Bybit data:", error);
		  }	  
		},
		onclose: function (event) {
		  const statusElement = document.getElementById(this.id);
		  statusElement.innerHTML = "Connection closed.";
		  statusElement.style.color = "gray";

		  // Reconnect only if the checkbox is checked
		  if (this.selected) {
			// Example: Automatically reopen the WebSocket after a delay
			setTimeout(() => {
			  this.open();
			}, 5000);
		  }
		},
		onerror: function (event) {
		  const statusElement = document.getElementById(this.id);
		  console.error("WebSocket error:", event);
		  statusElement.innerHTML = "Connection Failed";
		  statusElement.style.color = "red";
		},
		pingTime: 20000,
		pingMessage: { "op": "ping" },
		throttleTime: 30000
	  });
	  return Bybit;
	};

	// Function to open connections sequentially
	const openConnectionsSequentially = async () => {
	  for (let i = 0; i < bybitSymbols.length; i += batchSizebybit) {
		const symbolsBatch = bybitSymbols.slice(i, i + batchSizebybit);
		const BybitInstance = openBybitConnection(symbolsBatch);
		// Wait for a short duration before opening the next connection
		await new Promise(resolve => setTimeout(resolve, 20000)); // Adjust the delay duration as needed
	  }
	};
	// Call the function to open connections sequentially
	openConnectionsSequentially();