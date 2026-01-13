import React from 'react'
import Navbar from '../components/organism/Navbar'
import RegisterForm from '../components/organism/RegisterForm'

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="flex items-center justify-center py-12 px-4">
                <RegisterForm />
            </main>

        </div>
    )
}