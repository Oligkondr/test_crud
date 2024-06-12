import { PersonPlus } from 'react-bootstrap-icons';

export default function CreateBtn () {
    return (
        <a href="/user/create" title="Создать пользователя" className={'text-success'}>
            <PersonPlus/>
        </a>
    );
}
