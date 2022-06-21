import { useState, useEffect } from 'react';

const useMemberMeetings = memberEmail => {
    const [memberMeetings, setMemberMeetings] = useState([]);
    useEffect(async () => {
        const response = await fetch(`/api/meeting/${memberEmail}`);
        const { meetings } = await response.json();
        console.dir(meetings);
        setMemberMeetings(meetings);
    }, [memberEmail]);
    return memberMeetings;
}

export default useMemberMeetings;
