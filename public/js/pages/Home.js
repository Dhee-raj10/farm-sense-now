const Home = () => {
    return React.createElement(
        'div',
        { className: 'fade-in' },
        // Hero Section
        React.createElement(
            'section',
            { className: 'hero-section' },
            React.createElement(
                'div',
                { className: 'container text-center' },
                React.createElement('h1', { className: 'display-4 fw-bold mb-4' }, 'Smart Farming for the Future'),
                React.createElement(
                    'p',
                    { className: 'lead mb-4' },
                    'Harness the power of AI and IoT to optimize your agricultural operations, increase yields, and promote sustainable farming practices.'
                ),
                React.createElement(
                    'div',
                    { className: 'd-flex gap-3 justify-content-center flex-wrap' },
                    React.createElement(
                        'a',
                        { href: '/signup', className: 'btn btn-light btn-lg' },
                        'Get Started'
                    ),
                    React.createElement(
                        'a',
                        { href: '/login', className: 'btn btn-outline-light btn-lg' },
                        'Sign In'
                    )
                )
            )
        ),

        // Features Section
        React.createElement(
            'section',
            { className: 'py-5' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row text-center mb-5' },
                    React.createElement(
                        'div',
                        { className: 'col' },
                        React.createElement('h2', { className: 'text-farm-green' }, 'Why Choose Smart Farm?'),
                        React.createElement('p', { className: 'text-muted' }, 'Advanced technology meets traditional farming wisdom')
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-4 mb-4' },
                        React.createElement(
                            'div',
                            { className: 'card dashboard-card text-center h-100' },
                            React.createElement(
                                'div',
                                { className: 'card-body' },
                                React.createElement('i', { 
                                    className: 'bi bi-robot',
                                    style: { fontSize: '3rem', color: 'var(--farm-green)' }
                                }),
                                React.createElement('h4', { className: 'mt-3' }, 'AI-Powered Insights'),
                                React.createElement(
                                    'p',
                                    { className: 'text-muted' },
                                    'Get intelligent recommendations for crop management, pest control, and yield optimization based on real-time data analysis.'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-4 mb-4' },
                        React.createElement(
                            'div',
                            { className: 'card dashboard-card text-center h-100' },
                            React.createElement(
                                'div',
                                { className: 'card-body' },
                                React.createElement('i', { 
                                    className: 'bi bi-cloud-rain',
                                    style: { fontSize: '3rem', color: 'var(--farm-sky)' }
                                }),
                                React.createElement('h4', { className: 'mt-3' }, 'Weather Monitoring'),
                                React.createElement(
                                    'p',
                                    { className: 'text-muted' },
                                    'Access real-time weather data and forecasts to make informed decisions about irrigation, planting, and harvesting.'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-4 mb-4' },
                        React.createElement(
                            'div',
                            { className: 'card dashboard-card text-center h-100' },
                            React.createElement(
                                'div',
                                { className: 'card-body' },
                                React.createElement('i', { 
                                    className: 'bi bi-graph-up',
                                    style: { fontSize: '3rem', color: 'var(--farm-soil)' }
                                }),
                                React.createElement('h4', { className: 'mt-3' }, 'Yield Optimization'),
                                React.createElement(
                                    'p',
                                    { className: 'text-muted' },
                                    'Maximize your harvest with data-driven insights on soil health, nutrient levels, and optimal growing conditions.'
                                )
                            )
                        )
                    )
                )
            )
        ),

        // Stats Section
        React.createElement(
            'section',
            { className: 'py-5 bg-light' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row text-center' },
                    React.createElement(
                        'div',
                        { className: 'col-md-3 mb-4' },
                        React.createElement('h2', { className: 'text-farm-green fw-bold' }, '1000+'),
                        React.createElement('p', { className: 'text-muted' }, 'Active Farms')
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-3 mb-4' },
                        React.createElement('h2', { className: 'text-farm-green fw-bold' }, '25%'),
                        React.createElement('p', { className: 'text-muted' }, 'Yield Increase')
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-3 mb-4' },
                        React.createElement('h2', { className: 'text-farm-green fw-bold' }, '30%'),
                        React.createElement('p', { className: 'text-muted' }, 'Water Savings')
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-3 mb-4' },
                        React.createElement('h2', { className: 'text-farm-green fw-bold' }, '24/7'),
                        React.createElement('p', { className: 'text-muted' }, 'Monitoring')
                    )
                )
            )
        )
    );
};