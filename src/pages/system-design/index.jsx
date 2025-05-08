import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Inner from "@/components/Inner";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { useEffect } from "react";
const SystemDesign = () => {
    useLenisScroll();
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-900 text-white">
            {/* Back Button */}
            <button
                onClick={() => router.push("/")}
                className="p-2 hover:bg-gray-800 absolute top-10 left-5 rounded-full border border-gray-700 focus:outline-none">
                <ChevronLeft color="#fff" />
            </button>

            <Inner>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="px-6 py-8 lg:px-20 lg:py-10 mt-24 lg:mt-0">
                    <div className="lg:px-40">
                        <h1 className="text-5xl font-bold mb-4">FlutterFlow: Building Mobile Apps Without Writing Code</h1>




                        <div className="space-y-6">
                            <p className="text-lg text-gray-300">Hi everyone,</p>
                            <p className="text-gray-300">
                                Today, let&apos;s dive into the fascinating world of FlutterFlow—an incredible platform for building visually stunning applications with ease. Whether you&apos;re a seasoned developer preparing for ambitious projects or a beginner exploring app development, understanding how to leverage FlutterFlow is essential for creating scalable, reliable, and efficient applications without writing extensive code.
                            </p>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">What is FlutterFlow?</h2>
                                <p className="text-gray-400 mt-4" >
                                    <strong  style={{ padding: "2px 4px", marginRight: "10px", borderRadius: "4px" }}>FlutterFlow</strong>
                                    is a low-code development platform designed for building cross-platform applications. Leveraging the power of Google&apos;s Flutter framework, FlutterFlow enables developers to create high-quality, native-like apps for both iOS and Android seamlessly. The platform combines a visual interface with powerful functionality, making it accessible to both experienced developers and those with limited coding experience.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">FlutterFlow makes it an attractive option for:</h2>
                                <div className="text-gray-400 mt-4 space-y-4">
                                    <p >
                                        <strong className="text-white">Entrepreneurs and startups:</strong>Quickly prototype and launch minimum viable products (MVPs).
                                    </p>
                                    <p>
                                        <strong className="text-white">Business owners:</strong> Build internal tools or custom mobile solutions without relying on developers.
                                    </p>
                                    <p>
                                        <strong className="text-white">Non-technical users:</strong>  Create basic apps without diving into complex programming languages.
                                    </p>

                                </div>
                            </section>

                            <section>

                                <h2 className="text-3xl font-semibold mt-10">Key Features of FlutterFlow:</h2>
                               <img
                                    src="https://res.cloudinary.com/ddglb9gp6/image/upload/v1737112847/download-compresskaru.com_2_f0vdxt.png"
                                    alt="System Design"
                                    className="my-6 rounded-xl shadow-lg  h-auto"
                                    style={{width:"900px"}}
                                />

                                <div className=" mt-4 space-y-4">
                                    <p >
                                        <strong className="text-white">Visual Design Interface:</strong>
                                        <p className="text-gray-400 mt-1">FlutterFlow offers a visual design interface that allows users to design app layouts effortlessly. The drag-and-drop functionality makes it easy to arrange elements, saving time and eliminating the need for extensive coding.</p>
                                    </p>
                                    <p >
                                        <strong className="text-white">Real-Time Collaboration:</strong>
                                        <p className="text-gray-400 mt-1">The platform supports real-time collaboration, allowing multiple team members to work on the same project simultaneously. This feature enhances teamwork and accelerates the development process.</p>
                                    </p>

                                    <p >
                                        <strong className="text-white">Responsive Layouts:</strong>
                                        <p className="text-gray-400 mt-1">FlutterFlow ensures that the apps created are responsive by default. The layouts automatically adapt to different screen sizes, providing a consistent and seamless user experience across devices.</p>
                                    </p>
                                    <p >
                                        <strong className="text-white">Custom Code Integration:</strong>
                                        <p className="text-gray-400 mt-1">For developers who prefer to add custom code, FlutterFlow allows seamless application integration. This flexibility caters to advanced users who want to extend the functionality beyond the platform’s visual interface.</p>
                                    </p>
                                    <p >
                                        <strong className="text-white">Built-in Widgets and Templates:</strong>
                                        <p className="text-gray-400 mt-1">FlutterFlow comes equipped with a wide range of pre-built widgets and templates that simplify the development process. These resources enable developers to create polished and feature-rich apps with minimal effort.</p>
                                    </p>
                                </div>
                            </section>

                            <p className="text-gray-300 mt-10">
                                Thanks for reading! If you have any questions or need help designing your next big system, feel free to reach out. Let&apos;s build something amazing together.
                            </p>

                            <p className="mt-10 font-medium text-xl">Artonest Technosys</p>
                        </div>
                    </div>
                </motion.div>
            </Inner>
        </div>
    );
};

export default SystemDesign;
