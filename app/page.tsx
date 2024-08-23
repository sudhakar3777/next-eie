"use client"
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loginUser } from '../redux-store/slice/auth.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useAppDispatch } from '@/redux-store/hook';
import { RootState } from '@/redux-store/store';
import { useRouter } from 'next/navigation';
import LoginSvg from '../app/assets/login_svg.png'

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useRouter()
  const { isLoader, isError, accessToken } = useSelector(
    (state: RootState) => state.userData
  );
  const [credentials, setCredentials] = useState({ userId: '', password: '' });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      loginUser({ userId: credentials.userId, password: credentials.password })
    );
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (accessToken) {
      navigate.replace('/overview');
    }
  }, [accessToken, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-montserrat rounded-3xl">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex w-2/3 max-w-4xl back_transparent rounded-3xl bg-opacity-95 shadow-inner shadow-gray-200 z-10">
          <div className="p-5 flex rounded-3xl border border-gray-300 ">
            <div className="w-1/2 p-2 ">
              <form onSubmit={handleSubmit}>
                <div className="py-10">
                  <h2 className="text-3xl font-extrabold">Login</h2>
                </div>
                <p className="text-gray-600 text-lg my-3">
                  Please Login to view your dashboard
                </p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-4 rounded-2xl">
                    <input
                      type="text"
                      name="userId"
                      value={credentials.userId}
                      placeholder="Industry ID"
                      required
                      onChange={handleFormChange}
                      className="bg-gray-100 outline-none text-m flex-1 m-1 px-2"
                    />
                  </div>
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-4 rounded-2xl">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={credentials.password}
                      required
                      onChange={handleFormChange}
                      className="bg-gray-100 outline-none text-m flex-1 m-1 px-2"
                    />
                  </div>
                  <div>
                    <button
                      className="w-80 py-2 my-4 bg-[#5a74f1] hover:bg-[#2c2ca4] p-3 text-white rounded-xl"
                    >
                      Log In
                    </button>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="text-gray-500 text-[17px] hover:text-gray-600"
                    >
                      Visit our social media
                    </a>
                  </div>
                  <div className="flex justify-center my-2 mb-12 gap-5">
                    <a
                      href="/"
                      className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="font text-[20px]"
                      />
                    </a>
                    <a
                      href="/"
                      className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="font text-[20px]"
                      />
                    </a>
                    <a
                      href="/"
                      className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="font text-[20px]"
                      />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className='border border-gray-300 m-5'></div>
            <div className="relative w-1/2 bg-gradient-to-r rounded-r-[10px] py-35 px-10">
              <img src={LoginSvg.src} className='w-50 h-50 mt-5'></img>
              <h1 className="text-3xl font-extrabold mb-4 mt-5">Welcome Back!</h1>
              <p>
                EIECS Online Continuous Emission / Effluent Monitoring System.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
