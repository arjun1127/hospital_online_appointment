import Image from "next/image";
import { AppointmentForm } from '../../../../components/forms/newAppointmentForm';
import { getPatient } from "@/lib/actions/patients.actions";


export default async function  NewAppointment({params:{userId}}){
  const patient =await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

            <AppointmentForm 
              type="create"
              userId={userId}
              patientId={patient.$id}
            />
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 Appointment System. All rights reserved.
            </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

