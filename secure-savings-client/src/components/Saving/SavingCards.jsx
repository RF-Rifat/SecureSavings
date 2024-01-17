import { useState } from "react";
import SavingCard from "./SavingCard";

const SavingCards = () => {
    const [card, setCard] = useState(6);

    return (
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 my-10">
            {[...Array(card)].map((_, index) => (
                <SavingCard key={index} />
            ))}
        </div>
    );
};

export default SavingCards;