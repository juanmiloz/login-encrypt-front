import React from 'react';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { User } from '@/interfaces/user.interface';

interface Props {
  user: User;
  onDelUser: (username: string) => void;
  onEditUser: (user: User) => void;
}

const CardUser: React.FC<Props> = ({ user, onDelUser, onEditUser }) => {
  const handlePress = () => {
    onDelUser(user.username);
  };

  const handleEdit = () => {
    onEditUser(user);
  };

  return (
    <Card className={'my-4 '}>
      <CardHeader>
        <div className={'flex flex-col'}>
          <p className="text-md font-semibold">{user.username}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody
        className={
          'flex flex-column gap-3 px-3 py-0 text-small text-default-400 p-2'
        }
      >
        <p>password: {user.password}</p>
        <p>
          last connection:{' '}
          {user.lastDate === null ? 'not yet connected' : user.lastDate}
        </p>
        <div className={'flex gap-1'}>
          <Button
            color="danger"
            radius="full"
            size={'sm'}
            onPress={handlePress}
          >
            Delete
          </Button>
          <Button
            color="secondary"
            radius="full"
            size={'sm'}
            onPress={handleEdit}
          >
            Change password
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardUser;
