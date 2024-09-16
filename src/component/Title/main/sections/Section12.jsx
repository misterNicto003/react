import React from 'react'
import Title from "../../Title/Title";

import logos from "../../../../assets/section12/logos.svg"


const Section12 = () => {
  return (
    <div className='container'>
      <div className="section12">

        <Title className="section12-title">Самые выгодные условия кредитования от 20 банков</Title>

        <div className='section12-pictery'>
          <img src={logos} alt="" />
       
        </div>




      </div>
    </div>
  )
}

export default Section12