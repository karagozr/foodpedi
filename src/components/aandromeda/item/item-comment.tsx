import React from 'react'
import PropTypes from 'prop-types'
import ListingDetailsComments from '../../contact/ListingDetailsComments'

import sectiondata from "../../../store/store";
import { useParams } from 'react-router-dom';
import { ItemCommendList } from './item-comment-list';


export const ItemComment = () => {

    

    
   

    const comments = [{
        id:"asasasas",
        userImg:"",
        username: "ramkar",
        fullname:"Ramzan Kargz",
        commentDate: (new Date()).toLocaleString("tr"),
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus",
        rate: 3.6,
        replyComments:[
            {id:"sdfdsfsdf",
            userImg:"",
            username: "felandd",
            fullname:"dsfsdf Kargz",
            commentDate: (new Date()).toLocaleString("tr"),
            comment: "Lorem ipsum gsdfkg gfdhsgofdoh s",
            rate: 3.6,},
            {id:"ddsdsdds",
            userImg:"",
            username: "XXXXX",
            fullname:"RRRRR Kargz",
            commentDate: (new Date()).toLocaleString("tr"),
            comment: "Lorem gfdgfdfsd gsdfkg gfdhsgofdoh s",
            rate: 3.6,}
        ]

   },{
    id:"asasadsdsas",
    userImg:"",
    username: "user677",
    fullname:"İrfan cukur",
    commentDate: (new Date()).toLocaleString("tr"),
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus",
    rate: 4.6,
    replyComments:[]

}

]

    return (
        <div className="comments-wrap">
            <h2 className="widget-title">{2} Yorum</h2>
            <div className="title-shape"></div>
            <ItemCommendList />
        </div>
    )
}

