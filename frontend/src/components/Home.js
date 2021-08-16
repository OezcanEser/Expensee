import { useState } from "react";
import Footer from "./Footer"

const Home = () => {
    const [moneyData, setMoneyData] = useState({
        description: "description",
        date: "date",
        money: "money"
    })
    console.log(setMoneyData)
    return (<>
        <section>
            <h4>Letzte Transaktionen</h4>
            {moneyData.map(money => <ul key={money.id}>
                <li>{money}</li>
            </ul>)}
        </section>
        <Footer />
    </>);
}

export default Home;