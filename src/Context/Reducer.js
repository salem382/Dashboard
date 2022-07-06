
const reducer = (state, action) => {

    switch(action.type) {
        
        case 'dark':
            return {darkMode:true}
        case 'light':
            return {darkMode:false}
        case 'toggle':
            return {darkMode:!state.darkMode}
        default:
            return state;
    }
}

export default reducer;