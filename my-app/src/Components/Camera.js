import React, {Component,Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imagePlaceholder from '../Assets/image/imagePlaceholder.svg'
import Webcam from "react-webcam";


class Camera extends Component {
    constructor() {
        super();
        this.cameraRef=React.createRef();

        this.state={
            capturePhoto:imagePlaceholder,

        }

    }


    onCapture=()=>{
        let PhotoBas64 = this.cameraRef.current.getScreenshot();
        this.setState({capturePhoto:PhotoBas64})


    }


    onSave=()=>{

        let base64String= this.state.capturePhoto;

        let a= document.createElement("a");
        a.href=base64String;
        a.download="webcame.png";
        a.click()

    }



    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-5 shadow-sm bg-white" >
                        <Col className="p-2" md={6} sm={12} lg={6} >
                            <Webcam
                                ref={this.cameraRef}
                                audio={false}
                                screenshotFormat="image/jpeg"
                                className='w-100 '

                            />
                            <button onClick={this.onCapture} className="btn btn-primary">Capture</button>
                        </Col>
                        <Col className="p-2" md={6} sm={12} lg={6} >
                            <img className='w-100 '  src={this.state.capturePhoto} />
                            <button onClick={this.onSave} className="btn btn-primary">Save</button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Camera;