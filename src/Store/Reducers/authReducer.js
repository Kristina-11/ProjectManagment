const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('Failed')
            return {
                ...state,
                authError: 'Login failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('Succeded')
            return {
                ...state,
                authError: null,
                path: '/'
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Signed out')
            return { ...state }

        default: 
            return state
    }
}
 
export default authReducer;