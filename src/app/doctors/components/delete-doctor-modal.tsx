import Modal from 'react-modal'
import './styleCompDelete.css'
import { useState } from 'react'

export default function DeleteDoctorModal({doctor, isOpen, onRequestClose, refreshList}: {doctor:any, isOpen: boolean, onRequestClose: () => void, refreshList: () => void}) {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

              const response = await fetch(`http://localhost:3002/medicos/delete/${doctor.id}`, {
                method: 'GET'
              }) .then(() => {
                onRequestClose()
                refreshList()
                console.log('Médico deletado com sucesso');
              }) .catch((error) => {
                console.error('Erro ao deletar médico:', error);
              });
          };

          return (
            <Modal
              className={'modal-delete'}
              isOpen={isOpen}
              onRequestClose={onRequestClose}
              contentLabel="Create Doctor Modal"
            >
              <h2>Deseja realmente deletar este médico ?</h2>
              <form onSubmit={handleSubmit}>

                <p>Id: {doctor.id}</p>
                <p>Nome: {doctor.name}</p>
                <div>
                  <button id={'delete'} type="submit">Deletar</button>
                  <button onClick={() => onRequestClose()} type="submit">Cancelar</button>
                </div>
              </form>
            </Modal>
          );
    
    };

