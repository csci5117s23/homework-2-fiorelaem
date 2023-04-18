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
      <br></br>
      <div className= "container bg-green-700">
        <h1 class="text-white text-4xl">Fiorela's To-Do App</h1>
        <h3 class="text-white">Login to continue...</h3><br></br>
        <div className="loginBox">
          <SignIn path="/" routing="path" signUpUrl="/sign-up" redirectUrl='todos'/>
        </div>
      </div>
    </>
  }
}
