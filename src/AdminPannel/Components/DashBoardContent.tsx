import "../adminCss/Dashboard.css"

export function DashBoardComponent() {
    return (
        <div className="dashboard-content">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <p>Welcome back! Here's what's happening today.</p>
            </div>

            <div className="stats-grid">
                {/* Stat Card 1 */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(52, 152, 219, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="#3498db">
                            <path
                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"/>
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

                {/* Stat Card 2 */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(46, 204, 113, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="#2ecc71">
                            <path
                                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
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

                {/* Stat Card 3 */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(155, 89, 182, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="#9b59b6">
                            <path
                                d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
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

                {/* Stat Card 4 */}
                <div className="stat-card">
                    <div className="stat-icon" style={{backgroundColor: 'rgba(231, 76, 60, 0.1)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="#e74c3c">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
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
                        <select className="chart-period">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Last 90 Days</option>
                        </select>
                    </div>
                    <div className="chart-placeholder"></div>
                </div>

                <div className="chart-container">
                    <div className="chart-header">
                        <h3>Revenue Overview</h3>
                        <select className="chart-period">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Last 90 Days</option>
                        </select>
                    </div>
                    <div className="chart-placeholder"></div>
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