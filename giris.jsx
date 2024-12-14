import React from 'react'
import {useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Giris = () => {
  const navigate = useNavigate();
  const [name, setisim] = useState('');
  const [password,setsifre] = useState('');
  
  const Kayit = async () => {
    console.log('naber')
  try{
     const response = await fetch('http://localhost:5000/add-name' , {
      method:'POST' ,
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({name , password})
     });
     const data = await response.json();

     if(response.ok){
      console.log(data.message)
      navigate('/HomePage')
      setisim('');
      setsifre('')
     }
     else{
      console.log(data.error)
      alert('bu hesap zaten var la enai')
      setisim('');
      setsifre('')
     }
  }
  catch{
    alert('bir hata olustu dosdum')
    setisim('');
      setsifre('')
  }
  }

  



  return (


    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , height:'100vh' , flexDirection:'column' }}>
         
         <input onChange={(e)=>setisim(e.target.value)} value={name} type="text" placeholder='Adinizi giriniz' className='Isim'/>
         <input onChange={(e)=>setsifre(e.target.value)} value={password} type="text" placeholder='Sifrenizi giriniz' className='Sifre' />

         <button onClick={Kayit} className='kayit'>Kayit Ol</button>
         <button className='giris'> Giris Yap </button>

    </div>
  )
}

export default Giris