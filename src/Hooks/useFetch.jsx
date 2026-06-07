import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function useFetch() {

      const [data,setData] = useState([]);
      const [loading,setLoading] = useState(true);
      const [error,setError] = useState('');



       const getData= async()=>{

    try {
      const data= await axios.get('http://ums12.runasp.net/api/users');
      setData(data.data);
      console.log(data.data.users);
    } catch (err) {
      
      setError('error');
    } finally {
      setLoading(false);
    }
  }


   useEffect(()=>{
    getData();
  },[])

  return (
    {data,loading,error}
  )
}

export default useFetch