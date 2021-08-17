import { Doughnut } from 'react-chartjs-2';

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

    return (
        <section>
            <Doughnut data={data} />
        </section>
    );
}

export default Charts;