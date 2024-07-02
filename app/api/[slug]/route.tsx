import {PrismaClient} from "@prisma/client";
import { promises as fs } from 'fs';
import path from 'path';

const prisma = new PrismaClient()
const employeeInfoFile = path.resolve(process.cwd(), 'public/employees.json');
const activityFile = path.resolve(process.cwd(), 'public/activity.json');
export async function POST(req, {params}){
    let res = {message : 'Invalid request'}
    const slug = params.slug
    if (slug === 'post-calendar-events'){
        const data = await req.formData()
        const name = data.get('name')

        if (name){
            console.log('Creating user with data:', {
                name: data.get('name'),
                phone: data.get('phone'),
                email: data.get('email'),
                startTime: data.get('start'),
                endTime: data.get('end'),
                service: data.get('services'),
                date: data.get('date'),
                employee: data.get('employee'),
                notes: data.get('notes')
            });

            const user = await prisma.user.create({
                data: {
                    name: data.get('name'),
                    phone: data.get('phone'),
                    email: data.get('email'),
                    startTime: data.get('start'),
                    endTime: data.get('end'),
                    service: data.get('services'),
                    date: data.get('date'),
                    employee: data.get('employee'),
                    notes: data.get('notes')
                },
            })
            res = { message: 'User created successfully' };

        }else {

            res  = {message: 'please fill out the name'}
        }
        return Response.json(res)
    }else if (slug === 'update-employee'){

        const requestBody = await req.json();
        const { employees, rest } = requestBody;
        const newData = JSON.stringify({ employees, rest }, null, 2);
        await fs.writeFile(employeeInfoFile, newData);
        res = { message: 'Employees data updated successfully' };

        return Response.json(res)
    }else if (slug === 'update-activity'){
        const requestBody = await req.json();
        const { activity } = requestBody;
        await fs.writeFile(activityFile, JSON.stringify({ activity }, null, 2));
        return Response.json(res)
    }

    else {
        res = {message: 'wrong address'}
        return Response.json(res)
    }
}


export async function GET(req, {params}){
    let res = {message : 'Invalid request'}
    const slug = params.slug

    if (slug === 'get-calendar-events'){
        const users = await prisma.user.findMany({
            select: {
                name: true,
                startTime: true,
                endTime: true,
                service: true,
                date: true,
                employee: true,
                notes: true
            },
        });



        const events = users.map(user => {
            const date = user.date.toISOString().split('T')[0];
            return {
                title: user.employee,
                start: `${date}T${user.startTime}:00`,
                end: `${date}T${user.endTime}:00`
            };
        });

        // console.log(users)
        return Response.json(users)
    }
    else if (slug === 'get-available-times'){
        const queryParams = req.nextUrl.searchParams;
        const date = queryParams.get('date');
        const startTime = queryParams.get('startTime');
        const endTime = queryParams.get('endTime');
        const formattedStartTime = `${startTime}:00`;
        const formattedEndTime = `${endTime}:00`;


        // const date = '2024-06-15'; // 您的查询日期
        // const startTime = '13:30:00'; // 您的查询开始时间
        // const endTime = '14:30:00'; // 您的查询结束时间

        const appointments = await prisma.user.findMany({
            where: {
                date: {
                    equals: new Date(date),
                },
                OR: [
                    {
                        startTime: {
                            lt: formattedEndTime,
                        },
                        endTime: {
                            gt: formattedStartTime,
                        },
                    },
                    {
                        startTime: {
                            gt: formattedStartTime,
                        },
                        endTime: {
                            lt: formattedEndTime,
                        },
                    },
                ],
            },
            select: {
                startTime:true,
                endTime:true,
                employee: true,
            },
        });

        console.log(appointments)
        return Response.json(appointments)

    }
    else if (slug === 'get-employee'){
        const data = await fs.readFile(employeeInfoFile, 'utf-8');
        const employees = JSON.parse(data);
        return Response.json(employees)
    }else if (slug === 'get-activity'){
        const data = await fs.readFile(activityFile, 'utf-8');
        const activity = JSON.parse(data);
        return Response.json(activity)
    }
}