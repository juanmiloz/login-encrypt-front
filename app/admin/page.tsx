'use client';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {CRUDService} from "@/src/service/axios";
import Swal from "sweetalert2";
import {User} from "@/interfaces/user.interface";
import CardUser from "@/components/CardUser";

const MyComponent = () => {
    const [users, setUsers] = useState([]);
    const [changeUser, setChangeUser] = useState<User>({
        username: "",
        password: "",
        lastDate: "",
        roleId: ""
    });
    // const router = useRouter()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const getPersons = async () => {
        try {
            const config = CRUDService.getHeaderConfig();
            const response = await axios.get('http://localhost:8080/user', config)
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getPersons();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setChangeUser({
            ...changeUser,
            password: value,
        });
    };


    const deleteUser = (username: string): void => {
        const config = CRUDService.getHeaderConfig();
        axios.delete('http://localhost:8080/user/' + username, config).then(() => {
            getPersons()
        })
    }

    const editUser = (user: User) => {
        const copyUser: User = {...user}
        copyUser.password = ""
        setChangeUser(copyUser)
        onOpen();
    }

    const saveNewPassword = () => {
        const config = CRUDService.getHeaderConfig();
        console.log(changeUser)
        axios.put('http://localhost:8080/user', changeUser, config).then(() => {
            Swal.fire({
                icon: "success",
                title: "successful updated",
                text: "The user was successfully updated"
            });
            getPersons()
        })
    }

    return (
        <div>
            <div className={'grid grid-cols-4 gap-4 p-2'}>
                {users.map((user: User) =>
                    <CardUser user={user} onDelUser={deleteUser} onEditUser={editUser} key={user.username}/>
                )}
            </div>
            <Modal
                isOpen={isOpen}
                backdrop={'blur'}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{changeUser.username}</ModalHeader>
                            <ModalBody>
                                <Input
                                    label="New password"
                                    placeholder="Enter your new password"
                                    type="password"
                                    variant="bordered"
                                    name={'password'}
                                    onChange={handleChange}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => {
                                    saveNewPassword();
                                    onClose()
                                }}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default MyComponent;
