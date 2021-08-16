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
            <ul>
                {moneyData.map(money => <li key={money.id}>
                    {money}
                </li>)}
            </ul>
        </section>
        <Footer />
    </>);
}

export default Home;