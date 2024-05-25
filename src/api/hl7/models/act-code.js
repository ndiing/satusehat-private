const DB = require("../../../lib/sqlite");

class ActCode extends DB {
    constructor() {
        super("ActCode");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "_ActAccountCode",
                    "display": "ActAccountCode",
                    "definition": "An account represents a grouping of financial transactions that are tracked and reported together with a single balance. Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash."
                },
                {
                    "code": "_ActAdjudicationCode",
                    "display": "ActAdjudicationCode",
                    "definition": "Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results."
                },
                {
                    "code": "_ActAdjudicationResultActionCode",
                    "display": "ActAdjudicationResultActionCode",
                    "definition": "Actions to be carried out by the recipient of the Adjudication Result information."
                },
                {
                    "code": "_ActBillableModifierCode",
                    "display": "ActBillableModifierCode",
                    "definition": "**Definition:**An identifying modifier code for healthcare interventions or procedures."
                },
                {
                    "code": "_ActBillingArrangementCode",
                    "display": "ActBillingArrangementCode",
                    "definition": "The type of provision(s) made for reimbursing for the deliver of healthcare services and/or goods provided by a Provider, over a specified period."
                },
                {
                    "code": "_ActBoundedROICode",
                    "display": "ActBoundedROICode",
                    "definition": "Type of bounded ROI."
                },
                {
                    "code": "_ActCareProvisionCode",
                    "display": "act care provision",
                    "definition": "**Description:**The type and scope of responsibility taken-on by the performer of the Act for a specific subject of care."
                },
                {
                    "code": "_ActClaimAttachmentCategoryCode",
                    "display": "ActClaimAttachmentCategoryCode",
                    "definition": "**Description:** Coded types of attachments included to support a healthcare claim."
                },
                {
                    "code": "_ActConsentType",
                    "display": "ActConsentType",
                    "definition": "**Definition:** The type of consent directive, e.g., to consent or dissent to collect, access, or use in specific ways within an EHRS or for health information exchange; or to disclose health information for purposes such as research."
                },
                {
                    "code": "_ActContainerRegistrationCode",
                    "display": "ActContainerRegistrationCode",
                    "definition": "Constrains the ActCode to the domain of Container Registration"
                },
                {
                    "code": "_ActControlVariable",
                    "display": "ActControlVariable",
                    "definition": "An observation form that determines parameters or attributes of an Act. Examples are the settings of a ventilator machine as parameters of a ventilator treatment act; the controls on dillution factors of a chemical analyzer as a parameter of a laboratory observation act; the settings of a physiologic measurement assembly (e.g., time skew) or the position of the body while measuring blood pressure.\r\n\r\nControl variables are forms of observations because just as with clinical observations, the Observation.code determines the parameter and the Observation.value assigns the value. While control variables sometimes can be observed (by noting the control settings or an actually measured feedback loop) they are not primary observations, in the sense that a control variable without a primary act is of no use (e.g., it makes no sense to record a blood pressure position without recording a blood pressure, whereas it does make sense to record a systolic blood pressure without a diastolic blood pressure)."
                },
                {
                    "code": "_ActCoverageConfirmationCode",
                    "display": "ActCoverageConfirmationCode",
                    "definition": "Response to an insurance coverage eligibility query or authorization request."
                },
                {
                    "code": "_ActCoverageLimitCode",
                    "display": "ActCoverageLimitCode",
                    "definition": "Criteria that are applicable to the authorized coverage."
                },
                {
                    "code": "_ActCoverageTypeCode",
                    "display": "ActCoverageTypeCode",
                    "definition": "**Definition:** Set of codes indicating the type of insurance policy or program that pays for the cost of benefits provided to covered parties."
                },
                {
                    "code": "_ActDetectedIssueManagementCode",
                    "display": "ActDetectedIssueManagementCode",
                    "definition": "Codes dealing with the management of Detected Issue observations"
                },
                {
                    "code": "_ActExposureCode",
                    "display": "ActExposureCode",
                    "definition": "Concepts that identify the type or nature of exposure interaction. Examples include \"household\", \"care giver\", \"intimate partner\", \"common space\", \"common substance\", etc. to further describe the nature of interaction."
                },
                {
                    "code": "_ActIncidentCode",
                    "display": "ActIncidentCode",
                    "definition": "Set of codes indicating the type of incident or accident."
                },
                {
                    "code": "_ActInformationAccessCode",
                    "display": "ActInformationAccessCode",
                    "definition": "**Description:** The type of health information to which the subject of the information or the subject's delegate consents or dissents."
                },
                {
                    "code": "_ActInformationAccessContextCode",
                    "display": "ActInformationAccessContextCode",
                    "definition": "Concepts conveying the context in which authorization given under jurisdictional law, by organizational policy, or by a patient consent directive permits the collection, access, use or disclosure of specified patient health information."
                },
                {
                    "code": "_ActInformationCategoryCode",
                    "display": "ActInformationCategoryCode",
                    "definition": "**Definition:**Indicates the set of information types which may be manipulated or referenced, such as for recommending access restrictions."
                },
                {
                    "code": "_ActInvoiceElementCode",
                    "display": "ActInvoiceElementCode",
                    "definition": "Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results."
                },
                {
                    "code": "_ActInvoiceElementSummaryCode",
                    "display": "ActInvoiceElementSummaryCode",
                    "definition": "Identifies the different types of summary information that can be reported by queries dealing with Statement of Financial Activity (SOFA). The summary information is generally used to help resolve balance discrepancies between providers and payors."
                },
                {
                    "code": "_ActInvoiceOverrideCode",
                    "display": "ActInvoiceOverrideCode",
                    "definition": "Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results."
                },
                {
                    "code": "_ActListCode",
                    "display": "ActListCode",
                    "definition": "Provides codes associated with ActClass value of LIST (working list)"
                },
                {
                    "code": "_ActMonitoringProtocolCode",
                    "display": "ActMonitoringProtocolCode",
                    "definition": "Identifies types of monitoring programs"
                },
                {
                    "code": "_ActNonObservationIndicationCode",
                    "display": "ActNonObservationIndicationCode",
                    "definition": "**Description:**Concepts representing indications (reasons for clinical action) other than diagnosis and symptoms."
                },
                {
                    "code": "_ActObservationVerificationType",
                    "display": "act observation verification",
                    "definition": "Identifies the type of verification investigation being undertaken with respect to the subject of the verification activity.\r\n\r\n**Examples:**\r\n\r\n1.  Verification of eligibility for coverage under a policy or program - aka enrolled/covered by a policy or program\r\n2.  Verification of record - e.g., person has record in an immunization registry\r\n3.  Verification of enumeration - e.g. NPI\r\n4.  Verification of Board Certification - provider specific\r\n5.  Verification of Certification - e.g. JAHCO, NCQA, URAC\r\n6.  Verification of Conformance - e.g. entity use with HIPAA, conformant to the CCHIT EHR system criteria\r\n7.  Verification of Provider Credentials\r\n8.  Verification of no adverse findings - e.g. on National Provider Data Bank, Health Integrity Protection Data Base (HIPDB)"
                },
                {
                    "code": "_ActPaymentCode",
                    "display": "ActPaymentCode",
                    "definition": "Code identifying the method or the movement of payment instructions.\r\n\r\nCodes are drawn from X12 data element 591 (PaymentMethodCode)"
                },
                {
                    "code": "_ActPharmacySupplyType",
                    "display": "ActPharmacySupplyType",
                    "definition": "Identifies types of dispensing events"
                },
                {
                    "code": "_ActPolicyType",
                    "display": "ActPolicyType",
                    "definition": "A mandate, regulation, obligation, principle, requirement, rule, or expectation of how an entity is to conduct itself or execute an activity, which may be dictated and enforced by an authority of competent jurisdiction."
                },
                {
                    "code": "_ActProductAcquisitionCode",
                    "display": "ActProductAcquisitionCode",
                    "definition": "The method that a product is obtained for use by the subject of the supply act (e.g. patient). Product examples are consumable or durable goods."
                },
                {
                    "code": "_ActSpecimenTransportCode",
                    "display": "ActSpecimenTransportCode",
                    "definition": "Transportation of a specimen."
                },
                {
                    "code": "_ActSpecimenTreatmentCode",
                    "display": "ActSpecimenTreatmentCode",
                    "definition": "Set of codes related to specimen treatments"
                },
                {
                    "code": "_ActSubstanceAdministrationCode",
                    "display": "ActSubstanceAdministrationCode",
                    "definition": "**Description:** Describes the type of substance administration being performed. This should not be used to carry codes for identification of products. Use an associated role or entity to carry such information."
                },
                {
                    "code": "_ActTaskCode",
                    "display": "ActTaskCode",
                    "definition": "**Description:** A task or action that a user may perform in a clinical information system (e.g., medication order entry, laboratory test results review, problem list entry)."
                },
                {
                    "code": "_ActTransportationModeCode",
                    "display": "ActTransportationModeCode",
                    "definition": "Characterizes how a transportation act was or will be carried out.\r\n\r\n*Examples:* Via private transport, via public transit, via courier."
                },
                {
                    "code": "_ObservationType",
                    "display": "ObservationType",
                    "definition": "Identifies the kinds of observations that can be performed"
                },
                {
                    "code": "_ROIOverlayShape",
                    "display": "ROIOverlayShape",
                    "definition": "Shape of the region on the object being referenced"
                },
                {
                    "code": "C",
                    "display": "corrected",
                    "definition": "**Description:**Indicates that result data has been corrected."
                },
                {
                    "code": "DIET",
                    "display": "Diet",
                    "definition": "Code set to define specialized/allowed diets"
                },
                {
                    "code": "DRUGPRG",
                    "display": "drug program",
                    "definition": "**Definition:** A public or government health program that administers and funds coverage for prescription drugs to assist program eligible who meet financial and health status criteria."
                },
                {
                    "code": "F",
                    "display": "final",
                    "definition": "**Description:**Indicates that a result is complete. No further results are to come. This maps to the 'complete' state in the observation result status code."
                },
                {
                    "code": "PRLMN",
                    "display": "preliminary",
                    "definition": "**Description:**Indicates that a result is incomplete. There are further results to come. This maps to the 'active' state in the observation result status code."
                },
                {
                    "code": "SECOBS",
                    "display": "SecurityObservationType",
                    "definition": "An observation identifying security metadata about an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security metadata are used to name security labels.\r\n\r\n*Rationale:* According to ISO/TS 22600-3:2009(E) A.9.1.7 SECURITY LABEL MATCHING, Security label matching compares the initiator's clearance to the target's security label. All of the following must be true for authorization to be granted:\r\n\r\n *  The security policy identifiers shall be identical\r\n *  The classification level of the initiator shall be greater than or equal to that of the target (that is, there shall be at least one value in the classification list of the clearance greater than or equal to the classification of the target), and\r\n *  For each security category in the target label, there shall be a security category of the same type in the initiator's clearance and the initiator's classification level shall dominate that of the target.\r\n\r\n**Examples:** SecurityObservationType security label fields include:\r\n\r\n *  Confidentiality classification\r\n *  Compartment category\r\n *  Sensitivity category\r\n *  Security mechanisms used to ensure data integrity or to perform authorized data transformation\r\n *  Indicators of an IT resource completeness, veracity, reliability, trustworthiness, or provenance.\r\n\r\n*Usage Note:* SecurityObservationType codes designate security label field types, which are valued with an applicable SecurityObservationValue code as the \"security label tag\"."
                },
                {
                    "code": "SUBSIDFFS",
                    "display": "subsidized fee for service program",
                    "definition": "**Definition:** A government health program that provides coverage on a fee for service basis for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.\r\n\r\n*Discussion:* The structure and business processes for underwriting and administering a subsidized fee for service program is further specified by the Underwriter and Payer Role.class and Role.code."
                },
                {
                    "code": "WRKCOMP",
                    "display": "(workers compensation program",
                    "definition": "**Definition:** Government mandated program providing coverage, disability income, and vocational rehabilitation for injuries sustained in the work place or in the course of employment. Employers may either self-fund the program, purchase commercial coverage, or pay a premium to a government entity that administers the program. Employees may be required to pay premiums toward the cost of coverage as well."
                },
                {
                    "code": "_ActAdjudicationInformationCode",
                    "display": "ActAdjudicationInformationCode",
                    "definition": "Explanatory codes that provide information derived by an Adjudicator during the course of adjudicating an invoice.\r\n\r\nCodes from this domain are purely informational and do not materially affect the adjudicated invoice. That is, these codes do not impact or explain financial adjustments to an invoice. A companion domain (ActAdjudicationReasonCode) includes reasons which have a financial impact on an Invoice (claim).\r\n\r\nExample adjudication information code is 54540 - Patient has reached Plan Maximum for current year."
                },
                {
                    "code": "_ActCognitiveProfessionalServiceCode",
                    "display": "ActCognitiveProfessionalServiceCode",
                    "definition": "Denotes the specific service that has been performed. This is obtained from the professional service catalog pertaining to the discipline of the health service provider. Professional services are generally cognitive in nature and exclude surgical procedures. E.g. Provided training, Provided drug therapy review, Gave smoking-cessation counseling, etc."
                },
                {
                    "code": "_ActIdentityDocumentCode",
                    "display": "ActIdentityDocumentCode",
                    "definition": "Code identifying the type of identification document (e.g. passport, drivers license)\r\n\r\n**Implementation Note:**The proposal called for a domain, but a code was also provided. When codes are available for the value set the code IDENTDOC (identity document) will be used as the headcode for the specializable value set."
                },
                {
                    "code": "_ActOrderCode",
                    "display": "ActOrderCode",
                    "definition": "The type of order that was fulfilled by the clinical service"
                },
                {
                    "code": "_ActPrivilegeCategorization",
                    "display": "ActPrivilegeCategorization",
                    "definition": "An Act which characterizes a Privilege can have additional observations to provide a finer definition of the requested or conferred privilege. This domain describes the categories under which this additional information is classified."
                },
                {
                    "code": "_ActProcedureCode",
                    "display": "ActProcedureCode",
                    "definition": "An identifying code for healthcare interventions/procedures."
                },
                {
                    "code": "_ActRegistryCode",
                    "display": "ActRegistryCode",
                    "definition": "This is the domain of registry types. Examples include Master Patient Registry, Staff Registry, Employee Registry, Tumor Registry."
                },
                {
                    "code": "_ActSecurityObjectCode",
                    "display": "ActSecurityObjectCode",
                    "definition": "**Description:**An access control object used to manage permissions and capabilities of users within information systems. (See HL7 RBAC specification fo examples of thes objects.)"
                },
                {
                    "code": "_AdvanceBeneficiaryNoticeType",
                    "display": "AdvanceBeneficiaryNoticeType",
                    "definition": "**Description:**\r\n\r\nRepresents types of consent that patient must sign prior to receipt of service, which is required for billing purposes.\r\n\r\n**Examples:**\r\n\r\n *  Advanced beneficiary medically necessity notice.\r\n *  Advanced beneficiary agreement to pay notice.\r\n *  Advanced beneficiary requests payer billed."
                },
                {
                    "code": "_CPT4",
                    "display": "CPT4",
                    "definition": "**Description:**Physicians Current Procedural Terminology (CPT) Manual is a listing of descriptive terms and identifying codes for reporting medical services and procedures performed by physicians. Available for the AMA at the address listed for CPT above. These codes are found in Appendix A of CPT 2000 Standard Edition. (CPT 2000 Standard Edition, American Medical Association, Chicago, IL)."
                },
                {
                    "code": "_HL7DefinedActCodes",
                    "display": "HL7DefinedActCodes",
                    "definition": "Domain provides the root for HL7-defined detailed or rich codes for the Act classes."
                },
                {
                    "code": "_IndividualCaseSafetyReportCriteria",
                    "display": "IndividualCaseSafetyReportCriteria",
                    "definition": "**Description:** Includes those concepts that are provided to justify the fact that an adverse event or product problem is required to be reported in an expedited fashion."
                },
                {
                    "code": "_IndividualCaseSafetyReportProductCharacteristic",
                    "display": "IndividualCaseSafetyReportProductCharacteristic",
                    "definition": "**Description:** Includes relevant pieces of information about a product or its process of creation. The vocabulary domain is used to characterize products when they are cited in adverse event or product problem reports.\r\n\r\n**Examples:**Weight, color, dimensions."
                },
                {
                    "code": "_ObservationActAgeGroupType",
                    "display": "ObservationActAgeGroupType",
                    "definition": "**Description:**To allow queries to specify useful information about the age of the patient without disclosing possible protected health information."
                },
                {
                    "code": "STORE",
                    "display": "Storage",
                    "definition": "The act of putting something away for safe keeping. The \"something\" may be physical object such as a specimen, or information, such as observations regarding a specimen."
                },
                {
                    "code": "ACCTRECEIVABLE",
                    "display": "account receivable",
                    "definition": "An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter."
                },
                {
                    "code": "CC",
                    "display": "credit card",
                    "definition": "**Description:** Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products."
                },
                {
                    "code": "PBILLACCT",
                    "display": "patient billing account",
                    "definition": "An account representing charges and credits (financial transactions) for a patient's encounter."
                },
                {
                    "code": "_ActAdjudicationGroupCode",
                    "display": "ActAdjudicationGroupCode",
                    "definition": "Catagorization of grouping criteria for the associated transactions and/or summary (totals, subtotals)."
                },
                {
                    "code": "AA",
                    "display": "adjudicated with adjustments",
                    "definition": "The invoice element has been accepted for payment but one or more adjustment(s) have been made to one or more invoice element line items (component charges).\r\n\r\nAlso includes the concept 'Adjudicate as zero' and items not covered under a particular Policy.\r\n\r\nInvoice element can be reversed (nullified).\r\n\r\nRecommend that the invoice element is saved for DUR (Drug Utilization Reporting)."
                },
                {
                    "code": "AR",
                    "display": "adjudicated as refused",
                    "definition": "The invoice element has passed through the adjudication process but payment is refused due to one or more reasons.\r\n\r\nIncludes items such as patient not covered, or invoice element is not constructed according to payer rules (e.g. 'invoice submitted too late').\r\n\r\nIf one invoice element line item in the invoice element structure is rejected, the remaining line items may not be adjudicated and the complete group is treated as rejected.\r\n\r\nA refused invoice element can be forwarded to the next payer (for Coordination of Benefits) or modified and resubmitted to refusing payer.\r\n\r\nInvoice element cannot be reversed (nullified) as there is nothing to reverse.\r\n\r\nRecommend that the invoice element is not saved for DUR (Drug Utilization Reporting)."
                },
                {
                    "code": "AS",
                    "display": "adjudicated as submitted",
                    "definition": "The invoice element was/will be paid exactly as submitted, without financial adjustment(s).\r\n\r\nIf the dollar amount stays the same, but the billing codes have been amended or financial adjustments have been applied through the adjudication process, the invoice element is treated as \"Adjudicated with Adjustment\".\r\n\r\nIf information items are included in the adjudication results that do not affect the monetary amounts paid, then this is still Adjudicated as Submitted (e.g. 'reached Plan Maximum on this Claim').\r\n\r\nInvoice element can be reversed (nullified).\r\n\r\nRecommend that the invoice element is saved for DUR (Drug Utilization Reporting)."
                },
                {
                    "code": "CONT",
                    "display": "contract",
                    "definition": "Transaction counts and value totals by Contract Identifier."
                },
                {
                    "code": "DAY",
                    "display": "day",
                    "definition": "Transaction counts and value totals for each calendar day within the date range specified."
                },
                {
                    "code": "LOC",
                    "display": "location",
                    "definition": "Transaction counts and value totals by service location (e.g clinic)."
                },
                {
                    "code": "MONTH",
                    "display": "month",
                    "definition": "Transaction counts and value totals for each calendar month within the date range specified."
                },
                {
                    "code": "PERIOD",
                    "display": "period",
                    "definition": "Transaction counts and value totals for the date range specified."
                },
                {
                    "code": "PROV",
                    "display": "provider",
                    "definition": "Transaction counts and value totals by Provider Identifier."
                },
                {
                    "code": "WEEK",
                    "display": "week",
                    "definition": "Transaction counts and value totals for each calendar week within the date range specified."
                },
                {
                    "code": "YEAR",
                    "display": "year",
                    "definition": "Transaction counts and value totals for each calendar year within the date range specified."
                },
                {
                    "code": "DISPLAY",
                    "display": "Display",
                    "definition": "The adjudication result associated is to be displayed to the receiver of the adjudication result."
                },
                {
                    "code": "FORM",
                    "display": "Print on Form",
                    "definition": "The adjudication result associated is to be printed on the specified form, which is then provided to the covered party."
                },
                {
                    "code": "NAT",
                    "display": "Insufficient authorization",
                    "definition": "The requesting party has insufficient authorization to invoke the interaction."
                },
                {
                    "code": "SUPPRESSED",
                    "display": "record suppressed",
                    "definition": "**Description:** One or more records in the query response have been suppressed due to consent or privacy restrictions."
                },
                {
                    "code": "VALIDAT",
                    "display": "validation issue",
                    "definition": "**Description:**The specified element did not pass business-rule validation."
                },
                {
                    "code": "KEY204",
                    "display": "Unknown key identifier",
                    "definition": "The ID of the patient, order, etc., was not found. Used for transactions other than additions, e.g. transfer of a non-existent patient."
                },
                {
                    "code": "KEY205",
                    "display": "Duplicate key identifier",
                    "definition": "The ID of the patient, order, etc., already exists. Used in response to addition transactions (Admit, New Order, etc.)."
                },
                {
                    "code": "KEY206",
                    "display": "non-matching identification",
                    "definition": "**Description:** Metadata associated with the identification (e.g. name or gender) does not match the identification being verified."
                },
                {
                    "code": "OBSOLETE",
                    "display": "obsolete record returned",
                    "definition": "**Description:** One or more records in the query response have a status of 'obsolete'."
                },
                {
                    "code": "CPTM",
                    "display": "CPT modifier codes",
                    "definition": "**Description:**CPT modifier codes are found in Appendix A of CPT 2000 Standard Edition."
                },
                {
                    "code": "HCPCSA",
                    "display": "HCPCS Level II and Carrier-assigned",
                    "definition": "**Description:**HCPCS Level II (HCFA-assigned) and Carrier-assigned (Level III) modifiers are reported in Appendix A of CPT 2000 Standard Edition and in the Medicare Bulletin."
                },
                {
                    "code": "_ActMedicalBillableServiceCode",
                    "display": "ActMedicalBillableServiceCode",
                    "definition": "**Definition:** An identifying code for billable medical services, as opposed to codes for similar services to identify them for clinical purposes."
                },
                {
                    "code": "_ActNonMedicalBillableServiceCode",
                    "display": "ActNonMedicalBillableServiceCode",
                    "definition": "**Definition:** An identifying code for billable services that are not medical procedures, such as social services or governmental program services.\r\n\r\n**Example:** Building a wheelchair ramp, help with groceries, giving someone a ride, etc."
                },
                {
                    "code": "BLK",
                    "display": "block funding",
                    "definition": "A billing arrangement where a Provider charges a lump sum to provide a prescribed group (volume) of services to a single patient which occur over a period of time. Services included in the block may vary.\r\n\r\nThis billing arrangement is also known as Program of Care for some specific Payors and Program Fees for other Payors."
                },
                {
                    "code": "CAP",
                    "display": "capitation funding",
                    "definition": "A billing arrangement where the payment made to a Provider is determined by analyzing one or more demographic attributes about the persons/patients who are enrolled with the Provider (in their practice)."
                },
                {
                    "code": "CONTF",
                    "display": "contract funding",
                    "definition": "A billing arrangement where a Provider charges a lump sum to provide a particular volume of one or more interventions/procedures or groups of interventions/procedures."
                },
                {
                    "code": "FINBILL",
                    "display": "financial",
                    "definition": "A billing arrangement where a Provider charges for non-clinical items. This includes interest in arrears, mileage, etc. Clinical content is not included in Invoices submitted with this type of billing arrangement."
                },
                {
                    "code": "ROST",
                    "display": "roster funding",
                    "definition": "A billing arrangement where funding is based on a list of individuals registered as patients of the Provider."
                },
                {
                    "code": "SESS",
                    "display": "sessional funding",
                    "definition": "A billing arrangement where a Provider charges a sum to provide a group (volume) of interventions/procedures to one or more patients within a defined period of time, typically on the same date. Interventions/procedures included in the session may vary."
                },
                {
                    "code": "FFS",
                    "display": "fee for service",
                    "definition": "A billing arrangement where a Provider charges a separate fee for each intervention/procedure/event or product.\r\n\r\nFee for Service is used when an individual intervention/procedure/event is used for billing purposes. In other words, fees are associated with the intervention/procedure/event. For example, a specific CCI (Canadian Classification of Interventions) code has an associated fee and is used for billing purposes."
                },
                {
                    "code": "ROIFS",
                    "display": "fully specified ROI",
                    "definition": "A fully specified bounded Region of Interest (ROI) delineates a ROI in which only those dimensions participate that are specified by boundary criteria, whereas all other dimensions are excluded. For example a ROI to mark an episode of \"ST elevation\" in a subset of the EKG leads V2, V3, and V4 would include 4 boundaries, one each for time, V2, V3, and V4."
                },
                {
                    "code": "ROIPS",
                    "display": "partially specified ROI",
                    "definition": "A partially specified bounded Region of Interest (ROI) specifies a ROI in which at least all values in the dimensions specified by the boundary criteria participate. For example, if an episode of ventricular fibrillations (VFib) is observed, it usually doesn't make sense to exclude any EKG leads from the observation and the partially specified ROI would contain only one boundary for time indicating the time interval where VFib was observed."
                },
                {
                    "code": "_ActCredentialedCareCode",
                    "display": "act credentialed care",
                    "definition": "**Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by a credentialing agency, i.e. government or non-government agency. Failure in executing this Act may result in loss of credential to the person or organization who participates as performer of the Act. Excludes employment agreements.\r\n\r\n**Example:**Hospital license; physician license; clinic accreditation."
                },
                {
                    "code": "_ActEncounterCode",
                    "display": "ActEncounterCode",
                    "definition": "Domain provides codes that qualify the ActEncounterClass (ENC)"
                },
                {
                    "code": "_ActMedicalServiceCode",
                    "display": "ActMedicalServiceCode",
                    "definition": "General category of medical service provided to the patient during their encounter."
                },
                {
                    "code": "AUTOATTCH",
                    "display": "auto attachment",
                    "definition": "**Description:** Automobile Information Attachment"
                },
                {
                    "code": "DOCUMENT",
                    "display": "document",
                    "definition": "**Description:** Document Attachment"
                },
                {
                    "code": "HEALTHREC",
                    "display": "health record",
                    "definition": "**Description:** Health Record Attachment"
                },
                {
                    "code": "IMG",
                    "display": "image attachment",
                    "definition": "**Description:** Image Attachment"
                },
                {
                    "code": "LABRESULTS",
                    "display": "lab results",
                    "definition": "**Description:** Lab Results Attachment"
                },
                {
                    "code": "MODEL",
                    "display": "model",
                    "definition": "**Description:** Digital Model Attachment"
                },
                {
                    "code": "WIATTCH",
                    "display": "work injury report attachment",
                    "definition": "**Description:** Work Injury related additional Information Attachment"
                },
                {
                    "code": "XRAY",
                    "display": "x-ray",
                    "definition": "**Description:** Digital X-Ray Attachment"
                },
                {
                    "code": "_ActDecision",
                    "display": "_ActDecision",
                    "definition": "Specifies the type of agreement between one or more grantor and grantee in which rights and obligations related to one or more shared items of interest are allocated.\r\n\r\n*Usage Note:* Such agreements may be considered \"consent directives\" or \"contracts\" depending on the context, and are considered closely related or synonymous from a legal perspective.\r\n\r\n**Examples:** \r\n\r\n *  Healthcare Privacy Consent Directive permitting or restricting in whole or part the collection, access, use, and disclosure of health information, and any associated handling caveats.\r\n *  Healthcare Medical Consent Directive to receive medical procedures after being informed of risks and benefits, thereby reducing the grantee's liability.\r\n *  Research Informed Consent for participation in clinical trials and disclosure of health information after being informed of risks and benefits, thereby reducing the grantee's liability.\r\n *  Substitute decision maker delegation in which the grantee assumes responsibility to act on behalf of the grantor.\r\n *  Contracts in which the agreement requires assent/dissent by the grantor of terms offered by a grantee, a consumer opts out of an \"award\" system for use of a retailer's marketing or credit card vendor's point collection cards in exchange for allowing purchase tracking and profiling.\r\n *  A mobile device or App privacy policy and terms of service to which a user must agree in whole or in part in order to utilize the service.\r\n *  Agreements between a client and an authorization server or between an authorization server and a resource operator and/or resource owner permitting or restricting e.g., collection, access, use, and disclosure of information, and any associated handling caveats."
                },
                {
                    "code": "_ActPrivacyConsentDirective",
                    "display": "_ActPrivacyConsentDirective",
                    "definition": "Specifies types of consent directives governing the collection, access, use, or disclosure of personal information, including de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, which may be used to identify an individual."
                },
                {
                    "code": "EMRGONLY",
                    "display": "emergency only",
                    "definition": "Privacy consent directive restricting or prohibiting access, use, or disclosure of personal information, including de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, which may be used to identify an individual in a registry or repository for all purposes except for emergency treatment generally, which may include treatment during a disaster, a threat, in an emergency department and for break the glass purposes of use as specified by applicable domain policy.\r\n\r\n*Usage Note:* To specify the scope of an \"EMRGONLY\" consent directive within a policy domain, use one or more of the following Purpose of Use codes in the ActReason code system OID: 2.16.840.1.113883.5.8.\r\n\r\n *  ETREAT (Emergency Treatment): To perform one or more operations on information for provision of immediately needed health care for an emergent condition.\r\n *  BTG (break the glass): To perform policy override operations on information for provision of immediately needed health care for an emergent condition affecting potential harm, death or patient safety by end users who are not provisioned for this purpose of use. Includes override of organizational provisioning policies and may include override of subject of care consent directive restricting access.\r\n *  ERTREAT (emergency room treatment): To perform one or more operations on information for provision of immediately needed health care for an emergent condition in an emergency room or similar emergent care context by end users provisioned for this purpose, which does not constitute as policy override such as in a \"Break the Glass\" purpose of use.\r\n *  THREAT (threat): To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.\r\n *  DISASTER (disaster): To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.\r\n\r\nMap: An \"emergency only\" consent directive maps to ISO/TS 17975:2015(E) 5.13 Exceptional access"
                },
                {
                    "code": "GRANTORCHOICE",
                    "display": "grantor choice",
                    "definition": "A grantor's terms of agreement to which a grantee may assent or dissent, and which may include an opportunity for a grantee to request restrictions or extensions.\r\n\r\n*Comment:* A grantor typically is able to stipulate preferred terms of agreement when the grantor has control over the topic of the agreement, which a grantee must accept in full or may be offered an opportunity to extend or restrict certain terms.\r\n\r\n*Usage Note:* If the grantor's term of agreement must be accepted in full, then this is considered \"basic consent\". If a grantee is offered an opportunity to extend or restrict certain terms, then the agreement is considered \"granular consent\".\r\n\r\n**Examples:** \r\n\r\n *  Healthcare: A PHR account holder \\[grantor\\] may require any PHR user \\[grantee\\] to accept the terms of agreement in full, or may permit a PHR user to extend or restrict terms selected by the account holder or requested by the PHR user.\r\n *  Non-healthcare: The owner of a resource server \\[grantor\\] may require any authorization server \\[grantee\\] to meet authorization requirements stipulated in the grantor's terms of agreement."
                },
                {
                    "code": "IMPLIED",
                    "display": "implied consent",
                    "definition": "A grantor's presumed assent to the grantee's terms of agreement is based on the grantor's behavior, which may result from not expressly assenting to the consent directive offered, or from having no right to assent or dissent offered by the grantee.\r\n\r\n*Comment:* Implied or \"implicit\" consent occurs when the behavior of the grantor is understood by a reasonable person to signal agreement to the grantee's terms.\r\n\r\n*Usage Note:* Implied consent with no opportunity to assent or dissent to certain terms is considered \"basic consent\".\r\n\r\n**Examples:** \r\n\r\n *  Healthcare: A patient schedules an appointment with a provider, and either does not take the opportunity to expressly assent or dissent to the provider's consent directive, does not have an opportunity to do so, as in the case where emergency care is required, or simply behaves as though the patient \\[grantor\\] agrees to the rights granted to the provider \\[grantee\\] in an implicit consent directive.\r\n *  An injured and unconscious patient is deemed to have assented to emergency treatment by those permitted to do so under jurisdictional laws, e.g., Good Samaritan laws.\r\n *  Non-healthcare: Upon receiving a driver's license, the driver is deemed to have assented without explicitly consenting to undergoing field sobriety tests.\r\n *  A corporation that does business in a foreign nation is deemed to have deemed to have assented without explicitly consenting to abide by that nation's laws."
                },
                {
                    "code": "IMPLIEDD",
                    "display": "implied consent with opportunity to dissent",
                    "definition": "A grantor's presumed assent to the grantee's terms of agreement, which is based on the grantor's behavior, and includes a right to dissent to certain terms.\r\n\r\n*Comment:* A grantor assenting to the grantee's terms of agreement may or may not exercise a right to dissent to grantor selected terms or to grantee's selected terms to which a grantor may dissent.\r\n\r\n*Usage Note:* Implied or \"implicit\" consent with an \"opportunity to dissent\" occurs when the grantor's behavior is understood by a reasonable person to signal assent to the grantee's terms of agreement whether the grantor requests or the grantee approves further restrictions, is considered \"granular consent\".\r\n\r\n**Examples:** \r\n\r\n *  Healthcare Examples: A healthcare provider deems a patient's assent to disclosure of health information to family members and friends, but offers an opportunity or permits the patient to dissent to such disclosures.\r\n *  A health information exchanges deems a patient to have assented to disclosure of health information for treatment purposes, but offers the patient an opportunity to dissents to disclosure to particular provider organizations.\r\n *  Non-healthcare Examples: A bank deems a banking customer's assent to specified collection, access, use, or disclosure of financial information as a requirement of holding a bank account, but provides the user an opportunity to limit third-party collection, access, use or disclosure of that information for marketing purposes."
                },
                {
                    "code": "NOCONSENT",
                    "display": "no consent",
                    "definition": "No notification or opportunity is provided for a grantor to assent or dissent to a grantee's terms of agreement.\r\n\r\n*Comment:* A \"No Consent\" policy scheme provides no opportunity for accommodation of an individual's preferences, and may not comply with Fair Information Practice Principles \\[FIPP\\] by enabling the data subject to object, access collected information, correct errors, or have accounting of disclosures.\r\n\r\n*Usage Note:* The grantee's terms of agreement, may be available to the grantor by reviewing the grantee's privacy policies, but there is no notice by which a grantor is apprised of the policy directly or able to acknowledge.\r\n\r\n**Examples:** \r\n\r\n *  Healthcare: Without notification or an opportunity to assent or dissent, a patient's health information is automatically included in and available (often according to certain rules) through a health information exchange. Note that this differs from implied consent, where the patient is assumed to have consented.\r\n *  Without notification or an opportunity to assent or dissent, a patient's health information is collected, accessed, used, or disclosed for research, public health, security, fraud prevention, court order, or law enforcement.\r\n *  Non-healthcare: Without notification or an opportunity to assent or dissent, a consumer's healthcare or non-healthcare internet searches are aggregated for secondary uses such as behavioral tracking and profiling.\r\n *  Without notification or an opportunity to assent or dissent, a consumer's location and activities in a shopping mall are tracked by RFID tags on purchased items."
                },
                {
                    "code": "NOPP",
                    "display": "notice of privacy practices",
                    "definition": "An implied privacy consent directive or notification, which the data subject may or may not acknowledge. The notification specifies permitted actions, which may include access, use, or disclosure of any and all personal information. The notification specifies the scope of personal information, which may include de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, that may be used to identify an individual in a registry or repository. The notification specifies the purposes for which personal information may be used such as treatment, payment, operations, research, information exchange, public health, disaster, quality and safety reporting; as required by law including court order, law enforcement, national security, military authorities; and for data analytics, marketing, and profiling.\r\n\r\n*Usage Notes:* Map: An \"implied\" consent directive maps to ISO/TS 17975:2015(E) definition forImplied: Consent to Collect, Use and Disclose personal health information is implied by the actions or inactions of the individual and the circumstances under which it was implied\"."
                },
                {
                    "code": "OPTIN",
                    "display": "opt-in",
                    "definition": "A grantor's assent to the terms of an agreement offered by a grantee without an opportunity for to dissent to any terms.\r\n\r\n*Comment:* Acceptance of a grantee's terms pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.\r\n\r\n*Usage Note:* Opt-in with no opportunity for a grantor to restrict certain permissions sought by the grantee is considered \"basic consent\".\r\n\r\n**Examples:** \r\n\r\n *  Healthcare: A patient \\[grantor\\] signs a provider's \\[grantee's\\] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, and revocation policies.\r\n *  Non-healthcare: An employee \\[grantor\\] signs an employer's \\[grantee's\\] non-disclosure and non-compete agreement."
                },
                {
                    "code": "OPTINR",
                    "display": "opt-in with restrictions",
                    "definition": "A grantor's assent to the grantee's terms of an agreement with an opportunity for to dissent to certain grantor or grantee selected terms.\r\n\r\n*Comment:* A grantor dissenting to the grantee's terms of agreement may or may not exercise a right to assent to grantor's pre-approved restrictions or to grantee's selected terms to which a grantor may dissent.\r\n\r\n*Usage Note:* Opt-in with restrictions is considered \"granular consent\" because the grantor has an opportunity to narrow the permissions sought by the grantee.\r\n\r\n**Examples:** \r\n\r\n *  Healthcare: A patient assent to grantee's consent directive terms for collection, access, use, or disclosure of health information, and dissents to disclosure to certain recipients as allowed by the provider's pre-approved restriction list.\r\n *  Non-Healthcare: A cell phone user assents to the cell phone's privacy practices and terms of use, but dissents from location tracking by turning off the cell phone's tracking capability."
                },
                {
                    "code": "OPTOUT",
                    "display": "op-out",
                    "definition": "A grantor's dissent to the terms of agreement offered by a grantee without an opportunity for to assent to any terms.\r\n\r\n*Comment:* Rejection of a grantee's terms of agreement pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.\r\n\r\n*Usage Note:* Opt-out with no opportunity for a grantor to permit certain permissions sought by the grantee is considered \"basic consent\".\r\n\r\n**Examples:** \r\n\r\n *  Healthcare: A patient \\[grantor\\] declines to sign a provider's \\[grantee's\\] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, revocation policies, and consequences of not assenting.\r\n *  Non-healthcare: An employee \\[grantor\\] refuses to sign an employer's \\[grantee's\\] agreement not to join unions or participate in a strike where state law protects employee's collective bargaining rights.\r\n *  A citizen \\[grantor\\] refuses to enroll in mandatory government \\[grantee\\] health insurance based on religious beliefs, which is an exemption."
                },
                {
                    "code": "OPTOUTE",
                    "display": "opt-out with exceptions",
                    "definition": "A grantor's dissent to the grantee's terms of agreement except for certain grantor or grantee selected terms.\r\n\r\n*Comment:* A rejection of a grantee's terms of agreement while assenting to certain permissions sought by the grantee or requesting approval of additional grantor terms.\r\n\r\n*Usage Note:* Opt-out with exceptions is considered a \"granular consent\" because the grantor has an opportunity to accept certain permissions sought by the grantee or request additional grantor terms, while rejecting other grantee terms.\r\n\r\n**Examples:** \r\n\r\n *  Healthcare: A patient \\[grantor\\] dissents to a health information exchange consent directive with the exception of disclosure based on a limited \"time to live\" shared secret \\[e.g., a token or password\\], which the patient can give to a provider when seeking care.\r\n *  Non-healthcare: A social media user \\[grantor\\] dissents from public access to their account, but assents to access to a circle of friends."
                },
                {
                    "code": "ICOL",
                    "display": "information collection",
                    "definition": "**Definition:** Consent to have healthcare information collected in an electronic health record. This entails that the information may be used in analysis, modified, updated."
                },
                {
                    "code": "IDSCL",
                    "display": "information disclosure",
                    "definition": "**Definition:** Consent to have collected healthcare information disclosed."
                },
                {
                    "code": "INFA",
                    "display": "information access",
                    "definition": "**Definition:** Consent to access healthcare information."
                },
                {
                    "code": "IRDSCL",
                    "display": "information redisclosure",
                    "definition": "**Definition:** Information re-disclosed without the patient's consent."
                },
                {
                    "code": "RESEARCH",
                    "display": "research information access",
                    "definition": "**Definition:** Consent to have healthcare information in an electronic health record accessed for research purposes."
                },
                {
                    "code": "ID",
                    "display": "Identified",
                    "definition": "Used by one system to inform another that it has received a container."
                },
                {
                    "code": "IP",
                    "display": "In Position",
                    "definition": "Used by one system to inform another that the container is in position for specimen transfer (e.g., container removal from track, pipetting, etc.)."
                },
                {
                    "code": "L",
                    "display": "Left Equipment",
                    "definition": "Used by one system to inform another that the container has been released from that system."
                },
                {
                    "code": "M",
                    "display": "Missing",
                    "definition": "Used by one system to inform another that the container did not arrive at its next expected location."
                },
                {
                    "code": "O",
                    "display": "In Process",
                    "definition": "Used by one system to inform another that the specific container is being processed by the equipment. It is useful as a response to a query about Container Status, when the specific step of the process is not relevant."
                },
                {
                    "code": "R",
                    "display": "Process Completed",
                    "definition": "Status is used by one system to inform another that the processing has been completed, but the container has not been released from that system."
                },
                {
                    "code": "X",
                    "display": "Container Unavailable",
                    "definition": "Used by one system to inform another that the container is no longer available within the scope of the system (e.g., tube broken or discarded)."
                },
                {
                    "code": "AUTO",
                    "display": "auto-repeat permission",
                    "definition": "Specifies whether or not automatic repeat testing is to be initiated on specimens."
                },
                {
                    "code": "ENDC",
                    "display": "endogenous content",
                    "definition": "A baseline value for the measured test that is inherently contained in the diluent. In the calculation of the actual result for the measured test, this baseline value is normally considered."
                },
                {
                    "code": "REFLEX",
                    "display": "reflex permission",
                    "definition": "Specifies whether or not further testing may be automatically or manually initiated on specimens."
                },
                {
                    "code": "AUTH",
                    "display": "Authorized",
                    "definition": "Authorization approved and funds have been set aside to pay for specified healthcare service(s) and/or product(s) within defined criteria for the authorization."
                },
                {
                    "code": "NAUTH",
                    "display": "Not Authorized",
                    "definition": "Authorization for specified healthcare service(s) and/or product(s) denied."
                },
                {
                    "code": "_ActCoverageAuthorizationConfirmationCode",
                    "display": "ActCoverageAuthorizationConfirmationCode",
                    "definition": "Indication of authorization for healthcare service(s) and/or product(s). If authorization is approved, funds are set aside."
                },
                {
                    "code": "_ActCoverageEligibilityConfirmationCode",
                    "display": "ActCoverageEligibilityConfirmationCode",
                    "definition": "Indication of eligibility coverage for healthcare service(s) and/or product(s)."
                },
                {
                    "code": "ELG",
                    "display": "Eligible",
                    "definition": "Insurance coverage is in effect for healthcare service(s) and/or product(s)."
                },
                {
                    "code": "NELG",
                    "display": "Not Eligible",
                    "definition": "Insurance coverage is not in effect for healthcare service(s) and/or product(s). May optionally include reasons for the ineligibility."
                },
                {
                    "code": "_ActCoverageQuantityLimitCode",
                    "display": "ActCoverageQuantityLimitCode",
                    "definition": "Maximum amount paid or maximum number of services/products covered; or maximum amount or number covered during a specified time period under the policy or program."
                },
                {
                    "code": "COVMX",
                    "display": "coverage maximum",
                    "definition": "**Definition:** Codes representing the maximum coverate or financial participation requirements."
                },
                {
                    "code": "_ActCoveredPartyLimitCode",
                    "display": "ActCoveredPartyLimitCode",
                    "definition": "Codes representing the types of covered parties that may receive covered benefits under a policy or program."
                },
                {
                    "code": "COVPRD",
                    "display": "coverage period",
                    "definition": "Codes representing the time period during which coverage is available; or financial participation requirements are in effect."
                },
                {
                    "code": "LFEMX",
                    "display": "life time maximum",
                    "definition": "**Definition:** Maximum amount paid by payer or covered party; or maximum number of services or products covered under the policy or program during a covered party's lifetime."
                },
                {
                    "code": "NETAMT",
                    "display": "Net Amount",
                    "definition": "Maximum net amount that will be covered for the product or service specified."
                },
                {
                    "code": "PRDMX",
                    "display": "period maximum",
                    "definition": "**Definition:** Maximum amount paid by payer or covered party; or maximum number of services/products covered under the policy or program by time period specified by the effective time on the act."
                },
                {
                    "code": "UNITPRICE",
                    "display": "Unit Price",
                    "definition": "Maximum unit price that will be covered for the authorized product or service."
                },
                {
                    "code": "UNITQTY",
                    "display": "Unit Quantity",
                    "definition": "Maximum number of items that will be covered of the product or service specified."
                },
                {
                    "code": "_ActInsurancePolicyCode",
                    "display": "ActInsurancePolicyCode",
                    "definition": "Set of codes indicating the type of insurance policy or other source of funds to cover healthcare costs."
                },
                {
                    "code": "_ActInsuranceTypeCode",
                    "display": "ActInsuranceTypeCode",
                    "definition": "**Definition:** Set of codes indicating the type of insurance policy. Insurance, in law and economics, is a form of risk management primarily used to hedge against the risk of potential financial loss. Insurance is defined as the equitable transfer of the risk of a potential loss, from one entity to another, in exchange for a premium and duty of care. A policy holder is an individual or an organization enters into a contract with an underwriter which stipulates that, in exchange for payment of a sum of money (a premium), one or more covered parties (insureds) is guaranteed compensation for losses resulting from certain perils under specified conditions. The underwriter analyzes the risk of loss, makes a decision as to whether the risk is insurable, and prices the premium accordingly. A policy provides benefits that indemnify or cover the cost of a loss incurred by a covered party, and may include coverage for services required to remediate a loss. An insurance policy contains pertinent facts about the policy holder, the insurance coverage, the covered parties, and the insurer. A policy may include exemptions and provisions specifying the extent to which the indemnification clause cannot be enforced for intentional tortious conduct of a covered party, e.g., whether the covered parties are jointly or severably insured.\r\n\r\n*Discussion:* In contrast to programs, an insurance policy has one or more policy holders, who own the policy. The policy holder may be the covered party, a relative of the covered party, a partnership, or a corporation, e.g., an employer. A subscriber of a self-insured health insurance policy is a policy holder. A subscriber of an employer sponsored health insurance policy is holds a certificate of coverage, but is not a policy holder; the policy holder is the employer. See CoveredRoleType."
                },
                {
                    "code": "_ActProgramTypeCode",
                    "display": "ActProgramTypeCode",
                    "definition": "**Definition:** A set of codes used to indicate coverage under a program. A program is an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health, financial, and demographic status. Programs are typically established or permitted by legislation with provisions for ongoing government oversight. Regulations may mandate the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency may be charged with implementing the program in accordance to the regulation. Risk of loss under a program in most cases would not meet what an underwriter would consider an insurable risk, i.e., the risk is not random in nature, not financially measurable, and likely requires subsidization with government funds.\r\n\r\n*Discussion:* Programs do not have policy holders or subscribers. Program eligibles are enrolled based on health status, statutory eligibility, financial status, or age. Program eligibles who are covered parties under the program may be referred to as members, beneficiaries, eligibles, or recipients. Programs risk are underwritten by not for profit organizations such as governmental entities, and the beneficiaries typically do not pay for any or some portion of the cost of coverage. See CoveredPartyRoleType."
                },
                {
                    "code": "_ActCoveragePartyLimitGroupCode",
                    "display": "ActCoveragePartyLimitGroupCode",
                    "definition": "Codes representing the level of coverage provided under the policy or program in terms of the types of entities that may play covered parties based on their personal relationships or employment status."
                },
                {
                    "code": "_ActCredentialedCareProvisionPersonCode",
                    "display": "act credentialed care provision peron",
                    "definition": "**Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals."
                },
                {
                    "code": "_ActCredentialedCareProvisionProgramCode",
                    "display": "act credentialed care provision program",
                    "definition": "**Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing programs within organizations."
                },
                {
                    "code": "CACC",
                    "display": "certified anatomic pathology and clinical pathology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CAIC",
                    "display": "certified allergy and immunology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CAMC",
                    "display": "certified aerospace medicine care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CANC",
                    "display": "certified anesthesiology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CAPC",
                    "display": "certified anatomic pathology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CBGC",
                    "display": "certified clinical biochemical genetics care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CCCC",
                    "display": "certified clinical cytogenetics care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CCGC",
                    "display": "certified clinical genetics (M.D.) care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CCPC",
                    "display": "certified clinical pathology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CCSC",
                    "display": "certified colon and rectal surgery care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CDEC",
                    "display": "certified dermatology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CDRC",
                    "display": "certified diagnostic radiology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CEMC",
                    "display": "certified emergency medicine care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CFPC",
                    "display": "certified family practice care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CIMC",
                    "display": "certified internal medicine care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CMGC",
                    "display": "certified clinical molecular genetics care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CNEC",
                    "display": "certified neurology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board"
                },
                {
                    "code": "CNMC",
                    "display": "certified nuclear medicine care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CNQC",
                    "display": "certified neurology with special qualifications in child neurology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CNSC",
                    "display": "certified neurological surgery care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "COGC",
                    "display": "certified obstetrics and gynecology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "COMC",
                    "display": "certified occupational medicine care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "COPC",
                    "display": "certified ophthalmology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "COSC",
                    "display": "certified orthopaedic surgery care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "COTC",
                    "display": "certified otolaryngology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CPEC",
                    "display": "certified pediatrics care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CPGC",
                    "display": "certified Ph.D. medical genetics care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CPHC",
                    "display": "certified public health and general preventive medicine care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CPRC",
                    "display": "certified physical medicine and rehabilitation care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CPSC",
                    "display": "certified plastic surgery care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CPYC",
                    "display": "certified psychiatry care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CROC",
                    "display": "certified radiation oncology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CRPC",
                    "display": "certified radiological physics care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CSUC",
                    "display": "certified surgery care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CTSC",
                    "display": "certified thoracic surgery care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CURC",
                    "display": "certified urology care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "CVSC",
                    "display": "certified vascular surgery care",
                    "definition": "**Description:**Scope of responsibility taken on for specialty care as defined by the respective Specialty Board."
                },
                {
                    "code": "LGPC",
                    "display": "licensed general physician care",
                    "definition": "**Description:**Scope of responsibility taken-on for physician care of a patient as defined by a governmental licensing agency."
                },
                {
                    "code": "AALC",
                    "display": "accredited assisted living care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "AAMC",
                    "display": "accredited ambulatory care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "ABHC",
                    "display": "accredited behavioral health care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "ACAC",
                    "display": "accredited critical access hospital care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "ACHC",
                    "display": "accredited hospital care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "AHOC",
                    "display": "accredited home care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "ALTC",
                    "display": "accredited long term care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "AOSC",
                    "display": "accredited office-based surgery care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency."
                },
                {
                    "code": "CACS",
                    "display": "certified acute coronary syndrome care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CAMI",
                    "display": "certified acute myocardial infarction care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CAST",
                    "display": "certified asthma care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CBAR",
                    "display": "certified bariatric surgery care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CCAD",
                    "display": "certified coronary artery disease care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CCAR",
                    "display": "certified cardiac care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CDEP",
                    "display": "certified depression care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CDGD",
                    "display": "certified digestive/gastrointestinal disorders care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CDIA",
                    "display": "certified diabetes care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CEPI",
                    "display": "certified epilepsy care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CFEL",
                    "display": "certified frail elderly care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CHFC",
                    "display": "certified heart failure care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CHRO",
                    "display": "certified high risk obstetrics care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CHYP",
                    "display": "certified hyperlipidemia care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CMIH",
                    "display": "certified migraine headache care",
                    "definition": "**Description:**."
                },
                {
                    "code": "CMSC",
                    "display": "certified multiple sclerosis care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "COJR",
                    "display": "certified orthopedic joint replacement care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CONC",
                    "display": "certified oncology care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "COPD",
                    "display": "certified chronic obstructive pulmonary disease care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CORT",
                    "display": "certified organ transplant care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CPAD",
                    "display": "certified parkinsons disease care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CPND",
                    "display": "certified pneumonia disease care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CPST",
                    "display": "certified primary stroke center care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CSDM",
                    "display": "certified stroke disease management care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CSIC",
                    "display": "certified sickle cell care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CSLD",
                    "display": "certified sleep disorders care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CSPT",
                    "display": "certified spine treatment care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CTBU",
                    "display": "certified trauma/burn center care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CVDC",
                    "display": "certified vascular diseases care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CWMA",
                    "display": "certified wound management care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "CWOH",
                    "display": "certified women's health care",
                    "definition": "**Description:**Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency."
                },
                {
                    "code": "_ActAdministrativeDetectedIssueManagementCode",
                    "display": "ActAdministrativeDetectedIssueManagementCode",
                    "definition": "Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains."
                },
                {
                    "code": "1",
                    "display": "Therapy Appropriate",
                    "definition": "Confirmed drug therapy appropriate"
                },
                {
                    "code": "14",
                    "display": "Supply Appropriate",
                    "definition": "Confirmed supply action appropriate"
                },
                {
                    "code": "8",
                    "display": "Other Action Taken",
                    "definition": "Order is performed as issued, but other action taken to mitigate potential adverse effects"
                },
                {
                    "code": "_ActFinancialDetectedIssueManagementCode",
                    "display": "ActFinancialDetectedIssueManagementCode",
                    "definition": "Codes dealing with the management of Detected Issue observations for the financial acts domain."
                },
                {
                    "code": "_HL7AccommodationCode",
                    "display": "HL7AccommodationCode",
                    "definition": "**Description:**Accommodation type. In Intent mood, represents the accommodation type requested. In Event mood, represents accommodation assigned/used. In Definition mood, represents the available accommodation type."
                },
                {
                    "code": "_HCPCSAccommodationCode",
                    "display": "HCPCSAccommodationCode",
                    "definition": "**Description:**External value set for accommodation types used in the U.S. Health Care Financing Administration (HCFA) Common Procedure Coding System (HCPCS) including modifiers."
                },
                {
                    "code": "AMB",
                    "display": "ambulatory",
                    "definition": "A comprehensive term for health care provided in a healthcare facility (e.g. a practitioneraTMs office, clinic setting, or hospital) on a nonresident basis. The term ambulatory usually implies that the patient has come to the location and is not assigned to a bed. Sometimes referred to as an outpatient encounter."
                },
                {
                    "code": "EMER",
                    "display": "emergency",
                    "definition": "A patient encounter that takes place at a dedicated healthcare service delivery location where the patient receives immediate evaluation and treatment, provided until the patient can be discharged or responsibility for the patient's care is transferred elsewhere (for example, the patient could be admitted as an inpatient or transferred to another facility.)"
                },
                {
                    "code": "FLD",
                    "display": "field",
                    "definition": "A patient encounter that takes place both outside a dedicated service delivery location and outside a patient's residence. Example locations might include an accident site and at a supermarket."
                },
                {
                    "code": "HH",
                    "display": "home health",
                    "definition": "Healthcare encounter that takes place in the residence of the patient or a designee"
                },
                {
                    "code": "IMP",
                    "display": "inpatient encounter",
                    "definition": "A patient encounter where a patient is admitted by a hospital or equivalent facility, assigned to a location where patients generally stay at least overnight and provided with room, board, and continuous nursing service."
                },
                {
                    "code": "OBSENC",
                    "display": "observation encounter",
                    "definition": "An encounter where the patient usually will start in different encounter, such as one in the emergency department (EMER) but then transition to this type of encounter because they require a significant period of treatment and monitoring to determine whether or not their condition warrants an inpatient admission or discharge. In the majority of cases the decision about admission or discharge will occur within a time period determined by local, regional or national regulation, often between 24 and 48 hours."
                },
                {
                    "code": "PRENC",
                    "display": "pre-admission",
                    "definition": "A patient encounter where patient is scheduled or planned to receive service delivery in the future, and the patient is given a pre-admission account number. When the patient comes back for subsequent service, the pre-admission encounter is selected and is encapsulated into the service registration, and a new account number is generated.\r\n\r\n*Usage Note:* This is intended to be used in advance of encounter types such as ambulatory, inpatient encounter, virtual, etc."
                },
                {
                    "code": "SS",
                    "display": "short stay",
                    "definition": "An encounter where the patient is admitted to a health care facility for a predetermined length of time, usually less than 24 hours."
                },
                {
                    "code": "VR",
                    "display": "virtual",
                    "definition": "A patient encounter where the patient and the practitioner(s) are not in the same physical location. Examples include telephone conference, email exchange, robotic surgery, and televideo conference."
                },
                {
                    "code": "CHLDCARE",
                    "display": "Day care - Child care Interaction",
                    "definition": "**Description:** Exposure participants' interaction occurred in a child care setting"
                },
                {
                    "code": "CONVEYNC",
                    "display": "Common Conveyance Interaction",
                    "definition": "**Description:** An interaction where the exposure participants traveled in/on the same vehicle (not necessarily concurrently, e.g. both are passengers of the same plane, but on different flights of that plane)."
                },
                {
                    "code": "HLTHCARE",
                    "display": "Health Care Interaction - Not Patient Care",
                    "definition": "**Description:** Exposure participants' interaction occurred during the course of health care delivery or in a health care delivery setting, but did not involve the direct provision of care (e.g. a janitor cleaning a patient's hospital room)."
                },
                {
                    "code": "HOMECARE",
                    "display": "Care Giver Interaction",
                    "definition": "**Description:** Exposure interaction occurred in context of one providing care for the other, i.e. a babysitter providing care for a child, a home-care aide providing assistance to a paraplegic."
                },
                {
                    "code": "HOSPPTNT",
                    "display": "Hospital Patient Interaction",
                    "definition": "**Description:** Exposure participants' interaction occurred when both were patients being treated in the same (acute) health care delivery facility."
                },
                {
                    "code": "HOSPVSTR",
                    "display": "Hospital Visitor Interaction",
                    "definition": "**Description:** Exposure participants' interaction occurred when one visited the other who was a patient being treated in a health care delivery facility."
                },
                {
                    "code": "HOUSEHLD",
                    "display": "Household Interaction",
                    "definition": "**Description:** Exposure interaction occurred in context of domestic interaction, i.e. both participants reside in the same household."
                },
                {
                    "code": "INMATE",
                    "display": "Inmate Interaction",
                    "definition": "**Description:** Exposure participants' interaction occurred in the course of one or both participants being incarcerated at a correctional facility"
                },
                {
                    "code": "INTIMATE",
                    "display": "Intimate Interaction",
                    "definition": "**Description:** Exposure interaction was intimate, i.e. participants are intimate companions (e.g. spouses, domestic partners)."
                },
                {
                    "code": "LTRMCARE",
                    "display": "Long Term Care Facility Interaction",
                    "definition": "**Description:** Exposure participants' interaction occurred in the course of one or both participants being resident at a long term care facility (second participant may be a visitor, worker, resident or a physical place or object within the facility)."
                },
                {
                    "code": "PLACE",
                    "display": "Common Space Interaction",
                    "definition": "**Description:** An interaction where the exposure participants were both present in the same location/place/space."
                },
                {
                    "code": "PTNTCARE",
                    "display": "Health Care Interaction - Patient Care",
                    "definition": "**Description:** Exposure participants' interaction occurred during the course of health care delivery by a provider (e.g. a physician treating a patient in her office)."
                },
                {
                    "code": "SCHOOL2",
                    "display": "School Interaction",
                    "definition": "**Description:** Exposure participants' interaction occurred in an academic setting (e.g., participants are fellow students, or student and teacher)."
                },
                {
                    "code": "SOCIAL2",
                    "display": "Social/Extended Family Interaction",
                    "definition": "**Description:** An interaction where the exposure participants are social associates or members of the same extended family"
                },
                {
                    "code": "SUBSTNCE",
                    "display": "Common Substance Interaction",
                    "definition": "**Description:** An interaction where the exposure participants shared or co-used a common substance (e.g. drugs, needles, or common food item)."
                },
                {
                    "code": "TRAVINT",
                    "display": "Common Travel Interaction",
                    "definition": "**Description:** An interaction where the exposure participants traveled together in/on the same vehicle/trip (e.g. concurrent co-passengers)."
                },
                {
                    "code": "WORK2",
                    "display": "Work Interaction",
                    "definition": "**Description:** Exposure interaction occurred in a work setting, i.e. participants are co-workers."
                },
                {
                    "code": "CHRG",
                    "display": "Standard Charge",
                    "definition": "A type of transaction that represents a charge for a service or product. Expressed in monetary terms."
                },
                {
                    "code": "REV",
                    "display": "Standard Charge Reversal",
                    "definition": "A type of transaction that represents a reversal of a previous charge for a service or product. Expressed in monetary terms. It has the opposite effect of a standard charge."
                },
                {
                    "code": "GDPRCD",
                    "display": "GDPR Consent Directive",
                    "definition": "A consent directive compliant with the European Union General Data Protection Regulation (GDPR) definition: Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.\r\n\r\nWhere processing is based on consent, the controller shall be able to demonstrate that the data subject has consented to processing of his or her personal data. If the data subject's consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding. The data subject shall have the right to withdraw his or her consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. Prior to giving consent, the data subject shall be informed thereof. It shall be as easy to withdraw as to give consent. When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract. Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject's agreement to the processing of personal data relating to him or her, such as by a written statement, including by electronic means, or an oral statement. This could include ticking a box when visiting an internet website, choosing technical settings for information society services or another statement or conduct which clearly indicates in this context the data subject's acceptance of the proposed processing of his or her personal data. Silence, pre-ticked boxes or inactivity should not therefore constitute consent. Consent should cover all processing activities carried out for the same purpose or purposes. When the processing has multiple purposes, consent should be given for all of them. If the data subject's consent is to be given following a request by electronic means, the request must be clear, concise and not unnecessarily disruptive to the use of the service for which it is provided.\r\n\r\n*Usage Note:* Article 4.11 GDPR Definitions https://gdpr-info.eu/art-4-gdpr/ 11) 'Consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. Article 7 GDPR Conditions for consent https://gdpr-info.eu/art-7-gdpr Recital 32 Conditions for consent\\* https://gdpr-info.eu/recitals/no-32 Recital 42 Burden of proof and requirements for consent\\* https://gdpr-info.eu/recitals/no-42/> Recital 43 Freely given consent\\* https://gdpr-info.eu/recitals/no-43 GDPR Consent Brief https://gdpr-info.eu/issues/consent/ Art. 4 GDPR Definitions Art. 6 GDPR Lawfulness of processing Art. 7 GDPR Conditions for consent Art. 8 GDPR Conditions applicable to child's consent in relation to information society services Art. 9 GDPR Processing of special categories of personal data Art. 22 GDPR Automated individual decision-making, including profiling Art. 49 GDPR Derogations for specific situations\r\n\r\nRelevant GDPR Recitals: (32) Conditions for consent (33) Consent to certain areas of scientific research (38) Special protection of children's personal data (40) Lawfulness of data processing (42) Burden of proof and requirements for consent (43) Freely given consent (50) Further processing of personal data (51) Protecting sensitive personal data (54) Processing of sensitive data in public health sector (71) Profiling (111) Exceptions for certain cases of international transfers (155) Processing in the employment context (161) Consenting to the participation in clinical trials (171) Repeal of Directive 95/46/EC and transitional provisions"
                },
                {
                    "code": "GDPRResearchCD",
                    "display": "GDPR Research Consent Directive",
                    "definition": "A consent directive that complies with regulatory requirements for a consent directive compliant with the European Union General Data Protection Regulation (GDPR) definition: Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.\r\n\r\nGDPR research consent directive has the additional caveat that it is often not possible to fully identify the purpose of personal data processing for scientific research purposes at the time of data collection. Therefore, data subjects should be allowed to give their consent to certain areas of scientific research when in keeping with recognized ethical standards for scientific research. Data subjects should have the opportunity to give their consent only to certain areas of research or parts of research projects to the extent allowed by the intended purpose.\r\n\r\n*Usage Note:* HL7 Purpose of Use codes include specialize research purposes of use, which could be used to convey a data subject's purpose of use restrictions related to areas of research or parts of research projects. See citations for GDPRResearchCD and below: Recital 33 Consent to certain areas of scientific research https://gdpr-info.eu/recitals/no-33/> Recital 157 Information from registries and scientific research https://gdpr-info.eu/recitals/no-157 Recital 159 Processing for scientific research purposes\\* https://gdpr-info.eu/recitals/no-159/"
                },
                {
                    "code": "GDPRCONSENT",
                    "display": "GDPR Consent",
                    "definition": "Processing of personal data, inclusive of the special categories of data, is lawful only if the data subject has given explicit consent to the processing of his or her personal data, inclusive of the special categories of data, for one or more specific purposes, except where Union or Member State law provide that the prohibition to use the data may not be lifted by the data subject; and for personal data which are manifestly made public by the data subject.\r\n\r\n*Usage Note:* The description is based on the following GDPR provisions: Article 6.1.a https://gdpr-info.eu/art-6-gdpr/ 1Processing shall be lawful only if and to the extent that at least one of the following applies: (a) the data subject has given consent to the processing of his or her personal data for one or more specific purposes. Article 9.1, 9.2a., 9.2.e https://gdpr-info.eu/art-9-gdpr/ 1. Processing of personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation shall be prohibited. 2. Paragraph 1 shall not apply if one of the following applies: (a) the data subject has given explicit consent to the processing of those personal data for one or more specified purposes, except where Union or Member State law provide that the prohibition referred to in paragraph 1 may not be lifted by the data subject; and (e) processing relates to personal data which are manifestly made public by the data subject."
                },
                {
                    "code": "OIC",
                    "display": "opt-in to personal information or effect collection in a registry or repository",
                    "definition": "An expressed privacy consent directive permitting the collection of a some or all personal information, including de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, which may be used to identify an individual in a registry or repository for purposes such as treatment, payment, operations, research, information exchange, public health, data analytics, marketing, and profiling.\r\n\r\n*Usage Note:* Useful when a more specific jurisdictional or organizational consent directive policy or form is not specified, available, or known, for example, where an individual wishes to opt-in to collection of some or all of the individual's information by multiple registries and repositories.\r\n\r\nMap: An \"expressed\" consent directive maps to ISO/TS 17975:2015(E) definitions for \"Express or Expressed: Consent to Collect, Use and Disclose personal health information is expressly given by the subject of care\" and \"Opt-in\"."
                },
                {
                    "code": "OIS",
                    "display": "opt-in to personal information or effect sharing via a registry or repository",
                    "definition": "An expressed privacy consent directive permitting access, use, or disclosure of a some or all personal information, including de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, which may be used to identify an individual in a registry or repository for purposes such as treatment, payment, operations, research, information exchange, public health, data analytics, marketing, and profiling.\r\n\r\n*Usage Note:* Useful when a more specific jurisdictional or organizational consent directive policy or form is not specified, available, or known, for example, where an individual wishes to opt-in to access, use, or disclosure of some or all of the individual's information by multiple registries and repositories.\r\n\r\nMap: An \"expressed\" consent directive maps to ISO/TS 17975:2015(E) Express or Expressed: Consent to Collect, Use and Disclose personal health information is expressly given by the subject of care and \"Opt-in\"."
                },
                {
                    "code": "OOC",
                    "display": "opt-out of personal information or effect collection in a registry or repository",
                    "definition": "An expressed privacy consent directive restricting or prohibiting collection of personal information, including de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, which may be used to identify an individual in a registry or repository for purposes such as treatment, payment, operations, research, information exchange, public health, data analytics, marketing, and profiling.\r\n\r\n*Usage Note:* Useful when a more specific jurisdictional or organizational consent directive policy or form is not specified, available, or known, for example, where an individual wishes to opt-out of access, use, or disclosure of some or all of the individual's information by multiple registries and repositories.\r\n\r\nMap: An \"expressed\" opt-out to collection consent directive maps to ISO/TS 17975:2015(E) definitions for \"Express or Expressed: Consent to Collect, Use and Disclose personal health information is expressly given by the subject of care\" and \"Express or Expressed (and Informed) Denial\"."
                },
                {
                    "code": "OOS",
                    "display": "opt-out of personal information or effect sharing via a registry or repository",
                    "definition": "An expressed privacy consent directive restricting or prohibiting access, use, or disclosure of personal information, including de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, which may be used to identify an individual in a registry or repository for purposes such as treatment, payment, operations, research, information exchange, public health, data analytics, marketing, and profiling.\r\n\r\n*Usage Note:* Useful when a more specific jurisdictional or organizational consent directive policy or form is not specified, available, or known, for example, where an individual wishes to opt-out of access, use, or disclosure of some or all of the individual's information by multiple registries and repositories.\r\n\r\nMap: An \"expressed\" opt-out to sharing consent directive maps to ISO/TS 17975:2015(E) definitions for \"Express or Expressed: Consent to Collect, Use and Disclose personal health information is expressly given by the subject of care\" and \"Express or Expressed (and Informed) Denial\"."
                },
                {
                    "code": "DENTAL",
                    "display": "dental care policy",
                    "definition": "**Definition:** A health insurance policy that that covers benefits for dental services."
                },
                {
                    "code": "DISEASE",
                    "display": "disease specific policy",
                    "definition": "**Definition:** A health insurance policy that covers benefits for healthcare services provided for named conditions under the policy, e.g., cancer, diabetes, or HIV-AIDS."
                },
                {
                    "code": "DRUGPOL",
                    "display": "drug policy",
                    "definition": "**Definition:** A health insurance policy that covers benefits for prescription drugs, pharmaceuticals, and supplies."
                },
                {
                    "code": "EHCPOL",
                    "display": "extended healthcare",
                    "definition": "Private insurance policy that provides coverage in addition to other policies (e.g. in addition to a Public Healthcare insurance policy)."
                },
                {
                    "code": "HIP",
                    "display": "health insurance plan policy",
                    "definition": "**Definition:** A health insurance policy that covers healthcare benefits by protecting covered parties from medical expenses arising from health conditions, sickness, or accidental injury as well as preventive care. Health insurance policies explicitly exclude coverage for losses insured under a disability policy, workers' compensation program, liability insurance (including automobile insurance); or for medical expenses, coverage for on-site medical clinics or for limited dental or vision benefits when these are provided under a separate policy.\r\n\r\n*Discussion:* Health insurance policies are offered by health insurance plans that typically reimburse providers for covered services on a fee-for-service basis, that is, a fee that is the allowable amount that a provider may charge. This is in contrast to managed care plans, which typically prepay providers a per-member/per-month amount or capitation as reimbursement for all covered services rendered. Health insurance plans include indemnity and healthcare services plans."
                },
                {
                    "code": "HSAPOL",
                    "display": "health spending account",
                    "definition": "Insurance policy that provides for an allotment of funds replenished on a periodic (e.g. annual) basis. The use of the funds under this policy is at the discretion of the covered party."
                },
                {
                    "code": "LTC",
                    "display": "long term care policy",
                    "definition": "**Definition:** An insurance policy that covers benefits for long-term care services people need when they no longer can care for themselves. This may be due to an accident, disability, prolonged illness or the simple process of aging. Long-term care services assist with activities of daily living including:\r\n\r\n *  Help at home with day-to-day activities, such as cooking, cleaning, bathing and dressing\r\n *  Care in the community, such as in an adult day care facility\r\n *  Supervised care provided in an assisted living facility\r\n *  Skilled care provided in a nursing home"
                },
                {
                    "code": "MCPOL",
                    "display": "managed care policy",
                    "definition": "**Definition:** Government mandated program providing coverage, disability income, and vocational rehabilitation for injuries sustained in the work place or in the course of employment. Employers may either self-fund the program, purchase commercial coverage, or pay a premium to a government entity that administers the program. Employees may be required to pay premiums toward the cost of coverage as well.\r\n\r\nManaged care policies specifically exclude coverage for losses insured under a disability policy, workers' compensation program, liability insurance (including automobile insurance); or for medical expenses, coverage for on-site medical clinics or for limited dental or vision benefits when these are provided under a separate policy.\r\n\r\n*Discussion:* Managed care policies are offered by managed care plans that contract with selected providers or health care organizations to provide comprehensive health care at a discount to covered parties and coordinate the financing and delivery of health care. Managed care uses medical protocols and procedures agreed on by the medical profession to be cost effective, also known as medical practice guidelines. Providers are typically reimbursed for covered services by a capitated amount on a per member per month basis that may reflect difference in the health status and level of services anticipated to be needed by the member."
                },
                {
                    "code": "MENTPOL",
                    "display": "mental health policy",
                    "definition": "**Definition:** A health insurance policy that covers benefits for mental health services and prescriptions."
                },
                {
                    "code": "POS",
                    "display": "point of service policy",
                    "definition": "**Definition:** A policy for a health plan that has features of both an HMO and a FFS plan. Like an HMO, a POS plan encourages the use its HMO network to maintain discounted fees with participating providers, but recognizes that sometimes covered parties want to choose their own provider. The POS plan allows a covered party to use providers who are not part of the HMO network (non-participating providers). However, there is a greater cost associated with choosing these non-network providers. A covered party will usually pay deductibles and coinsurances that are substantially higher than the payments when he or she uses a plan provider. Use of non-participating providers often requires the covered party to pay the provider directly and then to file a claim for reimbursement, like in an FFS plan."
                },
                {
                    "code": "SUBPOL",
                    "display": "substance use policy",
                    "definition": "**Definition:** A health insurance policy that covers benefits for substance use services."
                },
                {
                    "code": "VISPOL",
                    "display": "vision care policy",
                    "definition": "**Definition:** Set of codes for a policy that provides coverage for health care expenses arising from vision services.\r\n\r\nA health insurance policy that covers benefits for vision care services, prescriptions, and products."
                },
                {
                    "code": "MVA",
                    "display": "Motor vehicle accident",
                    "definition": "Incident or accident as the result of a motor vehicle accident"
                },
                {
                    "code": "SCHOOL",
                    "display": "School Accident",
                    "definition": "Incident or accident is the result of a school place accident."
                },
                {
                    "code": "SPT",
                    "display": "Sporting Accident",
                    "definition": "Incident or accident is the result of a sporting accident."
                },
                {
                    "code": "WPA",
                    "display": "Workplace accident",
                    "definition": "Incident or accident is the result of a work place accident"
                },
                {
                    "code": "_ActPatientSafetyIncidentCode",
                    "display": "ActPatientSafetyIncidentCode",
                    "definition": "**Definition:** A code specifying the particular kind of Patient Safety Incident that the Incident class instance represents.\r\n\r\n**Examples:**\"Medication incident\", \"slips, trips and falls incident\".The actual value set for the domain will be determined by each (realm) implementation, whose Patient Safety terminology will be specific, although probably linked to the WHO Patient Safety Taxonomy that is currently under development"
                },
                {
                    "code": "ACADR",
                    "display": "adverse drug reaction access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access adverse drug reaction information for a patient."
                },
                {
                    "code": "ACALL",
                    "display": "all access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access all information for a patient."
                },
                {
                    "code": "ACALLG",
                    "display": "allergy access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access allergy information for a patient."
                },
                {
                    "code": "ACCONS",
                    "display": "informational consent access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access informational consent information for a patient."
                },
                {
                    "code": "ACDEMO",
                    "display": "demographics access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access demographics information for a patient."
                },
                {
                    "code": "ACDI",
                    "display": "diagnostic imaging access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access diagnostic imaging information for a patient."
                },
                {
                    "code": "ACIMMUN",
                    "display": "immunization access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access immunization information for a patient."
                },
                {
                    "code": "ACLAB",
                    "display": "lab test result access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access lab test result information for a patient."
                },
                {
                    "code": "ACMED",
                    "display": "medication access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access medical condition information for a patient."
                },
                {
                    "code": "ACMEDC",
                    "display": "medical condition access",
                    "definition": "**Definition:** Provide consent to view or access medical condition information for a patient."
                },
                {
                    "code": "ACMEN",
                    "display": "mental health access",
                    "definition": "**Description:**Provide consent to collect, use, disclose, or access mental health information for a patient."
                },
                {
                    "code": "ACOBS",
                    "display": "common observations access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access common observation information for a patient."
                },
                {
                    "code": "ACPOLPRG",
                    "display": "policy or program information access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access coverage policy or program for a patient."
                },
                {
                    "code": "ACPROV",
                    "display": "provider information access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access provider information for a patient."
                },
                {
                    "code": "ACPSERV",
                    "display": "professional service access",
                    "definition": "**Description:** Provide consent to collect, use, disclose, or access professional service information for a patient."
                },
                {
                    "code": "ACSUBSTAB",
                    "display": "substance abuse access",
                    "definition": "**Description:**Provide consent to collect, use, disclose, or access substance abuse information for a patient."
                },
                {
                    "code": "INFAUT",
                    "display": "authorized information transfer",
                    "definition": "Authorization to collect, access, use, or disclose specified patient health information in accordance with jurisdictional law, organizational policy, or a patient's consent directive, which may be implied, deemed, opt-in, opt-out, or explicit."
                },
                {
                    "code": "INFCRT",
                    "display": "only on court order",
                    "definition": "Authorization to collect, access, use, or disclose specified patient health information in accordance with judicial system protocol, such as in the case of a subpoena or court order."
                },
                {
                    "code": "INFDNG",
                    "display": "only if danger to others",
                    "definition": "Authorization to collect, access, use, or disclose specified patient health information where deemed necessary to avert potential danger to other persons in accordance with jurisdictional law, organizational policy, or standards of practice. For example, disclosure about a person threatening violence."
                },
                {
                    "code": "INFEMER",
                    "display": "only in an emergency",
                    "definition": "Authorization to collect, access, use, or disclose specified patient health information in accordance with emergency information transfer protocol dictated by jurisdictional law, organization policy, or standards of practice. For example, sharing of health information during disaster response."
                },
                {
                    "code": "INFPWR",
                    "display": "only if public welfare risk",
                    "definition": "Authorization to collect, access, use, or disclose specified patient health information necessary to avert potential public welfare risk in accordance with jurisdictional law, organizational policy, or standards of practice. For example, reporting that a person is a victim of abuse or demonstrating suicidal tendencies."
                },
                {
                    "code": "INFREG",
                    "display": "regulatory information transfer",
                    "definition": "Authorization to collect, access, use, or disclose specified patient health information for public health, welfare, and safety purposes in accordance with jurisdictional law, organizational policy, or standards of practice. For example, public health reporting of notifiable conditions."
                },
                {
                    "code": "INFOACCESS",
                    "display": "access information",
                    "definition": "Authorization to obtain information with no further permission to collect and store it."
                },
                {
                    "code": "INFOCOLLECT",
                    "display": "collect information",
                    "definition": "Authorization to gather and store information."
                },
                {
                    "code": "INFODEIDENTIFIY",
                    "display": "deidentify information",
                    "definition": "Authorization to alter or remove identifying characteristics of an entity or individual that is a subject of the information."
                },
                {
                    "code": "INFODISCLOSE",
                    "display": "disclose information",
                    "definition": "Authorization to make information known to another party."
                },
                {
                    "code": "INFOMASK",
                    "display": "mask information",
                    "definition": "Authorization to alter information in order to conceal it from unauthorized recipients."
                },
                {
                    "code": "INFOREADONLY",
                    "display": "read only information",
                    "definition": "Authorization to access information within a specific context for communication purposes only. Storing, manipulating, and further disclosure are prohibited and may be technically disabled."
                },
                {
                    "code": "INFOREDACT",
                    "display": "redact information",
                    "definition": "Authorization to remove information that a recipient is not authorized to access."
                },
                {
                    "code": "INFOREDISCLOSE",
                    "display": "redisclose information",
                    "definition": "Authorization to make disclosed information known to another party."
                },
                {
                    "code": "INFOREIDENTIFY",
                    "display": "reidentify information",
                    "definition": "Authorization to alter or relink deidentified information so that an entity or individual that is the subject of that information identifiable."
                },
                {
                    "code": "INFOUSE",
                    "display": "use information",
                    "definition": "Authorization to employ or alter information."
                },
                {
                    "code": "ALLCAT",
                    "display": "all categories",
                    "definition": "**Description:** All patient information."
                },
                {
                    "code": "ALLGCAT",
                    "display": "allergy category",
                    "definition": "**Definition:**All information pertaining to a patient's allergy and intolerance records."
                },
                {
                    "code": "ARCAT",
                    "display": "adverse drug reaction category",
                    "definition": "**Description:** All information pertaining to a patient's adverse drug reactions."
                },
                {
                    "code": "COBSCAT",
                    "display": "common observation category",
                    "definition": "**Definition:**All information pertaining to a patient's common observation records (height, weight, blood pressure, temperature, etc.)."
                },
                {
                    "code": "DEMOCAT",
                    "display": "demographics category",
                    "definition": "**Definition:**All information pertaining to a patient's demographics (such as name, date of birth, gender, address, etc)."
                },
                {
                    "code": "DICAT",
                    "display": "diagnostic image category",
                    "definition": "**Definition:**All information pertaining to a patient's diagnostic image records (orders & results)."
                },
                {
                    "code": "IMMUCAT",
                    "display": "immunization category",
                    "definition": "**Definition:**All information pertaining to a patient's vaccination records."
                },
                {
                    "code": "LABCAT",
                    "display": "lab test category",
                    "definition": "**Description:** All information pertaining to a patient's lab test records (orders & results)"
                },
                {
                    "code": "MEDCCAT",
                    "display": "medical condition category",
                    "definition": "**Definition:**All information pertaining to a patient's medical condition records."
                },
                {
                    "code": "MENCAT",
                    "display": "mental health category",
                    "definition": "**Description:** All information pertaining to a patient's mental health records."
                },
                {
                    "code": "PSVCCAT",
                    "display": "professional service category",
                    "definition": "**Definition:**All information pertaining to a patient's professional service records (such as smoking cessation, counseling, medication review, mental health)."
                },
                {
                    "code": "RXCAT",
                    "display": "medication category",
                    "definition": "**Definition:**All information pertaining to a patient's medication records (orders, dispenses and other active medications)."
                },
                {
                    "code": "JurisIP",
                    "display": "jurisdictional information policy",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of information as defined by applicable jurisdictional law."
                },
                {
                    "code": "OrgIP",
                    "display": "organizational information policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of information, which does not conflict with jurisdictional law."
                },
                {
                    "code": "PersIP",
                    "display": "personal information policy",
                    "definition": "Personal policy on collection, access, use, or disclosure of information."
                },
                {
                    "code": "ETH",
                    "display": "substance abuse information sensitivity",
                    "definition": "Policy for handling alcohol or drug-abuse information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to alcohol or drug-abuse information that is deemed sensitive.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "GDIS",
                    "display": "genetic disease information sensitivity",
                    "definition": "Policy for handling genetic disease information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to genetic disease information that is deemed sensitive.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "HIV",
                    "display": "HIV/AIDS information sensitivity",
                    "definition": "Policy for handling HIV or AIDS information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to HIV or AIDS information that is deemed sensitive.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "MST",
                    "display": "military sexual trauma information sensitivity",
                    "definition": "Policy for handling information related to sexual assault or repeated, threatening sexual harassment that occurred while the patient was in the military, which is afforded heightened confidentiality.\r\n\r\nAccess control concerns for military sexual trauma is based on the patient being subject to control by a higher ranking military perpetrator and/or censure by others within the military unit. Due to the relatively unfettered access to healthcare information by higher ranking military personnel and those who have command over the patient, there is a need to sequester this information outside of the typical controls on access to military health records.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "PREGNANT",
                    "display": "pregnancy information sensitivity",
                    "definition": "Policy for handling information about an individual's current or past pregnancy status, deemed sensitive by the individual or by policy, which may be afforded heightened confidentiality.\r\n\r\n*Usage Note:* \r\n\r\nInformation about a patient's current or past pregnancy status may be considered sensitive in circumstances in which that status could result in discrimination or stigmatization."
                },
                {
                    "code": "SCA",
                    "display": "sickle cell anemia information sensitivity",
                    "definition": "Policy for handling sickle cell disease information, which is afforded heightened confidentiality. Information handling protocols are based on organizational policies related to sickle cell disease information, which is deemed sensitive.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then the Act valued with this ActCode should be associated with an Act valued with any applicable laws from the ActPrivacyLaw code system."
                },
                {
                    "code": "SDV",
                    "display": "sexual assault, abuse, or domestic violence information sensitivity",
                    "definition": "Policy for handling sexual assault, abuse, or domestic violence information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to sexual assault, abuse, or domestic violence information that is deemed sensitive.\r\n\r\nSDV code covers violence perpetrated by related and non-related persons. This code should be specific to physical and mental trauma caused by a related person only. The access control concerns are keeping the patient safe from the perpetrator who may have an abusive psychological control over the patient, may be stalking the patient, or may try to manipulate care givers into allowing the perpetrator to make contact with the patient. The definition needs to be clarified.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "SEX",
                    "display": "sexuality and reproductive health information sensitivity",
                    "definition": "Policy for handling sexuality and reproductive health information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to sexuality and reproductive health information that is deemed sensitive.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "SPI",
                    "display": "specially protected information sensitivity",
                    "definition": "Policy for handling information deemed specially protected by law or policy including substance abuse, substance use, psychiatric, mental health, behavioral health, and cognitive disorders, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "STD",
                    "display": "sexually transmitted disease information sensitivity",
                    "definition": "Policy for handling sexually transmitted disease information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to sexually transmitted disease information that is deemed sensitive.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "TBOO",
                    "display": "taboo",
                    "definition": "Policy for handling information not to be initially disclosed or discussed with patient except by a physician assigned to patient in this case. Information handling protocols based on organizational policies related to sensitive patient information that must be initially discussed with the patient by an attending physician before being disclosed to the patient.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.\r\n\r\n*Open Issue:* This definition conflates a rule and a characteristic, and there may be a similar issue with ts sibling codes."
                },
                {
                    "code": "VIO",
                    "display": "violence information sensitivity",
                    "definition": "Policy for handling information related to harm by violence, which is afforded heightened confidentiality. Harm by violence is perpetrated by an unrelated person.\r\n\r\nAccess control concerns for information about mental or physical harm resulting from violence caused by an unrelated person may include manipulation of care givers or access to records that enable the perpetrator contact or locate the patient, but the perpetrator will likely not have established abusive psychological control over the patient.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "IDS",
                    "display": "Identifier Sensitivity",
                    "definition": "Policy for handling information related to an identifier of an information subject, which will be afforded heightened confidentiality. Usage Note: Such policies may govern the sensitivity of information related to an identifier of an act, such as the identifier of a contract; a role, such as a citizen, a patient, a practitioner, or an organization; or an entity such as a medical device due to potential impact on the privacy, well-being, safety or integrity of an information subject. For example, protection against identity fraud or counterfeit."
                },
                {
                    "code": "SICKLE",
                    "display": "sickle cell",
                    "definition": "Types of sensitivity policies that apply to Acts. Act.confidentialityCode is defined in the RIM as \"constraints around appropriate disclosure of information about this Act, regardless of mood.\"\r\n\r\n*Usage Note:* ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises. Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values."
                },
                {
                    "code": "AUTOPOL",
                    "display": "automobile",
                    "definition": "Insurance policy for injuries sustained in an automobile accident. Will also typically covered non-named parties to the policy, such as pedestrians and passengers."
                },
                {
                    "code": "PUBLICPOL",
                    "display": "public healthcare",
                    "definition": "Insurance policy funded by a public health system such as a provincial or national health plan. Examples include BC MSP (British Columbia Medical Services Plan) OHIP (Ontario Health Insurance Plan), NHS (National Health Service)."
                },
                {
                    "code": "WCBPOL",
                    "display": "worker's compensation",
                    "definition": "Insurance policy for injuries sustained in the work place or in the course of employment."
                },
                {
                    "code": "_ActHealthInsuranceTypeCode",
                    "display": "ActHealthInsuranceTypeCode",
                    "definition": "**Definition:** Set of codes indicating the type of health insurance policy that covers health services provided to covered parties. A health insurance policy is a written contract for insurance between the insurance company and the policyholder, and contains pertinent facts about the policy owner (the policy holder), the health insurance coverage, the insured subscribers and dependents, and the insurer. Health insurance is typically administered in accordance with a plan, which specifies (1) the type of health services and health conditions that will be covered under what circumstances (e.g., exclusion of a pre-existing condition, service must be deemed medically necessary; service must not be experimental; service must provided in accordance with a protocol; drug must be on a formulary; service must be prior authorized; or be a referral from a primary care provider); (2) the type and affiliation of providers (e.g., only allopathic physicians, only in network, only providers employed by an HMO); (3) financial participations required of covered parties (e.g., co-pays, coinsurance, deductibles, out-of-pocket); and (4) the manner in which services will be paid (e.g., under indemnity or fee-for-service health plans, the covered party typically pays out-of-pocket and then file a claim for reimbursement, while health plans that have contractual relationships with providers, i.e., network providers, typically do not allow the providers to bill the covered party for the cost of the service until after filing a claim with the payer and receiving reimbursement)."
                },
                {
                    "code": "DIS",
                    "display": "disability insurance policy",
                    "definition": "**Definition:** An insurance policy that provides a regular payment to compensate for income lost due to the covered party's inability to work because of illness or injury."
                },
                {
                    "code": "EWB",
                    "display": "employee welfare benefit plan policy",
                    "definition": "**Definition:** An insurance policy under a benefit plan run by an employer or employee organization for the purpose of providing benefits other than pension-related to employees and their families. Typically provides health-related benefits, benefits for disability, disease or unemployment, or day care and scholarship benefits, among others. An employer sponsored health policy includes coverage of health care expenses arising from sickness or accidental injury, coverage for on-site medical clinics or for dental or vision benefits, which are typically provided under a separate policy. Coverage excludes health care expenses covered by accident or disability, workers' compensation, liability or automobile insurance."
                },
                {
                    "code": "FLEXP",
                    "display": "flexible benefit plan policy",
                    "definition": "**Definition:**  An insurance policy that covers qualified benefits under a Flexible Benefit plan such as group medical insurance, long and short term disability income insurance, group term life insurance for employees only up to $50,000 face amount, specified disease coverage such as a cancer policy, dental and/or vision insurance, hospital indemnity insurance, accidental death and dismemberment insurance, a medical expense reimbursement plan and a dependent care reimbursement plan.\r\n\r\n *Discussion:* See UnderwriterRoleTypeCode flexible benefit plan which is defined as a benefit plan that allows employees to choose from several life, health, disability, dental, and other insurance plans according to their individual needs. Also known as cafeteria plans. Authorized under Section 125 of the Revenue Act of 1978."
                },
                {
                    "code": "LIFE",
                    "display": "life insurance policy",
                    "definition": "**Definition:** A policy under which the insurer agrees to pay a sum of money upon the occurrence of the covered partys death. In return, the policyholder agrees to pay a stipulated amount called a premium at regular intervals. Life insurance indemnifies the beneficiary for the loss of the insurable interest that a beneficiary has in the life of a covered party. For persons related by blood, a substantial interest established through love and affection, and for all other persons, a lawful and substantial economic interest in having the life of the insured continue. An insurable interest is required when purchasing life insurance on another person. Specific exclusions are often written into the contract to limit the liability of the insurer; for example claims resulting from suicide or relating to war, riot and civil commotion.\r\n\r\n*Discussion:*A life insurance policy may be used by the covered party as a source of health care coverage in the case of a viatical settlement, which is the sale of a life insurance policy by the policy owner, before the policy matures. Such a sale, at a price discounted from the face amount of the policy but usually in excess of the premiums paid or current cash surrender value, provides the seller an immediate cash settlement. Generally, viatical settlements involve insured individuals with a life expectancy of less than two years. In countries without state-subsidized healthcare and high healthcare costs (e.g. United States), this is a practical way to pay extremely high health insurance premiums that severely ill people face. Some people are also familiar with life settlements, which are similar transactions but involve insureds with longer life expectancies (two to fifteen years)."
                },
                {
                    "code": "PNC",
                    "display": "property and casualty insurance policy",
                    "definition": "**Definition:** A type of insurance that covers damage to or loss of the policyholderaTMs property by providing payments for damages to property damage or the injury or death of living subjects. The terms \"casualty\" and \"liability\" insurance are often used interchangeably. Both cover the policyholder's legal liability for damages caused to other persons and/or their property."
                },
                {
                    "code": "REI",
                    "display": "reinsurance policy",
                    "definition": "**Definition:** An agreement between two or more insurance companies by which the risk of loss is proportioned. Thus the risk of loss is spread and a disproportionately large loss under a single policy does not fall on one insurance company. Acceptance by an insurer, called a reinsurer, of all or part of the risk of loss of another insurance company.\r\n\r\n**Discussion:** Reinsurance is a means by which an insurance company can protect itself against the risk of losses with other insurance companies. Individuals and corporations obtain insurance policies to provide protection for various risks (hurricanes, earthquakes, lawsuits, collisions, sickness and death, etc.). Reinsurers, in turn, provide insurance to insurance companies.\r\n\r\nFor example, an HMO may purchase a reinsurance policy to protect itself from losing too much money from one insured's particularly expensive health care costs. An insurance company issuing an automobile liability policy, with a limit of $100,000 per accident may reinsure its liability in excess of $10,000. A fire insurance company which issues a large policy generally reinsures a portion of the risk with one or several other companies. Also called *risk control insurance or stop-loss insurance.*"
                },
                {
                    "code": "SURPL",
                    "display": "surplus line insurance policy",
                    "definition": "**Definition:** \r\n\r\n1.  A risk or part of a risk for which there is no normal insurance market available.\r\n2.  Insurance written by unauthorized insurance companies. Surplus lines insurance is insurance placed with unauthorized insurance companies through licensed surplus lines agents or brokers."
                },
                {
                    "code": "UMBRL",
                    "display": "umbrella liability insurance policy",
                    "definition": "**Definition:** A form of insurance protection that provides additional liability coverage after the limits of your underlying policy are reached. An umbrella liability policy also protects you (the insured) in many situations not covered by the usual liability policies."
                },
                {
                    "code": "_ActInvoiceAdjudicationPaymentGroupCode",
                    "display": "ActInvoiceAdjudicationPaymentGroupCode",
                    "definition": "Codes representing adjustments to a Payment Advice such as retroactive, clawback, garnishee, etc."
                },
                {
                    "code": "_ActInvoicePaymentCode",
                    "display": "ActInvoiceAdjudicationPaymentGroupCode",
                    "definition": "Codes representing adjustments to a Payment Advice such as retroactive, clawback, garnishee, etc."
                },
                {
                    "code": "_ActInvoiceAdjudicationPaymentSummaryCode",
                    "display": "ActInvoiceAdjudicationPaymentSummaryCode",
                    "definition": "Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA). The code can represent summaries by day, location, payee, etc."
                },
                {
                    "code": "ALEC",
                    "display": "alternate electronic",
                    "definition": "Payment initiated by the payor as the result of adjudicating a submitted invoice that arrived to the payor from an electronic source that did not provide a conformant set of HL7 messages (e.g. web claim submission)."
                },
                {
                    "code": "BONUS",
                    "display": "bonus",
                    "definition": "Bonus payments based on performance, volume, etc. as agreed to by the payor."
                },
                {
                    "code": "CFWD",
                    "display": "carry forward adjusment",
                    "definition": "An amount still owing to the payor but the payment is 0$ and this cannot be settled until a future payment is made."
                },
                {
                    "code": "EDU",
                    "display": "education fees",
                    "definition": "Fees deducted on behalf of a payee for tuition and continuing education."
                },
                {
                    "code": "EPYMT",
                    "display": "early payment fee",
                    "definition": "Fees deducted on behalf of a payee for charges based on a shorter payment frequency (i.e. next day versus biweekly payments."
                },
                {
                    "code": "GARN",
                    "display": "garnishee",
                    "definition": "Fees deducted on behalf of a payee for charges based on a per-transaction or time-period (e.g. monthly) fee."
                },
                {
                    "code": "INVOICE",
                    "display": "submitted invoice",
                    "definition": "Payment is based on a payment intent for a previously submitted Invoice, based on formal adjudication results.."
                },
                {
                    "code": "PINV",
                    "display": "paper invoice",
                    "definition": "Payment initiated by the payor as the result of adjudicating a paper (original, may have been faxed) invoice."
                },
                {
                    "code": "PPRD",
                    "display": "prior period adjustment",
                    "definition": "An amount that was owed to the payor as indicated, by a carry forward adjusment, in a previous payment advice"
                },
                {
                    "code": "PROA",
                    "display": "professional association deduction",
                    "definition": "Professional association fee that is collected by the payor from the practitioner/provider on behalf of the association"
                },
                {
                    "code": "RECOV",
                    "display": "recovery",
                    "definition": "Retroactive adjustment such as fee rate adjustment due to contract negotiations."
                },
                {
                    "code": "RETRO",
                    "display": "retro adjustment",
                    "definition": "Bonus payments based on performance, volume, etc. as agreed to by the payor."
                },
                {
                    "code": "TRAN",
                    "display": "transaction fee",
                    "definition": "Fees deducted on behalf of a payee for charges based on a per-transaction or time-period (e.g. monthly) fee."
                },
                {
                    "code": "INVTYPE",
                    "display": "invoice type",
                    "definition": "Transaction counts and value totals by invoice type (e.g. RXDINV - Pharmacy Dispense)"
                },
                {
                    "code": "PAYEE",
                    "display": "payee",
                    "definition": "Transaction counts and value totals by each instance of an invoice payee."
                },
                {
                    "code": "PAYOR",
                    "display": "payor",
                    "definition": "Transaction counts and value totals by each instance of an invoice payor."
                },
                {
                    "code": "SENDAPP",
                    "display": "sending application",
                    "definition": "Transaction counts and value totals by each instance of a messaging application on a single processor. It is a registered identifier known to the receivers."
                },
                {
                    "code": "UNSPSC",
                    "display": "United Nations Standard Products and Services Classification",
                    "definition": "**Description:**United Nations Standard Products and Services Classification, managed by Uniform Code Council (UCC): www.unspsc.org"
                },
                {
                    "code": "_CPT5",
                    "display": "CPT5",
                    "definition": "**Description:**Physicians Current Procedural Terminology (CPT) Manual is a listing of descriptive terms and identifying codes for reporting medical services and procedures performed by physicians. Available for the AMA at the address listed for CPT above. These codes are found in Appendix A of CPT 2000 Standard Edition. (CPT 2000 Standard Edition, American Medical Association, Chicago, IL)."
                },
                {
                    "code": "_HCPCS",
                    "display": "HCPCS",
                    "definition": "**Description:**Health Care Financing Administration Common Procedural Coding System (HCPCS) Codes are procedure identifying codes. HCPCS is Health Care Finance AdministrationaTMs (HFCA) coding scheme to group procedures performed for payment to providers. contains codes for medical equipment, injectable drugs, transportation services, and other services not found in CPT4."
                },
                {
                    "code": "_ICD10PCS",
                    "display": "ICD10PCS",
                    "definition": "**Description:**International Classification of Diseases, 10th Revision, Procedure Coding System (ICD-10-PCS) are procedure identifying codes. ICD-10-PCS describes the classification of inpatient procedures for statistical purposes."
                },
                {
                    "code": "_ICD9PCS",
                    "display": "ICD9PCS",
                    "definition": "**Description:**International Classification of Diseases, 9th Revision, Procedure Coding System (ICD-9-PCS) are procedure identifying codes. ICD-9-PCS describes the classification of inpatient procedures for statistical purposes."
                },
                {
                    "code": "_ActInvoiceDetailClinicalProductCode",
                    "display": "ActInvoiceDetailClinicalProductCode",
                    "definition": "An identifying data string for healthcare products."
                },
                {
                    "code": "_ActInvoiceDetailDrugProductCode",
                    "display": "ActInvoiceDetailDrugProductCode",
                    "definition": "An identifying data string for A substance used as a medication or in the preparation of medication."
                },
                {
                    "code": "_ActInvoiceDetailGenericCode",
                    "display": "ActInvoiceDetailGenericCode",
                    "definition": "The detail item codes to identify charges or changes to the total billing of a claim due to insurance rules and payments."
                },
                {
                    "code": "_ActInvoiceDetailPreferredAccommodationCode",
                    "display": "ActInvoiceDetailPreferredAccommodationCode",
                    "definition": "An identifying data string for medical facility accommodations."
                },
                {
                    "code": "_ActInvoiceDetailClinicalServiceCode",
                    "display": "ActInvoiceDetailClinicalServiceCode",
                    "definition": "An identifying data string for healthcare procedures."
                },
                {
                    "code": "_ActInvoiceDetailOralHealthProcedureCode",
                    "display": "ActInvoiceDetailOralHealthProcedureCode",
                    "definition": "An identifying data string for oral health procedure codes, e.g. extract tooth."
                },
                {
                    "code": "GTIN",
                    "display": "Global Trade Item Number",
                    "definition": "**Description:**Global Trade Item Number is an identifier for trade items developed by GS1 (comprising the former EAN International and Uniform Code Council)."
                },
                {
                    "code": "UPC",
                    "display": "Universal Product Code",
                    "definition": "**Description:**Universal Product Code is one of a wide variety of bar code languages widely used in the United States and Canada for items in stores."
                },
                {
                    "code": "COIN",
                    "display": "coinsurance",
                    "definition": "That portion of the eligible charges which a covered party must pay for each service and/or product. It is a percentage of the eligible amount for the service/product that is typically charged after the covered party has met the policy deductible. This amount represents the covered party's coinsurance that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results."
                },
                {
                    "code": "COPAYMENT",
                    "display": "patient co-pay",
                    "definition": "That portion of the eligible charges which a covered party must pay for each service and/or product. It is a defined amount per service/product of the eligible amount for the service/product. This amount represents the covered party's copayment that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results."
                },
                {
                    "code": "DEDUCTIBLE",
                    "display": "deductible",
                    "definition": "That portion of the eligible charges which a covered party must pay in a particular period (e.g. annual) before the benefits are payable by the adjudicator. This amount represents the covered party's deductible that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results."
                },
                {
                    "code": "PAY",
                    "display": "payment",
                    "definition": "The guarantor, who may be the patient, pays the entire charge for a service. Reasons for such action may include: there is no insurance coverage for the service (e.g. cosmetic surgery); the patient wishes to self-pay for the service; or the insurer denies payment for the service due to contractual provisions such as the need for prior authorization."
                },
                {
                    "code": "SPEND",
                    "display": "spend down",
                    "definition": "That total amount of the eligible charges which a covered party must periodically pay for services and/or products prior to the Medicaid program providing any coverage. This amount represents the covered party's spend down that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results"
                },
                {
                    "code": "COINS",
                    "display": "co-insurance",
                    "definition": "The covered party pays a percentage of the cost of covered services."
                },
                {
                    "code": "_ActInvoiceDetailGenericAdjudicatorCode",
                    "display": "ActInvoiceDetailGenericAdjudicatorCode",
                    "definition": "The billable item codes to identify adjudicator specified components to the total billing of a claim."
                },
                {
                    "code": "_ActInvoiceDetailGenericModifierCode",
                    "display": "ActInvoiceDetailGenericModifierCode",
                    "definition": "The billable item codes to identify modifications to a billable item charge. As for example after hours increase in the office visit fee."
                },
                {
                    "code": "_ActInvoiceDetailGenericProviderCode",
                    "display": "ActInvoiceDetailGenericProviderCode",
                    "definition": "The billable item codes to identify provider supplied charges or changes to the total billing of a claim."
                },
                {
                    "code": "_ActInvoiceDetailTaxCode",
                    "display": "ActInvoiceDetailTaxCode",
                    "definition": "The billable item codes to identify modifications to a billable item charge by a tax factor applied to the amount. As for example 7% provincial sales tax."
                },
                {
                    "code": "AFTHRS",
                    "display": "non-normal hours",
                    "definition": "Premium paid on service fees in compensation for practicing outside of normal working hours."
                },
                {
                    "code": "ISOL",
                    "display": "isolation allowance",
                    "definition": "Premium paid on service fees in compensation for practicing in a remote location."
                },
                {
                    "code": "OOO",
                    "display": "out of office",
                    "definition": "Premium paid on service fees in compensation for practicing at a location other than normal working location."
                },
                {
                    "code": "CANCAPT",
                    "display": "cancelled appointment",
                    "definition": "A charge to compensate the provider when a patient cancels an appointment with insufficient time for the provider to make another appointment with another patient."
                },
                {
                    "code": "DSC",
                    "display": "discount",
                    "definition": "A reduction in the amount charged as a percentage of the amount. For example a 5% discount for volume purchase."
                },
                {
                    "code": "ESA",
                    "display": "extraordinary service assessment",
                    "definition": "A premium on a service fee is requested because, due to extenuating circumstances, the service took an extraordinary amount of time or supplies."
                },
                {
                    "code": "FFSTOP",
                    "display": "fee for service top off",
                    "definition": "Under agreement between the parties (payor and provider), a guaranteed level of income is established for the provider over a specific, pre-determined period of time. The normal course of business for the provider is submission of fee-for-service claims. Should the fee-for-service income during the specified period of time be less than the agreed to amount, a top-up amount is paid to the provider equal to the difference between the fee-for-service total and the guaranteed income amount for that period of time. The details of the agreement may specify (or not) a requirement for repayment to the payor in the event that the fee-for-service income exceeds the guaranteed amount."
                },
                {
                    "code": "FNLFEE",
                    "display": "final fee",
                    "definition": "Anticipated or actual final fee associated with treating a patient."
                },
                {
                    "code": "FRSTFEE",
                    "display": "first fee",
                    "definition": "Anticipated or actual initial fee associated with treating a patient."
                },
                {
                    "code": "MARKUP",
                    "display": "markup or up-charge",
                    "definition": "An increase in the amount charged as a percentage of the amount. For example, 12% markup on product cost."
                },
                {
                    "code": "MISSAPT",
                    "display": "missed appointment",
                    "definition": "A charge to compensate the provider when a patient does not show for an appointment."
                },
                {
                    "code": "PERFEE",
                    "display": "periodic fee",
                    "definition": "Anticipated or actual periodic fee associated with treating a patient. For example, expected billing cycle such as monthly, quarterly. The actual period (e.g. monthly, quarterly) is specified in the unit quantity of the Invoice Element."
                },
                {
                    "code": "PERMBNS",
                    "display": "performance bonus",
                    "definition": "The amount for a performance bonus that is being requested from a payor for the performance of certain services (childhood immunizations, influenza immunizations, mammograms, pap smears) on a sliding scale. That is, for 90% of childhood immunizations to a maximum of $2200/yr. An invoice is created at the end of the service period (one year) and a code is submitted indicating the percentage achieved and the dollar amount claimed."
                },
                {
                    "code": "RESTOCK",
                    "display": "restocking fee",
                    "definition": "A charge is requested because the patient failed to pick up the item and it took an amount of time to return it to stock for future use."
                },
                {
                    "code": "TRAVEL",
                    "display": "travel",
                    "definition": "A charge to cover the cost of travel time and/or cost in conjuction with providing a service or product. It may be charged per kilometer or per hour based on the effective agreement."
                },
                {
                    "code": "URGENT",
                    "display": "urgent",
                    "definition": "Premium paid on service fees in compensation for providing an expedited response to an urgent situation."
                },
                {
                    "code": "_ActEncounterAccommodationCode",
                    "display": "ActEncounterAccommodationCode",
                    "definition": "Accommodation type. In Intent mood, represents the accommodation type requested. In Event mood, represents accommodation assigned/used. In Definition mood, represents the available accommodation type."
                },
                {
                    "code": "FST",
                    "display": "federal sales tax",
                    "definition": "Federal tax on transactions such as the Goods and Services Tax (GST)"
                },
                {
                    "code": "HST",
                    "display": "harmonized sales Tax",
                    "definition": "Joint Federal/Provincial Sales Tax"
                },
                {
                    "code": "PST",
                    "display": "provincial/state sales tax",
                    "definition": "Tax levied by the provincial or state jurisdiction such as Provincial Sales Tax"
                },
                {
                    "code": "_ActInvoiceAdjudicationPaymentCode",
                    "display": "ActInvoiceAdjudicationPaymentCode",
                    "definition": "Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA). The code can represent summaries by day, location, payee and other cost elements such as bonus, retroactive adjustment and transaction fees."
                },
                {
                    "code": "_ActInvoiceDetailCode",
                    "display": "ActInvoiceDetailCode",
                    "definition": "Codes representing a service or product that is being invoiced (billed). The code can represent such concepts as \"office visit\", \"drug X\", \"wheelchair\" and other billable items such as taxes, service charges and discounts."
                },
                {
                    "code": "_ActInvoiceGroupCode",
                    "display": "ActInvoiceGroupCode",
                    "definition": "Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.\r\n\r\nInvoice elements of this type signify a grouping of one or more children (detail) invoice elements. They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements."
                },
                {
                    "code": "_InvoiceElementAdjudicated",
                    "display": "InvoiceElementAdjudicated",
                    "definition": "Total counts and total net amounts adjudicated for all Invoice Groupings that were adjudicated within a time period based on the adjudication date of the Invoice Grouping."
                },
                {
                    "code": "_InvoiceElementPaid",
                    "display": "InvoiceElementPaid",
                    "definition": "Total counts and total net amounts paid for all Invoice Groupings that were paid within a time period based on the payment date."
                },
                {
                    "code": "_InvoiceElementSubmitted",
                    "display": "InvoiceElementSubmitted",
                    "definition": "Total counts and total net amounts billed for all Invoice Groupings that were submitted within a time period. Adjudicated invoice elements are included."
                },
                {
                    "code": "_ActInvoiceInterGroupCode",
                    "display": "ActInvoiceInterGroupCode",
                    "definition": "Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.\r\n\r\nInvoice elements of this type signify a grouping of one or more children (detail) invoice elements. They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.\r\n\r\nThe domain is only specified for an intermediate invoice element group (non-root or non-top level) for an Invoice."
                },
                {
                    "code": "_ActInvoiceRootGroupCode",
                    "display": "ActInvoiceRootGroupCode",
                    "definition": "Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.\r\n\r\nInvoice elements of this type signify a grouping of one or more children (detail) invoice elements. They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.\r\n\r\nCodes from this domain reflect the type of Invoice such as Pharmacy Dispense, Clinical Service and Clinical Product. The domain is only specified for the root (top level) invoice element group for an Invoice."
                },
                {
                    "code": "CPNDDRGING",
                    "display": "compound drug invoice group",
                    "definition": "A grouping of invoice element groups and details including the ones specifying the compound ingredients being invoiced. It may also contain generic detail items such as markup."
                },
                {
                    "code": "CPNDINDING",
                    "display": "compound ingredient invoice group",
                    "definition": "A grouping of invoice element details including the one specifying an ingredient drug being invoiced. It may also contain generic detail items such as tax or markup."
                },
                {
                    "code": "CPNDSUPING",
                    "display": "compound supply invoice group",
                    "definition": "A grouping of invoice element groups and details including the ones specifying the compound supplies being invoiced. It may also contain generic detail items such as markup."
                },
                {
                    "code": "DRUGING",
                    "display": "drug invoice group",
                    "definition": "A grouping of invoice element details including the one specifying the drug being invoiced. It may also contain generic detail items such as markup."
                },
                {
                    "code": "FRAMEING",
                    "display": "frame invoice group",
                    "definition": "A grouping of invoice element details including the ones specifying the frame fee and the frame dispensing cost that are being invoiced."
                },
                {
                    "code": "LENSING",
                    "display": "lens invoice group",
                    "definition": "A grouping of invoice element details including the ones specifying the lens fee and the lens dispensing cost that are being invoiced."
                },
                {
                    "code": "PRDING",
                    "display": "product invoice group",
                    "definition": "A grouping of invoice element details including the one specifying the product (good or supply) being invoiced. It may also contain generic detail items such as tax or discount."
                },
                {
                    "code": "COVGE",
                    "display": "coverage problem",
                    "definition": "Insurance coverage problems have been encountered. Additional explanation information to be supplied."
                },
                {
                    "code": "EFORM",
                    "display": "electronic form to follow",
                    "definition": "Electronic form with supporting or additional information to follow."
                },
                {
                    "code": "FAX",
                    "display": "fax to follow",
                    "definition": "Fax with supporting or additional information to follow."
                },
                {
                    "code": "GFTH",
                    "display": "good faith indicator",
                    "definition": "The medical service was provided to a patient in good faith that they had medical coverage, although no evidence of coverage was available before service was rendered."
                },
                {
                    "code": "LATE",
                    "display": "late invoice",
                    "definition": "Knowingly over the payor's published time limit for this invoice possibly due to a previous payor's delays in processing. Additional reason information will be supplied."
                },
                {
                    "code": "MANUAL",
                    "display": "manual review",
                    "definition": "Manual review of the invoice is requested. Additional information to be supplied. This may be used in the case of an appeal."
                },
                {
                    "code": "OOJ",
                    "display": "out of jurisdiction",
                    "definition": "The medical service and/or product was provided to a patient that has coverage in another jurisdiction."
                },
                {
                    "code": "ORTHO",
                    "display": "orthodontic service",
                    "definition": "The service provided is required for orthodontic purposes. If the covered party has orthodontic coverage, then the service may be paid."
                },
                {
                    "code": "PAPER",
                    "display": "paper documentation to follow",
                    "definition": "Paper documentation (or other physical format) with supporting or additional information to follow."
                },
                {
                    "code": "PIE",
                    "display": "public insurance exhausted",
                    "definition": "Public Insurance has been exhausted. Invoice has not been sent to Public Insuror and therefore no Explanation Of Benefits (EOB) is provided with this Invoice submission."
                },
                {
                    "code": "PYRDELAY",
                    "display": "delayed by a previous payor",
                    "definition": "Allows provider to explain lateness of invoice to a subsequent payor."
                },
                {
                    "code": "REFNR",
                    "display": "referral not required",
                    "definition": "Rules of practice do not require a physician's referral for the provider to perform a billable service."
                },
                {
                    "code": "REPSERV",
                    "display": "repeated service",
                    "definition": "The same service was delivered within a time period that would usually indicate a duplicate billing. However, the repeated service is a medical necessity and therefore not a duplicate."
                },
                {
                    "code": "UNRELAT",
                    "display": "unrelated service",
                    "definition": "The service provided is not related to another billed service. For example, 2 unrelated services provided on the same day to the same patient which may normally result in a refused payment for one of the items."
                },
                {
                    "code": "VERBAUTH",
                    "display": "verbal authorization",
                    "definition": "The provider has received a verbal permission from an authoritative source to perform the service or supply the item being invoiced."
                },
                {
                    "code": "CPINV",
                    "display": "clinical product invoice",
                    "definition": "Clinical product invoice where the Invoice Grouping contains one or more billable item and is supported by clinical product(s).\r\n\r\nFor example, a crutch or a wheelchair."
                },
                {
                    "code": "CP",
                    "display": "clinical product invoice",
                    "definition": "Clinical product invoice where the Invoice Grouping contains one or more billable item and is supported by clinical product(s).\r\n\r\nFor example, a crutch or a wheelchair."
                },
                {
                    "code": "CSINV",
                    "display": "clinical service invoice",
                    "definition": "Clinical Services Invoice which can be used to describe a single service, multiple services or repeated services.\r\n\r\n\\[1\\] Single Clinical services invoice where the Invoice Grouping contains one billable item and is supported by one clinical service.\r\n\r\nFor example, a single service for an office visit or simple clinical procedure (e.g. knee mobilization).\r\n\r\n\\[2\\] Multiple Clinical services invoice where the Invoice Grouping contains more than one billable item, supported by one or more clinical services. The services can be distinct and over multiple dates, but for the same patient. This type of invoice includes a series of treatments which must be adjudicated together.\r\n\r\nFor example, an adjustment and ultrasound for a chiropractic session where fees are associated for each of the services and adjudicated (invoiced) together.\r\n\r\n\\[3\\] Repeated Clinical services invoice where the Invoice Grouping contains one or more billable item, supported by the same clinical service repeated over a period of time.\r\n\r\nFor example, the same Chiropractic adjustment (service or treatment) delivered on 3 separate occasions over a period of time at the discretion of the provider (e.g. month)."
                },
                {
                    "code": "CS",
                    "display": "clinical service invoice",
                    "definition": "Clinical Services Invoice which can be used to describe a single service, multiple services or repeated services.\r\n\r\n\\[1\\] Single Clinical services invoice where the Invoice Grouping contains one billable item and is supported by one clinical service.\r\n\r\nFor example, a single service for an office visit or simple clinical procedure (e.g. knee mobilization).\r\n\r\n\\[2\\] Multiple Clinical services invoice where the Invoice Grouping contains more than one billable item, supported by one or more clinical services. The services can be distinct and over multiple dates, but for the same patient. This type of invoice includes a series of treatments which must be adjudicated together.\r\n\r\nFor example, an adjustment and ultrasound for a chiropractic session where fees are associated for each of the services and adjudicated (invoiced) together.\r\n\r\n\\[3\\] Repeated Clinical services invoice where the Invoice Grouping contains one or more billable item, supported by the same clinical service repeated over a period of time.\r\n\r\nFor example, the same Chiropractic adjustment (service or treatment) delivered on 3 separate occasions over a period of time at the discretion of the provider (e.g. month)."
                },
                {
                    "code": "CSPINV",
                    "display": "clinical service and product",
                    "definition": "A clinical Invoice Grouping consisting of one or more services and one or more product. Billing for these service(s) and product(s) are supported by multiple clinical billable events (acts).\r\n\r\nAll items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.\r\n\r\nFor example , a brace (product) invoiced together with the fitting (service)."
                },
                {
                    "code": "FININV",
                    "display": "financial invoice",
                    "definition": "Invoice Grouping without clinical justification. These will not require identification of participants and associations from a clinical context such as patient and provider.\r\n\r\nExamples are interest charges and mileage."
                },
                {
                    "code": "OHSINV",
                    "display": "oral health service",
                    "definition": "A clinical Invoice Grouping consisting of one or more oral health services. Billing for these service(s) are supported by multiple clinical billable events (acts).\r\n\r\nAll items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator."
                },
                {
                    "code": "PAINV",
                    "display": "preferred accommodation invoice",
                    "definition": "HealthCare facility preferred accommodation invoice."
                },
                {
                    "code": "PA",
                    "display": "preferred accommodation invoice",
                    "definition": "HealthCare facility preferred accommodation invoice."
                },
                {
                    "code": "RXCINV",
                    "display": "Rx compound invoice",
                    "definition": "Pharmacy dispense invoice for a compound."
                },
                {
                    "code": "RXC",
                    "display": "Rx compound invoice",
                    "definition": "Pharmacy dispense invoice for a compound."
                },
                {
                    "code": "RXDINV",
                    "display": "Rx dispense invoice",
                    "definition": "Pharmacy dispense invoice not involving a compound"
                },
                {
                    "code": "RXD",
                    "display": "Rx dispense invoice",
                    "definition": "Pharmacy dispense invoice not involving a compound"
                },
                {
                    "code": "SBFINV",
                    "display": "sessional or block fee invoice",
                    "definition": "Clinical services invoice where the Invoice Group contains one billable item for multiple clinical services in one or more sessions."
                },
                {
                    "code": "VRXINV",
                    "display": "vision dispense invoice",
                    "definition": "Vision dispense invoice for up to 2 lens (left and right), frame and optional discount. Eye exams are invoiced as a clinical service invoice."
                },
                {
                    "code": "_ActTherapyDurationWorkingListCode",
                    "display": "ActTherapyDurationWorkingListCode",
                    "definition": "Codes used to identify different types of 'duration-based' working lists. Examples include \"Continuous/Chronic\", \"Short-Term\" and \"As-Needed\"."
                },
                {
                    "code": "MEDLIST",
                    "display": "medication list",
                    "definition": "List of medications."
                },
                {
                    "code": "_ActProcedureCategoryList",
                    "display": "ActProcedureCategoryList",
                    "definition": "**Description:**Describes the high level classification of professional services for grouping.\r\n\r\n**Examples:**Education, Counseling, Surgery, etc."
                },
                {
                    "code": "ALC",
                    "display": "Alternative Level of Care",
                    "definition": "Provision of Alternate Level of Care to a patient in an acute bed. Patient is waiting for placement in a long-term care facility and is unable to return home."
                },
                {
                    "code": "CARD",
                    "display": "Cardiology",
                    "definition": "Provision of diagnosis and treatment of diseases and disorders affecting the heart"
                },
                {
                    "code": "CHR",
                    "display": "Chronic",
                    "definition": "Provision of recurring care for chronic illness."
                },
                {
                    "code": "DNTL",
                    "display": "Dental",
                    "definition": "Provision of treatment for oral health and/or dental surgery."
                },
                {
                    "code": "DRGRHB",
                    "display": "Drug Rehab",
                    "definition": "Provision of treatment for drug abuse."
                },
                {
                    "code": "GENRL",
                    "display": "General",
                    "definition": "General care performed by a general practitioner or family doctor as a responsible provider for a patient."
                },
                {
                    "code": "MED",
                    "display": "Medical",
                    "definition": "Provision of diagnostic and/or therapeutic treatment."
                },
                {
                    "code": "OBS",
                    "display": "Obstetrics",
                    "definition": "Provision of care of women during pregnancy, childbirth and immediate postpartum period. Also known as Maternity."
                },
                {
                    "code": "ONC",
                    "display": "Oncology",
                    "definition": "Provision of treatment and/or diagnosis related to tumors and/or cancer."
                },
                {
                    "code": "PALL",
                    "display": "Palliative",
                    "definition": "Provision of care for patients who are living or dying from an advanced illness."
                },
                {
                    "code": "PED",
                    "display": "Pediatrics",
                    "definition": "Provision of diagnosis and treatment of diseases and disorders affecting children."
                },
                {
                    "code": "PHAR",
                    "display": "Pharmaceutical",
                    "definition": "Pharmaceutical care performed by a pharmacist."
                },
                {
                    "code": "PHYRHB",
                    "display": "Physical Rehab",
                    "definition": "Provision of treatment for physical injury."
                },
                {
                    "code": "PSYCH",
                    "display": "Psychiatric",
                    "definition": "Provision of treatment of psychiatric disorder relating to mental illness."
                },
                {
                    "code": "SURG",
                    "display": "Surgical",
                    "definition": "Provision of surgical treatment."
                },
                {
                    "code": "ACU",
                    "display": "short term/acute",
                    "definition": "**Definition:**A list of medications which the patient is only expected to consume for the duration of the current order or limited set of orders and which is not expected to be renewed."
                },
                {
                    "code": "CHRON",
                    "display": "continuous/chronic",
                    "definition": "**Definition:**A list of medications which are expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped."
                },
                {
                    "code": "ONET",
                    "display": "one time",
                    "definition": "**Definition:**A list of medications which the patient is intended to be administered only once."
                },
                {
                    "code": "PRN",
                    "display": "as needed",
                    "definition": "**Definition:**A list of medications which the patient will consume intermittently based on the behavior of the condition for which the medication is indicated."
                },
                {
                    "code": "CTLSUB",
                    "display": "Controlled Substance",
                    "definition": "A monitoring program that focuses on narcotics and/or commonly abused substances that are subject to legal restriction."
                },
                {
                    "code": "INV",
                    "display": "investigational",
                    "definition": "**Definition:**A monitoring program that focuses on a drug which is under investigation and has not received regulatory approval for the condition being investigated"
                },
                {
                    "code": "LU",
                    "display": "limited use",
                    "definition": "**Description:**A drug that can be prescribed (and reimbursed) only if it meets certain criteria."
                },
                {
                    "code": "OTC",
                    "display": "non prescription medicine",
                    "definition": "Medicines designated in this way may be supplied for patient use without a prescription. The exact form of categorisation will vary in different realms."
                },
                {
                    "code": "RX",
                    "display": "prescription only medicine",
                    "definition": "Some form of prescription is required before the related medicine can be supplied for a patient. The exact form of regulation will vary in different realms."
                },
                {
                    "code": "SA",
                    "display": "special authorization",
                    "definition": "**Definition:**A drug that requires prior approval (to be reimbursed) before being dispensed"
                },
                {
                    "code": "SAC",
                    "display": "special access",
                    "definition": "**Description:**A drug that requires special access permission to be prescribed and dispensed."
                },
                {
                    "code": "IND01",
                    "display": "imaging study requiring contrast",
                    "definition": "**Description:**Contrast agent required for imaging study."
                },
                {
                    "code": "IND02",
                    "display": "colonoscopy prep",
                    "definition": "**Description:**Provision of prescription or direction to consume a product for purposes of bowel clearance in preparation for a colonoscopy."
                },
                {
                    "code": "IND03",
                    "display": "prophylaxis",
                    "definition": "**Description:**Provision of medication as a preventative measure during a treatment or other period of increased risk."
                },
                {
                    "code": "IND04",
                    "display": "surgical prophylaxis",
                    "definition": "**Description:**Provision of medication during pre-operative phase; e.g., antibiotics before dental surgery or bowel prep before colon surgery."
                },
                {
                    "code": "IND05",
                    "display": "pregnancy prophylaxis",
                    "definition": "**Description:**Provision of medication for pregnancy --e.g., vitamins, antibiotic treatments for vaginal tract colonization, etc."
                },
                {
                    "code": "CARELIST",
                    "display": "care plan",
                    "definition": "List of acts representing a care plan. The acts can be in a varierty of moods including event (EVN) to record acts that have been carried out as part of the care plan."
                },
                {
                    "code": "CONDLIST",
                    "display": "condition list",
                    "definition": "List of condition observations."
                },
                {
                    "code": "GOALLIST",
                    "display": "goal list",
                    "definition": "List of observations in goal mood."
                },
                {
                    "code": "VFPAPER",
                    "display": "verify paper",
                    "definition": "**Definition:**Indicates that the paper version of the record has, should be or is being verified against the electronic version."
                },
                {
                    "code": "VRFPAPER",
                    "display": "verify paper",
                    "definition": "**Definition:**Indicates that the paper version of the record has, should be or is being verified against the electronic version."
                },
                {
                    "code": "ANNDI",
                    "display": "diagnostic image note",
                    "definition": "**Description:**A note that is specific to a patient's diagnostic images, either historical, current or planned."
                },
                {
                    "code": "ANNGEN",
                    "display": "general note",
                    "definition": "**Description:**A general or uncategorized note."
                },
                {
                    "code": "ANNIMM",
                    "display": "immunization note",
                    "definition": "A note that is specific to a patient's immunizations, either historical, current or planned."
                },
                {
                    "code": "ANNLAB",
                    "display": "laboratory note",
                    "definition": "**Description:**A note that is specific to a patient's laboratory results, either historical, current or planned."
                },
                {
                    "code": "ANNMED",
                    "display": "medication note",
                    "definition": "**Description:**A note that is specific to a patient's medications, either historical, current or planned."
                },
                {
                    "code": "ACH",
                    "display": "Automated Clearing House",
                    "definition": "Automated Clearing House (ACH)."
                },
                {
                    "code": "CHK",
                    "display": "Cheque",
                    "definition": "A written order to a bank to pay the amount specified from funds on deposit."
                },
                {
                    "code": "DDP",
                    "display": "Direct Deposit",
                    "definition": "Electronic Funds Transfer (EFT) deposit into the payee's bank account"
                },
                {
                    "code": "NON",
                    "display": "Non-Payment Data",
                    "definition": "Non-Payment Data."
                },
                {
                    "code": "DF",
                    "display": "Daily Fill",
                    "definition": "A fill providing sufficient supply for one day"
                },
                {
                    "code": "EM",
                    "display": "Emergency Supply",
                    "definition": "A supply action where there is no 'valid' order for the supplied medication. E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)"
                },
                {
                    "code": "FF",
                    "display": "First Fill",
                    "definition": "The initial fill against an order. (This includes initial fills against refill orders.)"
                },
                {
                    "code": "FS",
                    "display": "Floor stock",
                    "definition": "A supply action to restock a smaller more local dispensary."
                },
                {
                    "code": "MS",
                    "display": "Manufacturer Sample",
                    "definition": "A supply of a manufacturer sample"
                },
                {
                    "code": "RF",
                    "display": "Refill",
                    "definition": "A fill against an order that has already been filled (or partially filled) at least once."
                },
                {
                    "code": "UD",
                    "display": "Unit Dose",
                    "definition": "A supply action that provides sufficient material for a single dose."
                },
                {
                    "code": "UDE",
                    "display": "unit dose equivalent",
                    "definition": "A supply action that provides sufficient material for a single dose via multiple products. E.g. 2 50mg tablets for a 100mg unit dose."
                },
                {
                    "code": "_ActConsent",
                    "display": "_ActConsent",
                    "definition": "Specifies the type or actual definition of a contractually binding agreement or a non-binding representation of that agreement between a grantor and a grantee as to the exchange of the grantee's considerations in return for the grantor's control of certain assets. The type of assets exchanged include rights, license, terms of service, valued items, information and real property assets and control over such assets such as physical and locatable property; intellectual property; biospecimen; genomic and genetic information related to an individual including that disclosed by genetically related individuals with or without the individual's consent; personal identifiable, pseudonymized, anonymized, de-identified per some rubric, and relinkable variants.\r\n\r\n*Usage Note:* Types or actual definitions of a contractually binding agreement or a non-binding representation of that agreement include:\r\n\r\n *  \\_ActDecision (formally ActConsentDirective), which specifies the type of decision made by the grantor. The decision types are mapped to ISO/TS 17975 Health informatics - Principles and data requirements for consent in the Collection, Use or Disclosure of personal health information;\r\n *  \\_ActPrivacyConsentDirective, which is the parent of types of registry participation consent directives, and of realm specific privacy consent directive policies such as \\_USPrivacyConsentDirective and \\_GDPRPrivacyConsentDirective."
                },
                {
                    "code": "_ActInformationActionPolicy",
                    "display": "_ActInformationActionPolicy",
                    "definition": "The type of action permitted on information by jurisdictional, organizational, or personal policy."
                },
                {
                    "code": "_ActInformationPolicy",
                    "display": "_ActInformationPolicy",
                    "definition": "Information management directives related to privacy, security, integrity, and control concerns, which may be governed by specific laws; based on private sector self-governance; adopted \"best practices\" recognized by a community of interest; or terms of license, participation, or service as implemented in jurisdictional, organizational, or personal policies."
                },
                {
                    "code": "_ActPrivacyPolicy",
                    "display": "ActPrivacyPolicy",
                    "definition": "A policy deeming certain information to be private to an individual or organization.\r\n\r\n*Definition:* A mandate, obligation, requirement, rule, or expectation relating to privacy.\r\n\r\n*Discussion:* ActPrivacyPolicyType codes support the designation of the 1..\\* policies that are applicable to an Act such as a Consent Directive, a Role such as a VIP Patient, or an Entity such as a patient who is a minor. 1..\\* ActPrivacyPolicyType values may be associated with an Act or Role to indicate the policies that govern the assignment of an Act or Role confidentialityCode. Use of multiple ActPrivacyPolicyType values enables fine grain specification of applicable policies, but must be carefully assigned to ensure cogency and avoid creation of conflicting policy mandates.\r\n\r\n*Usage Note:* Statutory title may be named in the ActClassPolicy Act Act.title to specify which privacy policy is being referenced."
                },
                {
                    "code": "ActTrustPolicyType",
                    "display": "trust policy",
                    "definition": "A mandate, obligation, requirement, rule, or expectation conveyed as security metadata between senders and receivers required to establish the reliability, authenticity, and trustworthiness of their transactions.\r\n\r\nTrust security metadata are observation made about aspects of trust applicable to an IT resource (data, information object, service, or system capability).\r\n\r\nTrust applicable to IT resources is established and maintained in and among security domains, and may be comprised of observations about the domain's trust authority, trust framework, trust policy, trust interaction rules, means for assessing and monitoring adherence to trust policies, mechanisms that enforce trust, and quality and reliability measures of assurance in those mechanisms. \\[Based on ISO IEC 10181-1 and NIST SP 800-63-2\\]\r\n\r\nFor example, identity proofing , level of assurance, and Trust Framework."
                },
                {
                    "code": "COVPOL",
                    "display": "benefit policy",
                    "definition": "**Description:**A mandate, obligation, requirement, rule, or expectation unilaterally imposed on benefit coverage under a policy or program by a sponsor, underwriter or payor on:\r\n\r\n *  The activity of another party\r\n *  The behavior of another party\r\n *  The manner in which an act is executed\r\n\r\n**Examples:**A clinical protocol imposed by a payer to which a provider must adhere in order to be paid for providing the service. A formulary from which a provider must select prescribed drugs in order for the patient to incur a lower copay."
                },
                {
                    "code": "SecurityPolicy",
                    "display": "security policy",
                    "definition": "Types of security policies that further specify the ActClassPolicy value set.\r\n\r\n**Examples:**\r\n\r\n *  obligation to encrypt\r\n *  refrain from redisclosure without consent"
                },
                {
                    "code": "_ActGDPRConsentDirective",
                    "display": "_ActGDPRConsentDirective",
                    "definition": "European Union General Data Protection Regulation (GDPR) consent directives."
                },
                {
                    "code": "_ActGenericConsentDirective",
                    "display": "_ActGenericConsentDirective",
                    "definition": "Specifies types of consent directives authorizing a registry or repository to collect and, under certain terms, manage the access, use, and disclosure of personal information, including de-identified information, and personal effects, such as biometrics, biospecimen or genetic material, which may be used to identify an individual.\r\n\r\nRegistries governed by registry consent directives are data management systems, which use metadata to support the collection, access, use, and disclosure of personal information or effects as well as observational or analytic information generated about personal information or effects stored in federated repositories. Such registries are used for a variety of purposes by federated health information exchanges, health information systems, personal record systems, and research organizations to locate and retrieve personal information or effects as well as observational or analytic information generated about personal information stored externally to their systems.\r\n\r\nRepositories governed by registry consent directives are data stores used to collect, access, use, and disclose personal information or effects as well as observational or analytic information generated about personal information or effects and metadata used to manage the repository contents. Such repositories are used for a variety of purposes by centralized health information exchanges, health information systems used by providers and payers, personal record systems, and research organizations. A repository typically includes a registry component that provides the data store with content management capabilities for internal purposes. A repository may also interface with one or more external registries, which provide federated content management."
                },
                {
                    "code": "_ActUSPrivacyConsentDirective",
                    "display": "_ActUSPrivacyConsentDirective",
                    "definition": "Specific US privacy consent directives in accordance with US federal, state, regional, organizational, or personal privacy policies."
                },
                {
                    "code": "_ActGDPRPrivacyLaw",
                    "display": "General Data Protection Regulation",
                    "definition": "GDPR is a regulation on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive). Promulgated by the European Parliament and Council of the European Union. Regulation available at L119, 4 May 2016, p. 1-88.\r\n\r\nGDPR privacy policies specifying types of lawful personal data processing based on a controller meeting one or more processing condition such as specified by law, compliance with data controller legal obligations, protection of data subject's vital interests, perform tasks in the public interest, related to legal claims, research and statistics, management of health or social care systems, legitimate interests of controller or third party. Processing sensitive personal data, including genetic, biometric and health data, as well as personal data from which racial and ethnic origin, political opinions, religious or ideological convictions or membership in a union can be attributed to a person, requires meeting at least one sensitive personal processing condition.\r\n\r\nGDPR 'processing' means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction. Article 4 https://gdpr-info.eu/art-4-gdpr/\r\n\r\n*Usage Note:* \r\n\r\n *  Confidentiality: e.g., U (unrestricted) for anonymized personal information; L (low) for pseudonymized U (unrestricted) for anonymized personal information; M (moderate) for indirectly identifiable information such as test scores and work times; N (normal) for personal information; and R (restricted) for sensitive personal information\r\n *  DPR sensitivity \\[personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation, some of which are defined at Article 4 https://gdpr-info.eu/art-4-gdpr/\r\n *  GDPR processing policies and GDPR ConsentDirectiveTypes, such as data subject consent and research consent.\r\n *  Other security category codes, such as compartment codes for legitimate relationship,\r\n *  Handling instructions including\r\n *  Purpose of use stipulated in a GDPR consent or contract restricting processing or related to the scope of the processing policy such as public health, research, and legal obligations\r\n *  Obligation policies such as GDPR Information Obligations https://gdpr-info.eu/issues/information-obligations, data minimization and deleting when processing is complete\r\n *  Refrain policies such as no relinking\r\n\r\nSee Intersoft GDPR at https://gdpr-info.eu/issues/personal-data/ Art. 4 GDPR Definitions https://gdpr-info.eu/art-4-gdpr/ Art. 9 GDPR Processing of special categories of personal data https://gdpr-info.eu/art-9-gdpr/ Relevant Recitals (26) Not applicable to anonymous data (30) Online identifiers for profiling and identification (34) Genetic data (35) Health data (51) Protecting sensitive personal data at Intersoft GDPR briefing papers and navigating tool https://gdpr-info.eu/\r\n\r\nAuthorities\r\n\r\n *  European Data Protection Supervisor - Security Measures for Personal Data Processing (Link)\r\n *  Data Protection Authority Isle of Man - Know your data - Mapping the 5 W's (Link)\r\n *  Data Protection Authority UK - Key definitions (Link)\r\n *  European Commission - What is personal data? (Link)\r\n *  European Commission - What personal data is considered sensitive? (Link)\r\n *  EU publications - Handbook on European data protection law - Personal data, page 83 (Link)\r\n\r\nExpert contribution A&L Goodbody - The GDPR: A Guide for Businesses - Definition of Personal & Sensitive Data, Page 8 (Link) Bird & Bird - Sensitive data and lawful processing (Link) https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules\\_en General Data Protection Regulation https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1528874672298&uri=CELEX%3A32016R0679 Communication on data protection - guidance on direct application of the GDPR http://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1517578296944&uri=CELEX%3A52018DC0043 Intersoft GDPR briefing papers and navigating tool https://gdpr-info.eu/"
                },
                {
                    "code": "_ActUSPrivacyLaw",
                    "display": "_ActUSPrivacyLaw",
                    "definition": "*Definition:* A jurisdictional mandate in the U.S. relating to privacy.\r\n\r\n*Usage Note:* ActPrivacyLaw codes may be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies. May be used to further specify rationale for assignment of other ActPrivacyPolicy codes in the US realm, e.g., ETH and 42CFRPart2 can be differentiated from ETH and Title38Part1."
                },
                {
                    "code": "_ActConsentDirective",
                    "display": "ActConsentDirective",
                    "definition": "Specifies the type of agreement between one or more grantor and grantee in which rights and obligations related to one or more shared items of interest are allocated.\r\n\r\n*Usage Note:* Such agreements may be considered \"consent directives\" or \"contracts\" depending on the context, and are considered closely related or synonymous from a legal perspective.\r\n\r\n**Examples:** \r\n\r\n *  Healthcare Privacy Consent Directive permitting or restricting in whole or part the collection, access, use, and disclosure of health information, and any associated handling caveats.\r\n *  Healthcare Medical Consent Directive to receive medical procedures after being informed of risks and benefits, thereby reducing the grantee's liability.\r\n *  Research Informed Consent for participation in clinical trials and disclosure of health information after being informed of risks and benefits, thereby reducing the grantee's liability.\r\n *  Substitute decision maker delegation in which the grantee assumes responsibility to act on behalf of the grantor.\r\n *  Contracts in which the agreement requires assent/dissent by the grantor of terms offered by a grantee, a consumer opts out of an \"award\" system for use of a retailer's marketing or credit card vendor's point collection cards in exchange for allowing purchase tracking and profiling.\r\n *  A mobile device or App privacy policy and terms of service to which a user must agree in whole or in part in order to utilize the service.\r\n *  Agreements between a client and an authorization server or between an authorization server and a resource operator and/or resource owner permitting or restricting e.g., collection, access, use, and disclosure of information, and any associated handling caveats."
                },
                {
                    "code": "_ActPrivacyLaw",
                    "display": "ActPrivacyLaw",
                    "definition": "A jurisdictional mandate, regulation, obligation, requirement, rule, or expectation deeming certain information to be private to an individual or organization, which is imposed on:\r\n\r\n *  The activity of a governed party\r\n *  The behavior of a governed party\r\n *  The manner in which an act is executed by a governed party"
                },
                {
                    "code": "_InformationSensitivityPolicy",
                    "display": "InformationSensitivityPolicy",
                    "definition": "A mandate, obligation, requirement, rule, or expectation characterizing the value or importance of a resource and may include its vulnerability. (Based on ISO7498-2:1989. Note: The vulnerability of personally identifiable sensitive information may be based on concerns that the unauthorized disclosure may result in social stigmatization or discrimination.) Description: Types of Sensitivity policy that apply to Acts or Roles. A sensitivity policy is adopted by an enterprise or group of enterprises (a 'policy domain') through a formal data use agreement that stipulates the value, importance, and vulnerability of information. A sensitivity code representing a sensitivity policy may be associated with criteria such as categories of information or sets of information identifiers (e.g., a value set of clinical codes or branch in a code system hierarchy). These criteria may in turn be used for the Policy Decision Point in a Security Engine. A sensitivity code may be used to set the confidentiality code used on information about Acts and Roles to trigger the security mechanisms required to control how security principals (i.e., a person, a machine, a software application) may act on the information (e.g., collection, access, use, or disclosure). Sensitivity codes are never assigned to the transport or business envelope containing patient specific information being exchanged outside of a policy domain as this would disclose the information intended to be protected by the policy. When sensitive information is exchanged with others outside of a policy domain, the confidentiality code on the transport or business envelope conveys the receiver's responsibilities and indicates the how the information is to be safeguarded without unauthorized disclosure of the sensitive information. This ensures that sensitive information is treated by receivers as the sender intends, accomplishing interoperability without point to point negotiations.\r\n\r\n*Usage Note:* Sensitivity codes are not useful for interoperability outside of a policy domain because sensitivity policies are typically localized and vary drastically across policy domains even for the same information category because of differing organizational business rules, security policies, and jurisdictional requirements. For example, an employee's sensitivity code would make little sense for use outside of a policy domain. 'Taboo' would rarely be useful outside of a policy domain unless there are jurisdictional requirements requiring that a provider disclose sensitive information to a patient directly. Sensitivity codes may be more appropriate in a legacy system's Master Files in order to notify those who access a patient's orders and observations about the sensitivity policies that apply. Newer systems may have a security engine that uses a sensitivity policy's criteria directly. The specializable InformationSensitivityPolicy Act.code may be useful in some scenarios if used in combination with a sensitivity identifier and/or Act.title."
                },
                {
                    "code": "COMPT",
                    "display": "compartment",
                    "definition": "This is the healthcare analog to the US Intelligence Community's concept of a Special Access Program. Compartment codes may be used in as a field value in an initiator's clearance to indicate permission to access and use an IT Resource with a security label having the same compartment value in security category label field.\r\n\r\nMap: Aligns with ISO 2382-8 definition of Compartment - \"A division of data into isolated blocks with separate security controls for the purpose of reducing risk.\""
                },
                {
                    "code": "_ActBillableServiceCode",
                    "display": "ActBillableServiceCode",
                    "definition": "**Definition:** An identifying code for billable services, as opposed to codes for similar services used to identify them for functional purposes."
                },
                {
                    "code": "_ActOralHealthProcedureCode",
                    "display": "ActOralHealthProcedureCode",
                    "definition": "**Description:**An identifying code for oral health interventions/procedures."
                },
                {
                    "code": "LOAN",
                    "display": "Loan",
                    "definition": "Temporary supply of a product without transfer of ownership for the product."
                },
                {
                    "code": "TRANSFER",
                    "display": "Transfer",
                    "definition": "Transfer of ownership for a product."
                },
                {
                    "code": "CHAR",
                    "display": "charity program",
                    "definition": "**Definition:** A program that covers the cost of services provided directly to a beneficiary who typically has no other source of coverage without charge."
                },
                {
                    "code": "CRIME",
                    "display": "crime victim program",
                    "definition": "**Definition:** A program that covers the cost of services provided to crime victims for injuries or losses related to the occurrence of a crime."
                },
                {
                    "code": "EAP",
                    "display": "employee assistance program",
                    "definition": "**Definition:** An employee assistance program is run by an employer or employee organization for the purpose of providing benefits and covering all or part of the cost for employees to receive counseling, referrals, and advice in dealing with stressful issues in their lives. These may include substance abuse, bereavement, marital problems, weight issues, or general wellness issues. The services are usually provided by a third-party, rather than the company itself, and the company receives only summary statistical data from the service provider. Employee's names and services received are kept confidential."
                },
                {
                    "code": "GOVEMP",
                    "display": "government employee health program",
                    "definition": "**Definition:** A set of codes used to indicate a government program that is an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health and financial status. Government programs are established or permitted by legislation with provisions for ongoing government oversight. Regulation mandates the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency is charged with implementing the program in accordance to the regulation\r\n\r\n**Example:** Federal employee health benefit program in the U.S."
                },
                {
                    "code": "HIRISK",
                    "display": "high risk pool program",
                    "definition": "**Definition:** A government program that provides health coverage to individuals who are considered medically uninsurable or high risk, and who have been denied health insurance due to a serious health condition. In certain cases, it also applies to those who have been quoted very high premiums a\" again, due to a serious health condition. The pool charges premiums for coverage. Because the pool covers high-risk people, it incurs a higher level of claims than premiums can cover. The insurance industry pays into the pool to make up the difference and help it remain viable."
                },
                {
                    "code": "IND",
                    "display": "indigenous peoples health program",
                    "definition": "**Definition:** Services provided directly and through contracted and operated indigenous peoples health programs.\r\n\r\n**Example:** Indian Health Service in the U.S."
                },
                {
                    "code": "MILITARY",
                    "display": "military health program",
                    "definition": "**Definition:** A government program that provides coverage for health services to military personnel, retirees, and dependents. A covered party who is a subscriber can choose from among Fee-for-Service (FFS) plans, and their Preferred Provider Organizations (PPO), or Plans offering a Point of Service (POS) Product, or Health Maintenance Organizations.\r\n\r\n**Example:** In the U.S., TRICARE, CHAMPUS."
                },
                {
                    "code": "RETIRE",
                    "display": "retiree health program",
                    "definition": "**Definition:** A government mandated program with specific eligibility requirements based on premium contributions made during employment, length of employment, age, and employment status, e.g., being retired, disabled, or a dependent of a covered party under this program. Benefits typically include ambulatory, inpatient, and long-term care, such as hospice care, home health care and respite care."
                },
                {
                    "code": "SOCIAL",
                    "display": "social service program",
                    "definition": "**Definition:** A social service program funded by a public or governmental entity.\r\n\r\n**Example:** Programs providing habilitation, food, lodging, medicine, transportation, equipment, devices, products, education, training, counseling, alteration of living or work space, and other resources to persons meeting eligibility criteria."
                },
                {
                    "code": "VET",
                    "display": "veteran health program",
                    "definition": "**Definition:** Services provided directly and through contracted and operated veteran health programs."
                },
                {
                    "code": "SREC",
                    "display": "specimen received",
                    "definition": "**Description:**Specimen has been received by the participating organization/department."
                },
                {
                    "code": "SSTOR",
                    "display": "specimen in storage",
                    "definition": "**Description:**Specimen has been placed into storage at a participating location."
                },
                {
                    "code": "STRAN",
                    "display": "specimen in transit",
                    "definition": "**Description:**Specimen has been put in transit to a participating receiver."
                },
                {
                    "code": "ACID",
                    "display": "Acidification",
                    "definition": "The lowering of specimen pH through the addition of an acid"
                },
                {
                    "code": "ALK",
                    "display": "Alkalization",
                    "definition": "The act rendering alkaline by impregnating with an alkali; a conferring of alkaline qualities."
                },
                {
                    "code": "DEFB",
                    "display": "Defibrination",
                    "definition": "The removal of fibrin from whole blood or plasma through physical or chemical means"
                },
                {
                    "code": "FILT",
                    "display": "Filtration",
                    "definition": "The passage of a liquid through a filter, accomplished by gravity, pressure or vacuum (suction)."
                },
                {
                    "code": "NEUT",
                    "display": "Neutralization",
                    "definition": "The act or process by which an acid and a base are combined in such proportions that the resulting compound is neutral."
                },
                {
                    "code": "RECA",
                    "display": "Recalcification",
                    "definition": "The addition of calcium back to a specimen after it was removed by chelating agents"
                },
                {
                    "code": "UFIL",
                    "display": "Ultrafiltration",
                    "definition": "The filtration of a colloidal substance through a semipermeable medium that allows only the passage of small molecules."
                },
                {
                    "code": "ARTBLD",
                    "display": "ActSpecObsArtBldCode",
                    "definition": "Describes the artificial blood identifier that is associated with the specimen."
                },
                {
                    "code": "DILUTION",
                    "display": "ActSpecObsDilutionCode",
                    "definition": "An observation that reports the dilution of a sample."
                },
                {
                    "code": "EVNFCTS",
                    "display": "ActSpecObsEvntfctsCode",
                    "definition": "Domain provides codes that qualify the ActLabObsEnvfctsCode domain. (Environmental Factors)"
                },
                {
                    "code": "INTFR",
                    "display": "ActSpecObsInterferenceCode",
                    "definition": "An observation that relates to factors that may potentially cause interference with the observation"
                },
                {
                    "code": "VOLUME",
                    "display": "ActSpecObsVolumeCode",
                    "definition": "An observation that reports the volume of a sample."
                },
                {
                    "code": "DRUG",
                    "display": "Drug therapy",
                    "definition": "The introduction of a drug into a subject with the intention of altering its biologic state with the intent of improving its health status."
                },
                {
                    "code": "FD",
                    "display": "food",
                    "definition": "**Description:** The introduction of material into a subject with the intent of providing nutrition or other dietary supplements (e.g. minerals or vitamins)."
                },
                {
                    "code": "IMMUNIZ",
                    "display": "Immunization",
                    "definition": "The introduction of an immunogen with the intent of stimulating an immune response, aimed at preventing subsequent infections by more viable agents."
                },
                {
                    "code": "_AdministrationDetectedIssueCode",
                    "display": "AdministrationDetectedIssueCode",
                    "definition": "Administration of the proposed therapy may be inappropriate or contraindicated as proposed"
                },
                {
                    "code": "_SupplyDetectedIssueCode",
                    "display": "SupplyDetectedIssueCode",
                    "definition": "Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy"
                },
                {
                    "code": "HISTORIC",
                    "display": "record recorded as historical",
                    "definition": "**Description:** While the record was accepted in the repository, there is a more recent version of a record of this type."
                },
                {
                    "code": "PATPREF",
                    "display": "violates stated preferences",
                    "definition": "**Definition:**The proposed therapy goes against preferences or consent constraints recorded in the patient's record."
                },
                {
                    "code": "OE",
                    "display": "order entry task",
                    "definition": "A clinician creates a request for a service to be performed for a given patient."
                },
                {
                    "code": "PATDOC",
                    "display": "patient documentation task",
                    "definition": "A person enters documentation about a given patient."
                },
                {
                    "code": "PATINFO",
                    "display": "patient information review task",
                    "definition": "A person (e.g., clinician, the patient herself) reviews patient information in the electronic medical record."
                },
                {
                    "code": "_ActMedicationTherapyDurationWorkingListCode",
                    "display": "act medication therapy duration working list",
                    "definition": "**Definition:**A collection of concepts that identifies different types of 'duration-based' mediation working lists.\r\n\r\n**Examples:**\"Continuous/Chronic\" \"Short-Term\" and \"As Needed\""
                },
                {
                    "code": "_ActPatientTransportationModeCode",
                    "display": "ActPatientTransportationModeCode",
                    "definition": "Definition: Characterizes how a patient was or will be transported to the site of a patient encounter.\r\n\r\n*Examples:* Via ambulance, via public transit, on foot."
                },
                {
                    "code": "42CFRPart2CD",
                    "display": "42 CFR Part 2 consent directive",
                    "definition": "A code representing an individual's privacy consent directive that complies with 42 CFR Part 2.31 Consent requirements https://www.gpo.gov/fdsys/pkg/CFR-2017-title42-vol1/pdf/CFR-2017-title42-vol1-sec2-31.pdf, which is a US Federal law stipulating the policy elements of a written consent to a disclosure under the regulations in Part 2.\r\n\r\n(1) The name of the patient. (2) The specific name(s) or general designation(s) of the part 2 program(s), entity(ies), or individual(s) permitted to make the disclosure. (3) How much and what kind of information is to be disclosed, including an explicit description of the substance use disorder information that may be disclosed. (4) (i) The name(s) of the individual(s) to whom a disclosure is to be made; or (ii)Entities with a treating provider relationship with the patient. If the recipient entity has a treating provider relationship with the patient whose information is being disclosed, such as a hospital, a health care clinic, or a private practice, the name of that entity; or (iii)Entities without a treating provider relationship with the patient. (A) If the recipient entity does not have a treating provider relationship with the patient whose information is being disclosed and is a third-party payer, the name of the entity; or (B) If the recipient entity does not have a treating provider relationship with the patient whose information is being disclosed and is not covered by paragraph (a)(4)(iii)(A) of this section, such as an entity that facilitates the exchange of health information or a research institution, the name(s) of the entity(-ies); and (1) The name(s) of an individual participant(s); or (2) The name(s) of an entity participant(s) that has a treating provider relationship with the patient whose information is being disclosed; or (3) A general designation of an individual or entity participant(s) or class of participants that must be limited to a participant(s) who has a treating provider relationship with the patient whose information is being disclosed. (i) When using a general designation, a statement must be included on the consent form that the patient (or other individual authorized to sign in lieu of the patient), confirms their understanding that, upon their request and consistent with this part, they must be provided a list of entities to which their information has been disclosed pursuant to the general designation (see Section 2.13(d)). (ii) \\[Reserved\\] (5) The purpose of the disclosure. In accordance with Section 2.13(a), the disclosure must be limited to that information which is necessary to carry out the stated purpose. (6) A statement that the consent is subject to revocation at any time except to the extent that the part 2 program or other lawful holder of patient identifying information that is permitted to make the disclosure has already acted in reliance on it. Acting in reliance includes the provision of treatment services in reliance on a valid consent to disclose information to a third-party payer (7) The date, event, or condition upon which the consent will expire if not revoked before. This date, event, or condition must ensure that the consent will last no longer than reasonably necessary to serve the purpose for which it is provided. (8) The signature of the patient and, when required for a patient who is a minor, the signature of an individual authorized to give consent under Section 2.14; or, when required for a patient who is incompetent or deceased, the signature of an individual authorized to sign under Section 2.15. Electronic signatures are permitted to the extent that they are not prohibited by any applicable law. (9) The date on which the consent is signed.\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by an individual's 42 CFR Part 2.31 consent directive, \"42CFRPart2CD\" as the security label policy code.\r\n\r\nSince information governed by an individual's 42 CFR Part 2.31 consent directive has a level of confidentiality protection that is more stringent than the normal level of protection under HIPAA 45 CFR Â§ 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, assign the HL7 Confidentiality code \"R\" (restricted)."
                },
                {
                    "code": "CompoundResearchCD",
                    "display": "Compound HIPAA Research Authorization and Informed Consent for Research",
                    "definition": "A code representing an individual's consent directive that complies with HIPAA Privacy rule 45 CFR Section 164.508 Uses and disclosures for which an authorization is required https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf, which is a US Federal law stipulating the policy elements of a valid authorization under this Section specific to disclosures for purposes of research when combined with a Common Rule or Federal Drug Administration consent to participate in research also known as a compound authorization.\r\n\r\n*Usage Note:* The Agency for Healthcare Research and Quality (AHRQ) has developed the Informed Consent and Authorization Toolkit for Minimal Risk Research to facilitate the process of obtaining informed consent and Health Insurance Portability and Accountability Act (HIPAA) authorization from potential research subjects. This toolkit contains information for people responsible for ensuring that potential research subjects are informed in a manner that is consistent with medical ethics and regulatory guidelines. From https://www.ahrq.gov/sites/default/files/publications/files/ictoolkit.pdf.\r\n\r\nUsed to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by an individual's right of access directive under 45 CFR Section 164.508 use \"CompoundResearchCD\" as the security label policy code.\r\n\r\nInformation or biospecimen disclosed under the Common Rule are not protected by the HIPAA Privacy Rule. If protected under other laws such as confidentiality provisions under the Common Rule, assign the HL7 Confidentiality code \"M\" (moderate).\r\n\r\nSee ActCode.\\_ActPolicyType.\\_ActPrivacyPolicy.\\_ActPrivacyLaw.\\_ActUSPrivacyLaw.HIPAAAuth (HIPAA Authorization for Disclosure). See: HIPAAAuth and NIH Sample Authorization Language for Research Uses and Disclosures of Individually Identifiable Health Information by a Covered Health Care Provider https://privacyruleandresearch.nih.gov/authorization.asp"
                },
                {
                    "code": "HIPAAAuthCD",
                    "display": "HIPAA Authorization Consent Directive",
                    "definition": "A code representing an individual's consent directive that complies with HIPAA Privacy rule 45 CFR Section 164.508 Uses and disclosures for which an authorization is required https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf, which is a US Federal law stipulating the policy elements of a valid authorization under this Section.\r\n\r\nAn \"authorization\" is required by the Privacy Rule for uses and disclosures of protected health information not otherwise allowed by the Rule. Where the Privacy Rule requires patient authorization, voluntary consent is not sufficient to permit a use or disclosure of protected health information unless it also satisfies the requirements of a valid authorization. An authorization is a detailed document that gives covered entities permission to use protected health information for specified purposes, which are generally other than treatment, payment, or health care operations, or to disclose protected health information to a third party specified by the individual.\r\n\r\nAn authorization must specify a number of elements, including a description of the protected health information to be used and disclosed, the person authorized to make the use or disclosure, the person to whom the covered entity may make the disclosure, an expiration date, and, in some cases, the purpose for which the information may be used or disclosed. With limited exceptions, covered entities may not condition treatment or coverage on the individual providing an authorization. https://www.hhs.gov/hipaa/for-professionals/faq/264/what-is-the-difference-between-consent-and-authorization/index.html\r\n\r\nA HIPAA Authorization must comply with 45 CFR Section164.508(c) Implementation specifications: Core elements and requirements - (1) Core elements. A valid authorization under this Section must contain at least the following elements: (i) A description of the information to be used or disclosed that identifies the information in a specific and meaningful fashion. (ii) The name or other specific identification of the person(s), or class of persons, authorized to make the requested use or disclosure. (iii) The name or other specific identification of the person(s), or class of persons, to whom the covered entity may make the requested use or disclosure. (iv) A description of each purpose of the requested use or disclosure. The statement \"at the request of the individual\" is a sufficient description of the purpose when an individual initiates the authorization and does not, or elects not to, provide a statement of the purpose. (v) An expiration date or an expiration event that relates to the individual or the purpose of the use or disclosure. The statement \"end of the research study,\" \"none,\" or similar language is sufficient if the authorization is for a use or disclosure of protected health information for research, including for the creation and maintenance of a research database or research repository. (vi) Signature of the individual and date. If the authorization is signed by a personal representative of the individual, a description of such representative's authority to act for the individual must also be provided. (2)Required statements. In addition to the core elements, the authorization must contain statements adequate to place the individual on notice of all of the following: (i) The individual's right to revoke the authorization in writing, and either: (A) The exceptions to the right to revoke and a description of how the individual may revoke the authorization; or (B) To the extent that the information in paragraph (c)(2)(i)(A) of this section is included in the notice required by Section 164.520, a reference to the covered entity's notice. https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to HIPAA governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by a an individual's HIPAA Authorization for Disclosure, use \"HIPAAAuthCD\" as the security label policy code.\r\n\r\nInformation governed under a HIPAA Authorization for Disclosure has the level of confidentiality protection afforded under the 45 CFR Section 164.506 - Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, which is considered the \"norm\", assign the HL7 Confidentiality code \"N\" (normal)."
                },
                {
                    "code": "HIPAAConsentCD",
                    "display": "HIPAA Consent Directive",
                    "definition": "A code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule 45 CFR Section 164.522 Rights to request privacy protection for protected health information https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-522.pdf, which stipulates the process by which a covered entity seeks agreement from an individual regarding how it will use and disclose the individual's protected health information for treatment, payment, and health care operations is termed a \"consent.\"\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by an individual's consent directive under 45 CFR Section 164.522 use \"HIPAAConsentCD\" as the security label policy code.\r\n\r\nSince information governed by a 45 CFR Section 164.522 has a level of confidentiality protection that is more stringent than the normal level of protection under HIPAA 45 CFR Section 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, assign the HL7 Confidentiality code \"R\" (restricted)."
                },
                {
                    "code": "HIPAAResearchAuthCD",
                    "display": "HIPAA Authorization for Disclosure for Research Consent Directive",
                    "definition": "A code representing an individual's consent directive that complies with HIPAA Privacy rule 45 CFR Section 164.508 Uses and disclosures for which an authorization is required https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf, which is a US Federal law stipulating the policy elements of a valid authorization under this Section specific to disclosures for purposes of research.\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by an individual's HIPAA Authorization for Disclosure for Research under 45 CFR Section 164.508 use \"HIPAAResearchAuthCD\" as the security label policy code.\r\n\r\nInformation disclosed under an individual's HIPAA Authorization for Disclosure for Research are not protected by the HIPAA Privacy Rule. If protected under other laws such as confidentiality provisions under the Common Rule, assign the HL7 Confidentiality code \"M\" (moderate).\r\n\r\nSee ActCode.\\_ActPolicyType.\\_ActPrivacyPolicy.\\_ActPrivacyLaw.\\_ActUSPrivacyLaw.HIPAAAuth (HIPAA Authorization for Disclosure). See: HIPAAAuth and NIH Sample Authorization Language for Research Uses and Disclosures of Individually Identifiable Health Information by a Covered Health Care Provider https://privacyruleandresearch.nih.gov/authorization.asp"
                },
                {
                    "code": "HIPAAROAD",
                    "display": "HIPAA Right of Access Directive",
                    "definition": "A code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule 45 CFR Section 164.524 Access of individuals to protected health information https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-524.pdf, stipulating the policy elements of an individual's written and signed right of access directive requesting that a covered entity send the individual's protected health information (PHI) to a third party.\r\n\r\nSee 45 CFR 164.524(c)(3)(ii) If an individual's request for access directs the covered entity to transmit the copy of protected health information directly to another person designated by the individual, the covered entity must provide the copy to the person designated by the individual. The individual's request must be in writing, signed by the individual, and clearly identify the designated person and where to send the copy of protected health information. https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-524.pdf\r\n\r\nThis right applies to PHI in a designated record set, which is defined as \"Designated record set means: (1) A group of records maintained by or for a covered entity that is: (i) The medical records and billing records about individuals maintained by or for a covered health care provider; (ii) The enrollment, payment, claims adjudication, and case or medical management record systems maintained by or for a health plan; or (iii) Used, in whole or in part, by or for the covered entity to make decisions about individuals. \\[https://www.law.cornell.edu/cfr/text/45/164.501\\]. Also see HHS Individuals' Right under HIPAA to Access their Health Information 45 CFR Section 164.524 \\[https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html\\#maximumflatfee\\].\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by an individual's right of access directive under 45 CFR Section 164.524 use \"HIPAAROAD\" as the security label policy code.\r\n\r\nInformation disclosed under a HIPAA 42 CFR Section 164.524 no longer has the level of confidentiality protection afforded under the 45 CFR Section 164.506 - Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf, which is considered the \"norm\", assign the HL7 Confidentiality code \"M\" (moderate), which may be protected under other laws such as the Federal Trade Commission privacy and security regulations."
                },
                {
                    "code": "MDHHS-5515",
                    "display": "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes",
                    "definition": "The State of Michigan standard privacy consent form for sharing of health information specific to behavioral health and substance use treatment in accordance with Public Act 129 of 2014. In Michigan, while providers are not required to use this new standard form (MDHHS-5515), they are required to accept it.\r\n\r\n*Usage Note:* For legislative background, current MDHHS-5515 consent directive form, and provider and patient FAQs see http://www.michigan.gov/mdhhs/0,5885,7-339-71550\\_2941\\_58005-343686--,00.html"
                },
                {
                    "code": "42CFRPart2",
                    "display": "42 CFR Part2",
                    "definition": "A code representing 42 CFR Part 2 Confidentiality of Substance Use Disorder Patient Records. 42 CFR Part 2 stipulates the privacy rights of an individual who has applied for or been given diagnosis or treatment for alcohol or drug abuse at a federally assisted program, which includes non-disclosure of health information relating to health care paid for by a federally assisted substance use disorder program without patient consent. https://www.gpo.gov/fdsys/pkg/CFR-2010-title42-vol1/pdf/CFR-2010-title42-vol1-part2.pdf\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, the collection, access, use, and disclosure of healthcare information is governed by 42 CFR Part 2 Confidentiality of Substance Use Disorder Patient Records https://www.gpo.gov/fdsys/pkg/CFR-2010-title42-vol1/pdf/CFR-2010-title42-vol1-part2.pdf use \"42CFRPart2\" as the security label policy code.\r\n\r\nSince information governed by a 42 CFR Part 2 has a level of confidentiality protection that is more stringent than the normal level of protection under HIPAA 45 CFR Section 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf assign the HL7 Confidentiality code \"R\" (restricted)."
                },
                {
                    "code": "CommonRule",
                    "display": "Common Rule",
                    "definition": "A code representing U.S. Federal laws governing research-related privacy policies known as the \"Common Rule\". The Common Rule is the U.S. Federal regulations governing the protection of human subjects in research (codified at Subpart A of 45 CFR part 46), which has been adopted by 15 U.S. Federal departments and agencies in an effort to promote uniformity, understanding, and compliance with human subject protections. Existing regulations governing the protection of human subjects in Food and Drug Administration (FDA)-regulated research (21 CFR parts 50, 56, 312, and 812) are separate from the Common Rule but include similar requirements.\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information or biospecimen is governed by the Common Rule use \"COMMONRULE\" as the security label policy code. Information or biospecimen disclosed under the Common Rule are not protected by the HIPAA Privacy Rule. If protected under other laws such as confidentiality provisions under the Common Rule, assign the HL7 Confidentiality code \"M\" (moderate)."
                },
                {
                    "code": "HIPAAAuth",
                    "display": "HIPAA Authorization for Disclosure",
                    "definition": "A code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Section 164.508) Uses and disclosures for which an authorization is required https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf, which stipulates the process by which a covered entity seeks agreement from an individual to use or disclose protected health information for other purposes, or to authorize another covered entity to disclose protected health information to the requesting covered entity, are termed \"authorizations\".\r\n\r\nAn \"authorization\" is required by the Privacy Rule for uses and disclosures of protected health information not otherwise allowed by the Rule. Where the Privacy Rule requires patient authorization, voluntary consent is not sufficient to permit a use or disclosure of protected health information unless it also satisfies the requirements of a valid authorization. An authorization is a detailed document that gives covered entities permission to use protected health information for specified purposes, which are generally other than treatment, payment, or health care operations, or to disclose protected health information to a third party specified by the individual.\r\n\r\nAn authorization must specify a number of elements, including a description of the protected health information to be used and disclosed, the person authorized to make the use or disclosure, the person to whom the covered entity may make the disclosure, an expiration date, and, in some cases, the purpose for which the information may be used or disclosed. With limited exceptions, covered entities may not condition treatment or coverage on the individual providing an authorization. https://www.hhs.gov/hipaa/for-professionals/faq/264/what-is-the-difference-between-consent-and-authorization/index.html\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to HIPAA governed information. In this case, where use or disclosure of healthcare information is governed by a covered entity's HIPAA Authorization for Disclosure, use \"HIPAAAuth\" as the security label policy code.\r\n\r\nInformation disclosed under a HIPAA Authorization for Disclosure no longer has the level of confidentiality protection afforded under the 45 CFR Section 164.506 - Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf, which is considered the \"norm\", assign the HL7 Confidentiality code \"M\" (moderate), which may be protected under other laws such as the Federal Trade Commission privacy and security regulations."
                },
                {
                    "code": "HIPAAConsent",
                    "display": "HIPAA Consent",
                    "definition": "A code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Section 164.522), which stipulates the process by which a covered entity seeks agreement from an individual regarding how it will use and disclose the individual's protected health information for treatment, payment, and health care operations is termed a \"consent\".\r\n\r\nThe Privacy Rule permits, but does not require, a covered entity to voluntarily obtain patient consent for uses and disclosures of protected health information for treatment, payment, and health care operations. Covered entities that do so have complete discretion to design a process that best suits their needs. From https://www.hhs.gov/hipaa/for-professionals/faq/264/what-is-the-difference-between-consent-and-authorization/index.html. The provisions relating to consent are largely contained in Section 164.522 Rights to request privacy protection for protected health information https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-522.pdf.\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by 45 CFR Section 164.522 use 'HIPAAConsent' as the security label policy code.\r\n\r\nSince information governed by a 45 CFR Section 164.522 has a level of confidentiality protection that is more stringent than the normal level of protection under HIPAA 45 CFR Section 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, assign the HL7 Confidentiality code 'R' (restricted)."
                },
                {
                    "code": "HIPAANOPP",
                    "display": "HIPAA notice of privacy practices",
                    "definition": "A code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Section 164.520), which stipulates an individual's right to adequate notice of the uses and disclosures of protected health information that may be made by the covered entity, and of the individual's rights and the covered entity's legal duties with respect to protected health information. Relevant HIPAA Privacy Rule provisions are at Section 164.520 (a) Standard: Notice of privacy practices. https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-520.pdf\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to HIPAA governed information. In this case, if collection, access, use, or disclosure of healthcare information is governed by a covered entity's HIPAA Notice of Privacy Practices, use \"HIPAANOPP\" as the security label policy code.\r\n\r\nInformation governed under a HIPAA Notice of Privacy Practices has the level of confidentiality protection afforded under the 45 CFR Section 164.506 - Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf , which is considered the \"norm\", assign the HL7 Confidentiality code \"N\" (normal)."
                },
                {
                    "code": "HIPAAPsyNotes",
                    "display": "HIPAA psychotherapy notes",
                    "definition": "A code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Section 164.508), which stipulates the privacy rights of an individual who is the subject of psychotherapy notes, and requires authorization for certain uses and disclosure of that information.\r\n\r\nDefinition of Psychotherapy notes 45 CFR Section 164.501 https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-501.pdf: Psychotherapy notes means notes recorded (in any medium) by a health care provider who is a mental health professional documenting or analyzing the contents of conversation during a private counseling session or a group, joint, or family counseling session and that are separated from the rest of the individual's medical record. Psychotherapy notes excludes medication prescription and monitoring, counseling session start and stop times, the modalities and frequencies of treatment furnished, results of clinical tests, and any summary of the following items: Diagnosis, functional status, the treatment plan, symptoms, prognosis, and progress to date.\r\n\r\nSee Section 164.508 Uses and disclosures for which an authorization is required. (2)Authorization required: Psychotherapy notes https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf: Notwithstanding any provision of this subpart, other than the transition provisions in Section 164.532, a covered entity must obtain an authorization for any use or disclosure of psychotherapy notes, except: (i) To carry out the following treatment, payment, or health care operations: (A) Use by the originator of the psychotherapy notes for treatment; (B) Use or disclosure by the covered entity for its own training programs in which students, trainees, or practitioners in mental health learn under supervision to practice or improve their skills in group, joint, family, or individual counseling; or (C) Use or disclosure by the covered entity to defend itself in a legal action or other proceeding brought by the individual; and (ii) A use or disclosure that is required by Section 164.502(a)(2)(ii) or permitted by Section 164.512(a); Section 164.512(d) with respect to the oversight of the originator of the psychotherapy notes; Section 164.512(g)(1); Section 164.512(j)(1)(i).\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to HIPAA governed information. In this case, the collection, access, use, or disclosure of healthcare information is governed by HIPAA 45 CFR 164.508 (2) Authorization required: Psychotherapy notes https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf , use \"HIPAAPsyNotes\" as the security label policy code.\r\n\r\nSince information governed by a HIPAA 45 CFR 164.508 (2) has a level of confidentiality protection that is more stringent than the normal level of protection under 45 CFR Section 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, assign the HL7 Confidentiality code \"R\" (restricted)."
                },
                {
                    "code": "HIPAAROA",
                    "display": "HIPAA Right of Access",
                    "definition": "A code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule 45 CFR Section 164.524 Access of individuals to protected health information https://www.govinfo.gov/app/details/CFR-2017-title45-vol1/CFR-2017-title45-vol1-sec164-524, which stipulates that an individual has a right of access to inspect and obtain a copy of protected health information about the individual in a designated record set, for as long as the protected health information is maintained in the designated record set with exceptions stipulated in HIPAA Privacy Rule Section 164.524. Exceptions include psychotherapy notes and information compiled in reasonable anticipation of, or for use in, a civil, criminal, or administrative action or proceeding.\r\n\r\nIf an individual's request for access directs the covered entity to transmit the copy of protected health information directly to another person designated by the individual, the covered entity must provide the copy to the person designated by the individual. The individual's request must be in writing, signed by the individual, and clearly identify the designated person and where to send the copy of protected health information.\r\n\r\nFor discussion on extent of right, grounds for denial, and documentation requirements see: HHS Individuals' Right under HIPAA to Access their Health Information 45 CFR Section 164.524 https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html and HHS FAQ on Right of Access vs. HIPAA Authorization https://www.hhs.gov/hipaa/for-professionals/faq/2041/why-depend-on-the-individuals-right/index.html\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed under 45 CFR Section 164.5224 use \"HIPAAROA\" as the security label policy code.\r\n\r\nInformation disclosed under a HIPAA 42 CFR Section 164.524 no longer has the level of confidentiality protection afforded under the 45 CFR Section 164.506 - Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-508.pdf, which is considered the \"norm\", assign the HL7 Confidentiality code \"M\" (moderate), which may be protected under other laws such as the Federal Trade Commission privacy and security regulations."
                },
                {
                    "code": "HIPAASelfPay",
                    "display": "HIPAA self-pay",
                    "definition": "A code representing 45 CFR 164.522 Rights to request privacy protection for protected health information, which is a US Federal law stipulating the privacy rights of an individual to restrict disclosure of information related to health care items or services for which the individual pays out of pocket in full to a health plan or payer.\r\n\r\nSee 45 CFR 164.522 https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-522.pdf. (vi) A covered entity must agree to the request of an individual to restrict disclosure of protected health information about the individual to a health plan if: (A) The disclosure is for the purpose of carrying out payment or health care operations and is not otherwise required by law; and (B) The protected health information pertains solely to a health care item or service for which the individual, or person other than the health plan on behalf of the individual, has paid the covered entity in full.\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to HIPAA governed information. In this case, the collection, access, use, or disclosure of healthcare information is governed by HIPAA 45 CFR 164.522 https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-522.pdf use \"HIPAASelfPay\" as the security label policy code.\r\n\r\nSince information governed by a HIPAA 45 CFR 164.522 has a level of confidentiality protection that is more stringent than the normal level of protection under 45 CFR Section 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, assign the HL7 Confidentiality code \"R\" (restricted)."
                },
                {
                    "code": "Title38Section7332",
                    "display": "Title 38 Section 7332",
                    "definition": "A code representing Title 38 Section 7332, which is a US Federal law stipulating the privacy rights of veterans diagnosed and treated for substance use disorders, infection with the human immunodeficiency virus, or sickle cell anemia.\r\n\r\nhttps://www.gpo.gov/fdsys/granule/USCODE-2011-title38/USCODE-2011-title38-partV-chap73-subchapIII-sec7332/content-detail.html . (1) Records of the identity, diagnosis, prognosis, or treatment of any patient or subject which are maintained in connection with the performance of any program or activity (including education, training, treatment, rehabilitation, or research) relating to drug abuse, alcoholism or alcohol abuse, infection with the human immunodeficiency virus, or sickle cell anemia which is carried out by or for the Department under this title shall, except as provided in subsections (e) and (f), be confidential, and (section 5701 of this title to the contrary notwithstanding) such records may be disclosed only for the purposes and under the circumstances expressly authorized under subsection (b). (2) Paragraph (1) prohibits the disclosure to any person or entity other than the patient or subject concerned of the fact that a special written consent is required in order for such records to be disclosed. (b) (1) The content of any record referred to in subsection (a) may be disclosed by the Secretary in accordance with the prior written consent of the patient or subject with respect to whom such record is maintained, but only to such extent, under such circumstances, and for such purposes as may be allowed in regulations prescribed by the Secretary. (2) Whether or not any patient or subject, with respect to whom any given record referred to in subsection (a) is maintained, gives written consent, the content of such record may be disclosed by the Secretary as follows: (A) To medical personnel to the extent necessary to meet a bona fide medical emergency. (B) To qualified personnel for the purpose of conducting scientific research, management audits, financial audits, or program evaluation, but such personnel may not identify, directly or indirectly, any individual patient or subject in any report of such research, audit, or evaluation, or otherwise disclose patient or subject identities in any manner. (C) (i) In the case of any record which is maintained in connection with the performance of any program or activity relating to infection with the human immunodeficiency virus, to a Federal, State, or local public-health authority charged under Federal or State law with the protection of the public health, and to which Federal or State law requires disclosure of such record, if a qualified representative of such authority has made a written request that such record be provided as required pursuant to such law for a purpose authorized by such law. (ii) A person to whom a record is disclosed under this paragraph may not redisclose or use such record for a purpose other than that for which the disclosure was made. (D) If authorized by an appropriate order of a court of competent jurisdiction granted after application showing good cause therefor. In assessing good cause the court shall weigh the public interest and the need for disclosure against the injury to the patient or subject, to the physician-patient relationship, and to the treatment services. Upon the granting of such order, the court, in determining the extent to which any disclosure of all or any part of any record is necessary, shall impose appropriate safeguards against unauthorized disclosure. (E) To an entity described in paragraph (1)(B) of section 5701(k) of this title, but only to the extent authorized by such section. (F) (i) To a representative of a patient who lacks decision-making capacity, when a practitioner deems the content of the given record necessary for that representative to make an informed decision regarding the patient's treatment. (ii) In this subparagraph, the term \"representative\" means an individual, organization, or other body authorized under section 7331 of this title and its implementing regulations to give informed consent on behalf of a patient who lacks decision-making capacity. (G) To a State controlled substance monitoring program, including a program approved by the Secretary of Health and Human Services under section 399O of the Public Health Service Act (42 U.S.C. 280g-3), to the extent necessary to prevent misuse and diversion of prescription medicines. (H) (i) To a non-Department entity (including private entities and other Federal agencies) for purposes of providing health care, including hospital care, medical services, and extended care services, to Veterans or performing other health care-related activities or functions. (ii) An entity to which a record is disclosed under this subparagraph may not disclose or use such record for a purpose other than that for which the disclosure was made or as permitted by law. (I) To a third party in order to recover or collect reasonable charges for care furnished to, or paid on behalf of, a Veteran in connection with a non-service connected disability as permitted by section 1729 of this title or for a condition for which recovery is authorized or with respect to which the United States is deemed to be a third party beneficiary under the Act entitled 'An Act to provide for the recovery from tortiously liable third persons of the cost of hospital and medical care and treatment furnished by the United States' (Public Law 87-693; 42 U.S.C. 2651 et seq.; commonly known as the 'Federal Medical Care Recovery Act').\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by 38 U.S. Code Section 7332 - Confidentiality of certain medical records https://www.gpo.gov/fdsys/granule/USCODE-2011-title38/USCODE-2011-title38-partV-chap73-subchapIII-sec7332/content-detail.html use \"Title38Section7332\" as the security label policy code.\r\n\r\nSince information governed by a Title 38 Section 7332 has a level of confidentiality protection that is more stringent than the normal level of protection under HIPAA 45 CFR Section 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, assign the HL7 Confidentiality code \"R\" (restricted)."
                },
                {
                    "code": "a) HIPAAConsent",
                    "display": "HIPAA Consent",
                    "definition": "Code retired in December 2019 and replaced by code HIPAAConsent. Originally entered with copy/paste error in code value.\r\n\r\nA code representing U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Section 164.522), which stipulates the process by which a covered entity seeks agreement from an individual regarding how it will use and disclose the individual's protected health information for treatment, payment, and health care operations is termed a \"consent.\" The Privacy Rule permits, but does not require, a covered entity to voluntarily obtain patient consent for uses and disclosures of protected health information for treatment, payment, and health care operations. Covered entities that do so have complete discretion to design a process that best suits their needs. From https://www.hhs.gov/hipaa/for-professionals/faq/264/what-is-the-difference-between-consent-and-authorization/index.html. The provisions relating to consent are largely contained in Section 164.522 Rights to request privacy protection for protected health information https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-522.pdf.\r\n\r\n*Usage Note:* Used to indicate the legal authority for assigning security labels to governed information. In this case, where collection, access, use, or disclosure of healthcare information is governed by 45 CFR Section 164.522 use \"HIPAAConsent\" as the security label policy code.\r\n\r\nSince information governed by a 45 CFR Section 164.522 has a level of confidentiality protection that is more stringent than the normal level of protection under HIPAA 45 CFR Section 164.506 Uses and disclosures to carry out treatment, payment, or health care operations https://www.gpo.gov/fdsys/pkg/CFR-2017-title45-vol1/pdf/CFR-2017-title45-vol1-sec164-506.pdf, assign the HL7 Confidentiality code \"R\" (restricted)."
                },
                {
                    "code": "USResearchInformedAssent",
                    "display": "Informed Assent for Research",
                    "definition": "An informed assertion by a minor who is a candidate research subject, of the individual's willingness to participate in research. Assent means a child's affirmative agreement to participate in a clinical investigation. Mere failure to object should not, absent affirmative agreement, be construed as assent. The minor's assent must be accompanied by parental or guardian consent that the minor participate in a specified research. The assent is not legally binding, however, the accompanying consent is legally binding. Background: In the US, informed assent is governed under 21 CFR Part 50, Subpart D - Additional Safeguards for Children in Clinical Investigations. Available at https://www.law.cornell.edu/cfr/text/21/part-50/subpart-D"
                },
                {
                    "code": "USResearchInformedConsent",
                    "display": "Informed Consent for Research",
                    "definition": "An informed assertion by an adult, or the parent/guardian of a minor who is a candidate research subject, of the individual's willingness to participate in a specified research study. The consent is legally binding. Background: In the US, informed assent is governed under 49 CFR § 11.116 - General Requirements for Informed Consent. Available at https://www.law.cornell.edu/cfr/text/49/11.116"
                },
                {
                    "code": "USBroadResearchConsent",
                    "display": "Broad Consent for Research",
                    "definition": "An informed assertion by an adult, or the parent/guardian of a minor who is a candidate research subject, of the individual's willingness to participate in unspecified research studies, including storage, maintenance, and secondary research use of identifiable biospecimens and data.  If broad consent is obtained, any subsequent storage, maintenance, and secondary research uses of the individual’s identifiable biospecimens and data consistent with the broad consent would not require additional consent, so long as additional conditions are met, including limited review by an IRB. The consent is legally binding. Background: In the US, informed assent is governed under 49 CFR § 11.116 - General Requirements for Informed Consent. Available at https://www.law.cornell.edu/cfr/text/49/11.116"
                },
                {
                    "code": "COMPLY",
                    "display": "Compliance Alert",
                    "definition": "There may be an issue with the patient complying with the intentions of the proposed therapy"
                },
                {
                    "code": "DACT",
                    "display": "drug action detected issue",
                    "definition": "**Description:**Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy."
                },
                {
                    "code": "DOSE",
                    "display": "Dosage problem",
                    "definition": "Proposed dosage instructions for therapy differ from standard practice."
                },
                {
                    "code": "DUPTHPY",
                    "display": "Duplicate Therapy Alert",
                    "definition": "The proposed therapy appears to duplicate an existing therapy"
                },
                {
                    "code": "TIME",
                    "display": "timing detected issue",
                    "definition": "**Description:**Proposed therapy may be inappropriate or ineffective based on the proposed start or end time."
                },
                {
                    "code": "_DrugActionDetectedIssueCode",
                    "display": "DrugActionDetectedIssueCode",
                    "definition": "Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy"
                },
                {
                    "code": "_TimingDetectedIssueCode",
                    "display": "TimingDetectedIssueCode",
                    "definition": "Proposed therapy may be inappropriate or ineffective based on the proposed start or end time."
                },
                {
                    "code": "_ActPatientAnnotationType",
                    "display": "ActPatientAnnotationType",
                    "definition": "**Description:**Provides a categorization for annotations recorded directly against the patient ."
                },
                {
                    "code": "OBSA",
                    "display": "Observation Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated due to conditions or characteristics of the patient"
                },
                {
                    "code": "PREVINEF",
                    "display": "previously ineffective",
                    "definition": "**Definition:**The same or similar treatment has previously been attempted with the patient without achieving a positive effect."
                },
                {
                    "code": "EMAUTH",
                    "display": "emergency authorization override",
                    "definition": "Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used."
                },
                {
                    "code": "AIRTRNS",
                    "display": "airborne transmission",
                    "definition": "Communication of an agent from a living subject or environmental source to a living subject through indirect contact via oral or nasal inhalation."
                },
                {
                    "code": "ANANTRNS",
                    "display": "animal to animal transmission",
                    "definition": "Communication of an agent from one animal to another proximate animal."
                },
                {
                    "code": "ANHUMTRNS",
                    "display": "animal to human transmission",
                    "definition": "Communication of an agent from an animal to a proximate person."
                },
                {
                    "code": "BDYFLDTRNS",
                    "display": "body fluid contact transmission",
                    "definition": "Communication of an agent from one living subject to another living subject through direct contact with any body fluid."
                },
                {
                    "code": "BLDTRNS",
                    "display": "blood borne transmission",
                    "definition": "Communication of an agent to a living subject through direct contact with blood or blood products whether the contact with blood is part of a therapeutic procedure or not."
                },
                {
                    "code": "DERMTRNS",
                    "display": "transdermal transmission",
                    "definition": "Communication of an agent from a living subject or environmental source to a living subject via agent migration through intact skin."
                },
                {
                    "code": "ENVTRNS",
                    "display": "environmental exposure transmission",
                    "definition": "Communication of an agent from an environmental surface or source to a living subject by direct contact."
                },
                {
                    "code": "FECTRNS",
                    "display": "fecal-oral transmission",
                    "definition": "Communication of an agent from a living subject or environmental source to a living subject through oral contact with material contaminated by person or animal fecal material."
                },
                {
                    "code": "FOMTRNS",
                    "display": "fomite transmission",
                    "definition": "Communication of an agent from an non-living material to a living subject through direct contact."
                },
                {
                    "code": "FOODTRNS",
                    "display": "food-borne transmission",
                    "definition": "Communication of an agent from a food source to a living subject via oral consumption."
                },
                {
                    "code": "HUMHUMTRNS",
                    "display": "human to human transmission",
                    "definition": "Communication of an agent from a person to a proximate person."
                },
                {
                    "code": "INDTRNS",
                    "display": "indeterminate disease transmission mode",
                    "definition": "Communication of an agent to a living subject via an undetermined route."
                },
                {
                    "code": "LACTTRNS",
                    "display": "lactation transmission",
                    "definition": "Communication of an agent from one living subject to another living subject through direct contact with mammalian milk or colostrum."
                },
                {
                    "code": "NOSTRNS",
                    "display": "nosocomial transmission",
                    "definition": "Communication of an agent from any entity to a living subject while the living subject is in the patient role in a healthcare facility."
                },
                {
                    "code": "PARTRNS",
                    "display": "parenteral transmission",
                    "definition": "Communication of an agent from a living subject or environmental source to a living subject where the acquisition of the agent is not via the alimentary canal."
                },
                {
                    "code": "PLACTRNS",
                    "display": "transplacental transmission",
                    "definition": "Communication of an agent from a living subject to the progeny of that living subject via agent migration across the maternal-fetal placental membranes while in utero."
                },
                {
                    "code": "SEXTRNS",
                    "display": "sexual transmission",
                    "definition": "Communication of an agent from one living subject to another living subject through direct contact with genital or oral tissues as part of a sexual act."
                },
                {
                    "code": "TRNSFTRNS",
                    "display": "transfusion transmission",
                    "definition": "Communication of an agent from one living subject to another living subject through direct contact with blood or blood products where the contact with blood is part of a therapeutic procedure."
                },
                {
                    "code": "VECTRNS",
                    "display": "vector-borne transmission",
                    "definition": "Communication of an agent from a living subject acting as a required intermediary in the agent transmission process to a recipient living subject via direct contact."
                },
                {
                    "code": "WATTRNS",
                    "display": "water-borne transmission",
                    "definition": "Communication of an agent from a contaminated water source to a living subject whether the water is ingested as a food or not. The route of entry of the water may be through any bodily orifice."
                },
                {
                    "code": "REPRESENTATIVE_BEAT",
                    "display": "ECG representative beat waveforms",
                    "definition": "This Observation Series type contains waveforms of a \"representative beat\" (a.k.a. \"median beat\" or \"average beat\"). The waveform samples are measured in relative time, relative to the beginning of the beat as defined by the Observation Series effective time. The waveforms are not directly acquired from the subject, but rather algorithmically derived from the \"rhythm\" waveforms."
                },
                {
                    "code": "RHYTHM",
                    "display": "ECG rhythm waveforms",
                    "definition": "This Observation type contains ECG \"rhythm\" waveforms. The waveform samples are measured in absolute time (a.k.a. \"subject time\" or \"effective time\"). These waveforms are usually \"raw\" with some minimal amount of noise reduction and baseline filtering applied."
                },
                {
                    "code": "DEMO",
                    "display": "all demographic information sensitivity",
                    "definition": "Policy for handling all demographic information about an information subject, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to all demographic about an information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "DOB",
                    "display": "date of birth information sensitivity",
                    "definition": "Policy for handling information related to an information subject's date of birth, which will be afforded heightened confidentiality.Policies may govern sensitivity of information related to an information subject's date of birth, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "GENDER",
                    "display": "gender and sexual orientation information sensitivity",
                    "definition": "Policy for handling information related to an information subject's gender and sexual orientation, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's gender and sexual orientation, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "LIVARG",
                    "display": "living arrangement information sensitivity",
                    "definition": "Policy for handling information related to an information subject's living arrangement, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's living arrangement, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "MARST",
                    "display": "marital status information sensitivity",
                    "definition": "Policy for handling information related to an information subject's marital status, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's marital status, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "PATLOC",
                    "display": "patient location",
                    "definition": "Policy for handling information related to an individual's location, which is deemed sensitive when the disclosure could impact the privacy, well-being, or safety of that subject, and requires additional protection.\r\n\r\n*Usage Note:* If there is a jurisdictional, organizational, or individual mandate, then use the applicable ActPrivacyLaw or ActConsentDirective code from the ActCode system to and specify the law in addition to this more generic code."
                },
                {
                    "code": "RACE",
                    "display": "race information sensitivity",
                    "definition": "Policy for handling information related to an information subject's race, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's race, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "REL",
                    "display": "religion information sensitivity",
                    "definition": "Policy for handling information related to an information subject's religious affiliation, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's religion, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Notes:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "FDACOATING",
                    "display": "coating",
                    "definition": "FDA label coating"
                },
                {
                    "code": "FDACOLOR",
                    "display": "color",
                    "definition": "FDA label color"
                },
                {
                    "code": "FDAIMPRINTCD",
                    "display": "imprint code",
                    "definition": "FDA label imprint code"
                },
                {
                    "code": "FDALOGO",
                    "display": "logo",
                    "definition": "FDA label logo"
                },
                {
                    "code": "FDASCORING",
                    "display": "scoring",
                    "definition": "FDA label scoring"
                },
                {
                    "code": "FDASHAPE",
                    "display": "shape",
                    "definition": "FDA label shape"
                },
                {
                    "code": "FDASIZE",
                    "display": "size",
                    "definition": "FDA label size"
                },
                {
                    "code": "GENE",
                    "display": "gene",
                    "definition": "**Description:** A DNA segment that contributes to phenotype/function. In the absence of demonstrated function a gene may be characterized by sequence, transcription or homology"
                },
                {
                    "code": "I",
                    "display": "Isolation",
                    "definition": "Accommodations used in the care of diseases that are transmitted through casual contact or respiratory transmission."
                },
                {
                    "code": "P",
                    "display": "Private",
                    "definition": "Accommodations in which there is only 1 bed."
                },
                {
                    "code": "S",
                    "display": "Suite",
                    "definition": "Uniquely designed and elegantly decorated accommodations with many amenities available for an additional charge."
                },
                {
                    "code": "SP",
                    "display": "Semi-private",
                    "definition": "Accommodations in which there are 2 beds."
                },
                {
                    "code": "W",
                    "display": "Ward",
                    "definition": "Accommodations in which there are 3 or more beds."
                },
                {
                    "code": "_ActDetectedIssueCode",
                    "display": "ActDetectedIssueCode",
                    "definition": "Identifies types of detected issues for Act class \"ALRT\""
                },
                {
                    "code": "_HL7TriggerEventCode",
                    "display": "HL7TriggerEventCode",
                    "definition": "The trigger event referenced by the Control Act instance. Values are drawn from the available trigger events used in the release of HL7 identified by the versionCode."
                },
                {
                    "code": "_SubstanceAdministrationActCode",
                    "display": "SubstanceAdministrationActCode",
                    "definition": "The specific chemical or radiological substance administered or to be administered into the body for therapeutic effect."
                },
                {
                    "code": "OBSANTC",
                    "display": "antigen count",
                    "definition": "**Description:** Indicates the valid antigen count."
                },
                {
                    "code": "OBSANTV",
                    "display": "antigen validity",
                    "definition": "**Description:** Indicates whether an antigen is valid or invalid."
                },
                {
                    "code": "PAT_ADV_EVNT",
                    "display": "patient adverse event",
                    "definition": "Indicates that the ICSR is describing problems that a patient experienced after receiving a vaccine product."
                },
                {
                    "code": "VAC_PROBLEM",
                    "display": "vaccine product problem",
                    "definition": "Indicates that the ICSR is describing a problem with the actual vaccine product such as physical defects (cloudy, particulate matter) or inability to confer immunity."
                },
                {
                    "code": "_ActInformationSensitivityPolicy",
                    "display": "ActInformationSensitivityPolicy",
                    "definition": "Types of sensitivity policies that apply to Acts. Act.confidentialityCode is defined in the RIM as \"constraints around appropriate disclosure of information about this Act, regardless of mood.\"\r\n\r\n*Usage Note:* ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises. Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values."
                },
                {
                    "code": "_EntitySensitivityPolicyType",
                    "display": "EntityInformationSensitivityPolicy",
                    "definition": "Types of sensitivity policies that may apply to a sensitive attribute on an Entity.\r\n\r\n*Usage Note:* EntitySensitivity codes are used to convey a policy that is applicable to sensitive information conveyed by an entity attribute. May be used to bind a Role.confidentialityCode associated with an Entity per organizational policy. Role.confidentialityCode is defined in the RIM as \"an indication of the appropriate disclosure of information about this Role with respect to the playing Entity.\""
                },
                {
                    "code": "_RoleInformationSensitivityPolicy",
                    "display": "RoleInformationSensitivityPolicy",
                    "definition": "Types of sensitivity policies that apply to Roles.\r\n\r\n*Usage Notes:* RoleSensitivity codes are used to bind information to a Role.confidentialityCode per organizational policy. Role.confidentialityCode is defined in the RIM as \"an indication of the appropriate disclosure of information about this Role with respect to the playing Entity.\""
                },
                {
                    "code": "ADOL",
                    "display": "adolescent information sensitivity",
                    "definition": "Policy for handling information related to an adolescent, which will be afforded heightened confidentiality per applicable organizational or jurisdictional policy. An enterprise may have a policy that requires that adolescent patient information be provided heightened confidentiality. Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.\r\n\r\n*Usage Note:* For use within an enterprise in which an adolescent is the information subject. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "CEL",
                    "display": "celebrity information sensitivity",
                    "definition": "Policy for handling information related to a celebrity (people of public interest (VIP), which will be afforded heightened confidentiality. Celebrities are people of public interest (VIP) about whose information an enterprise may have a policy that requires heightened confidentiality. Information deemed sensitive may include health information and patient role information including patient status, demographics, next of kin, and location.\r\n\r\n*Usage Note:*  For use within an enterprise in which the information subject is deemed a celebrity or very important person. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "VIP",
                    "display": "celebrity information sensitivity",
                    "definition": "Policy for handling information related to a celebrity (people of public interest (VIP), which will be afforded heightened confidentiality. Celebrities are people of public interest (VIP) about whose information an enterprise may have a policy that requires heightened confidentiality. Information deemed sensitive may include health information and patient role information including patient status, demographics, next of kin, and location.\r\n\r\n*Usage Note:*  For use within an enterprise in which the information subject is deemed a celebrity or very important person. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "DIA",
                    "display": "diagnosis information sensitivity",
                    "definition": "Policy for handling information related to a diagnosis, health condition or health problem, which will be afforded heightened confidentiality. Diagnostic, health condition or health problem related information may be deemed sensitive by organizational policy, and require heightened confidentiality.\r\n\r\n*Usage Note:* For use within an enterprise that provides heightened confidentiality to diagnostic, health condition or health problem related information deemed sensitive. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "DRGIS",
                    "display": "drug information sensitivity",
                    "definition": "Policy for handling information related to a drug, which will be afforded heightened confidentiality. Drug information may be deemed sensitive by organizational policy, and require heightened confidentiality.\r\n\r\n*Usage Note:* For use within an enterprise that provides heightened confidentiality to drug information deemed sensitive. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "EMP",
                    "display": "employee information sensitivity",
                    "definition": "Policy for handling information related to an employee, which will be afforded heightened confidentiality. When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality. Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.\r\n\r\n*Usage Note:* Policy for handling information related to an employee, which will be afforded heightened confidentiality. Description: When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality. Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location."
                },
                {
                    "code": "PDS",
                    "display": "patient default information sensitivity",
                    "definition": "Policy for specially protecting information reported by or about a patient, which is deemed sensitive within the enterprise (i.e., by default regardless of whether the patient requested that the information be deemed sensitive for another reason.) For example information reported by the patient about another person, e.g., a family member, may be deemed sensitive by default. Organizational policy may allow the sensitivity tag to be cleared on patient's request.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.\r\n\r\nFor example, VA deems employee information sensitive by default. Information about a patient who is being stalked or a victim of abuse or violence may be deemed sensitive by default per a provider organization's policies."
                },
                {
                    "code": "PHY",
                    "display": "physician requested information sensitivity",
                    "definition": "Policy for handling information about a patient, which a physician or other licensed healthcare provider deems sensitive. Once tagged by the provider, this may trigger alerts for follow up actions according to organizational policy or jurisdictional law.\r\n\r\n*Usage Note:* For use within an enterprise that provides heightened confidentiality to certain types of information designated by a physician as sensitive. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.\r\n\r\nUse cases in which this code could be used are, e.g., in systems that lack the ability to automatically detect sensitive information and must rely on manual tagging; a system that lacks an applicable sensitivity tag, or for ad hoc situations where criticality of the situation requires that the tagging be done immediately by the provider before coding or transcription of consult notes can be completed, e.g., upon detection of a patient with suicidal tendencies or potential for violence."
                },
                {
                    "code": "PRS",
                    "display": "patient requested information sensitivity",
                    "definition": "Policy for specially protecting information reported by or about a patient, which the patient deems sensitive, and the patient requests that collection, access, use, or disclosure of that information be restricted. For example, a minor patient may request that information about reproductive health not be disclosed to the patient's family or to particular providers and payers.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "FOOD",
                    "display": "Food Interaction Alert",
                    "definition": "Proposed therapy may interact with certain foods"
                },
                {
                    "code": "TPROD",
                    "display": "Therapeutic Product Alert",
                    "definition": "Proposed therapy may interact with an existing or recent therapeutic product"
                },
                {
                    "code": "ADNFPPELAT",
                    "display": "adjud. nullified prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically."
                },
                {
                    "code": "ADCNPPELAT",
                    "display": "adjud. nullified prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically."
                },
                {
                    "code": "ADNFPPELCT",
                    "display": "adjud. nullified prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically."
                },
                {
                    "code": "ADCNPPELCT",
                    "display": "adjud. nullified prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically."
                },
                {
                    "code": "ADNFPPMNAT",
                    "display": "adjud. nullified prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADCNPPMNAT",
                    "display": "adjud. nullified prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADNFPPMNCT",
                    "display": "adjud. nullified prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADCNPPMNCT",
                    "display": "adjud. nullified prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADNFSPELAT",
                    "display": "adjud. nullified same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "ADCNSPELAT",
                    "display": "adjud. nullified same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "ADNFSPELCT",
                    "display": "adjud. nullified same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "ADCNSPELCT",
                    "display": "adjud. nullified same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "ADNFSPMNAT",
                    "display": "adjud. nullified same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADCNSPMNAT",
                    "display": "adjud. nullified same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADNFSPMNCT",
                    "display": "adjud. nullified same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADCNSPMNCT",
                    "display": "adjud. nullified same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually."
                },
                {
                    "code": "ADNPPPELAT",
                    "display": "adjud. non-payee payable prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "ADNPPPELCT",
                    "display": "adjud. non-payee payable prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "ADNPPPMNAT",
                    "display": "adjud. non-payee payable prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "ADNPPPMNCT",
                    "display": "adjud. non-payee payable prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "ADNPSPELAT",
                    "display": "adjud. non-payee payable same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "ADNPSPELCT",
                    "display": "adjud. non-payee payable same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "ADNPSPMNAT",
                    "display": "adjud. non-payee payable same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "ADNPSPMNCT",
                    "display": "adjud. non-payee payable same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "ADPPPPELAT",
                    "display": "adjud. payee payable prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "ADPPPPELCT",
                    "display": "adjud. payee payable prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "ADPPPPMNAT",
                    "display": "adjud. payee payable prior-period manual amout",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "ADPPPPMNCT",
                    "display": "adjud. payee payable prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "ADPPSPELAT",
                    "display": "adjud. payee payable same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "ADPPSPELCT",
                    "display": "adjud. payee payable same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "ADPPSPMNAT",
                    "display": "adjud. payee payable same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "ADPPSPMNCT",
                    "display": "adjud. payee payable same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "ADRFPPELAT",
                    "display": "adjud. refused prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted electronically."
                },
                {
                    "code": "ADRFPPELCT",
                    "display": "adjud. refused prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted electronically."
                },
                {
                    "code": "ADRFPPMNAT",
                    "display": "adjud. refused prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted manually."
                },
                {
                    "code": "ADRFPPMNCT",
                    "display": "adjud. refused prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted manually."
                },
                {
                    "code": "ADRFSPELAT",
                    "display": "adjud. refused same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted electronically."
                },
                {
                    "code": "ADRFSPELCT",
                    "display": "adjud. refused same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted electronically."
                },
                {
                    "code": "ADRFSPMNAT",
                    "display": "adjud. refused same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted manually."
                },
                {
                    "code": "ADRFSPMNCT",
                    "display": "adjud. refused same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted manually."
                },
                {
                    "code": "PDNFPPELAT",
                    "display": "paid nullified prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "PDCNPPELAT",
                    "display": "paid nullified prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "PDNFPPELCT",
                    "display": "paid nullified prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "PDCNPPELCT",
                    "display": "paid nullified prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "PDNFPPMNAT",
                    "display": "paid nullified prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDCNPPMNAT",
                    "display": "paid nullified prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDNFPPMNCT",
                    "display": "paid nullified prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDCNPPMNCT",
                    "display": "paid nullified prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDNFSPELAT",
                    "display": "paid nullified same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "PDCNSPELAT",
                    "display": "paid nullified same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically."
                },
                {
                    "code": "PDNFSPELCT",
                    "display": "paid nullified same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently cancelled in the specified period and submitted electronically."
                },
                {
                    "code": "PDCNSPELCT",
                    "display": "paid nullified same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently cancelled in the specified period and submitted electronically."
                },
                {
                    "code": "PDNFSPMNAT",
                    "display": "paid nullified same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDCNSPMNAT",
                    "display": "paid nullified same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDNFSPMNCT",
                    "display": "paid nullified same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDCNSPMNCT",
                    "display": "paid nullified same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually."
                },
                {
                    "code": "PDNPPPELAT",
                    "display": "paid non-payee payable prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "PDNPPPELCT",
                    "display": "paid non-payee payable prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "PDNPPPMNAT",
                    "display": "paid non-payee payable prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "PDNPPPMNCT",
                    "display": "paid non-payee payable prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "PDNPSPELAT",
                    "display": "paid non-payee payable same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "PDNPSPELCT",
                    "display": "paid non-payee payable same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically."
                },
                {
                    "code": "PDNPSPMNAT",
                    "display": "paid non-payee payable same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "PDNPSPMNCT",
                    "display": "paid non-payee payable same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually."
                },
                {
                    "code": "PDPPPPELAT",
                    "display": "paid payee payable prior-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "PDPPPPELCT",
                    "display": "paid payee payable prior-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "PDPPPPMNAT",
                    "display": "paid payee payable prior-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "PDPPPPMNCT",
                    "display": "paid payee payable prior-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "PDPPSPELAT",
                    "display": "paid payee payable same-period electronic amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "PDPPSPELCT",
                    "display": "paid payee payable same-period electronic count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically."
                },
                {
                    "code": "PDPPSPMNAT",
                    "display": "paid payee payable same-period manual amount",
                    "definition": "Identifies the total net amount of all Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "PDPPSPMNCT",
                    "display": "paid payee payable same-period manual count",
                    "definition": "Identifies the total number of all Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually."
                },
                {
                    "code": "SBBLELAT",
                    "display": "submitted billed electronic amount",
                    "definition": "Identifies the total net amount billed for all submitted Invoice Groupings within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBBLAT",
                    "display": "submitted billed electronic amount",
                    "definition": "Identifies the total net amount billed for all submitted Invoice Groupings within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBBLELCT",
                    "display": "submitted billed electronic count",
                    "definition": "Identifies the total number of submitted Invoice Groupings within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBBLCT",
                    "display": "submitted billed electronic count",
                    "definition": "Identifies the total number of submitted Invoice Groupings within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBNFELAT",
                    "display": "submitted nullified electronic amount",
                    "definition": "Identifies the total net amount billed for all submitted Invoice Groupings that were nullified within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBCNAT",
                    "display": "submitted nullified electronic amount",
                    "definition": "Identifies the total net amount billed for all submitted Invoice Groupings that were nullified within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBNFELCT",
                    "display": "submitted cancelled electronic count",
                    "definition": "Identifies the total number of submitted Invoice Groupings that were nullified within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBCNCT",
                    "display": "submitted cancelled electronic count",
                    "definition": "Identifies the total number of submitted Invoice Groupings that were nullified within a time period and submitted electronically. Adjudicated invoice elements are included."
                },
                {
                    "code": "SBPDELAT",
                    "display": "submitted pending electronic amount",
                    "definition": "Identifies the total net amount billed for all submitted Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically. Adjudicated invoice elements are not included."
                },
                {
                    "code": "SBPDAT",
                    "display": "submitted pending electronic amount",
                    "definition": "Identifies the total net amount billed for all submitted Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically. Adjudicated invoice elements are not included."
                },
                {
                    "code": "SBPDELCT",
                    "display": "submitted pending electronic count",
                    "definition": "Identifies the total number of submitted Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically. Adjudicated invoice elements are not included."
                },
                {
                    "code": "SBPDCT",
                    "display": "submitted pending electronic count",
                    "definition": "Identifies the total number of submitted Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically. Adjudicated invoice elements are not included."
                },
                {
                    "code": "21611-9",
                    "display": "age patient qn est",
                    "definition": "**Definition:**Estimated age."
                },
                {
                    "code": "21612-7",
                    "display": "age patient qn reported",
                    "definition": "**Definition:**Reported age."
                },
                {
                    "code": "29553-5",
                    "display": "age patient qn calc",
                    "definition": "**Definition:**Calculated age."
                },
                {
                    "code": "30525-0",
                    "display": "age patient qn definition",
                    "definition": "**Definition:**General specification of age with no implied method of determination."
                },
                {
                    "code": "30972-4",
                    "display": "age at onset of adverse event",
                    "definition": "**Definition:**Age at onset of associated adverse event; no implied method of determination."
                },
                {
                    "code": "REP_HALF_LIFE",
                    "display": "representative half-life",
                    "definition": "**Description:**This observation represents an 'average' or 'expected' half-life typical of the product."
                },
                {
                    "code": "SPLCOATING",
                    "display": "coating",
                    "definition": "**Definition:** A characteristic of an oral solid dosage form of a medicinal product, indicating whether it has one or more coatings such as sugar coating, film coating, or enteric coating. Only coatings to the external surface or the dosage form should be considered (for example, coatings to individual pellets or granules inside a capsule or tablet are excluded from consideration).\r\n\r\n**Constraints:** The Observation.value must be a Boolean (BL) with true for the presence or false for the absence of one or more coatings on a solid dosage form."
                },
                {
                    "code": "SPLCOLOR",
                    "display": "color",
                    "definition": "**Definition:** A characteristic of an oral solid dosage form of a medicinal product, specifying the color or colors that most predominantly define the appearance of the dose form. SPLCOLOR is not an FDA specification for the actual color of solid dosage forms or the names of colors that can appear in labeling.\r\n\r\n**Constraints:** The Observation.value must be a single coded value or a list of multiple coded values, specifying one or more distinct colors that approximate of the color(s) of distinct areas of the solid dosage form, such as the different sides of a tablet or one-part capsule, or the different halves of a two-part capsule. Bands on banded capsules, regardless of the color, are not considered when assigning an SPLCOLOR. Imprints on the dosage form, regardless of their color are not considered when assigning an SPLCOLOR. If more than one color exists on a particular side or half, then the most predominant color on that side or half is recorded. If the gelatin capsule shell is colorless and transparent, use the predominant color of the contents that appears through the colorless and transparent capsule shell. Colors can include: Black;Gray;White;Red;Pink;Purple;Green;Yellow;Orange;Brown;Blue;Turquoise."
                },
                {
                    "code": "SPLIMAGE",
                    "display": "image",
                    "definition": "**Description:** A characteristic representing a single file reference that contains two or more views of the same dosage form of the product; in most cases this should represent front and back views of the dosage form, but occasionally additional views might be needed in order to capture all of the important physical characteristics of the dosage form. Any imprint and/or symbol should be clearly identifiable, and the viewer should not normally need to rotate the image in order to read it. Images that are submitted with SPL should be included in the same directory as the SPL file."
                },
                {
                    "code": "SPLIMPRINT",
                    "display": "imprint",
                    "definition": "**Definition:** A characteristic of an oral solid dosage form of a medicinal product, specifying the alphanumeric text that appears on the solid dosage form, including text that is embossed, debossed, engraved or printed with ink. The presence of other non-textual distinguishing marks or symbols is recorded by SPLSYMBOL.\r\n\r\n**Examples:** Included in SPLIMPRINT are alphanumeric text that appears on the bands of banded capsules and logos and other symbols that can be interpreted as letters or numbers.\r\n\r\n**Constraints:** The Observation.value must be of type Character String (ST). Excluded from SPLIMPRINT are internal and external cut-outs in the form of alphanumeric text and the letter 'R' with a circle around it (when referring to a registered trademark) and the letters 'TM' (when referring to a 'trade mark'). To record text, begin on either side or part of the dosage form. Start at the top left and progress as one would normally read a book. Enter a semicolon to show separation between words or line divisions."
                },
                {
                    "code": "SPLSCORING",
                    "display": "scoring",
                    "definition": "**Definition:** A characteristic of an oral solid dosage form of a medicinal product, specifying the number of equal pieces that the solid dosage form can be divided into using score line(s).\r\n\r\n**Example:** One score line creating two equal pieces is given a value of 2, two parallel score lines creating three equal pieces is given a value of 3.\r\n\r\n**Constraints:** Whether three parallel score lines create four equal pieces or two intersecting score lines create two equal pieces using one score line and four equal pieces using both score lines, both have the scoring value of 4. Solid dosage forms that are not scored are given a value of 1. Solid dosage forms that can only be divided into unequal pieces are given a null-value with nullFlavor other (OTH)."
                },
                {
                    "code": "SPLSHAPE",
                    "display": "shape",
                    "definition": "**Description:** A characteristic of an oral solid dosage form of a medicinal product, specifying the two dimensional representation of the solid dose form, in terms of the outside perimeter of a solid dosage form when the dosage form, resting on a flat surface, is viewed from directly above, including slight rounding of corners. SPLSHAPE does not include embossing, scoring, debossing, or internal cut-outs. SPLSHAPE is independent of the orientation of the imprint and logo. Shapes can include: Triangle (3 sided); Square; Round; Semicircle; Pentagon (5 sided); Diamond; Double circle; Bullet; Hexagon (6 sided); Rectangle; Gear; Capsule; Heptagon (7 sided); Trapezoid; Oval; Clover; Octagon (8 sided); Tear; Freeform."
                },
                {
                    "code": "SPLSIZE",
                    "display": "size",
                    "definition": "**Definition:** A characteristic of an oral solid dosage form of a medicinal product, specifying the longest single dimension of the solid dosage form as a physical quantity in the dimension of length (e.g., 3 mm). The length is should be specified in millimeters and should be rounded to the nearest whole millimeter.\r\n\r\n**Example:** SPLSIZE for a rectangular shaped tablet is the length and SPLSIZE for a round shaped tablet is the diameter."
                },
                {
                    "code": "SPLSYMBOL",
                    "display": "symbol",
                    "definition": "**Definition:** A characteristic of an oral solid dosage form of a medicinal product, to describe whether or not the medicinal product has a mark or symbol appearing on it for easy and definite recognition. Score lines, letters, numbers, and internal and external cut-outs are not considered marks or symbols. See SPLSCORING and SPLIMPRINT for these characteristics.\r\n\r\n**Constraints:** The Observation.value must be a Boolean (BL) with <u>true</u> indicating the presence and <u>false</u> for the absence of marks or symbols.\r\n\r\n**Example:**"
                },
                {
                    "code": "ADMDX",
                    "display": "admitting diagnosis",
                    "definition": "Admitting diagnosis are the diagnoses documented for administrative purposes as the basis for a hospital admission."
                },
                {
                    "code": "DISDX",
                    "display": "discharge diagnosis",
                    "definition": "Discharge diagnosis are the diagnoses documented for administrative purposes as the time of hospital discharge."
                },
                {
                    "code": "INTDX",
                    "display": "intermediate diagnosis",
                    "definition": "Intermediate diagnoses are those diagnoses documented for administrative purposes during the course of a hospital stay."
                },
                {
                    "code": "NOI",
                    "display": "nature of injury",
                    "definition": "The type of injury that the injury coding specifies."
                },
                {
                    "code": "_CaseTransmissionMode",
                    "display": "case transmission mode",
                    "definition": "Code for the mechanism by which disease was acquired by the living subject involved in the public health case. Includes sexually transmitted, airborne, bloodborne, vectorborne, foodborne, zoonotic, nosocomial, mechanical, dermal, congenital, environmental exposure, indeterminate."
                },
                {
                    "code": "AGGREGATE",
                    "display": "aggregate measure observation",
                    "definition": "Indicates that the observation is carrying out an aggregation calculation, contained in the value element."
                },
                {
                    "code": "CMPMSRMTH",
                    "display": "composite measure method",
                    "definition": "Indicates what method is used in a quality measure to combine the component measure results included in an composite measure."
                },
                {
                    "code": "CMPMSRSCRWGHT",
                    "display": "component measure scoring weight",
                    "definition": "An attribute of a quality measure describing the weight this component measure score is to carry in determining the overall composite measure final score. The value is real value greater than 0 and less than 1.0. Each component measure score will be multiplied by its CMPMSRSCRWGHT and then summed with the other component measures to determine the final overall composite measure score. The sum across all CMPMSRSCRWGHT values within a single composite measure SHALL be 1.0. The value assigned is scoped to the composite measure referencing this component measure only."
                },
                {
                    "code": "COPY",
                    "display": "copyright",
                    "definition": "Identifies the organization(s) who own the intellectual property represented by the eMeasure."
                },
                {
                    "code": "CRS",
                    "display": "clinical recommendation statement",
                    "definition": "Summary of relevant clinical guidelines or other clinical recommendations supporting this eMeasure."
                },
                {
                    "code": "DEF",
                    "display": "definition",
                    "definition": "Description of individual terms, provided as needed."
                },
                {
                    "code": "DISC",
                    "display": "disclaimer",
                    "definition": "Disclaimer information for the eMeasure."
                },
                {
                    "code": "FINALDT",
                    "display": "finalized date/time",
                    "definition": "The timestamp when the eMeasure was last packaged in the Measure Authoring Tool."
                },
                {
                    "code": "GUIDE",
                    "display": "guidance",
                    "definition": "Used to allow measure developers to provide additional guidance for implementers to understand greater specificity than could be provided in the logic for data criteria."
                },
                {
                    "code": "IDUR",
                    "display": "improvement notation",
                    "definition": "Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range)."
                },
                {
                    "code": "ITMCNT",
                    "display": "items counted",
                    "definition": "Describes the items counted by the measure (e.g., patients, encounters, procedures, etc.)"
                },
                {
                    "code": "KEY",
                    "display": "keyword",
                    "definition": "A significant word that aids in discoverability."
                },
                {
                    "code": "MEDT",
                    "display": "measurement end date",
                    "definition": "The end date of the measurement period."
                },
                {
                    "code": "MSD",
                    "display": "measurement start date",
                    "definition": "The start date of the measurement period."
                },
                {
                    "code": "MSRADJ",
                    "display": "risk adjustment",
                    "definition": "The method of adjusting for clinical severity and conditions present at the start of care that can influence patient outcomes for making valid comparisons of outcome measures across providers. Indicates whether an eMeasure is subject to the statistical process for reducing, removing, or clarifying the influences of confounding factors to allow more useful comparisons."
                },
                {
                    "code": "MSRAGG",
                    "display": "rate aggregation",
                    "definition": "Describes how to combine information calculated based on logic in each of several populations into one summarized result. It can also be used to describe how to risk adjust the data based on supplemental data elements described in the eMeasure. (e.g., pneumonia hospital measures antibiotic selection in the ICU versus non-ICU and then the roll-up of the two).\r\n\r\n*Open Issue:* The description does NOT align well with the definition used in the HQMF specfication; correct the MSGAGG definition, and the possible distinction of MSRAGG as a child of AGGREGATE."
                },
                {
                    "code": "MSRIMPROV",
                    "display": "health quality measure improvement notation",
                    "definition": "Information on whether an increase or decrease in score is the preferred result. This should reflect information on which way is better, an increase or decrease in score."
                },
                {
                    "code": "MSRJUR",
                    "display": "jurisdiction",
                    "definition": "The list of jurisdiction(s) for which the measure applies."
                },
                {
                    "code": "MSRRPTR",
                    "display": "reporter type",
                    "definition": "Type of person or organization that is expected to report the issue."
                },
                {
                    "code": "MSRRPTTIME",
                    "display": "timeframe for reporting",
                    "definition": "The maximum time that may elapse following completion of the measure until the measure report must be sent to the receiver."
                },
                {
                    "code": "MSRSCORE",
                    "display": "measure scoring",
                    "definition": "Indicates how the calculation is performed for the eMeasure (e.g., proportion, continuous variable, ratio)"
                },
                {
                    "code": "MSRSET",
                    "display": "health quality measure care setting",
                    "definition": "Location(s) in which care being measured is rendered\r\n\r\nUsage Note: MSRSET is used rather than RoleCode because the setting applies to what is being measured, as opposed to participating directly in the health quality measure documantion itself)."
                },
                {
                    "code": "MSRTP",
                    "display": "measurement period",
                    "definition": "The time period for which the eMeasure applies."
                },
                {
                    "code": "MSRTYPE",
                    "display": "measure type",
                    "definition": "Indicates whether the eMeasure is used to examine a process or an outcome over time (e.g., Structure, Process, Outcome)."
                },
                {
                    "code": "RAT",
                    "display": "rationale",
                    "definition": "Succinct statement of the need for the measure. Usually includes statements pertaining to Importance criterion: impact, gap in care and evidence."
                },
                {
                    "code": "REF",
                    "display": "reference",
                    "definition": "Identifies bibliographic citations or references to clinical practice guidelines, sources of evidence, or other relevant materials supporting the intent and rationale of the eMeasure."
                },
                {
                    "code": "SDE",
                    "display": "supplemental data elements",
                    "definition": "Comparison of results across strata can be used to show where disparities exist or where there is a need to expose differences in results. For example, Centers for Medicare & Medicaid Services (CMS) in the U.S. defines four required Supplemental Data Elements (payer, ethnicity, race, and gender), which are variables used to aggregate data into various subgroups. Additional supplemental data elements required for risk adjustment or other purposes of data aggregation can be included in the Supplemental Data Element section."
                },
                {
                    "code": "STRAT",
                    "display": "stratification",
                    "definition": "Describes the strata for which the measure is to be evaluated. There are three examples of reasons for stratification based on existing work. These include: (1) evaluate the measure based on different age groupings within the population described in the measure (e.g., evaluate the whole \\[age 14-25\\] and each sub-stratum \\[14-19\\] and \\[20-25\\]); (2) evaluate the eMeasure based on either a specific condition, a specific discharge location, or both; (3) evaluate the eMeasure based on different locations within a facility (e.g., evaluate the overall rate for all intensive care units and also some strata include additional findings \\[specific birth weights for neonatal intensive care units\\])."
                },
                {
                    "code": "TRANF",
                    "display": "transmission format",
                    "definition": "Can be a URL or hyperlinks that link to the transmission formats that are specified for a particular reporting program."
                },
                {
                    "code": "USE",
                    "display": "notice of use",
                    "definition": "Usage notes."
                },
                {
                    "code": "TIME_ABSOLUTE",
                    "display": "absolute time sequence",
                    "definition": "A sequence of values in the \"absolute\" time domain. This is the same time domain that all HL7 timestamps use. It is time as measured by the Gregorian calendar"
                },
                {
                    "code": "TIME_RELATIVE",
                    "display": "relative time sequence",
                    "definition": "A sequence of values in a \"relative\" time domain. The time is measured relative to the earliest effective time in the Observation Series containing this sequence."
                },
                {
                    "code": "_ActSpecObsCode",
                    "display": "ActSpecObsCode",
                    "definition": "Identifies the type of observation that is made about a specimen that may affect its processing, analysis or further result interpretation"
                },
                {
                    "code": "_GeneticObservationType",
                    "display": "GeneticObservationType",
                    "definition": "**Description:** None provided"
                },
                {
                    "code": "_ImmunizationObservationType",
                    "display": "ImmunizationObservationType",
                    "definition": "**Description:** Observation codes which describe characteristics of the immunization material."
                },
                {
                    "code": "_IndividualCaseSafetyReportType",
                    "display": "Individual Case Safety Report Type",
                    "definition": "A code that is used to indicate the type of case safety report received from sender. The current code example reference is from the International Conference on Harmonisation (ICH) Expert Workgroup guideline on Clinical Safety Data Management: Data Elements for Transmission of Individual Case Safety Reports. The unknown/unavailable option allows the transmission of information from a secondary sender where the initial sender did not specify the type of report.\r\n\r\nExample concepts include: Spontaneous, Report from study, Other."
                },
                {
                    "code": "_LOINCObservationActContextAgeType",
                    "display": "LOINCObservationActContextAgeType",
                    "definition": "**Definition:**The set of LOINC codes for the act of determining the period of time that has elapsed since an entity was born or created."
                },
                {
                    "code": "_ObservationIssueTriggerCodedObservationType",
                    "display": "ObservationIssueTriggerCodedObservationType",
                    "definition": "Distinguishes the kinds of coded observations that could be the trigger for clinical issue detection. These are observations that are not measurable, but instead can be defined with codes. Coded observation types include: Allergy, Intolerance, Medical Condition, Pregnancy status, etc."
                },
                {
                    "code": "_ObservationQualityMeasureAttribute",
                    "display": "ObservationQualityMeasureAttribute",
                    "definition": "Codes used to define various metadata aspects of a health quality measure."
                },
                {
                    "code": "_PatientImmunizationRelatedObservationType",
                    "display": "PatientImmunizationRelatedObservationType",
                    "definition": "**Description:** Reporting codes that are related to an immunization event."
                },
                {
                    "code": "_PopulationInclusionObservationType",
                    "display": "PopulationInclusionObservationType",
                    "definition": "Observation types for specifying criteria used to assert that a subject is included in a particular population."
                },
                {
                    "code": "_PreferenceObservationType",
                    "display": "_PreferenceObservationType",
                    "definition": "Types of observations that can be made about Preferences."
                },
                {
                    "code": "ADVERSE_REACTION",
                    "display": "Adverse Reaction",
                    "definition": "Indicates that the observation is of an unexpected negative occurrence in the subject suspected to result from the subject's exposure to one or more agents. Observation values would be the symptom resulting from the reaction."
                },
                {
                    "code": "ASSERTION",
                    "display": "Assertion",
                    "definition": "**Description:**Refines classCode OBS to indicate an observation in which observation.value contains a finding or other nominalized statement, where the encoded information in Observation.value is not altered by Observation.code. For instance, observation.code=\"ASSERTION\" and observation.value=\"fracture of femur present\" is an assertion of a clinical finding of femur fracture."
                },
                {
                    "code": "CASESER",
                    "display": "case seriousness criteria",
                    "definition": "**Definition:**An observation that provides a characterization of the level of harm to an investigation subject as a result of a reaction or event."
                },
                {
                    "code": "CDIO",
                    "display": "case disease imported observation",
                    "definition": "An observation that states whether the disease was likely acquired outside the jurisdiction of observation, and if so, the nature of the inter-jurisdictional relationship.\r\n\r\n**OpenIssue:** This code could be moved to LOINC if it can be done before there are significant implemenations using it."
                },
                {
                    "code": "CRIT",
                    "display": "criticality",
                    "definition": "A clinical judgment as to the worst case result of a future exposure (including substance administration). When the worst case result is assessed to have a life-threatening or organ system threatening potential, it is considered to be of high criticality."
                },
                {
                    "code": "CTMO",
                    "display": "case transmission mode observation",
                    "definition": "An observation that states the mechanism by which disease was acquired by the living subject involved in the public health case.\r\n\r\n**OpenIssue:** This code could be moved to LOINC if it can be done before there are significant implemenations using it."
                },
                {
                    "code": "DX",
                    "display": "ObservationDiagnosisTypes",
                    "definition": "Includes all codes defining types of indications such as diagnosis, symptom and other indications such as contrast agents for lab tests."
                },
                {
                    "code": "_ObservationDiagnosisTypes",
                    "display": "ObservationDiagnosisTypes",
                    "definition": "Includes all codes defining types of indications such as diagnosis, symptom and other indications such as contrast agents for lab tests."
                },
                {
                    "code": "GISTIER",
                    "display": "GIS tier",
                    "definition": "**Description:** Accuracy determined as per the GIS tier code system."
                },
                {
                    "code": "HHOBS",
                    "display": "household situation observation",
                    "definition": "Indicates that the observation is of a person’s living situation in a household including the household composition and circumstances."
                },
                {
                    "code": "ISSUE",
                    "display": "detected issue",
                    "definition": "There is a clinical issue for the therapy that makes continuation of the therapy inappropriate.\r\n\r\n*Open Issue:* The definition of this code does not correctly represent the concept space of its specializations (children)"
                },
                {
                    "code": "KSUBJ",
                    "display": "knowledge subject",
                    "definition": "Categorization of types of observation that capture the main clinical knowledge subject which may be a medication, a laboratory test, a disease."
                },
                {
                    "code": "KSUBT",
                    "display": "knowledge subtopic",
                    "definition": "Categorization of types of observation that capture a knowledge subtopic which might be treatment, etiology, or prognosis."
                },
                {
                    "code": "OINT",
                    "display": "intolerance",
                    "definition": "Hypersensitivity resulting in an adverse reaction upon exposure to an agent."
                },
                {
                    "code": "SEV",
                    "display": "Severity Observation",
                    "definition": "A subjective evaluation of the seriousness or intensity associated with another observation."
                },
                {
                    "code": "_ActPrivilegeCategorizationType",
                    "display": "ActPrivilegeCategorizationType",
                    "definition": "This domain includes observations used to characterize a privilege, under which this additional information is classified.\r\n\r\n*Examples:*A privilege to prescribe drugs has a RESTRICTION that excludes prescribing narcotics; a surgical procedure privilege has a PRE-CONDITION that it requires prior Board approval."
                },
                {
                    "code": "_AdverseSubstanceAdministrationEventActionTakenType",
                    "display": "AdverseSubstanceAdministrationEventActionTakenType",
                    "definition": "**Definition:** Indicates the class of actions taken with regard to a substance administration related adverse event. This characterization offers a judgment of the practitioner's response to the patient's problem.\r\n\r\n**Examples:** Example values include dose withdrawn, dose reduced, dose not changed.\r\n\r\n**NOTE:** The concept domain is currently supported by a value set created by the International Conference on Harmonization"
                },
                {
                    "code": "_CommonClinicalObservationType",
                    "display": "CommonClinicalObservationType",
                    "definition": "Used in a patient care message to report and query simple clinical (non-lab) observations."
                },
                {
                    "code": "_FDALabelData",
                    "display": "FDALabelData",
                    "definition": "FDA label data"
                },
                {
                    "code": "_ObservationAllergyTestCode",
                    "display": "observation allergy test",
                    "definition": "**Description:**Dianostic procedures ordered or performed to evaluate whether a sensitivity to a substance is present. This test may be associated with specimen collection and/or substance administration challenge actiivities.\r\n\r\n**Example:**Skin tests and eosinophilia evaluations."
                },
                {
                    "code": "_ObservationAllergyTestType",
                    "display": "ObservationAllergyTestType",
                    "definition": "Indicates the type of allergy test performed or to be performed. E.g. the specific antibody or skin test performed"
                },
                {
                    "code": "_ObservationCausalityAssessmentType",
                    "display": "observation causality assessment",
                    "definition": "**Description:**A kind of observation that allows a Secondary Observation (source act) to assert (at various levels of probability) that the target act of the association (which may be of any type of act) is implicated in the etiology of another observation that is named as the subject of the Secondary Observation\r\n\r\n**Example:**Causality assertions where an accident is the cause of a symptom; predisposition assertions where the genetic state plus environmental factors are implicated in the development of a disease; reaction assertions where a substance exposure is associated with a finding of wheezing."
                },
                {
                    "code": "_ObservationDosageDefinitionPreconditionType",
                    "display": "observation dosage definition precondition type",
                    "definition": "**Definition:**\r\n\r\nThe set of observation type concepts that can be used to express pre-conditions to a particular dosage definition.\r\n\r\nRationale: Used to constrain the set of observations to those related to the applicability of a dosage, such as height, weight, age, pregnancy, liver function, kidney function, etc. For example, in drug master-file type records indicating when a specified dose is applicable."
                },
                {
                    "code": "_ObservationIndicationType",
                    "display": "ObservationIndicationType",
                    "definition": "Includes all codes defining types of indications such as diagnosis, symptom and other indications such as contrast agents for lab tests"
                },
                {
                    "code": "_ObservationIssueTriggerMeasuredObservationType",
                    "display": "ObservationIssueTriggerMeasuredObservationType",
                    "definition": "Distinguishes between the kinds of measurable observations that could be the trigger for clinical issue detection. Measurable observation types include: Lab Results, Height, Weight."
                },
                {
                    "code": "_ObservationQueryMatchType",
                    "display": "ObservationQueryMatchType",
                    "definition": "**Definition:** An observation related to a query response.\r\n\r\n**Example:**The degree of match or match weight returned by a matching algorithm in a response to a query."
                },
                {
                    "code": "_ObservationVisionPrescriptionType",
                    "display": "ObservationVisionPrescriptionType",
                    "definition": "**Definition:** Identifies the type of Vision Prescription Observation that is being described."
                },
                {
                    "code": "_PatientCharacteristicObservationType",
                    "display": "PatientCharacteristicObservationType",
                    "definition": "Indicates the type of characteristics a patient should have for a given therapy to be appropriate. E.g. Weight, Age, certain lab values, etc."
                },
                {
                    "code": "_SimpleMeasurableClinicalObservationType",
                    "display": "SimpleMeasurableClinicalObservationType",
                    "definition": "Types of measurement observations typically performed in a clinical (non-lab) setting. E.g. Height, Weight, Blood-pressure"
                },
                {
                    "code": "CLSSRM",
                    "display": "classroom",
                    "definition": "**Description:** The class room associated with the patient during the immunization event."
                },
                {
                    "code": "GRADE",
                    "display": "grade",
                    "definition": "**Description:** The school grade or level the patient was in when immunized."
                },
                {
                    "code": "SCHL",
                    "display": "school",
                    "definition": "**Description:** The school the patient attended when immunized."
                },
                {
                    "code": "SCHLDIV",
                    "display": "school division",
                    "definition": "**Description:** The school division or district associated with the patient during the immunization event."
                },
                {
                    "code": "TEACHER",
                    "display": "teacher",
                    "definition": "**Description:** The patient's teacher when immunized."
                },
                {
                    "code": "DENEX",
                    "display": "denominator exclusions",
                    "definition": "Criteria which specify subjects who should be removed from the eMeasure population and denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator."
                },
                {
                    "code": "DENEXCEP",
                    "display": "denominator exceptions",
                    "definition": "Criteria which specify the removal of a subject, procedure or unit of measurement from the denominator, only if the numerator criteria are not met. Denominator exceptions allow for adjustment of the calculated score for those providers with higher risk populations. Denominator exceptions are used only in proportion eMeasures. They are not appropriate for ratio or continuous variable eMeasures. Denominator exceptions allow for the exercise of clinical judgment and should be specifically defined where capturing the information in a structured manner fits the clinical workflow. Generic denominator exception reasons used in proportion eMeasures fall into three general categories:\r\n\r\n *  Medical reasons\r\n *  Patient (or subject) reasons\r\n *  System reasons"
                },
                {
                    "code": "DENOM",
                    "display": "denominator",
                    "definition": "Criteria for specifying the entities to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs). The denominator can be the same as the initial population, or it may be a subset of the initial population to further constrain it for the purpose of the eMeasure. Different measures within an eMeasure set may have different denominators. Continuous Variable eMeasures do not have a denominator, but instead define a measure population."
                },
                {
                    "code": "IPOP",
                    "display": "initial population",
                    "definition": "Criteria for specifying the entities to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs)."
                },
                {
                    "code": "MSROBS",
                    "display": "measure observation",
                    "definition": "Defines the observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population.\r\n\r\n**Examples:** \r\n\r\n *  the median time from arrival in the Emergency Room to departure\r\n *  the median time from decision to admit to a hospital to the actual admission for Emergency Room patients"
                },
                {
                    "code": "MSRPOPL",
                    "display": "measure population",
                    "definition": "Criteria for specifying the measure population as a narrative description (e.g., all patients seen in the Emergency Department during the measurement period). This is used only in continuous variable eMeasures."
                },
                {
                    "code": "MSRPOPLEX",
                    "display": "measure population exclusions",
                    "definition": "Criteria for specifying subjects who should be removed from the eMeasure's Initial Population and Measure Population. Measure Population Exclusions are used in Continuous Variable measures to help narrow the Measure Population before determining the value(s) of the continuous variable(s)."
                },
                {
                    "code": "NUMER",
                    "display": "numerator",
                    "definition": "Criteria for specifying the processes or outcomes expected for each patient, procedure, or other unit of measurement defined in the denominator for proportion measures, or related to (but not directly derived from) the denominator for ratio measures (e.g., a numerator listing the number of central line blood stream infections and a denominator indicating the days per thousand of central line usage in a specific time period)."
                },
                {
                    "code": "NUMEX",
                    "display": "numerator exclusions",
                    "definition": "Criteria for specifying instances that should not be included in the numerator data. (e.g., if the number of central line blood stream infections per 1000 catheter days were to exclude infections with a specific bacterium, that bacterium would be listed as a numerator exclusion). Numerator Exclusions are used only in ratio eMeasures."
                },
                {
                    "code": "PREFSTRENGTH",
                    "display": "preference strength",
                    "definition": "An observation about how important a preference is to the target of the preference."
                },
                {
                    "code": "CIRCLE",
                    "display": "circle",
                    "definition": "A circle defined by two (column,row) pairs. The first point is the center of the circle and the second point is a point on the perimeter of the circle."
                },
                {
                    "code": "ELLIPSE",
                    "display": "ellipse",
                    "definition": "An ellipse defined by four (column,row) pairs, the first two points specifying the endpoints of the major axis and the second two points specifying the endpoints of the minor axis."
                },
                {
                    "code": "POINT",
                    "display": "point",
                    "definition": "A single point denoted by a single (column,row) pair, or multiple points each denoted by a (column,row) pair."
                },
                {
                    "code": "POLY",
                    "display": "polyline",
                    "definition": "A series of connected line segments with ordered vertices denoted by (column,row) pairs; if the first and last vertices are the same, it is a closed polygon."
                },
                {
                    "code": "B",
                    "display": "business information sensitivity",
                    "definition": "Policy for handling trade secrets such as financial information or intellectual property, which will be afforded heightened confidentiality. Description: Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.\r\n\r\n*Usage Notes:* No patient related information may ever be of this confidentiality level. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "EMPL",
                    "display": "employer information sensitivity",
                    "definition": "Policy for handling information related to an employer which is deemed classified to protect an employee who is the information subject, and which will be afforded heightened confidentiality. Description: Policies may govern sensitivity of information related to an employer, such as law enforcement or national security, the identity of which could impact the privacy, well-being, or safety of an information subject who is an employee.\r\n\r\n*Usage Notes:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "LOCIS",
                    "display": "location information sensitivity",
                    "definition": "Policy for handling information related to the location of the information subject, which will be afforded heightened confidentiality. Description: Policies may govern sensitivity of information related to the location of the information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.\r\n\r\n*Usage Notes:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "SSP",
                    "display": "sensitive service provider information sensitivity",
                    "definition": "Policy for handling information related to a provider of sensitive services, which will be afforded heightened confidentiality. Description: Policies may govern sensitivity of information related to providers who deliver sensitive healthcare services in order to protect the privacy, well-being, and safety of the provider and of patients receiving sensitive services.\r\n\r\n*Usage Notes:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "ALLDONE",
                    "display": "already performed",
                    "definition": "**Definition:**The requested action has already been performed and so this request has no effect"
                },
                {
                    "code": "FULFIL",
                    "display": "fulfillment alert",
                    "definition": "**Definition:**The therapy being performed is in some way out of alignment with the requested therapy."
                },
                {
                    "code": "HELD",
                    "display": "held/suspended alert",
                    "definition": "**Definition:**There should be no actions taken in fulfillment of a request that has been held or suspended."
                },
                {
                    "code": "TOOLATE",
                    "display": "Refill Too Late Alert",
                    "definition": "The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions"
                },
                {
                    "code": "TOOSOON",
                    "display": "Refill Too Soon Alert",
                    "definition": "The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions"
                },
                {
                    "code": "ENDLATE",
                    "display": "End Too Late Alert",
                    "definition": "Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy"
                },
                {
                    "code": "STRTLATE",
                    "display": "Start Too Late Alert",
                    "definition": "Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition"
                },
                {
                    "code": "19",
                    "display": "Consulted Supplier",
                    "definition": "Consulted other supplier/pharmacy, therapy confirmed"
                },
                {
                    "code": "2",
                    "display": "Assessed Patient",
                    "definition": "Assessed patient, therapy is appropriate"
                },
                {
                    "code": "22",
                    "display": "appropriate indication or diagnosis",
                    "definition": "**Description:** The patient has the appropriate indication or diagnosis for the action to be taken."
                },
                {
                    "code": "23",
                    "display": "prior therapy documented",
                    "definition": "**Description:** It has been confirmed that the appropriate pre-requisite therapy has been tried."
                },
                {
                    "code": "3",
                    "display": "Patient Explanation",
                    "definition": "Patient gave adequate explanation"
                },
                {
                    "code": "4",
                    "display": "Consulted Other Source",
                    "definition": "Consulted other supply source, therapy still appropriate"
                },
                {
                    "code": "5",
                    "display": "Consulted Prescriber",
                    "definition": "Consulted prescriber, therapy confirmed"
                },
                {
                    "code": "7",
                    "display": "Interacting Therapy No Longer Active/Planned",
                    "definition": "Concurrent therapy triggering alert is no longer on-going or planned"
                },
                {
                    "code": "15",
                    "display": "Replacement",
                    "definition": "Patient's existing supply was lost/wasted"
                },
                {
                    "code": "16",
                    "display": "Vacation Supply",
                    "definition": "Supply date is due to patient vacation"
                },
                {
                    "code": "17",
                    "display": "Weekend Supply",
                    "definition": "Supply date is intended to carry patient over weekend"
                },
                {
                    "code": "18",
                    "display": "Leave of Absence",
                    "definition": "Supply is intended for use during a leave of absence from an institution."
                },
                {
                    "code": "20",
                    "display": "additional quantity on separate dispense",
                    "definition": "**Description:** Supply is different than expected as an additional quantity has been supplied in a separate dispense."
                },
                {
                    "code": "6",
                    "display": "Prescriber Declined Change",
                    "definition": "Consulted prescriber and recommended change, prescriber declined"
                },
                {
                    "code": "10",
                    "display": "Provided Patient Education",
                    "definition": "Provided education or training to the patient on appropriate therapy use"
                },
                {
                    "code": "11",
                    "display": "Added Concurrent Therapy",
                    "definition": "Instituted an additional therapy to mitigate potential negative effects"
                },
                {
                    "code": "12",
                    "display": "Temporarily Suspended Concurrent Therapy",
                    "definition": "Suspended existing therapy that triggered interaction for the duration of this therapy"
                },
                {
                    "code": "13",
                    "display": "Stopped Concurrent Therapy",
                    "definition": "Aborted existing therapy that triggered interaction."
                },
                {
                    "code": "9",
                    "display": "Instituted Ongoing Monitoring Program",
                    "definition": "Arranged to monitor patient for adverse effects"
                },
                {
                    "code": "ANF",
                    "display": "adjudicated with adjustments and no financial impact",
                    "definition": "The invoice element has been accepted for payment but one or more adjustment(s) have been made to one or more invoice element line items (component charges) without changing the amount.\r\n\r\nInvoice element can be reversed (nullified).\r\n\r\nRecommend that the invoice element is saved for DUR (Drug Utilization Reporting)."
                },
                {
                    "code": "TRSTACCRD",
                    "display": "trust accreditation",
                    "definition": "Type of security metadata about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework."
                },
                {
                    "code": "TRSTAGRE",
                    "display": "trust agreement",
                    "definition": "Type of security metadata about privacy and security requirements with which a security domain must comply. \\[ISO IEC 10181-1\\]"
                },
                {
                    "code": "TRSTASSUR",
                    "display": "trust assurance",
                    "definition": "Type of security metadata about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol."
                },
                {
                    "code": "TRSTCERT",
                    "display": "trust certificate",
                    "definition": "Type of security metadata about a set of security-relevant data issued by a security authority or trusted third party, together with security information which is used to provide the integrity and data origin authentication services for an IT resource (data, information object, service, or system capability). \\[Based on ISO IEC 10181-1\\]"
                },
                {
                    "code": "TRSTFWK",
                    "display": "trust framework",
                    "definition": "Type of security metadata about a complete set of contracts, regulations, or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. \\[Kantara Initiative\\]"
                },
                {
                    "code": "TRSTMEC",
                    "display": "trust mechanism",
                    "definition": "Type of security metadata about a security architecture system component that supports enforcement of security policies."
                },
                {
                    "code": "ADALRT",
                    "display": "adult alert",
                    "definition": "Proposed therapy is outside of the standard practice for an adult patient."
                },
                {
                    "code": "DOSEHINDA",
                    "display": "High Dose for Age Alert",
                    "definition": "Proposed dosage exceeds standard practice for the patient's age"
                },
                {
                    "code": "DOSELINDA",
                    "display": "Low Dose for Age Alert",
                    "definition": "Proposed dosage is below suggested therapeutic levels for the patient's age"
                },
                {
                    "code": "GEALRT",
                    "display": "geriatric alert",
                    "definition": "Proposed therapy is outside of standard practice for a geriatric patient."
                },
                {
                    "code": "PEALRT",
                    "display": "pediatric alert",
                    "definition": "Proposed therapy is outside of the standard practice for a pediatric patient."
                },
                {
                    "code": "DALG",
                    "display": "Drug Allergy",
                    "definition": "An allergy to a pharmaceutical product."
                },
                {
                    "code": "EALG",
                    "display": "Environmental Allergy",
                    "definition": "An allergy to a substance other than a drug or a food. E.g. Latex, pollen, etc."
                },
                {
                    "code": "FALG",
                    "display": "Food Allergy",
                    "definition": "An allergy to a substance generally consumed for nutritional purposes."
                },
                {
                    "code": "ACCESSCONSCHEME",
                    "display": "access control scheme",
                    "definition": "An access control policy specific to the type of access control scheme, which is used to enforce one or more authorization policies.\r\n\r\n*Usage Note:* Access control schemes are the type of access control policy, which is comprised of access control policy rules concerning the provision of the access control service.\r\n\r\nThere are two categories of access control policies, rule-based and identity-based, which are identified in CCITT Rec. X.800 aka ISO 7498-2. Rule-based access control policies are intended to apply to all access requests by any initiator on any target in a security domain. Identity-based access control policies are based on rules specific to an individual initiator, a group of initiators, entities acting on behalf of initiators, or originators acting in a specific role. Context can modify rule-based or identity-based access control policies. Context rules may define the entire policy in effect. Real systems will usually employ a combination of these policy types; if a rule-based policy is used, then an identity-based policy is usually in effect also.\r\n\r\nAn access control scheme may be based on access control lists, capabilities, labels, and context or a combination of these. An access control scheme is a component of an access control mechanism or \"service\") along with the supporting mechanisms required by that scheme to provide access control decision information (ADI) supplied by the scheme to the access decision facility (ADF also known as a PDP). (Based on ISO/IEC 10181-3:1996)\r\n\r\n**Examples:** \r\n\r\n *  Attribute Based Access Control (ABAC)\r\n *  Discretionary Access Control (DAC)\r\n *  History Based Access Control (HBAC)\r\n *  Identity Based Access Control (IBAC)\r\n *  Mandatory Access Control (MAC)\r\n *  Organization Based Access Control (OrBAC)\r\n *  Relationship Based Access Control (RelBac)\r\n *  Responsibility Based Access Control (RespBAC)\r\n *  Risk Adaptable Access Control (RAdAC)\r\n\r\n>"
                },
                {
                    "code": "COL",
                    "display": "collision coverage policy",
                    "definition": "**Definition:** An automobile insurance policy under which the insurance company will cover the cost of damages to an automobile owned by the named insured that are caused by accident or intentionally by another party."
                },
                {
                    "code": "UNINSMOT",
                    "display": "uninsured motorist policy",
                    "definition": "**Definition:** An automobile insurance policy under which the insurance company will indemnify a loss for which another motorist is liable if that motorist is unable to pay because he or she is uninsured. Coverage under the policy applies to bodily injury damages only. Injuries to the covered party caused by a hit-and-run driver are also covered."
                },
                {
                    "code": "COGN",
                    "display": "cognitive disability information sensitivity",
                    "definition": "Policy for handling information related to cognitive disability disorders and conditions caused by these disorders, which are afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.\r\n\r\nExamples may include dementia, traumatic brain injury, attention deficit, hearing and visual disability such as dyslexia and other disorders and related conditions which impair learning and self-sufficiency. However, the cognitive disabilities to which this term may apply versus other behavioral health categories varies by jurisdiction and organizational policy in part due to overlap with other behavioral health conditions. Implementers should constrain to those diagnoses applicable in the domain in which this code is used."
                },
                {
                    "code": "DVD",
                    "display": "developmental disability information sensitivity",
                    "definition": "Policy for handling information related to developmental disability disorders and conditions caused by these disorders, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.\r\n\r\nA diverse group of chronic conditions that are due to mental or physical impairments impacting activities of daily living, self-care, language acuity, learning, mobility, independent living and economic self-sufficiency. Examples may include Down syndrome and Autism spectrum. However, the developmental disabilities to which this term applies versus other behavioral health categories varies by jurisdiction and organizational policy in part due to overlap with other behavioral health conditions. Implementers should constrain to those diagnoses applicable in the domain in which this code is used."
                },
                {
                    "code": "EMOTDIS",
                    "display": "emotional disturbance information sensitivity",
                    "definition": "Policy for handling information related to emotional disturbance disorders and conditions caused by these disorders, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.\r\n\r\nTypical used to characterize behavioral and mental health issues of adolescents where the disorder may be temporarily diagnosed in order to avoid the potential and unnecessary stigmatizing diagnoses of disorder long term."
                },
                {
                    "code": "DIAGLISTE",
                    "display": "diagnosis list entry task",
                    "definition": "A clinician enters a diagnosis for a given patient."
                },
                {
                    "code": "DISCHINSTE",
                    "display": "discharge instruction entry",
                    "definition": "A person provides a discharge instruction to a patient."
                },
                {
                    "code": "DISCHSUME",
                    "display": "discharge summary entry task",
                    "definition": "A clinician enters a discharge summary for a given patient."
                },
                {
                    "code": "PATEDUE",
                    "display": "patient education entry",
                    "definition": "A person provides a patient-specific education handout to a patient."
                },
                {
                    "code": "PATREPE",
                    "display": "pathology report entry task",
                    "definition": "A pathologist enters a report for a given patient."
                },
                {
                    "code": "PROBLISTE",
                    "display": "problem list entry task",
                    "definition": "A clinician enters a problem for a given patient."
                },
                {
                    "code": "RADREPE",
                    "display": "radiology report entry task",
                    "definition": "A radiologist enters a report for a given patient."
                },
                {
                    "code": "DISCHSUMREV",
                    "display": "discharge summary review task",
                    "definition": "A person reviews a discharge summary of a given patient."
                },
                {
                    "code": "CODE_DEPREC",
                    "display": "code has been deprecated",
                    "definition": "**Description:**The specified code has been deprecated and should no longer be used. Select another code from the code system."
                },
                {
                    "code": "ABUSE",
                    "display": "commonly abused/misused alert",
                    "definition": "**Description:**The proposed therapy is frequently misused or abused and therefore should be used with caution and/or monitoring."
                },
                {
                    "code": "FRAUD",
                    "display": "potential fraud",
                    "definition": "**Description:**The request is suspected to have a fraudulent basis."
                },
                {
                    "code": "PLYDOC",
                    "display": "Poly-orderer Alert",
                    "definition": "A similar or identical therapy was recently ordered by a different practitioner."
                },
                {
                    "code": "PLYPHRM",
                    "display": "Poly-supplier Alert",
                    "definition": "This patient was recently supplied a similar or identical therapy from a different pharmacy or supplier."
                },
                {
                    "code": "ACOCOMPT",
                    "display": "accountable care organization compartment",
                    "definition": "A group of health care entities, which may include health care providers, care givers, hospitals, facilities, health plans, and other health care constituents who coordinate care for reimbursement based on quality metrics for improving outcomes and lowering costs, and may be authorized to access the consumer's health information because of membership in that group.\r\n\r\nSecurity Compartment Labels assigned to a consumer's information use in accountable care workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a an accountable care workflow who is requesting access to that information"
                },
                {
                    "code": "CDSSCOMPT",
                    "display": "CDS system compartment",
                    "definition": "This compartment code may be used as a field value in an initiator's clearance to indicate permission for its Clinical Decision Support system (CDSS) to access and use an IT Resource with a security label having the same compartment value in the security category label field.\r\n\r\nThis code permits a CDS system to algorithmically process information with this compartment tag for the purpose of alerting an unauthorized end user that masked information is needed to address an emergency or a patient safety issue, such as a contraindicated medication. The alert would advise the end user to \"break the glass\", to access the masked information in an accountable manner, or to ask the patient about possibly masked information.\r\n\r\nFor example, releasing a list of sensitive medications with this compartment tag means that while the CDS system is permitted to use this list in its contraindication analysis, this sensitive information should not be shared directly with unauthorized end-users or end-user-facing Apps. Based on the results of the CDS system analysis (e.g., warnings about prescriptions) the end-user (e.g., a clinician) may still have the ability to access to the sensitive information by invoking \"break-the-glass protocol\".\r\n\r\n*Usage Note:* A security label with the CDS system compartment may be used in conjunction with other security labels, e.g., a label authorizing an end user with adequate clearance to access the same CDS system compartment tagged information. For example, a patient may restrict sharing sensitive information with most care team members except in an emergency or to prevent an adverse event, and may consent to sharing with their sensitive service care team providers, e.g., for mental health or substance abuse."
                },
                {
                    "code": "CTCOMPT",
                    "display": "care team compartment",
                    "definition": "Care coordination across participants in a care plan requires sharing of a healthcare consumer's information specific to that workflow. A care team member should only have access to that information while participating in that workflow or for other authorized uses.\r\n\r\nSecurity Compartment Labels assigned to a consumer's information use in care coordination workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a care team member workflow who is requesting access to that information"
                },
                {
                    "code": "FMCOMPT",
                    "display": "financial management compartment",
                    "definition": "Financial management department members who have access to healthcare consumer information as part of a patient account, billing and claims workflows.\r\n\r\nSecurity Compartment Labels assigned to consumer information used in these workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a financial management workflow who is requesting access to that information."
                },
                {
                    "code": "HRCOMPT",
                    "display": "human resource compartment",
                    "definition": "A security category label field value, which indicates that access and use of an IT resource is restricted to members of human resources department or workflow."
                },
                {
                    "code": "LRCOMPT",
                    "display": "legitimate relationship compartment",
                    "definition": "Providers and care givers who have an established relationship per criteria determined by policy are considered to have an established care provision relations with a healthcare consumer, and may be authorized to access the consumer's health information because of that relationship. Providers and care givers should only have access to that information while participating in legitimate relationship workflows or for other authorized uses.\r\n\r\nSecurity Compartment Labels assigned to a consumer's information use in legitimate relationship workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a legitimate relationship workflow who is requesting access to that information."
                },
                {
                    "code": "PACOMPT",
                    "display": "patient administration compartment",
                    "definition": "Patient administration members who have access to healthcare consumer information as part of a patient administration workflows.\r\n\r\nSecurity Compartment Labels assigned to consumer information used in these workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a patient administration workflow who is requesting access to that information."
                },
                {
                    "code": "RESCOMPT",
                    "display": "research project compartment",
                    "definition": "A security category label field value, which indicates that access and use of an IT resource is restricted to members of a research project."
                },
                {
                    "code": "RMGTCOMPT",
                    "display": "records management compartment",
                    "definition": "A security category label field value, which indicates that access and use of an IT resource is restricted to members of records management department or workflow."
                },
                {
                    "code": "LACT",
                    "display": "Lactation Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated when breast-feeding"
                },
                {
                    "code": "PREG",
                    "display": "Pregnancy Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated during pregnancy"
                },
                {
                    "code": "INTOLIST",
                    "display": "intolerance list",
                    "definition": "List of intolerance observations."
                },
                {
                    "code": "PROBLIST",
                    "display": "problem list",
                    "definition": "List of problem observations."
                },
                {
                    "code": "RISKLIST",
                    "display": "risk factors",
                    "definition": "List of risk factor observations."
                },
                {
                    "code": "CONTROLLED",
                    "display": "CONTROLLED",
                    "definition": "A displayed mark, required to be rendered as \"CONTROLLED\", indicating that the electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Mandatory control marking, which must be displayed on the top portion of each rendered or printed page containing controlled information. Should be displayed at the bottom of each rendered or printed page containing controlled information. Must be displayed on each portion of controlled information at the portion level if portions are uncontrolled unclassified information. Based on CUI Marking Handbook https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf."
                },
                {
                    "code": "CUI",
                    "display": "CUI",
                    "definition": "A displayed mark, required to be rendered as \"CUI\", indicating that the electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Mandatory control marking, which must be displayed on the top portion of each rendered or printed page containing controlled information. Should be displayed at the bottom of each rendered or printed page containing controlled information. Must be displayed on each portion of controlled information at the portion level if portions are uncontrolled unclassified information. Based on CUI Marking Handbook https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf."
                },
                {
                    "code": "CUIHLTH",
                    "display": "CUI//HLTH",
                    "definition": "A displayed mark, required to be rendered as \"CUI//HLTH\", indicating that the electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of healthcare regulation governing CUI Basic marking include HIPAA Unique Identifier provisions 42 USC 1320d-2 note(b) https://www.govinfo.gov/content/pkg/USCODE-2016-title42/pdf/USCODE-2016-title42-chap7-subchapXI-partC-sec1320d-2.pdf; Title 38 Section 7332 https://www.govinfo.gov/content/pkg/USCODE-2016-title38/pdf/USCODE-2016-title38-partV-chap73-subchapIII-sec7332.pdf; and several sections of 42 CFR Part 2.related to consent and confidentiality, e.g., https://www.govinfo.gov/content/pkg/CFR-2017-title42-vol1/pdf/CFR-2017-title42-vol1-sec2-12.pdf"
                },
                {
                    "code": "CUIHLTHP",
                    "display": "(CUI//HLTH)",
                    "definition": "A displayed mark, required to be rendered as \"(CUI//HLTH)\", indicating that a portion of an electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of healthcare regulation governing CUI Basic marking include HIPAA Unique Identifier provisions 42 USC 1320d-2 note(b) https://www.govinfo.gov/content/pkg/USCODE-2016-title42/pdf/USCODE-2016-title42-chap7-subchapXI-partC-sec1320d-2.pdf; Title 38 Section 7332 https://www.govinfo.gov/content/pkg/USCODE-2016-title38/pdf/USCODE-2016-title38-partV-chap73-subchapIII-sec7332.pdf; and several sections of 42 CFR Part 2.related to consent and confidentiality, e.g., https://www.govinfo.gov/content/pkg/CFR-2017-title42-vol1/pdf/CFR-2017-title42-vol1-sec2-12.pdf"
                },
                {
                    "code": "CUIP",
                    "display": "(CUI)",
                    "definition": "A displayed mark, required to be rendered as \"(CUI)\", indicating that a portion of an electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of healthcare regulation governing CUI Basic marking include HIPAA Unique Identifier provisions 42 USC 1320d-2 note(b) https://www.govinfo.gov/content/pkg/USCODE-2016-title42/pdf/USCODE-2016-title42-chap7-subchapXI-partC-sec1320d-2.pdf; Title 38 Section 7332 https://www.govinfo.gov/content/pkg/USCODE-2016-title38/pdf/USCODE-2016-title38-partV-chap73-subchapIII-sec7332.pdf; and several sections of 42 CFR Part 2.related to consent and confidentiality, e.g., https://www.govinfo.gov/content/pkg/CFR-2017-title42-vol1/pdf/CFR-2017-title42-vol1-sec2-12.pdf"
                },
                {
                    "code": "CUIPRVCY",
                    "display": "CUI//PRVCY",
                    "definition": "A displayed mark, required to be rendered as \"CUI//PRVCY\", indicating that the electronic or hardcopy controlled unclassified basic privacy information is private and must be protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of privacy regulation governing CUI Basic marking include 20 CFR 401.100 related to SSA disclosure of personal, program, and non-program information. https://www.govinfo.gov/content/pkg/CFR-2017-title20-vol2/pdf/CFR-2017-title20-vol2-sec401-100.pdf."
                },
                {
                    "code": "CUIPRVCYP",
                    "display": "(CUI//PRVCY)",
                    "definition": "A displayed mark, required to be rendered as \"(CUI//PRVCY)\", indicating that a portion of an electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of privacy regulation governing CUI Basic marking include 20 CFR 401.100 related to SSA disclosure of personal, program, and non-program information. https://www.govinfo.gov/content/pkg/CFR-2017-title20-vol2/pdf/CFR-2017-title20-vol2-sec401-100.pdf."
                },
                {
                    "code": "CUISP-HLTH",
                    "display": "CUI//SP-HLTH",
                    "definition": "A displayed mark, required to be rendered as \"CUI//SP-HLTH\", indicating that the electronic or hardcopy information is protected at the level of the subset of CUI in which the authorizing law, regulation, or Government-wide policy contains specific handling controls that it requires or permits agencies to use that differ from those for CUI Basic. The CUI Registry indicates which laws, regulations, and Government-wide policies include such specific requirements. CUI Specified controls may be more stringent than, or may simply differ from, those required by CUI Basic; the distinction is that the underlying authority spells out the controls for CUI Specified information and does not for CUI Basic information. CUI Basic controls apply to those aspects of CUI Specified where the authorizing laws, regulations, and Government-wide policies do not provide specific guidance. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of healthcare regulation governing CUI Specified marking include HIPAA Transaction and Code Sets and references the Congressional requirement that HHS promulgate Privacy, and Security rules https://www.govinfo.gov/content/pkg/USCODE-2016-title42/pdf/USCODE-2016-title42-chap7-subchapXI-partC-sec1320d-2.pdf."
                },
                {
                    "code": "CUISP-HLTHP",
                    "display": "(CUI//SP-HLTH)",
                    "definition": "A displayed mark, required to be rendered as \"(CUI//SP-HLTH)\", indicating that a portion of an electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of healthcare regulation governing CUI Specified marking include HIPAA Transaction and Code Sets and references the Congressional requirement that HHS promulgate Privacy, and Security rules https://www.govinfo.gov/content/pkg/USCODE-2016-title42/pdf/USCODE-2016-title42-chap7-subchapXI-partC-sec1320d-2.pdf"
                },
                {
                    "code": "CUISP-PRVCY",
                    "display": "CUI//SP-PRVCY",
                    "definition": "A displayed mark, required to be rendered as \"CUI//SP-PRVCY\", indicating that the electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of privacy regulation governing CUI Specified marking is OMB M-17-12ï‡? This Memorandum sets forth the policy for Federal agencies to prepare for and respond to a breach of personally identifiable information (PII). It includes a framework for assessing and mitigating the risk of harm to individuals potentially affected by a breach, as well as guidance on whether and how to provide notification and services to those individuals. https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2017/m-17-12\\_0.pdf."
                },
                {
                    "code": "CUISP-PRVCYP",
                    "display": "(CUI//SP-PRVCY)",
                    "definition": "A displayed mark, required to be rendered as \"(CUI//SP-PRVCY)\", indicating that a portion of an electronic or hardcopy information is protected at the level of the subset of CUI for which the authorizing law, regulation, or Government-wide policy does not set out specific handling or dissemination controls. Agencies handle CUI Basic according to the uniform set of controls set forth in this part and the CUI Registry. CUI Basic differs from CUI Specified (see definition for CUI Specified), and CUI Basic controls apply whenever CUI Specified ones do not cover the involved CUI. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html.\r\n\r\n*Usage Note:* Examples of privacy regulation governing CUI Specified marking is OMB M-17-12ï‡? This Memorandum sets forth the policy for Federal agencies to prepare for and respond to a breach of personally identifiable information (PII). It includes a framework for assessing and mitigating the risk of harm to individuals potentially affected by a breach, as well as guidance on whether and how to provide notification and services to those individuals. https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2017/m-17-12\\_0.pdf."
                },
                {
                    "code": "UUI",
                    "display": "(U)",
                    "definition": "A displayed mark, required to be rendered as \"(U)\", indicating that a portion of an electronic or hardcopy information is neither Executive Order 13556 nor classified information authorities cover as protected. Although this information is not controlled or classified, agencies must still handle it in accordance with Federal Information Security Modernization Act (FISMA) requirements. From CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html\r\n\r\n*Usage Note:* Regulatory Source: 32 CFR §  2002.20 Marking. Federal Register Page 63344 63344 (ii) Authorized holders permitted to designate CUI must portion mark both CUI and uncontrolled unclassified portions.\r\n\r\nCUI Marking Handbook https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf\r\n\r\nCUI Portion Marking: Portion marking of CUI is optional in a fully unclassified document, but is permitted and encouraged to facilitate information sharing and proper handling of the information. Agency heads may approve the required use of CUI Portion marking on all CUI generated within their agency. As such, users should consult their agency CUI policy when creating CUI documents. When CUI Portion Markings are used and a portion does not contain CUI a \"U\" is placed in parentheses to indicate that the portion contains Uncontrolled Unclassified Information. (Page 14)\r\n\r\nCUI Portion Markings are placed at the beginning of the portion to which they apply and must be used throughout the entire document. They are presented in all capital letters and separated as indicated in this handbook and the CUI Registry. The presence of EVEN ONE item of CUI in a document requires CUI marking of that document. Because of this, CUI Portion Markings can be of great assistance in determining if a document contains CUI and therefore must be marked as such. Remember: When portion markings are used and any portion does not contain CUI, a \"(U)\" is placed in front of that portion to indicate that it contains Uncontrolled - or non-CUI - Unclassified Information. (Page 15)"
                },
                {
                    "code": "CPLYCC",
                    "display": "comply with confidentiality code",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with the information handling directions of the Confidentiality Code associated with an information target.\r\n\r\n*Usage Note:* CPLYCC may be used as a security label code to inform senders and receivers of information tagged with a Confidentiality Code to comply with applicable level of protection required by the assigned confidentiality code."
                },
                {
                    "code": "CPLYCD",
                    "display": "comply with consent directive",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with applicable information subject consent directives.\r\n\r\n*Usage Note:* CPLYCD may be used as a security label code to inform senders and receivers of information tagged with an ActCode\\_ActPolicyType\\_ActConsent code or an ActCode\\_ActPolicyType\\_ActPrivacyPolicy\\_ActConsentDirective code to comply with applicable consent directives."
                },
                {
                    "code": "CPLYCUI",
                    "display": "comply with controlled unclassified information policy",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with applicable Controlled Unclassified Information (CUI) policies associated with the target information.\r\n\r\n*Usage Note:* In the US, CPLYCUI may be used as a security label code to inform recipients of information designated by a US Federal Agency as Controlled Unclassified Information (CUI) to comply with the applicable laws, regulations, executive orders, and other guidances, such as included in DURSAs, to persist, mark, and enforce required CUI controls\r\n\r\nBackground:\r\n\r\nIn accordance with US 32 CFR Part 2002 and US Executive Order 13556 Controlled Unclassified Information, US Federal Agencies and their contractors are charged with classifying and marking certain information they create as Controlled Unclassified Information (CUI).\r\n\r\nThe following definitions, which are provided for context, are based on terms defined by the CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html\r\n\r\n *  CUI is defined as \"information in any form that the Government creates or possesses, or that an entity creates or possesses for or on behalf of the Government, that a law, regulation, or Government-wide policy requires or permits an agency to handle using safeguarding or dissemination controls.\"\r\n *  Designating CUI occurs when an authorized holder, consistent with 32 CFR Part 2002 and the CUI Registry, determines that a specific item of information falls into a CUI category or subcategory.\r\n *  The designating agency is the executive branch agency that designates or approves the designation of a specific item of information as CUI.\r\n *  The authorized holder who designates the CUI must make recipients aware of the information's CUI status when disseminating that information.\r\n *  • Disseminating occurs when authorized holders provide access, transmit, or transfer CUI to other authorized holders through any means, whether internal or external to the agency.\r\n\r\nOnce designated as CUI, US Federal Agencies and their contractors must assign CUI marks as prescribed by the National Archives and Records Administration (NARA) CUI Registry, and display marks as prescribed by the CUI Marking Handbook.\r\n\r\nCUI markings must be displayed on hard copy, on containers, electronic media, and to end users for IT systems.\r\n\r\nWhen HL7 content is designated as CUI, these computable markings can be interoperably conveyed using HL7 security label CUI tags, and may be included in HL7 text and narrative elements as human readable markings.\r\n\r\n**Impact of CUI markings:**\r\n\r\nCUI Custodians must enforce CUI security controls per applicable CUI policies. Federal agencies and their contractors must adhere to FISMA and NIST SP 800-53 security controls. Custodians, who are not Federal agencies or agency contractors, and are receivers of CUI, must adhere to NIST SP 800-171 security controls and those dictated by the Authorities indicated by the assigned CUI markings.\r\n\r\nFor most participants in US healthcare information exchange, including Federal Agencies and their contractors, additional controls are required by HIPAA Security standards for health information US 42 USC 1320d-2(d)(2) https://www.govinfo.gov/content/pkg/USCODE-2016-title42/pdf/USCODE-2016-title42-chap7-subchapXI-partC-sec1320d-2.pdf\r\n\r\nFederal Agencies and their contractors may be the CUI classifier of original CUI content; or a CUI derivative classifier, which reclassifies CUI content that has been aggregated with other CUI or Unclassified Uncontrolled Information (U) or dissembled from a larger CUI content; or declassifiers, depending on the designating agency's policies.\r\n\r\nApplicable CUI policies include the following and any future applicable updates to policies or laws related to CUI:\r\n\r\n *  Executive Order 13556 https://www.federalregister.gov/articles/2010/11/09/2010-28360/controlled-unclassified-information\r\n *  US 32 CFR Part 2002 https://www.govinfo.gov/content/pkg/CFR-2017-title32-vol6/pdf/CFR-2017-title32-vol6-part2002.pdf\r\n *  NIST SP 800-171 https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r1.pdf\r\n *  NIST SP 800-171A https://doi.org/10.6028/NIST.SP.800-171A\r\n *  CUI Marking Handbook https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf\r\n *  CUI Registry - Health Information Category https://www.archives.gov/cui/registry/category-detail/health-info\r\n *  CUI Registry: Limited Dissemination Controls https://www.archives.gov/cui/registry/limited-dissemination\r\n *  CUI Policy and Guidance https://www.archives.gov/cui/registry/policy-guidance"
                },
                {
                    "code": "CPLYJPP",
                    "display": "comply with jurisdictional privacy policy",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with applicable jurisdictional privacy policies associated with the target information.\r\n\r\n*Usage Note:* CPLYJPP may be used as a security label code to inform senders and receivers of information tagged with an ActCode\\_ActPolicyType\\_ActPrivacyPolicy\\_ActPrivacyLaw code or an ActCode\\_ActPolicyType\\_ActInformationPolicy.JurisIP code to comply with applicable jurisdictional privacy policy."
                },
                {
                    "code": "CPLYJSP",
                    "display": "comply with jurisdictional security policy",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with applicable jurisdictional security policies associated with the target information.\r\n\r\n*Usage Note:* CPLYJSP may be used as a security label code to inform senders and receivers of information tagged with an ActCode\\_ActPolicyType.SecurityPolicy code to comply with applicable jurisdictional security policy."
                },
                {
                    "code": "CPLYOPP",
                    "display": "comply with organizational privacy policy",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with applicable organizational privacy policies associated with the target information.\r\n\r\n*Usage Note:* CPLYOPP may be used as a security label code to inform senders and receivers of information tagged with an ActCode\\_ActPolicyType\\_ActInformationPolicy.OrgIP code to comply with applicable organizational privacy policy."
                },
                {
                    "code": "CPLYOSP",
                    "display": "comply with organizational security policy",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with the organizational security policies associated with the target information.\r\n\r\n*Usage Note:* CPLYOSP may be used as a security label code to inform senders and receivers of information tagged with an ActCode\\_ActPolicyType.SecurityPolicy code to comply with applicable organizational security policy."
                },
                {
                    "code": "_DEADrugSchedule",
                    "display": "DEADrugSchedule",
                    "definition": "DEA schedule for a drug."
                },
                {
                    "code": "BR",
                    "display": "breikost (GE)",
                    "definition": "A diet exclusively composed of oatmeal, semolina, or rice, to be extremely easy to eat and digest."
                },
                {
                    "code": "DM",
                    "display": "diabetes mellitus diet",
                    "definition": "A diet that uses carbohydrates sparingly. Typically with a restriction in daily energy content (e.g. 1600-2000 kcal)."
                },
                {
                    "code": "FAST",
                    "display": "fasting",
                    "definition": "No enteral intake of foot or liquids whatsoever, no smoking. Typically 6 to 8 hours before anesthesia."
                },
                {
                    "code": "FORMULA",
                    "display": "formula diet",
                    "definition": "A diet consisting of a formula feeding, either for an infant or an adult, to provide nutrition either orally or through the gastrointestinal tract via tube, catheter or stoma."
                },
                {
                    "code": "GF",
                    "display": "gluten free",
                    "definition": "Gluten free diet for celiac disease."
                },
                {
                    "code": "LF",
                    "display": "low fat",
                    "definition": "A diet low in fat, particularly to patients with hepatic diseases."
                },
                {
                    "code": "LP",
                    "display": "low protein",
                    "definition": "A low protein diet for patients with renal failure."
                },
                {
                    "code": "LQ",
                    "display": "liquid",
                    "definition": "A strictly liquid diet, that can be fully absorbed in the intestine, and therefore may not contain fiber. Used before enteral surgeries."
                },
                {
                    "code": "LS",
                    "display": "low sodium",
                    "definition": "A diet low in sodium for patients with congestive heart failure and/or renal failure."
                },
                {
                    "code": "N",
                    "display": "normal diet",
                    "definition": "A normal diet, i.e. no special preparations or restrictions for medical reasons. This is notwithstanding any preferences the patient might have regarding special foods, such as vegetarian, kosher, etc."
                },
                {
                    "code": "NF",
                    "display": "no fat",
                    "definition": "A no fat diet for acute hepatic diseases."
                },
                {
                    "code": "PAF",
                    "display": "phenylalanine free",
                    "definition": "Phenylketonuria diet."
                },
                {
                    "code": "PAR",
                    "display": "parenteral",
                    "definition": "Patient is supplied with parenteral nutrition, typically described in terms of i.v. medications."
                },
                {
                    "code": "RD",
                    "display": "reduction diet",
                    "definition": "A diet that seeks to reduce body fat, typically low energy content (800-1600 kcal)."
                },
                {
                    "code": "SCH",
                    "display": "schonkost (GE)",
                    "definition": "A diet that avoids ingredients that might cause digestion problems, e.g., avoid excessive fat, avoid too much fiber (cabbage, peas, beans)."
                },
                {
                    "code": "SUPPLEMENT",
                    "display": "nutritional supplement",
                    "definition": "A diet that is not intended to be complete but is added to other diets."
                },
                {
                    "code": "T",
                    "display": "tea only",
                    "definition": "This is not really a diet, since it contains little nutritional value, but is essentially just water. Used before coloscopy examinations."
                },
                {
                    "code": "VLI",
                    "display": "low valin, leucin, isoleucin",
                    "definition": "Diet with low content of the amino-acids valin, leucin, and isoleucin, for \"maple syrup disease.\""
                },
                {
                    "code": "AUTO-HIGH",
                    "display": "Auto-High Dilution",
                    "definition": "The dilution of a sample performed by automated equipment. The value is specified by the equipment"
                },
                {
                    "code": "AUTO-LOW",
                    "display": "Auto-Low Dilution",
                    "definition": "The dilution of a sample performed by automated equipment. The value is specified by the equipment"
                },
                {
                    "code": "PRE",
                    "display": "Pre-Dilution",
                    "definition": "The dilution of the specimen made prior to being loaded onto analytical equipment"
                },
                {
                    "code": "RERUN",
                    "display": "Rerun Dilution",
                    "definition": "The value of the dilution of a sample after it had been analyzed at a prior dilution value"
                },
                {
                    "code": "DNAINT",
                    "display": "Drug Non-Allergy Intolerance",
                    "definition": "Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure"
                },
                {
                    "code": "CANPRG",
                    "display": "women's cancer detection program",
                    "definition": "**Definition:** A program that provides low-income, uninsured, and underserved women access to timely, high-quality screening and diagnostic services, to detect breast and cervical cancer at the earliest stages.\r\n\r\n**Example:** To improve women's access to screening for breast and cervical cancers, Congress passed the Breast and Cervical Cancer Mortality Prevention Act of 1990, which guided CDC in creating the National Breast and Cervical Cancer Early Detection Program (NBCCEDP), which provides access to critical breast and cervical cancer screening services for underserved women in the United States. An estimated 7 to 10% of U.S. women of screening age are eligible to receive NBCCEDP services. Federal guidelines establish an eligibility baseline to direct services to uninsured and underinsured women at or below 250% of federal poverty level; ages 18 to 64 for cervical screening; ages 40 to 64 for breast screening."
                },
                {
                    "code": "ENDRENAL",
                    "display": "end renal program",
                    "definition": "**Definition:** A public or government program that administers publicly funded coverage of kidney dialysis and kidney transplant services.\r\n\r\nExample: In the U.S., the Medicare End-stage Renal Disease program (ESRD), the National Kidney Foundation (NKF) American Kidney Fund (AKF) The Organ Transplant Fund."
                },
                {
                    "code": "HIVAIDS",
                    "display": "HIV-AIDS program",
                    "definition": "**Definition:** Government administered and funded HIV-AIDS program for beneficiaries meeting financial and health status criteria. Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process. Payer responsibilities for administering the program may be delegated to contractors.\r\n\r\n**Example:** In the U.S., the Ryan White program, which is administered by the Health Resources and Services Administration."
                },
                {
                    "code": "DOSECOND",
                    "display": "dosage-condition alert",
                    "definition": "**Description:**Proposed dosage is inappropriate due to patient's medical condition."
                },
                {
                    "code": "DOSEDUR",
                    "display": "Dose-Duration Alert",
                    "definition": "Proposed length of therapy differs from standard practice."
                },
                {
                    "code": "DOSEH",
                    "display": "High Dose Alert",
                    "definition": "Proposed dosage exceeds standard practice"
                },
                {
                    "code": "DOSEIVL",
                    "display": "Dose-Interval Alert",
                    "definition": "Proposed dosage interval/timing differs from standard practice"
                },
                {
                    "code": "DOSEL",
                    "display": "Low Dose Alert",
                    "definition": "Proposed dosage is below suggested therapeutic levels"
                },
                {
                    "code": "MDOSE",
                    "display": "maximum dosage reached",
                    "definition": "**Description:**The maximum quantity of this drug allowed to be administered within a particular time-range (month, year, lifetime) has been reached or exceeded."
                },
                {
                    "code": "DOSEDURH",
                    "display": "Dose-Duration High Alert",
                    "definition": "Proposed length of therapy is longer than standard practice"
                },
                {
                    "code": "DOSEDURL",
                    "display": "Dose-Duration Low Alert",
                    "definition": "Proposed length of therapy is shorter than that necessary for therapeutic effect"
                },
                {
                    "code": "DOSEDURHIND",
                    "display": "Dose-Duration High for Indication Alert",
                    "definition": "Proposed length of therapy is longer than standard practice for the identified indication or diagnosis"
                },
                {
                    "code": "DOSEDURLIND",
                    "display": "Dose-Duration Low for Indication Alert",
                    "definition": "Proposed length of therapy is shorter than standard practice for the identified indication or diagnosis"
                },
                {
                    "code": "DOSEHINDSA",
                    "display": "High Dose for Height/Surface Area Alert",
                    "definition": "Proposed dosage exceeds standard practice for the patient's height or body surface area"
                },
                {
                    "code": "DOSEHINDW",
                    "display": "High Dose for Weight Alert",
                    "definition": "Proposed dosage exceeds standard practice for the patient's weight"
                },
                {
                    "code": "DOSEIVLIND",
                    "display": "Dose-Interval for Indication Alert",
                    "definition": "Proposed dosage interval/timing differs from standard practice for the identified indication or diagnosis"
                },
                {
                    "code": "DOSELINDSA",
                    "display": "Low Dose for Height/Surface Area Alert",
                    "definition": "Proposed dosage is below suggested therapeutic levels for the patient's height or body surface area"
                },
                {
                    "code": "DOSELINDW",
                    "display": "Low Dose for Weight Alert",
                    "definition": "Proposed dosage is below suggested therapeutic levels for the patient's weight"
                },
                {
                    "code": "DUPTHPCLS",
                    "display": "duplicate therapeutic alass alert",
                    "definition": "**Description:**The proposed therapy appears to have the same intended therapeutic benefit as an existing therapy, though the specific mechanisms of action vary."
                },
                {
                    "code": "DUPTHPGEN",
                    "display": "duplicate generic alert",
                    "definition": "**Description:**The proposed therapy appears to have the same intended therapeutic benefit as an existing therapy and uses the same mechanisms of action as the existing therapy."
                },
                {
                    "code": "ENAINT",
                    "display": "Environmental Non-Allergy Intolerance",
                    "definition": "Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure"
                },
                {
                    "code": "SO",
                    "display": "Script Owing",
                    "definition": "An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date."
                },
                {
                    "code": "21",
                    "display": "authorization confirmed",
                    "definition": "**Description:** Indicates that the permissions have been externally verified and the request should be processed."
                },
                {
                    "code": "ENCRYPTR",
                    "display": "encrypt at rest",
                    "definition": "Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext when \"at rest\" or in storage."
                },
                {
                    "code": "ENCRYPTT",
                    "display": "encrypt in transit",
                    "definition": "Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while \"in transit\" or being transported by any means."
                },
                {
                    "code": "ENCRYPTU",
                    "display": "encrypt in use",
                    "definition": "Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while in use such that operations permitted on the target information are limited by the license granted to the end user."
                },
                {
                    "code": "FFC",
                    "display": "First Fill - Complete",
                    "definition": "A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets)."
                },
                {
                    "code": "FFP",
                    "display": "First Fill - Part Fill",
                    "definition": "A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)"
                },
                {
                    "code": "FFPS",
                    "display": "first fill, part fill, partial strength",
                    "definition": "A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)"
                },
                {
                    "code": "FFSS",
                    "display": "first fill, partial strength",
                    "definition": "A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "TF",
                    "display": "Trial Fill",
                    "definition": "A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance."
                },
                {
                    "code": "FFCS",
                    "display": "first fill complete, partial strength",
                    "definition": "A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets) and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "TFS",
                    "display": "trial fill partial strength",
                    "definition": "A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "FNAINT",
                    "display": "Food Non-Allergy Intolerance",
                    "definition": "Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure"
                },
                {
                    "code": "NOTACTN",
                    "display": "no longer actionable",
                    "definition": "**Definition:**The status of the request being fulfilled has changed such that it is no longer actionable. This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled. (Not used for 'suspended' orders.)"
                },
                {
                    "code": "NOTEQUIV",
                    "display": "not equivalent alert",
                    "definition": "**Definition:**The therapy being performed is not sufficiently equivalent to the therapy which was requested."
                },
                {
                    "code": "TIMING",
                    "display": "event timing incorrect alert",
                    "definition": "**Definition:**The therapy is being performed at a time which diverges from the time the therapy was requested"
                },
                {
                    "code": "BOOSTER",
                    "display": "Booster Immunization",
                    "definition": "An additional immunization administration within a series intended to bolster or enhance immunity."
                },
                {
                    "code": "INITIMMUNIZ",
                    "display": "Initial Immunization",
                    "definition": "The first immunization administration in a series intended to produce immunity"
                },
                {
                    "code": "ACUTE",
                    "display": "inpatient acute",
                    "definition": "An acute inpatient encounter."
                },
                {
                    "code": "NONAC",
                    "display": "inpatient non-acute",
                    "definition": "Any category of inpatient encounter except 'acute'"
                },
                {
                    "code": "INFAO",
                    "display": "access only",
                    "definition": "**Definition:** Consent to access or \"read\" only, which entails that the information is not to be copied, screen printed, saved, emailed, stored, re-disclosed or altered in any way. This level ensures that data which is masked or to which access is restricted will not be.\r\n\r\n**Example:** Opened and then emailed or screen printed for use outside of the consent directive purpose."
                },
                {
                    "code": "INFASO",
                    "display": "access and save only",
                    "definition": "**Definition:** Consent to access and save only, which entails that access to the saved copy will remain locked."
                },
                {
                    "code": "INFCON",
                    "display": "after explicit consent",
                    "definition": "Authorization to collect, access, use, or disclose specified patient health information as explicitly consented to by the subject of the information or the subject's representative."
                },
                {
                    "code": "FIBRIN",
                    "display": "Fibrin",
                    "definition": "The Fibrin Index of the specimen. In the case of only differentiating between Absent and Present, recommend using 0 and 1"
                },
                {
                    "code": "HEMOLYSIS",
                    "display": "Hemolysis",
                    "definition": "An observation of the hemolysis index of the specimen in g/L"
                },
                {
                    "code": "ICTERUS",
                    "display": "Icterus",
                    "definition": "An observation that describes the icterus index of the specimen. It is recommended to use mMol/L of bilirubin"
                },
                {
                    "code": "LIPEMIA",
                    "display": "Lipemia",
                    "definition": "An observation used to describe the Lipemia Index of the specimen. It is recommended to use the optical turbidity at 600 nm (in absorbance units)."
                },
                {
                    "code": "IPPOP",
                    "display": "initial patient population",
                    "definition": "Criteria for specifying the patients to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs). Details often include information based upon specific age groups, diagnoses, diagnostic and procedure codes, and enrollment periods."
                },
                {
                    "code": "_ActAdministrativeDetectedIssueCode",
                    "display": "ActAdministrativeDetectedIssueCode",
                    "definition": "Identifies types of detectyed issues for Act class \"ALRT\" for the administrative and patient administrative acts domains."
                },
                {
                    "code": "_ActSuppliedItemDetectedIssueCode",
                    "display": "ActSuppliedItemDetectedIssueCode",
                    "definition": "Identifies types of detected issues regarding the administration or supply of an item to a patient."
                },
                {
                    "code": "_ActFinancialDetectedIssueCode",
                    "display": "ActFinancialDetectedIssueCode",
                    "definition": "Identifies types of detected issues for Act class \"ALRT\" for the financial acts domain."
                },
                {
                    "code": "_ClinicalActionDetectedIssueCode",
                    "display": "ClinicalActionDetectedIssueCode",
                    "definition": "Identifies types of issues detected regarding the performance of a clinical action on a patient."
                },
                {
                    "code": "CAREGAP",
                    "display": "Caregap",
                    "definition": "Identifies the type of detected issue is a care gap"
                },
                {
                    "code": "CODINGGAP",
                    "display": "Codinggap",
                    "definition": "Identifies the type of detected issue is a risk adjustment coding gap"
                },
                {
                    "code": "JurisCUI",
                    "display": "jurisdictional controlled unclassified information policy",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of controlled unclassified information as defined by applicable jurisdictional law."
                },
                {
                    "code": "JurisDEID",
                    "display": "jurisdictional de-identified information policy",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of de-identified information as defined by applicable jurisdictional law."
                },
                {
                    "code": "JurisLDS",
                    "display": "jurisdictional limited data set",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of information in a limited data set as defined by applicable jurisdictional law."
                },
                {
                    "code": "JurisNSI",
                    "display": "jurisdictional non-sensitive information policy",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of information deemed non-sensitive by applicable jurisdiction law."
                },
                {
                    "code": "JurisPI",
                    "display": "jurisdictional public information policy",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of information deemed public by applicable jurisdiction law."
                },
                {
                    "code": "JurisSP-CUI",
                    "display": "jurisdictional specified controlled unclassified information policy",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of specified controlled unclassified information as defined by applicable jurisdictional policy."
                },
                {
                    "code": "JurisUUI",
                    "display": "jurisdictional uncontrolled unclassified information policy",
                    "definition": "Jurisdictional policy on collection, access, use, or disclosure of uncontrolled unclassified information as defined by applicable jurisdictional policy."
                },
                {
                    "code": "LEN_LONG",
                    "display": "length is too long",
                    "definition": "**Description:**The length of the data specified is greater than the maximum length defined for the element."
                },
                {
                    "code": "LEN_SHORT",
                    "display": "length is too short",
                    "definition": "**Description:**The length of the data specified is less than the minimum length defined for the element."
                },
                {
                    "code": "ANNU",
                    "display": "annuity policy",
                    "definition": "**Definition:** A policy that, after an initial premium or premiums, pays out a sum at pre-determined intervals.\r\n\r\nFor example, a policy holder may pay $10,000, and in return receive $150 each month until he dies; or $1,000 for each of 14 years or death benefits if he dies before the full term of the annuity has elapsed."
                },
                {
                    "code": "TLIFE",
                    "display": "term life insurance policy",
                    "definition": "**Definition:** Life insurance under which the benefit is payable only if the insured dies during a specified period. If an insured dies during that period, the beneficiary receives the death payments. If the insured survives, the policy ends and the beneficiary receives nothing."
                },
                {
                    "code": "ULIFE",
                    "display": "universal life insurance policy",
                    "definition": "**Definition:** Life insurance under which the benefit is payable upon the insuredaTMs death or diagnosis of a terminal illness. If an insured dies during that period, the beneficiary receives the death payments. If the insured survives, the policy ends and the beneficiary receives nothing"
                },
                {
                    "code": "RENT",
                    "display": "Rent",
                    "definition": "Temporary supply of a product with financial compensation, without transfer of ownership for the product."
                },
                {
                    "code": "HMO",
                    "display": "health maintenance organization policy",
                    "definition": "**Definition:** A policy for a health plan that provides coverage for health care only through contracted or employed physicians and hospitals located in particular geographic or service areas. HMOs emphasize prevention and early detection of illness. Eligibility to enroll in an HMO is determined by where a covered party lives or works."
                },
                {
                    "code": "PPO",
                    "display": "preferred provider organization policy",
                    "definition": "**Definition:** A network-based, managed care plan that allows a covered party to choose any health care provider. However, if care is received from a \"preferred\" (participating in-network) provider, there are generally higher benefit coverage and lower deductibles."
                },
                {
                    "code": "MDHHS-5515MMHC",
                    "display": "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-Michigan Mental Health Code",
                    "definition": "The State of Michigan standard privacy consent form for sharing of health information specific to behavioral health governed by the Michigan Mental Health Code Act 258 of 1974, which require patient authorization for purposes other than treatment, payment, and coordination of care, in accordance with Public Act 129 of 2014.\r\n\r\n*Usage Note:* For legislative background, current MDHHS-5515 consent directive form, and provider and patient FAQs see http://www.michigan.gov/mdhhs/0,5885,7-339-71550\\_2941\\_58005-343686--,00.html"
                },
                {
                    "code": "MDHHS-5515Part2",
                    "display": "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-US 42 CFR Part 2",
                    "definition": "The State of Michigan standard privacy consent form for sharing of health information specific to substance use information governed under US 42 CFR Part 2 in accordance with Public Act 129 of 2014.\r\n\r\n*Usage Note:* For legislative background, current MDHHS-5515 consent directive form, and provider and patient FAQs see http://www.michigan.gov/mdhhs/0,5885,7-339-71550\\_2941\\_58005-343686--,00.html"
                },
                {
                    "code": "CURMEDLIST",
                    "display": "current medication list",
                    "definition": "List of current medications."
                },
                {
                    "code": "DISCMEDLIST",
                    "display": "discharge medication list",
                    "definition": "List of discharge medications."
                },
                {
                    "code": "HISTMEDLIST",
                    "display": "medication history",
                    "definition": "Historical list of medications."
                },
                {
                    "code": "MICROORGRREV",
                    "display": "microbiology organisms results review task",
                    "definition": "A person reviews organisms of microbiology results of a given patient."
                },
                {
                    "code": "MICROSENSRREV",
                    "display": "microbiology sensitivity test results review task",
                    "definition": "A person reviews the sensitivity test of microbiology results of a given patient."
                },
                {
                    "code": "MARWLREV",
                    "display": "medication administration record work list review task",
                    "definition": "A clinician reviews a work list of medications to be administered to a given patient."
                },
                {
                    "code": "NOTEQUIVGEN",
                    "display": "not generically equivalent alert",
                    "definition": "**Definition:**The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested."
                },
                {
                    "code": "NOTEQUIVTHER",
                    "display": "not therapeutically equivalent alert",
                    "definition": "**Definition:**The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested."
                },
                {
                    "code": "ANONY",
                    "display": "anonymize",
                    "definition": "Custodian system must remove any information that could result in identifying the information subject."
                },
                {
                    "code": "AOD",
                    "display": "accounting of disclosure",
                    "definition": "Custodian system must make available to an information subject upon request an accounting of certain disclosures of the individual's protected health information over a period of time. Policy may dictate that the accounting include information about the information disclosed, the date of disclosure, the identification of the receiver, the purpose of the disclosure, the time in which the disclosing entity must provide a response and the time period for which accountings of disclosure can be requested."
                },
                {
                    "code": "AUDIT",
                    "display": "audit",
                    "definition": "Custodian system must monitor systems to ensure that all users are authorized to operate on information objects."
                },
                {
                    "code": "AUDTR",
                    "display": "audit trail",
                    "definition": "Custodian system must monitor and maintain retrievable log for each user and operation on information."
                },
                {
                    "code": "CPLYPOL",
                    "display": "comply with policy",
                    "definition": "Custodian security system must retrieve, evaluate, and comply with applicable policies associated with the target information.\r\n\r\n*Usage Note:* CPLYPOL may be used as a security label code to inform senders and receivers of the tagged information to comply with applicable policy without specifying the specific policy type(s)."
                },
                {
                    "code": "DECLASSIFYLABEL",
                    "display": "declassify security label",
                    "definition": "Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as unclassified in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding."
                },
                {
                    "code": "DEID",
                    "display": "deidentify",
                    "definition": "Custodian system must strip information of data that would allow the identification of the source of the information or the information subject."
                },
                {
                    "code": "DELAU",
                    "display": "delete after use",
                    "definition": "Custodian system must remove target information from access after use."
                },
                {
                    "code": "DOWNGRDLABEL",
                    "display": "downgrade security label",
                    "definition": "Custodian security system must downgrade information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a less protected level in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding."
                },
                {
                    "code": "DRIVLABEL",
                    "display": "derive security label",
                    "definition": "Custodian security system must assign and bind security labels derived from compilations of information by aggregation or disaggregation in order to classify information compiled in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding."
                },
                {
                    "code": "ENCRYPT",
                    "display": "encrypt",
                    "definition": "Custodian system must render information unreadable by algorithmically transforming plaintext into ciphertext.\r\n\r\n*Usage Notes:* A mathematical transposition of a file or data stream so that it cannot be deciphered at the receiving end without the proper key. Encryption is a security feature that assures that only the parties who are supposed to be participating in a videoconference or data transfer are able to do so. It can include a password, public and private keys, or a complex combination of all. (Per Infoway.)"
                },
                {
                    "code": "HUAPRV",
                    "display": "human approval",
                    "definition": "Custodian system must require human review and approval for permission requested."
                },
                {
                    "code": "LABEL",
                    "display": "assign security label",
                    "definition": "Custodian security system must assign and bind security labels in order to classify information created in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the assignment and binding.\r\n\r\n*Usage Note:* In security systems, security policy label assignments do not change, they may supersede prior assignments, and such reassignments are always tracked for auditing and other purposes."
                },
                {
                    "code": "MASK",
                    "display": "mask",
                    "definition": "Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext. User may be provided a key to decrypt per license or \"shared secret\"."
                },
                {
                    "code": "MINEC",
                    "display": "minimum necessary",
                    "definition": "Custodian must limit access and disclosure to the minimum information required to support an authorized user's purpose of use.\r\n\r\n*Usage Note:* Limiting the information available for access and disclosure to that an authorized user or receiver \"needs to know\" in order to perform permitted workflow or purpose of use."
                },
                {
                    "code": "PERSISTLABEL",
                    "display": "persist security label",
                    "definition": "Custodian security system must persist the binding of security labels to classify information received or imported by information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the assignment and binding."
                },
                {
                    "code": "PRIVMARK",
                    "display": "privacy mark",
                    "definition": "Custodian must create and/or maintain human readable security label tags as required by policy.\r\n\r\nMap: Aligns with ISO 22600-3 Section A.3.4.3 description of privacy mark: \"If present, the privacy-mark is not used for access control. The content of the privacy-mark may be defined by the security policy in force (identified by the security-policy-identifier) which may define a list of values to be used. Alternately, the value may be determined by the originator of the security-label.\""
                },
                {
                    "code": "PSEUD",
                    "display": "pseudonymize",
                    "definition": "Custodian system must strip information of data that would allow the identification of the source of the information or the information subject. Custodian may retain a key to relink data necessary to reidentify the information subject."
                },
                {
                    "code": "REDACT",
                    "display": "redact",
                    "definition": "Custodian system must remove information, which is not authorized to be access, used, or disclosed from records made available to otherwise authorized users."
                },
                {
                    "code": "UPGRDLABEL",
                    "display": "upgrade security label",
                    "definition": "Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a more protected level in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding."
                },
                {
                    "code": "PROCESSINLINELABEL",
                    "display": "process inline security label",
                    "definition": "Custodian security system must take note that the data object contains inline security labels and process them."
                },
                {
                    "code": "AGE",
                    "display": "Age Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated due to patient age"
                },
                {
                    "code": "COND",
                    "display": "Condition Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated due to an existing/recent patient condition or diagnosis"
                },
                {
                    "code": "CREACT",
                    "display": "common reaction alert",
                    "definition": "**Description:**Proposed therapy may be inappropriate or contraindicated because of a common but non-patient specific reaction to the product.\r\n\r\n**Example:**There is no record of a specific sensitivity for the patient, but the presence of the sensitivity is common and therefore caution is warranted."
                },
                {
                    "code": "GEN",
                    "display": "Genetic Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated due to patient genetic indicators."
                },
                {
                    "code": "GEND",
                    "display": "Gender Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated due to patient gender."
                },
                {
                    "code": "LAB",
                    "display": "Lab Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated due to recent lab test results"
                },
                {
                    "code": "REACT",
                    "display": "Reaction Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated based on the potential for a patient reaction to the proposed product"
                },
                {
                    "code": "RREACT",
                    "display": "Related Reaction Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated because of a potential patient reaction to a cross-sensitivity related product."
                },
                {
                    "code": "LABOE",
                    "display": "laboratory test order entry task",
                    "definition": "A clinician creates a request for a laboratory test to be done for a given patient."
                },
                {
                    "code": "MEDOE",
                    "display": "medication order entry task",
                    "definition": "A clinician creates a request for the administration of one or more medications to a given patient."
                },
                {
                    "code": "ALG",
                    "display": "Allergy",
                    "definition": "Hypersensitivity to an agent caused by an immunologic response to an initial exposure"
                },
                {
                    "code": "DINT",
                    "display": "Drug Intolerance",
                    "definition": "Hypersensitivity resulting in an adverse reaction upon exposure to a drug."
                },
                {
                    "code": "EINT",
                    "display": "Environmental Intolerance",
                    "definition": "Hypersensitivity resulting in an adverse reaction upon exposure to environmental conditions."
                },
                {
                    "code": "FINT",
                    "display": "Food Intolerance",
                    "definition": "Hypersensitivity resulting in an adverse reaction upon exposure to food."
                },
                {
                    "code": "NAINT",
                    "display": "Non-Allergy Intolerance",
                    "definition": "Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure"
                },
                {
                    "code": "OrgCUI",
                    "display": "organizational basic controlled unclassified information policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of basic controlled unclassified information as defined by the organization or by applicable jurisdictional law."
                },
                {
                    "code": "OrgDEID",
                    "display": "organizational de-identified informati)on policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of de-identified information as defined by the organization or by applicable jurisdictional law."
                },
                {
                    "code": "OrgLDS",
                    "display": "organizational limited data set information policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of information in a limited data set as defined by the organization or by applicable jurisdictional law."
                },
                {
                    "code": "OrgNSI",
                    "display": "organizational non-sensitive information policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of information deemed non-sensitive by the organization or by applicable jurisdictional law."
                },
                {
                    "code": "OrgPI",
                    "display": "organizational public information policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of public information as defined by the organization or by applicable jurisdictional law."
                },
                {
                    "code": "OrgSP-CUI",
                    "display": "organizational specified controlled unclassified information policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of specified controlled unclassified information as defined by the organization or by applicable jurisdictional law."
                },
                {
                    "code": "OrgUUI",
                    "display": "organizational uncontrolled unclassified information policy",
                    "definition": "Organizational policy on collection, access, use, or disclosure of uncontrolled unclassified information as defined by the organization or governing jurisdiction."
                },
                {
                    "code": "ALLERLREV",
                    "display": "allergy list review",
                    "definition": "**Description:** A person reviews a list of known allergies of a given patient."
                },
                {
                    "code": "CLINNOTEE",
                    "display": "clinical note entry task",
                    "definition": "A clinician enters a clinical note about a given patient"
                },
                {
                    "code": "IMMLREV",
                    "display": "immunization list review",
                    "definition": "**Description:** A person reviews a list of immunizations due or received for a given patient."
                },
                {
                    "code": "REMLREV",
                    "display": "reminder list review",
                    "definition": "**Description:** A person reviews a list of health care reminders for a given patient."
                },
                {
                    "code": "ALLERLE",
                    "display": "allergy list entry",
                    "definition": "**Description:** A person enters a known allergy for a given patient."
                },
                {
                    "code": "CDSREV",
                    "display": "clinical decision support intervention review",
                    "definition": "A person reviews a recommendation/assessment provided automatically by a clinical decision support application for a given patient."
                },
                {
                    "code": "CLINNOTEREV",
                    "display": "clinical note review task",
                    "definition": "A person reviews a clinical note of a given patient."
                },
                {
                    "code": "DIAGLISTREV",
                    "display": "diagnosis list review task",
                    "definition": "A person reviews a list of diagnoses of a given patient."
                },
                {
                    "code": "IMMLE",
                    "display": "immunization list entry",
                    "definition": "**Description:** A person enters an immunization due or received for a given patient."
                },
                {
                    "code": "LABRREV",
                    "display": "laboratory results review task",
                    "definition": "A person reviews a list of laboratory results of a given patient."
                },
                {
                    "code": "MICRORREV",
                    "display": "microbiology results review task",
                    "definition": "A person reviews a list of microbiology results of a given patient."
                },
                {
                    "code": "MLREV",
                    "display": "medication list review task",
                    "definition": "A person reviews a list of medication orders submitted to a given patient"
                },
                {
                    "code": "OREV",
                    "display": "orders review task",
                    "definition": "A person reviews a list of orders submitted to a given patient."
                },
                {
                    "code": "PATREPREV",
                    "display": "pathology report review task",
                    "definition": "A person reviews a pathology report of a given patient."
                },
                {
                    "code": "PROBLISTREV",
                    "display": "problem list review task",
                    "definition": "A person reviews a list of problems of a given patient."
                },
                {
                    "code": "RADREPREV",
                    "display": "radiology report review task",
                    "definition": "A person reviews a radiology report of a given patient."
                },
                {
                    "code": "REMLE",
                    "display": "reminder list entry",
                    "definition": "**Description:** A person enters a health care reminder for a given patient."
                },
                {
                    "code": "RISKASSESS",
                    "display": "risk assessment instrument task",
                    "definition": "A person reviews a Risk Assessment Instrument report of a given patient."
                },
                {
                    "code": "PATPREFALT",
                    "display": "violates stated preferences, alternate available",
                    "definition": "**Definition:**The proposed therapy goes against preferences or consent constraints recorded in the patient's record. An alternate therapy meeting those constraints is available."
                },
                {
                    "code": "PersDEID",
                    "display": "personal de-identified information policy",
                    "definition": "Personal policy on collection, access, use, or disclosure of de-identified information as defined by the information subject or by applicable jurisdictional law."
                },
                {
                    "code": "PersLDS",
                    "display": "personal limited data set information policy",
                    "definition": "Personal policy personal policy on collection, access, use, or disclosure of information in a limited data set by the information subject."
                },
                {
                    "code": "PersNSI",
                    "display": "personal non-sensitive information policy",
                    "definition": "Personal policy on collection, access, use, or disclosure of information deemed non-sensitive by the information subject."
                },
                {
                    "code": "PersPI",
                    "display": "personal public information policy",
                    "definition": "Personal policy on collection, access, use, or disclosure of information deemed public by the information subject."
                },
                {
                    "code": "ControlledUnclassifiedInformation",
                    "display": "ControlledUnclassifiedInformation",
                    "definition": "Information the US Government creates or possesses, or that an entity creates or possesses for or on behalf of the Government, that a law, regulation, or Government-wide policy requires or permits an agency to handle using safeguarding or dissemination controls. However, CUI does not include classified information (see definition above) or information a non-executive branch entity possesses and maintains in its own systems that did not come from, or was not created or possessed by or for, an executive branch agency or an entity acting for an agency. Law, regulation, or Government-wide policy may require or permit safeguarding or dissemination controls in three ways: Requiring or permitting agencies to control or protect the information but providing no specific controls, which makes the information CUI Basic; requiring or permitting agencies to control or protect the information and providing specific controls for doing so, which makes the information CUI Specified; or requiring or permitting agencies to control the information and specifying only some of those controls, which makes the information CUI Specified, but with CUI Basic controls where the authority does not specify. Based on CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html .\r\n\r\n*Usage Note:* Mandatory control marking, which must be displayed on the top portion of each rendered or printed page containing controlled information. Should be displayed at the bottom of each rendered or printed page containing controlled information. Must be displayed on each portion of controlled information at the portion level if portions are uncontrolled unclassified information. Based on CUI Marking Handbook https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf. For definitions of key terms see CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html."
                },
                {
                    "code": "SecurityLabelMark",
                    "display": "Security Label Mark",
                    "definition": "An abstract code for displayed Security Label tags.\r\n\r\n*Usage Note:* These marks may be based on any of the HL7 Security Labeling related codes from various code systems and values sets, which are organized according to the HL7 Privacy and Security Classification System into HL7 Security Observation Type Named Tag Sets and valued with codes associated with the HL7 Security Observation Value Tag Set Names."
                },
                {
                    "code": "CUIMark",
                    "display": "CUI Mark",
                    "definition": "An originator must mark, persist, display, and convey computable and renderable Controlled Unclassified Information (CUI) marks as required by policy. A recipient must consume, persist, display, and reconvey CUI marks on information received based on agreements with the originator..\r\n\r\n**Examples:** \r\n\r\n *  As CUI custodians, Federal Agencies and their contractors must mark, persist, display, and convey these marks.\r\n *  All CUI receivers must consume, persist, display, and reconvey CUI markings on information further disclosed\r\n\r\n*Usage Note:* \r\n\r\nIn accordance with US 32 CFR Part 2002 and US Executive Order 13556 Controlled Unclassified Information, US Federal Agencies and their contractors are charged with classifying and marking certain information they create as Controlled Unclassified Information (CUI).\r\n\r\nThe following definitions, which are provided for context, are based on terms defined by the CUI Glossary https://www.archives.gov/cui/registry/cui-glossary.html\r\n\r\n *  CUI is defined as \"information in any form that the Government creates or possesses, or that an entity creates or possesses for or on behalf of the Government, that a law, regulation, or Government-wide policy requires or permits an agency to handle using safeguarding or dissemination controls\"\r\n *  Designating CUI occurs when an authorized holder, consistent with US 32 CFR Part 2002 and the CUI Registry, determines that a specific item of information falls into a CUI category or subcategory.\r\n *  The designating agency is the executive branch agency that designates or approves the designation of a specific item of information as CUI.\r\n *  The authorized holder who designates the CUI must make recipients aware of the information's CUI status when disseminating that information.\r\n *  Disseminating occurs when authorized holders provide access, transmit, or transfer CUI to other authorized holders through any means, whether internal or external to the agency.\r\n\r\nOnce designated as CUI, US Federal Agencies and their contractors must assign CUI marks as prescribed by the National Archives and Records Administration (NARA) CUI Registry, and display marks as prescribed by the CUI Marking Handbook.\r\n\r\nCUI markings must be displayed on hard copy, on containers, electronic media, and to end users for IT systems.\r\n\r\nWhen HL7 content is designated as CUI, these computable markings can be interoperably conveyed using HL7 security label CUI tags, and may be included in HL7 text and narrative elements as human readable markings.\r\n\r\n**Impact of CUI markings:**\r\n\r\nCUI Custodians must enforce CUI security controls per applicable CUI policies. Federal agencies and their contractors must adhere to FISMA and NIST SP 800-53 security controls. Custodians, who are not Federal agencies or agency contractors, and are receivers of CUI, must adhere to NIST SP 800-171 security controls and those dictated by the Authorities indicated by the assigned CUI markings.\r\n\r\nFor most participants in US healthcare information exchange, including Federal Agencies and their contractors, additional controls are required by HIPAA Security standards for health information US 42 USC 1320d-2(d)(2) https://www.govinfo.gov/content/pkg/USCODE-2016-title42/pdf/USCODE-2016-title42-chap7-subchapXI-partC-sec1320d-2.pdf\r\n\r\nFederal Agencies and their contractors may be the CUI classifier of original CUI content; or a CUI derivative classifier, which reclassifies CUI content that has been aggregated with other CUI or Unclassified Uncontrolled Information (U) or dissembled from a larger CUI content; or declassifiers, depending on the designating agency's policies.\r\n\r\nApplicable CUI policies include the following and any future applicable updates to policies or laws related to CUI:\r\n\r\n *  Executive Order 13556 https://www.federalregister.gov/articles/2010/11/09/2010-28360/controlled-unclassified-information\r\n *  US 32 CFR Part 2002 https://www.govinfo.gov/content/pkg/CFR-2017-title32-vol6/pdf/CFR-2017-title32-vol6-part2002.pdf\r\n *  NIST SP 800-171 https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r1.pdf\r\n *  NIST SP 800-171A https://doi.org/10.6028/NIST.SP.800-171A\r\n *  CUI Marking Handbook https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf\r\n *  CUI Registry - Health Information Category https://www.archives.gov/cui/registry/category-detail/health-info\r\n *  CUI Registry: Limited Dissemination Controls https://www.archives.gov/cui/registry/limited-dissemination\r\n *  CUI Policy and Guidance https://www.archives.gov/cui/registry/policy-guidance"
                },
                {
                    "code": "DENTPRG",
                    "display": "dental program",
                    "definition": "**Definition:** A public or government health program that administers and funds coverage for dental care to assist program eligible who meet financial and health status criteria."
                },
                {
                    "code": "DISEASEPRG",
                    "display": "public health program",
                    "definition": "**Definition:** A public or government health program that administers and funds coverage for health and social services to assist program eligible who meet financial and health status criteria related to a particular disease.\r\n\r\n**Example:** Reproductive health, sexually transmitted disease, and end renal disease programs."
                },
                {
                    "code": "MENTPRG",
                    "display": "mental health program",
                    "definition": "**Definition:** Government administered and funded mental health program for beneficiaries meeting financial and mental health status criteria. Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process. Payer responsibilities for administering the program may be delegated to contractors.\r\n\r\n**Example:** In the U.S., states receive funding for substance use programs from the Substance Abuse Mental Health Administration (SAMHSA)."
                },
                {
                    "code": "SAFNET",
                    "display": "safety net clinic program",
                    "definition": "**Definition:** Government administered and funded program to support provision of care to underserved populations through safety net clinics.\r\n\r\n**Example:** In the U.S., safety net providers such as federally qualified health centers (FQHC) receive funding under PHSA Section 330 grants administered by the Health Resources and Services Administration."
                },
                {
                    "code": "SUBPRG",
                    "display": "substance use program",
                    "definition": "**Definition:** Government administered and funded substance use program for beneficiaries meeting financial, substance use behavior, and health status criteria. Beneficiaries may be required to enroll as a result of legal proceedings. Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process. Payer responsibilities for administering the program may be delegated to contractors.\r\n\r\n**Example:** In the U.S., states receive funding for substance use programs from the Substance Abuse Mental Health Administration (SAMHSA)."
                },
                {
                    "code": "SUBSIDIZ",
                    "display": "subsidized health program",
                    "definition": "**Definition:** A government health program that provides coverage for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds."
                },
                {
                    "code": "ALGY",
                    "display": "Allergy Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated because of a recorded patient allergy to the proposed product. (Allergies are immune based reactions.)"
                },
                {
                    "code": "INT",
                    "display": "Intolerance Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated because of a recorded patient intolerance to the proposed product. (Intolerances are non-immune based sensitivities.)"
                },
                {
                    "code": "NOAUTH",
                    "display": "no disclosure without subject authorization",
                    "definition": "Prohibition on disclosure without information subject's authorization."
                },
                {
                    "code": "NOCOLLECT",
                    "display": "no collection",
                    "definition": "Prohibition on collection or storage of the information."
                },
                {
                    "code": "NODSCLCD",
                    "display": "no disclosure without consent directive",
                    "definition": "Prohibition on disclosure without organizational approved patient restriction."
                },
                {
                    "code": "NODSCLCDS",
                    "display": "no disclosure without information subject's consent directive",
                    "definition": "Prohibition on disclosure without a consent directive from the information subject."
                },
                {
                    "code": "NOINTEGRATE",
                    "display": "no integration",
                    "definition": "Prohibition on Integration into other records."
                },
                {
                    "code": "NOLIST",
                    "display": "no unlisted entity disclosure",
                    "definition": "Prohibition on disclosure except to entities on specific access list."
                },
                {
                    "code": "NOMOU",
                    "display": "no disclosure without MOU",
                    "definition": "Prohibition on disclosure without an interagency service agreement or memorandum of understanding (MOU)."
                },
                {
                    "code": "NOORGPOL",
                    "display": "no disclosure without organizational authorization",
                    "definition": "Prohibition on disclosure without organizational authorization."
                },
                {
                    "code": "NOPAT",
                    "display": "no disclosure to patient, family or caregivers without attending provider's authorization",
                    "definition": "Prohibition on disclosing information to patient, family or caregivers without attending provider's authorization.\r\n\r\n*Usage Note:* The information may be labeled with the ActInformationSensitivity TBOO code, triggering application of this RefrainPolicy code as a handling caveat controlling access.\r\n\r\nMaps to FHIR NOPAT: Typically, this is used on an Alert resource, when the alert records information on patient abuse or non-compliance.\r\n\r\nFHIR print name is \"keep information from patient\". Maps to the French realm - code: INVISIBLE\\_PATIENT.\r\n\r\n *  displayName: Document non visible par le patient\r\n *  codingScheme: 1.2.250.1.213.1.1.4.13\r\n\r\nFrench use case: A label for documents that the author chose to hide from the patient until the content can be disclose to the patient in a face to face meeting between a healthcare professional and the patient (in French law some results like cancer diagnosis or AIDS diagnosis must be announced to the patient by a healthcare professional and should not be find out by the patient alone)."
                },
                {
                    "code": "NOPERSISTP",
                    "display": "no collection beyond purpose of use",
                    "definition": "Prohibition on collection of the information beyond time necessary to accomplish authorized purpose of use is prohibited."
                },
                {
                    "code": "NORDSCLCD",
                    "display": "no redisclosure without consent directive",
                    "definition": "Prohibition on redisclosure without patient consent directive."
                },
                {
                    "code": "NORDSLCD",
                    "display": "no redisclosure without consent directive",
                    "definition": "Prohibition on redisclosure without patient consent directive."
                },
                {
                    "code": "NORDSCLCDS",
                    "display": "no redisclosure without information subject's consent directive",
                    "definition": "Prohibition on redisclosure without a consent directive from the information subject."
                },
                {
                    "code": "NORDSCLW",
                    "display": "no disclosure without jurisdictional authorization",
                    "definition": "Prohibition on disclosure without authorization under jurisdictional law."
                },
                {
                    "code": "NORELINK",
                    "display": "no relinking",
                    "definition": "Prohibition on associating de-identified or pseudonymized information with other information in a manner that could or does result in disclosing information intended to be masked."
                },
                {
                    "code": "NOREUSE",
                    "display": "no reuse beyond purpose of use",
                    "definition": "Prohibition on use of the information beyond the purpose of use initially authorized."
                },
                {
                    "code": "NOVIP",
                    "display": "no unauthorized VIP disclosure",
                    "definition": "Prohibition on disclosure except to principals with access permission to specific VIP information."
                },
                {
                    "code": "ORCON",
                    "display": "no disclosure without originator authorization",
                    "definition": "Prohibition on disclosure except as permitted by the information originator."
                },
                {
                    "code": "WELLREMLE",
                    "display": "wellness reminder list entry",
                    "definition": "**Description:** A person enters a wellness or preventive care reminder for a given patient."
                },
                {
                    "code": "WELLREMLREV",
                    "display": "wellness reminder list review",
                    "definition": "**Description:** A person reviews a list of wellness or preventive care reminders for a given patient."
                },
                {
                    "code": "MAXOCCURS",
                    "display": "repetitions above maximum",
                    "definition": "**Description:**The number of repeating elements is above the maximum number of repetitions allowed."
                },
                {
                    "code": "MINOCCURS",
                    "display": "repetitions below minimum",
                    "definition": "**Description:**The number of repeating elements is below the minimum number of repetitions allowed."
                },
                {
                    "code": "RSDID",
                    "display": "de-identified information access",
                    "definition": "**Definition:** Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance."
                },
                {
                    "code": "RSREID",
                    "display": "re-identifiable information access",
                    "definition": "**Definition:** Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent.\r\n\r\n**Example::** Where there is a need to inform the subject of potential health issues."
                },
                {
                    "code": "RFC",
                    "display": "Refill - Complete",
                    "definition": "A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)"
                },
                {
                    "code": "RFF",
                    "display": "Refill (First fill this facility)",
                    "definition": "The first fill against an order that has already been filled at least once at another facility."
                },
                {
                    "code": "RFP",
                    "display": "Refill - Part Fill",
                    "definition": "A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)"
                },
                {
                    "code": "RFS",
                    "display": "refill partial strength",
                    "definition": "A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "TB",
                    "display": "Trial Balance",
                    "definition": "A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided."
                },
                {
                    "code": "RFCS",
                    "display": "refill complete partial strength",
                    "definition": "A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "RFFS",
                    "display": "refill partial strength (first fill this facility)",
                    "definition": "The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "RFPS",
                    "display": "refill part fill partial strength",
                    "definition": "A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "FALLRISK",
                    "display": "falls risk assessment instrument task",
                    "definition": "A person reviews a Falls Risk Assessment Instrument report of a given patient."
                },
                {
                    "code": "RALG",
                    "display": "Related Allergy Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated because of a recorded patient allergy to a cross-sensitivity related product. (Allergies are immune based reactions.)"
                },
                {
                    "code": "RAR",
                    "display": "Related Prior Reaction Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated because of a recorded prior adverse reaction to a cross-sensitivity related product."
                },
                {
                    "code": "RINT",
                    "display": "Related Intolerance Alert",
                    "definition": "Proposed therapy may be inappropriate or contraindicated because of a recorded patient intolerance to a cross-sensitivity related product. (Intolerances are non-immune based sensitivities.)"
                },
                {
                    "code": "SECALTINTOBS",
                    "display": "security alteration integrity observation",
                    "definition": "Type of security metadata observation made about the alteration integrity of an IT resource (data, information object, service, or system capability), which indicates the mechanism used for authorized transformations of the resource.\r\n\r\n**Examples:** Types of security alteration integrity observation metadata, which may value the observation with a code used to indicate the mechanism used for authorized transformation of an IT resource, including:\r\n\r\n *  translation\r\n *  syntactic transformation\r\n *  semantic mapping\r\n *  redaction\r\n *  masking\r\n *  pseudonymization\r\n *  anonymization"
                },
                {
                    "code": "SECDATINTOBS",
                    "display": "security data integrity observation",
                    "definition": "Type of security metadata observation made about the data integrity of an IT resource (data, information object, service, or system capability), which indicates the security mechanism used to preserve resource accuracy and consistency. Data integrity is defined by ISO 22600-23.3.21 as: \"The property that data has not been altered or destroyed in an unauthorized manner\", and by ISO/IEC 2382-8: The property of data whose accuracy and consistency are preserved regardless of changes made.\"\r\n\r\n**Examples:** Types of security data integrity observation metadata, which may value the observation, include cryptographic hash function and digital signature."
                },
                {
                    "code": "SECINTCONOBS",
                    "display": "security integrity confidence observation",
                    "definition": "Type of security metadata observation made about the integrity confidence of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.\r\n\r\n**Examples:** Types of security integrity confidence observation metadata, which may value the observation, include highly reliable, uncertain reliability, and not reliable.\r\n\r\n*Usage Note:* A security integrity confidence observation on an Act may indicate that a valued Act.uncertaintycode attribute has been overridden by the entity responsible for ascribing the SecurityIntegrityConfidenceObservationValue. This supports the business requirements for increasing or decreasing the assessment of the reliability or trustworthiness of an IT resource based on parameters beyond the original assignment of an Act statement level of uncertainty."
                },
                {
                    "code": "SECINTPRVOBS",
                    "display": "security integrity provenance observation",
                    "definition": "Type of security metadata observation made about the provenance integrity of an IT resource (data, information object, service, or system capability), which indicates the lifecycle completeness of an IT resource in terms of workflow status such as its creation, modification, suspension, and deletion; locations in which the resource has been collected or archived, from which it may be retrieved, and the history of its distribution and disclosure. Integrity provenance metadata about an IT resource may be used to assess its veracity, reliability, and trustworthiness.\r\n\r\n**Examples:** Types of security integrity provenance observation metadata, which may value the observation about an IT resource, include:\r\n\r\n *  completeness or workflow status, such as authentication\r\n *  the entity responsible for original authoring or informing about an IT resource\r\n *  the entity responsible for a report or assertion about an IT resource relayed \"second-hand\"\r\n *  the entity responsible for excerpting, transforming, or compiling an IT resource"
                },
                {
                    "code": "SECINTSTOBS",
                    "display": "security integrity status observation",
                    "definition": "Type of security metadata observation made about the integrity status of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Indicates the completeness of an IT resource in terms of workflow status, which may impact users that are authorized to access and use the resource.\r\n\r\n**Examples:** Types of security integrity status observation metadata, which may value the observation, include codes from the HL7 DocumentCompletion code system such as legally authenticated, in progress, and incomplete."
                },
                {
                    "code": "SECINTPRVABOBS",
                    "display": "security integrity provenance asserted by observation",
                    "definition": "Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that made assertions about the resource. The asserting entity may not be the original informant about the resource.\r\n\r\n**Examples:** Types of security integrity provenance asserted by observation metadata, which may value the observation, including:\r\n\r\n *  assertions about an IT resource by a patient\r\n *  assertions about an IT resource by a clinician\r\n *  assertions about an IT resource by a device"
                },
                {
                    "code": "SECINTPRVRBOBS",
                    "display": "security integrity provenance reported by observation",
                    "definition": "Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that reported the existence of the resource. The reporting entity may not be the original author of the resource.\r\n\r\n**Examples:** Types of security integrity provenance reported by observation metadata, which may value the observation, include:\r\n\r\n *  reports about an IT resource by a patient\r\n *  reports about an IT resource by a clinician\r\n *  reports about an IT resource by a device"
                },
                {
                    "code": "SECCATOBS",
                    "display": "security category observation",
                    "definition": "Type of security metadata observation made about the category of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security category metadata is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: \"A nonhierarchical grouping of sensitive information used to control access to data more finely than with hierarchical security classification alone.\"\r\n\r\n*Rationale:* A security category observation supports requirement to specify the type of IT resource to facilitate application of appropriate levels of information security according to a range of levels of impact or consequences that might result from the unauthorized disclosure, modification, or use of the information or information system. A resource is assigned to a specific category of information (e.g., privacy, medical, proprietary, financial, investigative, contractor sensitive, security management) defined by an organization or in some instances, by a specific law, Executive Order, directive, policy, or regulation. \\[FIPS 199\\]\r\n\r\n**Examples:** Types of security categories include:\r\n\r\n *  Compartment: A division of data into isolated blocks with separate security controls for the purpose of reducing risk. (ISO 2382-8). A security label tag that \"segments\" an IT resource by indicating that access and use is restricted to members of a defined community or project. (HL7 Healthcare Classification System)\r\n *  Sensitivity: The characteristic of an IT resource which implies its value or importance and may include its vulnerability. (ISO 7492-2) Privacy metadata for information perceived as undesirable to share. (HL7 Healthcare Classification System)"
                },
                {
                    "code": "SECCLASSOBS",
                    "display": "security classification observation",
                    "definition": "Type of security metadata observation made about the classification of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security classification is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: \"The determination of which specific degree of protection against access the data or information requires, together with a designation of that degree of protection.\" Security classification metadata is based on an analysis of applicable policies and the risk of financial, reputational, or other harm that could result from unauthorized disclosure.\r\n\r\n*Rationale:* A security classification observation may indicate that the confidentiality level indicated by an Act or Role confidentiality attribute has been overridden by the entity responsible for ascribing the SecurityClassificationObservationValue. This supports the business requirement for increasing or decreasing the level of confidentiality (classification or declassification) based on parameters beyond the original assignment of an Act or Role confidentiality.\r\n\r\n**Examples:** Types of security classification include: HL7 Confidentiality Codes such as very restricted, unrestricted, and normal. Intelligence community examples include top secret, secret, and confidential.\r\n\r\n*Usage Note:* Security classification observation type codes designate security label field types, which are valued with an applicable SecurityClassificationObservationValue code as the \"security label tag\"."
                },
                {
                    "code": "SECCONOBS",
                    "display": "security control observation",
                    "definition": "Type of security metadata observation made about the control of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security control metadata convey instructions to users and receivers for secure distribution, transmission, and storage; dictate obligations or mandated actions; specify any action prohibited by refrain policy such as dissemination controls; and stipulate the permissible purpose of use of an IT resource.\r\n\r\n*Rationale:* A security control observation supports requirement to specify applicable management, operational, and technical controls (i.e., safeguards or countermeasures) prescribed for an information system to protect the confidentiality, integrity, and availability of the system and its information. \\[FIPS 199\\]\r\n\r\n**Examples:** Types of security control metadata include:\r\n\r\n *  handling caveats\r\n *  dissemination controls\r\n *  obligations\r\n *  refrain policies\r\n *  purpose of use constraints"
                },
                {
                    "code": "SECINTOBS",
                    "display": "security integrity observation",
                    "definition": "Type of security metadata observation made about the integrity of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.\r\n\r\n*Rationale:* A security integrity observation supports the requirement to guard against improper information modification or destruction, and includes ensuring information non-repudiation and authenticity. (44 U.S.C., SEC. 3542)\r\n\r\n**Examples:** Types of security integrity metadata include:\r\n\r\n *  Integrity status, which indicates the completeness or workflow status of an IT resource (data, information object, service, or system capability)\r\n *  Integrity confidence, which indicates the reliability and trustworthiness of an IT resource\r\n *  Integrity control, which indicates pertinent handling caveats, obligations, refrain policies, and purpose of use for the resource\r\n *  Data integrity, which indicate the security mechanisms used to ensure that the accuracy and consistency are preserved regardless of changes made (ISO/IEC DIS 2382-8)\r\n *  Alteration integrity, which indicate the security mechanisms used for authorized transformations of the resource\r\n *  Integrity provenance, which indicates the entity responsible for a report or assertion relayed \"second-hand\" about an IT resource"
                },
                {
                    "code": "SECTRSTOBS",
                    "display": "SECTRSTOBS",
                    "definition": "An observation identifying trust metadata about an IT resource (data, information object, service, or system capability), which may be used as a trust attribute to populate a computable trust policy, trust credential, trust assertion, or trust label field in a security label or trust policy, which are principally used for authentication, authorization, and access control decisions."
                },
                {
                    "code": "TRSTACCRDOBS",
                    "display": "trust accreditation observation",
                    "definition": "Type of security metadata observation made about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework."
                },
                {
                    "code": "TRSTAGREOBS",
                    "display": "trust agreement observation",
                    "definition": "Type of security metadata observation made about privacy and security requirements with which a security domain must comply. \\[ISO IEC 10181-1\\]"
                },
                {
                    "code": "TRSTCERTOBS",
                    "display": "trust certificate observation",
                    "definition": "Type of security metadata observation made about a set of security-relevant data issued by a security authority or trusted third party, together with security information which is used to provide the integrity and data origin authentication services for an IT resource (data, information object, service, or system capability). \\[Based on ISO IEC 10181-1\\]\r\n\r\n**For example,**\r\n\r\n *  A Certificate Policy (CP), which is a named set of rules that indicates the applicability of a certificate to a particular community and/or class of application with common security requirements. For example, a particular Certificate Policy might indicate the applicability of a type of certificate to the authentication of electronic data interchange transactions for the trading of goods within a given price range. \\[Trust Service Principles and Criteria for Certification Authorities Version 2.0 March 2011 Copyright 2011 by Canadian Institute of Chartered Accountants.\r\n *  A Certificate Practice Statement (CSP), which is a statement of the practices which an Authority employs in issuing and managing certificates. \\[Trust Service Principles and Criteria for Certification Authorities Version 2.0 March 2011 Copyright 2011 by Canadian Institute of Chartered Accountants.\\]"
                },
                {
                    "code": "TRSTFWKOBS",
                    "display": "trust framework observation",
                    "definition": "Type of security metadata observation made about a complete set of contracts, regulations or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. \\[Kantara Initiative\\]"
                },
                {
                    "code": "TRSTLOAOBS",
                    "display": "trust assurance observation",
                    "definition": "Type of security metadata observation made about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol."
                },
                {
                    "code": "TRSTMECOBS",
                    "display": "trust mechanism observation",
                    "definition": "Type of security metadata observation made about a security architecture system component that supports enforcement of security policies."
                },
                {
                    "code": "ConfidentialMark",
                    "display": "confidential mark",
                    "definition": "A displayed mark rendered as \"Confidential\", which indicates to end users that the electronic or hardcopy information they are viewing must be protected at a level of protection as dictated by applicable policy.\r\n\r\nMay be used to indicate proprietary or classified information that is, for example, business, intelligence, or project related, e.g., secret ingredients in a therapeutic substance; location of disaster health facilities and providers, or the name of a manufacturer or project contractor. Example use cases include a display to alert authorized business system users that they are viewing additionally protected proprietary and business confidential information deemed proprietary under an applicable jurisdictional or organizational policy.\r\n\r\n*Usage Note:* \r\n\r\nThe ConfidentialMark (confidential mark) description is based on the HL7 Confidentiality Concept Domain: Types of privacy metadata classifying an IT resource (data, information object, service, or system capability) according to its level of sensitivity, which is based on an analysis of applicable privacy policies and the risk of financial, reputational, or other harm to an individual or entity that could result if made available or disclosed to unauthorized individuals, entities, or processes.\r\n\r\n*Usage Note:* Confidentiality codes may be used in security labels and privacy markings to classify IT resources based on sensitivity to indicate the obligation of a custodian or receiver to ensure that the protected resource is not made available or disclosed to individuals, entities, or processes (security principals) unless authorized per applicable policies. Confidentiality codes may also be used in the clearances of initiators requesting access to protected resources.\r\n\r\nMap: Definition aligns with ISO 7498-2:1989 - Confidentiality is the property that information is not made available or disclosed to unauthorized individuals, entities, or processes."
                },
                {
                    "code": "COPYMark",
                    "display": "copy of original mark",
                    "definition": "A displayed mark indicating that the electronic or hardcopy information is a copy of an authoritative source for the information. The copy is not considered authoritative but is a duplicate of the authoritative content.\r\n\r\n*Usage Note:* Applicable policy will dictate how the COPY mark will be displayed. Typical renderings include the marking appearing at the top or \"banner\" of electronic or hardcopy pages, or as watermarks set diagonally across each page."
                },
                {
                    "code": "DeliverToAddresseeOnlyMark",
                    "display": "deliver only to addressee mark",
                    "definition": "A displayed mark on an electronic transmission or physical container such as an electronic transmittal wrapper, batch file, message header, or a physical envelop or package indicating that the contents, whether electronic or hardcopy information, must only be delivered to the authorized recipient(s) named in the address.\r\n\r\n*Usage Note:* Required by US 32 CRF Part 2002 for container storing or transmitting CUI."
                },
                {
                    "code": "RedisclosureProhibitionMark",
                    "display": "prohibition against redisclosure mark",
                    "definition": "A displayed mark rendered to end users as a prescribed text warning that the electronic or hardcopy information shall not be further disclosed without consent of the subject of the information. For example, in order to warn a recipient of 42 CFR Part 2 information of the redisclosure restrictions, the rule mandates that end users receive a written prohibition against redisclosure unless authorized by patient consent or otherwise permitted by Part 2. See 42 CFR §  2.32 Prohibition on re-disclosure. (a)Notice to accompany disclosure. Each disclosure made with the patient's written consent must be accompanied by one of the following written statements: (1) This information has been disclosed to you from records protected by federal confidentiality rules ( 42 CFR part 2). The federal rules prohibit you from making any further disclosure of information in this record that identifies a patient as having or having had a substance use disorder either directly, by reference to publicly available information, or through verification of such identification by another person unless further disclosure is expressly permitted by the written consent of the individual whose information is being disclosed or as otherwise permitted by 42 CFR part 2. A general authorization for the release of medical or other information is NOT sufficient for this purpose (see §  2.31). The federal rules restrict any use of the information to investigate or prosecute with regard to a crime any patient with a substance use disorder, except as provided at § §  2.12(c)(5) and 2.65; or (2) 42 CFR part 2 prohibits unauthorized disclosure of these records. https://www.law.cornell.edu/cfr/text/42/2.32\r\n\r\n*Usage Note:* Example of marking requirement from SAMHSA FAQ Response to question 13:\r\n\r\nWould a logon or splash page notification on an HIO's portal that contains the Part 2 notice prohibiting redisclosure be sufficient to meet Part 2's requirement that disclosures made with patient consent be accompanied by such a statement?\r\n\r\nNo. Part 2 requires each disclosure made with written patient consent to be accompanied by a written statement that the information disclosed is protected by federal law and that the recipient cannot make any further disclosure of it unless permitted by the regulations (42 CFR §  2.32). A logon page is the page where a user logs onto a computer system; a splash page is an introductory page to a web site. A logon or splash page notification on a HIO's portal including the statement as required by §  2.32 would not be sufficient notification regarding prohibitions on redisclosure since it would not accompany a specific disclosure. The notification must be tied to the Part 2 information being disclosed in order to ensure that the recipient of that information knows that specific information is protected by Part 2 and cannot be redisclosed except as authorized by the express written consent of the person to whom it pertains or as otherwise permitted by Part 2. https://www.samhsa.gov/about-us/who-we-are/laws-regulations/confidentiality-regulations-faqs"
                },
                {
                    "code": "RestrictedConfidentialityMark",
                    "display": "restricted confidentiality mark",
                    "definition": "A displayed mark rendered to end users as \"Restricted Confidentiality\", which indicates that the electronic or hardcopy information they are viewing, must be protected at a restricted level of confidentiality protection as defined by HL7 Confidentiality code \"R\" (restricted). Examples: Includes information that is additionally protected such as sensitive conditions mental health, HIV, substance abuse, domestic violence, child abuse, genetic disease, and reproductive health; or sensitive demographic information such as a patient's standing as an employee or a celebrity. Use cases include a display to alert authorized EHR users that they are viewing additionally protected health information deemed sensitive by an applicable jurisdictional, organizational, or personal privacy policy.\r\n\r\n*Usage Note:* The definition is based on HL7 Confidentiality code \"R\" (restricted), which is described as:\r\n\r\nPrivacy metadata indicating highly sensitive, potentially stigmatizing information, which presents a high risk to the information subject if disclosed without authorization. May be pre-empted by jurisdictional law, e.g., for public health reporting or emergency treatment. Foundational definitions of Confidentiality: From HL7 Confidentiality Concept Domain: Types of privacy metadata classifying an IT resource (data, information object, service, or system capability) according to its level of sensitivity, which is based on an analysis of applicable privacy policies and the risk of financial, reputational, or other harm to an individual or entity that could result if made available or disclosed to unauthorized individuals, entities, or processes.\r\n\r\nUsage Note from HL7 Confidentiality code \"R\": Confidentiality codes may be used in security labels and privacy markings to classify IT resources based on sensitivity to indicate the obligation of a custodian or receiver to ensure that the protected resource is not made available or disclosed to individuals, entities, or processes (security principals) unless authorized per applicable policies. Confidentiality codes may also be used in the clearances of initiators requesting access to protected resources.\r\n\r\nThis metadata indicates that the receiver may be obligated to comply with applicable, prevailing (default) jurisdictional privacy law or disclosure authorization.\r\n\r\nMap: Definition aligns with ISO 7498-2:1989 - Confidentiality is the property that information is not made available or disclosed to unauthorized individuals, entities, or processes. Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care: Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR). Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations."
                },
                {
                    "code": "DRAFTMark",
                    "display": "Draft Mark",
                    "definition": "A displayed mark indicating that the electronic or hard-copy information is still under development and is not yet considered to be ready for normal use."
                },
                {
                    "code": "AUTHPOL",
                    "display": "authorization policy",
                    "definition": "Authorisation policies are essentially security policies related to access-control and specify what activities a subject is permitted or forbidden to do, to a set of target objects. They are designed to protect target objects so are interpreted by access control agents or the run-time systems at the target system.\r\n\r\nA positive authorisation policy defines the actions that a subject is permitted to perform on a target. A negative authorisation policy specifies the actions that a subject is forbidden to perform on a target. Positive authorisation policies may also include filters to transform the parameters associated with their actions. (Based on PONDERS)"
                },
                {
                    "code": "DELEPOL",
                    "display": "delegation policy",
                    "definition": "Delegation policies specify which actions subjects are allowed to delegate to others. A delegation policy thus specifies an authorisation to delegate. Subjects must already possess the access rights to be delegated.\r\n\r\nDelegation policies are aimed at subjects delegating rights to servers or third parties to perform actions on their behalf and are not meant to be the means by which security administrators would assign rights to subjects. A negative delegation policy identifies what delegations are forbidden.\r\n\r\nA Delegation policy specifies the authorisation policy from which delegated rights are derived, the grantors, which are the entities which can delegate these access rights, and the grantees, which are the entities to which the access rights can be delegated. There are two types of delegation policy, positive and negative. (Based on PONDERS)"
                },
                {
                    "code": "ObligationPolicy",
                    "display": "obligation policy",
                    "definition": "Conveys the mandated workflow action that an information custodian, receiver, or user must perform.\r\n\r\n*Usage Notes:* Per ISO 22600-2, ObligationPolicy instances 'are event-triggered and define actions to be performed by manager agent'. Per HL7 Composite Security and Privacy Domain Analysis Model: This value set refers to the action required to receive the permission specified in the privacy rule. Per OASIS XACML, an obligation is an operation specified in a policy or policy that is performed in conjunction with the enforcement of an access control decision."
                },
                {
                    "code": "PrivacyMark",
                    "display": "privacy mark",
                    "definition": "An abstract code for human readable marks indicating, e.g., the level of confidentiality protection, an authorized compartment, the integrity, or the handling instruction required by applicable policy. Such markings must be displayed as directed by applicable policy on electronically rendered information content and any electronic transmittal envelope or container; or on hardcopy information and any physical transmittal envelope or container.\r\n\r\nExamples of protocols for marking displays on electronic or hardcopy rendered content: Across the top or \"banner\" of each page ; as a watermark placed diagonally cross each page; at the bottom or \"footer\" of each page; and may be displayed at the beginning of any portion within the content that required markings different than other portions of the content. The banner or top of page marking typically acts as a \"high watermark\" by including all of the markings made on any marked portions within the entirety of the information content.\r\n\r\n*Usage Note:* A \"Privacy Mark\" is a Security Control Observation (SECCONOBS) named tag set as specified by the HL7 Privacy and Security Classification System (HCS). A Privacy Mark Named Tag Set is valued with a Privacy Mark leaf code \"tag\", which is a member of the Security Control Observation Value (\\_SecurityObservationValue) tag set. Related Security Control Observation named tag sets are Purpose of Use, Obligation Policy, and Refrain Policy, each with their own Security Control Observation Value tag sets.\r\n\r\nFoundational standard definitions: ISO 22600-3 Section A.3.4.3 - If present, the privacy-mark is not used for access control. The content of the privacy-mark may be defined by the security policy in force (identified by the security-policy-identifier) which may define a list of values to be used. Alternately, the value may be determined by the originator of the security-label. IEEE Security Glossary Compendium 93- CESG Memorandum No.1 Issue 1.2 Oct 1992 - Human readable word or phrase acting as an indicator of all or part of the security constraints that apply to a document so marked. NOTE: A machine readable representation of a marking.\r\n\r\n*Comment:* While policies requiring creators, processors, custodians, senders or recipients apply, enforce, and persist applicable Privacy Marks may be dictated by a jurisdiction, organization or personal privacy, security, or integrity policy, those required to comply may be governed under different policies, so compliance may need to be enforced through trust contracts. For example, information content marked with GDPR related policies may require adherence by processors or recipients outside of the European Union. For this reason, this code system is likely to evolve with the inclusion of multiple policy domains needing to communicate encoded policies in a standard, interoperable manner."
                },
                {
                    "code": "RefrainPolicy",
                    "display": "refrain policy",
                    "definition": "Conveys prohibited actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances.\r\n\r\n*Usage Notes:* ISO 22600-2 species that a Refrain Policy \"defines actions the subjects must refrain from performing\". Per HL7 Composite Security and Privacy Domain Analysis Model: May be used to indicate that a specific action is prohibited based on specific access control attributes e.g., purpose of use, information type, user role, etc."
                },
                {
                    "code": "BH",
                    "display": "behavioral health information sensitivity",
                    "definition": "Policy for handling information related to behavioral and emotional disturbances affecting social adjustment and physical health, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "MH",
                    "display": "mental health information sensitivity",
                    "definition": "Policy for handling information related to psychological disorders, which is afforded heightened confidentiality. Mental health information may be deemed specifically sensitive and distinct from physical health, substance use disorders, and behavioral disabilities and disorders in some jurisdictions.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "PSY",
                    "display": "psychiatry disorder information sensitivity",
                    "definition": "Policy for handling psychiatry psychiatric disorder information, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "PSYTHPN",
                    "display": "psychotherapy note information sensitivity",
                    "definition": "Policy for handling psychotherapy note information, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* In some jurisdiction, disclosure of psychotherapy notes requires patient consent.\r\n\r\nIf there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code."
                },
                {
                    "code": "SUD",
                    "display": "substance use disorder information sensitivity",
                    "definition": "Policy for handling information related to alcohol or drug use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "SUBSIDMC",
                    "display": "subsidized managed care program",
                    "definition": "**Definition:** A government health program that provides coverage through managed care contracts for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.\r\n\r\n*Discussion:* The structure and business processes for underwriting and administering a subsidized managed care program is further specified by the Underwriter and Payer Role.class and Role.code."
                },
                {
                    "code": "SUBSUPP",
                    "display": "subsidized supplemental health program",
                    "definition": "**Definition:** A government health program that provides coverage for health services to persons meeting eligibility criteria for a supplemental health policy or program such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.\r\n\r\n**Example:** Supplemental health coverage program may cover the cost of a health program or policy financial participations, such as the copays and the premiums, and may provide coverage for services in addition to those covered under the supplemented health program or policy. In the U.S., Medicaid programs may pay the premium for a covered party who is also covered under the Medicare program or a private health policy.\r\n\r\n*Discussion:* The structure and business processes for underwriting and administering a subsidized supplemental retiree health program is further specified by the Underwriter and Payer Role.class and Role.code."
                },
                {
                    "code": "ETHUD",
                    "display": "alcohol use disorder information sensitivity",
                    "definition": "Policy for handling information related to alcohol use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "OPIOIDUD",
                    "display": "opioid use disorder information sensitivity",
                    "definition": "Policy for handling information related to opioid use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.\r\n\r\n*Usage Note:* If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code."
                },
                {
                    "code": "TBS",
                    "display": "trial balance partial strength",
                    "definition": "A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)."
                },
                {
                    "code": "ALRTENDLATE",
                    "display": "end too late alert",
                    "definition": "**Definition:**Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy."
                },
                {
                    "code": "ALRTSTRTLATE",
                    "display": "start too late alert",
                    "definition": "**Definition:**Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition."
                },
                {
                    "code": "INTERVAL",
                    "display": "outside requested time",
                    "definition": "**Definition:**The therapy action is being performed outside the bounds of the time period requested"
                },
                {
                    "code": "MINFREQ",
                    "display": "too soon within frequency based on the usage",
                    "definition": "**Definition:**The therapy action is being performed too soon after the previous occurrence based on the requested frequency"
                },
                {
                    "code": "DRG",
                    "display": "Drug Interaction Alert",
                    "definition": "Proposed therapy may interact with an existing or recent drug therapy"
                },
                {
                    "code": "NHP",
                    "display": "Natural Health Product Alert",
                    "definition": "Proposed therapy may interact with existing or recent natural health product therapy"
                },
                {
                    "code": "NONRX",
                    "display": "Non-Prescription Interaction Alert",
                    "definition": "Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)"
                },
                {
                    "code": "SALE",
                    "display": "Sale",
                    "definition": "Transfer of ownership for a product for financial compensation."
                },
                {
                    "code": "BUS",
                    "display": "business constraint violation",
                    "definition": "**Description:**A local business rule relating multiple elements has been violated."
                },
                {
                    "code": "CODE_INVAL",
                    "display": "code is not valid",
                    "definition": "**Description:**The specified code is not valid against the list of codes allowed for the element."
                },
                {
                    "code": "FORMAT",
                    "display": "invalid format",
                    "definition": "**Description:**The element does not follow the formatting or type rules defined for the field."
                },
                {
                    "code": "ILLEGAL",
                    "display": "illegal",
                    "definition": "**Description:**The request is missing elements or contains elements which cause it to not meet the legal standards for actioning."
                },
                {
                    "code": "LEN_RANGE",
                    "display": "length out of range",
                    "definition": "**Description:**The length of the data specified falls out of the range defined for the element."
                },
                {
                    "code": "MISSCOND",
                    "display": "conditional element missing",
                    "definition": "**Description:**The specified element must be specified with a non-null value under certain conditions. In this case, the conditions are true but the element is still missing or null."
                },
                {
                    "code": "MISSMAND",
                    "display": "mandatory element missing",
                    "definition": "**Description:**The specified element is mandatory and was not included in the instance."
                },
                {
                    "code": "NODUPS",
                    "display": "duplicate values are not permitted",
                    "definition": "**Description:**More than one element with the same value exists in the set. Duplicates not permission in this set in a set."
                },
                {
                    "code": "NOPERSIST",
                    "display": "element will not be persisted",
                    "definition": "**Description:** Element in submitted message will not persist in data storage based on detected issue."
                },
                {
                    "code": "REP_RANGE",
                    "display": "repetitions out of range",
                    "definition": "**Description:**The number of repeating elements falls outside the range of the allowed number of repetitions."
                },
                {
                    "code": "AVAILABLE",
                    "display": "Available Volume",
                    "definition": "The available quantity of specimen. This is the current quantity minus any planned consumption (e.g., tests that are planned)"
                },
                {
                    "code": "CONSUMPTION",
                    "display": "Consumption Volume",
                    "definition": "The quantity of specimen that is used each time the equipment uses this substance"
                },
                {
                    "code": "CURRENT",
                    "display": "Current Volume",
                    "definition": "The current quantity of the specimen, i.e., initial quantity minus what has been actually used."
                },
                {
                    "code": "INITIAL",
                    "display": "Initial Volume",
                    "definition": "The initial quantity of the specimen in inventory"
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

module.exports = ActCode;
