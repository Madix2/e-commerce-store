import Container from "../components/container";
import FormWrap from "../components/formwrap";
import RegisterForm from "./registerform";

const Register = () => {
    return ( 
        <Container>
            <FormWrap>
                <RegisterForm />
            </FormWrap>
        </Container>
     );
}
 
export default Register;