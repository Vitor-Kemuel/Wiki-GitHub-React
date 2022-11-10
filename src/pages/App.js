import logo from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';
import { useState } from 'react';
import Button from '../components/button';
import { api } from '../services/api';

const App = () => {
  const [repos, setRepos] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")

  const handleSearchRepo = async () => {
    if (currentSearch != "") {

      const { data } = await api.get(currentSearch)

      setRepos(data.items)
    }
  }

  return (
    <Container>
      <img src={logo} alt="logo" width={72} height={72} />
      <Input value={currentSearch} onChange={(e) => setCurrentSearch(e.target.value)} />
      <Button label={"Buscar"} onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} />)}
    </Container>
  );
}

export default App;
