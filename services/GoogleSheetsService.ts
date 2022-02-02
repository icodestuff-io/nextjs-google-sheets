import {google} from "googleapis";
const { GoogleSpreadsheet } = require('google-spreadsheet');

export type SheetForm = {
    name: string
    email: string
    phone: string
    message: string
}

export async function submitToGoogleSheets(values: SheetForm) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })

    const sheets = google.sheets({
        auth,
        version: 'v4'
    });

    return await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1:D1',
        valueInputOption: 'FORM_SUBMITTED',
        requestBody: {
            values: [
                [values.name, values.email, values.phone, values.message]
            ]
        }
    });
}

export async function submitToGoogleSheets2(values: SheetForm) {
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo(); // loads document properties and worksheets
}

