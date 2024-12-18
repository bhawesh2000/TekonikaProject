import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basicDetails: {},
    legalDocuments: {},
    demographics: {},
    currentStep: 1,
  };

export const multiFormSlice = createSlice({
    name:"form",
    initialState,
    reducers: {
        saveBasicDetails: (state, action) => {
          state.basicDetails = action.payload;
          state.currentStep = 2;
        },
        saveLegalDocuments: (state, action) => {
          state.legalDocuments = action.payload;
          state.currentStep = 3;
        },
        saveDemographics: (state, action) => {
          state.demographics = action.payload;
          state.currentStep = 3; // or a success state
        },
        goToStep: (state, action) => {
          state.currentStep = action.payload;
        },
      },
    });

    export const {
        saveBasicDetails,
        saveLegalDocuments,
        saveDemographics,
        goToStep,
      } = multiFormSlice.actions;


export default multiFormSlice.reducer