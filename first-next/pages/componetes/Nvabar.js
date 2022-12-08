import React from 'react'
import styels from '../../styles/Navbar.module.css'
import Link from 'next/link'
function Nvabar() {
    return (
        <div>
            <ul className={styels.conatiner}>
                <Link href="/" className={styels.Li}>Home</Link>
                <Link href="/About" className={styels.Li}>about</Link>
                <Link href="/" className={styels.Li}>Home</Link>
                <Link href="/About" className={styels.Li}>about</Link>

            </ul>
        </div>
    )
}

export default Nvabar