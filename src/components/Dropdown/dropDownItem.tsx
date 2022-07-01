import { dropDownValues } from "../../myDataFile"
import "../../styles.scss";
import { useState } from "react"


export const DropDownItem = ({
    id,
    value,
    values,
    setValues,
} : {
    readonly id: number
    readonly value: string
    readonly values: dropDownValues[]
    readonly setValues: (value: dropDownValues[]) => void
}
) => {
    const [selected, setSelectedState] = useState(true);

    return <>
        <div 
        className={`value${selected ? "" : "Selected"}`}
            onClick={() => {
                setSelectedState(!selected)
                const exists = values.find((item) => item.id === id)
                setValues(exists ? values.filter(item => item.id === id) : [
                    ...values,
                    {
                        id,
                        value
                    }
                ])
            }}
            id={id.toString()}        
        >
            {value}
        </div>
    </>
}
