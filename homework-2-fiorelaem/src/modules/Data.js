const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// get to-do list
export async function getTodos(authToken) {
    const result = await fetch(backend_base+"/todos",{
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    // console.log("results: ", result.json());
    return await result.json();
}

// add task to to-do list
export async function addTodos(authToken, taskName, userName) {
    const result = await fetch(backend_base+"/todos",{
        'method':'POST',
        'headers': {'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'},
        'body': JSON.stringify({task: taskName, userId: userName})
    })
    return await result.json();
}

// mark task as complete
export async function completeTodos(authToken, taskName) {
    const result = await fetch(backend_base+"/todos/"+taskName._id,{
        'method':'PATCH',
        'headers': {'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'},
        'body': JSON.stringify({
            completed: true})
    });
    return await result.json();
}