import React from 'react'
import Seperator from '../components/Seperator/Seperator'
import AccordionCompound from '../compounds/AccordionCompound'
import HeaderCompound from '../compounds/HeaderCompound'
import JumboCompound from '../compounds/JumboCompound'
import OptFormCompound from '../compounds/OptFormCompound'
import FooterCompound from '../compounds/FooterCompound'

/*---> Component <---*/
const HomePage = () => {
  return (
    <>
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
			<FooterCompound />
    </>
  )
}

export default HomePage
