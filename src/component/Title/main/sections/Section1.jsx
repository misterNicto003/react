import React from 'react'
import bgImg from "../../../../assets/bg.png"
import sloyImg from "../../../../assets/Слой 2 1 (1).png"
import features_4Img from "../../../../assets/features_4.png"
import features_3Img from "../../../../assets/features_3.png"

const Section1 = () => {
  return (
    <section className='section1'>
        <div className='section1-card'>
            <img src={bgImg} alt="" />
            <h2>20 гектаров</h2>
            <p>территории ЖК — это как полтора Зарядья</p>

        </div>
        <div className='section1-card'>
            <img src={sloyImg} alt="" />
            <h2>15 корпусов</h2>
            <p>по 12-14 этажей, просторная застройка</p>

        </div>
        <div className='section1-card'>
            <img src={features_4Img} alt="" />
            <h2>7 гектаров</h2>
            <p>приватного парка для жителей ЖК</p>

        </div>
        <div className='section1-card'>
            <img src={features_3Img} alt="" />
            <h2>2 километра</h2>
            <p>набережной реки Раменка вдоль ЖК</p>

        </div>
    </section>
  )
}

export default Section1