import {useParams} from 'react-router-dom'
 
 function User() {
   const { id } = useParams();
   return <p>Viewing user {id}</p>;
 }

export default User;