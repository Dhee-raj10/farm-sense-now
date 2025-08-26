const { BrowserRouter, Routes, Route, Navigate } = ReactRouterDOM;

const App = () => {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

    React.useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Simple client-side routing
    const renderComponent = () => {
        switch (currentPath) {
            case '/':
                return React.createElement(Home);
            case '/login':
                return React.createElement(Login);
            case '/signup':
                return React.createElement(Signup);
            case '/dashboard':
                return React.createElement(Dashboard);
            default:
                return React.createElement(
                    'div',
                    { className: 'container text-center mt-5' },
                    React.createElement('h1', {}, '404 - Page Not Found'),
                    React.createElement('p', {}, 'The page you are looking for does not exist.'),
                    React.createElement('a', { href: '/', className: 'btn btn-farm-primary' }, 'Go Home')
                );
        }
    };

    return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(Navbar),
        React.createElement('main', {}, renderComponent()),
        React.createElement(Footer)
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));