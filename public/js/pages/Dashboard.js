const Dashboard = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const currentUser = StorageUtils.getCurrentUser();
        if (!currentUser) {
            window.location.href = '/login';
            return;
        }
        setUser(currentUser);
    }, []);

    if (!user) {
        return React.createElement(
            'div',
            { className: 'container-fluid d-flex align-items-center justify-content-center min-vh-100' },
            React.createElement(
                'div',
                { className: 'text-center' },
                React.createElement(
                    'div',
                    { className: 'spinner-border text-primary', role: 'status' },
                    React.createElement('span', { className: 'visually-hidden' }, 'Loading...')
                ),
                React.createElement('p', { className: 'mt-3' }, 'Loading dashboard...')
            )
        );
    }

    return React.createElement(
        'div',
        { className: 'min-vh-100 bg-light' },
        React.createElement(DashboardOverview)
    );
};