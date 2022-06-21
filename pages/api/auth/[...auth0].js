import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

const getLoginState = (req, loginOptions) => {
    return {
        returnTo: `https://${req.headers.host}/profile`
    }
}

export default handleAuth({
    // async login (req, res) {
    //     try {
    //         await handleLogin(req,res, { getLoginState })
    //     } catch (error) {
    //         res.status(error.state || 500).end(error.message)
    //     }
    // }
});