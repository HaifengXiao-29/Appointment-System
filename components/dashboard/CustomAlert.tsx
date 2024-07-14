import {PartyPopper} from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import "@/styles/dashboard/CustomAlertTransitionStyle.css";
import axios from "axios";


export function CustomAlert() {

    const [showAlert, setShowAlert] = useState(false);
    const [activity, setActivity] = useState('');


    useEffect(() => {

        const fetchActivity = async () => {
            try {
                const response = await axios.get('/api/get-activity');
                setActivity(response.data.activity);
                setShowAlert(true);
            } catch (error) {
                console.error('Error fetching activity:', error);
            }
        };

        fetchActivity();


        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000); // Alert 显示 3 秒钟

        return () => clearTimeout(timer); // 清理定时器
    }, []);

    return (
        <CSSTransition
            in={showAlert}
            timeout={500}
            classNames="alert"
            unmountOnExit
        >
            <Alert>
                <PartyPopper  className="h-4 w-4"/>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    {activity || 'Hang on there, new event coming soon !!'}
                </AlertDescription>
            </Alert>
        </CSSTransition>
    )
}
