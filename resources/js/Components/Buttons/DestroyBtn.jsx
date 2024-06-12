import { Trash3 } from 'react-bootstrap-icons';

export default function DestroyBtn ({id}) {
    return (
        <span title="Удалить" className={'text-danger'}>
            <Trash3/>
        </span>
    );
}
