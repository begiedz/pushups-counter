import { MouseEventHandler } from 'react'

const CountButton = ({
  count,
  handleCount,
}: {
  count: number
  handleCount: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      onClick={handleCount}
      className="bg-green-500 rounded-full size-48 text-4xl"
    >
      {count}
    </button>
  )
}

export default CountButton
