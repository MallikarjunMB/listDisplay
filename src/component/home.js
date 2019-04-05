import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import data from '../jsons/card.json'
import { connect } from 'react-redux';
import { displayList } from '../redux/actions/updateAction'

class Home extends Component {
  componentWillMount(){
    this.props.displayList(data);
  }

  render() {
    const postItems = this.props.productDetails.datas.map(product => (
      <Col md="3" style={{padding:'50px'}}>  
        <Card body>
        <Button>{product.id}</Button>
          <CardTitle>{product.price}</CardTitle>
          <CardText>{product.duration}</CardText>
        </Card>
        </Col>

    ));
      console.log('data',data)
    return (
      <div>
        Home Component
        <Row style={{display:'inline-flex'}}>
      
        {postItems} 
        
    </Row>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  
  return { productDetails: reduxState }
}

export default connect(mapStateToProps, {displayList}) (Home);