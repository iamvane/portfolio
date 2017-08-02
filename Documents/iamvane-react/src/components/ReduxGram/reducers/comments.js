//you create a reducer for each state in this app we have posts and comments

//a reducer takes two things

//1. the action iinfo abi=out what happend
//2. a copy of our current state

// this is our comments reducer
function postComments(state=[], action){
	switch(action.type){
		case 'ADD_COMMENT':
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return[
				...state.slice(0,action.i),
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

function comments(state=[], action){
	if(typeof action.postId !== undefined){
		return{

			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;