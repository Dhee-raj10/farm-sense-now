const Signup = () => {
    const handleSignup = (user) => {
        // Redirect to dashboard after successful signup
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
                React.createElement(SignupForm, { onSignup: handleSignup })
            )
        )
    );
};