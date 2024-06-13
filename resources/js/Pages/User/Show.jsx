import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import Title from '@/Components/Title.jsx';
import ListBtn from '@/Components/Buttons/ListBtn.jsx';
import EditBtn from '@/Components/Buttons/EditBtn.jsx';
import DestroyBtn from '@/Components/Buttons/DestroyBtn.jsx';
import TableRow from '@/Components/Show/TableRow.jsx';
import {Fragment} from 'react';

export default function Show ({ user }) {

    const keys = {
        id: 'ID',
        name: 'ФИО',
        gender: 'Пол',
        birthday: 'Дата рождения',
        email: 'E-mail',
    };

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Title title={`Пользователь #${user.id}`}/>
                </Col>
                <Col className={'text-end'}>
                    <ListBtn/>
                    <EditBtn id={user.id}/>
                    <DestroyBtn id={user.id}/>
                </Col>
            </Row>
            <Table striped>
                <tbody>
                {Object.keys(keys).map((key, index) => (
                    <Fragment key={index}>
                        <TableRow name={keys[key]} value={user[key]}/>
                    </Fragment>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}
