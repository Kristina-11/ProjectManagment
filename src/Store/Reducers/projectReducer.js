const initState = {
    projects: [
        {id: '1', title: 'Set up Git account', content: 'Blah blah blah', date: '26.11.2020'},
        {id: '2', title: 'Make GitHub profile', content: 'Blah blah blah', date: '26.11.2020'},
        {id: '3', title: 'Start with task 1', content: 'Blah blah blah', date: '26.11.2020'},
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}
 
export default projectReducer;