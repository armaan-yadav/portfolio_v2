import { ProjectItem } from "@/components/ProjectItem";
import { Project, projects } from "../utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Armaan Yadav",
  description: "Explore my projects and contributions.",
  openGraph: {
    title: "Projects - Armaan Yadav",
    description: "Explore my projects and contributions.",
    url: "https://armaan-yadav.vercel.app/projects",
    images: "https://armaan-yadav.vercel.app/api/og?type=Projects",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-star p-3 md:p-5 max-w-full md:max-w-[75%] lg:max-w-[50%] mx-auto">
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
