import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useDispatch} from 'react-redux';
import {editUser} from "../../store/slices/userSlice.js";
import "./editUserForm.scss"
const EditUserForm = ({userInfo}) => {
    const dispatch = useDispatch();

    const initialValues = {
        discordNickname: userInfo && userInfo.discordNickname ||'',
        sex: userInfo &&userInfo.sex || '',
        dateOfBirth:userInfo && userInfo.dateOfBirth && userInfo.dateOfBirth.substring(0,10) || '',
        favouriteGenre: userInfo &&userInfo.favouriteGenre || 'Action',
        additionalInfo:userInfo && userInfo.additionalInfo || '',
    };
    const validateForm = (values) => {
        const errors = {};

        if (!values.discordNickname) {
            errors.discordNickname = 'Discord Nickname is required';
        }

        return errors;
    };

    const handleSubmit = (values) => {
        dispatch(editUser(values))
    };

    return (
        <Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
            <Form className="registration-form">
                <h2>Редагування профілю</h2>

                <div className="form-group">
                    <label htmlFor="discordNickname" className="required">Діскорд нікнейм</label>
                    <Field type="text" id="discordNickname" name="discordNickname" className="form-control"/>
                    <ErrorMessage name="discordNickname" component="div" className="error"/>
                </div>

                <div className="form-add-vals">
                    <div className="form-group">
                        <label htmlFor="sex">Стать</label>
                        <Field as="select" id="sex" name="sex" className="form-control">
                            <option value="">Не важливо</option>
                            <option value="чоловіча">Чоловіча</option>
                            <option value="жіноча">Жіноча</option>
                        </Field>
                        <ErrorMessage name="sex" component="div" className="error"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Дата народження</label>
                        <Field type="date" id="dateOfBirth" name="dateOfBirth" className="form-control"/>
                        <ErrorMessage name="dateOfBirth" component="div" className="error"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="favouriteGenre">Улюблений жанр</label>
                        <Field as="select" id="favouriteGenre" name="favouriteGenre" className="form-control">
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="rpg">RPG</option>
                            <option value="strategy">Strategy</option>
                            <option value="sports">Sports</option>
                        </Field>
                        <ErrorMessage name="favouriteGenre" component="div" className="error"/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="additionalInfo">Додаткова інформація</label>
                    <Field as="textarea" id="additionalInfo" name="additionalInfo" className="form-control--textarea"/>
                    <ErrorMessage name="additionalInfo" component="div" className="error"/>
                </div>

                <button type="submit" className="btn btn-primary">
                    Редагувати
                </button>
            </Form>
        </Formik>
    );
};

export default EditUserForm;