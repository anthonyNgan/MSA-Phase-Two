import React, { useState, useEffect, forwardRef } from 'react';
import { IChiropractors } from '../../common/Interface';

import { getArray, postArray, editArray, deleteArray } from '../../api/api';
import { useForm } from 'react-hook-form';

import { Button, TextField } from "@material-ui/core/";

import MaterialTable, {Column} from "material-table";
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

export const Chiropractors = () => {

    const tableIcons = {
        Search: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
        Delete: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
        Edit: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
        Clear: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />)
    }


    const [chiropractorDetails, setchiropractorDetails] = useState<any[]>([]);
    const [formData, setFormData] = useState<any[]>([]);
    const { handleSubmit, errors } = useForm<IChiropractors>();
    const [isLoading, setIsLoading] = useState(false);

    type RowData = {}
    
    const columns = [
            { title: "First Name", field: "firstName" },
            { title: "Last Name", field: "lastName" },
            { title: "Email Address", field: "emailAddress" },
            { title: "Phone Number", field: "phoneNumber", type: "numeric" },
    ] as Column<RowData>[]

    

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
        setIsLoading(true);
        const makeArrayRequest = async () => {
            setchiropractorDetails(await getArray());
        }
        makeArrayRequest();
        setIsLoading(false);
    }, [handleChange, deletePost, editPost])


    return (
        <>

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
                <label>Email Address: </label>
                <TextField
                    type="text"
                    id="emailAddress"
                    name="emailAddress"
                    onChange={handleChange}
                />
                {/* <label>Phone Number: </label>
                <TextField
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                /> */}
                <Button variant="contained" color="primary" type="submit" value="Submit">Add New</Button>
                <Button variant="contained" color="default" onClick={() => editPost(44)}>Update</Button>

            </form>

            <MaterialTable
                title="List of Chiropractors"
                icons={tableIcons}
                columns={columns}
                data={chiropractorDetails}
                actions={[
                    {
                        icon: ()=><Edit/>,
                        tooltip: 'Edit User',
                        onClick: (event, rowData) => {
                            // Do save operation
                            editPost(44)
                        }
                    },
                    {
                        icon: ()=><DeleteOutline/>,
                        tooltip: 'delete User',
                        onClick: (event, rowData) => {
                            // Do save operation
                            deletePost(rowData.chiropractorId)
                            console.log(rowData.chiropractorId)
                        }
                    }
                ]}
                options={{
                    sorting: true,
                    actionsColumnIndex: -1,
                }}
                isLoading={isLoading}
            />

             {/* {chiropractorDetails.map(
                x => <li key={x.chiropractorId}> {x.firstName} {x.lastName} {x.emailAddress} {x.phoneNumber} {x.timeCreated}                 
                <Button variant="contained" color="secondary" onClick={() => deletePost(x.chiropractorId)}> Delete</Button>
                
                </li>
                
            )} */}
        </>
    )
}
export default Chiropractors;