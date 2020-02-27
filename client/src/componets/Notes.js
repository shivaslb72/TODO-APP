import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { startDeleteNote } from '../actions/notes'

function Notes(props) {
    const handleSubmit = (id) => {
        console.log(id)
        props.dispatch(startDeleteNote(id))
    }
    return (
        <div>
            <h1>Listing of the notes</h1>
            {
                props.notes.map(note => {
                    return (
                        <li><Link to={`/notes/${note._id}`}>{note.title}</Link> -- {note.description} -- <button onClick={() => {
                            handleSubmit(note._id)
                        }}>delete</button></li>
                    )
                })
            }
            <Link to="/notes/add">add</Link>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};
export default connect(mapStateToProps)(Notes);
