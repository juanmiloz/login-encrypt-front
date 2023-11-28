'use client';
import React, {useEffect, useState} from "react";
import {Tabs, Tab, Card, CardBody, Input, Button} from "@nextui-org/react";
import {CRUDService} from "@/src/service/axios";
import axios from "axios";
import Swal from "sweetalert2";
import {User} from "@/interfaces/user.interface";

const MyComponent = () => {

    const [user, setUser] = useState<User>({
        username: "",
        password: "",
        lastDate: "",
        roleId: "",
    });
    const [changeUser, setChangeUser] = useState<User>({
        username: "",
        password: "",
        lastDate: "",
        roleId: "",
    })

    useEffect(() => {
        getPerson()
    }, []);

    const getPerson = async () => {
        try {
            const config = CRUDService.getHeaderConfig();
            const response = await axios.get('http://localhost:8080/user/info', config)
            setUser(response.data)
            setChangeUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setChangeUser({
            ...changeUser,
            'password': value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const config = CRUDService.getHeaderConfig();
        axios.put('http://localhost:8080/user', changeUser, config).then(()=>{
            Swal.fire({
                icon: "success",
                title: "successful updated",
                text: "The user was successfully updated"
            });
        })
    }

    return (
        <div>
            <div className="flex w-full flex-col m-3">
                <Tabs aria-label="Options">
                    <Tab key="lastConnection" title="Last Connection">
                        <Card>
                            <CardBody>
                                <div>last connection:</div>
                                <p>{user.lastDate}</p>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="changePassword" title="Change Password">
                        <Card>
                            <CardBody className={'flex justify-center items-center gap-2'}>
                                <form className={'flex flex-col gap-2 '} onSubmit={handleSubmit}>
                                    <Input type="newPassword" label="New Password" onChange={handleChange}/>
                                    <Button color="primary" type={'submit'}>Button</Button>
                                </form>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default MyComponent;
