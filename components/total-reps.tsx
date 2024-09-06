const TotalReps = ({ totalReps }: { totalReps: number }) => {
  return (
    <div className="text-center space-y-2">
      <p>Total Reps</p>
      <div className="rounder bg-slate-500 py-2 px-9 text-3xl rounded">
        {totalReps}
      </div>
    </div>
  )
}

export default TotalReps
