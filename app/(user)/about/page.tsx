import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "ISTAD E-Commerce About Us",
  description: "We provide the best quality products for you.",
	
};

export default function page() {
  return (
    <div className='h-screen grid place-content-center text-6xl'>About Page</div>
  )
}
