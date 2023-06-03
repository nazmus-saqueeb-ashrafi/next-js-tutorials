
import getUser from '@/app/lib/getUser'
import React, { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import getUserPosts from '@/app/lib/getUserPosts'

type Params = {
    params:{
        userId : string
    }
}

export default async function UserPage({params:{userId}}: Params) {

    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    const user = await userData
    
  return (
    <>
        <div>{user.name}</div>
        <br/>
        <h2>Posts</h2>
        <Suspense fallback={<h2>Loading....</h2>}>
            <UserPosts promise = {userPostsData}/>
        </Suspense>
        
    </>
    
    
  )
}
