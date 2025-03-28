import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import "../adminCss/Dashboard.css";

// Register Chart.js components
Chart.register(...registerables);

export function DashBoardComponent() {
    // Refs for chart canvases
    const bookingChartRef = useRef<HTMLCanvasElement>(null);
    const revenueChartRef = useRef<HTMLCanvasElement>(null);
    // Refs to store chart instances
    const bookingChartInstance = useRef<Chart | null>(null);
    const revenueChartInstance = useRef<Chart | null>(null);

    // State for time period selection
    const [timePeriod, setTimePeriod] = useState<'7days' | '30days' | '90days'>('7days');

    // Dummy data for charts
    const bookingData = {
        '7days': {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [45, 60, 75, 50, 80, 110, 90]
        },
        '30days': {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            data: [320, 400, 380, 450]
        },
        '90days': {
            labels: ['Month 1', 'Month 2', 'Month 3'],
            data: [1200, 1500, 1800]
        }
    };

    const revenueData = {
        '7days': {
            labels: ['First Class', 'Second Class', 'Economy'],
            data: [4500, 6800, 1200]
        },
        '30days': {
            labels: ['First Class', 'Second Class', 'Economy'],
            data: [18000, 25000, 5000]
        },
        '90days': {
            labels: ['First Class', 'Second Class', 'Economy'],
            data: [55000, 75000, 15000]
        }
    };

    // Initialize charts
    useEffect(() => {
        // Destroy previous chart instances if they exist
        if (bookingChartInstance.current) {
            bookingChartInstance.current.destroy();
        }
        if (revenueChartInstance.current) {
            revenueChartInstance.current.destroy();
        }

        // Booking Trends Chart
        if (bookingChartRef.current) {
            const ctx = bookingChartRef.current.getContext('2d');
            if (ctx) {
                bookingChartInstance.current = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: bookingData[timePeriod].labels,
                        datasets: [{
                            label: 'Bookings',
                            data: bookingData[timePeriod].data,
                            backgroundColor: 'rgba(52, 152, 219, 0.2)',
                            borderColor: 'rgba(52, 152, 219, 1)',
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    label: (context) => `${context.dataset.label}: ${context.raw} bookings`
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Number of Bookings'
                                }
                            }
                        }
                    }
                });
            }
        }

        // Revenue Overview Chart
        if (revenueChartRef.current) {
            const ctx = revenueChartRef.current.getContext('2d');
            if (ctx) {

                revenueChartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: revenueData[timePeriod].labels,
                        datasets: [{
                            label: 'Revenue',
                            data: revenueData[timePeriod].data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.7)',
                                'rgba(54, 162, 235, 0.7)',
                                'rgba(255, 206, 86, 0.7)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                callbacks: {
                                    // @ts-ignore
                                    label: (context) => `$${context.raw.toLocaleString()}`
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    callback: (value) => `$${value.toLocaleString()}`
                                }
                            }
                        }
                    }
                });
            }
        }

        // Cleanup function to destroy charts when component unmounts
        return () => {
            if (bookingChartInstance.current) {
                bookingChartInstance.current.destroy();
            }
            if (revenueChartInstance.current) {
                revenueChartInstance.current.destroy();
            }
        };
    }, [timePeriod]);

    const handleTimePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTimePeriod(e.target.value as '7days' | '30days' | '90days');
    };

    return (
        <div className="dashboard-content">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <p>Welcome back! Here's what's happening today.</p>
            </div>

            <div className="stats-grid">
                {/* Stat Card 1 - Total Bookings */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(52, 152, 219, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3498db">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>1,254</h3>
                        <p>Total Bookings</p>
                    </div>
                    <div className="stat-trend up">
                        <span>+12%</span>
                    </div>
                </div>

                {/* Stat Card 2 - Active Trains */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(46, 204, 113, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2ecc71">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>32</h3>
                        <p>Active Trains</p>
                    </div>
                    <div className="stat-trend up">
                        <span>+5%</span>
                    </div>
                </div>

                {/* Stat Card 3 - Scheduled Trips */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(155, 89, 182, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9b59b6">
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>84</h3>
                        <p>Scheduled Trips</p>
                    </div>
                    <div className="stat-trend down">
                        <span>-3%</span>
                    </div>
                </div>

                {/* Stat Card 4 - Total Revenue */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(231, 76, 60, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e74c3c">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>$12,540</h3>
                        <p>Total Revenue</p>
                    </div>
                    <div className="stat-trend up">
                        <span>+18%</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-charts">
                <div className="chart-container">
                    <div className="chart-header">
                        <h3>Booking Trends</h3>
                        <select
                            className="chart-period"
                            value={timePeriod}
                            onChange={handleTimePeriodChange}
                        >
                            <option value="7days">Last 7 Days</option>
                            <option value="30days">Last 30 Days</option>
                            <option value="90days">Last 90 Days</option>
                        </select>
                    </div>
                    <div className="chart-placeholder">
                        <canvas ref={bookingChartRef}></canvas>
                    </div>
                </div>

                <div className="chart-container">
                    <div className="chart-header">
                        <h3>Revenue Overview</h3>
                        <select
                            className="chart-period"
                            value={timePeriod}
                            onChange={handleTimePeriodChange}
                        >
                            <option value="7days">Last 7 Days</option>
                            <option value="30days">Last 30 Days</option>
                            <option value="90days">Last 90 Days</option>
                        </select>
                    </div>
                    <div className="chart-placeholder">
                        <canvas ref={revenueChartRef}></canvas>
                    </div>
                </div>
            </div>

            <div className="recent-activity">
                <h3>Recent Bookings</h3>
                <div className="activity-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Passenger</th>
                            <th>Route</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <tr key={item}>
                                <td>#B{(10000 + item).toString().slice(1)}</td>
                                <td>Passenger {item}</td>
                                <td>Colombo → Kandy</td>
                                <td>2023-06-{10 + item}</td>
                                <td><span className="status confirmed">Confirmed</span></td>
                                <td>${(1500 + item * 200).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}