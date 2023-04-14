import React, {useState} from 'react';
import styles from "./Header.module.css";
import {Button, Input, Modal, Typography} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleButtonClick = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleSendClick = async () => {
        return await axios.post(
            "https://api.avavion.ru/api/applications/create",
            {
                email: email,
                first_name: first_name,
                last_name: last_name,
                message: message,
                product_id: 1,
            }
        );
    }

    return (
        <>
            <header className={styles.header}>
                <Link to={"/"} className={styles.logoWrapper}>
                    <Typography.Title level={2}>WeAreBuilding</Typography.Title>
                </Link>
                <nav className={styles.menu}>
                    <Button type="primary" onClick={handleButtonClick}>
                        Оставить заявку
                    </Button>
                    
                </nav>
            </header>
            <Modal
                title={"Оставить заявку"}
                open={isOpen}
                onCancel={handleCloseModal}
            >
                <div className={styles.form}>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Введите почту"}
                        type={"text"}
                    />
                    <Input
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={"Введите имя"}
                        type={"text"}
                    />
                    <Input
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={"Введите фамилию"}
                        type={"text"}
                    />
                    <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={"Введите сообщение"}
                        type={"text"}
                    />
                    <Button type={"primary"} onClick={handleSendClick}>
                        Отправить
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default Header;
