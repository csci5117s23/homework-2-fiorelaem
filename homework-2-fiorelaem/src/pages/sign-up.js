import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
    return<>
        <br></br>
        <div className= "container bg-green-700">
            <h1 class="text-white text-4xl">Fiorela's To-Do App</h1>
            <h3 class="text-white">Sign-up to continue...</h3><br></br>
            <div className="loginBox">
                <SignUp path="/sign-up" routing="path" signInUrl="/" redirectUrl='todos'/>
            </div>
        </div>
    </>
}