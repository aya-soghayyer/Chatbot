// import { createContext, useContext, useState } from 'react';

// const AuthorizationContext = createContext();

// export const AuthorizationContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('authToken') || null);

//   const value = {
//     token,
//     setToken: (newToken) => {
//       setToken(newToken);
//       if (newToken) {
//         localStorage.setItem('authToken', newToken);
//       } else {
//         localStorage.removeItem('authToken');
//       }
//     },
//   };

//   return <AuthorizationContext.Provider value={value}>{children}</AuthorizationContext.Provider>;
// };

// export const useToken = () => useContext(AuthorizationContext);