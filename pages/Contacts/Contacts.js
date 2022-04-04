import Link from 'next/link'
import React from 'react'

export const Contacts = () => {
  return (
    <div>
        <h1>Contacts</h1>
        <ul>
            <li>VK: <a href="https://vk.com">vk</a></li>
            <li>Instagram: <a></a> </li>
            <li>YouTube: <a></a></li>
            <li>mail: <a>example@gamil.com</a></li>
        </ul>
        <Link href='/'>Back to Main page</Link>
    </div>
  )
}
