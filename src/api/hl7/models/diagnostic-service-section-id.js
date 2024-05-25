const DB = require("../../../lib/sqlite");

class DiagnosticServiceSectionId extends DB {
    constructor() {
        super("DiagnosticServiceSectionId");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "AU",
                    "display": "Audiology",
                    "definition": "Audiology"
                },
                {
                    "code": "BG",
                    "display": "Blood Gases",
                    "definition": "Blood Gases"
                },
                {
                    "code": "BLB",
                    "display": "Blood Bank",
                    "definition": "Blood Bank"
                },
                {
                    "code": "CG",
                    "display": "Cytogenetics",
                    "definition": "Cytogenetics"
                },
                {
                    "code": "CUS",
                    "display": "Cardiac Ultrasound",
                    "definition": "Cardiac Ultrasound"
                },
                {
                    "code": "CTH",
                    "display": "Cardiac Catheterization",
                    "definition": "Cardiac Catheterization"
                },
                {
                    "code": "CT",
                    "display": "CAT Scan",
                    "definition": "CAT Scan"
                },
                {
                    "code": "CH",
                    "display": "Chemistry",
                    "definition": "Chemistry"
                },
                {
                    "code": "CP",
                    "display": "Cytopathology",
                    "definition": "Cytopathology"
                },
                {
                    "code": "EC",
                    "display": "Electrocardiac (e.g., EKG,  EEC, Holter)",
                    "definition": "Electrocardiac (e.g., EKG,  EEC, Holter)"
                },
                {
                    "code": "EN",
                    "display": "Electroneuro (EEG, EMG,EP,PSG)",
                    "definition": "Electroneuro (EEG, EMG,EP,PSG)"
                },
                {
                    "code": "GE",
                    "display": "Genetics",
                    "definition": "Genetics"
                },
                {
                    "code": "HM",
                    "display": "Hematology",
                    "definition": "Hematology"
                },
                {
                    "code": "IMG",
                    "display": "Diagnostic Imaging",
                    "definition": "Diagnostic Imaging"
                },
                {
                    "code": "ICU",
                    "display": "Bedside ICU Monitoring",
                    "definition": "Bedside ICU Monitoring"
                },
                {
                    "code": "IMM",
                    "display": "Immunology",
                    "definition": "Immunology"
                },
                {
                    "code": "LAB",
                    "display": "Laboratory",
                    "definition": "Laboratory"
                },
                {
                    "code": "MB",
                    "display": "Microbiology",
                    "definition": "Microbiology"
                },
                {
                    "code": "MCB",
                    "display": "Mycobacteriology",
                    "definition": "Mycobacteriology"
                },
                {
                    "code": "MYC",
                    "display": "Mycology",
                    "definition": "Mycology"
                },
                {
                    "code": "NMS",
                    "display": "Nuclear Medicine Scan",
                    "definition": "Nuclear Medicine Scan"
                },
                {
                    "code": "NMR",
                    "display": "Nuclear Magnetic Resonance",
                    "definition": "Nuclear Magnetic Resonance"
                },
                {
                    "code": "NRS",
                    "display": "Nursing Service Measures",
                    "definition": "Nursing Service Measures"
                },
                {
                    "code": "OUS",
                    "display": "OB Ultrasound",
                    "definition": "OB Ultrasound"
                },
                {
                    "code": "OT",
                    "display": "Occupational Therapy",
                    "definition": "Occupational Therapy"
                },
                {
                    "code": "OTH",
                    "display": "Other",
                    "definition": "Other"
                },
                {
                    "code": "OSL",
                    "display": "Outside Lab",
                    "definition": "Outside Lab"
                },
                {
                    "code": "PAR",
                    "display": "Parasitology",
                    "definition": "Parasitology"
                },
                {
                    "code": "PHR",
                    "display": "Pharmacy",
                    "definition": "Pharmacy"
                },
                {
                    "code": "PAT",
                    "display": "Pathology (gross & histopath, not surgical)",
                    "definition": "Pathology (gross & histopath, not surgical)"
                },
                {
                    "code": "PT",
                    "display": "Physical Therapy",
                    "definition": "Physical Therapy"
                },
                {
                    "code": "PHY",
                    "display": "Physician (Hx. Dx, admission note, etc.)",
                    "definition": "Physician (Hx. Dx, admission note, etc.)"
                },
                {
                    "code": "PF",
                    "display": "Pulmonary Function",
                    "definition": "Pulmonary Function"
                },
                {
                    "code": "RAD",
                    "display": "Radiology",
                    "definition": "Radiology"
                },
                {
                    "code": "RX",
                    "display": "Radiograph",
                    "definition": "Radiograph"
                },
                {
                    "code": "RUS",
                    "display": "Radiology Ultrasound",
                    "definition": "Radiology Ultrasound"
                },
                {
                    "code": "RC",
                    "display": "Respiratory Care (therapy)",
                    "definition": "Respiratory Care (therapy)"
                },
                {
                    "code": "RT",
                    "display": "Radiation Therapy",
                    "definition": "Radiation Therapy"
                },
                {
                    "code": "SR",
                    "display": "Serology",
                    "definition": "Serology"
                },
                {
                    "code": "SP",
                    "display": "Surgical Pathology",
                    "definition": "Surgical Pathology"
                },
                {
                    "code": "TX",
                    "display": "Toxicology",
                    "definition": "Toxicology"
                },
                {
                    "code": "VUS",
                    "display": "Vascular Ultrasound",
                    "definition": "Vascular Ultrasound"
                },
                {
                    "code": "VR",
                    "display": "Virology",
                    "definition": "Virology"
                },
                {
                    "code": "URN",
                    "display": "Urinalysis",
                    "definition": "Urinalysis"
                },
                {
                    "code": "XRC",
                    "display": "Cineradiograph",
                    "definition": "Cineradiograph"
                }
            ];
            for (const doc of docs) {
                doc._id=doc.code;
                await this.put(doc);
            }
        }

        return Promise.resolve();
    }
}

module.exports = DiagnosticServiceSectionId;
