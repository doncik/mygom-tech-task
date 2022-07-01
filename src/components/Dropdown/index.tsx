import { useEffect, useState } from "react"
import { dropDownValues } from "../../myDataFile"
import { DropDownItem } from "./dropDownItem"
import "../../styles.scss";


export const Dropdown = ({
    onSelect,
    localValues,
    values,
    setValues
} : {
    readonly onSelect?: (text: string) => void
    readonly localValues: dropDownValues[]
    readonly values: dropDownValues[]
    readonly setValues: (values: dropDownValues[]) => void
}) => {
    const [ dropDownOpen, setDropDownOpen ] = useState(false)

    useEffect(() => {
        if(onSelect) {
            onSelect('labas')
        }

    }, [onSelect, values])

    return <>
        <div>
            <div 
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="App"
            >
                Aš noriu...
            </div>
            
            <div style={{
                display: dropDownOpen ? 'initial' : 'none'
            }}>
                <div className="dropdown">
                {values.map((item) => <DropDownItem
                    values={values}
                    key={item.id}
                    id={item.id}
                    setValues={setValues}
                    value={item.value}
                />)}
            </div>
            </div>
        </div>
    </>
}
