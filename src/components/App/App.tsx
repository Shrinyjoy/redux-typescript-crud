import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { startAddUser, startUpdateUser, startDeleteUser } from "../../store/user/actions";
import { UserActionsTypes, User } from "../../store/user/types";
import { InputHandlerParam, ClickHandlerParam } from "../../types";
import {
  AppProps,
  AppState,
  LinkDispatchProps,
  LinkStateProps
} from "./interfaces";
import Input from "../Input/Input";
import UserList from "../UserList/UserList";
import { ReduxStoreState } from "../../store";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch} from "react-redux";
import "../../App.css";
// import Api from './Api';
// import styles from "./styles";

// Combine All types of props
type Props = AppProps & LinkDispatchProps & LinkStateProps;



// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const users = await response.json();
//   return users;
// });

class App extends Component<Props, AppState> {
  state = {
    title: "",
    body: "",
    id: ""
  };

  handleInput = (hEvent: InputHandlerParam): void => {
    this.setState({ [hEvent.target.name]: hEvent.target.value });
  };

  handleAdd = (hEvent: ClickHandlerParam): void => {
    this.setState(
      {
        id: this.state.title + this.state.body
      },
      () => {
        this.props.startAddUser({
          id: this.state.id,
          title: this.state.title,
          body: this.state.body
        });
      }
    );
  };

  handleUpdate = (hEvent: ClickHandlerParam, user: User): void => {
    this.props.startUpdateUser(user);
  };

  handleDelete = (hEvent: ClickHandlerParam, user: User): void => {
    this.props.startDeleteUser(user);
  };
  
  render() {
    return (
      <div className="App">
      
         <h1>CRUD App using React-Redux-Typescript</h1>
        
       
        <br />
        <br />
        <h4 className="info">Please enter</h4>
        <Input type="text" label="title" inputHandler={this.handleInput} />
        <Input type="text" label="body" inputHandler={this.handleInput} />
        <button onClick={this.handleAdd}>Add</button>
        <br />
        <br />
        <UserList users={this.props.users} updateHandler={this.handleUpdate} deleteHandler={this.handleDelete} />
        
        {/* <style>{styles}</style> */}
        {/* <style jsx>{styles}</style> */}
      </div>
     
    );
  }
}

// Define reducer state prop types
const mapStateToProps = (
  state: ReduxStoreState,
  ownProps: AppProps
): LinkStateProps => ({
  users: state.user.users
});

// Define dispatcher prop types
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, UserActionsTypes>,
  ownProps: AppProps
): LinkDispatchProps => ({
  startAddUser: bindActionCreators(startAddUser, dispatch),
  startUpdateUser: bindActionCreators(startUpdateUser, dispatch),
  startDeleteUser: bindActionCreators(startDeleteUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);