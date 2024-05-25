const DB = require("../../../lib/sqlite");

class ParticipationType extends DB {
    constructor() {
        super("ParticipationType");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "PART",
                    "display": "Participation",
                    "definition": "Indicates that the target of the participation is involved in some manner in the act, but does not qualify how."
                },
                {
                    "code": "_ParticipationAncillary",
                    "display": "ParticipationAncillary",
                    "definition": "Participations related, but not primary to an act. The Referring, Admitting, and Discharging practitioners must be the same person as those authoring the ControlAct event for their respective trigger events."
                },
                {
                    "code": "ADM",
                    "display": "admitter",
                    "definition": "The practitioner who is responsible for admitting a patient to a patient encounter."
                },
                {
                    "code": "ATND",
                    "display": "attender",
                    "definition": "The practitioner that has responsibility for overseeing a patient's care during a patient encounter."
                },
                {
                    "code": "CALLBCK",
                    "display": "callback contact",
                    "definition": "A person or organization who should be contacted for follow-up questions about the act in place of the author."
                },
                {
                    "code": "CON",
                    "display": "consultant",
                    "definition": "An advisor participating in the service by performing evaluations and making recommendations."
                },
                {
                    "code": "DIS",
                    "display": "discharger",
                    "definition": "The practitioner who is responsible for the discharge of a patient from a patient encounter."
                },
                {
                    "code": "ESC",
                    "display": "escort",
                    "definition": "Only with Transportation services. A person who escorts the patient."
                },
                {
                    "code": "REF",
                    "display": "referrer",
                    "definition": "A person having referred the subject of the service to the performer (referring physician). Typically, a referring physician will receive a report."
                },
                {
                    "code": "_ParticipationInformationGenerator",
                    "display": "ParticipationInformationGenerator",
                    "definition": "Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g., consultant), information that the Act itself seeks to reveal (e.g., informant of clinical history), or information about what Act was performed (e.g., informant witness)."
                },
                {
                    "code": "AUT",
                    "display": "author (originator)",
                    "definition": "**Definition:** A party that originates the Act and therefore has responsibility for the information given in the Act and ownership of this Act.\r\n\r\n**Example:** the report writer, the person writing the act definition, the guideline author, the placer of an order, the EKG cart (device) creating a report etc. Every Act should have an author. Authorship is regardless of mood always actual authorship.\r\n\r\nExamples of such policies might include:\r\n\r\n *  The author and anyone they explicitly delegate may update the report;\r\n *  All administrators within the same clinic may cancel and reschedule appointments created by other administrators within that clinic;\r\n\r\nA party that is neither an author nor a party who is extended authorship maintenance rights by policy, may only amend, reverse, override, replace, or follow up in other ways on this Act, whereby the Act remains intact and is linked to another Act authored by that other party."
                },
                {
                    "code": "INF",
                    "display": "informant",
                    "definition": "A source of reported information (e.g., a next of kin who answers questions about the patient's history). For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject."
                },
                {
                    "code": "TRANS",
                    "display": "Transcriber",
                    "definition": "An entity entering the data into the originating system. The data entry entity is collected optionally for internal quality control purposes. This includes the transcriptionist for dictated text transcribed into electronic form."
                },
                {
                    "code": "ENT",
                    "display": "data entry person",
                    "definition": "A person entering the data into the originating system. The data entry person is collected optionally for internal quality control purposes. This includes the transcriptionist for dictated text."
                },
                {
                    "code": "WIT",
                    "display": "witness",
                    "definition": "Only with service events. A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness."
                },
                {
                    "code": "NOTARY",
                    "display": "notary",
                    "definition": "The entity (person or organization) who legally attests that the information present in the Act is a true replica of an original."
                },
                {
                    "code": "CST",
                    "display": "custodian",
                    "definition": "An entity (person, organization or device) that is in charge of maintaining the information of this act (e.g., who maintains the report or the master service catalog item, etc.)."
                },
                {
                    "code": "DIR",
                    "display": "direct target",
                    "definition": "Target participant that is substantially present in the act and which is directly involved in the action (includes consumed material, devices, etc.)."
                },
                {
                    "code": "ALY",
                    "display": "analyte",
                    "definition": "The target of an Observation action. Links an observation to a Role whose player is the substance or most specific component entity (material, micro-organism, etc.) being measured within the subject.\r\n\r\n*Examples:* A \"plasma porcelain substance concentration\" has analyte a Role with player substance Entity \"porcelain\".\r\n\r\n*UsageNotes:* The Role that this participation connects to may be any Role whose player is that substance measured. Very often, the scoper may indicate the system in which the component is being measured. E.g., for \"plasma porcelain\" the scoper could be \"Plasma\"."
                },
                {
                    "code": "BBY",
                    "display": "baby",
                    "definition": "In an obstetric service, the baby."
                },
                {
                    "code": "CAT",
                    "display": "catalyst",
                    "definition": "The catalyst of a chemical reaction, such as an enzyme or a platinum surface. In biochemical reactions, connects the enzyme with the molecular interaction"
                },
                {
                    "code": "CSM",
                    "display": "consumable",
                    "definition": "Participant material that is taken up, diminished, altered, or disappears in the act."
                },
                {
                    "code": "TPA",
                    "display": "therapeutic agent",
                    "definition": "Something incorporated in the subject of a therapy service to achieve a physiologic effect (e.g., heal, relieve, provoke a condition, etc.) on the subject. In an administration service the therapeutic agent is a consumable, in a preparation or dispense service, it is a product. Thus, consumable or product must be specified in accordance with the kind of service."
                },
                {
                    "code": "DEV",
                    "display": "device",
                    "definition": "Participant used in performing the act without being substantially affected by the act (i.e. durable or inert with respect to that particular service).\r\n\r\n*Examples:* monitoring equipment, tools, but also access/drainage lines, prostheses, pace maker, etc."
                },
                {
                    "code": "NRD",
                    "display": "non-reuseable device",
                    "definition": "A device that changes ownership due to the service, e.g., a pacemaker, a prosthesis, an insulin injection equipment (pen), etc. Such material may need to be restocked after he service."
                },
                {
                    "code": "RDV",
                    "display": "reusable device",
                    "definition": "A device that does not change ownership due to the service, i.e., a surgical instrument or tool or an endoscope. The distinction between reuseable and non-reuseable must be made in order to know whether material must be re-stocked."
                },
                {
                    "code": "DON",
                    "display": "donor",
                    "definition": "In some organ transplantation services and rarely in transfusion services a donor will be a target participant in the service. However, in most cases transplantation is decomposed in three services: explantation, transport, and implantation. The identity of the donor (recipient) is often irrelevant for the explantation (implantation) service."
                },
                {
                    "code": "EXPAGNT",
                    "display": "ExposureAgent",
                    "definition": "**Description:** The entity playing the associated role is the physical (including energy), chemical or biological substance that is participating in the exposure. For example in communicable diseases, the associated playing entity is the disease causing pathogen."
                },
                {
                    "code": "EXPART",
                    "display": "ExposureParticipation",
                    "definition": "**Description:**Direct participation in an exposure act where it is unknown that the participant is the source or subject of the exposure. If the participant is known to be the contact of an exposure then the SBJ participation type should be used. If the participant is known to be the source then the EXSRC participation type should be used."
                },
                {
                    "code": "EXPTRGT",
                    "display": "ExposureTarget",
                    "definition": "**Description:** The entity playing the associated role is the target (contact) of exposure."
                },
                {
                    "code": "EXSRC",
                    "display": "ExposureSource",
                    "definition": "**Description:**The entity playing the associated role is the source of exposure."
                },
                {
                    "code": "PRD",
                    "display": "product",
                    "definition": "Participant material that is brought forth (produced) in the act (e.g., specimen in a specimen collection, access or drainage in a placement service, medication package in a dispense service). It does not matter whether the material produced had existence prior to the service, or whether it is created in the service (e.g., in supply services the product is taken from a stock)."
                },
                {
                    "code": "SBJ",
                    "display": "subject",
                    "definition": "The principle target on which the action happens.\r\n\r\n*Examples:* The patient in physical examination, a specimen in a lab observation. May also be a patient's family member (teaching) or a device or room (cleaning, disinfecting, housekeeping).\r\n\r\n*UsageNotes:* Not all direct targets are subjects. Consumables and devices used as tools for an act are not subjects. However, a device may be a subject of a maintenance action."
                },
                {
                    "code": "SPC",
                    "display": "specimen",
                    "definition": "The subject of non-clinical (e.g. laboratory) observation services is a specimen."
                },
                {
                    "code": "IND",
                    "display": "indirect target",
                    "definition": "Target that is not substantially present in the act and which is not directly affected by the act, but which will be a focus of the record or documentation of the act."
                },
                {
                    "code": "BEN",
                    "display": "beneficiary",
                    "definition": "Target on behalf of whom the service happens, but that is not necessarily present in the service. Can occur together with direct target to indicate that a target is both, as in the case where the patient is the indirect beneficiary of a service rendered to a family member, e.g. counseling or given home care instructions. This concept includes a participant, such as a covered party, who derives benefits from a service act covered by a coverage act.\r\n\r\nNote that the semantic role of the intended recipient who benefits from the happening denoted by the verb in the clause. Thus, a patient who has no coverage under a policy or program may be a beneficiary of a health service while not being the beneficiary of coverage for that service."
                },
                {
                    "code": "CAGNT",
                    "display": "causative agent",
                    "definition": "Definition: A factor, such as a microorganism, chemical substance, or form of radiation, whose presence, excessive presence, or (in deficiency diseases) relative absence is essential, in whole or in part, for the occurrence of a condition.\r\n\r\nConstraint: The use of this participation is limited to observations."
                },
                {
                    "code": "COV",
                    "display": "coverage target",
                    "definition": "The target participation for an individual in a health care coverage act in which the target role is either the policy holder of the coverage, or a covered party under the coverage."
                },
                {
                    "code": "GUAR",
                    "display": "guarantor party",
                    "definition": "The target person or organization contractually recognized by the issuer as a participant who has assumed fiscal responsibility for another personaTMs financial obligations by guaranteeing to pay for amounts owed to a particular account\r\n\r\n*Example:*The subscriber of the patientaTMs health insurance policy signs a contract with the provider to be fiscally responsible for the patient billing account balance amount owed."
                },
                {
                    "code": "HLD",
                    "display": "holder",
                    "definition": "Participant who posses an instrument such as a financial contract (insurance policy) usually based on some agreement with the author."
                },
                {
                    "code": "RCT",
                    "display": "record target",
                    "definition": "The record target indicates whose medical record holds the documentation of this act. This is especially important when the subject of a service is not the patient himself."
                },
                {
                    "code": "RCV",
                    "display": "receiver",
                    "definition": "The person (or organization) who receives the product of an Act."
                },
                {
                    "code": "IRCP",
                    "display": "information recipient",
                    "definition": "A party, who may or should receive or who has recieved the Act or subsequent or derivative information of that Act. Information recipient is inert, i.e., independent of mood.\" Rationale: this is a generalization of a too diverse family that the definition can't be any more specific, and the concept is abstract so one of the specializations should be used."
                },
                {
                    "code": "NOT",
                    "display": "ugent notification contact",
                    "definition": "An information recipient to notify for urgent matters about this Act. (e.g., in a laboratory order, critical results are being called by phone right away, this is the contact to call; or for an inpatient encounter, a next of kin to notify when the patient becomes critically ill)."
                },
                {
                    "code": "PRCP",
                    "display": "primary information recipient",
                    "definition": "Information recipient to whom an act statement is primarily directed. E.g., a primary care provider receiving a discharge letter from a hospitalist, a health department receiving information on a suspected case of infectious disease. Multiple of these participations may exist on the same act without requiring that recipients be ranked as primary vs. secondary."
                },
                {
                    "code": "REFB",
                    "display": "Referred By",
                    "definition": "A participant (e.g. provider) who has referred the subject of an act (e.g. patient).\r\n\r\nTypically, a referred by participant will provide a report (e.g. referral)."
                },
                {
                    "code": "REFT",
                    "display": "Referred to",
                    "definition": "The person who receives the patient"
                },
                {
                    "code": "TRC",
                    "display": "tracker",
                    "definition": "A secondary information recipient, who receives copies (e.g., a primary care provider receiving copies of results as ordered by specialist)."
                },
                {
                    "code": "LOC",
                    "display": "location",
                    "definition": "The facility where the service is done. May be a static building (or room therein) or a moving location (e.g., ambulance, helicopter, aircraft, train, truck, ship, etc.)"
                },
                {
                    "code": "DST",
                    "display": "destination",
                    "definition": "The destination for services. May be a static building (or room therein) or a movable facility (e.g., ship)."
                },
                {
                    "code": "ELOC",
                    "display": "entry location",
                    "definition": "A location where data about an Act was entered."
                },
                {
                    "code": "ORG",
                    "display": "origin",
                    "definition": "The location of origin for services. May be a static building (or room therein) or a movable facility (e.g., ship)."
                },
                {
                    "code": "RML",
                    "display": "remote",
                    "definition": "Some services take place at multiple concurrent locations (e.g., telemedicine, telephone consultation). The location where the principal performing actor is located is taken as the primary location (LOC) while the other location(s) are considered \"remote.\""
                },
                {
                    "code": "VIA",
                    "display": "via",
                    "definition": "For services, an intermediate location that specifies a path between origin an destination."
                },
                {
                    "code": "PRF",
                    "display": "performer",
                    "definition": "**Definition:** A person, non-person living subject, organization or device that who actually and principally carries out the action. Device should only be assigned as a performer in circumstances where the device is performing independent of human intervention. Need not be the principal responsible actor.\r\n\r\n**Exampe:** A surgery resident operating under supervision of attending surgeon, a search and rescue dog locating survivors, an electronic laboratory analyzer or the laboratory discipline requested to perform a laboratory test. The performer may also be the patient in self-care, e.g. fingerstick blood sugar. The traditional order filler is a performer. This information should accompany every service event.\r\n\r\n**Note:** that existing HL7 designs assign an organization as the playing entity of the Role that is the performer. These designs should be revised in subsequent releases to make this the scooping entity for the role involved."
                },
                {
                    "code": "DIST",
                    "display": "distributor",
                    "definition": "Distributes material used in or generated during the act."
                },
                {
                    "code": "PPRF",
                    "display": "primary performer",
                    "definition": "The principal or primary performer of the act."
                },
                {
                    "code": "SPRF",
                    "display": "secondary performer",
                    "definition": "A person assisting in an act through his substantial presence and involvement This includes: assistants, technicians, associates, or whatever the job titles may be."
                },
                {
                    "code": "RESP",
                    "display": "responsible party",
                    "definition": "The person or organization that has primary responsibility for the act. The responsible party is not necessarily present in an action, but is accountable for the action through the power to delegate, and the duty to review actions with the performing actor after the fact. This responsibility may be ethical, legal, contractual, fiscal, or fiduciary in nature.\r\n\r\n*Example:* A person who is the head of a biochemical laboratory; a sponsor for a policy or government program."
                },
                {
                    "code": "VRF",
                    "display": "verifier",
                    "definition": "A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability."
                },
                {
                    "code": "AUTHEN",
                    "display": "authenticator",
                    "definition": "A verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate the act. An example would be a resident physician who sees a patient and dictates a note, then later signs it. Their signature constitutes an authentication."
                },
                {
                    "code": "LA",
                    "display": "legal authenticator",
                    "definition": "A verifier who legally authenticates the accuracy of an act. An example would be a staff physician who sees a patient and dictates a note, then later signs it. Their signature constitutes a legal authentication."
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

module.exports = ParticipationType;
