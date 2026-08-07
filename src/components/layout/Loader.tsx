import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          width: 160,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 56,
            height: 56,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "3px solid rgba(145, 94, 255, 0.15)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "3px solid transparent",
              borderTopColor: "#915EFF",
              animation: "loader-spin 0.9s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: 12,
              fontWeight: 700,
              color: "#f1f1f1",
            }}
          >
            {Math.round(progress)}%
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 4,
            borderRadius: 999,
            backgroundColor: "rgba(145, 94, 255, 0.15)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#915EFF",
              borderRadius: 999,
              transition: "width 0.2s ease-out",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            letterSpacing: 1.5,
            color: "#aaa6c3",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Loading scene
        </p>
      </div>

      <style>
        {`
          @keyframes loader-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default Loader;