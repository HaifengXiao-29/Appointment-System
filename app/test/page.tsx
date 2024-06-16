'use client'

// export const revalidate = 1
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {useFormState, useFormStatus} from "react-dom";


export async function FormSubmit  (prevState,formData) {
    const  res = await fetch("http://localhost:3000/test/api", {
        method: 'POST',
        body: formData
    })
    const data = await res.json()

    return data
}


export default function Form() {
    const [state, FormAction] = useFormState(FormSubmit, '')
    const [pending] = useFormStatus()
    return (
        <>
            <form action={FormAction}>
                <div className="grid gap-6">
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name"  name={"name"} placeholder="Mattew Kim"/>
                        </div>
                        <div className="w-1/2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" name={"phone"} placeholder="000-000-0000"/>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name={"email"} placeholder="abc@gmail.com"/>
                    </div>

                    {/*<div className="flex gap-4 items-center">*/}
                    {/*    <div className="flex flex-col">*/}
                    {/*        <Label htmlFor="startTime">Start Time</Label>*/}
                    {/*        <InputOTP maxLength={4} value={formData.startTime} onChange={(e) => handleChange(e)}>*/}
                    {/*            <InputOTPGroup>*/}
                    {/*                <InputOTPSlot index={0}/>*/}
                    {/*                <InputOTPSlot index={1}/>*/}
                    {/*            </InputOTPGroup>*/}
                    {/*            <div className="flex flex-col items-center justify-center">*/}
                    {/*                <Dot/>*/}
                    {/*                <Dot/>*/}
                    {/*            </div>*/}
                    {/*            <InputOTPGroup>*/}
                    {/*                <InputOTPSlot index={2}/>*/}
                    {/*                <InputOTPSlot index={3}/>*/}
                    {/*            </InputOTPGroup>*/}
                    {/*        </InputOTP>*/}
                    {/*    </div>*/}
                    {/*    <Minus className="w-6 h-6 mt-3"/>*/}
                    {/*    <div className="flex flex-col">*/}
                    {/*        <Label htmlFor="endTime">End Time</Label>*/}
                    {/*        <InputOTP maxLength={4} value={formData.endTime} onChange={(e) => handleChange(e)}>*/}
                    {/*            <InputOTPGroup>*/}
                    {/*                <InputOTPSlot index={0}/>*/}
                    {/*                <InputOTPSlot index={1}/>*/}
                    {/*            </InputOTPGroup>*/}
                    {/*            <div className="flex flex-col items-center justify-center">*/}
                    {/*                <Dot/>*/}
                    {/*                <Dot/>*/}
                    {/*            </div>*/}
                    {/*            <InputOTPGroup>*/}
                    {/*                <InputOTPSlot index={2}/>*/}
                    {/*                <InputOTPSlot index={3}/>*/}
                    {/*            </InputOTPGroup>*/}
                    {/*        </InputOTP>*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-3">*/}
                    {/*        <Toggle aria-label="Toggle day/night" onPressedChange={toggleIcon}>*/}
                    {/*            {isDay ? <SunDim/> : <Moon/>}*/}
                    {/*        </Toggle>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div>
                        <Label htmlFor="program">Program</Label>
                        <Select name= "program">
                            <SelectTrigger id="program">
                                <SelectValue placeholder="Select"/>
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="Miki">Head 45 min</SelectItem>
                                <SelectItem value="Tommy">Foot 45 min</SelectItem>
                                <SelectItem value="Astro">Body 45 min</SelectItem>
                                <SelectItem value="Jason">Head 10</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="employee">Employee</Label>
                        <Select name= "employee">
                            <SelectTrigger id="employee">
                                <SelectValue placeholder="Select"/>
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="Miki">Miki</SelectItem>
                                <SelectItem value="Tommy">Tommy</SelectItem>
                                <SelectItem value="Astro">Astro</SelectItem>
                                <SelectItem value="Jason">Jason</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea id="notes"  name={"notes"} placeholder="Type your message here."/>
                    </div>
                </div>
                <div className={'flex justify-end gap-4'}>
                    <Button variant="outline" type={"button"}>Cancel</Button>
                    <Button aria-disabled={pending} type="submit">Done</Button>
                </div>
            </form>
        </>

    )
}