import { ArrowRight, Dot } from "lucide-react";

const Speak = () => {
    return (
        <div className="mt-[100px] px-10 py-5 lg:px-20 lg:py-10">
            <div className="lg:ps-40">
                <div className="text-4xl">Speak</div>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    I&apos;m passionate about sharing knowledge and igniting conversations in the tech world. Whether it&apos;s building beautiful apps with Flutter and FlutterFlow, I love exploring and discussing innovative solutions.
                </p>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    At conferences, workshops, and webinars, I share insights on cross-platform development, modern UI/UX design, and mobile app technologies, aiming to inspire, educate, and engage developers and tech enthusiasts. Through my journey, I hope to spark creativity and help others bring their ideas to life.
                </p>
                <button
                    data-cursor="-hidden"
                    className="mt-[24px] rounded-full py-2 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                    onClick={() => window.location.href = 'mailto:navneetdhameliyad@gmail.com'}
                >
                    Say hi <ArrowRight size={20} />
                </button>
                <div className="mt-[100px] flex gap-x-8 flex-wrap">
                    <div>
                        <a href="https://www.linkedin.com/in/navneet-dhameliya-a4ba54205/" target="_blank" className="flex items-center gap-x-4 hover:text-blue-500">
                            <span><Dot /></span>
                            <span>Linkedin</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/navneetdhameliya" target="_blank" className="flex items-center gap-x-4 hover:text-blue-500">
                            <span><Dot /></span>
                            <span>Github</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speak;