const DB = require("../../../lib/sqlite");

class IdentifierType extends DB {
    constructor() {
        super("IdentifierType");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "AC",
                    "display": "Accreditation/Certification Identifier",
                    "definition": "Identifier that has been assigned by an accreditation or certification organization in specific fields, indicating a recognized skill"
                },
                {
                    "code": "ACSN",
                    "display": "Accession ID",
                    "definition": "Accession Identifier"
                },
                {
                    "code": "AIN",
                    "display": "Animal Identification Number (US Official)",
                    "definition": "A numbering system for the official identification of individual animals in the United States that provides a nationally unique identification number for each animal. The first two numbers on a tag are the numbers assigned to a specific State."
                },
                {
                    "code": "AM",
                    "display": "American Express",
                    "definition": "American Express"
                },
                {
                    "code": "AMA",
                    "display": "American Medical Association Number",
                    "definition": "A physician identifier assigned by the AMA."
                },
                {
                    "code": "AN",
                    "display": "Account number",
                    "definition": "Account An identifier that is unique to an account."
                },
                {
                    "code": "ANC",
                    "display": "Account number Creditor",
                    "definition": "A more precise definition of an account number"
                },
                {
                    "code": "AND",
                    "display": "Account number debitor",
                    "definition": "A more precise definition of an account number"
                },
                {
                    "code": "ANON",
                    "display": "Anonymous identifier",
                    "definition": "An identifier for a living subject whose real identity is protected or suppressed"
                },
                {
                    "code": "ANT",
                    "display": "Temporary Account Number",
                    "definition": "Temporary version of an Account Number"
                },
                {
                    "code": "APRN",
                    "display": "Advanced Practice Registered Nurse number",
                    "definition": "An identifier that is unique to an advanced practice registered nurse within the jurisdiction of a certifying board"
                },
                {
                    "code": "ASID",
                    "display": "Ancestor Specimen ID",
                    "definition": "A unique identifier for the ancestor specimen."
                },
                {
                    "code": "BA",
                    "display": "Bank Account Number",
                    "definition": "Bank Account Number"
                },
                {
                    "code": "BC",
                    "display": "Bank Card Number",
                    "definition": "An identifier that is unique to a person's bank card"
                },
                {
                    "code": "BCFN",
                    "display": "Birth Certificate File Number",
                    "definition": "The identifier used within the jurisdictional vital records office file system as an auxiliary means of accessing the record associated with the birth certificate."
                },
                {
                    "code": "BCT",
                    "display": "Birth Certificate",
                    "definition": "A number associated with a document identifying the event of a person's birth"
                },
                {
                    "code": "BR",
                    "display": "Birth registry number",
                    "definition": "An identifier unique within the Assigning Authority that is the official legal record of a person's birth."
                },
                {
                    "code": "BRN",
                    "display": "Breed Registry Number",
                    "definition": "Breed Registry Number"
                },
                {
                    "code": "BSNR",
                    "display": "Primary physician office number",
                    "definition": "Primary physician office number"
                },
                {
                    "code": "CAAI",
                    "display": "Consumer Application Account Identifier",
                    "definition": "An identifier for the consumer (e.g., patient, caregiver) for an application such as a portal or App."
                },
                {
                    "code": "CC",
                    "display": "Cost Center number",
                    "definition": "Cost Center number"
                },
                {
                    "code": "CONM",
                    "display": "Change of Name Document",
                    "definition": "A number associated with a document identifying a person's legal change of name."
                },
                {
                    "code": "CY",
                    "display": "County number",
                    "definition": "County number"
                },
                {
                    "code": "CZ",
                    "display": "Citizenship Card",
                    "definition": "A number assigned by a person's country of residence to identify a person's citizenship."
                },
                {
                    "code": "DC",
                    "display": "Death Certificate ID",
                    "definition": "The identifier assigned to a death certificate, and printed on the death certificate when issued by a jurisdictional vital records office"
                },
                {
                    "code": "DCFN",
                    "display": "Death Certificate File Number",
                    "definition": "The identifier used within the jurisdictional vital records office file system as an auxiliary means of accessing the record associated with the death certificate."
                },
                {
                    "code": "DDS",
                    "display": "Dentist license number",
                    "definition": "An identifier that is unique to a dentist within the jurisdiction of the licensing board"
                },
                {
                    "code": "DEA",
                    "display": "Drug Enforcement Administration registration number",
                    "definition": "An identifier for an individual or organization relative to controlled substance regulation and transactions."
                },
                {
                    "code": "DFN",
                    "display": "Drug Furnishing or prescriptive authority Number",
                    "definition": "An identifier issued to a health care provider authorizing the person to write drug orders"
                },
                {
                    "code": "DI",
                    "display": "Diner's Club card",
                    "definition": "Diner's Club card"
                },
                {
                    "code": "DL",
                    "display": "Driver's license number",
                    "definition": "Driver's license number"
                },
                {
                    "code": "DN",
                    "display": "Doctor number",
                    "definition": "Doctor number"
                },
                {
                    "code": "DO",
                    "display": "Osteopathic License number",
                    "definition": "An identifier that is unique to an osteopath within the jurisdiction of a licensing board."
                },
                {
                    "code": "DP",
                    "display": "Diplomatic Passport",
                    "definition": "A number assigned to a diplomatic passport."
                },
                {
                    "code": "DPM",
                    "display": "Podiatrist license number",
                    "definition": "An identifier that is unique to a podiatrist within the jurisdiction of the licensing board."
                },
                {
                    "code": "DR",
                    "display": "Donor Registration Number",
                    "definition": "Donor Registration Number"
                },
                {
                    "code": "DS",
                    "display": "Discover Card",
                    "definition": "Discover Card"
                },
                {
                    "code": "DSG",
                    "display": "Diagnostic Study Group",
                    "definition": "Unique Identifier that groups several orders that are to be performed together."
                },
                {
                    "code": "EI",
                    "display": "Employee number",
                    "definition": "A number that uniquely identifies an employee to an employer."
                },
                {
                    "code": "EN",
                    "display": "Employer number",
                    "definition": "Employer number"
                },
                {
                    "code": "ESN",
                    "display": "Staff Enterprise Number",
                    "definition": "An identifier that is unique to a staff member within an enterprise (as identified by the Assigning Authority)."
                },
                {
                    "code": "FDR",
                    "display": "Fetal Death Report ID",
                    "definition": "The identifier assigned to a fetal death report, and printed on the fetal death report when issued by a jurisdictional vital records office"
                },
                {
                    "code": "FDRFN",
                    "display": "Fetal Death Report File Number",
                    "definition": "The identifier used within the jurisdictional vital records office file system as an auxiliary means of accessing the record associated with the fetal death report certificate."
                },
                {
                    "code": "FGN",
                    "display": "Filler Group Number",
                    "definition": "Unique identifier assigned to a group of orders by the filler application."
                },
                {
                    "code": "FI",
                    "display": "Facility ID",
                    "definition": "Facility ID"
                },
                {
                    "code": "FILL",
                    "display": "Filler Identifier",
                    "definition": "An identifier for a request where the identifier is issued by the person, or service, that produces the observations or fulfills the request."
                },
                {
                    "code": "GI",
                    "display": "Guarantor internal identifier",
                    "definition": "Guarantor internal identifier"
                },
                {
                    "code": "GIN",
                    "display": "Animal Group Identifier (US Official)",
                    "definition": "Identifier that can be used to unambiguously describe a specific group of animals."
                },
                {
                    "code": "GL",
                    "display": "General ledger number",
                    "definition": "General ledger number"
                },
                {
                    "code": "GN",
                    "display": "Guarantor external  identifier",
                    "definition": "Guarantor external  identifier"
                },
                {
                    "code": "HC",
                    "display": "Health Card Number",
                    "definition": "Health Card Number"
                },
                {
                    "code": "IND",
                    "display": "Indigenous/Aboriginal",
                    "definition": "A number assigned to a member of an indigenous or aboriginal group outside of Canada."
                },
                {
                    "code": "IRISTEM",
                    "display": "An IRI stem",
                    "definition": "An IRI string that can be prepended to the code to obtain a concept IRI for RDF applications. This should be a valid, absolute IRI as defined in RFC 3987. See https://build.fhir.org/rdf.html#iri-stem for details on how this value may be used."
                },
                {
                    "code": "JHN",
                    "display": "Jurisdictional health number",
                    "definition": "Jurisdictional health number"
                },
                {
                    "code": "LACSN",
                    "display": "Laboratory Accession ID",
                    "definition": "A laboratory accession id is used in the laboratory domain."
                },
                {
                    "code": "LANR",
                    "display": "Lifelong physician number",
                    "definition": "Lifelong physician number"
                },
                {
                    "code": "LI",
                    "display": "Labor and industries number",
                    "definition": "Labor and industries number"
                },
                {
                    "code": "L&I",
                    "display": "Labor and industries number",
                    "definition": "Labor and industries number.  Note that this was introduced erroneously (with an ampersand in the code value) many years ago."
                },
                {
                    "code": "LN",
                    "display": "License number",
                    "definition": "License number"
                },
                {
                    "code": "LR",
                    "display": "Local Registry ID",
                    "definition": "Local Registry ID"
                },
                {
                    "code": "MA",
                    "display": "Patient Medicaid number",
                    "definition": "Patient Medicaid number"
                },
                {
                    "code": "MB",
                    "display": "Member Number",
                    "definition": "An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
                },
                {
                    "code": "MC",
                    "display": "Patient's Medicare number",
                    "definition": "Patient's Medicare number"
                },
                {
                    "code": "MCD",
                    "display": "Practitioner Medicaid number",
                    "definition": "Practitioner Medicaid number"
                },
                {
                    "code": "MCN",
                    "display": "Microchip Number",
                    "definition": "Microchip Number"
                },
                {
                    "code": "MCR",
                    "display": "Practitioner Medicare number",
                    "definition": "Practitioner Medicare number"
                },
                {
                    "code": "MCT",
                    "display": "Marriage Certificate",
                    "definition": "A number associated with a document identifying the event of a person's marriage."
                },
                {
                    "code": "MD",
                    "display": "Medical License number",
                    "definition": "An identifier that is unique to a medical doctor within the jurisdiction of a licensing board."
                },
                {
                    "code": "MI",
                    "display": "Military ID number",
                    "definition": "A number assigned to an individual who has had military duty, but is not currently on active duty. The number is assigned by the DOD or Veterans' Affairs (VA)."
                },
                {
                    "code": "MR",
                    "display": "Medical record number",
                    "definition": "An identifier that is unique to a patient within a set of medical records, not necessarily unique within an application."
                },
                {
                    "code": "MRT",
                    "display": "Temporary Medical Record Number",
                    "definition": "Temporary version of a Medical Record Number"
                },
                {
                    "code": "MS",
                    "display": "MasterCard",
                    "definition": "MasterCard"
                },
                {
                    "code": "NBSNR",
                    "display": "Secondary physician office number",
                    "definition": "Secondary physician office number"
                },
                {
                    "code": "NCT",
                    "display": "Naturalization Certificate",
                    "definition": "A number associated with a document identifying a person's retention of citizenship in a particular country."
                },
                {
                    "code": "NE",
                    "display": "National employer identifier",
                    "definition": "National employer identifier"
                },
                {
                    "code": "NH",
                    "display": "National Health Plan Identifier",
                    "definition": "National Health Plan Identifier"
                },
                {
                    "code": "NI",
                    "display": "National unique individual identifier",
                    "definition": "National unique individual identifier"
                },
                {
                    "code": "NII",
                    "display": "National Insurance Organization Identifier",
                    "definition": "National Insurance Organization Identifier"
                },
                {
                    "code": "NIIP",
                    "display": "National Insurance Payor Identifier (Payor)",
                    "definition": "National Insurance Payor Identifier (Payor)"
                },
                {
                    "code": "NNxxx",
                    "display": "National Person Identifier where the xxx is the ISO table 3166 3-character (alphabetic) country code",
                    "definition": "National Person Identifier where the xxx is the ISO table 3166 3-character (alphabetic) country code"
                },
                {
                    "code": "NP",
                    "display": "Nurse practitioner number",
                    "definition": "An identifier that is unique to a nurse practitioner within the jurisdiction of a certifying board."
                },
                {
                    "code": "NPI",
                    "display": "National provider identifier",
                    "definition": "National provider identifier"
                },
                {
                    "code": "OBI",
                    "display": "Observation Instance Identifier",
                    "definition": "Unique and persistent identifier for an observation instance"
                },
                {
                    "code": "OD",
                    "display": "Optometrist license number",
                    "definition": "A number that is unique to an individual optometrist within the jurisdiction of the licensing board."
                },
                {
                    "code": "PA",
                    "display": "Physician Assistant number",
                    "definition": "An identifier that is unique to a physician assistant within the jurisdiction of a licensing board"
                },
                {
                    "code": "PC",
                    "display": "Parole Card",
                    "definition": "A number identifying a person on parole."
                },
                {
                    "code": "PCN",
                    "display": "Penitentiary/correctional institution Number",
                    "definition": "A number assigned to individual who is incarcerated."
                },
                {
                    "code": "PE",
                    "display": "Living Subject Enterprise Number",
                    "definition": "An identifier that is unique to a living subject within an enterprise (as identified by the Assigning Authority)."
                },
                {
                    "code": "PEN",
                    "display": "Pension Number",
                    "definition": "Pension Number"
                },
                {
                    "code": "PGN",
                    "display": "Placer Group Number",
                    "definition": "Unique identifier assigned to a group of orders by the placer application."
                },
                {
                    "code": "PHC",
                    "display": "Public Health Case Identifier",
                    "definition": "Identifier assigned to a person during a case investigation as part of a public health event"
                },
                {
                    "code": "PHE",
                    "display": "Public Health Event Identifier",
                    "definition": "Identifier assigned to an event of interest to public health"
                },
                {
                    "code": "PHO",
                    "display": "Public Health Official ID",
                    "definition": "An identifier for a person working at a public health agency (PHA),  assigned or issued by the agency"
                },
                {
                    "code": "PI",
                    "display": "Patient internal identifier",
                    "definition": "A number that is unique to a patient within an Assigning Authority."
                },
                {
                    "code": "PIN",
                    "display": "Premises Identifier Number (US Official)",
                    "definition": "Identifier that uniquely identifies a geographic location in the US."
                },
                {
                    "code": "PLAC",
                    "display": "Placer Identifier",
                    "definition": "An identifier for a request where the identifier is issued by the person or service making the request."
                },
                {
                    "code": "PN",
                    "display": "Person number",
                    "definition": "A number that is unique to a living subject within an Assigning Authority."
                },
                {
                    "code": "PNT",
                    "display": "Temporary Living Subject Number",
                    "definition": "Temporary version of a Living Subject Number."
                },
                {
                    "code": "PPIN",
                    "display": "Medicare/CMS Performing Provider Identification Number",
                    "definition": "Medicare/CMS Performing Provider Identification Number"
                },
                {
                    "code": "PPN",
                    "display": "Passport number",
                    "definition": "A unique number assigned to the document affirming that a person is a citizen of the country."
                },
                {
                    "code": "PRC",
                    "display": "Permanent Resident Card Number",
                    "definition": "Permanent Resident Card Number"
                },
                {
                    "code": "PRN",
                    "display": "Provider number",
                    "definition": "A number that is unique to an individual provider, a provider group or an organization within an Assigning Authority."
                },
                {
                    "code": "PT",
                    "display": "Patient external identifier",
                    "definition": "Patient external identifier"
                },
                {
                    "code": "QA",
                    "display": "QA number",
                    "definition": "QA number"
                },
                {
                    "code": "RI",
                    "display": "Resource identifier",
                    "definition": "A generalized resource identifier."
                },
                {
                    "code": "RN",
                    "display": "Registered Nurse Number",
                    "definition": "An identifier that is unique to a registered nurse within the jurisdiction of the licensing board."
                },
                {
                    "code": "RPH",
                    "display": "Pharmacist license number",
                    "definition": "An identifier that is unique to a pharmacist within the jurisdiction of the licensing board."
                },
                {
                    "code": "RR",
                    "display": "Railroad Retirement number",
                    "definition": "An identifier for an individual enrolled with the Railroad Retirement Administration.  Analogous to, but distinct from, a Social Security Number"
                },
                {
                    "code": "RRI",
                    "display": "Regional registry ID",
                    "definition": "Regional registry ID"
                },
                {
                    "code": "RRP",
                    "display": "Railroad Retirement Provider",
                    "definition": "Railroad Retirement Provider"
                },
                {
                    "code": "SAMN",
                    "display": "SAMN# accession Number",
                    "definition": "The accession number for the BioSample data repository at the National Center for Biotechnology Information (NCBI)"
                },
                {
                    "code": "SB",
                    "display": "Social Beneficiary Identifier",
                    "definition": "An identifier issued by a governmental organization to a person to identify the person should they apply for or receive social services and/or benefits"
                },
                {
                    "code": "SID",
                    "display": "Specimen ID",
                    "definition": "Identifier for a specimen."
                },
                {
                    "code": "SL",
                    "display": "State license",
                    "definition": "State license"
                },
                {
                    "code": "SN",
                    "display": "Subscriber Number",
                    "definition": "An identifier for a subscriber of an insurance policy which is unique for, and usually assigned by, the insurance carrier."
                },
                {
                    "code": "SNBSN",
                    "display": "State assigned NDBS card Identifier",
                    "definition": "The identifier on a Newborn Screening Dried Bloodspot (NDBS) card that is assigned by the state which provided the sample collection cards and to whom this information must be reported"
                },
                {
                    "code": "SNO",
                    "display": "Serial Number",
                    "definition": "An identifier affixed to an item by the manufacturer when it is first made, where each item has a different identifier."
                },
                {
                    "code": "SP",
                    "display": "Study Permit",
                    "definition": "A number associated with a permit identifying a person who is a resident of a jurisdiction for the purpose of education."
                },
                {
                    "code": "SR",
                    "display": "State registry ID",
                    "definition": "State registry ID"
                },
                {
                    "code": "SRX",
                    "display": "SRA Accession number",
                    "definition": "The accession number generated by the Sequence Read Archive (SRA) at the National Center for Biotechnology Information (NCBI) when sequence data are uploaded to NCBI."
                },
                {
                    "code": "SS",
                    "display": "Social Security number",
                    "definition": "Social Security number"
                },
                {
                    "code": "STN",
                    "display": "Shipment Tracking Number",
                    "definition": "Identifier assigned to a package being shipped"
                },
                {
                    "code": "TAX",
                    "display": "Tax ID number",
                    "definition": "Tax ID number"
                },
                {
                    "code": "TN",
                    "display": "Treaty Number/ (Canada)",
                    "definition": "A number assigned to a member of an indigenous group in Canada."
                },
                {
                    "code": "TPR",
                    "display": "Temporary Permanent Resident (Canada)",
                    "definition": "A number associated with a document identifying a person's temporary permanent resident status."
                },
                {
                    "code": "TRL",
                    "display": "Training License Number",
                    "definition": "The license number used during training."
                },
                {
                    "code": "U",
                    "display": "Unspecified identifier",
                    "definition": "Unspecified identifier"
                },
                {
                    "code": "UDI",
                    "display": "Universal Device Identifier",
                    "definition": "An identifier assigned to a device using the Unique Device Identification framework as defined by IMDRF (http://imdrf.org)."
                },
                {
                    "code": "UPIN",
                    "display": "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    "definition": "An identifier for a provider within the CMS/Medicare program.  A globally unique identifier for the provider in the Medicare program."
                },
                {
                    "code": "USID",
                    "display": "Unique Specimen ID",
                    "definition": "A unique identifier for a specimen."
                },
                {
                    "code": "VN",
                    "display": "Visit number",
                    "definition": "Visit number"
                },
                {
                    "code": "VP",
                    "display": "Visitor Permit",
                    "definition": "A number associated with a document identifying a person as a visitor of a jurisdiction or country."
                },
                {
                    "code": "VS",
                    "display": "VISA",
                    "definition": "VISA"
                },
                {
                    "code": "WC",
                    "display": "WIC identifier",
                    "definition": "WIC identifier"
                },
                {
                    "code": "WCN",
                    "display": "Workers' Comp Number",
                    "definition": "Workers' Comp Number"
                },
                {
                    "code": "WP",
                    "display": "Work Permit",
                    "definition": "A number associated with a permit for a person who is granted permission to work in a country for a specified time period."
                },
                {
                    "code": "XV",
                    "display": "Health Plan Identifier",
                    "definition": "National unique health plan identifier required by the US Department of Health and Human Services, Centers for Medicare and Medicaid Services (CMS) in the US Realm."
                },
                {
                    "code": "XX",
                    "display": "Organization identifier",
                    "definition": "Organization identifier"
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

module.exports = IdentifierType;
