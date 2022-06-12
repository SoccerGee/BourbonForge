import Grid from '@mui/material/Grid';

const MiddleGrid = ({children, ...rest}) => (
    <Grid container direction="column" {...rest}>
        <Grid item xs={8} sx={{ alignSelf: "center" }} mt={6}>
            {children}
        </Grid>
    </Grid>
);

export default MiddleGrid;
