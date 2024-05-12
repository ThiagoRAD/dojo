const StepAccount = () => {
  return (
    <div>
      <div>
        <label htmlFor='account'>Account</label>
        <input id='account' name='account' type='text' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password' />
      </div>
    </div>
  );
};

export default StepAccount;
