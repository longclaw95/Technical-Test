// import logo from './logo.svg';
// import Linkedin from './Linkedin.jpg'
import './App.css'
import {useState} from 'react'
import {Container, Form , FormControl,Button,Card} from 'react-bootstrap'
import ImageScreen from './components/ImageScreen.js'

function App() {
  const [dimension, setDimension] = useState(10);

  const generateRandomMatrix = (dimension) => {
    var result = [];
    for (var i = 0; i < dimension; i++) {
      result[i] = [];
      for (var j = 0; j < dimension; j++) {
        result[i][j] = Math.round(Math.random());
      }
    }
    return result;
  };

  const [list, setList] = useState(generateRandomMatrix(10));

  const generate = () => {
    setList(generateRandomMatrix(dimension));
  };

  const flip = () => {
    setList(
      list.map((arr) => {
        return arr.reverse();
      })
    );
  };

  const inverse = () => {
    setList(list.map((innerList) => innerList.map((v) => (v === 0 ? 1 : 0))));
  };

  return (
    <>
      <Container className="text-center">
        <div>
          <Card>
            <ImageScreen list={list}></ImageScreen>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                
              </Card.Text>
              <div className="block">
                <Form inline>
                  <FormControl
                    type="number"
                    placeholder="enter a number"
                    className="mr-sm-2"
                    onChange={(e) => setDimension(e.target.value)}
                    min="2"
                    max="20"
                  />
                  <Button
                    variant="primary"
                    className="mr-sm-5"
                    onClick={generate}
                  >
                    Generate
                  </Button>
                </Form>

                <Form inline>
                  <Button variant="primary" className="mr-sm-5" onClick={flip}>
                    Flip
                  </Button>
                </Form>

                <Form inline>
                  <Button
                    variant="primary"
                    className="mr-sm-5"
                    onClick={inverse}
                  >
                    inverse
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default App;
