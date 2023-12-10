import heroImage from '@/public/images/hero.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Image src={heroImage} className='w-11/12' alt="fitness image"/>
    </main>
  )
}
