import { useState } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClosetModal = () => {
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    handleOpenModal,
    handleClosetModal,
    handleModal,
  };
}

export default useModal;
