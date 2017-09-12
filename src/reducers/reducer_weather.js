import { FETCH_WEATHER } from '../actions/index'

export default function(state= [], action) {
  console.log("Action recieved", action);
  switch (action.type){
    case FETCH_WEATHER:
      state.push(action.payload.data);
      return [action.payload.data, ...state];
  }

  return state;
}


// return state.concat([action.payload.data]);
//similar to below one
