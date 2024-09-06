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
      className="bg-green-500 rounded-full size-48 text-6xl outline outline-2 outline-offset-[6px] hover:outline-offset-2 outline-green-500"
    >
      {count}
    </button>
  )
}

export default CountButton
