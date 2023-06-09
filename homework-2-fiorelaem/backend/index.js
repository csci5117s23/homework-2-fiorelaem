
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app, Datastore} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'
import { date, object, string, number, boolean} from 'yup';
import jwtDecode from 'jwt-decode';

// test route for https://<PROJECTID>.api.codehooks.io/dev/
// app.get('/', (req, res) => {
//   res.send('CRUD server ready')
// })

// app.get("/test", (req, res) => {
//     res.json({result: "you did it!"});
// });

const todoList = object({
  task: string().required(),
  completed: boolean().default(false),
  userId: string().required(),
  createdOn: date().default(() => new Date()),
})

// This can largely be copy-pasted, it just grabs the authorization token and parses it, stashing it on the request.
const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer ','');
      // NOTE this doesn't validate, but we don't need it to. codehooks is doing that for us.
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  } 
}
app.use(userAuth)


// Use Crudlify to create a REST API for any collection
crudlify(app, {todos: todoList})

// bind to serverless runtime
export default app.init();
