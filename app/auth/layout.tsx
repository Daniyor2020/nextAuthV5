
import React from 'react'
interface LayoutProps {
    children: React.ReactNode

}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <main className="flex min-h-screen flex-col
         items-center p-24 text-white gap-10 bg-gradient-to-tl from-teal-400 via-blue-500 to-indigo-600">
           
            <div>{children}</div>
        </main>
    )
}

export default AuthLayout