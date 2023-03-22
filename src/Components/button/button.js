import './button.styles.scss'

const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


const Button = ({children, buttonType}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`}>
            {children}
        </button>
    )
}

export default Button