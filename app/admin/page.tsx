'use client';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardUser from "@/src/components/CardUser";
import {User} from "@/src/interfaces/user.interface";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import {CRUDService} from "@/src/service/axios";
import Swal from "sweetalert2";

const MyComponent = () => {
    const [users, setUsers] = useState([]);
    const [changeUser , setChangeUser ] = useState<User>({
        username:"",
        password:"",
        lastDate:"",
        roleId:""
    });
    // const router = useRouter()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const getPersons = async () =>{
        try{
            const config = CRUDService.getHeaderConfig();
            const response = await axios.get('http://localhost:8080/user', config)
            setUsers(response.data)
        }catch (e){
            console.log(e)
        }
    }
  };

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
    axios.delete('http://localhost:8080/user/' + username).then(() => {
      getPersons();
    });
  };

  const editUser = (user: User) => {
    setChangeUser(user);
    onOpen();
  };

    const deleteUser = (username:string):void =>{
        const config = CRUDService.getHeaderConfig();
        axios.delete('http://localhost:8080/user/'+username, config).then(()=>{
            getPersons()
        })
    }

    const editUser = (user:User) => {
        setChangeUser(user)
        onOpen();
    }

    const saveNewPassword = () =>{
        const config = CRUDService.getHeaderConfig();
        console.log(changeUser)
        axios.put('http://localhost:8080/user', changeUser, config).then(()=>{
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
                {users.map((user:User)=>
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
                                <Button color="primary" onPress={()=>{
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
