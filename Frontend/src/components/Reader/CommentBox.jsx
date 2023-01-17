import { Row } from "react-bootstrap";
import Comment from "./comment";

export default function CommentBox() {
    return (
        <Row>
            <div className="comments">
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="headings d-flex justify-content-between align-items-center mb-3">
                                <h5>Comments(6)</h5>
                               
                            </div>
                            <Comment image="https://i.imgur.com/hczKIze.jpg" userName="james_olesenn" content="Hmm, This Story looks cool" dateOfComment="2 days ago" />
                            <Comment image="https://i.imgur.com/C4egmYM.jpg" userName="olan_sams" content="Loving your work and profile!" dateOfComment="3 days ago" />
                            <Comment image="https://i.imgur.com/0LKZQYM.jpg" userName="rashida_jones" content="Really cool" dateOfComment="3 days ago" />
                            <Comment image="https://i.imgur.com/ZSkeqnd.jpg" userName="simona_rnasi" content="Waste of time!" dateOfComment="4 days ago" />
                        </div>
                    </div>
                </div>
            </div >
        </Row >
    );
}