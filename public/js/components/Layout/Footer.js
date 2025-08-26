const Footer = () => {
    return React.createElement(
        'footer',
        { className: 'bg-dark text-light py-4 mt-5' },
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-6' },
                    React.createElement(
                        'div',
                        { className: 'd-flex align-items-center mb-3' },
                        React.createElement('i', { className: 'bi bi-flower1 me-2' }),
                        React.createElement('h5', { className: 'mb-0' }, 'Smart Farm')
                    ),
                    React.createElement(
                        'p',
                        { className: 'text-muted' },
                        'Empowering farmers with AI-driven insights for sustainable agriculture.'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-md-6' },
                    React.createElement('h6', { className: 'mb-3' }, 'Quick Links'),
                    React.createElement(
                        'ul',
                        { className: 'list-unstyled' },
                        React.createElement(
                            'li',
                            {},
                            React.createElement('a', { href: '/', className: 'text-light text-decoration-none' }, 'Home')
                        ),
                        React.createElement(
                            'li',
                            {},
                            React.createElement('a', { href: '/dashboard', className: 'text-light text-decoration-none' }, 'Dashboard')
                        ),
                        React.createElement(
                            'li',
                            {},
                            React.createElement('a', { href: '/login', className: 'text-light text-decoration-none' }, 'Login')
                        )
                    )
                )
            ),
            React.createElement('hr', { className: 'my-4' }),
            React.createElement(
                'div',
                { className: 'row align-items-center' },
                React.createElement(
                    'div',
                    { className: 'col-md-6' },
                    React.createElement(
                        'p',
                        { className: 'text-muted mb-0' },
                        '© 2024 Smart Farm. All rights reserved.'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-md-6 text-md-end' },
                    React.createElement(
                        'div',
                        { className: 'd-flex justify-content-md-end gap-3' },
                        React.createElement('i', { className: 'bi bi-facebook text-light' }),
                        React.createElement('i', { className: 'bi bi-twitter text-light' }),
                        React.createElement('i', { className: 'bi bi-linkedin text-light' })
                    )
                )
            )
        )
    );
};