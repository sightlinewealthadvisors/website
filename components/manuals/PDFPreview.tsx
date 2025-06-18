import React from 'react';

interface PDFPreviewProps {
    pdfUrl: string; // URL path to the PDF in public folder
    className?: string; // Optional additional classes
}

export default function PDFPreview({ pdfUrl, className = '' }: PDFPreviewProps) {
    return (
        <div className={`min-h-screen w-full bg-gray-950 justify-center items-center p-4 md:p-6 ${className}`}>
            <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full md:w-1/2 h-screen mx-auto"
            >
                <p className="text-gray-400 text-center">
                    Unable to display PDF. Please download to view.
                </p>
            </object>
        </div>
    );
}
