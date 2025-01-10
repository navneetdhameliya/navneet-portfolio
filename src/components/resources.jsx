import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const Resources = () => {
    const router = useRouter();

    return (
        <div className="mt-[100px] px-10 py-5 lg:px-20 lg:py-10">
            <div className="lg:ps-40">
                <div className="text-4xl">Resources</div>
                <p className="mt-[24px] lg:max-w-[700px] text-opacity-50">
                    As a  Flutter & Frontend Web Developer, I love sharing tools, projects, and open-source solutions to give back to the community. From authentication templates to interactive UI components and creative effects, these resources showcase my passion for coding and innovation. Whether you&apos;re here for inspiration or practical tools, I hope these projects spark ideas and help solve challenges in your development journey.
                </p>
                <button
                    data-cursor="-hidden"
                    className="mt-[24px] rounded-full py-2 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                    onClick={() => router.push("/resources")}
                >
                    View Resources<ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};