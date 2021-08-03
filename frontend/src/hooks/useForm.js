import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    const handleInputChangeFile = ({target}) => {
        setValues({
            ...values,
            [ target.name ]: target.files[0]
        });
    }

    return [ values, handleInputChange, reset, handleInputChangeFile ];

}