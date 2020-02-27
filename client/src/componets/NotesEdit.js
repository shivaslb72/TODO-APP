import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { startEditNote } from '../actions/notes'

function NotesEdit(props) {
    console.log(props, 'huehuehuehue')
    const handleSubmit = (note) => {
        const id = props.note._id
        const redirect = () => props.history.push('/notes')
        props.dispatch(startEditNote(id, note, redirect))
    }
    return (
        <div>
            <h2>Editing Page</h2>
            <Form {...props.note} handleSubmit={handleSubmit} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find(note => note._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(NotesEdit)