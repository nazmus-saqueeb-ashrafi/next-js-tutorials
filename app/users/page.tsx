import React from 'react'
import Link from 'next/link'
import getAllUsers from '../lib/getAllUsers'


export default async function page() {

    const usersData: Promise<User[]> =  getAllUsers()
    const users = await usersData  

    const content = (
        <section>
            <Link href={'/'}> Link to Home Page</Link>
            <br></br>
            {users.map(user=>{
                return <h1>{user.name}</h1>
            })}
        </section>
    )


  return (
    <>
        {content}
    </>
    
  )
}
