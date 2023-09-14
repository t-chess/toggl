"use client"

import { updateProject } from "@/clientCalls/projects";
import { Project } from "@/app/utils/types"
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    projects: Project[],
    onEdit:  (id: number) => () => void
}

export default function ProjectList({projects, onEdit}:Props) {
    const router = useRouter();
    const onToggle = async (id:number) => {
        let thisProject = projects.find(p=>p.id===id)!;
        const res = await updateProject({...thisProject, active: !thisProject.active});
        if (res.ok) {
            router.refresh()
        }
    }
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>User</th>
                        <th>State</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {projects.map(p=>(
                            <tr key={p.id}>
                                <th>{p.id}</th>
                                <td>{p.name}</td>
                                <td>{p.user_name}</td>
                                <td><div className={"badge " +p.active?'badge-success':"badge-error"}>&nbsp;</div></td>
                                <td>
                                    <button onClick={onEdit(p.id!)} className="btn mr-5">edit</button>
                                    <button onClick={()=>onToggle(p.id!)} className="btn">toggle</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}