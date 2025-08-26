const Login = () => {
    const handleLogin = (user) => {
        // Redirect to dashboard after successful login
        window.location.href = '/dashboard';
    };

    return React.createElement(
        'div',
        { className: 'container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light' },
        React.createElement(
            'div',
            { className: 'row w-100' },
            React.createElement(
                'div',
                { className: 'col-12' },
                React.createElement(LoginForm, { onLogin: handleLogin })
            )
        )
    );
};