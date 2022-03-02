import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import axios from 'axios'
import { useFormik, useField } from "formik"
import { PasswordItem, SignInBox, TextItem } from '../../components';

export const NewAccount = (props: any) => {

    


    return (

        <main className="login-page">

            <SignInBox/>

        </main>

    )
}

