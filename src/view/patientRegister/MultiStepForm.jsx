// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import {
//   updateStep,
//   updatePatientDetails,
//   updateAssignedResources,
//   updateDoctorTestReport,
// } from "../../store/slice/MultiFormSlice";

// const MultiStepForm = () => {
//   const { step, patientDetails, assignedResources, doctorTestReport } =
//     useSelector((state) => state.form);
//   const dispatch = useDispatch();

//   const validationSchemaStep1 = Yup.object({
//     name: Yup.string()
//       .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets.")
//       .required("Name is required."),
//     age: Yup.number()
//       .typeError("Age must be a valid number.")
//       .required("Age is required."),
//   });

//   const validationSchemaStep2 = Yup.object({
//     resource: Yup.string().required("Resource is required."),
//   });

//   const validationSchemaStep3 = Yup.object({
//     report: Yup.mixed()
//       .required("Report is required.")
//       .test("fileSize", "File too large", (value) => value && value.size <= 5000000) // 5MB
//       .test("fileType", "Unsupported file format", (value) => 
//         value && ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
//       ),
//   });

//   const formikStep1 = useFormik({
//     initialValues: {
//       name: patientDetails.basicDetails.name || "",
//       age: patientDetails.basicDetails.age || "",
//     },
//     validationSchema: validationSchemaStep1,
//     onSubmit: (values) => {
//       dispatch(updatePatientDetails({ basicDetails: values }));
//       dispatch(updateStep(step + 1));
//       formikStep1.resetForm();
//     },
//   });

//   const formikStep2 = useFormik({
//     initialValues: {
//       resource: assignedResources.resource || "",
//     },
//     validationSchema: validationSchemaStep2,
//     onSubmit: (values) => {
//       dispatch(updateAssignedResources(values));
//       dispatch(updateStep(step + 1));
//       formikStep2.resetForm();
//     },
//   });

//   const formikStep3 = useFormik({
//     initialValues: {
//       report: doctorTestReport.report || null,
//     },
//     validationSchema: validationSchemaStep3,
//     onSubmit: (values) => {
//       dispatch(updateDoctorTestReport(values));
//       console.log({
//         patientDetails,
//         assignedResources,
//         doctorTestReport,
//       });
//       alert("Form submitted successfully!");
//       dispatch(updateStep(1));
//       formikStep3.resetForm();
//     },
//   });

//   const handleFileChange = (event) => {
//     formikStep3.setFieldValue("report", event.target.files[0]);
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold mb-4">Step 1: Basic Patient Details</h2>
//             <form onSubmit={formikStep1.handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="p-3 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formikStep1.values.name}
//                   onChange={formikStep1.handleChange}
//                   onBlur={formikStep1.handleBlur}
//                 />
//                 {formikStep1.touched.name && formikStep1.errors.name && (
//                   <p className="text-red-500 text-sm">{formikStep1.errors.name}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="number"
//                   name="age"
//                   placeholder="Age"
//                   className="p-3 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formikStep1.values.age}
//                   onChange={formikStep1.handleChange}
//                   onBlur={formikStep1.handleBlur}
//                 />
//                 {formikStep1.touched.age && formikStep1.errors.age && (
//                   <p className="text-red-500 text-sm">{formikStep1.errors.age}</p>
//                 )}
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//                   disabled={!formikStep1.isValid}
//                 >
//                   Next
//                 </button>
//               </div>
//             </form>
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold mb-4">Step 2: Assign Resources</h2>
//             <form onSubmit={formikStep2.handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="resource"
//                   placeholder="Resource"
//                   className="p-3 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formikStep2.values.resource}
//                   onChange={formikStep2.handleChange}
//                   onBlur={formikStep2.handleBlur}
//                 />
//                 {formikStep2.touched.resource && formikStep2.errors.resource && (
//                   <p className="text-red-500 text-sm">{formikStep2.errors.resource}</p>
//                 )}
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => dispatch(updateStep(step - 1))}
//                   className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//                   disabled={!formikStep2.isValid}
//                 >
//                   Next
//                 </button>
//               </div>
//             </form>
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold mb-4">Step 3: Doctor Test Report</h2>
//             <form onSubmit={formikStep3.handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="file"
//                   name="report"
//                   accept="application/pdf, image/jpeg, image/png"
//                   className="p-3 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   onChange={handleFileChange}
//                 />
//                 {formikStep3.touched.report && formikStep3.errors.report && (
//                   <p className="text-red-500 text-sm">{formikStep3.errors.report}</p>
//                 )}
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => dispatch(updateStep(step - 1))}
//                   className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
//       {renderStep()}
//     </div>
//   );
// };

// export default MultiStepForm;
import React from 'react'

function MultiStepForm() {
  return (
    <div>
      
    </div>
  )
}

export default MultiStepForm
