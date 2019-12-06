import likeReducer from './imgInfoReducer'
import { combineReducers } from '../../../../Library/Caches/typescript/3.6/node_modules/redux'

const initialState = {
    img: {
        url: "https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg",
        comments: ["Yummy....", "Tummy....", "lots of sugar", "Moist"],
        likes: 0
    }
}

const rootReducers = combineReducers({reducer, likeReducer})
export default rootReducers

function reducer(state = initialState, action){
    console.log(state)

    switch(action.type){
        case "add a comment":
            return{
                img:{ ...state.img, comments: [...state.img.comments, action.comment]}
            }

        case "like":
            return{
                img:{ ...state.img, likes: state.img.likes + 1 }
            }
    }
    return state
}