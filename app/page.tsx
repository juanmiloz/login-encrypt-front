'use client';
import {
    Button,
    Card,
    CardBody,
    Input,
    Link,
    Tab,
    Tabs,
} from '@nextui-org/react';
import React, {useState} from 'react';
import axios from "../src/config/axios";
import Swal from 'sweetalert2'
import {type} from "os";
import {valueOf} from "node";

export default function Home() {
    const [selected, setSelected] = useState('login');
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (selected === "login") {
            axios.post('auth', formData).then((res) => {
                console.log(res)
            })
        } else if (selected === "sign-up") {
            axios.post('auth/create', formData).then((res) => {
                if (res.status === 200) {
                    setSelected('login');
                    Swal.fire({
                        icon: "success",
                        title: "successful creation",
                        text: "The user was successfully created, you can now log in"
                    });
                }
                //TODO MANEJAR RESPUESTA
            }).catch((error) => {
                const errors = error.response.data.inputErrors.map((err:string, index:number)=>
                    <div key={index}>{err}</div>
                )

                console.log(errors)
                //TODO ACOMODAR ESTE GRAN HPTA PARA QUE NO LANCE [OBJECT]
                Swal.fire({
                    icon: "error",
                    title: "Error...",
                    text: errors
                });
            })
        }
    }


    return (
        <main className="flex flex-col w-full">
            <section className="h-[90vh] min-w-full px-2 flex justify-center items-center">
                <Card className="w-full sm:w-2/4 h-2/3">
                    <CardBody className="overflow-hidden">
                        <Tabs
                            fullWidth
                            size="md"
                            aria-label="Tabs form"
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                        >
                            <Tab key="login" title="Login">
                                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <Input
                                        isRequired
                                        label="Username"
                                        placeholder="Enter your username"
                                        type="text"
                                        name={"username"}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        isRequired
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        name={"password"}
                                        onChange={handleChange}
                                    />
                                    <p className="text-center text-small">
                                        Need to create an account?{' '}
                                        <Link
                                            size="sm"
                                            className="hover:cursor-pointer"
                                            onPress={() => setSelected('sign-up')}
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                    <div className="flex gap-2 justify-end">
                                        <Button type={"submit"} fullWidth color="primary">
                                            Login
                                        </Button>
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="sign-up" title="Sign up">
                                <form className="flex flex-col gap-4 h-[300px]" onSubmit={handleSubmit}>
                                    <Input
                                        isRequired
                                        label="Username"
                                        placeholder="Enter your username"
                                        type="text"
                                        name={"username"}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        isRequired
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        name={"password"}
                                        onChange={handleChange}
                                    />
                                    <p className="text-center text-small">
                                        Already have an account?{' '}
                                        <Link
                                            size="sm"
                                            className="hover:cursor-pointer"
                                            onPress={() => setSelected('login')}
                                        >
                                            Login
                                        </Link>
                                    </p>
                                    <div className="flex gap-2 justify-end">
                                        <Button type={"submit"} fullWidth color="primary">
                                            Sign up
                                        </Button>
                                    </div>
                                </form>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </section>
        </main>
    );
}
