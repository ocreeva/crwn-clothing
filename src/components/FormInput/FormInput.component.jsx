import './FormInput.styles.scss';

const FormInput = ({ labelText, ...inputProps }) => {
    return (
        <div className='form-input'>
            <input {...inputProps} />
            {labelText && (
                <label className={`${inputProps.value.length ? 'shrink' : null}`}>{labelText}</label>
            )}
        </div>
    )
}

export default FormInput;
