import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Features
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Stream Anytime, Anywhere"
          description="Enjoy seamless playback, personalized recommendations, and instant access to the content you love – anytime, anywhere. Join nowand stream smarter today!"
        />
        
        <ProjectCard
          src="/CardImage.png"
          title="Marketplace"
          description="Buy and sell anything from digital downloads to physical goods. Easy, secure, and built for creators and entrepreneurs."
        />
        
        <ProjectCard
          src="AiWorkspace.jpeg"
          title="Workspace"
          description="Access powerful AI tools for writing, design, coding, and more, streamlined workspace built for productivity."
        />
        
      </div>
    </div>
  );
};

export default Projects;
