import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProfileEdit = () => {
  const { currentUser, deleteCurrentUser, updateCurrentUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profil");
  const [formData, setFormData] = useState({
    namaLengkap: currentUser?.name || "",
    email: currentUser?.email || "",
    noHp: currentUser?.phone || "",
    jenisKelamin: currentUser?.jenisKelamin || "",
    password: currentUser?.password || "",
    konfirmasiPassword: currentUser?.password || "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && typeof updateCurrentUser === "function") {
      const updatedUser = {
        ...currentUser,
        name: formData.namaLengkap,
        email: formData.email,
        phone: formData.noHp,
        password: formData.password,
      };
      updateCurrentUser(updatedUser);
    }
    alert("Profil berhasil disimpan!");
    navigate("/");
  };

  const handleDeleteAccount = () => {
    if (currentUser && typeof deleteCurrentUser === "function") {
      deleteCurrentUser(currentUser.id);
    }
    alert("Akun dihapus");
    setShowDeleteModal(false);
    setConfirmText("");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Ubah Profil
              </h1>
              <p className="text-gray-500 mt-2">Ubah data diri Anda</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-3 list-none">
                <li>
                  <button
                    className={`flex items-center w-full text-left p-3 rounded-lg ${activeTab === "profil" ? "bg-(--color-secondary-100) text-(--color-secondary-default) border border-(--color-secondary-default)" : "text-gray-500 hover:bg-gray-50"}`}
                    onClick={() => setActiveTab("profil")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${activeTab === "profil" ? "text-(--color-secondary-default)" : "text-gray-400"} mr-3`}
                    >
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                    </svg>
                    <p className="text-md">Profil Saya</p>
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full text-left p-3 rounded-lg ${activeTab === "kelas" ? "bg-(--color-secondary-100) text-(--color-secondary-default) border border-(--color-secondary-default)" : "text-gray-500 hover:bg-gray-50"}`}
                    // onClick={() => setActiveTab("kelas")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${activeTab === "kelas" ? "text-yellow-600" : "text-gray-900"} mr-3`}
                    >
                      <path
                        d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
                        opacity="0.38"
                      />
                    </svg>
                    <p className="text-md">Kelas Saya</p>
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full text-left p-3 rounded-lg ${activeTab === "pesanan" ? "bg-(--color-secondary-100) text-(--color-secondary-default) border border-(--color-secondary-default)" : "text-gray-500 hover:bg-gray-50"}`}
                    // onClick={() => setActiveTab("pesanan")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${activeTab === "pesanan" ? "text-(--color-secondary-default)" : "text-gray-400"} mr-3`}
                    >
                      <path d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 16.9995C10.9 16.9995 10 16.0995 10 14.9995C10 13.8995 10.9 12.9995 12 12.9995C13.1 12.9995 14 13.8995 14 14.9995C14 16.0995 13.1 16.9995 12 16.9995Z" />
                    </svg>
                    <p className="text-md">Pesanan Saya</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-3/4">
            {activeTab === "profil" && (
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-4">
                        <img
                          src="https://i.pravatar.cc/100"
                          className="w-23 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        {currentUser.name}
                      </h2>
                      <p className="text-gray-600 mt-1">{currentUser.email}</p>
                      <button className="text-yellow-500 font-medium hover:text-yellow-600 cursor-pointer">
                        Ganti Foto Profil
                      </button>
                    </div>
                  </div>

                  <hr className="my-8 border border-gray-300" />

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="namaLengkap"
                          value={formData.namaLengkap}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-main-primary) focus:border-(--color-main-primary) outline-none transition"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-main-primary) focus:border-(--color-main-primary) outline-none transition"
                        />
                      </div>

                      {/*
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jenis Kelamin
                        </label>
                        <div className="flex space-x-6">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="jenisKelamin"
                              value="Laki-laki"
                              checked={formData.jenisKelamin === "Laki-laki"}
                              onChange={handleChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">
                              Laki-laki
                            </span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="jenisKelamin"
                              value="Perempuan"
                              checked={formData.jenisKelamin === "Perempuan"}
                              onChange={handleChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">
                              Perempuan
                            </span>
                          </label>
                        </div>
                      </div>
                      */}

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          No. Hp
                        </label>
                        <div className="flex">
                          <div className="flex items-center px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-50">
                            <span className="text-gray-700">+62</span>
                          </div>
                          <input
                            type="tel"
                            name="noHp"
                            value={formData.noHp}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 border-l-0 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="81234567890"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-10"
                          />

                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                          >
                            {isPasswordVisible ? (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Konfirmasi Password
                        </label>
                        <div className="relative">
                          <input
                            type={
                              isConfirmPasswordVisible ? "text" : "password"
                            }
                            name="konfirmasiPassword"
                            value={formData.konfirmasiPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-10"
                          />

                          <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                          >
                            {isConfirmPasswordVisible ? (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-3">
                        <button
                          type="submit"
                          className="w-full md:w-auto px-8 py-3 bg-(--color-main-primary) cursor-pointer text-white font-medium rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-blue-200 transition duration-300"
                        >
                          Simpan
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setShowDeleteModal(true);
                            setConfirmText("");
                          }}
                          className="w-full md:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition duration-300"
                        >
                          Hapus Akun
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "kelas" && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="py-12">
                  <svg
                    className="w-16 h-16 text-gray-300 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                      opacity="0.5"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v6l9-5M12 20l-9-5"
                    ></path>
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Kelas Saya
                  </h3>
                  <p className="text-gray-500">Belum ada kelas yang diikuti.</p>
                </div>
              </div>
            )}

            {activeTab === "pesanan" && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="py-12">
                  <svg
                    className="w-16 h-16 text-gray-300 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Pesanan Saya
                  </h3>
                  <p className="text-gray-500">
                    Belum ada pesanan yang dibuat.
                  </p>
                </div>
              </div>
            )}
            {showDeleteModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setShowDeleteModal(false)}
                />

                <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
                  <h2 className="text-lg font-semibold mb-2">
                    Konfirmasi Hapus Akun
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Ketik <span className="font-mono">DELETE</span> untuk
                    mengonfirmasi penghapusan akun Anda. Tindakan ini tidak
                    dapat dikembalikan.
                  </p>

                  <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="Ketik DELETE untuk konfirmasi"
                    className="w-full border px-3 py-2 rounded mb-4"
                    aria-label="Konfirmasi Hapus Akun"
                  />

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowDeleteModal(false)}
                      className="px-4 py-2 rounded border"
                    >
                      Batal
                    </button>

                    <button
                      type="button"
                      onClick={handleDeleteAccount}
                      disabled={confirmText !== "DELETE"}
                      className={`px-4 py-2 rounded ${confirmText === "DELETE" ? "bg-red-600 text-white hover:bg-red-700" : "bg-red-200 text-red-700 cursor-not-allowed"}`}
                    >
                      Hapus Akun
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
