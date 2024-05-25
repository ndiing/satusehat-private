const DB = require("../../../lib/sqlite");

class RoleCode extends DB {
    constructor() {
        super("RoleCode");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "_AffiliationRoleType",
                    "display": "AffiliationRoleType",
                    "definition": "Concepts characterizing the type of association formed by player and scoper when there is a recognized Affiliate role by which the two parties are related.\r\n\r\n*Examples:* Business Partner, Business Associate, Colleague"
                },
                {
                    "code": "_CertifiedEntityType",
                    "display": "CertifiedEntityType",
                    "definition": "Defines types of certifications for all entities"
                },
                {
                    "code": "_CitizenRoleType",
                    "display": "CitizenRoleType",
                    "definition": "A role type used to qualify a person's legal status within a country or nation."
                },
                {
                    "code": "_ContactRoleType",
                    "display": "ContactRoleType",
                    "definition": "Types of contact for Role code \"CON\""
                },
                {
                    "code": "_IdentifiedEntityType",
                    "display": "IdentifiedEntityType",
                    "definition": "**Definition:** A code representing the type of identifier that has been assigned to the identified entity (IDENT).\r\n\r\n**Examples:** Example values include Social Insurance Number, Product Catalog ID, Product Model Number."
                },
                {
                    "code": "_LivingSubjectProductionClass",
                    "display": "LivingSubjectProductionClass",
                    "definition": "Code indicating the primary use for which a living subject is bred or grown"
                },
                {
                    "code": "_MedicationGeneralizationRoleType",
                    "display": "MedicationGeneralizationRoleType",
                    "definition": "Identifies the specific hierarchical relationship between the playing and scoping medications.\r\n\r\n*Examples:* Generic, Generic Formulation, Therapeutic Class, etc."
                },
                {
                    "code": "_MemberRoleType",
                    "display": "MemberRoleType",
                    "definition": "Types of membership for Role code \"MBR\""
                },
                {
                    "code": "_PolicyOrProgramCoverageRoleType",
                    "display": "PolicyOrProgramCoverageRoleType",
                    "definition": "**Description:** A role recognized through the eligibility of an identified party for benefits covered under an insurance policy or a program based on meeting eligibility criteria.\r\n\r\nEligibility as a covered party may be conditioned on the party meeting criteria to qualify for coverage under a policy or program, which may be mandated by law. These criteria may be:\r\n\r\n1.  The sole basis for coverage, e.g., being differently abled may qualify a person for disability coverage\r\n2.  May more fully qualify a covered party role e.g, being differently abled may qualify an adult child as a dependent\r\n3.  May impact the level of coverage for a covered party under a policy or program, e.g., being differently abled may qualify a program eligible for additional benefits.\r\n\r\n**Discussion:** The Abstract Value Set \"CoverageRoleType\", which was developed for use in the Canadian realm \"pre-coordinate\" coverage roles with other roles that a covered party must play in order to be eligible for coverage, e.g., \"handicapped dependent\". These role.codes may only be used with COVPTY to avoid overlapping concepts that would result from using them to specify the specializations of COVPTY, e.g., the role.class DEPEN should not be used with the role.code family dependent because that relationship has overlapping concepts due to the role.code precoodination and is conveyed in FICO with the personal relationship role that has a PART role link to the covered party role. For the same reasons, the role.class DEPEN should not be used with the role.code HANDIC (handicapped dependent); the role.code DIFFABLE (differently abled) should be used instead.\r\n\r\nIn summary, the coded concepts in the Abstract Value Set \"CoveredPartyRoleType\" can be \"post-coordinated\" with the \"RoleClassCoveredParty\" Abstract Value Set. Decoupling these concepts is intended to support an expansive range of covered party concepts and their semantic comparability."
                },
                {
                    "code": "_ResearchSubjectRoleBasis",
                    "display": "ResearchSubjectRoleBasis",
                    "definition": "Specifies the administrative functionality within a formal experimental design for which the ResearchSubject role was established. Examples: screening - role is used for pre-enrollment evaluation portion of the design; enrolled - role is used for subjects admitted to the active treatment portion of the design."
                },
                {
                    "code": "_ServiceDeliveryLocationRoleType",
                    "display": "ServiceDeliveryLocationRoleType",
                    "definition": "A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered."
                },
                {
                    "code": "CLAIM",
                    "display": "claimant",
                    "definition": "A party that makes a claim for coverage under a policy."
                },
                {
                    "code": "GT",
                    "display": "Guarantor",
                    "definition": "An individual or organization that makes or gives a promise, assurance, pledge to pay or has paid the healthcare service provider."
                },
                {
                    "code": "PH",
                    "display": "Policy Holder",
                    "definition": "Policy holder for the insurance policy."
                },
                {
                    "code": "PROG",
                    "display": "program eligible",
                    "definition": "A party that meets the eligibility criteria for coverage under a program."
                },
                {
                    "code": "PT",
                    "display": "Patient",
                    "definition": "The recipient for the service(s) and/or product(s) when they are not the covered party."
                },
                {
                    "code": "_ClinicalOrganizationRoleType",
                    "display": "ClinicalOrganizationRoleType",
                    "definition": "A role of an organization that further classifies the clincial responsibility for the healthcare care delivered during an encounter. E.g. cardiology service, pediatric service, nursing services."
                },
                {
                    "code": "_DeviceOperatorType",
                    "display": "DeviceOperatorType",
                    "definition": "Indicates the type of person that is responsible for operating the device related to the incident reported in ICSR.\r\n\r\nExamples include: Physician, Nurse, Medical Technician, Respiratory Technician."
                },
                {
                    "code": "_NDCRelatedDrugEntityType",
                    "display": "NDCRelatedDrugEntityType",
                    "definition": "NDC Regulated Drug Entity Type"
                },
                {
                    "code": "_ProductProcessingOrganizationRoleType",
                    "display": "ProductProcessingOrganizationRoleType",
                    "definition": "**Description:** Indicates the role that an organization takes in the process by which a product goes from an original manufacturer to the eventual consumer.\r\n\r\n**Examples:**Manufacturer, re-processor\r\n\r\n**Note:**These two values are currently used in adverse event and product problem reporting."
                },
                {
                    "code": "_ProductSafetyReportPartyRoleType",
                    "display": "ProductSafetyReportPartyRoleType",
                    "definition": "**Description:**Captures the different roles that are recorded to characterize the qualifications or stations in life of persons or organizations who participate as senders or as receivers of adverse event or product problem reports.\r\n\r\n**Example:**Example values may include: physician, healthcare facility, attorney, family member, regulatory agency. Initial effort to find defined concepts for this value set will focus on the HIPAA provider taxonomy."
                },
                {
                    "code": "DEPEN",
                    "display": "dependent",
                    "definition": "A party covered under a policy based on association with a subscriber."
                },
                {
                    "code": "FM",
                    "display": "Family Member",
                    "definition": "A member of the covered party's family. This could be the spouse, a parent, a grand parent, a sibling, etc."
                },
                {
                    "code": "INDIV",
                    "display": "individual",
                    "definition": "A party covered under a policy as the policyholder."
                },
                {
                    "code": "NAMED",
                    "display": "named insured",
                    "definition": "A party to an insurance policy to whom the insurer agrees to indemnify for losses, provides benefits for, or renders services."
                },
                {
                    "code": "SUBSCR",
                    "display": "subscriber",
                    "definition": "A party covered under a policy based on association with a sponsor who is the policy holder, and whose association may provide for the eligibility of dependents for coverage"
                },
                {
                    "code": "BILL",
                    "display": "Billing Contact",
                    "definition": "A contact role used to identify a person within a Provider organization that can be contacted for billing purposes (e.g. about the content of the Invoice)."
                },
                {
                    "code": "ORG",
                    "display": "organizational contact",
                    "definition": "A contact for an organization for administrative purposes. Contact role specifies a person acting as a liason for the organization.\r\n\r\nExample: HR Department representative."
                },
                {
                    "code": "PAYOR",
                    "display": "Payor Contact",
                    "definition": "A contact role used to identify a person within a Payor organization to whom this communication is addressed."
                },
                {
                    "code": "_AgentRoleType",
                    "display": "AgentRoleType",
                    "definition": "Parties that may or should contribute or have contributed to an Act."
                },
                {
                    "code": "_CoverageSponsorRoleType",
                    "display": "CoverageSponsorRoleType",
                    "definition": "**Description:**Codes that indicate a specific type of sponsor. Used when the sponsor's role is only either as a fully insured sponsor or only as a self-insured sponsor. NOTE: Where a sponsor may be either, use the SponsorParticipationFunction.code (fully insured or self insured) to indicate the type of responsibility. (CO6-0057)"
                },
                {
                    "code": "_PayorRoleType",
                    "display": "PayorRoleType",
                    "definition": "**Description:**PayorRoleType for a particular type of policy or program benefit package or plan where more detail about the coverage administration role of the Payor is required. The functions performed by a Payor qualified by a PayorRoleType may be specified by the PayorParticpationFunction value set.\r\n\r\n**Examples:**A Payor that is a TPA may administer a managed care plan without underwriting the risk."
                },
                {
                    "code": "RESPRSN",
                    "display": "responsible party",
                    "definition": "The role played by a party who has legal responsibility for another party."
                },
                {
                    "code": "AMENDER",
                    "display": "amender",
                    "definition": "An entity which corrected, edited, or amended pre-existing information."
                },
                {
                    "code": "CLASSIFIER",
                    "display": "classifier",
                    "definition": "An individual authorized to assign an original classification to information, including compilations of unclassified information, based on a determination that the information requires protection against unauthorized disclosure. The individual marks the information with immutable, computable, and human readable security labels in accordance with applicable security labeling policies. The labeling policies provide instructions on whether and if so how the security labels may be later reclassified \\[i.e., upgraded, downgraded, used in derivative classification, or declassified\\] in a manner that preserves the overridden original classification binding and provenance."
                },
                {
                    "code": "CONSENTER",
                    "display": "consenter",
                    "definition": "An entity or an entity's delegatee who is the grantee in an agreement such as a consent for services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy."
                },
                {
                    "code": "CONSWIT",
                    "display": "consent witness",
                    "definition": "An entity which has witnessed and attests to observing another entity being counseled about an agreement such as a consent for services, advanced directive, or a privacy consent directive."
                },
                {
                    "code": "COPART",
                    "display": "co-participant",
                    "definition": "An entity which participates in the generation of and attest to veracity of content, but is not an author or coauthor. For example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report."
                },
                {
                    "code": "DECLASSIFIER",
                    "display": "declassifier",
                    "definition": "An individual which is authorized to declassify information based on a determination that the information no longer requires protection against unauthorized disclosure. The individual marks the information being declassified using computable and human readable security labels indicating that this is copy of previously classified information is unclassified in accordance with applicable security labeling policies. The labeling policies provide instructions on whether and if so how the security labels may be later reclassified \\[i.e., upgraded or used in derivative classification\\] in a manner that preserves the overridden original classification binding and provenance."
                },
                {
                    "code": "DELEGATEE",
                    "display": "delegatee",
                    "definition": "A party to whom some right or authority is granted by a delegator."
                },
                {
                    "code": "DELEGATOR",
                    "display": "delegator",
                    "definition": "A party that grants all or some portion its right or authority to another party."
                },
                {
                    "code": "DOWNGRDER",
                    "display": "downgrader",
                    "definition": "An individual authorized to lower the classification level of labeled content and provide rationale for doing so as directed by a classification guide."
                },
                {
                    "code": "DRIVCLASSIFIER",
                    "display": "derivative classifier",
                    "definition": "An individual who is only authorized to classify reproduced, extracted, or summarized classified information, or compile classified and unclassified information by applying classification markings derived from source material or as directed by a classification guide."
                },
                {
                    "code": "GRANTEE",
                    "display": "grantee",
                    "definition": "An entity which accepts certain rights or authority from a grantor."
                },
                {
                    "code": "GRANTOR",
                    "display": "grantor",
                    "definition": "An entity which agrees to confer certain rights or authority to a grantee."
                },
                {
                    "code": "INTPRTER",
                    "display": "interpreter",
                    "definition": "An entity which converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information."
                },
                {
                    "code": "REVIEWER",
                    "display": "reviewer",
                    "definition": "An entity authorized to filter information according to approved criteria."
                },
                {
                    "code": "UPGRDER",
                    "display": "upgrader",
                    "definition": "An individual authorized to raise the classification level of labeled content and provide rationale for doing so as directed by a classification guide."
                },
                {
                    "code": "VALIDATOR",
                    "display": "validator",
                    "definition": "An entity authorized to validate information for inclusion in a record."
                },
                {
                    "code": "ASSIST",
                    "display": "Assistive non-person living subject",
                    "definition": "**Description:**Dogs trained to assist the ill or physically challenged."
                },
                {
                    "code": "BIOTH",
                    "display": "Biotherapeutic non-person living subject",
                    "definition": "**Description:**Animals, including fish and insects, and microorganisms which may participate as assigned entities in biotherapies."
                },
                {
                    "code": "CCO",
                    "display": "Clinical Companion",
                    "definition": "**Description:**Companion animals, such as dogs, cats, and rabbits, which may be provided to patients to improve general mood, decrease depression and loneliness, and distract from stress-inducing concerns to improve quality of life."
                },
                {
                    "code": "SEE",
                    "display": "Seeing",
                    "definition": "**Description:**Dogs trained to assist persons who are seeing impaired or blind."
                },
                {
                    "code": "SNIFF",
                    "display": "Sniffing",
                    "definition": "**Description:**Dogs trained or having the ability to detect imminent seizures or cancers in humans, probably as a result of volatile chemical (odors) given off by the malignancy of the host."
                },
                {
                    "code": "_AssignedNonPersonLivingSubjectRoleType",
                    "display": "AssignedNonPersonLivingSubjectRoleType",
                    "definition": "**Description:**A role type that is used to further qualify a non-person subject playing a role where the role class attribute is set to RoleClass AssignedEntity"
                },
                {
                    "code": "_PractitionerCertifiedEntityType",
                    "display": "PractitionerCertifiedEntityType",
                    "definition": "Defines types of certifications for practitioners"
                },
                {
                    "code": "CAS",
                    "display": "asylum seeker",
                    "definition": "A person who has fled his or her home country to find a safe place elsewhere."
                },
                {
                    "code": "CN",
                    "display": "national",
                    "definition": "A person who is legally recognized as a member of a nation or country, with associated rights and obligations."
                },
                {
                    "code": "CNRP",
                    "display": "non-country member without residence permit",
                    "definition": "A foreigner who is present in a country (which is foreign to him/her) unlawfully or without the country's authorization (may be called an illegal alien)."
                },
                {
                    "code": "CPCA",
                    "display": "permit card applicant",
                    "definition": "A non-country member admitted to the territory of a nation or country as a non-resident for an explicit purpose."
                },
                {
                    "code": "CRP",
                    "display": "non-country member with residence permit",
                    "definition": "A foreigner who is a resident of the country but does not have citizenship."
                },
                {
                    "code": "CRIMEVIC",
                    "display": "crime victim",
                    "definition": "**Description:** A person playing the role of program eligible under a program based on allegations of being the victim of a crime.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is \"program eligible\" and the person's status as a crime victim meets jurisdictional or program criteria."
                },
                {
                    "code": "INJWKR",
                    "display": "injured worker",
                    "definition": "**Description:** A person playing the role of program eligible under a workers compensation program based on the filing of work-related injury claim.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is used when the CoveredPartyRole class code is either \"program eligible\", a \"named insured\", and \"individual insured\", or \"dependent\", and the person's status as differently abled or \"handicapped\" meets jurisdictional, policy, or program criteria."
                },
                {
                    "code": "_AdministrativeContactRoleType",
                    "display": "AdministrativeContactRoleType",
                    "definition": "A contact role used for business and/or administrative purposes."
                },
                {
                    "code": "ECON",
                    "display": "emergency contact",
                    "definition": "A contact designated for contact in emergent situations."
                },
                {
                    "code": "NOK",
                    "display": "next of kin",
                    "definition": "Played by an individual who is designated as the next of kin for another individual which scopes the role."
                },
                {
                    "code": "FAMDEP",
                    "display": "family dependent",
                    "definition": "The player of the role is dependent of the scoping entity."
                },
                {
                    "code": "HANDIC",
                    "display": "handicapped dependent",
                    "definition": "Covered party is a dependent of the policy holder with a physical or mental disability causing a disadvantage that makes independent achievement unusually difficult."
                },
                {
                    "code": "INJ",
                    "display": "injured plaintiff",
                    "definition": "Covered party is an injured party with a legal claim for compensation against a policy holder under an insurance policy."
                },
                {
                    "code": "SELF",
                    "display": "self",
                    "definition": "Covered party is the policy holder. Also known as the subscriber."
                },
                {
                    "code": "SPON",
                    "display": "sponsored dependent",
                    "definition": "Covered party is an individual that the policy holder has assumed responsibility for, such as foster child or legal ward."
                },
                {
                    "code": "STUD",
                    "display": "student",
                    "definition": "Covered party to an insurance policy has coverage through full-time or part-time attendance at a recognized educational institution as defined by a particular insurance policy."
                },
                {
                    "code": "ADOPT",
                    "display": "adopted child",
                    "definition": "A child taken into one's family through legal means and raised as one's own child."
                },
                {
                    "code": "GCHILD",
                    "display": "grandchild",
                    "definition": "A child of one's son or daughter."
                },
                {
                    "code": "GPARNT",
                    "display": "grandparent",
                    "definition": "parent of a parent of the subject."
                },
                {
                    "code": "NAT",
                    "display": "natural child",
                    "definition": "A child as determined by birth."
                },
                {
                    "code": "NIENE",
                    "display": "niece/nephew",
                    "definition": "A child of one's brother or sister or of the brother or sister of one's spouse."
                },
                {
                    "code": "PARNT",
                    "display": "parent",
                    "definition": "One that begets or brings forth offspring or a person who brings up and cares for for another (Webster's Collegiate Dictionary)"
                },
                {
                    "code": "SPSE",
                    "display": "spouse",
                    "definition": "A marriage partner; a husband or wife."
                },
                {
                    "code": "STEP",
                    "display": "step child",
                    "definition": "A child receiving parental care and nurture from a person who is related to them through marriage to their parent."
                },
                {
                    "code": "FULLINS",
                    "display": "Fully insured coverage sponsor",
                    "definition": "**Description:**An employer or organization that contracts with an underwriter to assumes the financial risk and administrative responsibility for coverage of health services for covered parties."
                },
                {
                    "code": "SELFINS",
                    "display": "Self insured coverage sponsor",
                    "definition": "**Description:**An employer or organization that assumes the financial risk and administrative responsibility for coverage of health services for covered parties."
                },
                {
                    "code": "_ClaimantCoveredPartyRoleType",
                    "display": "ClaimantCoveredPartyRoleType",
                    "definition": "**Description**A role recognized through the eligibility of a party play a claimant for benefits covered or provided under an insurance policy."
                },
                {
                    "code": "_DependentCoveredPartyRoleType",
                    "display": "DependentCoveredPartyRoleType",
                    "definition": "**Description:** A role recognized through the eligibility of a party to play a dependent for benefits covered or provided under a health insurance policy because of an association with the subscriber that is recognized by the policy underwriter."
                },
                {
                    "code": "_IndividualInsuredPartyRoleType",
                    "display": "IndividualInsuredPartyRoleType",
                    "definition": "A role recognized through the eligibility of a party to play an individual insured for benefits covered or provided under an insurance policy where the party is also the policy holder."
                },
                {
                    "code": "_ProgramEligiblePartyRoleType",
                    "display": "ProgramEligiblePartyRoleType",
                    "definition": "**Description:**A role recognized through the eligibility of a party to play a program eligible for benefits covered or provided under a program."
                },
                {
                    "code": "_SubscriberCoveredPartyRoleType",
                    "display": "SubscriberCoveredPartyRoleType",
                    "definition": "**Description:** A role recognized through the eligibility of a party to play a subscriber for benefits covered or provided under a health insurance policy."
                },
                {
                    "code": "DX",
                    "display": "Diagnostics or therapeutics unit",
                    "definition": "A practice setting where diagnostic procedures or therapeutic interventions are performed"
                },
                {
                    "code": "HOSP",
                    "display": "Hospital",
                    "definition": "An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured."
                },
                {
                    "code": "DADDR",
                    "display": "Delivery Address",
                    "definition": "Location address where medical supplies were transported to for use."
                },
                {
                    "code": "MOBL",
                    "display": "Mobile Unit",
                    "definition": "Location (mobile) where healthcare service was delivered."
                },
                {
                    "code": "PHARM",
                    "display": "Pharmacy",
                    "definition": "Location where healthcare service was delivered, identified as a pharmacy."
                },
                {
                    "code": "_DedicatedClinicalLocationRoleType",
                    "display": "DedicatedClinicalLocationRoleType",
                    "definition": "A role of a place that further classifies the clinical setting (e.g., cardiology clinic, primary care clinic, rehabilitation hospital, skilled nursing facility) in which care is delivered during an encounter."
                },
                {
                    "code": "_DedicatedNonClinicalLocationRoleType",
                    "display": "DedicatedNonClinicalLocationRoleType",
                    "definition": "A role of a place that further classifies a setting that is intended to house the provision of non-clinical services."
                },
                {
                    "code": "COCBEN",
                    "display": "continuity of coverage beneficiary",
                    "definition": "**Description:** A person playing the role of an individual insured with continuity of coverage under a policy which is being terminated based on loss of original status that was the basis for coverage. Criteria for qualifying for continuity of coverage may be set by law.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either \"program eligible\" or \"subscriber\" and the person's status as a continuity of coverage beneficiary meets jurisdictional or policy criteria."
                },
                {
                    "code": "DIFFABL",
                    "display": "differently abled",
                    "definition": "**Description:** A person playing the role of program eligible under a program based on meeting criteria for health or functional limitation set by law or by the program.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either \"program eligible\", \"named insured\", \"individual insured\", or \"dependent\", and the person's status as differently abled meets jurisdictional, policy, or program criteria."
                },
                {
                    "code": "WARD",
                    "display": "ward",
                    "definition": "**Description:** A person, who is a minor or is deemed incompetent, who plays the role of a program eligible where eligibility for coverage is based on meeting program eligibility criteria for status as a ward of a court or jurisdiction.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is a \"claimant\", \"program eligible\", a \"named insured\", an \"individual Insured\" or a \"dependent\", and the person's status as a ward meets program or policy criteria. In the case of a ward covered under a program providing financial or health benefits, a governmental agency may take temporary custody of a minor or incompetent for his/her protection and care, e.g., if the ward is suffering from neglect or abuse, or has been in trouble with the law."
                },
                {
                    "code": "_LocationIdentifiedEntityRoleCode",
                    "display": "LocationIdentifiedEntityRoleCode",
                    "definition": "**Description:**Describes types of identifiers other than the primary location registry identifier for a service delivery location. Identifiers may be assigned by a local service delivery organization, a formal body capable of accrediting the location for the capability to provide specific services or the identifier may be assigned at a jurisdictional level."
                },
                {
                    "code": "ACC",
                    "display": "accident site",
                    "definition": "Location of an accident where healthcare service was delivered, such as a roadside."
                },
                {
                    "code": "COMM",
                    "display": "Community Location",
                    "definition": "Community location where healthcare is delivered."
                },
                {
                    "code": "PTRES",
                    "display": "Patient's Residence",
                    "definition": "location where healthcare was delivered which is the residence of the Patient."
                },
                {
                    "code": "SCHOOL",
                    "display": "school",
                    "definition": "Location where healthcare service was delivered, identified as a school or educational facility."
                },
                {
                    "code": "UPC",
                    "display": "underage protection center",
                    "definition": "**Description:** A location that plays the role of delivering services which may include: social emergency services required for a young person as required under any jurisdictional youth laws, child placement, and family mediation in the defined geographical area the SDL is responsible for. It may provide expertise in a judiciary setting on child custody, adoption and biological history research."
                },
                {
                    "code": "WORK",
                    "display": "work site",
                    "definition": "Location where healthcare service was delivered, identified as a work place."
                },
                {
                    "code": "RETIREE",
                    "display": "retiree",
                    "definition": "**Description:** A person playing the role of an individual insured under a policy based on meeting criteria for the employment status of retired set by law or the policy.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either \"program eligible\" or \"subscriber\" and the person's status as a retiree meets jurisdictional or policy criteria."
                },
                {
                    "code": "BF",
                    "display": "Beef",
                    "definition": "Cattle used for meat production"
                },
                {
                    "code": "BL",
                    "display": "Broiler",
                    "definition": "Chickens raised for meat"
                },
                {
                    "code": "BR",
                    "display": "Breeder",
                    "definition": "Breeding/genetic stock"
                },
                {
                    "code": "CO",
                    "display": "Companion",
                    "definition": "Companion animals"
                },
                {
                    "code": "DA",
                    "display": "Dairy",
                    "definition": "Milk production"
                },
                {
                    "code": "DR",
                    "display": "Draft",
                    "definition": "Draft animals"
                },
                {
                    "code": "DU",
                    "display": "Dual",
                    "definition": "Dual purpose. Defined purposes based on species and breed"
                },
                {
                    "code": "FI",
                    "display": "Fiber",
                    "definition": "Animals raised for their fur, hair or skins"
                },
                {
                    "code": "LY",
                    "display": "Layer",
                    "definition": "Chickens raised for egg production"
                },
                {
                    "code": "MT",
                    "display": "Meat",
                    "definition": "Animals raised for meat production"
                },
                {
                    "code": "MU",
                    "display": "Multiplier",
                    "definition": "Poultry flocks used for chick/poult production"
                },
                {
                    "code": "PL",
                    "display": "Pleasure",
                    "definition": "Animals rasied for recreation"
                },
                {
                    "code": "RC",
                    "display": "Racing",
                    "definition": "Animals raised for racing perfomance"
                },
                {
                    "code": "SH",
                    "display": "Show",
                    "definition": "Animals raised for shows"
                },
                {
                    "code": "VL",
                    "display": "Veal",
                    "definition": "Cattle raised for veal meat production. Implicit is the husbandry method."
                },
                {
                    "code": "WL",
                    "display": "Wool",
                    "definition": "Sheep, goats and other mammals raised for their fiber"
                },
                {
                    "code": "WO",
                    "display": "Working",
                    "definition": "Animals used to perform work"
                },
                {
                    "code": "ACHFID",
                    "display": "accreditation location identifier",
                    "definition": "**Description:**Identifier assigned to a location by the organization responsible for accrediting the location."
                },
                {
                    "code": "JURID",
                    "display": "jurisdiction location identifier",
                    "definition": "**Description:**Identifier assigned to a location by a jurisdiction."
                },
                {
                    "code": "LOCHFID",
                    "display": "local location identifier",
                    "definition": "**Description:**Identifier assigned to a location by a local party (which could be the facility itself or organization overseeing a group of facilities)."
                },
                {
                    "code": "DC",
                    "display": "therapeutic class",
                    "definition": "**Description:**A categorization of medicinal products by their therapeutic properties and/or main therapeutic use."
                },
                {
                    "code": "GD",
                    "display": "generic drug",
                    "definition": "Relates a manufactured drug product to the non-proprietary (generic) representation of its ingredients independent of strength, and form.\r\n\r\nThe scoping entity identifies a unique combination of medicine ingredients; sometimes referred to as \"ingredient set\"."
                },
                {
                    "code": "MGDSF",
                    "display": "manufactured drug strength form",
                    "definition": "Relates a manufactured drug product to the non-proprietary (generic) representation of its ingredients with their strength in a specific dose form. The scoping entity identifies a unique combination of medicine ingredients with their strength in a single dose form."
                },
                {
                    "code": "TRB",
                    "display": "Tribal Member",
                    "definition": "A person who is a member of a tribe."
                },
                {
                    "code": "ENROLBKR",
                    "display": "Enrollment Broker",
                    "definition": "**Description:**A payor that is responsible for functions related to the enrollment of covered parties."
                },
                {
                    "code": "TPA",
                    "display": "Third party administrator",
                    "definition": "**Description:**Third party administrator (TPA) is a payor organization that processes health care claims without carrying insurance risk. Third party administrators are prominent players in the managed care industry and have the expertise and capability to administer all or a portion of the claims process. They are normally contracted by a health insurer or self-insuring companies to administer services, including claims administration, premium collection, enrollment and other administrative activities.\r\n\r\nSelf-insured employers often contract with third party administrator to handle their insurance functions. Insurance companies oftentimes outsource the claims, utilization review or membership functions to a TPA. Sometimes TPAs only manage provider networks, only claims or only utilization review.\r\n\r\nWhile some third-party administrators may operate as units of insurance companies, they are often independent. However, hospitals or provider organizations desiring to set up their own health plans will often outsource certain responsibilities to TPAs. TPAs may perform one or several payor functions, specified by the PayorParticipationFunction value set, such as provider management, enrollment, utilization management, and fee for service claims adjudication management."
                },
                {
                    "code": "UMO",
                    "display": "Utilization management organization",
                    "definition": "**Description:**A payor that is responsible for review and case management of health services covered under a policy or program."
                },
                {
                    "code": "FAMMEMB",
                    "display": "family member",
                    "definition": "A relationship between two people characterizing their \"familial\" relationship"
                },
                {
                    "code": "FRND",
                    "display": "unrelated friend",
                    "definition": "The player of the role is a person who is known, liked, and trusted by the scoping person."
                },
                {
                    "code": "NBOR",
                    "display": "neighbor",
                    "definition": "The player of the role lives near or next to the scoping person."
                },
                {
                    "code": "ONESELF",
                    "display": "self",
                    "definition": "The relationship that a person has with his or her self."
                },
                {
                    "code": "ROOM",
                    "display": "Roommate",
                    "definition": "One who shares living quarters with the subject."
                },
                {
                    "code": "_CoverageRoleType",
                    "display": "CoverageRoleType",
                    "definition": "Role recognized through the issuance of insurance coverage to an identified covered party who has this relationship with the policy holder such as the policy holder themselves (self), spouse, child, etc"
                },
                {
                    "code": "_CoveredPartyRoleType",
                    "display": "covered party role type",
                    "definition": "A role recognized through the eligibility of an identified living subject for benefits covered under an insurance policy or a program. Eligibility as a covered party may be conditioned on a relationship with (1) the policy holder such as the policy holder who is covered as an individual under a poliy or as a party sponsored for coverage by the policy holder.\r\n\r\n**Example:**An employee as a subscriber; or (2) on being scoped another covered party such as the subscriber, as in the case of a dependent.\r\n\r\n**Discussion:** The Abstract Value Set \"CoverageRoleType\", which was developed for use in the Canadian realm \"pre-coordinate\" coverage roles with other roles that a covered party must play in order to be eligible for coverage, e.g., \"handicapped dependent\". Other codes in the Abstract Value Set CoveredPartyRoleType domain can be \"post-coordinated\" with the EligiblePartyRoleType codes to denote comparable concepts. Decoupling the concepts is intended to support a wider range of concepts and semantic comparability of coded concepts."
                },
                {
                    "code": "INDIG",
                    "display": "member of an indigenous people",
                    "definition": "**Description:** A person playing the role of program eligible under a program based on aboriginal ancestry or as a member of an aboriginal community.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is \"program eligible\" and the person's status as a member of an indigenous people meets jurisdictional or program criteria."
                },
                {
                    "code": "MIL",
                    "display": "military",
                    "definition": "**Definition:** A person playing the role of program eligible under a program based on military status.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either \"program eligible\" or \"subscriber\" and the person's status as a member of the military meets jurisdictional or program criteria"
                },
                {
                    "code": "ERL",
                    "display": "enrollment",
                    "definition": "**Definition:**The specific role being played by a research subject participating in the active treatment or primary data collection portion of a research study."
                },
                {
                    "code": "SCN",
                    "display": "screening",
                    "definition": "**Definition:**The specific role being played by a research subject participating in the pre-enrollment evaluation portion of a research study."
                },
                {
                    "code": "_DedicatedServiceDeliveryLocationRoleType",
                    "display": "DedicatedServiceDeliveryLocationRoleType",
                    "definition": "A role of a place that further classifies a setting that is intended to house the provision of services."
                },
                {
                    "code": "C",
                    "display": "Calibrator",
                    "definition": "A specimen used for initial calibration settings of an instrument"
                },
                {
                    "code": "G",
                    "display": "Group",
                    "definition": "A set of patient samples in which the individuals of the group may or may not be identified."
                },
                {
                    "code": "L",
                    "display": "Pool",
                    "definition": "Aliquots of individual specimens combined to form a single specimen representing all of the included individuals."
                },
                {
                    "code": "P",
                    "display": "Patient",
                    "definition": "A specimen that has been collected from a patient."
                },
                {
                    "code": "Q",
                    "display": "Quality Control",
                    "definition": "A specimen specifically used to verify the sensitivity, specificity, accuracy or other perfomance parameter of a diagnostic test."
                },
                {
                    "code": "R",
                    "display": "Replicate",
                    "definition": "A portion of an original patent sample that is tested at the same time as the original sample"
                },
                {
                    "code": "ADOPTF",
                    "display": "adoptive father",
                    "definition": "The player of the role (father) is a male who has taken the scoper (child) into their family through legal means and raises them as his own child."
                },
                {
                    "code": "ADOPTM",
                    "display": "adoptive mother",
                    "definition": "The player of the role (father) is a female who has taken the scoper (child) into their family through legal means and raises them as her own child."
                },
                {
                    "code": "MAUNT",
                    "display": "maternal aunt",
                    "definition": "**Description:**The player of the role is a biological sister of the scoping person's biological mother."
                },
                {
                    "code": "PAUNT",
                    "display": "paternal aunt",
                    "definition": "**Description:**The player of the role is a biological sister of the scoping person's biological father."
                },
                {
                    "code": "ANTIBIOT",
                    "display": "Antibiotic",
                    "definition": "**Description:**Non-person living subject used as antibiotic.\r\n\r\n**Examples:**Bacteriophage, is a virus that infects bacteria."
                },
                {
                    "code": "DEBR",
                    "display": "Debridement",
                    "definition": "**Description:**Maggots raised for biodebridement.\r\n\r\n**Discussion:** Maggot Debridement Therapy is the medical use of live maggots for cleaning non-healing wounds.\r\n\r\n**Examples:**Removal of burnt skin."
                },
                {
                    "code": "HBRO",
                    "display": "half-brother",
                    "definition": "The player of the role is a male related to the scoping entity by sharing only one biological parent."
                },
                {
                    "code": "NBRO",
                    "display": "natural brother",
                    "definition": "The player of the role is a male having the same biological parents as the scoping entity."
                },
                {
                    "code": "STPBRO",
                    "display": "stepbrother",
                    "definition": "The player of the role is a son of the scoping person's stepparent."
                },
                {
                    "code": "CASM",
                    "display": "single minor asylum seeker",
                    "definition": "A person who is someone of below legal age who has fled his or her home country, *without his or her parents*, to find a safe place elsewhere at time of categorization."
                },
                {
                    "code": "CHLDADOPT",
                    "display": "adopted child",
                    "definition": "The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child."
                },
                {
                    "code": "CHLDFOST",
                    "display": "foster child",
                    "definition": "The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties."
                },
                {
                    "code": "DAUC",
                    "display": "daughter",
                    "definition": "**Description:** The player of the role is a female child (of any type) of scoping entity (parent)"
                },
                {
                    "code": "NCHILD",
                    "display": "natural child",
                    "definition": "The player of the role is an offspring of the scoping entity as determined by birth."
                },
                {
                    "code": "SONC",
                    "display": "son",
                    "definition": "**Description:** The player of the role is a male child (of any type) of scoping entity (parent)"
                },
                {
                    "code": "STPCHLD",
                    "display": "step child",
                    "definition": "The player of the role is a child of the scoping person's spouse by a previous union."
                },
                {
                    "code": "DAUADOPT",
                    "display": "adopted daughter",
                    "definition": "The player of the role is a female child taken into a family through legal means and raised by the scoping person (parent) as his or her own child."
                },
                {
                    "code": "SONADOPT",
                    "display": "adopted son",
                    "definition": "The player of the role is a male child taken into a family through legal means and raised by the scoping person (parent) as his or her own child."
                },
                {
                    "code": "DAUFOST",
                    "display": "foster daughter",
                    "definition": "The player of the role is a female child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties."
                },
                {
                    "code": "SONFOST",
                    "display": "foster son",
                    "definition": "The player of the role is a male child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties."
                },
                {
                    "code": "DAUINLAW",
                    "display": "daughter in-law",
                    "definition": "The player of the role is the wife of scoping person's son."
                },
                {
                    "code": "SONINLAW",
                    "display": "son in-law",
                    "definition": "The player of the role is the husband of scoping person's daughter."
                },
                {
                    "code": "CNRPM",
                    "display": "non-country member minor without residence permit",
                    "definition": "A person who is below legal age present in a country, *without his or her parents*, (which is foreign to him/her) unlawfully or without the country's authorization."
                },
                {
                    "code": "CSC",
                    "display": "community service center",
                    "definition": "**Description:** A location that plays the role of delivering services which may include providing front-line services to the population of a defined geographic area such as: healthcare services and social services, preventive or curative, rehabilitation or reintegration."
                },
                {
                    "code": "MCOUSN",
                    "display": "maternal cousin",
                    "definition": "**Description:**The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's mother's side, such as a grandparent, by two or more steps in a diverging line."
                },
                {
                    "code": "PCOUSN",
                    "display": "paternal cousin",
                    "definition": "**Description:**The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's father's side, such as a grandparent, by two or more steps in a diverging line."
                },
                {
                    "code": "CRPM",
                    "display": "non-country member minor with residence permit",
                    "definition": "A person who is a resident below legal age of the country *without his or her parents* and does not have citizenship."
                },
                {
                    "code": "DAU",
                    "display": "natural daughter",
                    "definition": "The player of the role is a female offspring of the scoping entity (parent)."
                },
                {
                    "code": "STPDAU",
                    "display": "stepdaughter",
                    "definition": "The player of the role is a daughter of the scoping person's spouse by a previous union."
                },
                {
                    "code": "CVDX",
                    "display": "Cardiovascular diagnostics or therapeutics unit",
                    "definition": "A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)"
                },
                {
                    "code": "GIDX",
                    "display": "Gastroenterology diagnostics or therapeutics lab",
                    "definition": "A practice setting where GI procedures (such as endoscopies) are performed"
                },
                {
                    "code": "RADDX",
                    "display": "Radiology diagnostics or therapeutics unit",
                    "definition": "A practice setting where radiology services (diagnostic or therapeutic) are provided (X12N 261QR0200N)"
                },
                {
                    "code": "AUNT",
                    "display": "aunt",
                    "definition": "The player of the role is a sister of the scoping person's mother or father."
                },
                {
                    "code": "COUSN",
                    "display": "cousin",
                    "definition": "The player of the role is a relative of the scoping person descended from a common ancestor, such as a grandparent, by two or more steps in a diverging line."
                },
                {
                    "code": "GGRPRN",
                    "display": "great grandparent",
                    "definition": "The player of the role is a parent of the scoping person's grandparent."
                },
                {
                    "code": "GRNDCHILD",
                    "display": "grandchild",
                    "definition": "The player of the role is a child of the scoping person's son or daughter."
                },
                {
                    "code": "GRPRN",
                    "display": "grandparent",
                    "definition": "The player of the role is a parent of the scoping person's mother or father."
                },
                {
                    "code": "INLAW",
                    "display": "inlaw",
                    "definition": "A relationship between an individual and a member of their spousal partner's immediate family."
                },
                {
                    "code": "NIENEPH",
                    "display": "niece/nephew",
                    "definition": "The player of the role is a child of scoping person's brother or sister or of the brother or sister of the scoping person's spouse."
                },
                {
                    "code": "UNCLE",
                    "display": "uncle",
                    "definition": "The player of the role is a brother of the scoping person's mother or father."
                },
                {
                    "code": "CHILD",
                    "display": "child",
                    "definition": "The player of the role is a child of the scoping entity."
                },
                {
                    "code": "EXT",
                    "display": "extended family member",
                    "definition": "**Description:** A family member not having an immediate genetic or legal relationship e.g. Aunt, cousin, great grandparent, grandchild, grandparent, niece, nephew or uncle."
                },
                {
                    "code": "PRN",
                    "display": "parent",
                    "definition": "The player of the role is one who begets, gives birth to, or nurtures and raises the scoping entity (child)."
                },
                {
                    "code": "SIB",
                    "display": "sibling",
                    "definition": "The player of the role shares one or both parents in common with the scoping entity."
                },
                {
                    "code": "SIGOTHR",
                    "display": "significant other",
                    "definition": "A person who is important to one's well being; especially a spouse or one in a similar relationship. (The player is the one who is important)"
                },
                {
                    "code": "FTHFOST",
                    "display": "foster father",
                    "definition": "The player of the role (parent) who is a male state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.\r\n\r\nThe state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child."
                },
                {
                    "code": "NFTH",
                    "display": "natural father",
                    "definition": "The player of the role is a male who begets the scoping entity (child)."
                },
                {
                    "code": "STPFTH",
                    "display": "stepfather",
                    "definition": "The player of the role is the husband of scoping person's mother and not the scoping person's natural father."
                },
                {
                    "code": "FTWINBRO",
                    "display": "fraternal twin brother",
                    "definition": "The scoper was carried in the same womb as the male player and shares common biological parents but is the product of a distinct egg/sperm pair."
                },
                {
                    "code": "FTWINSIS",
                    "display": "fraternal twin sister",
                    "definition": "The scoper was carried in the same womb as the female player and shares common biological parents but is the product of a distinct egg/sperm pair."
                },
                {
                    "code": "GDF",
                    "display": "generic drug form",
                    "definition": "Relates a manufactured drug product to the non-proprietary (generic) representation of its ingredients and dose form, independent of strength of the ingredients. The scoping entity identifies a unique combination of medicine ingredients in a specific dose form."
                },
                {
                    "code": "GDS",
                    "display": "generic drug strength",
                    "definition": "Relates a manufactured drug product to the non-proprietary (generic) representation of is ingredients with their strength. The scoping entity identifies a unique combination of medicine ingredients with their strength."
                },
                {
                    "code": "GDSF",
                    "display": "generic drug strength form",
                    "definition": "Relates a manufactured drug product to the non-proprietary (generic) representation of its ingredients with their strength in a specific dose form. The scoping entity identifies a unique combination of medicine ingredients with their strength in a single dose form."
                },
                {
                    "code": "MGGRFTH",
                    "display": "maternal great-grandfather",
                    "definition": "**Description:**The player of the role is the biological father of the scoping person's biological mother's parent."
                },
                {
                    "code": "PGGRFTH",
                    "display": "paternal great-grandfather",
                    "definition": "**Description:**The player of the role is the biological father of the scoping person's biological father's parent."
                },
                {
                    "code": "MGGRMTH",
                    "display": "maternal great-grandmother",
                    "definition": "**Description:**The player of the role is the biological mother of the scoping person's biological mother's parent."
                },
                {
                    "code": "PGGRMTH",
                    "display": "paternal great-grandmother",
                    "definition": "**Description:**The player of the role is the biological mother of the scoping person's biological father's parent."
                },
                {
                    "code": "GGRFTH",
                    "display": "great grandfather",
                    "definition": "The player of the role is the father of the scoping person's grandparent."
                },
                {
                    "code": "GGRMTH",
                    "display": "great grandmother",
                    "definition": "The player of the role is the mother of the scoping person's grandparent."
                },
                {
                    "code": "MGGRPRN",
                    "display": "maternal great-grandparent",
                    "definition": "**Description:**The player of the role is a biological parent of the scoping person's biological mother's parent."
                },
                {
                    "code": "PGGRPRN",
                    "display": "paternal great-grandparent",
                    "definition": "**Description:**The player of the role is a biological parent of the scoping person's biological father's parent."
                },
                {
                    "code": "ENDOS",
                    "display": "Endoscopy lab",
                    "definition": "(X12N 261QD0000N)"
                },
                {
                    "code": "MGRFTH",
                    "display": "maternal grandfather",
                    "definition": "**Description:**The player of the role is the biological father of the scoping person's biological mother."
                },
                {
                    "code": "PGRFTH",
                    "display": "paternal grandfather",
                    "definition": "**Description:**The player of the role is the biological father of the scoping person's biological father."
                },
                {
                    "code": "MGRMTH",
                    "display": "maternal grandmother",
                    "definition": "**Description:**The player of the role is the biological mother of the scoping person's biological mother."
                },
                {
                    "code": "PGRMTH",
                    "display": "paternal grandmother",
                    "definition": "**Description:**The player of the role is the biological mother of the scoping person's biological father."
                },
                {
                    "code": "GRNDDAU",
                    "display": "granddaughter",
                    "definition": "The player of the role is a daughter of the scoping person's son or daughter."
                },
                {
                    "code": "GRNDSON",
                    "display": "grandson",
                    "definition": "The player of the role is a son of the scoping person's son or daughter."
                },
                {
                    "code": "GRFTH",
                    "display": "grandfather",
                    "definition": "The player of the role is the father of the scoping person's mother or father."
                },
                {
                    "code": "GRMTH",
                    "display": "grandmother",
                    "definition": "The player of the role is the mother of the scoping person's mother or father."
                },
                {
                    "code": "MGRPRN",
                    "display": "maternal grandparent",
                    "definition": "**Description:**The player of the role is the biological parent of the scoping person's biological mother."
                },
                {
                    "code": "PGRPRN",
                    "display": "paternal grandparent",
                    "definition": "**Description:**The player of the role is the biological parent of the scoping person's biological father."
                },
                {
                    "code": "INLAB",
                    "display": "inpatient laboratory",
                    "definition": "**Description:** A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for a hospital visit longer than one day."
                },
                {
                    "code": "OUTLAB",
                    "display": "outpatient laboratory",
                    "definition": "**Description:** A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for same day visits."
                },
                {
                    "code": "CHR",
                    "display": "Chronic Care Facility",
                    "definition": "(1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes"
                },
                {
                    "code": "GACH",
                    "display": "Hospitals; General Acute Care Hospital",
                    "definition": "(X12N 282N00000N)"
                },
                {
                    "code": "MHSP",
                    "display": "Military Hospital",
                    "definition": "A health care facility operated by the Department of Defense or other military operation."
                },
                {
                    "code": "PSYCHF",
                    "display": "Psychatric Care Facility",
                    "definition": "Healthcare facility that cares for patients with psychiatric illness(s)."
                },
                {
                    "code": "RH",
                    "display": "Rehabilitation hospital",
                    "definition": "(X12N 283X00000N)"
                },
                {
                    "code": "HSIS",
                    "display": "half-sister",
                    "definition": "The player of the role is a female related to the scoping entity by sharing only one biological parent."
                },
                {
                    "code": "CHEST",
                    "display": "Chest unit",
                    "definition": "A specialty unit in hospital that focuses on chronic respirator patients and pulmonary failure"
                },
                {
                    "code": "ER",
                    "display": "Emergency room",
                    "definition": "The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma."
                },
                {
                    "code": "HLAB",
                    "display": "hospital laboratory",
                    "definition": "**Description:** A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis, treatment and prevention of disease. Hospital laboratories may be further divided into specialized units such as Anatomic Pathology, Microbiology, and Biochemistry."
                },
                {
                    "code": "HRAD",
                    "display": "radiology unit",
                    "definition": "**Description:** A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases. The radiology unit may be further divided into subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound."
                },
                {
                    "code": "HUSCS",
                    "display": "specimen collection site",
                    "definition": "**Description:** A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes, but does not perform any tests or analysis functions."
                },
                {
                    "code": "INPHARM",
                    "display": "inpatient pharmacy",
                    "definition": "**Description:** A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital."
                },
                {
                    "code": "MBL",
                    "display": "medical laboratory",
                    "definition": "**Description:** A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology."
                },
                {
                    "code": "OUTPHARM",
                    "display": "outpatient pharmacy",
                    "definition": "**Description:** A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions."
                },
                {
                    "code": "PHU",
                    "display": "Psychiatric hospital unit",
                    "definition": "(X12N 273R00000N)"
                },
                {
                    "code": "SLEEP",
                    "display": "Sleep disorders unit",
                    "definition": "(X12N 261QA1200N)"
                },
                {
                    "code": "CHLDINLAW",
                    "display": "child-in-law",
                    "definition": "The player of the role is the spouse of scoping person's child."
                },
                {
                    "code": "PRNINLAW",
                    "display": "parent in-law",
                    "definition": "The player of the role is the parent of scoping person's husband or wife."
                },
                {
                    "code": "SIBINLAW",
                    "display": "sibling in-law",
                    "definition": "The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse."
                },
                {
                    "code": "ITWINBRO",
                    "display": "identical twin brother",
                    "definition": "The male scoper is an offspring of the same egg-sperm pair as the male player."
                },
                {
                    "code": "ITWINSIS",
                    "display": "identical twin sister",
                    "definition": "The female scoper is an offspring of the same egg-sperm pair as the female player."
                },
                {
                    "code": "ACTMIL",
                    "display": "active duty military",
                    "definition": "**Description:** A person playing the role of program eligible under a program based on active military status.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either \"program eligible\" or \"subscriber\" and the persons status as active duty military meets jurisdictional or program criteria."
                },
                {
                    "code": "RETMIL",
                    "display": "retired military",
                    "definition": "**Description:** A person playing the role of program eligible under a program based on retired military status.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either \"program eligible\" or \"subscriber\" and the persons status as retired military meets jurisdictional or program criteria."
                },
                {
                    "code": "VET",
                    "display": "veteran",
                    "definition": "**Description:** A person playing the role of program eligible under a program based on status as a military veteran.\r\n\r\n**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either \"program eligible\" or \"subscriber\" and the persons status as a veteran meets jurisdictional or program criteria."
                },
                {
                    "code": "AMB",
                    "display": "Ambulance",
                    "definition": "Location (mobile) where healthcare service was delivered, identified specifically as an ambulance."
                },
                {
                    "code": "GESTM",
                    "display": "gestational mother",
                    "definition": "The player is a female whose womb carries the fetus of the scoper. Generally used when the gestational mother and natural mother are not the same."
                },
                {
                    "code": "MTHFOST",
                    "display": "foster mother",
                    "definition": "The player of the role (parent) who is a female state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.\r\n\r\nThe state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child."
                },
                {
                    "code": "NMTH",
                    "display": "natural mother",
                    "definition": "The player of the role is a female who conceives or gives birth to the scoping entity (child)."
                },
                {
                    "code": "STPMTH",
                    "display": "stepmother",
                    "definition": "The player of the role is the wife of scoping person's father and not the scoping person's natural mother."
                },
                {
                    "code": "TWINBRO",
                    "display": "twin brother",
                    "definition": "The scoper was carried in the same womb as the male player and shares common biological parents."
                },
                {
                    "code": "SNF",
                    "display": "Skilled nursing facility",
                    "definition": "(X12N 314000000N)"
                },
                {
                    "code": "SON",
                    "display": "natural son",
                    "definition": "The player of the role is a male offspring of the scoping entity (parent)."
                },
                {
                    "code": "NFTHF",
                    "display": "natural father of fetus",
                    "definition": "Indicates the biologic male parent of a fetus."
                },
                {
                    "code": "NEPHEW",
                    "display": "nephew",
                    "definition": "The player of the role is a son of the scoping person's brother or sister or of the brother or sister of the scoping person's spouse."
                },
                {
                    "code": "NIECE",
                    "display": "niece",
                    "definition": "The player of the role is a daughter of the scoping person's brother or sister or of the brother or sister of the scoping person's spouse."
                },
                {
                    "code": "NMTHF",
                    "display": "natural mother of fetus",
                    "definition": "The player is the biologic female parent of the scoping fetus."
                },
                {
                    "code": "NSIS",
                    "display": "natural sister",
                    "definition": "The player of the role is a female having the same biological parents as the scoping entity."
                },
                {
                    "code": "TWIN",
                    "display": "twin",
                    "definition": "The scoper and player were carried in the same womb and shared common biological parents."
                },
                {
                    "code": "TWINSIS",
                    "display": "twin sister",
                    "definition": "The scoper was carried in the same womb as the female player and shares common biological parents."
                },
                {
                    "code": "IEC",
                    "display": "Impairment evaluation center",
                    "definition": "Focuses on assessing disability"
                },
                {
                    "code": "OPTC",
                    "display": "optometry clinic",
                    "definition": "**Description:** A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed. Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required."
                },
                {
                    "code": "PAINCL",
                    "display": "Pain clinic",
                    "definition": "(X12N 261QP3300N)"
                },
                {
                    "code": "PC",
                    "display": "Primary care clinic",
                    "definition": "(X12N 261QP2300N)"
                },
                {
                    "code": "POD",
                    "display": "Podiatry clinic",
                    "definition": "(X12N 261QP1100N)"
                },
                {
                    "code": "PROFF",
                    "display": "Provider's Office",
                    "definition": "Location where healthcare service was delivered, identified as the healthcare provider's practice office."
                },
                {
                    "code": "DPOWATT",
                    "display": "durable power of attorney",
                    "definition": "A relationship between two people in which one person authorizes another, usually a family member or relative, to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned. Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency."
                },
                {
                    "code": "HPOWATT",
                    "display": "healthcare power of attorney",
                    "definition": "A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that continues (by its terms) to be effective even though the grantor has become mentally incompetent after signing the document."
                },
                {
                    "code": "SPOWATT",
                    "display": "special power of attorney",
                    "definition": "A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned."
                },
                {
                    "code": "ADOPTP",
                    "display": "adoptive parent",
                    "definition": "The player of the role (parent) has taken the scoper (child) into their family through legal means and raises them as his or her own child."
                },
                {
                    "code": "FTH",
                    "display": "father",
                    "definition": "The player of the role is a male who begets or raises or nurtures the scoping entity (child)."
                },
                {
                    "code": "MTH",
                    "display": "mother",
                    "definition": "The player of the role is a female who conceives, gives birth to, or raises and nurtures the scoping entity (child)."
                },
                {
                    "code": "PRNFOST",
                    "display": "foster parent",
                    "definition": "The player of the role (parent) who is a state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.\r\n\r\nThe state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child."
                },
                {
                    "code": "STPPRN",
                    "display": "step parent",
                    "definition": "The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent."
                },
                {
                    "code": "FTHINLAW",
                    "display": "father-in-law",
                    "definition": "The player of the role is the father of the scoping person's husband or wife."
                },
                {
                    "code": "MTHINLAW",
                    "display": "mother-in-law",
                    "definition": "The player of the role is the mother of the scoping person's husband or wife."
                },
                {
                    "code": "MTHINLOAW",
                    "display": "mother-in-law",
                    "definition": "The player of the role is the mother of the scoping person's husband or wife."
                },
                {
                    "code": "B",
                    "display": "Blind",
                    "definition": "Quality Control specimen submitted to the lab whose identity and composition is not known to the lab."
                },
                {
                    "code": "E",
                    "display": "Electronic QC",
                    "definition": "An electronically simulated QC specimen"
                },
                {
                    "code": "F",
                    "display": "Filler Proficiency",
                    "definition": "Specimen used for testing proficiency of an organization performing testing (how does this differ from O?)"
                },
                {
                    "code": "O",
                    "display": "Operator Proficiency",
                    "definition": "A specimen used for evaluation of operator proficiency (operator in what context?)"
                },
                {
                    "code": "V",
                    "display": "Verifying",
                    "definition": "A specimen used for periodic calibration checks of instruments"
                },
                {
                    "code": "RADO",
                    "display": "Radiation oncology unit",
                    "definition": "(X12N 261QX0203N)"
                },
                {
                    "code": "EXCEST",
                    "display": "executor of estate",
                    "definition": "The role played by a person acting as the estate executor for a deceased subscriber or policyholder who was the responsible party"
                },
                {
                    "code": "GUADLTM",
                    "display": "guardian ad lidem",
                    "definition": "The role played by a person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings."
                },
                {
                    "code": "GUARD",
                    "display": "guardian",
                    "definition": "The role played by a person or institution legally empowered with responsibility for the care of a ward."
                },
                {
                    "code": "POWATT",
                    "display": "power of attorney",
                    "definition": "A relationship between two people in which one person authorizes another to act for him in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts."
                },
                {
                    "code": "RHAT",
                    "display": "addiction treatment center",
                    "definition": "**Description:** A location that plays the role of delivering services which may include life training and/or social support to people with addictions."
                },
                {
                    "code": "RHII",
                    "display": "intellectual impairment center",
                    "definition": "**Description:** A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder."
                },
                {
                    "code": "RHMAD",
                    "display": "parents with adjustment difficulties center",
                    "definition": "**Description:** A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role."
                },
                {
                    "code": "RHPI",
                    "display": "physical impairment center",
                    "definition": "**Description:** A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments."
                },
                {
                    "code": "RHYAD",
                    "display": "youths with adjustment difficulties center",
                    "definition": "**Description:** A location that plays the role of delivering services which may include life training and/or social support services for the adaption, rehabilitation and social integration of youths with adjustment difficulties."
                },
                {
                    "code": "RHPIH",
                    "display": "physical impairment - hearing center",
                    "definition": "**Description:** A location that plays the role of delivering services for people with hearing impairments."
                },
                {
                    "code": "RHPIMS",
                    "display": "physical impairment - motor skills center",
                    "definition": "**Description:** A location that plays the role of delivering services for people with motor skill impairments."
                },
                {
                    "code": "RHPIVS",
                    "display": "physical impairment - visual skills center",
                    "definition": "**Description:** A location that plays the role of delivering services for people with visual skill impairments."
                },
                {
                    "code": "SURF",
                    "display": "Substance use rehabilitation facility",
                    "definition": "(X12N 324500000N)"
                },
                {
                    "code": "BRO",
                    "display": "brother",
                    "definition": "The player of the role is a male sharing one or both parents in common with the scoping entity."
                },
                {
                    "code": "HSIB",
                    "display": "half-sibling",
                    "definition": "The player of the role is related to the scoping entity by sharing only one biological parent."
                },
                {
                    "code": "NSIB",
                    "display": "natural sibling",
                    "definition": "The player of the role has both biological parents in common with the scoping entity."
                },
                {
                    "code": "SIS",
                    "display": "sister",
                    "definition": "The player of the role is a female sharing one or both parents in common with the scoping entity."
                },
                {
                    "code": "STPSIB",
                    "display": "step sibling",
                    "definition": "The player of the role is a child of the scoping person's stepparent."
                },
                {
                    "code": "BROINLAW",
                    "display": "brother-in-law",
                    "definition": "The player of the role is: (1) a brother of the scoping person's spouse, or (2) the husband of the scoping person's sister, or (3) the husband of a sister of the scoping person's spouse."
                },
                {
                    "code": "SISINLAW",
                    "display": "sister-in-law",
                    "definition": "The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse."
                },
                {
                    "code": "SISLINLAW",
                    "display": "sister-in-law",
                    "definition": "The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse."
                },
                {
                    "code": "DOMPART",
                    "display": "domestic partner",
                    "definition": "The player of the role cohabits with the scoping person but is not the scoping person's spouse."
                },
                {
                    "code": "FMRSPS",
                    "display": "former spouse",
                    "definition": "Player of the role was previously joined to the scoping person in marriage and this marriage is now dissolved and inactive.\r\n\r\n*Usage Note:* This is significant to indicate as some jurisdictions have different legal requirements for former spouse to access the patient's record, from a general friend."
                },
                {
                    "code": "SPS",
                    "display": "spouse",
                    "definition": "The player of the role is a marriage partner of the scoping person."
                },
                {
                    "code": "STPSIS",
                    "display": "stepsister",
                    "definition": "The player of the role is a daughter of the scoping person's stepparent."
                },
                {
                    "code": "STPSON",
                    "display": "stepson",
                    "definition": "The player of the role is a son of the scoping person's spouse by a previous union."
                },
                {
                    "code": "HUSB",
                    "display": "husband",
                    "definition": "The player of the role is a man joined to a woman (scoping person) in marriage."
                },
                {
                    "code": "WIFE",
                    "display": "wife",
                    "definition": "The player of the role is a woman joined to a man (scoping person) in marriage."
                },
                {
                    "code": "FSTUD",
                    "display": "full-time student",
                    "definition": "Covered party to an insurance policy has coverage through full-time attendance at a recognized educational institution as defined by a particular insurance policy."
                },
                {
                    "code": "PSTUD",
                    "display": "part-time student",
                    "definition": "Covered party to an insurance policy has coverage through part-time attendance at a recognized educational institution as defined by a particular insurance policy."
                },
                {
                    "code": "FTWIN",
                    "display": "fraternal twin",
                    "definition": "The scoper and player were carried in the same womb and share common biological parents but are the product of distinct egg/sperm pairs."
                },
                {
                    "code": "ITWIN",
                    "display": "identical twin",
                    "definition": "The scoper and player are offspring of the same egg-sperm pair."
                },
                {
                    "code": "MUNCLE",
                    "display": "maternal uncle",
                    "definition": "**Description:**The player of the role is a biological brother of the scoping person's biological mother."
                },
                {
                    "code": "PUNCLE",
                    "display": "paternal uncle",
                    "definition": "**Description:**The player of the role is a biological brother of the scoping person's biological father."
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

module.exports = RoleCode;
