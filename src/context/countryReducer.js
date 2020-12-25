const countryReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: [...state.countries, ...action.payload]
            };
        case 'GET_COUNTRY_DATA':
            return {
                ...state,
                cases: action.payload.cases,
                recovered: action.payload.recovered,
                deaths: action.payload.deaths,
                todayCases: action.payload.todayCases,
                todayDeaths: action.payload.todayDeaths,
                todayRecovered: action.payload.todayRecovered
            };
        default:
            return state;
    }
};
export default countryReducer;
