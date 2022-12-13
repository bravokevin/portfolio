import React, { useState } from 'react'
import { workFilters, data } from './Data'
import WorksItems from './WorksItems'

const Works = () => {

    const [items, setItems] = useState(data);

    const filterItem = (category: string) => {
        if (category === "Everything") {
            setItems(data)
        }
        else {
            const updatedItem = data.filter((e) => {
                return e.category === category;
            })
            setItems(updatedItem);
        }
    }
    return (
        <>
            <div className="work__filters">
                {workFilters.map(({ name, index }) => {
                    return <span className="work__item" key={index} onClick={() => {
                        filterItem(name)
                    }}>{name}</span>
                })}
            </div>

            <div className="work__container container grid">
                {data.map((item) => {
                    return <WorksItems item={item} key={item.id} />
                })}
            </div>
        </>
    )
}

export default Works