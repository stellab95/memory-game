import { useState, useEffect } from "react"
import Confetti from 'react-confetti'

import Card from "./Card"

import sushi from '../assets/img/sushi.png'
import pizza from '../assets/img/pizza.jpeg'
import hotDog from '../assets/img/hot-dog.jpeg'
import popsicle from '../assets/img/popsicle.png'
import avocado from '../assets/img/avocado.png'
import donut from '../assets/img/donut.png'
import candy from '../assets/img/candy.png'
import swissRoll from '../assets/img/swissRoll.png'
import watermelon from '../assets/img/watermelon.png'
import milk from '../assets/img/milk.png'
import noodle from '../assets/img/noodle.png'
import egg from '../assets/img/egg.jpeg'


function Board(){
    const [cards, setCards] = useState([])
    const [counter, setCounter] = useState(0)
    const [level, setLevel] = useState(4)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [showConfetti, setshowConfetti] = useState(false)

    const images = [
        { fig: pizza },
        { fig: hotDog },
        { fig: sushi },
        { fig: popsicle },
        { fig: avocado },
        { fig: donut },
        { fig: candy },
        { fig: watermelon },
        { fig: swissRoll },
        { fig: milk },
        { fig: noodle },
        { fig: egg },
    ]

    // Lance les 8 premières cartes de la parties
    useEffect(() => {
        shuffleCards()
    }, [level])

    function increaseLevel(){
       if(level < 8) {
        setLevel(prev => prev + 4)
       } else {
        alert('Tu as atteint le niveau maximum !')
       }
    }

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
        const shuffledImages = [...images].sort(() => Math.random() - 0.5)
        const selectedImages = shuffledImages.slice(0, level)

        const shuffledCards = [...selectedImages, ...selectedImages]
        .sort(() => Math.random() - 0.5)
        .map(card => ({
            ...card,
            id: Math.random(),
            flipped: false
        }))

        setCards(shuffledCards)
        setCounter(0)
        setshowConfetti(false)
        resetChoices()
        }

    function resetChoices(){
        setChoiceOne(null)
        setChoiceTwo(null)
        }
        
 return (
    <main className="flex flex-col  items-center justify-start px-4">
      <h1 className="mb-8 text-6xl font-bold">Memory Game</h1>

      <div className="flex w-full max-w-4xl items-center justify-between mb-4">
        <p className="font-bold">Nombre de coups : {counter}</p>
        <button
          className="rounded-full bg-rose-400 hover:bg-rose-500 text-white px-4 py-2"
          onClick={() => {
            setLevel(4);
          }}
        >
          Rejouer
        </button>
      </div>

      {showConfetti && <Confetti recycle={false} />}

      <div className="grid grid-cols-4 gap-4">
        {cards.map(({ fig, id, flipped }) => (
          <Card
            key={id}
            id={id}
            fig={fig}
            flipped={flipped}
            handleCounter={handleCounter}
            handleChoice={handleChoice}
          />
        ))}
      </div>

      <button
        className="rounded-full bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 mt-6"
        onClick={increaseLevel}
      >
        Ajouter des cartes
      </button>
    </main>
  );
}

export default Board