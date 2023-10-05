import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';


const Home = () => {
    return (
        <div className='h-[80vh]'>
            <div className="flex justify-center  my-16 ">
            <div className="relative flex  w-96 flex-col rounded-lg bg-clip-border text-gray-700 ">
  <div className="relative mx-4 mt-4 h-50 overflow-hidden rounded-lg bg-white bg-clip-border text-gray-700 shadow-lg">
    <img className="h-full" src="https://i.ibb.co/4F1Rb4r/pic.jpg" alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
      Saif Mahin
    </h4>
    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-orange-500 antialiased">
      Web Developer
    </p>
  </div>
  <div className="flex justify-center text-white text-3xl gap-7 p-6 pt-2">
    <p><FaFacebook></FaFacebook></p>
    <p><FaInstagram></FaInstagram></p>
    <p><FaTwitter></FaTwitter></p>
    
    
  </div>
</div>
        </div>
        </div>
    );
};

export default Home;