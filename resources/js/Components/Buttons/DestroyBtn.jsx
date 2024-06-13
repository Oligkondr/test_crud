import { Trash3 } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/react';

export default function DestroyBtn ({id}) {
    return (
        <Link href={`/user/${id}`} metod={'delete'} title="Удалить" className={'text-danger ml-2 fs-5'}>
            <Trash3 className={'d-inline'}/>
        </Link>
    );
}
