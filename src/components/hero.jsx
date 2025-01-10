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
                <div>i &apos; m</div>
                <div>Navneet.</div>
            </div>
            <p className="lg:ps-40 text-lg lg:text-xl mt-10 lg:max-w-7xl">
                I am a dynamic and innovative Mobile Application and Web Developer, expertly blending the strengths of Flutter, FlutterFlow, Flutter Web, and ReactJS/TypeScript to create exceptional mobile and web experiences. With over 7 years of hands-on experience crafting cutting-edge Mobile Apps using Flutter, an additional 2 years specializing in FlutterFlow, and 1 year mastering HTML, CSS, ReactJS/TypeScript, I offer a unique mix of technical prowess and imaginative problem-solving.
            </p>
            <div className="lg:ps-40 mt-5">
                <Link
                    href={"https://calendly.com/work-navneetvd/30min"}
                    target="_blank"
                >
                    <button
                        data-cursor="-hidden"
                        className="mt-[24px] rounded-full py-2 px-3 shadow-sm shadow-white/20 flex items-center gap-x-4 bg-gradient-to-tr from-blue-400/30 via-transparent to-violet-400/30 hover:from-violet-400/30 hover:to-blue-400/30 hover:via-transparent"
                    >
                        Book an appointment
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;