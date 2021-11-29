import { createContext } from "react"

const AccordionContext = createContext<AccordionContextInterface | null>(null)

/*---> Interfaces <---*/
interface AccordionContextInterface {
  AccordionShow: boolean | null
  setAccordionShow: (arg0: boolean) => void | null
}

export default AccordionContext
