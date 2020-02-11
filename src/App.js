import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodosList from './components/TodosList';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN Stack Todo App</h2>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
