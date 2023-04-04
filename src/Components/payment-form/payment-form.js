import "./payment-form.styles.scss"
import { CardElement } from "@stripe/react-stripe-js";
import Button from '../button/button'

const PaymentForm = () => {
    return(
        <div>
            <CardElement />
           
        </div>
    )
}

export default PaymentForm;