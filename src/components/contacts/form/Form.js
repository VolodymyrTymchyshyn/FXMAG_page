import "./Form.css"
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { useState } from 'react';


const MyTextInput = ({ lable, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-item">
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : <div className="error" style={{ 'color': "#272B37" }} />}
            <label htmlFor={props.name}>{lable}</label>
            <Field {...props} {...field} />
        </div>
    );
};

export default function FormInput() {
    const [confirmForm, setConfirmForm] = useState(false);
    const comfirmClass = confirmForm ? <div className="form-answer contacts-main_text">Twoja wiadomość<br /> została wysłana</div>
        : <Form className="form">
            <div className="form-main">
                <MyTextInput placeholder="Imię" id="name" name="name" type="text" />
                <MyTextInput placeholder="Email" id="email" name="email" type="email" />
                <MyTextInput placeholder="Telefon" id="phone" name="phone" type="string" />
            </div>
            <MyTextInput
                placeholder="Treść wiadomości"
                id="text"
                name="text"
                as="textarea"
                rows="10" cols="30"
            />
            <div className="form-confirm">
                <label className="checkbox">
                    <Field name="terms" type="checkbox" />
                    <div className="small-text-contacts">
                        Wysyłając wiadomość akceptujesz potwierdzenie danych przez<br /> spółkę FxMag Sp z.o.o
                    </div>
                    <ErrorMessage className="error" name="terms" component="div" />
                </label>

                <button type="submit" className="confirm">WYSLIJ</button>
            </div>
        </Form>

    const phoneRegExp = "^\\+[0-9]*"
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                text: "",
                terms: false,
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, "Minimum 2 symbols")
                    .required("Required field"),
                email: Yup.string()
                    .email("Bad Email")
                    .required("Required field"),
                phone: Yup.string()
                    .matches(phoneRegExp, 'Phone number is not valid')
                    .required("Required field"),
                terms: Yup.boolean("Required")
                    .required("Required")
                    .oneOf([true], "Required"),
            })}
            onSubmit={() => setConfirmForm(true)}
        >
            {comfirmClass}
        </Formik>
    )
}