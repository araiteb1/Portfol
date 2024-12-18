"use client"
import React,  {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag"
import {motion, useInView} from "framer-motion";


const ProjectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/araiteb1/Portfol",
        previewUrl: "/",
        videoUrl: "/path/to/video1.mp4", 
    },
    {
        id: 2,
        title: "irc",
        description: "The IRC protocol was developed over the last 4 years since it was first implemented as a means for users on a BBS to chat amongst themselves.  Now it supports a world-wide network of servers and clients, and is stringing to cope with growth. Over the past 2 years,the average number of users connected to the main IRC network has grown by a factor of 10. The IRC protocol is a text-based protocol, with the simplest client being any socket program capable of connecting to the server.",
        image: "images/irc.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/araiteb1/ft_irc",
        previewUrl: "/",
        videoUrl: "/path/to/video2.mp4", 
    },
    {
        id: 3,
        title: "# Mini RAG Chatbot",
        description: "A project implements a mini Retrieval-Augmented Generation (RAG) chatbot that answers user queries by leveraging information from PDF documents. It utilizes LangChain, Chroma, and Google Gemini API to provide comprehensive and user-friendly responses.",
        image: "",
        tag: ["All", "Web", "Ai"],
        gitUrl: "https://github.com/araiteb1/RagChatBot",
        previewUrl: "/",
        videoUrl: "/path/to/video3.mp4",
    },
];

const ProjectsSection = () =>{

    const [tag, setTag]= useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = ProjectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial :{y:50 ,opacity: 0},
        animate: {y:0, opacity: 1},

    };
    return(
        <section  id="projects" class="flex flex-col  w-full" >
            <h2 class="text-black text-center text-4xl font-bold mt-4 ">My Projects</h2>
            <div class="text-black flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
                />
                <ProjectTag 
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
                />
                <ProjectTag 
                onClick={handleTagChange}
                name="C++"
                isSelected={tag === "C++"}
                />
                <ProjectTag 
                onClick={handleTagChange}
                name="Ai"
                isSelected={tag === "Ai"}
                />
               
            </div>
            <ul ref ={ref} class="flex flex-col w-full grip md:grip-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li 
                        key ={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration:0.3, delay: index * 0.4}}
                        >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image} 
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            videoUrl={project.videoUrl}
                            />
                        </motion.li>
                ))}
            </ul>
           
        </section>
    )
}

export default ProjectsSection