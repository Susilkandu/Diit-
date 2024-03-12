import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const StudentChart = (props) => {
    // console.log(props)
    const [barChart, setBarChart] = useState(null);
    const [pieChart, setPieChart] = useState(null);

    useEffect(() => {
        const Total = Array.isArray(props.std) ? props.std.length : 0;

        // Create or update the bar chart
        const createOrUpdateBarChart = () => {
            const barCtx = document.getElementById('barChart').getContext('2d');
            if (barChart) {
                barChart.destroy();
            }
            const barChartData = {
                labels: ['Enroll Student', 'New Student', 'New Enquiry', 'Drop Outs'],
                datasets: [{
                    label: 'Students Details',
                    data: [Total, Total, props.Tcourse, 1],
                    backgroundColor: [
                        '#00bbf0',
                        '#38598b',
                        '#FFC300',
                        '#f96d00'
                    ],
                }]
            };
            const newBarChart = new Chart(barCtx, {
                type: 'bar',
                data: barChartData,
            });
            setBarChart(newBarChart);
        };

        // Create or update the pie chart
        const createOrUpdatePieChart = () => {
            const pieCtx = document.getElementById('pieChart').getContext('2d');
            if (pieChart) {
                pieChart.destroy();
            }
            const pieChartData = {
                labels: ['Total Course', 'New Student', 'Drop Outs', 'Enroll Student'],
                datasets: [{
                    label: 'Updated Database',
                    data: [props.Tcourse, 5, 3, props.Tcourse], // Corrected this line
                    backgroundColor: [
                        '#00bbf0',
                        '#38598b',
                        '#f96d00',
                        '#FFC300'
                    ],
                }]
            };
            const newPieChart = new Chart(pieCtx, {
                type: 'pie',
                data: pieChartData,
            });
            setPieChart(newPieChart);
        };

        createOrUpdateBarChart();
        createOrUpdatePieChart();

        // Cleanup function
        return () => {
            if (barChart) {
                barChart.destroy();
            }
            if (pieChart) {
                pieChart.destroy();
            }
        };
    }, [props.std, props.Tcourse]);

    return (
        <div className="m-auto">
            <div className="mx-0 px-0">
                <div className="row mb-5 mx-0 mb-2 pb-4 d-flex justify-content-center">
                    {/* Bar Chart */}
                    <div className="col-xl-4 col-xxl-3 col-sm-6 my-1">
                        <div className="widget-stat myshadow2 border-0 card">
                            <div className="card-body">
                                <canvas id="barChart" width="300" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                    {/* Pie Chart */}
                    <div className="col-xl-4 col-xxl-3 col-sm-6 my-1">
                        <div className="widget-stat myshadow2 border-0 card">
                            <div className="card-body">
                                <canvas id="pieChart" width="300" height="300"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-xxl-3 col-sm-6 my-1">
                        <div className="card myshadow border-0" id="NotishBoard">
                            <div className="card-header h4 text-white text-start" style={{ background: "var(--cardHeadColor )" }}>
                                <div data-aos="fade-right">  <i className="fa fa-comments text-warning" aria-hidden="true"></i> NEW MESSAGE</div>
                            </div>
                            <div className="card-body fw-normal FeatureCard2 my-0 py-0">
                                <marquee direction="up" scrollamount="3" behavior="scroll">
                                    <small>[1].
                                        Course certified by Microsoft.
                                        <img src="images/icon/gifPic.gif" className="img-fluid" width="40px" />
                                    </small>
                                    <hr width="90%" /> <small>[2]. CCC free on  ADCA course</small>
                                    <img src="images/icon/gifPic.gif" className="img-fluid" width="40px" />
                                    <hr width="90%" /> <small>[5]. Free English Speaking & Personality Development classNames</small>
                                    <img src="images/icon/gifPic.gif" className="img-fluid" width="40px" />
                                    <hr width="90%" /> <small className="HindiFont">[6]. प्रत्येक पाठ्यक्रम के पूरा होने पर नि: शुल्क
                                        प्रमाण
                                        पत्र। </small>
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChart;
