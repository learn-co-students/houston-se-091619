const initialState = {
   test: "trying"
}



export default function likeReducer(state = initialState, action){
    console.log(state)

    switch(action.type){
        case "add":
            return{
                img:{ ...state.img, comments: [...state.img.comments, action.comment]}
            }
    }
    return state
}