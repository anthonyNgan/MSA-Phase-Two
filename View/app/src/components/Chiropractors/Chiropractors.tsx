import React, { useState, useEffect, ChangeEvent } from 'react';
import { getArray, postArray } from '../../api/api';
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";

export const Chiropractors = () => {

    interface IChiropractors {
        chiropractorId: number;
        firstName: string;
        lastname: string;
        emailAddress: string;
        phoneNumber: number;
        timeCreated: Date;

        postArray: any;
        data: any;
        values: any;
        errors: any;
    }

    const [chiropractorDetails, setchiropractorDetails] = useState<any[]>([]);
    const [formData, setFormData] = useState<any[]>([]);

    const { handleSubmit, errors } = useForm<IChiropractors>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const onSubmit = (data: IChiropractors | {}) => {

        console.log("Submit: ", formData); 
        postArray(formData)


    }

    

 
    useEffect(() => {
        const makeArrayRequest = async () => {
            setchiropractorDetails(await getArray());
        }
        makeArrayRequest();
    }, [])

        return (
            <>
                {chiropractorDetails.map(x => <li key={x.chiropractorId}> {x.firstName} {x.lastName} {x.emailAddress} {x.phoneNumber} {x.timeCreated}</li>)}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={ handleChange}
                    />
                    {errors.firstName && errors.firstName.message}

                    <input
                        
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                    />
                    {errors.lastname && errors.lastname.message}

                    <Button variant="contained" color="primary" type="submit" value="Submit">Submit</Button>
                </form>
            </>
        )
}
    export default Chiropractors;