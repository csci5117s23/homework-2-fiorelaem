import Nav from "@/components/Nav";
import { UserButton } from "@clerk/clerk-react";
import { addTodos, completeTodos, getTodos } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";


export default function ToDos() {

  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const [newName, setNewName] = useState("");

  // get to-do list
  useEffect(() => {
    async function process() {
      if (userId) {
        const token = await getToken({ template: "codehooks" });
        setTodos(await getTodos(token));
        setLoading(false);
      }
    }
    process();
  }, [isLoaded]);
  
  // add task to to do list
  async function add() {
    const token = await getToken({ template: "codehooks" });
    const newTodo = await addTodos(token, newName, userId);
    setNewName("");
    setTodos(todos.concat(newTodo));
  }

  // mark a task as complete
  async function complete(todo) {
    console.log("clicked"); 
    const token = await getToken({ template: "codehooks" });
    try {
      await completeTodos(token, todo);
    } catch (e) {
      console.log(e);
    }
    setTodos(await getTodos(token));
  }

  // check length of a task (max length is 90 chars)
  function taskLength(todo) {
    if(todo.task.length > 90) {
      todo.task = todo.task.substring(0,90);
      todo.task += "...";
      return todo.task;
    }
    else {return todo.task;}
  }


  if (loading) {
    console.log(loading);
    return <div className="loading bg-green-700 text-white text-4xl"><span> Loading... </span></div>;
  } 
  else {
    // make each task into a li
    const todoListItems = todos.map((todo) => {
        if(todo.userId == userId && todo.completed == false) {
          todo.task = taskLength(todo);
          return <>
          <li class="hover:bg-gray-800 hover:text-white text-lg" key={todo._id}>
            <span class="text-left ">
              {todo.task}
            </span>
            {/* this can't be a button - it doesn't work on netlify */}
            <span class="completeBtn hover:bg-red-600 hover:border-white hover:text-white" onClick={() => {complete(todo);}}>X</span> 
          </li>
          </>
        }
      }
    );

    return (
      <>
        <Nav></Nav>
        <br></br><br></br><br></br><br></br>
        <ol>
          <div class="container bg-green-700">
            <p class="text-4xl text-white font-semibold">Add a Task:</p>
            <br></br>
            {/* add a task form*/}
            <input
              class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Task description..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
            ></input>
            <button 
              class="flex-shrink-0 bg-green-700 hover:bg-gray-800 border-white hover:border-white text-sm border-2 text-white py-1 px-2 rounded mt-2 pr-10 pl-10" 
              onClick={add}>
              Add
              </button>
          </div>
          {/* show list of tasks */}
          <div class="list mt-6">
            {todoListItems.reverse()}
          </div>
        </ol>
        <br></br><br></br>
      </>
    );
  }
}
