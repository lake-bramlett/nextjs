import React, { Component } from 'react';
import Link from 'next/link'


class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="nav">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        )
    }
}

export default Header;