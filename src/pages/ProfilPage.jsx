import Footer from "../components/organism/Footer";
import Navbar from "../components/organism/Navbar";
import ProfileEdit from "../components/organism/ProfileEdit";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProfilPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <Navbar />
      {currentUser ? <ProfileEdit /> : null}
      <Footer />
    </>
  );
}
