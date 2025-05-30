import { createRoot } from "react-dom/client"
import Meals from "./15Calculos"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(<Meals text="Welcome to the Props" snack="popcorn" main="sausage" nice={true} guns={false} value={100} product="cocacola" nameGuns={["M4A1", "H416", "MK14", "QBZ-95", "M110", "FAL", "MDR", "F2000", "AR57", "RPK16", "AUG", "ACE"]} />)
