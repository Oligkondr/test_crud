import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import Title from '@/Components/Title.jsx';
import ListBtn from '@/Components/Buttons/ListBtn.jsx';
import { useState } from 'react';
import axios from 'axios';
import ErrorModal from '@/Components/Buttons/ErrorModal.jsx';

export default function Create () {

    const [errors, setErrors] = useState([]);
    const [show, setShow] = useState(false);
    const [post, setPost] = useState({
        name: '',
        email: '',
        gender: '',
        birthday: '',
        password: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    function handleSubmit (e) {
        e.preventDefault();
        axios.post('/user', { ...post })
            .then(response => {
                window.location.href = response.url;
            })
            .catch(err => {
                const errorArr = [];
                const errors = err.response.data.errors;
                for (const error in errors) {
                    for (const one of errors[error]) {
                        errorArr.push(one);
                    }
                }
                setErrors(errorArr);
                handleShow();
            });
    }

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Title title={'Создать пользователя'}/>
                </Col>
                <Col className={'text-end'}>
                    <ListBtn/>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control type="text" name="name" placeholder="ФИО" required onChange={handleInput}/>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Дата рождения</Form.Label>
                                    <Form.Control type="date" name="birthday" placeholder="Дата рождения" required
                                                  onChange={handleInput}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Пол</Form.Label>
                                    <Form.Check type="radio" name="gender" label="Мужской" value="Мужской"
                                                onChange={handleInput}/>
                                    <Form.Check type="radio" name="gender" label="Женский" value="Женский"
                                                onChange={handleInput}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="E-mail" required
                                          onChange={handleInput}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Пароль" required
                                          onChange={handleInput}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Создать
                </Button>
            </Form>

            <ErrorModal errors={errors} show={show} handleClose={handleClose}/>

        </Container>
    );
}
