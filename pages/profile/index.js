import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Typography from '@mui/material/Typography';

import Header from '../../components/Header';
import MiddleGrid from '../../components/MiddleGrid';


export default function Profile({ user }) {
    return (
        <div>
            <Header text="Bourbon Forge" />
            <MiddleGrid>
                <Typography>Hello {user.name}!</Typography>
            </MiddleGrid>            
            {
                /*
                    @TODO: 
                    1. Map through the bourbons we have tried.  
                    2. Map through the bourbon forge events that you have attended.
                    3. Map through the bourbon forge events that you have missed.
                */
            }
        </div>
    );
}
export const getServerSideProps = withPageAuthRequired();
