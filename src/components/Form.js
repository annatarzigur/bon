"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../app/firebase"
import { useRouter } from 'next/navigation';


export default function Form(props) {

  const router = useRouter()

  const [isim, setIsim] = useState("");
  const [surname, setSurname] = useState("")
  const [tcId, setTcId] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
  
         await addDoc(collection(db,'datas'),{
          isim:isim,
          surname:surname,
          tcId:tcId,
          phoneNumber:phoneNumber,
          email:email,
          password:password
         })

         router.push("/payment")

      
  };
  
   
  
 
  
  return (
    <div className='max-w-screen'>
        <div className='flex w-full justify-center my-3'>
            <Image src={props.resim} width={350} height={200} alt='' className='object-contain'/>
        </div>
        <div className='w-full px-4'>
        <form className="w-full py-8 max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">İsim:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={isim}
          onChange={(e) => setIsim(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="surname" className="block text-gray-700">Soyisim:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}

          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tcId" className="block text-gray-700">TC Kimlik No:</label>
        <input
          type="text"
          id="tcId"
          name="tcId"
          value={tcId}
          onChange={(e) => setTcId(e.target.value)}

          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700">Telefon Numarası:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}

          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email Adresi:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Parola:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="inline-flex items-center text-[12px] font-bold">
          <input
            type="checkbox"
            id="agreeToTerms"
            
            className="mr-2"
            required
          />
          Kullanım Koşullarını Kabul Ediyorum.
        </label>
      </div>
      <div className="text-center">
      
      <button
  type="submit"
  onSubmit={handleSubmit}
  className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600"
>
          Onayla ve Devam Et
        </button>
        
      </div>
    </form>
        </div>
        
    </div>
    
  );
}
