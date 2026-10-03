import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("job_portal")) || null,
  );

  const setUserData = (data) => {
    setUser(data);
    localStorage.setItem("job_portal", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("job_portal");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUserData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
