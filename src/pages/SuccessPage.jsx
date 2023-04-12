import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

function SuccessPage() {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
    // runConfetti();
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white" }}>ПРИЯТНОГО ПРОСМОТРА!</h1>
    </div>
  );
}

export default SuccessPage;
