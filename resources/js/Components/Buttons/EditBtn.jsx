import { PencilSquare } from 'react-bootstrap-icons';

export default function EditBtn ({id}) {
    return (
        <a href={`/user/${id}/edit`} title="Править" className={'text-primary'}>
            <PencilSquare/>
        </a>
    );
}
