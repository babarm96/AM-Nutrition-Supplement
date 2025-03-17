import React, { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div
        className="flex items-center px-4 py-2 w-full"
        style={{ background: "#75f542", display: "flex", alignItems: "center", height:'80px' }}
      >
        {/* Contact Number on the Left */}
        <span className="text-black font-bold whitespace-nowrap" style={{ marginRight: "200px", fontSize:"20px" }}>
         <b> 📞 Contact: 9075014816</b>
        </span>

        {/* Marquee Wrapper with Fixed Width */}
        <div
          style={{
            flex: 1, // Makes the marquee take available space
            maxWidth: "60%", // Keeps it centered
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginRight: "100px",
            fontSize: '25px'
          }}
        >
          <marquee behavior="scroll" direction="left" className="text-black font-semibold"  style={{ marginRight: "100px" }}>
           <b> ✅ All Payment Accepted | 🛒 Sale 30% to 40% Off on Selected Items | ⏳ Ends in: Limited Time! | 🚚 All India Delivery Available</b>
          </marquee>
        </div>

        {/* Close Button on the Rightmost Corner */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-black font-bold"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            marginLeft: "auto", // Pushes the button to the rightmost side
            paddingRight: "10px", // Adds a small gap from the right edge
          }}
        >
          ❌
        </button>
      </div>
    )
  );
};

export default Header;
