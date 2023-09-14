export type Project = {
    id?: number,
    name: string,
    active: boolean,
    user_name: string
}

export type TimeEntry = {
    id?: number
    project_id: number
    task: string
    start: string
    end: string
    project_name?: string
  }