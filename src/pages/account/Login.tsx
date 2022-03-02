import React from 'react';
import {LoginBox} from "../../components";
import {useAccount} from '../../hooks'


export const Login = () => {
    const account = useAccount();

    return (
        <main className="login-page">
        
            <section className="form-shared padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <LoginBox title="Giriş Yapınız" subtitle="" handleLogin={account.Login}
                             />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
