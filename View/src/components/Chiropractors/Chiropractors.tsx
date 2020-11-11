import React, { useState, useEffect } from 'react';
import { IChiropractors } from '../../common/Interface';

import { getArray, postArray, editArray, deleteArray } from '../../api/api';
import { useForm } from 'react-hook-form';

import { Button, TextField } from "@material-ui/core/";
import MaterialTable from "material-table";

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


    useEffect(() => {
        const makeArrayRequest = async () => {
            setchiropractorDetails(await getArray());
        }
        makeArrayRequest();
    }, [handleChange, deletePost, editPost])


    return (
        <>
            
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

                <Button variant="contained" color="primary" type="submit" value="Submit">Add New</Button>
            </form>
            
            <MaterialTable
          columns={[
            { title: "First Name", field: "name" },
            { title: "Last Name", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="List of Chiropractors"
          actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => {
                // Do save operation
              }
            }
          ]}
        />

            {chiropractorDetails.map(
                x => <li key={x.chiropractorId}> {x.firstName} {x.lastName} {x.emailAddress} {x.phoneNumber} {x.timeCreated}                 
                <Button variant="contained" color="default" onClick={() => editPost(x.chiropractorId)}>Update</Button>
                <Button variant="contained" color="secondary" onClick={() => deletePost(x.chiropractorId)}> Delete</Button>

                </li>
                
            )}

        
 
        </>
    )
}
export default Chiropractors;