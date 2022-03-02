import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import { useFormik, } from "formik"
import { PasswordItem, SignInOptions, TextItem } from '../../components';
import {useAccount} from '../../hooks'


export const SignInBox = (props: any) => {

    const account = useAccount();

    const validate = (values: any) => {
        const errors: any = {};

        if (!values.firstName) {
            errors.firstName = 'Zorunlu alan';
        }
        if (!values.lastName) {
            errors.lastName = 'Zorunlu alan';
        }
        if (!values.email) {
            errors.email = 'Zorunlu alan';
        }
        if (!values.password) {
            errors.password = 'Şifre 8 karakterden kısa olmamalı';
        }
        if (values.password !== values.passwordApprove) {
            errors.passwordApprove = 'Şifreler eşleşmiyor';
        }
        if (values.privarcyAgreement === false) {
            errors.privarcyAgreement = 'Gizlilik sözleşmesi onaylanmalı';
        }
        if (values.userAgreement === false) {
            errors.userAgreement = 'Kullanıcı sözleşmesi onaylanmalı';
        }

        return errors;
    }



    const { handleSubmit, handleChange, setFieldValue, setValues, values, errors } = useFormik<any>({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            passwordApprove: "",
            privarcyAgreement: false,
            userAgreement: false
        },
        validate,
        onSubmit: values => {
            account.register(values);
            console.log("SUBMIT : ", values);
        },
    });


    return (

        <main className="login-page">

            <section className="form-shared padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="billing-form-item mb-0">
                                <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                                    <h3 className="widget-title font-size-28 pb-0">
                                        Foodpedi
                                    </h3>
                                    <p className="font-size-16 font-weight-medium">
                                        Kullanıcı Kayıt Formu
                                    </p>
                                </div>
                                <div className="billing-content">
                                    <div className="contact-form-action">
                                        
                                        <div className="row">

                                        <form onSubmit={handleSubmit} >

                                            <TextItem handleChange={handleChange} icon={<AiOutlineUserAdd />} fieldName="firstName" value={values.firstName} error={errors.firstName} placeholder="İsminizi giriniz..." colMd={12} />
                                            <TextItem handleChange={handleChange} icon={<AiOutlineUserAdd />} fieldName="lastName" value={values.lastName} error={errors.lastName} placeholder="Soyisminizi giriniz..." colMd={12} />
                                            <TextItem handleChange={handleChange} icon={<AiOutlineUser />} fieldName="username" value={values.username} error={errors.username} placeholder="Kullanıcı adınızı giriniz..." colMd={12} />
                                            <TextItem handleChange={handleChange} icon={<FaRegEnvelope />} fieldName="email" value={values.email} error={errors.email} placeholder="E posta adresinizi giriniz..." colMd={12} />
                                            <PasswordItem handleChange={handleChange} icon={<FiLock />} fieldName="password" value={values.password} error={errors.password} placeholder="Şifre giriniz..." colMd={12} />
                                            <PasswordItem handleChange={handleChange} icon={<FiLock />} fieldName="passwordApprove" value={values.passwordApprove} error={errors.passwordApprove} placeholder="Şifreyi tekrar giriniz..." colMd={12} />

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="custom-checkbox d-block mr-0">
                                                        <input type="checkbox" id="chb13" name="privarcyAgreement" value={values.privarcyAgreement} onChange={handleChange} />
                                                        <label htmlFor="chb13"><Link to="#" className="color-text">Gizlilik Sözleşmesini</Link> onaylıyorum</label>
                                                        <div style={{ color: "maroon" }}>{errors.privarcyAgreement}</div>
                                                    </div>
                                                    
                                                    <div className="custom-checkbox d-block mr-0">
                                                        <input type="checkbox" id="chb14" name="userAgreement" value={values.userAgreement} onChange={handleChange} />
                                                        <label htmlFor="chb14"><Link to="#" className="color-text">Kullanım Şartlarını</Link>  onaylıyorum</label>
                                                        <div style={{ color: "maroon" }}>{errors.userAgreement}</div>
                                                    </div>
                                                 
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-12">
                                                <div className="btn-box margin-top-20px margin-bottom-20px">
                                                    <button className="theme-btn border-0" type="submit">
                                                        Kayıt Ol
                                                    </button>
                                                </div>
                                            </div>
                                            </form>

                                            <div className="col-lg-12">
                                                <div className="account-assist mt-4 mb-4 text-center">
                                                    <p className="account__desc">veya</p>
                                                </div>
                                            </div>

                                            <SignInOptions />
                                            <div className="col-lg-12">
                                                <p className="font-weight-medium">
                                                    Hesabınız var mı? <Link to="/login" className="color-text">Giriş Yap</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}

