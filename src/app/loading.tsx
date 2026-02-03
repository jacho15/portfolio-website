export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-p5-black">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-p5-gray rounded-full animate-spin">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-p5-red rounded-full transform -translate-x-1/2 -translate-y-1" />
        </div>

        {/* Inner element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-p5-red transform rotate-45 animate-pulse" />
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <span className="font-heading text-p5-red tracking-widest text-lg">LOADING</span>
        </div>
      </div>
    </div>
  )
}
