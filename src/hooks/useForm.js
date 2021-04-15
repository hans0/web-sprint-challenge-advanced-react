import { useState } from 'react';

import useLocalStorage from './useLocalStorage';

// write your custom hook here to control your checkout form
const useForm = (initialValues) => {
  const [values, setValue] = useLocalStorage("form", initialValues);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleChanges = e => {
    setValue({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  
  const clearForm = e => {
    e.preventDefault();
    setValue(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return([ values, showSuccessMessage, handleChanges, handleSubmit ]);

}

export default useForm;