import React from 'react'
type Props = {
  promise: Promise<Post[]>
}
export default async function UserPosts({promise}: Props) {
  const posts = await promise

  const content = (
    <section>
      {
        posts.map(post=>{
          return <>{post.title} <br/></>
        })
      }
    </section>
  )

  return content
}
