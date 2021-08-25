import { Badge } from "react-bootstrap";

const MyBadge = ({name, color}) => (
    <Badge variant={color}>{name}</Badge>
)

  export default MyBadge