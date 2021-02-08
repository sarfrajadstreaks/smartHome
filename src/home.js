import React, {Component} from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
const data={
    "room1":{
        "light":true,
        "fan":false
    },
    "room2":{
        "light":true,
        "fan":false
    },
    "room3":{
        "light":true,
        "fan":false
    },
    "room4":{
        "light":true,
        "fan":false
    }
}
class Home extends React.Component {
    constructor(init){
        super(init);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({target}){
        var room=target.getAttribute('dataid');
        var eleComp=(target.id).replace(room,"").replace('.','');
        data[room][eleComp]=target.checked;
        this.render()
        console.log(data)
    }
    render = () => {
          return (
        <div>
            <Container>
                <Row>
                    <div style={{ marginTop: 3 + 'em' }}></div>
                </Row>
                <Row>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Title>Room ONE</Card.Title>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox'  onClick={this.handleChange} className='custom-control-input' dataid="room1" id='room1.light' defaultChecked={data.room1.light}/>
                                    <label className='custom-control-label' htmlFor='room1.light'>
                                        TubeLight</label>
                                </div>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox' onClick={this.handleChange} className='custom-control-input' dataid="room1" id='room1.fan' defaultChecked={data.room1.fan} />
                                    <label className='custom-control-label' htmlFor='room1.fan'>
                                        Celing Fan</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Room TWO</Card.Title>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox' onClick={this.handleChange} className='custom-control-input' dataid="room2" id='room2.light' defaultChecked={data.room2.light}/>
                                    <label className='custom-control-label' htmlFor='room2.light'>
                                        TubeLight</label>
                                </div>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox' onClick={this.handleChange} className='custom-control-input'  dataid="room2" id='room2.fan' defaultChecked={data.room2.fan}/>
                                    <label className='custom-control-label' htmlFor='room2.fan'>
                                        Celing Fan</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Room THREE</Card.Title>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox' onClick={this.handleChange} className='custom-control-input'  dataid="room3"  id='room3.light' defaultChecked={data.room3.light}/>
                                    <label className='custom-control-label' htmlFor='room3.light'>
                                        TubeLight</label>
                                </div>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox' onClick={this.handleChange} className='custom-control-input'  dataid="room3" id='room3.fan' defaultChecked={data.room3.fan} />
                                    <label className='custom-control-label' htmlFor='room3.fan'>
                                        Celing Fan</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Room FOUR</Card.Title>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox' onClick={this.handleChange} className='custom-control-input' dataid="room4" id='room4.light' defaultChecked={data.room4.light}/>
                                    <label className='custom-control-label' htmlFor='room4.light'>
                                        TubeLight</label>
                                </div>
                                <div className='custom-control custom-switch'>
                                    <input type='checkbox'onClick={this.handleChange}  className='custom-control-input' dataid="room4" id='room4.fan' defaultChecked={data.room4.fan}/>
                                    <label className='custom-control-label' htmlFor='room4.fan'>
                                        Celing Fan</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    )
    }
  }
  export default Home;
// export default function Home() {
//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <div style={{ marginTop: 3 + 'em' }}></div>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Card >
//                             <Card.Body>
//                                 <Card.Title>Room ONE</Card.Title>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room11' />
//                                     <label className='custom-control-label' htmlFor='room11'>
//                                         TubeLight</label>
//                                 </div>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room12' />
//                                     <label className='custom-control-label' htmlFor='room12'>
//                                         Celing Fan</label>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Room TWO</Card.Title>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room21' />
//                                     <label className='custom-control-label' htmlFor='room21'>
//                                         TubeLight</label>
//                                 </div>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room22' />
//                                     <label className='custom-control-label' htmlFor='room22'>
//                                         Celing Fan</label>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Room THREE</Card.Title>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room31' />
//                                     <label className='custom-control-label' htmlFor='room31'>
//                                         TubeLight</label>
//                                 </div>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room32' />
//                                     <label className='custom-control-label' htmlFor='room32'>
//                                         Celing Fan</label>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Room FOUR</Card.Title>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room41' />
//                                     <label className='custom-control-label' htmlFor='room41'>
//                                         TubeLight</label>
//                                 </div>
//                                 <div className='custom-control custom-switch'>
//                                     <input type='checkbox' className='custom-control-input' id='room42' />
//                                     <label className='custom-control-label' htmlFor='room42'>
//                                         Celing Fan</label>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>

//         </div>

//     )

// }