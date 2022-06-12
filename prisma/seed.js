const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.meeting.create({
        data: {
            meetingDate: new Date(2022, 3, 27, 3, 0, 0, 0),
            location: '30 Dorset CT Sharpsburg, GA',
            members: {
                create: [
                    {
                        rsvpAttending: true,
                        rsvpDate: new Date(2022, 3, 20, 1, 0, 0, 0),
                        member: {
                            connectOrCreate: {
                                where: {
                                    email: 'grant.tuttle@gmail.com',
                                },
                                create: {
                                    email: 'grant.tuttle@gmail.com',
                                },
                            },
                        },
                    },
                ],
            }
        },
    });
    await prisma.meeting.create({
        data: {
            meetingDate: new Date(2022, 5, 1, 3, 0, 0, 0),
            location: '125 Emerald Lake Dr Fayetteville, GA',
            members: {
                create: [
                    {
                        rsvpAttending: true,
                        rsvpDate: new Date(2022, 4, 20, 1, 30, 0, 0),
                        member: {
                            connectOrCreate: {
                                where: {
                                    email: 'grant.tuttle@gmail.com',
                                },
                                create: {
                                    email: 'grant.tuttle@gmail.com',
                                },
                            },
                        },
                    },
                ],
            }
        },
    });
    await prisma.meeting.create({
        data: {
            meetingDate: new Date(2022, 6, 5, 3, 0, 0, 0),
            location: '30 Dorset CT Sharpsburg, GA',
            members: {
                create: [
                    {
                        rsvpAttending: true,
                        rsvpDate: new Date(2022, 5, 20, 1, 0, 0, 0),
                        member: {
                            connectOrCreate: {
                                where: {
                                    email: 'grant.tuttle@gmail.com',
                                },
                                create: {
                                    email: 'grant.tuttle@gmail.com',
                                },
                            },
                        },
                    },
                ],
            }
        },
    });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
