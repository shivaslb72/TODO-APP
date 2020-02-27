import React from "react";

import { connect } from 'react-redux'

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from "./Home";
import User from "./componets/User"
import Notes from "./componets/Notes"
import NotesAdd from "./componets/NotesAdd"
import NotesShow from "./componets/NotesShow"
import NotesEdit from "./componets/NotesEdit"

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <h1>Redux PlayArea</h1>

        {
          Object.keys(props.user).length == 0 ?
            <div>
              <Link to="/"> Home </Link> |||
              <Link to="/user"> Login </Link>
            </div> :
            <div>
              <Link to="/"> Home </Link> |||
            <Link to="/notes"> Notes</Link>
            </div>
        }




        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/user" component={User} />
          <Route path="/notes" component={Notes} exact={true} />
          <Route path="/notes/add" component={NotesAdd} />
          <Route path="/notes/:id" component={NotesShow} exact={true} />
          <Route path="/notes/edit/:id" component={NotesEdit} />


        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App);
