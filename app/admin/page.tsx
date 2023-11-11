'use client';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardUser from "@/src/components/CardUser";
import {User} from "@/src/interfaces/user.interface";
import {useRouter} from "next/navigation";

const MyComponent = () => {
    const [users, setUsers] = useState([]);
    const router = useRouter()

    const getPersons = async () =>{
        try{
            const response = await axios.get('http://localhost:8080/user')
            setUsers(response.data)
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        getPersons();}, []);

    const deleteUser = (username:string):void =>{
        axios.delete('http://localhost:8080/user/'+username).then(()=>{
            getPersons()
        })
    }

    const editUser = (username:string) => {
        router.push('/admin/'+username)
    }

    return (
        <div>
            <div className={'grid grid-cols-4 gap-4'}>
                {users.map((user:User)=>
                    <CardUser user={user} onDelUser={deleteUser} onEditUser={editUser} key={user.username}/>
                )}
            </div>
        </div>
    );
};

export default MyComponent;
