// ReviewForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Form, ListGroup, Row, Col, Button } from 'react-bootstrap';
import Rating from './Rating';

const ReviewForm = ({ productId, refreshReviews }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
 

  const submitReview = async () => {
    try {
      await axios.post(`/api/products/${productId}/reviews`, { rating, comment });
      refreshReviews(); // Fetch updated reviews after submitting
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };

  return (

    //new

    <Row>
    <Col md={6}>
      
        <ListGroup.Item>
          <h2>Write a Customer Review</h2>
          
          
            <Form onSubmit={submitReview}>
              <Form.Group controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  as="select"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  row="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></Form.Control>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form.Group>
            </Form>
         
        </ListGroup.Item>
    
    </Col>
  </Row>


    //new



   
  );
};

export default ReviewForm;
