const initialState = {}

export const checkUser = (user) => {
    return {
        type: 'SET_USER', payload: user
    }
}