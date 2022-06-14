import Grid from '@mui/material/Grid';

import { useUser } from '@auth0/nextjs-auth0';

const MiddleGrid = ({children, loadingComponent: Loading, errorComponent: Error, ...rest}) => {
    const { error, loading } = useUser();
    if(loading) { return <Loading />;}
    if(error) { return <Error />;}
    return (
        <Grid container direction="column" {...rest}>
            <Grid item xs={8} sx={{ alignSelf: "center" }} mt={6}>
                {children}
            </Grid>
        </Grid>
    );
};

export default MiddleGrid;
