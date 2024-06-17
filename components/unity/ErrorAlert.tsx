'use client'


import {Button} from "@/components/ui/button";
import * as React from "react";

export default function ErrorAlert({ showModal, closeModal }){



    return(
        <>
            {showModal.isVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg z-50">
                        <h2 className="text-lg font-bold mb-4">Error</h2>
                        <p className="mb-4">{showModal.message}</p>
                        <Button onClick={closeModal}>Close</Button>
                    </div>
                    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeModal}></div>
                </div>
            )}


        </>
    )
}