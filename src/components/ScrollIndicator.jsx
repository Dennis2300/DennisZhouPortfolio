import React from "react";

export default function ScrollIndicator() {
  return (
    <div>
      <div className="scroll-indicator absolute bottom-5 w-full flex justify-center">
        <button
          onClick={() =>
            document
              .getElementById("section1")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-white text-4xl animate-bounce focus:outline-none"
        >
          ↓
        </button>
      </div>
    </div>
  );
}
