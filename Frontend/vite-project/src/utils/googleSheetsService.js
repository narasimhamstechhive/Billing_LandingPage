export const submitToGoogleSheets = async (formData, formType) => {
    try {
        let SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

        // Robust cleanup: User might have pasted "VITE_GOOGLE_SCRIPT_URL=https://..." into the value field
        if (SCRIPT_URL && SCRIPT_URL.startsWith('VITE_GOOGLE_SCRIPT_URL=')) {
            SCRIPT_URL = SCRIPT_URL.replace('VITE_GOOGLE_SCRIPT_URL=', '');
        }

        if (!SCRIPT_URL) {
            console.warn('Google Sheets Integration: VITE_GOOGLE_SCRIPT_URL is not set in .env');
            return { success: false, message: 'Configuration Error: Script URL missing.' };
        }

        console.log("Submitting to:", SCRIPT_URL);

        // Create FormData (reliable for Apps Script no-cors)
        const formBody = new FormData();
        Object.keys(formData).forEach(key => formBody.append(key, formData[key]));
        formBody.append('formType', formType);
        formBody.append('submissionDate', new Date().toISOString());

        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formBody
            // No headers needed, browser sets content-type for FormData
        });

        // With no-cors, we can't read the response, but we assume success if no error thrown
        return { success: true, message: 'Submitted successfully' };
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return { success: false, message: 'Failed to submit. Please try again.' };
    }
};
