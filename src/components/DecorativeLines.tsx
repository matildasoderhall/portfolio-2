import './DecorativeLines.scss';

interface DecorativeLinesProps {
  styles?: React.CSSProperties;
  color?: string;
  className?: string;
}

export const DecorativeLines = ({
  styles,
  color = 'var(--color-white)',
  className,
}: DecorativeLinesProps) => {
  return (
    <>
      <svg
        className={`decorative-lines decorative-lines--mobile ${className || ''}`}
        viewBox="0 0 393 389"
        aria-hidden="true"
        preserveAspectRatio="none"
        style={styles}
      >
        <g
          stroke={color}
          strokeWidth="1"

          fill="none"
        >
          <line
            x1="11.6831"
            y1="388.022"
            x2="11.6831"
            y2="146.121"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="35.5999"
            y1="388.488"
            x2="35.5999"
            y2="146.587"
            vectorEffect="non-scaling-stroke"
          />
          <line
            y1="-0.5"
            x2="368.242"
            y2="-0.5"
            transform="matrix(0.637456 -0.770487 0.265856 0.964013 259.394 388.56)"
            vectorEffect="non-scaling-stroke"
          />
          <line
            y1="-0.5"
            x2="501.931"
            y2="-0.5"
            transform="matrix(0.637456 -0.770487 0.265856 0.964013 226.35 387.695)"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="-40"
            y1="280.227"
            x2="516.309"
            y2="280.227"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>

      <svg
        className={`decorative-lines decorative-lines--desktop ${className || ''}`}
        viewBox="0 0 1003 523"
        aria-hidden="true"
        preserveAspectRatio="none"
        style={styles}
      >
        <g stroke={color} strokeWidth="1" fill="none">
          <line
            x1="94"
            y1="520.786"
            x2="94"
            y2="141.77"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="161.5"
            y1="520.786"
            x2="161.5"
            y2="141.77"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="635.646"
            y1="522.208"
            x2="1002.44"
            y2="155.416"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="480.575"
            y1="522.362"
            x2="1002.58"
            y2="0.353561"
            vectorEffect="non-scaling-stroke"
          />
          <line
            y1="351.27"
            x2="1003"
            y2="351.27"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </>
  );
};
