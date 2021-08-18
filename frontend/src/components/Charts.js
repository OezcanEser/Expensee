import { Doughnut } from 'react-chartjs-2';
import Footer from "./Footer"
import Header from "./Header";

const Charts = () => {
    const data = {
        datasets: [{
            data: [12, 19, 3, 5],
            backgroundColor: [
                "rgba(246, 53, 53, 1)",
                "rgba(81, 95, 235, 1)",
                "rgba(247, 199, 53, 1)",
                "rgba(149, 152, 154, 1)",
            ],
            borderWidth: 0,
            label: "Was ist das?",
        }],
        labels: ["Einkommen", "Ausgaben", "Sparen", "Sonstiges"],
    }

    //  / get > response {  user: req.user, success: true, endOfLength, data: rows -> Array,}
    // /summary get > response {data: obj,}

    //     "data": {
    //         "einkommen": {
    //             "costenSummary": 400,
    //             "showCosten": [
    //                 {
    //                     "description": "Sonstiges test2",
    //                     "price": 200
    //                 },
    //                 {
    //                     "description": "einnahmen test2",
    //                     "price": 200
    //                 }
    //             ]
    //         },
    //         "ausgaben": {
    //             "costenSummary": -400,
    //             "showCosten": [
    //                 {
    //                     "description": "ausgaben test1",
    //                     "price": -200
    //                 },
    //                 {
    //                     "description": "ausgaben test2",
    //                     "price": -200
    //                 }
    //             ]
    //         },
    //         "sparen": -400,
    //         "sonstiges": {
    //             "costenSummary": -400,
    //             "showCosten": [
    //                 {
    //                     "description": "Sonstiges test1",
    //                     "price": -200
    //                 },
    //                 {
    //                     "description": "Sonstiges test2",
    //                     "price": -200
    //                 }
    //             ]
    //         }
    //     }
    // }


    return (
        <section>
            <Header title="Statistik"/>
            <Doughnut data={data} />
            <Footer />
        </section>
    );
}

export default Charts;