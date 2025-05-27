import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const VisitorCounter = ({ className, style }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        // First, increment the count
        const incrementResponse = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!incrementResponse.ok) {
          throw new Error("Failed to increment count");
        }

        // Then get the updated count
        const getResponse = await fetch("/api/visitors");
        if (!getResponse.ok) {
          throw new Error("Failed to fetch count");
        }

        const data = await getResponse.json();
        setCount(data.count);
      } catch (err) {
        console.error("Visitor counter error:", err);
        setError("Could not load visitor count");
      } finally {
        setLoading(false);
      }
    };

    updateVisitorCount();
  }, []);

  if (error) {
    return null; // or return a fallback UI
  }

  return (
    <div
      className={`visitor-counter ${className || ""}`}
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px",
        textAlign: "center",
        margin: "20px 0",
        ...style,
      }}
    >
      {loading ? (
        <span>Loading visitor count...</span>
      ) : (
        <span>Visitors: {count.toLocaleString()}</span>
      )}
    </div>
  );
};

VisitorCounter.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default VisitorCounter;
