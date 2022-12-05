import {getProviders, signIn} from 'next-auth/react'
import { useEffect, useState } from 'react'

async function fetchProvides() {
    const providers = await getProviders()
    return providers
}

function Login() {
    const [providers, setProviders] = useState<Object>()
    useEffect(() => {
        fetchProvides().then((data: any) => setProviders(data))
    }, [])
    console.log(providers)
  return (
      <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
          <img src="https://links.papareact.com/9xl" alt="Spotify-logo" className='w-52 mb-5' />
          {providers && Object.values(providers).map((provider) => (
              <div key={provider.name}>
                  <button onClick={() => signIn(provider.id, {
                        callbackUrl: '/'
                  })} className='bg-[#1DB954] text-white rounded-full font-bold p-5'>
                      Sign in with {provider.name}
                  </button>
              </div>
            ))}
    </div>
  )
}

export default Login