import Link from 'next/link'
// import  '../styles'
 
export default function NotFound() {
  return (
    <div className='not-found__container'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}