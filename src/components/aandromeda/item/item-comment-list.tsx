import React from 'react';
import { FiThumbsUp, FiRefreshCw } from 'react-icons/fi'
import { FaRegSmile } from 'react-icons/fa'
import Button from "../../common/Button";
import SectionDivider from "../../common/SectionDivider";
import { Link, useParams } from "react-router-dom";
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';
import { RiDeleteBack2Line, RiEditLine, RiMailSendFill, RiQuestionAnswerFill, RiMessage2Line, RiReplyAllLine, RiReplyLine, RiSave2Fill, RiSaveLine, RiSendBackward, RiSendPlane2Fill, RiShieldCrossLine } from 'react-icons/ri';
import { parse } from 'path';
import { parseInt, round } from 'lodash';
import { BsPencil } from 'react-icons/bs';
import { useFormik, useField } from "formik"
import { CommentType, useAccount, useComments } from '../../../hooks';

export interface IItemCommentList {
    comments: Array<IItemComment>,
    addComment: Function
}

export interface IItemComment {
    id: string,
    userId?: string,
    userImg?: string,
    userName?: string,
    fullName?: string,
    commentDate?: string,
    comment: string,
    rate: number,
    replyComments?: Array<IItemComment>

}

type ReplyType = {
    id: string,
    parentId: string,
    replyRate: number,
    replyComment: string
}

export const ItemCommendList = () => {
    const { itemId } = useParams<string>();
    const [activeReply, setActiveReply] = React.useState<string>("-1");
    const [activeEditComment, setActiveEditComment] = React.useState<string>("-1");

    const [activeNewComment, setActiveNewComment] = React.useState<boolean>(false);

    const account = useAccount();
    const comment = useComments();
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        fetchCommentsData();
    }, []);

    const fetchCommentsData = async () => {
        var res = await comment.getParentComments(itemId);
        setComments(res);
    }

    const fetchAddCommentsData = async (comment: any) => {
        console.log('fetchAddCommentsData : ', { ...comment, itemId });
        var res = await comment.editComment(comment);
        console.log('fetchAddCommentsData res : ', res);
    }

    const commentRate = (rate: number) => {

        let arr = [];

        for (var i = 0; i < 5; i++) {
            if (rate - i >= 1) arr.push(3)
            else if (rate - i >= 0.5) arr.push(2)
            else arr.push(1);
        }

        return (
            <React.Fragment>
                {arr.map((num, index) => (
                    num === 3 ? <span key={index} className="la la-star"><MdStar /></span> :
                        (num === 2 ? <span key={index} className="la la-star"><MdStarHalf /></span> :
                            <span key={index} className="la la-star"><MdStarOutline /></span>)
                ))}
            </React.Fragment>
        )
    }

    const addReplyComment = (id: string) => {
        setActiveReply(id);
    }

    const saveComment = async (params: CommentType) => {
        await comment.editComment({ ...params, itemId });
        setActiveNewComment(false);
    }

    const cancelComment = (e: ReplyType) => {
        console.log("sasdasd : ", e);
        setActiveNewComment(false);
    }

    const saveReply = (e: ReplyType) => {
        console.log("sasdasd : ", e)
    }

    const getReplies = (e: string) => {
        console.log("sasdasd : ", e)
    }

    return (
        <>
            <div className="comment">
                <div className="comment-body">

                    {activeNewComment && <EditComment comment={""} rate={3} id={"-1"} saveComment={saveComment} cancelComment={cancelComment} />}
                </div>

            </div>
            <div className="comment">
                <ul className="comments-list padding-top-40px">

                    <div className="comment-body">
                        {comments.map(({ userImg, userName, fullName, commentDate, comment, rate, id, replyComments }, i: number) => {
                            return (
                                <li>
                                    <div key={i}>

                                        {userImg && <img className="avatar__img" alt="Comment" src={userImg} />}

                                        {
                                            id !== activeEditComment ?
                                                <React.Fragment>
                                                    <div className="meta-data">
                                                        <span className="comment__author">
                                                            {userName}
                                                        </span>

                                                        {/* Yorum yıldızı */}
                                                        <div className="rating-rating">
                                                            {commentRate(rate)}
                                                        </div>
                                                    </div>
                                                    <p className="comment-content">
                                                        {comment}
                                                    </p>
                                                    <span className="comment__date">
                                                        {(new Date(commentDate)).toLocaleString("tr")}
                                                    </span>
                                                </React.Fragment> : <EditComment comment={comment} rate={rate} id={id} saveComment={saveComment} />

                                        }
                                        <div className="comment-reply d-flex justify-content-between align-items-center">
                                            {/* Yoruma Cevap */}
                                            {
                                                (id !== activeReply && false) &&
                                                <Link className="theme-btn comment__btn" to="#"
                                                    onClick={e => addReplyComment(id)} >
                                                    <i className="la d-inline-block"><RiReplyLine /></i> Yanıtla
                                                </Link>
                                            }

                                            {false && <Link className="theme-btn comment__btn" to="#" style={{ color: "#2874e5" }}
                                                onClick={e => getReplies(id)} >
                                                <i className="la d-inline-block"><RiQuestionAnswerFill /></i>
                                            </Link>}

                                            {(account.user.username === userName && id !== activeEditComment) && <Link className="theme-btn comment__btn" to="#" style={{ color: "#08ad3b" }}
                                                onClick={e => setActiveEditComment(id)} >
                                                <i className="la d-inline-block"><RiEditLine /></i> Düzenle
                                            </Link>}

                                            {/* Yorum Durumu */}
                                        </div>
                                        {
                                            id === activeReply &&
                                            <ReplyCommet cancelReply={(e: any) => addReplyComment("-1")}
                                                saveReply={(e: any) => saveReply(e)} />
                                        }


                                        <SectionDivider />
                                    </div>
                                </li>
                            )
                        })}

{!activeNewComment && <div className="comment-reply d-flex justify-content-between align-items-center">
                        <Link className="theme-btn comment__btn" to="#" onClick={e => setActiveNewComment(true)}>
                            <i className="la d-inline-block"><RiMessage2Line /></i> Yorum Ekle
                        </Link>
                    </div>}
                    </div>

                   

                </ul>





            </div>



        </>
    );
}

const ReplyCommet = ({ cancelReply, saveReply }: any) => {

    const [reply, setReply] = React.useState<ReplyType>({ replyRate: 3, replyComment: "", parentId: "sss", id: "" });

    const addCommentRate = (rate: number) => {
        setReply({ ...reply, replyRate: rate });
    }

    return (

        <div className='row'>
            <SectionDivider />
            <div className="col-lg-12">
                <div className="input-box">
                    <label className="label-text">Yanıtınız</label>
                    <div className="form-group">
                        <span className="la form-icon"><BsPencil /></span>
                        <textarea className="message-control form-control" name="message" placeholder="Mesajınız"
                            onChange={(e: any) => setReply({ ...reply, replyComment: e.target.value })}>
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className="comment-reply d-flex justify-content-between align-items-center" >

                    {/* Yorum Durumu */}
                    {/* <p className="feedback-box">
                        Yorumu oyla :

                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(1)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.replyRate >= 1 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(2)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.replyRate >= 2 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(3)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.replyRate >= 3 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(4)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.replyRate >= 4 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(5)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.replyRate === 5 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                    </p> */}
                </div>
            </div>

            <div className="col-4" >
                <div className='comment-reply d-flex justify-content-between align-items-center'>
                    <Link className="theme-btn comment__btn" to="#" style={{ float: 'right' }} onClick={cancelReply}>
                        <i className="la d-inline-block"></i> İptal
                    </Link>
                    <Link className="theme-btn comment__btn" to="#" style={{ float: 'right', color: "#08ad3b" }} onClick={e => saveReply(reply)}>
                        <i className="la d-inline-block"><RiSendPlane2Fill /></i> Gönder
                    </Link>

                </div>


            </div>
            <SectionDivider />
        </div>)
}

const EditComment = ({ id, rate, comment, cancelComment, saveComment }: any) => {

    const [reply, setReply] = React.useState<CommentType | any>({ id, rate, comment });

    const addCommentRate = (rate: number) => {
        setReply({ ...reply, rate: rate });
    }

    return (

        <div className='row'>
            <SectionDivider />
            <div className="col-lg-12">
                <div className="input-box">
                    <label className="label-text">Mesajınız</label>
                    <div className="form-group">
                        <span className="la form-icon"><BsPencil /></span>
                        <textarea className="message-control form-control" name="message" placeholder="Mesajınız" value={reply.comment}
                            onChange={(e: any) => setReply({ ...reply, comment: e.target.value })}>
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="comment-reply d-flex justify-content-between align-items-center" >

                    {/* Yorum Durumu */}
                    <p className="feedback-box">
                        Oyla :

                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(1)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.rate >= 1 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(2)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.rate >= 2 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(3)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.rate >= 3 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(4)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.rate >= 4 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                        <a type="button" className="comment__btn" onClick={(e: any) => addCommentRate(5)} style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            <i className="la d-inline-block">
                                {reply.rate === 5 ? <MdStar /> : <MdStarOutline />}
                            </i>
                        </a>
                    </p>
                </div>
            </div>

            <div className="col-6" >
                <div className='comment-reply d-flex justify-content-between align-items-center'>
                    <Link className="theme-btn comment__btn" to="#" style={{ float: 'right' }} onClick={cancelComment}>
                        <i className="la d-inline-block"></i> İptal
                    </Link>
                    <Link className="theme-btn comment__btn" to="#" style={{ float: 'right', color: "#08ad3b" }} onClick={e => saveComment(reply)}>
                        <i className="la d-inline-block"><RiSendPlane2Fill /></i> Gönder
                    </Link>

                </div>

            </div>
            <SectionDivider />
        </div>)
}