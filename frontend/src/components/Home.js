import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header";

const Home = () => {
    const [moneyData, setMoneyData] = useState({
        description: "description",
        date: "date",
        money: "money"
    })
    console.log(setMoneyData)
    return (<>
        <section>
            <Header/>
            <h4>Letzte Transaktionen</h4>
            <ul>
                {/* {moneyData.map(money => <li key={money.id}>
                    {money}
                </li>)} */}
            </ul>
        </section>
        <Footer />
    </>);
}

export default Home;