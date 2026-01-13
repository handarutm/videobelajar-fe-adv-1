import Footer from "../components/organism/Footer";
import Navbar from "../components/organism/Navbar";
import TestingGround from "../components/organism/TestingGround";

export default function ProfilPage() {
    return (
        <>
            <Navbar isLogin={true} />
            <TestingGround />
            <Footer />
        </>
    )
}