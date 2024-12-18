import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

function DemographicsForm() {

  const dispatch = useDispatch();


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  const handleSubmit = (values) => {
    alert('Form Submitted');
    console.log(values);
    dispatch(saveDemographics(values));

  };

  return (
    <div className="w-11/12 lg:w-[600px] mx-auto p-6 bg-white mb-[48px] mt-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Pass the validation schema to Formik
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4">
            <div>
              <label className="block mb-2 font-semibold">First Name*</label>
              <Field
                type="text"
                name="firstName"
                className="w-full h-[44px] rounded-lg border p-2"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Last Name*</label>
              <Field
                type="text"
                name="lastName"
                className="w-full h-[44px] rounded-lg border p-2"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email*</label>
              <Field
                type="email"
                name="email"
                className="w-full h-[44px] rounded-lg border p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Phone Number*</label>
              <Field
                type="text"
                name="phoneNumber"
                className="w-full h-[44px] rounded-lg border p-2"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm"
              />
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

export default DemographicsForm;
