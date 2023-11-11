'use client';
import React, {useEffect, useState} from 'react';
import axios from "axios";

interface Props {
    params:{
        user:string
    };
}

const EditUser:React.FC<Props> = ({ params }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/user').then((res)=>{
            console.log(res)
            setUser(res.data)
        })
    }, []);

    return (
        <div>

        </div>
    );
};

export default EditUser;
