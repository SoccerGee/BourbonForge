import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Login = () => (
    <Card sx={{ width: 250 }} className="LoginCard">
        <CardContent className="LoginCardContent">
            <a href="/api/auth/login">Login</a>
        </CardContent>
    </Card>
);

export default Login;