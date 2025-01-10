"use client";

import { projectList } from "@/lib/projectList";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Work = () => {
    const [filter, setFilter] = useState("All");
    const techStack = ["All", "Flutter", "FlutterFlow", "FlutterFlame", "Firebase", "Supabase", "GraphQL/Rest APIs", "Getx", "Bloc", "SQLite"];
    const router = useRouter();

    return (
        <div className="mt-[100px]">
            <div className="px-10 py-5 lg:px-20 lg:py-10">
                <div className="lg:ps-40 flex flex-wrap gap-4">
                    {techStack.map((tech) => (
                        <button
                            key={tech}
                            className={`border rounded-full py-1 px-3 transition-all ${filter === tech ? "bg-white text-black hover:bg-white" : "hover:bg-zinc-900"}`}
                            onClick={() => setFilter(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[50px] gap-4 lg:gap-y-5">
                {projectList.map((project, index) => {
                    const filterArray = project.filter.split(",");
                    if (filter === "All" || filterArray?.includes(filter)) {
                        return (
                            <div key={index} className="px-4 lg:px-0 overflow-hidden">
                                <div
                                    className="custom-aspect-ratio overflow-hidden z-50 relative group"
                                >
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                        className="object-cover hover:opacity-80 transition-all imageani shadow-[#1e1d1d]"
                                    />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 group-hover:h-full w-full hidden lg:flex justify-center items-center opacity-0 group-hover:opacity-100 bg-[#000]/50 backdrop-blur-lg transition-all">
                                        {project.name}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.iosUrl && (
                                        <button
                                            data-cursor="-hidden"
                                            className="rounded-full py-1 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                                            onClick={() => window.open(project.iosUrl, "_blank")}
                                        >
                                            iOS App
                                        </button>
                                    )}
                                    {project.androidUrl && (
                                        <button
                                            data-cursor="-hidden"
                                            className="rounded-full py-1 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                                            onClick={() => window.open(project.androidUrl, "_blank")}
                                        >
                                            Android App
                                        </button>
                                    )}
                                    {project.webUrl && (
                                        <button
                                            data-cursor="-hidden"
                                            className="rounded-full py-1 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                                            onClick={() => window.open(project.webUrl, "_blank")}
                                        >
                                            Web App
                                        </button>
                                    )}
                                    {project.githubUrl && (
                                        <button
                                            data-cursor="-hidden"
                                            className="rounded-full py-1 hover:text-black hover:bg-white px-3 border flex items-center gap-x-4"
                                            onClick={() => window.open(project.githubUrl, "_blank")}
                                        >
                                            GitHub
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default Work;