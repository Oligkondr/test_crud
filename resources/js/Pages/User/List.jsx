import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import Title from '@/Components/Title.jsx';
import CreateBtn from '@/Components/Buttons/CreateBtn.jsx';
import TableRow from '@/Components/List/TableRow.jsx';
import ShowBtn from '@/Components/Buttons/ShowBtn.jsx';
import EditBtn from '@/Components/Buttons/EditBtn.jsx';
import DestroyBtn from '@/Components/Buttons/DestroyBtn.jsx';

export default function List ({users}) {
    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Title title={'Список пользователей'}/>
                </Col>
                <Col className={'text-right mr-2'}>
                    <CreateBtn/>
                </Col>
            </Row>
            <Table striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>ФИО</th>
                    <th>E-mail</th>
                    <th>Пол</th>
                    <th>Дата рождения</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, i) => (
                    <TableRow key={i} user={user}/>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}
