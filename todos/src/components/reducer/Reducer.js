

export default function reducer(state,action){
    switch(action.type){
      case "ADD_TASK":
        
        action.event.preventDefault();
        if(action.payload !== ""){
          return[
            ...state,
            {
              id:state.length + 1,
              task:action.payload,
              
            } ,   
          ]
        }
        else return state
        
 
      case "DELETE" :
        return  state.filter((item)=>item.id !== action.payload)
        
      case "RESET" :
        {action.payload.preventDefault();
          return [];
        }
      
      default : return state;
    }
  }
  