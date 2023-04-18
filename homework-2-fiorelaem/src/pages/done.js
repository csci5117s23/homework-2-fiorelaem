import { UserButton } from "@clerk/clerk-react";
import Nav from "@/components/Nav";

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

  return <>
    <Nav></Nav>
    <h1>Done Page</h1>
  </>
}
