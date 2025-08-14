# 🏥 Appoint Vaidhya – Hospital Appointment Web Application

Appoint Vaidhya is a modern **healthcare and patient appointment booking system** built using **Next.js**, **Tailwind CSS**, and **Appwrite**.  
It allows patients to register, book appointments with available doctors, and view booking details, while enabling admins (doctors/hospital staff) to manage, accept, reschedule, or decline appointments.

---

## 📌 Features

### 👩‍⚕️ Patient Side
- **Patient Registration** – Sign in with name, email, and phone number.
- **Detailed Appointment Form** – Fill in medical and personal details.
- **Doctor Selection** – Choose from available doctors (dummy data for prototype).
- **Date & Time Selection** – Pick preferred appointment slot.
- **Appointment Confirmation Page** – Displays booked date, time, and doctor details.

### 🩺 Admin Side
- **Secure Admin Login** – Access protected via PassKey Modal.
- **Manage Appointments** – View, accept, reschedule, or decline patient requests.
- **Appointment Overview Table** – Displays patient data in a structured table format.

---
### 🎨 UI & UX
- **Responsive Design** – Works seamlessly on desktop and mobile.
- **Dark Theme by Default** – Using `next-themes` and Tailwind.
- **Reusable Components** – Modular, clean, and easy to maintain.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database & Backend:** [Appwrite](https://appwrite.io/)
- **Form Validation:** [Zod](https://zod.dev/)
- **State & Theme Management:** `next-themes`
- **Utilities:** `clsx`, `tailwind-merge`

---


---

## 🚀 Getting Started

### 1 Clone the Repository
```bash
[git clone https://github.com/yourusername/hospital_online_appointment.git](https://github.com/arjun1127/hospital_online_appointment.git)
cd hospital_online_appointment

```
---

### Configure Environment Variables

Set the following system environment variables before running the project:

export NEXT_PUBLIC_ENDPOINT=your_appwrite_endpoint
export PROJECT_ID=your_project_id
export API_KEY=your_appwrite_api_key
export DATABASE_ID=your_database_id
export PATIENT_COLLECTION_ID=your_patient_collection_id
export DOCTOR_COLLECTION_ID=your_doctor_collection_id
export APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
export NEXT_PUBLIC_BUCKET_ID=your_bucket_id


Note: Use set instead of export if you are on Windows CMD,
or setx for permanent environment variables.

or if you dont want to do it in terminal visit Appwrite and create a account can set these manually 

---

```
npm run dev
# or
yarn dev
```
The app will be running at http://localhost:3000
---
## 📋 Usage

### 🧑‍⚕️ Patient Flow

1. Visit the **homepage**.
<img width="1359" height="644" alt="image" src="https://github.com/user-attachments/assets/e0724ab5-a173-4ab3-8f32-a8552dac7cc2" />

2. Fill in the **Patient Form**.
<img width="1359" height="644" alt="Screenshot from 2025-08-14 17-50-34" src="https://github.com/user-attachments/assets/215539f3-03ef-464b-86c3-912825b9e7e8" />

3. Complete the **Registration Form** with medical details.
<img width="1359" height="644" alt="Screenshot from 2025-08-14 17-50-51" src="https://github.com/user-attachments/assets/1304a780-d864-4706-bb67-aad7c17cbef0" />

4. Book an appointment with preferred **doctor, date, and time**.

5. View confirmation details on the **success page**.
<img width="1359" height="644" alt="Screenshot from 2025-08-14 17-54-15" src="https://github.com/user-attachments/assets/b6f51148-af17-44bf-80eb-dd868708da75" />


### 🩺 Admin Flow
1. Navigate to `/?admin=true`.
2. Enter the **passkey** in **PassKeyModal**.
3. View and manage patient appointments in the **Admin Dashboard**.
<img width="1359" height="644" alt="Screenshot from 2025-08-14 17-56-16" src="https://github.com/user-attachments/assets/990642eb-7438-4ed0-b86a-e18ada5065f1" />

---

## 🛡️ Validation & Security
- **Form Validation:** All patient and appointment forms are validated using **Zod**.
- **Admin Access:** Restricted via **passkey authentication**.
- **Data Storage:** Securely stored and managed in **Appwrite**.

## Authors
  Arjun Rao


