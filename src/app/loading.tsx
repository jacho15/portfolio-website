import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <Image
        src="/loading.svg"
        alt="Loading..."
        width={200}
        height={200}
        priority
      />
    </div>
  )
} 