import Client from './Client';
import { useEffect, useState } from 'react';

const Clients = () => {
    const [ClientData, setClientData] = useState([])

    useEffect(() => {
        fetch("clientsData.json")
            .then(res => res.json())
            .then(data => setClientData(data))
    }, [])

    return (
        <>
            <section>
                <div className="container mx-auto px-4 mt-24 mb-28">
                    <div className="flex flex-wrap justify-center text-center">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                According to the National Oceanic and Atmospheric
                                Administration, Ted, Scambos, NSIDClead scentist, puts the
                                potentially record maximum.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            ClientData?.map((item, index) => (
                                <Client key={index} client={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Clients;