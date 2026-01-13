import defaultHero from '../../assets/images/hero.jpg'

function HeroSection({ title, subtitle, button, imgLink }) {
    const imgHero = { backgroundImage: `url(${imgLink || defaultHero})` }

    return(
        <section id="hero" className="relative flex items-center justify-center my-16 w-[95%] mx-auto">
            <div className="w-full h-[480px] bg-cover bg-center brightness-20 rounded-xl" style={imgHero}/>
            <div className="absolute inset-0 flex flex-col justify-center md:px-12 text-white w-[82%] md:w-[75%] mx-auto">
                <h1 className="text-2xl md:text-5xl font-bold text-center">{title || "Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"}</h1>
                <p className="text-sm md:text-base mt-4 text-center text-white">{subtitle || "Temukan ilmu baru menarik dan mendalam melalui koleksi video pembelajaran kualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."}</p>
                <button className="text-sm md:text-base mt-6 px-6.5 py-2.5 bg-(--color-main-primary) max-w-2xl rounded-xl cursor-pointer mx-auto">{button || "Temukan Video Course untuk Dipelajari!"}</button>
            </div>
        </section>
    )
}

export default HeroSection