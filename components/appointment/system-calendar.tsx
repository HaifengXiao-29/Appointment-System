'use client'


import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, {useState} from "react";

// 定义事件对象的类型
interface Event {
    title: string;
    start: string;
    end: string;
}

// 定义组件属性的类型
interface SystemCalendarProps {
    events: Event[];
}

export default function SystemCalendar({ events }: SystemCalendarProps) {

    return (
        <>
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

                        events={events}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridDay,timeGridWeek,dayGridMonth'
                        }}
                    />
                </CardContent>
            </Card>
        </>
    )

}