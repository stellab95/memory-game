import { useState } from "react"
import Card from "./Card"

export default function CardList(){
    const [card, setCard] = useState([])

    return (
        <div>
            {cards.map((letter, index)=>(
                <Card key={index} title={letter} />
            ))}
        </div>
    )
}