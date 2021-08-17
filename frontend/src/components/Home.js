import { useState } from "react";
import Footer from "./Footer"

const Home = () => {
    const [priceData, setPriceData] = useState({
        description: "description",
        date: "date",
        time: "time",
        price: "price"
    })
    console.log(setPriceData)
    return (<>
        <section>
            <h4>Letzte Transaktionen</h4>
            <ul>
                {priceData.map((price) => <li key={price.id}>{price}</li>)}
            </ul>
            <button disabled="disabled">Mehr Transaktionen</button>
        </section>
        <Footer />
    </>);
}

export default Home;