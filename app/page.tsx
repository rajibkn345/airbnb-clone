import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' w-full h-screen text-rose-500 text-2xl '>Hello airbnb</main>
  )
}
