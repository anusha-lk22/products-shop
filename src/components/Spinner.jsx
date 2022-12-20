import { BiLoaderAlt } from 'react-icons/bi';

const Spinner = () => {
  return (
    <div className='w-full h-screen mx-auto grid place-content-center'>
      <BiLoaderAlt className='animate-spin text-6xl text-blue-600' />
    </div>
  );
};

export default Spinner;
