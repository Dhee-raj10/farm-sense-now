const DashboardOverview = () => {
    const [weatherData] = React.useState([
        { name: 'Mon', temp: 22, humidity: 65 },
        { name: 'Tue', temp: 25, humidity: 60 },
        { name: 'Wed', temp: 23, humidity: 70 },
        { name: 'Thu', temp: 26, humidity: 55 },
        { name: 'Fri', temp: 24, humidity: 68 },
        { name: 'Sat', temp: 27, humidity: 52 },
        { name: 'Sun', temp: 25, humidity: 63 }
    ]);

    const StatusCard = ({ icon, title, value, status, change }) => {
        return React.createElement(
            'div',
            { className: 'col-md-3 mb-4' },
            React.createElement(
                'div',
                { className: 'card dashboard-card h-100' },
                React.createElement(
                    'div',
                    { className: 'card-body text-center' },
                    React.createElement('i', { 
                        className: `${icon} mb-3`,
                        style: { fontSize: '2.5rem', color: 'var(--farm-green)' }
                    }),
                    React.createElement('h6', { className: 'card-title text-muted' }, title),
                    React.createElement('h4', { className: 'card-text mb-2' }, value),
                    React.createElement(
                        'small',
                        { className: `text-${status === 'good' ? 'success' : status === 'warning' ? 'warning' : 'danger'}` },
                        React.createElement('i', { className: `bi bi-arrow-${change === 'up' ? 'up' : 'down'}` }),
                        ` ${status}`
                    )
                )
            )
        );
    };

    return React.createElement(
        'div',
        { className: 'container-fluid py-4' },
        React.createElement(
            'div',
            { className: 'row mb-4' },
            React.createElement(
                'div',
                { className: 'col' },
                React.createElement('h2', { className: 'text-farm-green' }, 'Dashboard Overview'),
                React.createElement('p', { className: 'text-muted' }, 'Monitor your farm\'s performance at a glance')
            )
        ),

        // Status Cards
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(StatusCard, {
                icon: 'bi bi-thermometer-half',
                title: 'Temperature',
                value: '24°C',
                status: 'good',
                change: 'up'
            }),
            React.createElement(StatusCard, {
                icon: 'bi bi-droplet',
                title: 'Soil Moisture',
                value: '68%',
                status: 'good',
                change: 'up'
            }),
            React.createElement(StatusCard, {
                icon: 'bi bi-bug',
                title: 'Pest Alerts',
                value: '2',
                status: 'warning',
                change: 'down'
            }),
            React.createElement(StatusCard, {
                icon: 'bi bi-flower1',
                title: 'Crop Health',
                value: 'Good',
                status: 'good',
                change: 'up'
            })
        ),

        // Weather Chart Section
        React.createElement(
            'div',
            { className: 'row mt-5' },
            React.createElement(
                'div',
                { className: 'col-md-8' },
                React.createElement(
                    'div',
                    { className: 'card dashboard-card' },
                    React.createElement(
                        'div',
                        { className: 'card-header bg-transparent' },
                        React.createElement('h5', { className: 'mb-0' }, 'Weekly Weather Trend')
                    ),
                    React.createElement(
                        'div',
                        { className: 'card-body' },
                        React.createElement(
                            'div',
                            { className: 'chart-placeholder text-center py-5' },
                            React.createElement('i', { 
                                className: 'bi bi-bar-chart',
                                style: { fontSize: '4rem', color: 'var(--farm-green)' }
                            }),
                            React.createElement('p', { className: 'mt-3 text-muted' }, 'Weather chart would be displayed here')
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'col-md-4' },
                React.createElement(
                    'div',
                    { className: 'card dashboard-card' },
                    React.createElement(
                        'div',
                        { className: 'card-header bg-transparent' },
                        React.createElement('h5', { className: 'mb-0' }, 'Today\'s Alerts')
                    ),
                    React.createElement(
                        'div',
                        { className: 'card-body' },
                        React.createElement(
                            'div',
                            { className: 'alert alert-warning' },
                            React.createElement('i', { className: 'bi bi-exclamation-triangle me-2' }),
                            'Irrigation needed in Field A'
                        ),
                        React.createElement(
                            'div',
                            { className: 'alert alert-info' },
                            React.createElement('i', { className: 'bi bi-info-circle me-2' }),
                            'Weather forecast: Rain expected'
                        )
                    )
                )
            )
        ),

        // Recent Activities
        React.createElement(
            'div',
            { className: 'row mt-4' },
            React.createElement(
                'div',
                { className: 'col' },
                React.createElement(
                    'div',
                    { className: 'card dashboard-card' },
                    React.createElement(
                        'div',
                        { className: 'card-header bg-transparent' },
                        React.createElement('h5', { className: 'mb-0' }, 'Recent Activities')
                    ),
                    React.createElement(
                        'div',
                        { className: 'card-body' },
                        React.createElement(
                            'div',
                            { className: 'list-group list-group-flush' },
                            React.createElement(
                                'div',
                                { className: 'list-group-item border-0 px-0' },
                                React.createElement(
                                    'div',
                                    { className: 'd-flex justify-content-between align-items-start' },
                                    React.createElement(
                                        'div',
                                        {},
                                        React.createElement('h6', { className: 'mb-1' }, 'Irrigation system activated'),
                                        React.createElement('p', { className: 'mb-1 text-muted' }, 'Field A - Zone 2'),
                                        React.createElement('small', { className: 'text-muted' }, '2 hours ago')
                                    ),
                                    React.createElement('i', { className: 'bi bi-droplet text-primary' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'list-group-item border-0 px-0' },
                                React.createElement(
                                    'div',
                                    { className: 'd-flex justify-content-between align-items-start' },
                                    React.createElement(
                                        'div',
                                        {},
                                        React.createElement('h6', { className: 'mb-1' }, 'Soil analysis completed'),
                                        React.createElement('p', { className: 'mb-1 text-muted' }, 'Field B - All zones'),
                                        React.createElement('small', { className: 'text-muted' }, '5 hours ago')
                                    ),
                                    React.createElement('i', { className: 'bi bi-check-circle text-success' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'list-group-item border-0 px-0' },
                                React.createElement(
                                    'div',
                                    { className: 'd-flex justify-content-between align-items-start' },
                                    React.createElement(
                                        'div',
                                        {},
                                        React.createElement('h6', { className: 'mb-1' }, 'Pest monitoring alert'),
                                        React.createElement('p', { className: 'mb-1 text-muted' }, 'Field C - Requires attention'),
                                        React.createElement('small', { className: 'text-muted' }, '1 day ago')
                                    ),
                                    React.createElement('i', { className: 'bi bi-bug text-warning' })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};