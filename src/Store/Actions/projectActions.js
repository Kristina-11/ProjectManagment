export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // Make async call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Kris',
            authorLastName: 'Tina',
            authorId: 123456
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project})
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error})
        })
    }
}