import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
    return (
        <div>
            <h1>About Page!</h1>
            <Link href={"/navbar"}><h1>Go to Navbar</h1></Link>

            </div>
    )
}

export default AboutPage;