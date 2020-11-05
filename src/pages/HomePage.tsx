import React from "react"
import Seperator from "../components/Seperator/Seperator"
import AccordionCompound from "../compounds/AccordionCompound"
import HeaderCompound from "../compounds/HeaderCompound"
import JumboCompound from "../compounds/JumboCompound"
import OptFormCompound from "../compounds/OptFormCompound"

function HomePage() {
  return (
    <>
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <Seperator />
    </>
  )
}

export default HomePage
