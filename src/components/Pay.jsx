import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const KEY="pk_test_51KieNYKKknviQxqvqD24YRCwhFNaOUWy8XWQ1a7QDoAfEN9GZph2KLfUaDBnHSLL2yRebe2ytrqtuOmsTHDU6rgB00m20U0MNA"

const Pay = () => {

  const onToken = (token) => {
      console.log(token)
  }
  return (
    <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",        
    }}>
        <StripeCheckout 
            name="7amma fripe"
            image="https://i.ibb.co/s2dQJQy/7amma-Fripe-logos.jpg"
            billingAddress
            shippingAddress
            description="Your total is 20€"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
        >
            <button
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }}>
                    Pay Now
            </button>
        </StripeCheckout>
    </div>
  )
}

export default Pay