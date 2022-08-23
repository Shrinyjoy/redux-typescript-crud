import React from "react";
import { UserListProps } from "./interfaces";
// import { useDispatch} from "react-redux";
// import "../../App.css";
// import styles from "./styles";
// import Api from '../App/Api';
// import { Dispatch } from "@reduxjs/toolkit";

const UserList: React.FC<UserListProps> = ({ users, deleteHandler, updateHandler }) => {
  // const dispatch = useDispatch();
  const content = users.map((user, index) => (
    // <div
    //   style={{ width: "10%", margin: "1rem auto", border: "1px solid black" }}
    //   key={index}
    //   className="user"
    // >
    //   <p>Title: {user.title}</p>
    //   <p>Description: {user.body}</p>
    //   <button onClick={hEvent => deleteHandler(hEvent, user)}>
    //     Delete 
    //   </button>
    //   <button onClick={hEvent => updateHandler(hEvent, user)}>
    //     Update 
    //   </button>
    //   {/* <style>{styles}</style> */}
    //   {/* <style jsx>{styles}</style> */}
    // </div>

<div className="container">

{/* <div className="row">
  <div className="two columns">
    <button
      onClick={() => dispatch(Api())}
      className="button-primary"
    >
      Load users
    </button>
  </div>
  <div className="two columns">
    <Link to="/add-user">
      <button className="button-primary">Add user</button>
    </Link>
  </div>
</div> */}
<div className="row">
  
    <table className="u-full-width">
     
        <tr>
        <div
          style={{ width: "10%", margin: "1rem auto", border: "1px solid black" }}
          key={index}
          className="user"
        >
          <tr>ID</tr>
          <tr>Title: {user.title}</tr>
          <tr>Description: {user.body}</tr>
          <tr style={{fontWeight: "bold"}}>Actions</tr>
         
        
          <button onClick={hEvent => deleteHandler(hEvent, user)}>
            Delete 
          </button>
          <button onClick={hEvent => updateHandler(hEvent, user)}>
            Update 
          </button>
         </div>
        </tr>
      
     
       
    </table>
  
</div>
</div>
  ));

  return <>{content}</>;
};

export default UserList;
