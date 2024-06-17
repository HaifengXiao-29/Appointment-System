import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req, {params}){
    let res = {message : 'Invalid request'}
    const slug = params.slug
    if (slug === 'post-calendar-events'){
        const data = await req.formData()
        const name = data.get('name')
        const temp = data.get('hours')


        if (name){
            console.log('Creating user with data:', {
                name: 'chuan',
                phone: '0000',
                email: '112@gmail.com',
                startTime: '14:30:00',
                endTime: '16:00:00',
                service: 'Head',
                employee: 'Jiaxi',
                notes: 'be good'
            });

            // const user = await prisma.user.create({
            //     data: {
            //         name: 'chuan',
            //         phone: '0000',
            //         email: '123@gmail.com',
            //         startTime:'14:30:00',
            //         endTime:'15:30:00',
            //         service: 'Head',
            //         employee: 'jiayi',
            //         notes: 'be good'
            //     },
            // })
            res = { message: 'User created successfully' };
            // console.log(user)
        }else {

            res  = {message: 'please fill out the name'}
        }
        return Response.json(res)
    }else {
        res = {message: 'wrong address'}
        return Response.json(res)
    }
}


export async function GET(req, {params}){
    let res = {message : 'Invalid request'}
    const slug = params.slug

    if (slug === 'get-calendar-events'){
        return Response.json(res)
    }else if (slug === 'get-available-times'){
        const queryParams = req.nextUrl.searchParams;
        const date = queryParams.get('date');

        const appointments = await prisma.user.findMany({
            where: {
                date: {
                    equals: new Date(date),
                },
            },

            select: {
                startTime: true,
                endTime: true,
            },
        })


        return Response.json(appointments)

    }
}