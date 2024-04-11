import Modal from 'react-modal'
import './styleCompUpdate.css'
import { useState } from 'react'

export default function UpdateDoctorModal({doctor, isOpen, onRequestClose, refreshList}: {doctor:any, isOpen: boolean, onRequestClose: () => void, refreshList: () => void}) {

  const [name, setName] = useState(doctor.name)
  const [specialization, setSpecialization] = useState(doctor.specialization)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

              const response = await fetch(`http://localhost:3002/medicos/update/${doctor.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: name,
                  specialization: specialization,
                }),
              }) .then(() => {
                onRequestClose()
                refreshList()
                console.log('Médico atualizado com sucesso');
              }) .catch((error) => {
                console.error('Erro ao deletar médico:', error);
              });
          };

          return (
            <Modal
              className={'modal-update'}
              isOpen={isOpen}
              onRequestClose={onRequestClose}
              contentLabel="Update Doctor Modal"
            >
              <h2>Atualizar médico</h2>
              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required/>
                <input
                  type="text"
                  placeholder="Especialização"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  required/>

                <div>
                  <button id={'update'} type="submit">Atualizar</button>
                  <button onClick={() => onRequestClose()} type="submit">Cancelar</button>
                </div>
              </form>

            </Modal>
          );
    
    };

