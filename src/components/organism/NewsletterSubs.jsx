import React from 'react'
import newsletterImg from '../../assets/images/newsletter.jpg'

const NewsletterSubs = ({ imageUrl }) => {
    const bg = imageUrl || newsletterImg

    return (
        <section className="relative bg-cover bg-center rounded-xl flex items-center justify-center" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '360px' }}>
            <div className="absolute inset-0 bg-black/70 rounded-xl" aria-hidden="true" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                <div className="w-full text-white">
                <p className="text-sm font-semibold text-white">NEWSLETTER</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold">Mau Belajar Lebih Banyak?</h3>
                <p className="mt-4 text-gray-200 max-w-xl text-center">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com</p>

                <form className="mt-6 flex flex-col md:flex-row gap-3 max-w-md rounded-lg overflow-hidden mx-auto">
                    <input type="email" placeholder="Masukkan Emailmu" className="text-center bg-white flex-1 rounded-md border border-gray-200 px-4 py-2 text-gray-900 focus:outline-none" />
                    <button type="button" className="mt-2 sm:mt-0 inline-flex items-center justify-center bg-(--color-main-secondary) text-white px-5 py-2 rounded-md hover:bg-indigo-700"> Subscribe </button>
                </form>
            </div>
            </div>
        </section>
    )
}

export default NewsletterSubs
