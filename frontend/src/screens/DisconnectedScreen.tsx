import { MdOutlineWifiOff } from 'react-icons/md';

const DisconnectedScreen = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-white">
      <MdOutlineWifiOff size={64} />
      <p className="text-center text-xl font-medium">
        Oops! Did you forget to pay the Wi-Fi bill? <br /> Please refresh the page.
      </p>
    </div>
  );
};

export default DisconnectedScreen;
