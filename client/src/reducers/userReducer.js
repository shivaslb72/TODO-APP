const user = {
    email: 'user123',
    password: 'secret123'
}

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER": {
            if (user.email == action.payload.email && user.password == action.payload.password) {
                return { ...action.payload }
            } else {
                return {}
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer