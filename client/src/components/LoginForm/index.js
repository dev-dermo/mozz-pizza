import { useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

function LoginForm() {
	const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

	const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
      console.log(data);

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

	return (
		<>
		<form onSubmit={handleFormSubmit}>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input onChange={handleChange} id="email" className="form-control" type="email" placeholder="example@example.org" />
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input onChange={handleChange} id="password" className="form-control" type="password" />
			</div>

			<button type="login" className="btn btn-primary">Login</button>
		</form>

		{error && <div>Login failed</div>}
		</>
	);
}

export default LoginForm;