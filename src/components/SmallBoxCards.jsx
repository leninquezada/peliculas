import {useState} from "react";

export function SmallBoxCards({box}) {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState({box});
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div>
            <button className={"synopsis"} onClick={handleClickOpen}>  Sipnosis  </button>
            <dialog selectedValue={selectedValue} open={open} onClose={handleClose} showCloseIcon={true} >
                {box}
            </dialog>
        </div>
    )
}