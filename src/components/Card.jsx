import backCard from '../assets/img/backCard.png'

export default function Card({ fig, handleChoice, id, flipped, handleCounter }) {
  return (
    <div className="flip-card w-32 h-32 cursor-pointer" onClick={() => {
      if (!flipped) {
        handleChoice(id)
        handleCounter()
      }
    }}>
      <div className={`flip-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flip-front">
          <img className="w-full h-full object-cover rounded-lg" src={backCard} alt="back" />
        </div>
        <div className="flip-back">
          <img className="w-full h-full object-cover rounded-lg" src={fig} alt="front" />
        </div>
      </div>
    </div>
  )
}
