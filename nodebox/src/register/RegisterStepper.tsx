import {useSelector} from 'react-redux';
import {RootState} from '../store';

const RegisterStepper = () => {
  const {currentStep, steps} = useSelector((state: RootState) => state.register);

  return (
    <div>
      <div>
        {steps.map((step) => (
          <div key={step} className={`step ${step === currentStep && 'active'}`}>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterStepper;
