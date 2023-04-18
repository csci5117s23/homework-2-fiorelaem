import { UserButton } from "@clerk/clerk-react";
import Nav from "@/components/Nav";
import { addTodos, completeTodos, getTodos } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";


export default function DonePage() {

    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();


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


    if (loading) {
        console.log(loading);
        return <div className="loading bg-green-700 text-white text-4xl"><span> Loading... </span></div>;
      } 
      else {
        const todoListItems = todos.map((todo) => {
            if(todo.userId == userId && todo.completed == true) {
              return <>
                <li class="text-lg" key={todo._id}>
                    <span class="text-left">
                    {todo.task}
                    </span>
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
            <p class="text-4xl text-white font-semibold">Completed Tasks</p>
            </div>
              <div class="list mt-6">
                {todoListItems}
              </div>
            </ol>
            <br></br><br></br>
          </>
        );
    }
}
