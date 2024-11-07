import React from 'react'
import { MotionTransition } from './transition-components'
import Link from 'next/link'
import { socialNetworks } from '@/data'

function Header() {
  return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
    <header>
    <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Gus
                            <span className="text-secondary">Dev</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                                
                            </Link>
                            
                        ))}
                          <a href="cvGustavo_Neira2024.pdf"
                             download="cvGustavo_Neira2024.pdf"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-white border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Descargar CV
                        </a>
                    </div>
                </div>
                
    </header>
    </MotionTransition>
  )
}

export default Header