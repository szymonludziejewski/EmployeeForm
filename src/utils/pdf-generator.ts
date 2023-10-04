import { jsPDF } from "jspdf";

export function generatePDF(userObject: any) {
    const doc = new jsPDF();
    doc.text(userObject.name, 10, 10);
    doc.text(userObject.surname, 10, 20);
    doc.text(userObject.contractDate, 10, 30);
    doc.addImage(userObject.photo,'PNG', 10, 40, 100, 100);
    return doc;
}