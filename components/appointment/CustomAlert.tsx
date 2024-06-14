import {Terminal} from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import "@/styles/dashboard/CustomAlertTransitionStyle.css";


export function CustomAlert() {

    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
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
                <Terminal className="h-4 w-4"/>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        </CSSTransition>
    )
}
