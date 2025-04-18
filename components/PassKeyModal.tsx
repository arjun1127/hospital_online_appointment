"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { useEffect, useState } from "react"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { decryptKey, encryptKey } from "@/lib/utils";



const PassKeyModal = () => {
  const [open, setOpen] = useState(true);
  const router=useRouter();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const path=usePathname();

  const encryptedKey=typeof window !== "undefined" ? window.localStorage.getItem("accessKey") : null;

  useEffect(()=>{
    const accessKey=encryptedKey && decryptKey(encryptedKey);
    if(path){
      if(accessKey=== process.env.NEXT_PUBLIC_ADMIN_PASSKEY){
        setOpen(false);
        router.push('/admin');
      }else{
        setOpen(true);
      }
    }
  },[encryptedKey]
)
  const validateOtp=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    
    if(otp=== process.env.NEXT_PUBLIC_ADMIN_PASSKEY){
      const encryptedKey=encryptKey(otp);
      localStorage.setItem("accessKey",encryptedKey);
      setOpen(false);
    }else{
      setOtpError('Invalid otp. Please try again')
    }

  }
  const closeModal=()=>{
    setOpen(false);
    router.push('/');
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent className="shad-alert-dialog">
    <AlertDialogHeader>
      <AlertDialogTitle className="flex items-start justify-between">
        Admin Access Verification
        <Image
          src="/assets/icons/close.svg"
          alt="close"
          width={20}
          height={20}
          onClick={()=>closeModal()}
          className="cursor-pointer"
        />
      </AlertDialogTitle>

      <AlertDialogDescription>
        To access the admin page ,please enter the OTP sent to your email
      </AlertDialogDescription>

    </AlertDialogHeader>

      <div>
      <InputOTP maxLength={6} value={otp} onChange={(value)=>setOtp(value)}>
      <InputOTPGroup className="shad-otp">
        <InputOTPSlot className="shad-otp-slot" index={0} />
        <InputOTPSlot className="shad-otp-slot" index={1} />
        <InputOTPSlot className="shad-otp-slot" index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot className="shad-otp-slot" index={3} />
        <InputOTPSlot className="shad-otp-slot" index={4} />
        <InputOTPSlot className="shad-otp-slot" index={5} />
      </InputOTPGroup>
    </InputOTP>
      
    {otpError && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {otpError}
            </p>
          )}
      </div>

    <AlertDialogFooter>
      <AlertDialogAction onClick={(e)=>validateOtp(e)} 
      className="shad-primary-btn w-full">
        Enter OTP
        </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default PassKeyModal