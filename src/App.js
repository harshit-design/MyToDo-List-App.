import Header from './Components/Header/Header';
import Todo from './Components/Todos/Todo';
import Footer from './Components/Footer/footer';
import {Todos} from './Components/Todos/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add_todos from './Components/Todos/Add_todos';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
  setTodos(todos.filter((e) => {
    return e!== todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));
}

const addTodo = (title, desc)=> {
  console.log("I am adding this todo", title, desc)
  let sno;
  if(todos.length==0){
    sno=0;
  }else{
    sno= todos[todos.length-1].sno + 1;
  }
   
  const myTodo ={
    sno : sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);
 }
 const [todos, setTodos]= useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])

 

  return (
    <div>
     <Header title="My todo list"/>
     <Add_todos addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </div>
  );
}

export default App;
