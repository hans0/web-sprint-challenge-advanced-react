import useLocalStorage from './useLocalStorage';

// write your custom hook here to control your checkout form
const useForm = (key, initialValue) => {
  const [values, setValue] = useLocalStorage("form", initialValues);
    
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
  
    return([ values, handleChanges, clearForm ]);
}
}

export default useForm;