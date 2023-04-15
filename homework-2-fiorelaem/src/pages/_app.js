// import '@/styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router';
// import { redirect } from 'next/navigation';

// pages that don't require a login
const publicPages = ["/", "/sign-up"];


export default function App({ Component, pageProps }) {

  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  // const redirectPage = () => {
  //   pathname.push('/todos');
  // }
  
  return (
    <ClerkProvider {...pageProps} >
      
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
  
    </ClerkProvider>
  )
}
