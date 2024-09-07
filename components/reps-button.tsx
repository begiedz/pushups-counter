interface RepsButtonProps {
  repsInSet: number
  setRepsInSet: (newReps: number) => void
}
const RepsButton = ({ repsInSet, setRepsInSet }: RepsButtonProps) => {
  const increment = () => setRepsInSet(repsInSet + 1)
  const decrement = () => setRepsInSet(repsInSet > 1 ? repsInSet - 1 : 1)
  return (
    <section className="text-center space-y-2">
      <p>Set the amount of reps</p>
      <div className="flex gap-4 *:bg-slate-500 *:rounded *:p-3 *:text-3xl *:size-16 *:flex *:items-center *:justify-center">
        <button onClick={decrement}>-</button>
        <div>{repsInSet}</div>
        <button onClick={increment}>+</button>
      </div>
    </section>
  )
}

export default RepsButton
