import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';

function App() {
    const [projetos, setProjetos] = useState(['Desenvolvimento Web', 'Desenvolvimento Mobile']);

    const handleAddProject = () => {
        // projetos.push(`Novo projeto ${Date.now()}`);
        setProjetos([...projetos, `Novo projeto ${Date.now()}`])
    }

	return (
		<>
			<Header title='Sistema de Informação' />
            <ul>
                {projetos.map(projeto => <li key={projeto}>{projeto}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
		</>
	);
}

export default App;
