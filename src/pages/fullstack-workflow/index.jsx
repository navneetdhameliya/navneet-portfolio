import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Inner from "@/components/Inner";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { useEffect } from "react";
const FullStackWorkflows = () => {
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
                        <h1 className="text-5xl font-bold mb-4">Highlights of Flutter</h1>

                        <div className="space-y-6 mt-5">
                            <p className="text-lg text-gray-400">Hi everyone,</p>
                            <p className="text-gray-400">
                                After five years of working with Flutter, I&apos;ve come to realize that mastering app development isn&apos;t just about writing clean, efficient code—it&apos;s about leveraging the framework&apos;s powerful tools, fostering collaboration within teams, and adopting best practices that ensure scalability and performance. Today, I want to share key insights and strategies that have helped me build beautiful, high-performance apps consistently with Flutter. These tips will not only help you write better code but also optimize your development workflows to deliver exceptional user experiences faster and more efficiently.
                            </p>

                            <section>
                                <p className="text-gray-400 mt-4">
                                    The main aim of flutter is to target the sweet spot of app development with multi-platform UI tool kits.  Initially, flutter was designed for use by both beginners as well as experienced developers.
                                </p>
                            </section>
                           <img
                                    src="https://res.cloudinary.com/ddglb9gp6/image/upload/v1737114703/download-compresskaru.com_3_lpwijp.png"
                                    alt="System Design"
                                    style={{width:"900px"}}
                                    className="my-6 rounded-xl shadow-lg  h-auto"
                                />
                            <section>
                                <h2 className="text-3xl font-semibold mt-10">1. Using Flutter&apos;s Powerful Tools</h2>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Hot Reload:</strong> Instantly see changes in your app without restarting it.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">DevTools:</strong> Use Flutter&apos;s tools to track performance and fix issues.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Widgets & Packages:</strong>  Take advantage of ready-made components and libraries to save time.
                                </p>


                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">2. Collaborating Effectively with Your Team</h2>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Version Control (Git):</strong> Keep track of code changes and collaborate smoothly.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Code Reviews & Pair Programming:</strong> Improve code quality and share knowledge.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Clear Documentation: </strong>  Make it easier for team members to understand your work.
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Agile Workflow:  </strong>  Use Agile methods like Scrum to stay on track.
                                </p>

                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">3. Building Scalable & Performant Apps</h2>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">State Management:</strong> Use tools like GetX, Provider or Bloc to manage app data effectively.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Lazy Loading:</strong> Load only what’s needed to make your app faster.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Responsive Design: </strong> Ensure your app looks good on all devices by using flexible layouts.
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Memory Management: </strong>  Keep an eye on memory usage to avoid slowdowns.
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Async Programming: </strong> Use async and await to handle long-running tasks without freezing the app.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">4. Streamlining Development</h2>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Automated Testing: </strong> Write tests to ensure your app works as expected.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">CI/CD:</strong> Automate building, testing, and deploying your app for faster updates.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Code Quality:  </strong> Use tools like flutter analyze to spot issues early.
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Custom Templates: </strong>  Use reusable code templates to speed up development.
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Automated Releases: </strong> Automate versioning and deployment to avoid errors.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mt-10">5. Delivering Great User Experiences</h2>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Consistent Design: </strong> Stick to design guidelines to create a familiar experience.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Fast Loading:</strong> Automate building, testing, and deploying your app for faster updates.
                                </p>

                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Smooth Animations: </strong> Make your app feel polished with simple animations.
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-gray-200">Personalization: </strong> Customize the app based on user preferences for better engagement.
                                </p>
                            </section>

                            <p className="text-gray-300 mt-10">
                                Thanks for reading! I hope these strategies inspire you to refine your flutter workflows. If you have any questions or want to share your experiences, feel free to connect with me.
                            </p>

                            <p className="mt-10 font-medium text-xl">Navneet Dhameliya</p>
                        </div>
                    </div>
                </motion.div>
            </Inner>
        </div>
    );
};

export default FullStackWorkflows;
