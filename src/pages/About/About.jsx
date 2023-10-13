import { FaBirthdayCake, FaLocationArrow, FaMobile, FaVoicemail } from "react-icons/fa";


const About = () => {
    return (
        <div className="bg-white rounded-2xl max-w-7xl mx-auto my-10">
            <h3 className="text-5xl font-bold my-10 mx-8 underline">About Me</h3>
            <div className="flex mx-8 gap-8">
                <div>
                    <div className="relative mx-4 mt-4 w-[330px] h-[400px] overflow-hidden rounded-3xl bg-[#32a8a4] bg-clip-border text-gray-700 shadow-lg mb-10">
                        <img className="h-full" src="https://i.ibb.co/8jpz6Zx/296378494-472721248024460-707262741722012543-n-removebg.png" alt="profile-picture" />
                    </div>
                </div>
                <div className="text-black">
                    <h3 className="text-3xl font-bold">Who am i?</h3>
                    <p className="w-2/3
                    my-2 text-gray-500">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. <br />

                        My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                    <div className="my-10">
                        <h3 className="text-3xl font-bold">personal info</h3>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <div className="flex items-center gap-4">
                                <div className="text-2xl text-red-600 bg-base-200 p-2" ><FaMobile></FaMobile></div>
                                <div>
                                    <h6>Phone</h6>
                                    <p className="font-semibold">01856890532</p>
                                    </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-2xl text-orange-500 bg-base-200 p-2" ><FaLocationArrow></FaLocationArrow></div>
                                <div>
                                    <h6>Location</h6>
                                    <p className="font-semibold">Feni,Bangladesh</p>
                                    </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-2xl text-blue-700 bg-base-200 p-2" ><FaVoicemail></FaVoicemail></div>
                                <div>
                                    <h6>Email</h6>
                                    <p className="font-semibold">Saifmahin500@gmail.com</p>
                                    </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-2xl text-yellow-400 bg-base-200 p-2" ><FaBirthdayCake></FaBirthdayCake></div>
                                <div>
                                    <h6>Birthday</h6>
                                    <p className="font-semibold">Nov 02,2002</p>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;