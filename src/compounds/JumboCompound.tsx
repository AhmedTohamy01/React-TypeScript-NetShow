import React from 'react'
import JumboWrapper from '../components/Jumbotron/JumboWrapper'
import JumboItem from '../components/Jumbotron/JumboItem'
import JumboTextWrapper from '../components/Jumbotron/JumpoTextWrapper'
import JumboTitle from '../components/Jumbotron/JumboTitle'
import JumboSubTitle from '../components/Jumbotron/JumboSubTitle'
import JumboImageWrapper from '../components/Jumbotron/JumboImageWrapper'
import JumboImage from '../components/Jumbotron/JumboImage'
import JumboData from '../data/jumbo.json'
import Seperator from '../components/Seperator/Seperator'

/*---> Component <---*/
const JumboCompound = () => {
  return (
    <>
      <JumboWrapper>
        {JumboData.map((item) => (
          <div key={item.id}>
            <JumboItem>
              <JumboTextWrapper>
                <JumboTitle>{item.title}</JumboTitle>
                <JumboSubTitle>{item.subTitle}</JumboSubTitle>
              </JumboTextWrapper>
              <JumboImageWrapper>
                <JumboImage src={item.image} alt={item.alt} />
              </JumboImageWrapper>
            </JumboItem>
            <Seperator />
          </div>
        ))}
      </JumboWrapper>
    </>
  )
}

export default JumboCompound
