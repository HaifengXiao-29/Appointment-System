'use client'


export default function DashboardLayer3() {

    return (
        <>
            {['Signature Pedi & Mani', 'Safe & Healthy', 'Silence & Unwinding', 'Competitive Prices', 'Contact & Meet'].map((service, index) => (
                <div key={service} className="flex flex-col items-center relative">
                    <div className="w-12 h-12 mb-2">image</div>
                    <h2 className="text-lg font-semibold">{service}</h2>
                    <p className="text-sm">{service.includes('Silence') ? '& Spa Retreat' : 'Service Sortie'}</p>
                    {index < 4 && (
                        <div className="absolute right-0 top-6 bottom-6 border-r-2 border-gray-300"></div>
                    )}
                </div>
            ))}
        </>
    )
}