import Link from 'next/link';


export default function Page404() {
    return( <>
        <div class="container bg-green-700 mt-64">
            <h1 class="text-4xl text-white font-semibold">404 - This page could not be found.</h1>
            <br></br>
            <Link href="/todos" class="flex-shrink-0 bg-green-700 hover:bg-gray-800 border-white hover:border-white text-xl border-2 text-white py-1 px-2 rounded mt-2">Click here to go back to your to-do list.</Link>
        </div>
    </> 
    );
}
