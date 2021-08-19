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

    const deleteTransfer = (id) => {
        axios.delete(`/input/${id}`)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        setPriceData(prev => prev.filter(el => el.id !== id))
    }
    //window.location.href = result.data.redirect
    return (<>
        <Header title="Übersicht" />
        <main>
            <section className="overview">
                <div className="overviewHead">
                    <h3>Letzte Transaktionen</h3>
                    <button onClick={() => setTerm("/balance/all")}>Show full</button>
                </div>
                <ul>
                    {priceData && priceData.map((transfer) => <li key={transfer.id}>
                        <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: transfer.category === "Einnahmen" ? "#00FF00" : "#F63535" }}></div>
                        <article>
                            <h4>{transfer.description}</h4>
                            <p>{transfer.created_at}</p>
                        </article>
                        <p className="price">{transfer.price}</p>
                        <img src="./img/delete.png" alt="delete"
                            style={{ height: "25px" }}
                            onClick={() => deleteTransfer(transfer.id)} />
                    </li>)}
                </ul>
                <button className="buttonMore" onClick={handleMore}>MEHR TRANSAKTIONEN</button>
            </section>
        </main>
        <Footer />
    </>);
}

export default Home;
