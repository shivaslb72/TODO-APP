import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function NotesShow(props) {
    console.log(props, 'huehuehuehue')
    return (
        <div>
            <h2>{props.note && props.note.title} </h2>
            <h2>{props.note && props.note.description} </h2>
            <Link to={`/notes/edit/${props.note && props.note._id}`}>edit</Link>
        </div >
    )
}

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find(note => note._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(NotesShow)