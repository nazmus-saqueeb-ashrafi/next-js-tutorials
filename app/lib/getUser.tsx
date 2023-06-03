import React from 'react'

export default async function getUsersPost(userId : string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!res.ok) throw Error("Cannot find user data")

  return res.json()
}
