import Link from 'next/link'

export function MainLayout( { children } ) {
  return(
    <>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/catalog'><a>Catalog</a></Link>
      </nav>
      <main>
        {children}
      </main> 
    </>
  )
}