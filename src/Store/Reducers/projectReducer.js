const initState = {
    projects: [
        {id: '1', title: 'Set up Git account', content: 'Blah blah blah', date: '26.11.2020'},
        {id: '2', title: 'Make GitHub profile', content: 'Blah blah blah', date: '26.11.2020'},
        {id: '3', title: 'Start with task 1', content: 'Blah blah blah', date: '26.11.2020'},
    ]
}

const projectReducer = (state = initState, action) => {
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