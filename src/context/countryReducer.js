const countryReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: [...state.countries, ...action.payload]
            };
        case 'GET_SORTED_COUNTRIES':
            return {
                ...state,
                sortedCountries: [...state.sortedCountries, ...action.payload]
            };
        case 'GET_HISTORICAL':
            return {
                ...state,
                historical: action.payload
            };
        case 'SET_CASES_TYPE':
            return {
                ...state,
                casesType: action.payload
            };
        case 'GET_COUNTRY_DATA':
            return {
                ...state,
                selectedCountry: action.payload,
                cases: action.payload.cases,
                recovered: action.payload.recovered,
                deaths: action.payload.deaths,
                todayCases: action.payload.todayCases,
                todayDeaths: action.payload.todayDeaths,
                todayRecovered: action.payload.todayRecovered,
                selectedLat: action.payload.countryInfo
                    ? action.payload.countryInfo.lat
                    : state.selectedLat,
                selectedLong: action.payload.countryInfo
                    ? action.payload.countryInfo.long
                    : state.selectedLong,
                zoom: action.payload.countryInfo ? 5 : state.zoom
            };

        default:
            return state;
    }
};
export default countryReducer;
