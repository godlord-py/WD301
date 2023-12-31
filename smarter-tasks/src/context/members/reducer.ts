export interface Member {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  
  export const initialState: MembersState = {
    members: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
  };
  
  export interface MembersState {
    members: Member[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export type MembersActions =
    | { type: 'FETCH_MEMBERS_REQUEST' }
    | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
    | { type: 'FETCH_MEMBERS_FAILURE'; payload: string }
    | { type: 'ADD_MEMBER_SUCCESS'; payload: Member }
    | { type: 'DELETE_MEMBER_SUCCESS'; payload: Member};
  
  export const membersReducer = (state: MembersState = initialState, action: MembersActions): MembersState => {
    switch (action.type) {
      case 'FETCH_MEMBERS_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_MEMBERS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          members: action.payload,
        };
      case 'FETCH_MEMBERS_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
        };
      case 'ADD_MEMBER_SUCCESS':
        return {
          ...state,
          members: [...state.members, action.payload],
        };
        case 'DELETE_MEMBER_SUCCESS':
          return {
            ...state,
            members: state.members.filter(member => member.id !== action.payload.id),
          };
      default:
        return state;
    }
  };