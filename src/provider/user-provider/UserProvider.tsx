import { createContext, useContext, useState } from "react";

export const UserContext = createContext<any>([
  {},
  () => {
    return;
  },
]);

export const UserProvider = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}): JSX.Element => {
  const [userName, setUserName] = useState("");

  const login = (userName: string) => {
    return setUserName(userName);
  };

  const logout = () => {
    setUserName("");
  };

  const isAuthenticated = () => {
    return userName !== "";
  };

  return (
    <UserContext.Provider
      value={{
        userContext: {
          userName,
          login,
          isAuthenticated,
          logout,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export default useUser;
