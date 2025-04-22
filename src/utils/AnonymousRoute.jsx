// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const AnonymousRoute = ({ children }) => {
//   const token = Cookies.get('authToken'); // Check for authToken cookie

//   // If token exists (user is logged in), redirect to /userchat
//   if (token) {
//     return <Navigate to="/userchat" replace />;
//   }

//   // If no token, render the page
//   return children;
// };

// export default AnonymousRoute;