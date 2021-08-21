import { createContext } from "react"

interface AccordionContextInterface {
  AccordionShow: boolean | null
  setAccordionShow: (arg0: boolean) => void | null
}

const AccordionContext = createContext<AccordionContextInterface | null>(null)

export default AccordionContext

