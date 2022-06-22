import { useState, useEffect } from 'react';

const useMemberMeetings = memberEmail => {
    const [memberMeetings, setMemberMeetings] = useState({ previous: [], upcoming: [] });
    
    useEffect(async () => {
        const response = await fetch(`/api/meeting/${memberEmail}`);
        const meetingData = await response.json();
        setMemberMeetings({ upcoming: meetingData.upcoming, previous: meetingData.previous });
    }, [memberEmail]);

    return memberMeetings;
}

export default useMemberMeetings;
