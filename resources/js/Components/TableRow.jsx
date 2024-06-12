import EditBtn from '@/Components/Buttons/EditBtn.jsx';
import ShowBtn from '@/Components/Buttons/ShowBtn.jsx';
import DestroyBtn from '@/Components/Buttons/DestroyBtn.jsx';

export default function TableRow ({user}) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.birthday}</td>
            <td>
                <ShowBtn id={user.id}/>
                <EditBtn id={user.id}/>
                <DestroyBtn id={user.id}/>
            </td>
        </tr>
    );
}
