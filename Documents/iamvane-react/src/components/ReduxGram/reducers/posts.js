//you create a reducer for each state in this app we have posts and comments

//a reducer takes two things

//1. the action iinfo about what happend
//2. a copy of our current state

// this is our post reducer

function posts(state=[], action){
	switch(action.type){
		case 'INCREMENT_LIKES' :
		const i = action.index;
			return[
				...state.slice(0,i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1),
			]	
		default:
			return state;
	}

}

export default posts;