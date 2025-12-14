export default function Snow() {
    return (
      <div className="snow-container">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * -20}s`,
            }}
          />
        ))}
      </div>
    );
  }
  