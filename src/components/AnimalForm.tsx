import React, { useState } from 'react';

export default function AnimalForm() {
  const [animal, setAnimal] = useState({ id: '', peso: 0, dataNascimento: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Animal cadastrado:', animal);
    // Salvar no localStorage ou backend
    alert('Animal cadastrado com sucesso! GMD será calculado nas pesagens.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="ID/Brinco" onChange={(e) => setAnimal({...animal, id: e.target.value})} required />
      <input type="number" placeholder="Peso inicial (kg)" onChange={(e) => setAnimal({...animal, peso: parseFloat(e.target.value)})} required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Cadastrar Animal</button>
    </form>
  );
}