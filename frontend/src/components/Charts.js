import { Pie } from 'react-chartjs-2'
import Footer from "./Footer"
import Header from "./Header"

const Charts = () => {
    const setPie = {
        labels: ["Einnahmen", "Ausgaben", "Sparen", "Sonstiges"],
        datasets: [{
            label: "# of votes",
            // data: [{ id: "Einnhamen", nested: { value: 50 } }, { id: "Ausgaben", nested: { value: 50 } }, { id: "Sparen", nested: { value: 50 } }, { id: "Sonstiges", nested: { value: 50 } }],
            data: [25, 30, 10, 23],
            backgroundColor: [
                "rgba(246, 53, 53, 1)",
                "rgba(81, 95, 235, 1)",
                "rgba(247, 199, 53, 1)",
                "rgba(149, 152, 154, 1)",
            ],
            borderWidth: 0,
        }, {
            label: "Total",
            data: [3450],
            backgroundColor: "rgba(255, 255, 255, 1)"
        }]
    }

    return (<>
        <Header />
        <main>
            <section>
                <Pie
                    data={setPie}
                    width={550}
                    height={550}
                    options={{
                        plugins: {
                            tooltip: {
                                enabled: false
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    color: "#ffffff",
                                    usePointStyle: true,
                                }
                            }
                        }
                    }
                    } />
            </section>
        </main>
        <Footer />
    </>
    );
}

export default Charts;