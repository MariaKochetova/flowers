import Link from 'next/link'
import React from 'react'
import { HeaderComponent } from './HeaderComponent'

export const Header = () => {
  return (
    <header className="container">
        <div style={{
            display: "flex",
            flexDirection: "row",
            height: "100px"
            }}>
                <HeaderComponent></HeaderComponent>
                <Link href={'/contacts'}><HeaderComponent text="Contacts"></HeaderComponent></Link>
            </div>
    </header>
  )
}
