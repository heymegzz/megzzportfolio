import './CinematicLoader.css'

export default function CinematicLoader({ stage }) {
  if (stage === 'ready') return null

  return (
    <div className={`cinematic-loader cinematic-loader--${stage}`} aria-hidden="true">
      <div className="mask-container">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" className="mask-svg">
          <defs>
            <mask id="textMask">
              {/* White background = show the black rect */}
              <rect width="100%" height="100%" fill="white" />
              {/* Black text = transparent hole */}
              <text 
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dy="0.3em"
                fill="black" 
                className="mask-text-svg"
              >
                M.
              </text>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#050507" mask="url(#textMask)" />
        </svg>
      </div>
    </div>
  )
}
