import { useEffect, useState } from 'react';
import './favoritos.css'

function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])

  },[])

  return(
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;