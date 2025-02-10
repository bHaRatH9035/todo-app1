import { Button } from '@/components/ui/button';
import { Session } from 'next-auth';
import { getSession, SessionProvider, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

import '@/pages/index.css';

export default function Home() {
  const [session, setSession] = useState<Session | null>()

  useEffect(() => {
    updateSessionToken()
  }, [])

  const updateSessionToken = async () => {
    const session = await getSession();
    console.log('session data ', session)
    setSession(session)
  }

  return (
    <SessionProvider session={session}>
      <div>
        <header className='flex sticky top-0 items-center justify-between py-4'>
          <div className='px-4'>Welcome, <span className='text-2xl italic'>{session?.user?.name}</span></div>
          <div className='px-4'>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </div>
        </header>
      </div>
    </SessionProvider>
  );
}
