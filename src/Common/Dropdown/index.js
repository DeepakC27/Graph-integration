import React from 'react'
import './index.scss'

const Dropdown = ({ onChange, options, className }) => {
  return (
    <select className={className || ''} onChange={onChange}>
      {options.map((item, idx) => (
        <option key={'option-key-' + idx} value={item}>{item}</option>
      ))}
    </select>
  )
}
export default Dropdown