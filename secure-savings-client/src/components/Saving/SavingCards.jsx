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
        <>
            <div className="text-center mt-20">
                <h2 className="md:text-5xl text-4xl from-black uppercase font-semibold dark:text-darkText">Credit cards</h2>
            </div>
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-10 mb-24">
                {
                    card?.map((item, index) => (
                        <SavingCard card={item} key={index} />
                    ))
                }
            </div>
        </>
    );
};

export default SavingCards;