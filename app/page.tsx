import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Root page',
  description: 'This is the root page',
};
 

export default function Home() {
  return (
    <main >
      <h1>Hello World</h1>
      <Link href={"/about"}>Link to About Page</Link>
    </main>
  )
}
