# Titanic deployment on Vercel

This folder contains only the Titanic prediction website, with Waqar Farrukh, FA24-BSE-118 and BSE-A displayed on the page. It uses the existing trained SVC parameters. No Python server or model retraining is needed.

1. Create a GitHub repository named waqar-titanic-prediction.
2. Upload this folder's contents to the repository. Keep index.html at the repository root and retain the models folder.
3. In Vercel, select Add New > Project and import the repository.
4. Set the project name to waqar-titanic-prediction, Framework Preset to Other, Root Directory to the repository root, Build Command to empty and Output Directory to a single dot: .
5. Click Deploy and open the URL Vercel gives you.
6. Test First / Male / Zero / Southampton: survived. Test Third / Male / Zero / Southampton: not survived.
7. Replace the deployment link in the first cell of Titanic_Passenger_Survival.ipynb with your new Vercel URL and save the notebook.

The Jupyter notebook, original dataset and pickle model remain in Task_1_Titanic.zip. Keep those for the assignment submission. This folder is only for online deployment.

The project name controls the Vercel address subject to availability. The displayed student details can be edited in index.html. This package has been prepared and tested locally; it has not been deployed to your Vercel account.
