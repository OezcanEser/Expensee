import { useEffect, useState } from "react";
import axios from "axios"
import Footer from "./Footer"
import Header from "./Header";

const Home = () => {
    const [priceData, setPriceData] = useState()
    const [showMore, setShowMore] = useState(0)
    const [term, setTerm] = useState("/balance")


    useEffect(() => {
        axios.get(term)
            .then(result => { setPriceData(result.data.data) })
            .catch(err => console.log(err))
    }, [term])

    const handleMore = () => {
        setShowMore(prev => prev + 7)
    }

    // const deleteTransfer = () => {
    //     axios.delete(`/input/${id}`)
    //         .then(result => window.location.href = result.data.redirect)
    //         .catch(err => console.log(err))
    // }

    return (<>
        <Header />
        <main>
            <section>
                <h4>Letzte Transaktionen</h4>
                <button onClick={() => setTerm("/balance/all")}>Show full</button>
                <ul>
                    {priceData && priceData.map((transfer) =>
                        <li key={transfer.id}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: transfer.category === "Einnahmen" ? "green" : "red" }}></div>
                            <h4>{transfer.description}</h4>
                            <p>{transfer.created_at}</p>
                            <p>{transfer.price}</p>
                        </li>)}
                </ul>
                <button onClick={handleMore}>Mehr Transaktionen</button>
            </section>
        </main>
        <Footer />
    </>);
}

export default Home;
