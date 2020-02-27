import axios from 'axios'

export const getNotes = notes => {
    return { type: "GET_NOTES", payload: notes };
};

export const addNote = (note) => {
    return {
        type: "ADD_NOTE", payload: note
    }
}

export const editNote = (id, note) => {
    return {
        type: "EDIT_NOTE", payload: { id, note }
    }
}

export const deleteNote = (id) => {
    return {
        type: "DELETE_NOTE", payload: id
    }
}

export const startGetNotes = () => {
    return dispatch => {
        axios.get("http://localhost:4000/notes")
            .then(response => {
                const notes = response.data;
                dispatch(getNotes(notes));
            });
    };
};

export const startAddNote = (note, redirect) => {
    return (dispatch) => {
        axios.post('http://localhost:4000/notes', note)
            .then(response => {
                const note = response.data
                console.log(note, 'hehehehehh')
                dispatch(addNote(note))
                redirect()
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const startEditNote = (id, note, redirect) => {
    return (dispatch) => {
        axios.put(`http://localhost:4000/notes/${id}`, note)
            .then(response => {
                const note = response.data
                // console.log('hrere', note)
                dispatch(editNote(id, note))
                redirect()
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const startDeleteNote = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:4000/notes/${id}`)
            .then(response => {
                console.log(response)
                dispatch(deleteNote(id))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
