import { ArrowRight, Dot } from "lucide-react";

const Speak = () => {
    return (
        <div className="mt-[100px] px-10 py-5 lg:px-20 lg:py-10">
            <div className="lg:ps-40">
                <div className="text-4xl">Speak</div>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    we’re passionate about sharing knowledge and driving meaningful conversations in the tech industry. We specialize in building intuitive, high-performance applications using Flutter and FlutterFlow, and we’re always exploring innovative technologies to deliver forward-thinking solutions that push the boundaries of what’s possible.
                </p>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    Through conferences, workshops, and webinars, our team shares valuable insights on cross-platform development, modern UI/UX design, and mobile app technologies—aiming to inspire, educate, and engage developers, businesses, and tech enthusiasts. Our mission is to spark creativity and help turn bold ideas into powerful digital products.
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
                        <a href="https://www.linkedin.com/company/artonest-technosys" target="_blank" className="flex items-center gap-x-4 hover:text-blue-500">
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
