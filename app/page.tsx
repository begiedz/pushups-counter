'use client'
import CountButton from '@/components/count-button'
import RepsButton from '@/components/reps-button'
import SetsCounter from '@/components/sets-counter'
import TotalReps from '@/components/total-reps'
import { useState, useEffect } from 'react'
// i love my life as it is - developer note
export default function Home() {
  const [currentReps, setCurrentReps] = useState(0)
  const [repeatsCount, setRepeatsCount] = useState(0)
  const [totalReps, setTotalReps] = useState(0)
  const [repsInSet, setRepsInSet] = useState(8)

  const handleCount = () => {
    setCurrentReps(currentReps + 1)
  }

  useEffect(() => {
    document.addEventListener(
      'touchmove',
      (event) => {
        event.preventDefault()
      },
      { passive: false }
    )
  }, [])

  useEffect(() => {
    currentReps !== 0 && setTotalReps(totalReps + 1)
    //if currentReps get the total amount of reps in set
    if (currentReps >= repsInSet) {
      setRepeatsCount(repeatsCount + 1)
      setCurrentReps(0)
    }
  }, [currentReps])

  return (
    <main className="flex items-center justify-around absolute w-full h-full flex-col">
      <RepsButton
        repsInSet={repsInSet}
        setRepsInSet={setRepsInSet}
      />
      <h1 className="text-8xl">{currentReps}</h1>
      <CountButton handleCount={handleCount} />
      <div className="flex items-center justify-around w-full">
        <SetsCounter repeatsCount={repeatsCount} />
        <TotalReps totalReps={totalReps} />
      </div>
    </main>
  )
}
