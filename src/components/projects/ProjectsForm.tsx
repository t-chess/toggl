import { Project } from "@/app/utils/types"
import React, { useState } from "react"
import { Input } from "../Input"

type Props ={
    initialValues: Project,
    onSave: (project: Project)=> void,
    onCancel: ()=> void
}

export const ProjectsForm = ({initialValues, onSave, onCancel}:Props) => {
    const [project, setproject] = useState(initialValues)
    const handleSave = (e:React.FormEvent) => {
        e.preventDefault();
        onSave(project)
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setproject({...project, [name]:value})
    }
    return (
        <form onSubmit={handleSave}>
            <Input label='name' name="name" value={project.name} onChange={handleChange} />
            <button type="submit">Save</button>
        </form>
    )
}