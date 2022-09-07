import { useEffect, useState } from 'react';
import api from '../../services/api';

// URL DA API:/movie/now_playing?api_key=c458a608893b2b6a6d6a339e7feada62&language=pt-br

function Home(){
  const [filmes, setFilmes] = useState([]);


  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "c458a608893b2b6a6d6a339e7feada62",
          language: "pt-BR",
          page: 1,
        }
      })
     //console.log(response.data.results.slice(0,10));
     setFilmes(response.data.results.slice(0,10))

    }

    loadFilmes();

  }, [])

  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
            </article>
          )
        })}
      </div>
      
    </div>
  )
}

export default Home;