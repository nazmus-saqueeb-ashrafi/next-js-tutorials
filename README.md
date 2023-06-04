Tutorial details

Day 1

- Run using 'npm run dev'
- Entry point is page.tsx in the root
- Files contain RFC (React Functional Components)
- Next Js has a system where we can make folders which define routes
- about (folder)
  - page.tsx
  - error.tsx
  - loading.tsx
  - layout.tsx
  - styles.module.css
- use Metadata to optimize SEO (in page.tsx or layout.tsx)
- use loading.tsx to create a loading state (uses react suspense under the hood)
- in error.tsx we define the error boundaries.

Day 2

Steps to fetch data

- make a folder called lib and in it write a function to fetch data and return in json format (getAllUsers())

- define data type in a file called types.d.ts (User)

- pull in data in the static page

const usersData: Promise<User[]> = getAllUsers()
const users = await usersData

Day 3

Dynamic pages --------------

- make a folder like [userId]
- in folder create page.tsx

type Params = {
params:{
userId : string
}
}

export default async function UserPage({params:{userId}}: Params) {...}

Request data in parallel ------------

- we can request data in parallel (ie not waterfall - one after other)

const userData: Promise<User> = getUser(userId)
const userPostsData: Promise<Post[]> = getUserPosts(userId)

const [user, userPosts] = await Promise.all([userData,userPostData])

Passing Props through Function ------------

- getUserPosts(userId)
- export default async function getUserPosts(userId : string) {...}

Progressively render pages using suspense ------------

- We can progressively render the page, and incrementally sho wcontent to the user, while rest of the content loads
- To do this we have to pass a promise to the component we want to load progressively
- Note that data will still be loaded in parallel

<Suspense fallback={<h2>Loading....</h2>}>
<UserPosts promise = {userPostsData}/>
</Suspense>

Pass a promise to a component ------------

- <UserPosts promise = {userPostsData}/>
- type Props = {
  promise: Promise<Post[]>
  }
  export default async function UserPosts({promise}: Props) {
  const posts = await promise
  ....
  }

Day 4

Creating dynamic metadata ------------

- use Promise<Metadata> to create dynamic metadata

- export async function generateMetadata({params:{userId}}: Params) : Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user = await userData

  return {
  title: user.name,
  description: `This is a page for ${user.name}`
  }
  }
