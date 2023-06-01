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
