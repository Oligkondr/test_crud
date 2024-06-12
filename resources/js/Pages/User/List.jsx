import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import Title from '@/Components/Title.jsx';
import CreateBtn from '@/Components/Buttons/CreateBtn.jsx';
import TableRow from '@/Components/TableRow.jsx';

function List ({users}) {
    console.log(users);
    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Title title={'Список пользователей'}/>
                </Col>
                <Col className={'text-end'}>
                    <CreateBtn url={'abc'}/>
                </Col>
            </Row>
            <Table striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>ФИО</th>
                    <th>Пол</th>
                    <th>Дата рождения</th>
                    <th>E-mail</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.data.map(user => (
                    <TableRow user={user}/>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default List;
