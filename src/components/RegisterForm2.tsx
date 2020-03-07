import React, { useState } from 'react';
import styles from './RegisterForm.module.css';
// import { format } from 'path';

interface RegisterForm2Props {
    firstName: string;
    fnError: string;
    lastName: string;
    lnError: string;
    email: string;
    emError: string;
    password: string;
    pwError: string;
    confirmPassword: string;
    cpError: string;
}
const RegisterForm2: React.FC<RegisterForm2Props> = props => {
    const [form, setForm] = React.useState<RegisterForm2Props>({
        firstName: "",
        fnError: "",
        lastName: "",
        lnError: "",
        email: "",
        emError: "",
        password: "",
        pwError: "",
        confirmPassword: "",
        cpError: ""
    })

    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    
    const onBlurFName = (event:React.FocusEvent<HTMLInputElement>) => {
        if (form.firstName.length < 2) {
            setForm({...form, fnError: "First name must be at least 2 characters in length."});
        }
        else
        {
            setForm({...form, fnError: ""});
        }
    }

    const onBlurLName = (event:React.FocusEvent<HTMLInputElement>) => {
        if (form.lastName.length < 2) {
            setForm({...form, lnError: "Last name must be at least 2 characters in length."});
        }
        else
        {
            setForm({...form, lnError: ""});
        }
    }

    const onBlurEmail = (event:React.FocusEvent<HTMLInputElement>) => {
        if (form.email.length < 2) {
            setForm({...form, emError: "E-mail must be at least 2 characters in length."});
        }
        else
        {
            setForm({...form, emError: ""});
        }
    }

    const onBlurPassword = (event:React.FocusEvent<HTMLInputElement>) => {
        if (form.password.length < 8) {
            setForm({...form, pwError: "Password must be at least 8 characters in length."});
        }
        else
        {
            setForm({...form, pwError: ""});
        }
    }

    const onBlurCPassword = (event:React.FocusEvent<HTMLInputElement>) => {
        if (form.confirmPassword !== form.password) {
            setForm({...form, cpError: "Passwords do not match."});
        }
        else
        {
            setForm({...form, cpError: ""});
        }
    }

    const onSubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>First Name</label>
                <input className={styles.formInputBox} type="text" name="firstName" onChange={onChangeHandler} value={form.firstName} onBlur={onBlurFName} />
                {form.fnError && <span className={styles.errorMsg}>{form.fnError}</span>}
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>Last Name</label>
                <input  className={styles.formInputBox} type="text" name="lastName" onChange={onChangeHandler} value={form.lastName} onBlur={onBlurLName} />
                {form.lnError && <span className={styles.errorMsg}>{form.lnError}</span>}
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>E-mail</label>
                <input  className={styles.formInputBox} type="email" name="email" onChange={onChangeHandler} value={form.email} onBlur={onBlurEmail} />
                {form.emError && <span className={styles.errorMsg}>{form.emError}</span>}
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>Password</label>
                <input  className={styles.formInputBox} type="password" name="password" onChange={onChangeHandler} value={form.password} onBlur={onBlurPassword} />
                {form.pwError && <span className={styles.errorMsg}>{form.pwError}</span>}
                </span>
                <br/>
                <span className={styles.formLabelBox}>
                <label className={styles.formLabel}>Confirm Password</label>
                <input  className={styles.formInputBox} type="password" name="confirmPassword" onChange={onChangeHandler} value={form.confirmPassword} onBlur={onBlurCPassword} />
                {form.cpError && <span className={styles.errorMsg}>{form.cpError}</span>}
                </span>
                <br/>
                <button className={styles.buttonStyle} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm2;
