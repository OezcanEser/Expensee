import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios"
import Footer from "./Footer"
import Header from "./Header";

const Home = () => {
    // let { id } = useParams()
    // const [priceData, setPriceData] = useState()

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/balance")
            .then(result => { console.log(result) })
            .catch(err => console.log(err))
    }, [])

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
                <p>Show full</p>
                <ul>
                    {/* {priceData.map((transfer) => <li key={transfer.id}>
                    <h4>{transfer.description}</h4>
                    <p>{transfer.created_at}</p>
                    <p>{transfer.price}</p>
                </li>)} */}
                </ul>
                <button disabled="disabled">Mehr Transaktionen</button>
            </section>
        </main>
        <Footer />
    </>);
}

export default Home;