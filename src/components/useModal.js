import {useState} from 'react'
import Modal from "./Modal"

/**
 * @component Hook that returns a Modal
 * @template const [Modal, openModal, toggleModal] = useModal()
*/
function useModal() {
    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => {
        setOpenModal(!openModal)
    }
    return [Modal, openModal,toggleModal]
}

export default useModal