"use client";

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export default function RegisterPage(){
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false)

  async function handleFormSubmit(ev){
    ev.preventDefault();
    setCreatingUser(true)
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-type': 'application/json'},
      })

    if(response.ok){
      setUserCreated(true);
    }else{
      setError(true);
    }
      setCreatingUser(true) 
  }

  return(
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created <br /> Now you can <Link className="underline" href={'/login'}>Login &raquo; </Link>.
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occured. Please try again.
      </div>
      )}
      <form  className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input 
          type="email" 
          placeholder="email"  
          disabled={creatingUser}
          value={email}
          onChange={ev=> setEmail(ev.target.value)}
          />
        <input 
          type="password" 
          placeholder="password" 
          disabled={creatingUser}
          value={password}
          onChange={ev=> setPassword(ev.target.value)}
          />
        <button disabled={creatingUser} type="submit">
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          Login with provider
        </div>
        <button 
          onClick={()=> signIn('google', {callbackUrl: '/'})}
          className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={'google icon'} width={24} height={24} />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{' '}
          <Link className="underline " href={'/login'}> Login here &raquo; </Link>
          
        </div>
      </form>
     
    </section>
  )
}