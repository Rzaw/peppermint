import React, {useState } from "react";
import { Container, Header, Content, Divider } from "rsuite";


import Navigation from "../component/Navigation";
import CreateTodo from "../component/CreateTodo";
import ListTodo from "../component/ListTodo";
import TicketStats from "../component/TicketStats";
// import TextEditor from "../component/NotesEditor";

import { config } from '../utils'

const Todo = () => {
  return (
    <div className="Todo-Container">
      <h3>Todo List</h3>
      <Divider />
      <CreateTodo />
      <ListTodo />
    </div>
  );
};

const Notes = () => {
  

 return(
   <div>
     
   </div>
 )
};

const Issues = () => {
  return (
    <div className="Issue-Container">
      <TicketStats />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Container>
        <Header>
          <Navigation />
        </Header>

        <Container>
          <Content>
            <Todo />
          </Content>
        </Container>

        <Container>
          <Notes />
        </Container>

        <Container>
          <Issues />
        </Container>
      </Container>
    </div>
  );
};

export default Home;
