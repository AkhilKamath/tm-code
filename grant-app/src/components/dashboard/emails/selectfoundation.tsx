import { Foundation } from '@/models/foundations'
import React from 'react'

interface Props {
    foundations: Foundation[]
}
const SelectFoundation = ({foundations}: Props) => {
  return (
    <div>
        <label htmlFor="dropdown" className="block mb-2">
                    Select a foundation
        </label>
        <select id="dropdown" className='w-full p-2.5' name='foundation_email'>
            {
                foundations.map(foundation => (
                    <option key={foundation._id.toString()} className='w-full bg-white p-2.5' value={foundation.email}>{foundation.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectFoundation