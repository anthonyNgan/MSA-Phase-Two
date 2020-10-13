import React, { useState, useEffect } from 'react';
import { IChiropractors } from '../../common/Interface';

import { getArray, postArray, editArray, deleteArray } from '../../api/api';
import { useForm } from "react-hook-form";

import { Button, TextField } from "@material-ui/core/";

export const Chiropractors = () => {

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

    const deletePost = async (id: any) => {
        await deleteArray(id)
    };

    const editPost = async (id: any | {}) => {
        console.log(id);
        await editArray(id)
    }
   
    const handleRemoveItem = (data: number | {}) => {
        deleteArray(data);

    };

    useEffect(() => {
        const makeArrayRequest = async () => {
            setchiropractorDetails(await getArray());
        }
        makeArrayRequest();
    }, [handleChange, deletePost, editPost])


    return (
        <>
            <h3>List of Chiropractors</h3>
            {chiropractorDetails.map(x => <li key={x.chiropractorId}> {x.firstName} {x.lastName} {x.emailAddress} {x.phoneNumber} {x.timeCreated}</li>)}

            <h3>Add new Chiropractor</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Id: </label>
                <TextField
                    type="text"
                    id="id"
                    name="ID"
                />
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

                <Button variant="contained" color="default" onClick={() => editPost(5)}>Update</Button>

                <Button variant="contained" color="secondary" onClick={() => deletePost(1)}> Delete</Button>
            </form>
        </>
    )
}
export default Chiropractors;