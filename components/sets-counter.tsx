const SetsCounter = ({ repeatsCount }: { repeatsCount: number }) => {
  return (
    <div className="text-center space-y-2">
      <p>Sets</p>
      <div className="rounder bg-slate-500 py-2 px-9 text-3xl rounded">
        {repeatsCount}
      </div>
    </div>
  )
}

export default SetsCounter
