// import React from 'react';
// import { useForm } from 'react-hook-form';

// function FormWithReactHookForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log('Form submitted:', data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           {...register('name', { required: 'Name is required' })}
//         />
//         {errors.name && <span>{errors.name.message}</span>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           {...register('email', { required: 'Email is required' })}
//         />
//         {errors.email && <span>{errors.email.message}</span>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormWithReactHookForm;
