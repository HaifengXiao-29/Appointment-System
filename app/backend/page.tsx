"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function Calendar() {
    return (<main className="h-screen grid place-items-center">
        <div>
            <Card className="w-[800px]">
                <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="timeGridWeek"
                        allDaySlot={false} // 取消 all-day 行
                        slotMinTime="10:00:00" // 每天开始时间
                        slotMaxTime="23:00:00" // 每天结束时间
                        height="auto" // 自适应高度
                        contentHeight="auto" // 自适应内容高度
                        expandRows={true} // 扩展行以适应内容

                        events={[
                            {title: 'event 1', start: '2024-06-09T11:00:00', end: '2024-06-09T12:00:00'},
                            {title: 'event 2',  start: '2024-06-10T14:00:00', end: '2024-06-10T15:00:00'}
                        ]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridDay,timeGridWeek,dayGridMonth'
                        }}
                    />
                </CardContent>
            </Card>
        </div>

    </main>)
}
