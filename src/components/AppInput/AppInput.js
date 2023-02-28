import './AppInput.scss'

function AppInput({ label, inputType = 'text', placeholder = '' }) {
  return (
    <div className='app-input-container'>
      { label && <label>{label}</label> }
      <input className='input' type={inputType} placeholder={placeholder}/>
    </div>
  )
}

export default AppInput