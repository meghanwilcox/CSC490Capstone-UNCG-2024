# CSC490Capstone-UNCG-2024

Frontend: React/Javascript

Backend: A Django application connecting to an Azure MySQL remote database. 

Database: Azure MySQL

Contributors:
    Meghan Wilcox,
    Derek Fox,
    Alex Jasper,
    William Harper

Professor:
    Yingcheng Sun

Instructions to run Frontend locally:

    ** You must have the dependencies in the frontend_requirements.txt **
    
    1. run "npm run dev" in the frontend/wildguard-frontend project folder

Instructions to run Backend locally:

    **You must have a system environment variable set up called AZURE_SSL_CA_PATH that points to the DigiCertGlobalRootCA.crt.pem file needed for Azure MySQL authentication.**
    
    **You must also have the ML model .keras file in the backend/controller/app folder. You can download that file [here](https://drive.google.com/drive/folders/1njqkychNKGrS0_5l6cDvi0ojijGJyaFQ?usp=drive_link)**
    
    **You must run in a venv environment with the dependencies specified in the backend_requirements.txt **
    
    1. Run "python manage.py migrate" in the backend/controller folder
    2. Run "python manage.py runserver" in the backend/controller folder

