let initialState = {
    favoriteDrivesInfo: [],
    allDrivesInfo: [],
    lifetimeTotal: 0.0,
    monthTotal: 0.0,
    activeCharities: 0,
    activeDrives: 0,
    allDrivesToggle: false
}

export default reducer = (state = initialState, action) => {
  //console.log("state", state)
  // console.log("action", action)
    switch (action.type) {
        case 'SET_INITIAL_FAV':
            return {
              ...state,
              favoriteDrivesInfo: action.initialFav
            }
        case 'SET_INITIAL_ALL':

              newState = {
                ...state,
                allDrivesInfo: action.initialAll
              }
              return newState
        case 'UPDATE_LIFETIME_TOTAL':
              return {
                ...state,
                lifetimeTotal: action.lifetimeTotal,
              }
        case 'UPDATE_MONTH_TOTAL':
              return {
                ...state,
                monthTotal: action.monthTotal,
              }
        case 'ADD_TO_FAV':
      		  let topicExists = false;
      		  for(const i in state.favoriteDrivesInfo){
      			  if(state.favoriteDrivesInfo[i].drive_id === action.drive.drive_id){
                //console.log("Topic exists")
      				  topicExists = true;
      				  break;
      			  }
      		  }
      		  if(topicExists){
      			  return state;
      		  }
      		  else {
              var allArray =  [...state.allDrivesInfo];
              for(const i in allArray){
                if(allArray[i].drive_id === action.drive.drive_id){
                  allArray[i].userSelected = true//!allArray[i].userSelected
                  break;
                }
              }
              var newState = {
                ...state,
                favoriteDrivesInfo: [...state.favoriteDrivesInfo, action.drive],
                allDrivesInfo: allArray,
                activeDrives: state.activeDrives + 1,
                allDrivesToggle: !state.allDrivesToggle,
              }
              //console.log("newstate add", newState)
        			return newState
      		  }
        case 'REMOVE_FROM_FAV':
            //console.log("state", state)
            var arrayInfo = [...state.favoriteDrivesInfo];
            var allArray =  [...state.allDrivesInfo];
            for(const i in state.favoriteDrivesInfo){
      			  if(state.favoriteDrivesInfo[i].drive_id === action.drive.drive_id){
                arrayInfo.splice(i, 1);
      				  topicExists = true;
      				  break;
      			  }
      		  }
            for(const i in allArray){
              if(allArray[i].drive_id === action.drive.drive_id){
                allArray[i].userSelected = false//!allArray[i].userSelected
                //console.log("remv", allArray[i])
                break;
              }
            }
            //console.log("removed allarrayinfo", allArray)
            return {
              ...state,
              favoriteDrivesInfo: arrayInfo,
              allDrivesInfo: allArray,
              activeDrives: state.activeDrives - 1,
              allDrivesToggle: !state.allDrivesToggle
            }
        }
        return state
}
