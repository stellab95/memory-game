import backCard from '../assets/img/background.png'

export default function Card({ fig, handleChoice, id, flipped, handleCounter }){
    return (
        <div>
            <div onClick={() => {
               if(!flipped) {
                    handleChoice(id); 
                    handleCounter()
                    }
                }}
            >
            {flipped ? (
                <img className="rounded-lg" src={fig} alt='carte' />
            ) : (
                <img className="back rounded-lg" src={backCard} />
            )}
            </div>
        </div>
    )
}