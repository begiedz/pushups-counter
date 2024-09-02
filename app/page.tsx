'use client'
import CountButton from '@/components/count-button'
import RepeatsCounter from '@/components/repeats-counter'
import { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [repeatsCount, setRepeatsCount] = useState(0)

  const handleCount = () => {
    setCount((prev) => prev + 1)
  }
  useEffect(() => {
    if (count >= 8) {
      setRepeatsCount((prev) => prev + 1)
      setCount(0)
    }
  }, [count])

  return (
    <main className="flex items-center justify-center h-dvh flex-col">
      <CountButton
        count={count}
        handleCount={handleCount}
      />
      <RepeatsCounter repeatsCount={repeatsCount} />
    </main>
  )
}
