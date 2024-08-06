import { ClockLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen flex-col gap-8 w-screen items-center justify-center bg-black">
      <ClockLoader color="#f2f2f2" size={64} />
      <p className='text-white text-xl font-medium'>Waking up the digital fairies...</p>
    </div>
  );
};

export default LoadingScreen;
