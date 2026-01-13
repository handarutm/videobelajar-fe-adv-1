import logo from '../../assets/images/logo-videobelajar.svg'
import inImg from '../../assets/images/in.png'
import fbImg from '../../assets/images/fb.png'
import igImg from '../../assets/images/ig.png'
import xImg from '../../assets/images/x.png'

export default function Footer() {

    return (
        <footer className=" text-black my-8">
            {/* Footer main */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <img src={logo} alt="logo" className="h-10" />
                        <p className="text-sm">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                        <p className="text-sm">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p className="text-sm">+62-877-7123-1234</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Kategori</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Digital & Teknologi</li>
                            <li>Pemasaran</li>
                            <li>Manajemen Bisnis</li>
                            <li>Pengembangan Diri</li>
                            <li>Desain</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Perusahaan</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Tentang Kami</li>
                            <li>FAQ</li>
                            <li>Kebijakan Privasi</li>
                            <li>Ketentuan Layanan</li>
                            <li>Bantuan</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Komunitas</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Tips Sukses</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm">© {new Date().getFullYear()} Videobelajar. All Rights Reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <img src={inImg} alt="linkedin" className="h-6 w-6" />
                        <img src={fbImg} alt="facebook" className="h-6 w-6" />
                        <img src={igImg} alt="instagram" className="h-6 w-6" />
                        <img src={xImg} alt="x-twitter" className="h-6 w-6" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
