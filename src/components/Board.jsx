import { useState, useEffect } from "react"
import Confetti from 'react-confetti'

import Card from "./Card"

import sushi from '../assets/img/sushi.png'
import pizza from '../assets/img/pizza.jpeg'
import hotDog from '../assets/img/hot-dog.jpeg'
import popsicle from '../assets/img/popsicle.png'


function Board(){
    const [cards, setCards] = useState([])
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [counter, setCounter] = useState(0)
    const [showConfetti, setshowConfetti] = useState(false)

    const images = [
        { fig: pizza },
        { fig: hotDog },
        { fig: sushi },
        { fig: popsicle },
    ]

    useEffect(() => {
        shuffleCards()
    }, [])

    function handleCounter(){
        setCounter(prev => prev + 1)
    }
    function handleChoice(id){
        const newCards = cards.map(card => {
            if(card.id === id){
                return {...card, flipped: true}
            } else {
                return card
            }
        })
        setCards(newCards)

        const chosenCard = newCards.find(card => card.id === id)

        if(!choiceOne){
            setChoiceOne(chosenCard)   
        } else {
            setChoiceTwo(chosenCard) 
        } 
    }
    
    useEffect (() => {
        if(choiceOne && choiceTwo){
            if(choiceOne.fig === choiceTwo.fig){

                const allFlipped = cards.every(card => card.flipped || card.id === choiceOne.id === choiceTwo.id)
                if(allFlipped){
                    setshowConfetti(true)
                }

                resetChoices()
            } else {
                setTimeout(() => {
                    const newCards = cards.map(card => {
                        if (card.id === choiceOne.id || card.id === choiceTwo.id) {
                            return {...card, flipped:false}
                        } else {
                            return card
                        }
                    })
                    setCards(newCards)
                    resetChoices()
                }, 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    function shuffleCards(){
        const shuffledCards = [...images, ...images]
        .sort(() => Math.random() - 0.5)
        .map(card => ({
            ...card,
            id: Math.random(),
            flipped: false
        }))
        setCards(shuffledCards)
        setCounter(0)
        }

    function resetChoices(){
        setChoiceOne(null)
        setChoiceTwo(null)
        }
        
    return (
        <div>
            <h1 className="my-14">Memory game</h1>
            <div className="flex items-center justify-between mb-4">
                <p>Nombre de coups : {counter}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={shuffleCards}>Rejouer</button>
            </div>
            {showConfetti && <Confetti recycle={false} />}

            <div className="grid grid-cols-4 gap-4">
                {cards.map(({fig, id, flipped})=>(
                    <Card
                    id={id}
                    key={id}
                    fig={fig}
                    flipped={flipped}
                    handleCounter={handleCounter}
                    handleChoice={handleChoice}
                    />
                ))}
            </div>    
        </div>
    )
}

export default Board