export const saveSearchTerm = (passedTerm) => {
	return {
	    'type': 'SAVE_SEARCH_TERM',
	    'term': passedTerm
	}
}

export const saveSearchResults = (results) => {
	return {
	    'type': 'SAVE_SEARCH_RESULTS',
	    'results': results
	}
}
