import { useForm } from 'react-hook-form';
import './SignIn.scss';
import { Link, useNavigate } from 'react-router-dom';
import InputProps from '../../components/InputProp/InputProp';

interface UserProps {
  email: string;
  password: string;
}

function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();
  const onSubmit = handleSubmit((data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/home');
  });

  return (
    <div className="sign-in">
      <div className="signin-inner">
        <h1>Sign In</h1>
        <form method="post" className="form-sign-in" onSubmit={onSubmit}>
          <label htmlFor="email">Email:</label>
          <InputProps
            className="signin-input"
            type="email"
            placeholder="Email..."
            {...register('email', { required: true })}
            name="email"
          />
          {errors.email && (
            <span className="error-field">This field is required*</span>
          )}
          <label htmlFor="password">Password:</label>
          <InputProps
            className="signin-input"
            type="password"
            placeholder="Password..."
            {...register('password', { required: true })}
            name="password"
          />
          {errors.password && (
            <span className="error-field">This field is required*</span>
          )}
          <button className="signin-button" type="submit">
            Sign In!
          </button>
        </form>
        <Link to="/sign-up" className="link-signup">
          Do not have an account? Click here to sign up.
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
