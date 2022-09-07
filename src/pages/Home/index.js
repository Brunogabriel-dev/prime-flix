import { useEffect, useState } from 'react';

// URL DA API:/movie/now_playing?api_key=c458a608893b2b6a6d6a339e7feada62&language=pt-br

function Home(){
  const [filmes, setFilmes] = useState([]);


  useEffect(()=>{

    async function loadFilmes(){

    }

    loadFilmes();

  }, [])

  return(
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  )
}

export default Home;