const projectReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created project', action.project);
            return state;
        
        case 'CREATE_PROJECT_ERROR':
            console.log('Created project error', action.error);
            return state;

        default:
            return state;
    }
}
 
export default projectReducer;