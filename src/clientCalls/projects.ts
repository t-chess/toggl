import { generateLocalUrl, generateUrl } from "@/app/utils/generate_urls";
import { Project } from "@/app/utils/types";

export const getAllProjects = async () => {
  return await fetch(generateLocalUrl('/projects'), {
    cache: 'no-store'
  })
}

export const createProject = async (project: Project) => {
  return await fetch(generateLocalUrl('/projects'), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(project)
  })
}

export const updateProject = async (project: Project) => {
  return await fetch(generateLocalUrl('/projects'), {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(project)
  })
}