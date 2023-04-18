// import '@/styles/myStyle.css'
import { SignUp, SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from 'next/router';


export default function Home() {
  const { userID, getToken, isLoaded, isSignedIn } = useAuth();

  const router = useRouter()

  //logged in, so redirect to /todos
  if(isSignedIn) {
    // console.log("userID", userID);
    router.push('/todos');
  }
  //not logged in, so show login screen
  else{
    return <>
      <div className= "container">
        <h1>Fiorela's To-Do App</h1>
        <h3>Login to continue...</h3>
        <div className="loginBox">
          <SignIn path="/" routing="path" signUpUrl="/sign-up" redirectUrl='todos'/>
        </div>
      </div>
    </>
  }
}
