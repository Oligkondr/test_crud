import { Person } from 'react-bootstrap-icons';

export default function ShowBtn ({id}) {
    return (
        <a href={`/user/${id}`} title="Смотреть" className={'text-success'}>
            <Person/>
        </a>
    );
}
