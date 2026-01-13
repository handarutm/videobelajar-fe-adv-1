import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const defaultUsers = [
  {
    id: 1,
    name: "Jennie Ruby Jane",
    email: "rubyjane@gmail.com",
    password: "sss",
    phone: "81234567890",
    pp: "https://i.pravatar.cc/100",
  },
  {
    id: 2,
    name: "Jennie Ruby Jane",
    email: "ruby@gmail.com",
    password: "aaa",
    phone: "81234567890",
    pp: "https://i.pravatar.cc/100",
  },
];

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : defaultUsers;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");
    return savedCurrentUser ? JSON.parse(savedCurrentUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

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
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      phone,
      pp,
    };
    setUsers([...users, newUser]);
  };

  const login = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      setCurrentUser(user);
      return true;
    }
    setCurrentUser(null);
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  function updateCurrentUser(updatedUser) {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
  }

  function deleteCurrentUser(userId) {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    setCurrentUser(null);
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
