
const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                CoinFullName: action.coinfullname,
                CoinSymbol: action.coinsymbol,
                CoinImage: action.coinimage,
                CoinPrice: action.coinprice,
                CoinDailyChange: action.coindailychange,
            };
        case 'SET_SWAP1TOKEN':
            return {
                ...state,
                Swap1Token: action.swap1token,
            };
        case 'SET_SWAP2TOKEN':
            return {
                ...state,
                Swap2Token: action.swap2token,
            };
        case 'ADD_POST':
            return {
                ...state,
                CoinFullName: state.CoinFullName.concat(action.coinfullname),
                CoinSymbol: state.CoinSymbol.concat(action.coinsymbol),
                CoinImage: state.CoinImage.concat(action.coinimage),
            };
        case 'ADD_COINPRICE':
            return {
                ...state,
                CoinPrice: state.CoinPrice.concat(action.coinprice),
            };
        case 'ADD_COINDAILYCHANGE':
            return {
                ...state,
                CoinDailyChange: state.CoinDailyChange.concat(action.coindailychange),
            };
        case 'REMOVE_POST':
            return {
                ...state,
                CoinFullName: state.CoinFullName.filter(coinfullname => coinfullname !== action.coinfullname),
                CoinSymbol: state.CoinSymbol.filter(coinsymbol => coinsymbol !== action.coinsymbol),
                CoinImage: state.CoinImage.filter(coinimage => coinimage !== action.coinimage),
                CoinPrice: state.CoinPrice.filter(coinprice => coinprice !== action.coinprice),
                CoinDailyChange: state.CoinDailyChange.filter(coindailychange => coindailychange !== action.coindailychange),
            };
        default:
            return state;
    }
};

export default Reducer;