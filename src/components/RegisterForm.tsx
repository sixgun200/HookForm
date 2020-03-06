import React, { useState } from 'react';
import styles from './RegisterForm.module.css';

interface RegisterFormProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const RegisterForm: React.FC<RegisterFormProps> = props => {
    const [formState, setFormState] = React.useState<RegisterFormProps>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeHandler = (event:any) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault();
        console.log(formState);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>First Name</label>
                <input className={styles.formInputBox} type="text" name="firstName" onChange={onChangeHandler} />
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>Last Name</label>
                <input  className={styles.formInputBox} type="text" name="lastName" onChange={onChangeHandler} />
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>E-mail</label>
                <input  className={styles.formInputBox} type="email" name="email" onChange={onChangeHandler} />
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>Password</label>
                <input  className={styles.formInputBox} type="password" name="password" onChange={onChangeHandler} />
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>Confirm Password</label>
                <input  className={styles.formInputBox} type="password" name="confirmPassword" onChange={onChangeHandler} />
                </span>
                <br/>
                <input type="submit" />
            </form>
            <h5>Your Form Data</h5>
            <h5>First Name: {formState.firstName}</h5>
            <h5>Last Name: {formState.lastName}</h5>
            <h5>Email: {formState.email}</h5>
            <h5>Password: {formState.password}</h5>
            <h5>Confirm Password: {formState.confirmPassword}</h5>
        </div>
    )
}

export default RegisterForm;
