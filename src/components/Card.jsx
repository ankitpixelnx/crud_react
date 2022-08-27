import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button } from "reactstrap";
const Rcard=({id,lname,duration,trainer,fees})=>{
    return(
        <>
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {id} {lname}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {duration}
    </CardSubtitle>
    <CardText>
      {trainer} {fees}
    </CardText>
    <Button>
      Buy Now
    </Button>
  </CardBody>
</Card>
        </>
    )
}
export default Rcard;