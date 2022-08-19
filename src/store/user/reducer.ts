import {
    START_ADD_USER,
    SUCCESS_ADD_USER,
    FAIL_ADD_USER,
    START_UPDATE_USER,
    SUCCESS_UPDATE_USER,
    FAIL_UPDATE_USER,
    START_DELETE_USER,
    SUCCESS_DELETE_USER,
    FAIL_DELETE_USER,
    UserState,
    UserActionsTypes
  } from "./types";
  
  const initialState: UserState = {
    users: [],
    loading: false,
    error: false
  };
  
  export function userReducer(
    state: UserState = initialState,
    action: UserActionsTypes
  ): UserState {
    switch (action.type) {
      case START_ADD_USER:
        return { ...state, loading: true };
  
      case SUCCESS_ADD_USER:
        return { ...state, users: [...state.users, action.payload] };
  
      case FAIL_ADD_USER:
        return { ...state, loading: false, error: true };
      
      case START_UPDATE_USER:
        return { ...state, loading: true };
  
      case SUCCESS_UPDATE_USER:
        let updateState = action.payload;
        let updateStates = state.users.map(user => {
          if( user.id === updateState.id){
            return updateState;
          }
          return user;
        });
  
        return { ...state, users: [...updateStates] };
  
      case FAIL_UPDATE_USER:
        return { ...state, loading: false, error: true };

      case START_DELETE_USER:
        return { ...state, loading: true };
  
      case SUCCESS_DELETE_USER:
        let newState = [...state.users];
  
        newState = newState.filter(user => user.id !== action.payload.id);
  
        return { ...state, users: [...newState] };
  
      case FAIL_DELETE_USER:
        return { ...state, loading: false, error: true };
  
      default:
        return { ...state };
    }
  }