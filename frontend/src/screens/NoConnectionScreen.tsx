import { VscCoffee } from 'react-icons/vsc';

const NoConnectionScreen = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen flex-col text-white items-center justify-center gap-8 bg-black">
      <VscCoffee size={64}/>
      <p className="text-xl font-medium text-center">Oops! Our server took a coffee break. <br /> Try again in a bit!</p>
    </div>
  );
};

export default NoConnectionScreen;
