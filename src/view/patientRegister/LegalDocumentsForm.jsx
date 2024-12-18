import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import { useDispatch, useSelector } from 'react-redux';
import { saveLegalDocuments, goToStep } from '../../store/slice/MultiFormSlice'; // Adjust the import path



function LegalDocumentsForm() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.form); // Access currentStep from Redux store

  const initialValues = {
    document: null,
  };

  // Validation schema using Yup
const validationSchema = Yup.object({
    document: Yup.mixed().required('Document is required'), // Ensure the document is required
  });

  const handleSubmit = (values) => {
    if (values.document) {
      dispatch(saveLegalDocuments(values.document)); // Save legal documents data
      dispatch(goToStep(currentStep + 1)); // Increment current step
      alert('Document saved successfully!');
    } 
  };

  return (
    <div className="w-11/12 lg:w-[600px] mx-auto p-6 bg-white mb-[48px] mt-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Pass the validation schema to Formik
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="flex flex-col gap-4">
            <div>
              <label className="block mb-2 font-semibold">Upload Document or Image*</label>
              <input
                type="file"
                name="document"
                accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                onChange={(event) => {
                  setFieldValue('document', event.currentTarget.files[0]);
                }}
                className="w-full h-[44px] rounded-lg border p-2"
              />
              {/* Display error message if the document field is required */}
              {errors.document && touched.document && (
                <div className="text-red-500 text-sm">{errors.document}</div>
              )}
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button
                type="submit"
                className="bg-black text-white rounded-full px-4 py-2 w-[169px] h-[40px]"
              >
                Save & Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LegalDocumentsForm;
