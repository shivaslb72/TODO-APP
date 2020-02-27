import React from 'react'
import { connect } from 'react-redux'

class Form extends React.Component {
    constructor(props) {
        console.log('in the form constructor', props)
        super(props)
        this.state = {
            title: props.title ? props.title : "",
            description: props.description ? props.description : ""
        }
        console.log('this.state', this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            description: this.state.description
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.title} id="title" name="title" onChange={this.handleChange} /> <br />

                    <label htmlFor="description">Description</label>
                    <input type="text" value={this.state.description} id="description" name="description" onChange={this.handleChange} /> <br />

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}


export default connect()(Form)