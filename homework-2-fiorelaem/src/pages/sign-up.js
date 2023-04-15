import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
    return<>
        <h1>Fiorela's To-Do App</h1>
        <SignUp path="/sign-up" routing="path" signInUrl="/" />
    </>
}

// const SignUpPage = () => (
//   <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
//   );

// export default SignUpPage;