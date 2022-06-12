import Grid from '@mui/material/Grid';

export default ({children, ...rest}) => (
    <Grid container direction="column" {...rest}>
        <Grid item xs={8} sx={{ alignSelf: "center" }} mt={6}>
            {children}
        </Grid>
    </Grid>
);
