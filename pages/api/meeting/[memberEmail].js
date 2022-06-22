import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
      return await getMeetings(req, res);
  }
  else {
      return res.status(405).json({ message: 'Method not allowed', success: false });
  }
}

const getMeetings = async (req, res) => {
  const mapMeetingsForUpcomingAndPreviousMeetings = (meetings = []) => {
    let upcoming = [], previous = [];
    
    meetings.forEach(meeting => {
      const meetingDate = new Date(meeting.meetingDate);
      const now = new Date();
      if(meetingDate > now) {
        upcoming.push(meeting);
      } else {
        previous.push(meeting);
      }
    });

    return { upcoming, previous };
  }

  const { memberEmail } = req.query;
  try {
    const meetingsData = await prisma.meeting.findMany({
      where: {
        members: {
          every: {
            member: {
              email: memberEmail,
            }
          }
        }
      },
      include: {
        members: true,
      }
    });

    const meetings = mapMeetingsForUpcomingAndPreviousMeetings(meetingsData);
    
    return res.status(200).json({ ...meetings, success: true });
  } catch (error) {
    console.error('Error with GET Meeting', error);
    return res.status(500).json({ error: 'Error with GET Meeting', success: false});
  }
}
