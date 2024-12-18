import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { saveBasicDetails, goToStep } from "../../store/slice/MultiFormSlice";

const BasicDetailsForm = () => {

    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.form.currentStep);

  const validationSchema = Yup.object({
    firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'First name must only contain alphabets') // Only alphabets allowed
    .required('First name is required'),
  
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Last name must only contain alphabets') // Only alphabets allowed
    .required('Last name is required'),
    mobileNo: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .positive("Age must be positive")
      .required("Age is required"),
    email: Yup.string().email("Invalid email format"),
  });

  const initialValues = {
    title:"",
    firstName: "",
    lastName: "",
    countryCode:"",
    mobileNo: "",
    altCountryCode:"",
    alternateMobileNo: "",
    email: "",
    dob: "",
    age: "",
    birthTime: "",
    gender: "",
    guardianName: "",
    country: "India",
    state: "",
    district: "",
    cityTown: "",
    fullAddress: "",
    howknowaboutus: "",
    referFrom: "",
    admissionType: "Involuntary",
  };


  const onSubmit = (values) => {
    console.log("Form Data:", values);
    dispatch(saveBasicDetails(values)); // Save form data to Redux
    dispatch(goToStep(currentStep + 1));
  };

  const handleSave = () => {
    dispatch(saveBasicDetails(values));
  };


  return (
    <div className="w-11/12 lg:w-[1221px]  mx-auto p-6 bg-white mb-[48px] mt-2">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        {({values})=>(
            <Form className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {/* Row 1 */}
              <div>
                <label className="block mb-1 font-semibold">First Name*</label>
                <div className="flex flex-row">
                <Field
                    as="select"
                    name="title"
                    className="w-[70px] h-[44px] rounded-l-lg border p-2"
            
                    >
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                </Field>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full h-[44px] rounded-r-lg border p-2"
                />

                </div>
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                
              </div>
              <div>
                <label className="block mb-1 font-semibold">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full h-[44px] rounded-lg border p-2 font-semibold"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />

              </div>
              <div>
                <label className="block mb-1 font-semibold">Mobile no.*</label>
                <div className="flex flex-row">
                <Field
                  as="select"
                  name="countryCode"
                  className="w-[70px] h-[44px] rounded-l-lg border p-2"
                >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                </Field>
                <Field
                  type="text"
                  name="mobileNo"
                  className="w-full h-[44px] rounded-r-lg border p-2"
                />
                </div>
                <ErrorMessage name="mobileNo" component="div" className="text-red-500 text-sm" />
                
              </div>
              <div>
                <label className="block mb-1 font-semibold">Alternate Mobile No.</label>
                <div className="flex flex-row">
                <Field
                  as="select"
                  name="altCountryCode"
                  className="w-[70px] h-[44px] rounded-l-lg border p-2"
                >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                </Field>
                <Field
                  type="text"
                  name="alternateMobileNo"
                  className="w-full h-[44px] rounded-r-lg border p-2"
                />
                </div>
                <ErrorMessage name="alternateMobileNo" component="div" className="text-red-500 text-sm" />
                
              </div>
            
              {/* Row 2 */}
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full h-[44px] rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Date of Birth</label>
                <Field
                  type="date"
                  name="dob"
                  className="w-full h-[44px] rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Age*</label>
                <Field
                  type="number"
                  name="age"
                  className="w-full h-[44px] rounded-lg border p-2"
                />
                <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />

              </div>
              <div>
                <label className="block mb-1 font-semibold">Birth Time</label>
                <Field
                  type="time"
                  name="birthTime"
                  className="w-full h-[44px] rounded-lg border p-2"
                />
              </div>
            
              {/* Row 3 */}
              <div>
                <label className="block mb-1 font-semibold">Gender</label>
                <div>
                  <label className="mr-2">
                    <Field type="radio" name="gender" value="Male" /> Male
                  </label>
                  <label className="mr-2">
                    <Field type="radio" name="gender" value="Female" /> Female
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="Others" /> Others
                  </label>
                </div>
              </div>
              <div>
                <label className="block mb-1 font-semibold">Guardian Name</label>
                <Field
                  type="text"
                  name="guardianName"
                  className="w-full h-[44px] rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Country</label>
                <Field
                  as="select"
                  name="country"
                  className="w-full h-[44px] rounded-lg border p-2"
                >
                  <option>India</option>
                </Field>
              </div>
              <div>
                <label className="block mb-1 font-semibold">State</label>
                <Field
                  as="select"
                  name="state"
                  className="w-full h-[44px] rounded-lg border p-2"
                >
                  <option>UP</option>
                </Field>
              </div>
            
            
              <div>
                <label className="block mb-1 font-semibold">District</label>
                <Field
                  as="select"
                  name="district"
                  className="w-full h-[44px] rounded-lg border p-2"
                >
                  <option>Noida</option>
                </Field>
                <ErrorMessage name="district" component="div" className="text-red-500 text-sm" />
              </div>
            
              <div>
                <label className="block mb-1 font-semibold">City/Town</label>
                <Field
                  as="select"
                  name="city"
                  className="w-full h-[44px] rounded-lg border p-2"
                >
                  <option>Noida</option>
                </Field>
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
              </div>
            
              <div className="col-span-1 sm:col-span-2 font-semibold">
                <label className="block mb-1">Full Address</label>
                <Field
                  type="text"
                  name="fullAddress"
                  className="w-[228px] h-[44px] rounded-lg border p-2"
                />
              </div>
            
              
              <div className="col-span-1 sm:col-span-4 font-semibold">
                <h1 className="w-full font-semibold mb-2">Reference</h1>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                  <div className="flex flex-col">
                    <label className="mr-2">How do you know about us</label>
                    <Field
                      as="select"
                      name="howknowaboutus"
                      className="w-full h-[44px] rounded-lg border p-2"
                    >
                      <option>abc</option>
                    </Field>
                  </div>
            
                  <div className="flex flex-col">
                    <label className="block mb-1">ReferFrom</label>
                    <Field
                      as="select"
                      name="referFrom"
                      className="w-full h-[44px] rounded-lg border p-2"
                    >
                      <option>xyz</option>
                    </Field>
                  </div>
                </div>
              </div>
            
             
              <div>
                <label className="block mb-2 font-semibold">Admission Type</label>
                <div>
                    <div>
                    <label className="mr-6">
                    <Field type="radio" name="admissionType" value="Voluntary" /> Voluntary
                  </label>
                  <label>
                    <Field type="radio" name="admissionType" value="Involuntary" /> Involuntary
                  </label>
                    </div>
                    <div className="mt-2">
                    <Field
                      as="select"
                      name="admissionType"
                      className="w-full h-[44px] rounded-lg border p-2"
                    >
                      <option>abc</option>
                    </Field>
                    </div>
                  
                </div>
              </div>
            
            
              <div className="col-span-1 sm:col-span-4 flex justify-center gap-4 mt-4">
                <button
                  type="button"
                  className="bg-white rounded-full px-4 py-2 w-[169px] h-[40px] border-2 border-gray-600"
                  onClick={()=>handleSave(values)}
                >
                  Save
                </button>
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
};

export default BasicDetailsForm;
