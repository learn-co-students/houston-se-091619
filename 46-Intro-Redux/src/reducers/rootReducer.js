
export default function reducer (state = {count: 0, test: "I don't know"}, action){
  
    // console.log(state)
    // console.log(action)
  
    switch(action.type){
      case "Increment":
        return{
            ...state,
          count: state.count + action.amount
        }
      case "Decrement":
        return{
          count: state.count - action.amount
        }
  
    }
  
    return state
  }