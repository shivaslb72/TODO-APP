import React from 'react'
import { connect } from 'react-redux'
import { checkUser } from '../actions/user'

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.dispatch(checkUser(formData))
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Username</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} id="email" /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" /> <br />

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(User)