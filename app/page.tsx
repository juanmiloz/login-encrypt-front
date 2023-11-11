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

export default function Home() {
    const [selected, setSelected] = useState('login');
    const [formData, setFormData] = useState({
        email: "",
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
            console.log("login")
        } else if (selected === "sign-up") {
            console.log("sign-up")
        }
        console.log(formData)
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
                                        label="Email"
                                        placeholder="Enter your email"
                                        type="email"
                                        name={"email"}
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
                                        label="Email"
                                        placeholder="Enter your email"
                                        type="email"
                                        name={"email"}
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
