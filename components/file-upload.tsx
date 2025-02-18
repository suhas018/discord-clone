"use client"

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { Button } from "./ui/button";

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
}


const FileUpload = ({
    onChange,
    value,
    endpoint
}: FileUploadProps) => {

    const fileType = value?.split(".").pop()

    if (value && fileType != "pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image 
                    fill
                    src={value}
                    alt="upload"
                    className="rounded-full"
                />
                <Button 
                    onClick={() => onChange("")}
                    className="rounded-full bg-rose-500 text-white p-1 absolute top-0 right-0 shadow-sm"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        )
    }

  return (
    <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
         console.log(error);
        }}
    />
  )
}

export default FileUpload