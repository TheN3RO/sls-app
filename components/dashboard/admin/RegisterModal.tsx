import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { RegisterForm } from '@/components/auth';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  loadUsers: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, loadUsers }) => {
  const handleRegisterSuccess = () => {
    loadUsers();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Rejestracja</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;