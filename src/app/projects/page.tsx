import { Projects } from "@/components/projects/Projects";
import { getAllProjects } from "../../serverCalls/projects";

export default async function ProjectsHome() {
  const res = await getAllProjects().then(response=>response.json());
    return (
      <>
        <h1>Projects</h1>
        <Projects projects={res} />
      </>
    )
  }
  