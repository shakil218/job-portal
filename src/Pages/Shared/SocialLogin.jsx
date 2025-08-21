import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

  const {signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()

  const socialLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div>
      <button onClick={socialLogin} className="btn font-bold bg-white w-full hover:text-[#346FF9]"><FcGoogle size={20}></FcGoogle>Sign up with Google</button>
      <div className="divider">Or continue with</div>
    </div>
  );
};

export default SocialLogin;