import Banner from './Banner';
import HotJobs from './HotJobs';
import AuthContext from '../../Context/AuthContext';
import Spinner from '../Shared/Spinner';
import { useContext } from 'react';

const Home = () => {
  const {loading}=  useContext(AuthContext);

  if(loading){
    return <Spinner></Spinner>
  }
  
  return (
    <div>
      <Banner></Banner>
      <HotJobs></HotJobs>
    </div>
  );
};

export default Home;