	const Kraken = new Exchange({
		name: "Kraken",
		websocketUrl: "wss://ws.kraken.com",
		allTickerSubscribe: {
			"event": "subscribe",
			"pair": ["XBT/USD","ETH/USD","BTC/EUR","1INCH/EUR","1INCH/USD","AAVE/ETH","AAVE/EUR","AAVE/GBP","AAVE/USD","AAVE/XBT","ACA/EUR","ACA/USD","ACH/EUR","ACH/USD","ADA/AUD","ADA/ETH","ADA/EUR","ADA/GBP","ADA/USD","ADA/USDT","ADA/XBT","ADX/EUR","ADX/USD","AGLD/EUR","AGLD/USD","AIR/EUR","AIR/USD","AKT/EUR","AKT/USD","ALCX/EUR","ALCX/USD","ALGO/ETH","ALGO/EUR","ALGO/GBP","ALGO/USD","ALGO/USDT","ALGO/XBT","ALICE/EUR","ALICE/USD","ALPHA/EUR","ALPHA/USD","ANKR/EUR","ANKR/USD","ANKR/XBT","ANT/ETH","ANT/EUR","ANT/USD","ANT/XBT","APE/EUR","APE/USD","APE/USDT","API3/EUR","API3/USD", "APT/EUR","APT/USD","ARB/EUR","ARB/USD","ARPA/EUR","ARPA/USD","ASTR/EUR","ASTR/USD","ATLAS/EUR","ATLAS/USD","ATOM/ETH","ATOM/EUR","ATOM/GBP","ATOM/USD","ATOM/USDT","ATOM/XBT","AUDIO/EUR","AUDIO/USD","AUD/JPY","AUD/USD","AVAX/EUR","AVAX/USD","AVAX/USDT","AXS/EUR","AXS/USD","BADGER/EUR","BADGER/USD","BAL/EUR","BAL/USD","BAL/XBT","BAND/EUR","BAND/USD","BAT/ETH","BAT/EUR","BAT/JPY","BAT/USD","BAT/XBT","BCH/AUD","BCH/ETH","BCH/EUR","BCH/GBP","BCH/JPY","BCH/USD","BCH/USDT","BCH/XBT","BICO/EUR","BICO/USD","BIT/EUR","BIT/USD","BLUR/EUR", "BLUR/USD","BLZ/EUR","BLZ/USD","BNC/EUR","BNC/USD","BNT/EUR","BNT/USD","BNT/XBT","BOBA/EUR","BOBA/USD","BOND/EUR","BOND/USD","BRICK/EUR","BRICK/USD","BSX/EUR","BSX/USD","BTT/EUR","BTT/USD","C98/EUR","C98/USD","CELR/EUR","CELR/USD","CFG/EUR","CFG/USD","CHR/EUR","CHR/USD","CHZ/EUR","CHZ/USD","COMP/EUR","COMP/USD","COMP/XBT","COTI/EUR","COTI/USD","CQT/EUR","CQT/USD","CRV/ETH","CRV/EUR","CRV/USD","CRV/XBT","CSM/EUR","CSM/USD","CTSI/EUR","CTSI/USD","CVC/EUR","CVC/USD","CVX/EUR","CVX/USD","DAI/EUR","DAI/USD","DAI/USDT","DASH/EUR","DASH/USD","DASH/XBT","DENT/EUR","DENT/USD","DOT/ETH","DOT/EUR","DOT/GBP","DOT/JPY","DOT/USD","DOT/USDT","DOT/XBT","DYDX/EUR","DYDX/USD","EGLD/EUR","EGLD/USD","ENJ/EUR","ENJ/GBP","ENJ/JPY","ENJ/USD","ENJ/XBT","ENS/EUR","ENS/USD","EOS/ETH","EOS/EUR","EOS/USD","EOS/USDT","EOS/XBT","ETH2.S/ETH","ETH/AED","ETH/AUD","ETH/CHF","ETH/DAI","ETH/PYUSD","ETH/USDC","ETH/USDT","ETHW/ETH","ETHW/EUR","ETHW/USD","EUL/EUR","EUL/USD","EUR/AUD","EUR/CAD","EUR/CHF","EUR/GBP","EUR/JPY","EURT/EUR","EURT/USD","EURT/USDT", "EWT/EUR","EWT/GBP","EWT/USD","EWT/XBT","FARM/EUR","FARM/USD","FET/EUR","FET/USD","FIDA/EUR","FIDA/USD","FIL/ETH","FIL/EUR","FIL/GBP","FIL/USD","FIL/XBT","FIS/EUR","FIS/USD","FLOW/ETH","FLOW/EUR","FLOW/GBP","FLOW/USD","FLOW/XBT","FLR/EUR","FLR/USD","FORTH/EUR","FORTH/USD","FTM/EUR","FTM/USD","FXS/EUR","FXS/USD","GALA/EUR","GALA/USD","GAL/EUR","GAL/USD","GARI/EUR","GARI/USD","GHST/EUR","GHST/USD","GHST/XBT","GLMR/EUR","GLMR/USD","GMT/EUR","GMT/USD","GMX/EUR","GMX/USD","GNO/EUR","GNO/USD","GNO/XBT","GRT/EUR","GRT/GBP","GRT/USD","GRT/XBT","GST/EUR","GST/USD","GTC/EUR","GTC/USD","HDX/EUR","HDX/USD","HFT/EUR","HFT/USD","ICP/EUR","ICP/USD","ICX/ETH","ICX/EUR","ICX/USD","ICX/XBT","IDEX/EUR","IDEX/USD","IMX/EUR","IMX/USD","INJ/EUR","INJ/USD","INTR/EUR","INTR/USD","JASMY/EUR","JASMY/USD","JUNO/EUR","JUNO/USD","KAR/EUR","KAR/USD","KAVA/ETH","KAVA/EUR","KAVA/USD","KAVA/XBT","KEEP/EUR","KEEP/USD","KEEP/XBT","KEY/EUR","KEY/USD","KILT/EUR","KILT/USD","KIN/EUR","KINT/EUR","KINT/USD","KIN/USD","KNC/ETH","KNC/EUR","KNC/USD","KNC/XBT","KP3R/EUR", "KP3R/USD","KSM/DOT","KSM/ETH","KSM/EUR","KSM/GBP","KSM/USD","KSM/XBT","LCX/EUR","LCX/USD","LDO/EUR","LDO/USD","LINK/AUD","LINK/ETH","LINK/EUR","LINK/GBP","LINK/JPY","LINK/USD","LINK/USDT","LINK/XBT","LMWR/EUR","LMWR/USD","LPT/EUR","LPT/GBP","LPT/USD","LPT/XBT","LRC/EUR","LRC/USD","LSK/ETH","LSK/EUR","LSK/USD","LSK/XBT","LTC/AUD","LTC/ETH","LTC/GBP","LTC/USDT","LUNA2/EUR","LUNA2/USD","LUNA/EUR","LUNA/USD","MANA/ETH","MANA/EUR","MANA/USD","MANA/USDT","MANA/XBT","MASK/EUR","MASK/USD","MATIC/EUR","MATIC/GBP","MATIC/USD","MATIC/USDT","MATIC/XBT","MC/EUR","MC/USD","MINA/EUR","MINA/GBP","MINA/USD","MINA/XBT","MIR/EUR","MIR/USD","MKR/EUR","MKR/USD","MKR/XBT","MNGO/EUR","MNGO/USD","MOON/EUR","MOON/USD","MOVR/EUR","MOVR/USD","MSOL/EUR","MSOL/USD","MULTI/EUR","MULTI/USD","MV/EUR","MV/USD","MXC/EUR","MXC/USD","NANO/ETH","NANO/EUR","NANO/USD","NANO/XBT","NEAR/EUR","NEAR/USD","NMR/EUR","NMR/USD","NODL/EUR","NODL/USD","NYM/EUR","NYM/USD","NYM/XBT","OCEAN/EUR","OCEAN/GBP","OCEAN/USD","OCEAN/XBT","OGN/EUR","OGN/USD","OMG/ETH","OMG/EUR","OMG/JPY","OMG/USD","OMG/XBT","OP/EUR","OP/USD","ORCA/EUR","ORCA/USD","OXT/EUR","OXT/USD","OXT/XBT","OXY/EUR","OXY/USD","PARA/EUR","PARA/USD","PAXG/ETH","PAXG/EUR","PAXG/USD","PAXG/XBT","PEPE/EUR","PEPE/USD","PERP/EUR","PERP/USD","PHA/EUR","PHA/USD","PLA/EUR","PLA/USD","POLIS/EUR","POLIS/USD","POLS/EUR","POLS/USD","POND/EUR","POND/USD","POWR/EUR","POWR/USD","PSTAKE/EUR","PSTAKE/USD","PYTH/EUR","PYTH/USD","PYUSD/EUR","PYUSD/USD","QNT/EUR","QNT/USD","QTUM/ETH","QTUM/EUR","QTUM/USD","QTUM/XBT","RAD/EUR","RAD/USD","RARE/EUR","RARE/USD","RARI/EUR","RARI/USD","RARI/XBT","RAY/EUR","RAY/USD","RBC/EUR","RBC/USD","REN/EUR","REN/USD","REN/XBT","REPV2/ETH","REPV2/EUR","REPV2/USD","REPV2/XBT","REQ/EUR","REQ/USD","RLC/EUR","RLC/USD","RNDR/EUR","RNDR/USD","ROOK/EUR","ROOK/USD","RPL/EUR","RPL/USD","RUNE/EUR","RUNE/USD","SAMO/EUR","SAMO/USD","SAND/EUR","SAND/GBP","SAND/USD","SAND/XBT","SBR/EUR","SBR/USD","SC/ETH","SC/EUR","SCRT/EUR","SCRT/USD","SC/USD","SC/XBT","SDN/EUR","SDN/USD","SEI/EUR","SEI/USD","SGB/EUR","SGB/USD","SHIB/EUR","SHIB/USD","SHIB/USDT","SNX/ETH", "SNX/EUR","SNX/USD","SNX/XBT","SOL/ETH","SOL/EUR","SOL/GBP","SOL/USD","SOL/USDT","SOL/XBT","SPELL/EUR","SPELL/USD","SRM/EUR","SRM/USD","SRM/XBT","STEP/EUR","STEP/USD","STG/EUR","STG/USD","STORJ/EUR","STORJ/USD","STORJ/XBT","STX/EUR","STX/USD","SUI/EUR","SUI/USD","SUPER/EUR","SUPER/USD","SUSHI/EUR","SUSHI/GBP","SUSHI/USD","SUSHI/XBT","SYN/EUR","SYN/USD","TBTC/EUR","TBTC/USD","TBTC/XBT","TEER/EUR","TEER/USD","T/EUR","TIA/EUR","TIA/USD","TLM/EUR","TLM/USD","TOKE/EUR","TOKE/USD","TRU/EUR","TRU/USD","TRX/ETH","TRX/EUR","TRX/USD","TRX/XBT","T/USD","TUSD/EUR","TUSD/USD","TVK/EUR","TVK/USD","UMA/EUR","UMA/USD","UNFI/EUR","UNFI/USD","UNI/ETH","UNI/EUR","UNI/USD","UNI/XBT","USD/AED","USDC/AUD"],
			"subscription": { name: "ticker" }
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

				if (eventData.event === 'systemStatus') {
					// Handle system status message
					return;
				}

				if (eventData.event === 'subscriptionStatus') {
					// Handle subscription status message
					if (eventData.status === 'error') {
						console.error("Subscription error:", eventData.errorMessage);
					}
					return;
				}

				if (eventData.event === 'heartbeat') {
					// Handle heartbeat message (if needed)
					return;
				}

				// If it's a ticker message, proceed with updating data
				const symbol = eventData[3].toUpperCase().replace("/", "").replace("xbt", "btc"); 
				if (!(symbol in data.data)) {
					data.data[symbol] = {};
				}
				if (!("Kraken" in data.data[symbol])) {
					data.data[symbol].Kraken = {};
				}

				// Adjust this part based on Kraken's payload structure
				if (eventData[1] && eventData[1].a && eventData[1].b) {
					data.data[symbol].Kraken.a = Number(eventData[1].a[0]);
					data.data[symbol].Kraken.b = Number(eventData[1].b[0]);
				} else {
					console.warn("Missing 'a' or 'b' properties in the ticker message");
				}
			} catch (error) {
				console.error("Error parsing Ascendex data:", error);
			}		
		},
		throttleTime: 10000
	});