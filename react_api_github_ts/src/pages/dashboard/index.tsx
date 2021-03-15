import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository(): void {}
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explorer repositórios no GitHub</Title>
      <Form action="">
        <input
          value={newRepo}
          onChange={(e): void => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/68981163?s=460&u=db29de5ecccb9492a8e69ca28b472d2e2b3776d6&v=4"
            alt="Danilo Ribeiro"
          />
          <div>
            <strong>facebook/react</strong>
            <p>
              React is an open source JavaScript library used for designing user
              interfaces
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/68981163?s=460&u=db29de5ecccb9492a8e69ca28b472d2e2b3776d6&v=4"
            alt="Danilo Ribeiro"
          />
          <div>
            <strong>facebook/react</strong>
            <p>
              React is an open source JavaScript library used for designing user
              interfaces
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/68981163?s=460&u=db29de5ecccb9492a8e69ca28b472d2e2b3776d6&v=4"
            alt="Danilo Ribeiro"
          />
          <div>
            <strong>facebook/react</strong>
            <p>
              React is an open source JavaScript library used for designing user
              interfaces
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
