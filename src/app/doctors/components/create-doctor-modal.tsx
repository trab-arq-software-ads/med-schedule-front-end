import Modal from 'react-modal'
import './styleComp.css'
import { useState } from 'react'

export default function CreateDoctorModal({ isOpen, onRequestClose }: { isOpen: boolean, onRequestClose: () => void }) {
  
    const [name, setName] = useState('')
    const [specialization, setSpecialization] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

            try {
              const response = await fetch('http://localhost:3002/medicos/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name:name,
                  specialization:specialization,
                }),
              });

              if (!response.ok) {
                throw new Error('Erro ao criar médico');
              }
              // Se o médico foi criado com sucesso, você pode redirecionar ou exibir uma mensagem de sucesso
              console.log('Médico criado com sucesso');
            } catch (error) {
              console.error('Erro ao criar médico:', error);
            }
          };

          return (
            <Modal
              className={'modal-edit'}
              isOpen={isOpen}
              onRequestClose={onRequestClose}
              contentLabel="Create Doctor Modal"
            >
              <h2>Adicionar Médico</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Especialização"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  required
                />
                <button type="submit">Adicionar</button>
              </form>
            </Modal>
          );
    
    };

