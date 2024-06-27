import { useState } from 'react';
import axios from 'axios';
import {Button} from "@/components/ui/button";


export default function ActivityInput() {
    const [activity, setActivity] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/update-activity', { activity });
            setMessage('Activity updated successfully');
        } catch (error) {
            console.error('Error updating activity:', error);
            setMessage('Failed to update activity');
        }
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className={"flex gap-1"}>
                <input
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="Enter activity information"
                    className={"border p-2"}
                />
                <Button type={"submit"}>Submit</Button>
            </form>
            {message && <p>{message}</p>}

        </div>
    );
}
