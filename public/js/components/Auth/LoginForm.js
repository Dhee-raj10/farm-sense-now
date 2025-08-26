const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Simulate login (replace with real authentication)
            if (formData.email && formData.password) {
                const user = {
                    id: 1,
                    name: formData.email.split('@')[0],
                    email: formData.email
                };
                
                StorageUtils.setCurrentUser(user);
                onLogin(user);
            } else {
                setError('Please fill in all fields');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return React.createElement(
        'div',
        { className: 'form-container' },
        React.createElement(
            'div',
            { className: 'text-center mb-4' },
            React.createElement('i', { className: 'bi bi-flower1 text-farm-green', style: { fontSize: '3rem' } }),
            React.createElement('h2', { className: 'mt-3' }, 'Welcome Back'),
            React.createElement('p', { className: 'text-muted' }, 'Sign in to your account')
        ),
        
        error && React.createElement(
            'div',
            { className: 'alert alert-danger' },
            error
        ),

        React.createElement(
            'form',
            { onSubmit: handleSubmit },
            React.createElement(
                'div',
                { className: 'mb-3' },
                React.createElement('label', { className: 'form-label' }, 'Email'),
                React.createElement('input', {
                    type: 'email',
                    className: 'form-control',
                    name: 'email',
                    value: formData.email,
                    onChange: handleChange,
                    required: true
                })
            ),
            React.createElement(
                'div',
                { className: 'mb-3' },
                React.createElement('label', { className: 'form-label' }, 'Password'),
                React.createElement('input', {
                    type: 'password',
                    className: 'form-control',
                    name: 'password',
                    value: formData.password,
                    onChange: handleChange,
                    required: true
                })
            ),
            React.createElement(
                'button',
                {
                    type: 'submit',
                    className: 'btn btn-farm-primary w-100',
                    disabled: loading
                },
                loading ? 'Signing In...' : 'Sign In'
            )
        ),

        React.createElement(
            'div',
            { className: 'text-center mt-3' },
            React.createElement(
                'span',
                { className: 'text-muted' },
                "Don't have an account? "
            ),
            React.createElement('a', { href: '/signup', className: 'text-farm-green text-decoration-none' }, 'Sign up')
        )
    );
};