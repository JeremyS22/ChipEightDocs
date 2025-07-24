import React from 'react'
import "../styles/HeaderBar.css" 
import Link from 'next/link' 

export default function HeaderBar() {
  return (
    <div className = "headerContainer">
        <Link href = "/" className = "siteNameLink">
          <h1 className = "siteName">
              ChipEight Docs
          </h1>
        </Link> 
    </div>
  )
}
