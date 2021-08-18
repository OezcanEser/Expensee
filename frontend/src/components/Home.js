import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header";

const Home = () => {
    const [priceData, setPriceData] = useState([{
        "id": 4,
        "category": "Sonstiges",
        "description": "Essen",
        "price": 220,
        "created_at": "2020-10-09T22:00:00.000Z",
        "user_id": 1
    },
    {
        "id": 5,
        "category": "Sonstiges",
        "description": "Saft",
        "price": 20,
        "created_at": "2020-10-09T22:00:00.000Z",
        "user_id": 1
    },
    {
        "id": 6,
        "category": "Sonstiges",
        "description": "test description",
        "price": 200,
        "created_at": "2020-10-09T22:00:00.000Z",
        "user_id": 1
    }])
    console.log(setPriceData)
    return (<>
        <Header />
        <section>
            <h4>Letzte Transaktionen</h4>
            <p>Show full</p> 
            <ul>
                {priceData.map((transfer) => <li key={transfer.id}>
                    <h4>{transfer.description}</h4>
                    <p>{transfer.created_at}</p>
                    <p>{transfer.price}</p>
                </li>)}
            </ul>
            <button disabled="disabled">Mehr Transaktionen</button>
        </section>
        <Footer />
    </>);
}

export default Home;