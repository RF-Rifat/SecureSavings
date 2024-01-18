import { useEffect, useState } from "react";
import SavingCard from "./SavingCard";

const SavingCards = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('savingData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [setCard])

    return (
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-10 mb-24">
            {
                card?.map((item, index) => (
                    <SavingCard card={item} key={index} />
                ))
            }
        </div>
    );
};

export default SavingCards;