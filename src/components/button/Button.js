/* Default - Inverted - Google Sign in Button */

import './Button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherPropes}) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherPropes}>
        {children}
    </button>
  )
}

export default Button