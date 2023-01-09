import React from 'react'
import { NavContent } from './Header'

const HeaderPhone = ({menuopen, setmenuopen}) => {
  return (
    <div className={`navPhone ${menuopen ? "navPhoneComes" : "" }`}>
        <NavContent setmenuopen={setmenuopen} />
    </div>
  )
}

export default HeaderPhone