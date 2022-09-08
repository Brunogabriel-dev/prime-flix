import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

function Filme(){
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "c458a608893b2b6a6d6a339e7feada62",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log("FILME NAO ENCONTRADO")
      })
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [])

  return(
    <div>
      <h1>ACESSANDO FILME {id} </h1>
    </div>
  )
}

export default Filme;