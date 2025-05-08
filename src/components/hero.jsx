import WordRotate from "@/components/word-rotate";
import Link from "next/link";

const Hero = () => {

    return (
        <div
            className={`px-10 py-5 lg:px-20 lg:py-10`}>
            <div className="lg:ps-40 text-4xl lg:text-6xl flex flex-col gap-y-[10px]">
                <WordRotate
                    words={["hi", "hello", "namaste", "bonjour", "Hallo"]}
                />
                <div>i&apos;m</div>
                <div>Navneet.</div>
            </div>
            <p className="lg:ps-40 text-lg lg:text-xl mt-10 lg:max-w-7xl">
                At Artonest Technosys, we are a forward-thinking development agency dedicated to building robust, scalable, and user-centric digital solutions. Leveraging the power of <span className="bg-gray-300 px-1 py-1 rounded-md  text-black">Flutter</span>, <span className="bg-gray-300 px-1 py-1 rounded-md  text-black">FlutterFlow</span>, <span className="bg-gray-300 px-1 py-1 rounded-md  text-black">Flutter Web</span>, and <span className="bg-gray-300 px-1 py-1 rounded-md  text-black">Node Js</span>, our team creates high-quality mobile and web applications that are visually engaging, functionally rich, and performance-optimized. From intuitive UI/UX design to seamless backend integration, we handle every aspect of development with a focus on innovation, efficiency, and real-world impact—helping businesses transform their ideas into powerful digital products.
            </p>
            <div className="lg:ps-40 mt-5">
                /* <Link
                    href={"https://calendly.com/work-navneetvd/30min"}
                    target="_blank"
                >   <button
                data-cursor="-hidden"
                className="mt-[24px] rounded-full py-2 px-3 shadow-sm shadow-white/20 flex items-center gap-x-4 bg-gradient-to-tr from-blue-400/30 via-transparent to-violet-400/30  hover:bg-white hover:text-black"
              >
                Book an appointment
              </button>
                </Link> */
            </div>
        </div> 
    );
}

export default Hero;
