// Nav bar was created using code from the following link:
// https://github.com/tailwindlabs/designing-with-tailwindcss/blob/master/03-building-a-responsive-navbar/03-making-the-navbar-responsive/src/components/Navbar.vue

// responsive design doesn't work yet (code that's commented out)
import Link from 'next/link' 
import { UserButton } from "@clerk/clerk-react";

export default function Nav() {
    return <>
        <header class="bg-green-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 fixed w-full">
            <div class="flex items-center justify-between px-4 py-3 sm:p-0">
                <span class="block px-2 py-1 text-white font-semibold rounded">CSCI5117 - Homework 2</span>
                {/* <div class="sm:hidden">
                    <button onClick="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                    </button>
                </div> */}
            </div>
            {/* <nav onClick="isOpen ? 'block' : 'hidden'" className="px-2 pt-2 pb-4 sm:flex sm:p-0"> */}
            <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0">
                <Link href="/todos" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">To-Do List</Link>
                <Link href="/done" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Completed Tasks</Link>
                <UserButton afterSignOutUrl="/"/>
            </nav>
        </header>
    </>
}