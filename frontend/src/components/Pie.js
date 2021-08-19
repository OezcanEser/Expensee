import { Pie } from 'react-Piejs-2'
import { useEffect, useState } from 'react';
import axios from 'axios'
const Pie = () => {
    const [totalCosts, setTotalCosts] = useState(null);

    const setPie = {
        labels: ["Einnahmen", "Ausgaben", "Sparen", "Sonstiges"],
        datasets: [{
            label: "# of votes",
            data: pieces(),
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

    useEffect(() => {
        async function getTotalCosts() {
            let { data } = await axios.get('/balance/summary');
            setTotalCosts(data.data);
            console.log(totalCosts);
        }
        getTotalCosts();
    }, []);

    function pieces() {
        if (totalCosts) {
            return Object.keys(totalCosts).map(element => {
                return totalCosts[element].costenSummary
                    ? Math.abs(totalCosts[element].costenSummary)
                    : Math.abs(totalCosts[element])
            })
        }
    }
    console.log(pieces())

    return (<Pie
        data={setPie}
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
        }}
    />);
}

export default Pie;