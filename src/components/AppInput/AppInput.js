import './AppInput.scss'

function AppInput({ label, inputType = 'text', placeholder = '', readOnly = false, value = '' }) {
  return (
    <div className='app-input-container'>
      { label && <label>{label}</label> }
      <input className='input' type={inputType} placeholder={placeholder} value={value} readOnly={readOnly} />
    </div>
  )
}

export default AppInput