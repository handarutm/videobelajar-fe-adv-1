import { tutorIMG, courseIMG } from "../../utility/ImportedImages"
export default function FeedsCourses() {
    return (
        <>
            <h2 className="text-2xl md:text-4xl font-bold">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="text-sm md:text-base my-3">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            <div id='feed-recommendation-course' className="mt-4">
                <div id="tab-courses">
                    <button className="tab-button px-4 cursor-pointer border-b-4 border-(--color-main-tertiary)">Semua Kelas</button>
                    <button className="tab-button px-4 cursor-pointer">Pemasaran</button>
                    <button className="tab-button px-4 cursor-pointer">Desain</button>
                    <button className="tab-button px-4 cursor-pointer">Pengembangan Diri</button>
                    <button className="tab-button px-4 cursor-pointer">Bisnis</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5 w-full">


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[0]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[0]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[1]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[1]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[2]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[2]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[3]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[3]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[4]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[4]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[5]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[5]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[6]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[6]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[7]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[7]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl-2xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5 shadow-2xl rounded-lg mt-4 overflow-hidden flex flex-col">
                        <img src={courseIMG[8]} alt="course illustration" className="rounded-lg w-full h-48 object-cover" />
                        <h6 className="font-bold text-base md:text-lg mt-4">Big 4 Auditor Financial Analyst</h6>
                        <p className="text-sm md:text-base hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat resmi</p>

                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src={tutorIMG[0]} alt="tutor avatar" className="instructor-avatar w-10 h-10 rounded-lg" />
                            <div className="tutor">
                                <h6 className="font-bold text-sm md:text-lg">Jenna Ortega</h6>
                                <p className="text-sm md:text-base">Senior Accountant di <strong>Gojek</strong></p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row gap-2 items-center"><span className="text-sm text-yellow-400">★★★⯨☆</span><p className="underline text-sm">3.5 (86)</p></div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-(--color-main-primary)">Rp 300K</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}