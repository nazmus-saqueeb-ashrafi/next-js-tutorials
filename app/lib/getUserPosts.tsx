import React from 'react'

export default async function getUserPosts(userId : string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)

  if (!res.ok) throw Error("Cannot find user posts")

  return res.json()
}
