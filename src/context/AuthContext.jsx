import React, { useContext, createContext, useState, useEffect } from "react";
import api from "../lib/api";

const AuthContext = createContext();

// const defaultUsers = [
//   {
//     id: 1,
//     name: "Jennie Ruby Jane",
//     email: "rubyjane@gmail.com",
//     password: "sss",
//     phone: "81234567890",
//     pp: "https://i.pravatar.cc/100",
//   },
//   {
//     id: 2,
//     name: "Jennie Ruby Jane",
//     email: "ruby@gmail.com",
//     password: "aaa",
//     phone: "81234567890",
//     pp: "https://i.pravatar.cc/100",
//   },
// ];

export const AuthProvider = ({ children }) => {
  // const [users, setUsers] = useState(() => {
  //   const savedUsers = localStorage.getItem("users");
  //   return savedUsers ? JSON.parse(savedUsers) : defaultUsers;
  // });

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");
    return savedCurrentUser ? JSON.parse(savedCurrentUser) : null;
  });

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);
  const register = (
    name,
    email,
    password,
    phone,
    pp = "https://i.pravatar.cc/100",
  ) => {
    // Register new user to Supabase
    return api
      .post("/users", { name, email, password, phone, pp })
      .then((res) => {
        const created = Array.isArray(res.data) ? res.data[0] : res.data;
        setUsers((prev) => [...prev, created]);
        return created;
      })
      .catch((err) => {
        console.error("register error", err);
        throw err;
      });
  };

  const login = (email, password) => {
    // query Supabase for matching user
    return api
      .get(
        `/users?email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}`,
      )
      .then((res) => {
        const user =
          Array.isArray(res.data) && res.data.length ? res.data[0] : null;
        if (user) {
          setCurrentUser(user);
          return true;
        }
        setCurrentUser(null);
        return false;
      })
      .catch((err) => {
        console.error("login error", err);
        setCurrentUser(null);
        return false;
      });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  function updateCurrentUser(updatedUser) {
    // persist update to Supabase then update local state
    return api
      .patch(`/users?id=eq.${updatedUser.id}`, updatedUser)
      .then((res) => {
        const updated = Array.isArray(res.data) ? res.data[0] : res.data;
        setUsers((prev) =>
          prev.map((u) => (u.id === updated.id ? updated : u)),
        );
        setCurrentUser(updated);
        return updated;
      })
      .catch((err) => {
        console.error("updateCurrentUser error", err);
        throw err;
      });
  }

  function deleteCurrentUser(userId) {
    // delete from Supabase then update local state
    return api
      .delete(`/users?id=eq.${userId}`)
      .then(() => {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        setCurrentUser(null);
        return true;
      })
      .catch((err) => {
        console.error("deleteCurrentUser error", err);
        throw err;
      });
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        register,
        login,
        logout,
        updateCurrentUser,
        deleteCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
