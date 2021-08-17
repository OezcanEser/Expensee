import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header";

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
            <Header/>
            <h4>Letzte Transaktionen</h4>
            <ul>
                {/* {moneyData.map(money => <li key={money.id}>
                    {money}
                </li>)} */}
                {priceData.map((price) => <li key={price.id}>{price}</li>)}
            </ul>
            <button disabled="disabled">Mehr Transaktionen</button>
        </section>
        <Footer />
    </>);
}

export default Home;