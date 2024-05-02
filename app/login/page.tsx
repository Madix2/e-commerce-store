import Container from "../components/container"
import FormWrap from "../components/formwrap"
import LoginForm from "./loginform";
const Login = () => {
    return ( 
        <Container>
            <FormWrap>
                <LoginForm/>
            </FormWrap>
        </Container>
     );
}
 
export default Login;