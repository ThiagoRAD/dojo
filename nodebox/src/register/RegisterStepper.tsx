import {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {Step} from './Step';
import RegisterAccount from './RegisterAccount';
import RegisterAddress from './RegisterAddress';
import RegisterPayment from './RegisterPayment';
import {nextStep, prevStep} from './registerSlice';
import './RegisterStepper.css';

const RegisterStepper = () => {
  const {currentStep, steps} = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();
  const isFirstStep = currentStep === steps[0];
  const isLastStep = currentStep === steps[steps.length - 1];

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  return (
    <div className='stepper-container'>
      <div className='stepper-navigation'>
        {steps.map((step, index) => (
          <Fragment key={step}>
            {index !== 0 && <div className={`step-bar ${step <= currentStep && 'active'}`}></div>}
            <div className={`step-circle ${step <= currentStep && 'active'}`}>
              <span>{index + 1}</span>
              <span className={`step-label ${step === currentStep && 'active'}`}>{step}</span>
            </div>
          </Fragment>
        ))}
      </div>
      {currentStep === Step.Account && <RegisterAccount />}
      {currentStep === Step.Address && <RegisterAddress />}
      {currentStep === Step.Payment && <RegisterPayment />}
      <div className='navigation'>
        <button disabled={isFirstStep} onClick={handleBack}>
          Back
        </button>
        <button disabled={isLastStep} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RegisterStepper;
