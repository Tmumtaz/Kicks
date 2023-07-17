import "./payment-form.styles.scss"
import { CardElement } from "@stripe/react-stripe-js"
import Button, {BUTTON_TYPE_CLASSES} from '../button/button'

const PaymentForm = () => {
    return(
        <div className="stripe-card-container" >
            <div className="card-form">
            <h2>Credit Card Payment</h2>
            <CardElement />
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
            </div>
        </div>
    )
}

export default PaymentForm;