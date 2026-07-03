// Fixed full-viewport Metaverse backdrop: slowly rotating sunburst rays,
// concentric red rings, scattered star outlines, and an edge vignette.

export default function MetaverseBg() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: '#0D0D0D' }} />

      {/* Rotating sunburst rays */}
      <div
        className="absolute left-1/2 top-1/2 w-[240vmax] h-[240vmax] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'repeating-conic-gradient(rgba(216,0,39,0.05) 0deg 5deg, transparent 5deg 13deg)',
          animation: 'p5BurstSpin 140s linear infinite',
        }}
      />

      {/* Concentric vortex rings */}
      <div
        className="absolute inset-0"
        style={{
          background: 'repeating-radial-gradient(circle at 50% 40%, rgba(216,0,39,0.045) 0 70px, transparent 70px 150px)',
        }}
      />

      {/* Scattered star outlines */}
      <div className="absolute inset-0 p5-star-scatter" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.7) 100%)' }}
      />
    </div>
  )
}
