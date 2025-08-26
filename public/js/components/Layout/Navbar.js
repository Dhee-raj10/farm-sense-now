const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const loggedIn = StorageUtils.isLoggedIn();
        setIsLoggedIn(loggedIn);
        if (loggedIn) {
            setUser(StorageUtils.getCurrentUser());
        }
    }, []);

    const handleLogout = () => {
        StorageUtils.logout();
        setIsLoggedIn(false);
        setUser(null);
        window.location.href = '/';
    };

    return React.createElement(
        'nav',
        { className: 'navbar navbar-expand-lg navbar-light bg-white shadow-sm' },
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'a',
                { className: 'navbar-brand d-flex align-items-center', href: '/' },
                React.createElement('i', { className: 'bi bi-flower1 me-2' }),
                'Smart Farm'
            ),
            React.createElement(
                'button',
                {
                    className: 'navbar-toggler',
                    type: 'button',
                    'data-bs-toggle': 'collapse',
                    'data-bs-target': '#navbarNav'
                },
                React.createElement('span', { className: 'navbar-toggler-icon' })
            ),
            React.createElement(
                'div',
                { className: 'collapse navbar-collapse', id: 'navbarNav' },
                React.createElement(
                    'ul',
                    { className: 'navbar-nav me-auto' },
                    React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement('a', { className: 'nav-link', href: '/' }, 'Home')
                    ),
                    isLoggedIn && React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement('a', { className: 'nav-link', href: '/dashboard' }, 'Dashboard')
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'navbar-nav' },
                    !isLoggedIn ? [
                        React.createElement(
                            'li',
                            { className: 'nav-item', key: 'login' },
                            React.createElement('a', { className: 'nav-link', href: '/login' }, 'Login')
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item', key: 'signup' },
                            React.createElement(
                                'a',
                                { className: 'btn btn-farm-primary ms-2', href: '/signup' },
                                'Sign Up'
                            )
                        )
                    ] : [
                        React.createElement(
                            'li',
                            { className: 'nav-item dropdown', key: 'user' },
                            React.createElement(
                                'a',
                                {
                                    className: 'nav-link dropdown-toggle',
                                    href: '#',
                                    role: 'button',
                                    'data-bs-toggle': 'dropdown'
                                },
                                React.createElement('i', { className: 'bi bi-person-circle me-1' }),
                                user?.name || 'User'
                            ),
                            React.createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                React.createElement(
                                    'li',
                                    {},
                                    React.createElement('a', { className: 'dropdown-item', href: '/dashboard' }, 'Dashboard')
                                ),
                                React.createElement('li', {}, React.createElement('hr', { className: 'dropdown-divider' })),
                                React.createElement(
                                    'li',
                                    {},
                                    React.createElement(
                                        'button',
                                        { className: 'dropdown-item', onClick: handleLogout },
                                        'Logout'
                                    )
                                )
                            )
                        )
                    ]
                )
            )
        )
    );
};