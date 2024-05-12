import { createSlice } from '@reduxjs/toolkit';
import { Step } from './Step';

interface RegisterState {
  username: string;
  password: string;
  currentStep: Step;
  steps: Step[];
}

const initialState: RegisterState = {
  username: '',
  password: '',
  currentStep: Step.Account,
  steps: [Step.Account, Step.Address, Step.Payment],
};


const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    nextStep: (state) => {
      const currentIndex = state.steps.indexOf(state.currentStep);
      if (currentIndex < state.steps.length - 1) {
        state.currentStep = state.steps[currentIndex + 1];
      }
    },
    prevStep: (state) => {
      const currentIndex = state.steps.indexOf(state.currentStep);
      if (currentIndex > 0) {
        state.currentStep = state.steps[currentIndex - 1];
      }
    },
  },
});

export const { setUsername, setPassword } = registerSlice.actions;
export default registerSlice.reducer;
