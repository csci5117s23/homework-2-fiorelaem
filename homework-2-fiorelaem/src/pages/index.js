import { SignUp, SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from 'next/router';


export default function Home() {
  const { userID, getToken, isLoaded, isSignedIn } = useAuth();

  const router = useRouter()

  //logged in, so redirect to /todos
  if(isSignedIn) {
    console.log("userID", userID);
    router.push('/todos');
  }
  //not logged in, so show login screen
  else{
    return <>
      <h1>Fiorela's To-Do App</h1>
      <SignIn path="/" routing="path" signUpUrl="/sign-up" redirectUrl='todos'/>
    </>
  }
}
