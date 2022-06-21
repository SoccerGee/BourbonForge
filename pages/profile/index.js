import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Typography from '@mui/material/Typography';

import Header from '../../components/Header';
import MiddleGrid from '../../components/MiddleGrid';

import useMemberMeetings from '../../hooks/meeting';

export default function Profile({ user }) {
    const meetings = useMemberMeetings(user.email);

    return (
        <div>
            <Header text="Bourbon Forge" />
            <MiddleGrid>
                <Typography>Hello {user.name}!</Typography>
            </MiddleGrid>            
            {
                meetings && meetings.map((meeting, index) => <div key={index}>{meeting.location}</div>)
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
