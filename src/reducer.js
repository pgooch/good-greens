const InitialState = {
	searchInput : 	'',
	searchResults : [], 
};

const Reducer = (state=InitialState,action) => {
	let tempState = state;
	switch(action.type){
		case 'SAVE_SEARCH_TERM':
			tempState.searchInput = action.term
		break;
		case 'SAVE_SEARCH_RESULTS':
			tempState.searchResults = action.results
		break;
		case '@@INIT': break; // This is reduxes initilizer, we know about it
		default:
			console.log('Reducer does not understand the "'+action.type+'" action.',action,state)
		break;
	}
	return tempState
}

export default Reducer;