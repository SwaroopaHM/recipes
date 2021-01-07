export const latestSearchData=(state=[], action)=>{
    switch (action.type) {
        case 'LATEST_DATA':
          return {...state, searchData: action.payload} 
    
        default:
            return state
    }
}