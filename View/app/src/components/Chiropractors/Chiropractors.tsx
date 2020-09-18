import React, { useState, useEffect, ChangeEvent } from 'react';
import { getArray, postArray, deleteArray } from '../../api/api';
import { useForm } from "react-hook-form";

import { Button, TextField } from "@material-ui/core/";

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
        deleteArray: any;
    }

    const [chiropractorDetails, setchiropractorDetails] = useState<any[]>([]);
    const [formData, setFormData] = useState<any[]>([]);
    const {handleSubmit, errors } = useForm<IChiropractors>();
    const [list, updateList] = useState<any[]>([]);

/*    const handleDelete = (id: number, e: React.ChangeEvent<Ht) => {
        setDeleteArray({ ...formData, [e.target.name]: e.target.value }) 
        const newList = list.filter((data) => data.id !== id);
        updateList(newList);
        console.log(newList)
    }*/

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const onSubmit = (data: IChiropractors | {}) => {
        console.log("Submit: ", formData);
        postArray(formData)
    }
/*
    const handleDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
        console.log("id:", formData);

    }
*/
   
    const handleRemoveItem = (data: IChiropractors | {}) => {
        deleteArray(formData);
        updateList(list => list.filter(data => data.id !== data.id));
        console.log('data', formData)
    };

    useEffect(() => {
        const makeArrayRequest = async () => {
            setchiropractorDetails(await getArray());
        }
        makeArrayRequest();
    }, [])

    return (
        <>
            <h3>List of Chiropractors</h3>
            {chiropractorDetails.map(x => <li key={x.chiropractorId}> {x.firstName} {x.lastName} {x.emailAddress} {x.phoneNumber} {x.timeCreated}</li>)}

            <h3>Add new Chiropractor</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name: </label>
                <TextField
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}

                />

                {errors.firstName && errors.firstName.message}
                <label>Last Name: </label>
                <TextField
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                />
                {errors.lastname && errors.lastname.message}

                <Button variant="contained" color="primary" type="submit" value="Submit">Submit</Button>
                <Button variant="contained" color="default" onClick={() => console.log(deleteArray)}>Update</Button>
                <Button variant="contained" color="secondary" onClick={() => handleRemoveItem(list)}>Delete</Button>
            </form>
        </>
    )
}
export default Chiropractors;