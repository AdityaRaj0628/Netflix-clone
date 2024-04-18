import React from "react";
import { Link ,useNavigate} from 'react-router-dom';

import { UserAuth } from '../Context/AuthContext';


function Navbar() {

     const { user, logOut } = UserAuth();
      const navigate = useNavigate ();
      // console.log(user.email)
    
      const handleLogout = async () => {
        try {
          await logOut();
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      };







      return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
          <Link to='/'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
              NETFLIX
            </h1>
          </Link>
          {user?.email ? (
            <div>
              <Link to='/profile'>
                <button className='text-white pr-4'>Profile</button>
              </Link>
              <button
                onClick={handleLogout}
                className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to='/login'>
                <button className='text-white pr-4'>LogIn</button>
              </Link>
              <Link to='/signup'>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      );
    };

export default Navbar