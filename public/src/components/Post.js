
import { Avatar } from "@material-ui/core";
import React ,{ useEffect ,useState}from "react";
import "./Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import { selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import db from "../firebase";
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase";
import "./QHeader.css";
Modal.setAppElement('#root');



function Post({Id,question ,image ,timestamp, users}) {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);

  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
        );
    }
  }, [questionId]);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").add({
        user: user,
        answer: answer,
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  
    console.log(questionId);
    setAnswer("");
    setOpenModal(false);
  };
  
  return (
    <div className="post" 
    onClick={() =>
      dispatch(
        setQuestionInfo({
          questionId: Id,
          questionName: question,
        })
      )
    }
  >
      <div className="post__info">
        <Avatar
        src={
          users.photo
            ? users.photo
            : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
        }
      />
        
        <h5>{users.displayName ? users.displayName : users.email}
        </h5>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div> 
      <div className="post__body">
        <div className="post__question">
          <p>{question}</p>
          <button
          onClick={() => setOpenModal(true)}
            className="post__btnAnswer" >
            Answer
          </button>
          <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
      
          <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            
            </div>
        
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleAnswer} className="add">
              Add answer
            </button>
          </div>
        </Modal>
      
          </div>
          </div>
          <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
          <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
          {Id === answers.questionId ? (
            <span>
              {answers.answer}
              <br/>
              <span
                style={{
                  position: "absolute",
                  color: "gray",
                  fontSize: "small",
                  display: "flex",
                  right: "0px",
                }}
              >
                <span style={{ color: "#b92b27" }}>
                  {answers.user.displayName
                    ? answers.user.displayName
                    : answers.user.email}{" "}
                  on{" "}
                  {new Date(answers.timestamp?.toDate()).toLocaleString()}
                </span>
              </span>
            </span>
          ) : (
            ""
          )}
        </p>
      ))}
    </div>
    <img src={image} alt="" />
   
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
</div>
  );
  }
export default Post;