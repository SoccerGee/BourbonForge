import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Typography from '@mui/material/Typography';

import Header from '../../components/Header';
import MiddleGrid from '../../components/MiddleGrid';
import MeetingsTable from '../../components/MeetingsTable';

import useMemberMeetings from '../../hooks/meeting';
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


/*
    @TODO: 
    1. Map through the bourbons we have tried.  
    2. Map through the bourbon forge events that you have attended.
    3. Map through the bourbon forge events that you have missed.
*/
export default function Profile({ user }) {
    const {upcoming = [], previous = []} = useMemberMeetings(user.email);

    return (
        <div>
            <Header text="Bourbon Forge" />
            <MiddleGrid>
                <Typography variant="h5" sx={{mb: 2}} >Hello, {user.name}, here&apos;s what&apos;s coming up:</Typography>
                {   
                    
                    upcoming && upcoming.length > 0 && <MeetingsTable meetings={upcoming} sx={{mb: 3}}/>
                }
                <Typography variant="h5" sx={{mb: 2}} >Hello, {user.name}, here&apos;s where you&apos;ve been:</Typography>
                {   
                    previous && previous.length > 0 && <MeetingsTable meetings={previous} sx={{mb: 3}}/>
                }
            </MiddleGrid>
        </div>
    );
}
export const getServerSideProps = withPageAuthRequired();
