import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import { useForm } from 'react-hook-form';
import InputProps from '../../components/InputProp/InputProp';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => console.log(data));
  const handleClickAdd = () => {
    if (!!isDirty && !!isValid) {
      alert('thêm thành công');
    }
  };

  return (
    <div className="sign-up">
      <div className="signup-inner">
        <h1>Sign Up</h1>
        <form
          action="/sign-in"
          method="post"
          className="form-sign-up"
          onSubmit={onSubmit}
        >
          <div className="form-item">
            <label htmlFor="name">Full Name :</label>
            <InputProps
              className="signup-input input-name"
              type="text"
              placeholder="Your name..."
              pattern="^[a-zA-Z]+[a-zA-Z0-9\-_]*$"
              {...register('name', { required: true })}
              name="name"
            />
          </div>
          {errors.name && (
            <span className="error-field">this field is required* </span>
          )}
          <div className="form-item">
            <label htmlFor="date">Birthday :</label>
            <InputProps
              className="signup-input input-date"
              type="date"
              {...register('birthday', { required: true })}
              name="birthday"
            />
          </div>
          {errors.birthday && (
            <span className="error-field">this field is required* </span>
          )}
          <div className="form-item">
            <h2>Gender :</h2>
            <div className="sex">
              <label htmlFor="male">Male</label>
              <InputProps
                className="signup-input gender"
                type="radio"
                {...register('gender', { required: true })}
                name="gender"
                checked
              />
            </div>
            <div className="sex">
              <label htmlFor="female">Female</label>
              <InputProps
                className="signup-input gender"
                type="radio"
                {...register('gender', { required: true })}
                name="gender"
              />
            </div>
          </div>
          {errors.gender && (
            <span className="error-field">this field is required* </span>
          )}
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <InputProps
              className="signup-input input-email"
              type="text"
              placeholder="Email..."
              {...register('email', { required: true })}
              name="email"
            />
          </div>
          {errors.email && (
            <span className="error-field">this field is required* </span>
          )}
          <div className="form-item">
            <label htmlFor="password">Password:</label>
            <InputProps
              className="signup-input input-password"
              type="password"
              placeholder="Password..."
              {...register('password', { required: true })}
              name="password"
            />
          </div>
          {errors.password && (
            <span className="error-field">this field is required* </span>
          )}
          <div className="form-item">
            <label htmlFor="password">Confirm Password:</label>
            <InputProps
              className="signup-input input confirm"
              type="password"
              placeholder="Confirm Password..."
              {...register('confirm', { required: true })}
              name="confirm"
            />
          </div>
          {errors.confirm && (
            <span className="error-field">this field is required* </span>
          )}
          <button
            type="submit"
            className="signup-button"
            onClick={handleClickAdd}
          >
            Add User
          </button>
          <button className="signup-button" onClick={() => navigate('/')}>
            Back Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
