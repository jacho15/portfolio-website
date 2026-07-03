// Torn-paper rip between sections — white sliver, red sliver, then black,
// like the diagonal page tears on the official Persona 5 site.

const JAG: Array<[number, number]> = [
  [0, 58], [48, 34], [110, 66], [176, 24], [252, 60], [318, 18], [398, 54],
  [470, 30], [548, 64], [622, 22], [700, 58], [770, 34], [848, 68], [918, 26],
  [996, 58], [1064, 36], [1140, 66], [1214, 22], [1296, 56], [1368, 34], [1440, 60],
]

function poly(offset: number) {
  return JAG.map(([x, y]) => `${x},${y + offset}`).join(' ') + ' 1440,140 0,140'
}

interface TornDividerProps {
  flip?: boolean
  className?: string
}

export default function TornDivider({ flip = false, className = '' }: TornDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-none pointer-events-none ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block w-full h-[64px] md:h-[104px]">
        <polygon points={poly(0)} fill="#FAFAFA" />
        <polygon points={poly(16)} fill="#D80027" />
        <polygon points={poly(34)} fill="#0D0D0D" />
      </svg>
    </div>
  )
}
