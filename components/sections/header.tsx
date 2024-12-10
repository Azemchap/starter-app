import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { NavigationMenuDemo } from '../demo/nav-demo'
import { ModeToggle } from '../shared/mode-toggle'
import Link from 'next/link'

export default function Header() {
    return (
        <section className='drop-shadow-4xl sticky top-0 z-40 left-0 right-0 bg-background '>
            <header className='flex items-center gap-4 justify-between container py-4'>

                <div className='flex items-center gap-2'>
                    <SidebarTrigger />
                    <Link href="/">Homepage</Link>
                </div>

                <div className='hidden lg:inline-flex'>
                    <NavigationMenuDemo />
                </div>

                <ModeToggle />
            </header>
        </section>
    )
}
