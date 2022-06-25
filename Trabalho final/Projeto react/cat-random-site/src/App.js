import {useEffect,useState} from  'react'
import './App.css';
import {getImage} from './services/api'

function App() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    
  },[])
  const GetImage= ()=>{
    getImage()
    .then(res=>{
      let content = res.data[0]
      setData(content);
    }).catch(err=>{
      console.log('sem imagem')
    })
  }

  const handleClick = ()=>{
    GetImage()
  }

  return (
    <div className="App">
      <h1>Clique no botão para ver uma imagem de um gatinho :D</h1>
      {data ? <img src={data.url} alt=""/> : <img src="https://vmcom.com.br/adm_cursos/admpanel-vm/img/default.jpg" alt="" />}
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
  
}

export default App;