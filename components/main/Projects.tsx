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
          title="Video Streaming"
          description="Discover a world of unlimited entertainment at your fingertips. Enjoy seamless playback, personalized recommendations, and instant access to the content you love – anytime, anywhere. Join our community and stream smarter today!

"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Buy and sell anything from digital downloads to physical goods – all in one platform. Easy, secure, and built for creators and entrepreneurs.

"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
