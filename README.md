✅ Task 1: Database Architecture & Domain Modeling

Designed and structured the foundational data model using an ER Diagram focused on scalability and role-driven access control.

🔹 Core Entities Designed

User

Implemented role-based authentication structure

Supports multiple roles (e.g., Doctor, Patient)

Doctor Profile

Linked with User entity

Structured for specialization-based mapping

Patient Profile

Associated with User entity

Designed for extensibility (medical history, appointments, etc.)

Verification Token

Token-based verification mechanism

Linked with User for account validation workflows

Specialization

Independent entity

Supports one-to-many relationship with Doctors

🔹 Relationship Design Highlights

One-to-One: User ↔ Doctor Profile

One-to-One: User ↔ Patient Profile

One-to-Many: Specialization → Doctors

One-to-One: User → Verification Token

Focus Areas:

Clean normalization

Future-proof structure

Secure authentication foundation

Clear separation of identity and profile data

✅ Task 2: Backend Initialization & Modular Setup (NestJS)

Established the backend architecture using a modular and scalable structure with NestJS.

🔹 Project Initialization

Set up a structured NestJS application

Organized folders following modular architecture principles

Prepared environment for scalable feature additions

🔹 Implemented Hello Module (Proof of Architecture)

Created a fully functional modular feature:

Hello Module

Hello Controller

Hello Service

🔹 Endpoint Developed
GET /hello

✔ Returns structured JSON response
✔ Verified using Browser and Postman
✔ Confirmed controller-service interaction
