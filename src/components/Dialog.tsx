import { ReactNode } from "react"

type Props = {
    open: boolean,
    children: ReactNode,
    close: () => void
}
export const Dialog = ({open, close, children}:Props) => {
    return (
        <dialog className="modal z-10" open={open}>
            <div className="modal-box">
                {children}
                <button className="btn btn-neutral" onClick={close}>Close</button>
            </div>
        </dialog>
    )
}