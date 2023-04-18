import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
    return<>
        <div className= "container">
            <h1>Fiorela's To-Do App</h1>
            <h3>Sign-up to continue...</h3>
            <div className="loginBox">
                <SignUp path="/sign-up" routing="path" signInUrl="/" redirectUrl='todos'/>
            </div>
        </div>
    </>
}

// const SignUpPage = () => (
//   <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
//   );

// export default SignUpPage;