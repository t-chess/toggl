"use client"
import { Project } from "@/app/utils/types"
import { updateProject, createProject } from "@/clientCalls/projects"
import { useState } from "react"
import { Dialog } from "../Dialog"
import ProjectList from "./ProjectList"
import { ProjectsForm } from "./ProjectsForm"
import { useRouter } from 'next/navigation'

type Props = {
    projects: Project[],
}
export const Projects = ({projects}: Props) => {
  const [editedProject, setEditedProject] = useState<Project | undefined>(undefined);
  const router = useRouter()
  const newProject = () => {
    setEditedProject({id: undefined, name: '', active: true, user_name: process.env.NEXT_PUBLIC_USERNAME || ''})
  }
  const selectProject = (id: number) => () => {
    setEditedProject(projects.find((p) => p.id === id))
  }
  const saveProject = async (project: Project) => {
    if (project.id === undefined) {
      const res = await createProject(project)
      if (res.ok) {
        router.refresh()
        setEditedProject(undefined)
      }
    } else {
      const res = await updateProject(project)
      if (res.ok) {
        router.refresh()
        setEditedProject(undefined)
      }
    }
  }
    return (
        <>
        <button className="btn" onClick={newProject}>Add project</button>
        <ProjectList projects={projects} onEdit={selectProject} />
        <Dialog open={editedProject!==undefined} close={() => setEditedProject(undefined)}>
          {editedProject!==undefined && <ProjectsForm initialValues={editedProject} onSave={saveProject} onCancel={()=>setEditedProject(undefined)} />}
        </Dialog>
        </>
    )
}