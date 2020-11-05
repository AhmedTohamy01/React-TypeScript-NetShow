import React from "react"
import AccordionCompound from '../compounds/AccordionCompound'
import HeaderCompound from "../compounds/HeaderCompound"
import OptFormCompound from '../compounds/OptFormCompound'


function HomePage() {
  return (
    <>
			<HeaderCompound>
				<OptFormCompound />
			</HeaderCompound>
			<AccordionCompound />
    </>
  )
}

export default HomePage
