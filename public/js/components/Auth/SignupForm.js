const SignupForm = ({ onSignup }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            if (formData.name && formData.email && formData.password) {
                const user = {
                    id: Date.now(),
                    name: formData.name,
                    email: formData.email
                };
                
                StorageUtils.setCurrentUser(user);
                onSignup(user);
            } else {
                setError('Please fill in all fields');
            }
        } catch (err) {
            setError('Signup failed. Please try again.');
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
            React.createElement('h2', { className: 'mt-3' }, 'Join Smart Farm'),
            React.createElement('p', { className: 'text-muted' }, 'Create your account to get started')
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
                React.createElement('label', { className: 'form-label' }, 'Full Name'),
                React.createElement('input', {
                    type: 'text',
                    className: 'form-control',
                    name: 'name',
                    value: formData.name,
                    onChange: handleChange,
                    required: true
                })
            ),
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
                'div',
                { className: 'mb-3' },
                React.createElement('label', { className: 'form-label' }, 'Confirm Password'),
                React.createElement('input', {
                    type: 'password',
                    className: 'form-control',
                    name: 'confirmPassword',
                    value: formData.confirmPassword,
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
                loading ? 'Creating Account...' : 'Create Account'
            )
        ),

        React.createElement(
            'div',
            { className: 'text-center mt-3' },
            React.createElement(
                'span',
                { className: 'text-muted' },
                'Already have an account? '
            ),
            React.createElement('a', { href: '/login', className: 'text-farm-green text-decoration-none' }, 'Sign in')
        )
    );
};