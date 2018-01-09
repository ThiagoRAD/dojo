import { useDispatch, useSelector } from 'react-redux'
import { selectRegisterState, setPassword, setUsername } from './registerSlice'

const RegisterAccount = () => {

  const {username, password} = useSelector(selectRegisterState);

  const dispatch = useDispatch();
  const changeUsername = (e: any) => dispatch(setUsername(e.target.value));
  const changePassword = (e: any) => dispatch(setPassword(e.target.value));

  return (
    <div>
      <div>
        <label htmlFor='account'>Account</label>
        <input id='account' name='account' type='text' value={username} onChange={changeUsername} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password' value={password} onChange={changePassword} />
      </div>
    </div>
  );
};

export default RegisterAccount;
