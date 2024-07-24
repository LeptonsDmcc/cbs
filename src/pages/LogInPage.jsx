// import { useState ,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import carPro from '../assets/images/carpro.png';

// import useAuth from '../hooks/auth/store';

// const LogInPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('');
//   const [username, setUserName] = useState('');
//   const navigate = useNavigate ();

//   const {error, signIn, isAuthenticated, isAuthenticating} = useAuth()

//   const  handleLogin = (e)=> {
//     e.preventDefault();
//     signIn(email, username, password, () => {});
//   }

//   useEffect(() => {
//     if(isAuthenticated) {

//       navigate ("/")
//     }
//   }, [isAuthenticated,navigate]) 

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-2xl rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
//         <div className="w-full md:w-1/2 p-8">
//           <div className="text-center mb-8">

//             <h2 className="text-3xl font-bold text-gray-800">Log In</h2>
//           </div>
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="email"
//                 placeholder="name@leptonsmulticoncept.com.ng"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="username"
//                 placeholder="Username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUserName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="password"
//                 placeholder="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//             <div className="flex items-center justify-between">
//               <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-[#a8cf45] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                 {isAuthenticating ? "Loading":"Log In"}
//               </button>
//             </div>
//             <div className="text-center mt-4">
//               <a href="/reset-password" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
//             </div>
//           </form>
//         </div>
//         <div className="hidden md:block md:w-1/2">
//           <img
//             className="w-full h-full object-cover rounded-r-lg"
//             src={carPro}
//             alt="Car"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogInPage;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import carPro from '../assets/images/carpro.png';
import useAuth from '../hooks/auth/store';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const navigate = useNavigate();

  const { error, signIn, isAuthenticated, isAuthenticating } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, username, password, () => {});
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl transform transition-transform duration-500 hover:scale-105 flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-800">Log In</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                placeholder="name@leptonsmulticoncept.com.ng"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="username"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:bg-[#a8cf45] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isAuthenticating ? 'Loading' : 'Log In'}
              </button>
            </div>
            <div className="text-center mt-4">
              <a
                href="/reset-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            className="w-full h-full object-cover rounded-r-2xl shadow-lg"
            src={carPro}
            alt="Car"
          />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;


