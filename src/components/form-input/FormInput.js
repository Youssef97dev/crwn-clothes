import './FormInput.styles.scss';

const FormInput = ({label, ...otherPropes}) => {
  return (
    <div className="group">
        <input className="form-input" {...otherPropes} />
        {label && (<label className={`${otherPropes.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
    </div>
  )
}

export default FormInput