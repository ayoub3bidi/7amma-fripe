import axios from 'axios';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const KEY="pk_test_51KieNYKKknviQxqvqD24YRCwhFNaOUWy8XWQ1a7QDoAfEN9GZph2KLfUaDBnHSLL2yRebe2ytrqtuOmsTHDU6rgB00m20U0MNA"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

  const onToken = (token) => {
      setStripeToken(token)
  }

  useEffect(() =>{
      const makeRequest = async () =>{
          try {
              const res = axios.post(
                  "http://localhost:5000/api/checkout/payment",{
                      tokenId:stripeToken.id,
                      amount: 2000
                  }
                );
                console.log(res.data)
                history.push("/success")
          }catch (err) {
              console.log(err)
          }
      }
      // eslint-disable-next-line no-unused-expressions
      stripeToken && makeRequest();
  },[stripeToken, history])

  return (
    <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",        
    }}>
        {stripeToken ? (<span>Processing. Please wait...</span>) :( 

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
        )}
    </div>
  )
}

export default Pay