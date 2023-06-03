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
                return <Link href={`users/${user.id}`}><h2>{user.name}</h2></Link>
            })}
        </section>
    )


  return (
    <>
        {content}
    </>
    
  )
}
