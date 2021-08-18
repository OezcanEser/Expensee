import { Pie, defaults } from 'react-chartjs-2'
import Footer from "./Footer"
import Header from "./Header"

defaults.plugins.tooltip.enabled = false
defaults.plugins.legend.position = "bottom"

const Charts = () => {
    const setPie = {
        labels: ["Einnahmen", "Ausgaben", "Sparen", "Sonstiges"],
        datasets: [{
            label: "# of votes",
            data: [12, 19, 3, 5],
            backgroundColor: [
                "rgba(246, 53, 53, 1)",
                "rgba(81, 95, 235, 1)",
                "rgba(247, 199, 53, 1)",
                "rgba(149, 152, 154, 1)",
            ],
            borderWidth: 0,
        }, {
            labels: ["Total"],
            label: "Total",
            data: [3450],
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "10px 10px 10px rgba(000,000,000)"
        }],
        options: {
            legend: {
                labels: {
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: "18"
                }
            }
        }
    }

    return (<>
        <Header />
        <main>
            <section>
                <Pie data={setPie} />
            </section>
        </main>
        <Footer />
    </>
    );
}

export default Charts;