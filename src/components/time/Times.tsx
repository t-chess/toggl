"use client"
import { initTEValue } from "@/app/time/page";
import { TimeEntry } from "@/app/utils/types";
import { useState } from "react";
import { Dialog } from "../Dialog";
import { TimeForm } from "./TimeForm";
import { TimeTable } from "./TimeTable";

type Props = {
    times: TimeEntry[]
}
export const Times = ({times}: Props) => {
    const [editedTE, setEditedTE] = useState<TimeEntry|undefined>(undefined);
    const openEdit = (id: number) => {
        console.log('click')
        setEditedTE(times.find(t=>t.id===id))
    }
    return (
        <>
            <TimeTable TEs={times} onEdit={openEdit} />
            <Dialog open={editedTE!==undefined} close={()=>setEditedTE(undefined)} >
                {editedTE!==undefined&&(<TimeForm {...editedTE||initTEValue} />)}
            </Dialog>
        </>
    )
}