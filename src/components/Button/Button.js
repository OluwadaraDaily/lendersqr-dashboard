import './Button.scss'

function Button({ btnType = 'button', btnText, bkgColor = '#39CDCC', textColor = '#fff' }) {
  return (
    <>
      <button type={btnType} className='btn-component' style={{ backgroundColor: bkgColor, color: textColor }}>{ btnText }</button>
    </>
  )
}

export default Button