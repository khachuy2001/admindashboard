import ReactApexChart from 'react-apexcharts';
import { Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
const MetricsComp = () => {

    const series = [50, 34, 67, 95];

    const options = {
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px",
                    },
                    value: {
                        fontSize: "16px",
                    },
                    total: {
                        show: true,
                        label: "Total",
                        formatter: function (w) {
                            return 340;
                        },
                    },
                },
            },
        },

        labels: ["Computer", "Tablet", "Laptop", "Mobile"],
        colors: ["primary", "secondar", "orange"],
    };

    return (
        <Card>
            <div className='text-center'>
                <h5>View</h5>
                <div className="d-flex justify-content-center">
                    <h3 className='m-0'>27,000</h3>
                    <div className='d-flex align-items-end px-2'>
                        <FontAwesomeIcon icon={faCaretUp} color='green' />
                        <span className='text-success'>12%</span>
                    </div>
                </div>
                <ReactApexChart
                    options={options}
                    series={series}
                    type='radialBar'
                    height="230"
                    className="apex-charts"
                />
            </div>
        </Card>
    )
}
export default MetricsComp