import { Doughnut } from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import axios from 'axios'
const PieChart = () => {
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
        }],
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


    const chartSparen = new Number();
    chartSparen.src = totalCosts ? totalCosts.sparen : null

    const test = {
        beforeDraw: (chart) => {
            if (chartSparen.complete) {
                const ctx = chart.ctx;
                const { top, left, width, height } = chart.chartArea;
                const x = left + width / 2 - chartSparen.width / 2;
                const y = top + height / 2 - chartSparen.height / 2;
                ctx.drawChart(chartSparen, x, y);
            } else {
                chartSparen.onload = () => chart.draw();
            }
        }
    }
    return (<>
        <Doughnut
            data={setPie}
            options={{
                plugins: [test],
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
        /></>);
}

export default PieChart;