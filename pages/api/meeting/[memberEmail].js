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
  const { memberEmail } = req.query;
  try {
    const meetings = await prisma.meeting.findMany({
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
    return res.status(200).json({ meetings, success: true });
  } catch (error) {
    console.error('Error with GET Meeting', error);
    return res.status(500).json({ error: 'Error with GET Meeting', success: false});
  }
}
