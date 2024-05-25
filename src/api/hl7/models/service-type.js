const DB = require("../../../lib/sqlite");

class ServiceType extends DB {
    constructor() {
        super("ServiceType");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "1",
                    "display": "Adoption/Permanent Care Info/Support",
                    "definition": "Adoption & permanent care information/support"
                },
                {
                    "code": "2",
                    "display": "Aged Care Assessment",
                    "definition": "Aged care assessment"
                },
                {
                    "code": "3",
                    "display": "Aged Care Information/Referral",
                    "definition": "Aged Care information/referral"
                },
                {
                    "code": "4",
                    "display": "Aged Residential Care",
                    "definition": "Aged Residential Care"
                },
                {
                    "code": "5",
                    "display": "Case Management for Older Persons",
                    "definition": "Case management for older persons"
                },
                {
                    "code": "6",
                    "display": "Delivered Meals (Meals On Wheels)",
                    "definition": "Delivered meals (meals on wheels)"
                },
                {
                    "code": "7",
                    "display": "Friendly Visiting",
                    "definition": "Friendly visiting"
                },
                {
                    "code": "8",
                    "display": "Home Care/Housekeeping Assistance",
                    "definition": "Home care/housekeeping assistance"
                },
                {
                    "code": "9",
                    "display": "Home Maintenance and Repair",
                    "definition": "Home maintenance and repair"
                },
                {
                    "code": "10",
                    "display": "Personal Alarms/Alerts",
                    "definition": "Personal alarms/alerts"
                },
                {
                    "code": "11",
                    "display": "Personal Care for Older Persons",
                    "definition": "Personal care for older persons"
                },
                {
                    "code": "12",
                    "display": "Planned Activity Groups",
                    "definition": "Planned activity groups"
                },
                {
                    "code": "13",
                    "display": "Acupuncture",
                    "definition": "Acupuncture"
                },
                {
                    "code": "14",
                    "display": "Alexander Technique Therapy",
                    "definition": "Alexander technique therapy"
                },
                {
                    "code": "15",
                    "display": "Aromatherapy",
                    "definition": "Aromatherapy"
                },
                {
                    "code": "16",
                    "display": "Biorhythm Services",
                    "definition": "Biorhythm services"
                },
                {
                    "code": "17",
                    "display": "Bowen Therapy",
                    "definition": "Bowen therapy"
                },
                {
                    "code": "18",
                    "display": "Chinese Herbal Medicine",
                    "definition": "Chinese herbal medicine"
                },
                {
                    "code": "19",
                    "display": "Feldenkrais",
                    "definition": "Feldenkrais"
                },
                {
                    "code": "20",
                    "display": "Homoeopathy",
                    "definition": "Homoeopathy"
                },
                {
                    "code": "21",
                    "display": "Hydrotherapy",
                    "definition": "Hydrotherapy"
                },
                {
                    "code": "22",
                    "display": "Hypnotherapy",
                    "definition": "Hypnotherapy"
                },
                {
                    "code": "23",
                    "display": "Kinesiology",
                    "definition": "Kinesiology"
                },
                {
                    "code": "24",
                    "display": "Magnetic Therapy",
                    "definition": "Magnetic therapy"
                },
                {
                    "code": "25",
                    "display": "Massage Therapy",
                    "definition": "Massage therapy"
                },
                {
                    "code": "26",
                    "display": "Meditation",
                    "definition": "Meditation"
                },
                {
                    "code": "27",
                    "display": "Myotherapy",
                    "definition": "Myotherapy"
                },
                {
                    "code": "28",
                    "display": "Naturopathy",
                    "definition": "Naturopathy"
                },
                {
                    "code": "29",
                    "display": "Reflexology",
                    "definition": "Reflexology"
                },
                {
                    "code": "30",
                    "display": "Reiki",
                    "definition": "Reiki"
                },
                {
                    "code": "31",
                    "display": "Relaxation Therapy",
                    "definition": "Relaxation therapy"
                },
                {
                    "code": "32",
                    "display": "Shiatsu",
                    "definition": "Shiatsu"
                },
                {
                    "code": "33",
                    "display": "Western Herbal Medicine",
                    "definition": "Western herbal medicine"
                },
                {
                    "code": "34",
                    "display": "Family Day care",
                    "definition": "Family day care"
                },
                {
                    "code": "35",
                    "display": "Holiday Programs",
                    "definition": "Holiday programs"
                },
                {
                    "code": "36",
                    "display": "Kindergarten Inclusion Support",
                    "definition": "Kindergarten inclusion support for children with a disability"
                },
                {
                    "code": "37",
                    "display": "Kindergarten/Preschool",
                    "definition": "Kindergarten/preschool"
                },
                {
                    "code": "38",
                    "display": "Long Day Child Care",
                    "definition": "Long day child care"
                },
                {
                    "code": "39",
                    "display": "Occasional Child Care",
                    "definition": "Occasional child care"
                },
                {
                    "code": "40",
                    "display": "Outside School Hours Care",
                    "definition": "Outside school hours care"
                },
                {
                    "code": "41",
                    "display": "Children's Play Programs",
                    "definition": "Children's play programs"
                },
                {
                    "code": "42",
                    "display": "Parenting/Family Support/Education",
                    "definition": "Parenting & family management support/education"
                },
                {
                    "code": "43",
                    "display": "Playgroup",
                    "definition": "Playgroup"
                },
                {
                    "code": "44",
                    "display": "School Nursing",
                    "definition": "School nursing"
                },
                {
                    "code": "45",
                    "display": "Toy Library",
                    "definition": "Toy library"
                },
                {
                    "code": "46",
                    "display": "Child Protection/Child Abuse Report",
                    "definition": "Child protection/child abuse report"
                },
                {
                    "code": "47",
                    "display": "Foster Care",
                    "definition": "Foster care"
                },
                {
                    "code": "48",
                    "display": "Residential/Out-of-Home Care",
                    "definition": "Residential/ out of home care"
                },
                {
                    "code": "49",
                    "display": "Support - Young People Leaving Care",
                    "definition": "Support for young people leaving care"
                },
                {
                    "code": "50",
                    "display": "Audiology",
                    "definition": "Audiology"
                },
                {
                    "code": "51",
                    "display": "Blood Donation",
                    "definition": "Blood donation"
                },
                {
                    "code": "52",
                    "display": "Chiropractic",
                    "definition": "Chiropractic"
                },
                {
                    "code": "53",
                    "display": "Dietetics",
                    "definition": "Dietetics"
                },
                {
                    "code": "54",
                    "display": "Family Planning",
                    "definition": "Family planning"
                },
                {
                    "code": "55",
                    "display": "Health Advocacy/Liaison Service",
                    "definition": "Health advocacy/Liaison service"
                },
                {
                    "code": "56",
                    "display": "Health Information/Referral",
                    "definition": "Health information/referral"
                },
                {
                    "code": "57",
                    "display": "Immunization",
                    "definition": "Immunization"
                },
                {
                    "code": "58",
                    "display": "Maternal & Child Health",
                    "definition": "Maternal & child health"
                },
                {
                    "code": "59",
                    "display": "Nursing",
                    "definition": "Nursing"
                },
                {
                    "code": "60",
                    "display": "Nutrition",
                    "definition": "Nutrition"
                },
                {
                    "code": "61",
                    "display": "Occupational Therapy",
                    "definition": "Occupational therapy"
                },
                {
                    "code": "62",
                    "display": "Optometry",
                    "definition": "Optometry"
                },
                {
                    "code": "63",
                    "display": "Osteopathy",
                    "definition": "Osteopathy"
                },
                {
                    "code": "64",
                    "display": "Pharmacy",
                    "definition": "Pharmacy"
                },
                {
                    "code": "65",
                    "display": "Physiotherapy",
                    "definition": "Physiotherapy"
                },
                {
                    "code": "66",
                    "display": "Podiatry",
                    "definition": "Podiatry"
                },
                {
                    "code": "67",
                    "display": "Sexual Health",
                    "definition": "Sexual health"
                },
                {
                    "code": "68",
                    "display": "Speech Pathology/Therapy",
                    "definition": "Speech pathology/therapy"
                },
                {
                    "code": "69",
                    "display": "Bereavement Counselling",
                    "definition": "Bereavement counselling"
                },
                {
                    "code": "70",
                    "display": "Crisis Counselling",
                    "definition": "Crisis counselling"
                },
                {
                    "code": "71",
                    "display": "Family Counselling/Therapy",
                    "definition": "Family counselling and/or family therapy"
                },
                {
                    "code": "72",
                    "display": "Family Violence Counselling",
                    "definition": "Family violence counselling"
                },
                {
                    "code": "73",
                    "display": "Financial Counselling",
                    "definition": "Financial counselling"
                },
                {
                    "code": "74",
                    "display": "Generalist Counselling",
                    "definition": "Generalist counselling"
                },
                {
                    "code": "75",
                    "display": "Genetic Counselling",
                    "definition": "Genetic counselling"
                },
                {
                    "code": "76",
                    "display": "Health Counselling",
                    "definition": "Health counselling"
                },
                {
                    "code": "77",
                    "display": "Mediation",
                    "definition": "Mediation"
                },
                {
                    "code": "78",
                    "display": "Problem Gambling Counselling",
                    "definition": "Problem gambling counselling"
                },
                {
                    "code": "79",
                    "display": "Relationship Counselling",
                    "definition": "Relationship counselling"
                },
                {
                    "code": "80",
                    "display": "Sexual Assault Counselling",
                    "definition": "Sexual assault counselling"
                },
                {
                    "code": "81",
                    "display": "Trauma Counselling",
                    "definition": "Trauma counselling"
                },
                {
                    "code": "82",
                    "display": "Victims of Crime Counselling",
                    "definition": "Victims of crime counselling"
                },
                {
                    "code": "83",
                    "display": "Cemetery Operation",
                    "definition": "Cemetery operation"
                },
                {
                    "code": "84",
                    "display": "Cremation",
                    "definition": "Cremation"
                },
                {
                    "code": "85",
                    "display": "Death Service Information",
                    "definition": "Death service information"
                },
                {
                    "code": "86",
                    "display": "Funeral Services",
                    "definition": "Funeral services"
                },
                {
                    "code": "87",
                    "display": "Endodontic",
                    "definition": "Endodontic"
                },
                {
                    "code": "88",
                    "display": "General Dental",
                    "definition": "General dental"
                },
                {
                    "code": "89",
                    "display": "Oral Medicine",
                    "definition": "Oral medicine"
                },
                {
                    "code": "90",
                    "display": "Oral Surgery",
                    "definition": "Oral surgery"
                },
                {
                    "code": "91",
                    "display": "Orthodontic",
                    "definition": "Orthodontic"
                },
                {
                    "code": "92",
                    "display": "Paediatric Dentistry",
                    "definition": "Paediatric Dentistry"
                },
                {
                    "code": "93",
                    "display": "Periodontic",
                    "definition": "Periodontic"
                },
                {
                    "code": "94",
                    "display": "Prosthodontic",
                    "definition": "Prosthodontic"
                },
                {
                    "code": "95",
                    "display": "Acquired Brain Injury Info/Referral",
                    "definition": "Acquired brain injury information/referral"
                },
                {
                    "code": "96",
                    "display": "Disability Advocacy",
                    "definition": "Disability advocacy"
                },
                {
                    "code": "97",
                    "display": "Disability Aids & Equipment",
                    "definition": "Disability aids & equipment"
                },
                {
                    "code": "98",
                    "display": "Disability Case Management",
                    "definition": "Disability case management"
                },
                {
                    "code": "99",
                    "display": "Disability Day Programs/Activities",
                    "definition": "Disability day programs & activities"
                },
                {
                    "code": "100",
                    "display": "Disability Information/Referral",
                    "definition": "Disability information/referral"
                },
                {
                    "code": "101",
                    "display": "Disability Support Packages",
                    "definition": "Disability support packages"
                },
                {
                    "code": "102",
                    "display": "Disability Supported Accommodation",
                    "definition": "Disability supported accommodation"
                },
                {
                    "code": "103",
                    "display": "Early Childhood Intervention",
                    "definition": "Early childhood intervention"
                },
                {
                    "code": "104",
                    "display": "Hearing Aids & Equipment",
                    "definition": "Hearing aids & equipment"
                },
                {
                    "code": "105",
                    "display": "Drug and/or Alcohol Counselling",
                    "definition": "Drug and/or alcohol counselling"
                },
                {
                    "code": "106",
                    "display": "Drug/Alcohol Information/Referral",
                    "definition": "Drug and/or alcohol information/referral"
                },
                {
                    "code": "107",
                    "display": "Needle & Syringe Exchange",
                    "definition": "Needle & Syringe exchange"
                },
                {
                    "code": "108",
                    "display": "Non-resid. Alcohol/Drug Treatment",
                    "definition": "Non-residential alcohol and/or drug dependence treatment"
                },
                {
                    "code": "109",
                    "display": "Pharmacotherapy",
                    "definition": "Pharmacotherapy (eg. methadone) program"
                },
                {
                    "code": "110",
                    "display": "Quit Program",
                    "definition": "Quit program"
                },
                {
                    "code": "111",
                    "display": "Residential Alcohol/Drug Treatment",
                    "definition": "Residential alcohol and/or drug dependence treatment"
                },
                {
                    "code": "112",
                    "display": "Adult/Community Education",
                    "definition": "Adult/community education"
                },
                {
                    "code": "113",
                    "display": "Higher Education",
                    "definition": "Higher education"
                },
                {
                    "code": "114",
                    "display": "Primary Education",
                    "definition": "Primary education"
                },
                {
                    "code": "115",
                    "display": "Secondary Education",
                    "definition": "Secondary education"
                },
                {
                    "code": "116",
                    "display": "Training & Vocational Education",
                    "definition": "Training & vocational education"
                },
                {
                    "code": "117",
                    "display": "Emergency Medical",
                    "definition": "Emergency medical"
                },
                {
                    "code": "118",
                    "display": "Employment Placement and/or Support",
                    "definition": "Employment placement and/or support"
                },
                {
                    "code": "119",
                    "display": "Vocational Rehabilitation",
                    "definition": "Vocational Rehabilitation"
                },
                {
                    "code": "120",
                    "display": "Work Safety/Accident Prevention",
                    "definition": "Workplace safety and/or accident prevention"
                },
                {
                    "code": "121",
                    "display": "Financial Assistance",
                    "definition": "Financial assistance"
                },
                {
                    "code": "122",
                    "display": "Financial Information/Advice",
                    "definition": "Financial information/advice"
                },
                {
                    "code": "123",
                    "display": "Material Aid",
                    "definition": "Material aid"
                },
                {
                    "code": "124",
                    "display": "General Practice",
                    "definition": "General Practice/GP (doctor)"
                },
                {
                    "code": "125",
                    "display": "Accommodation Placement/Support",
                    "definition": "Accommodation placement and/or support"
                },
                {
                    "code": "126",
                    "display": "Crisis/Emergency Accommodation",
                    "definition": "Crisis/emergency accommodation"
                },
                {
                    "code": "127",
                    "display": "Homelessness Support",
                    "definition": "Homelessness support"
                },
                {
                    "code": "128",
                    "display": "Housing Information/Referral",
                    "definition": "Housing information/referral"
                },
                {
                    "code": "129",
                    "display": "Public Rental Housing",
                    "definition": "Public rental housing"
                },
                {
                    "code": "130",
                    "display": "Interpreting/Multilingual Service",
                    "definition": "Interpreting/Multilingual/Language service"
                },
                {
                    "code": "131",
                    "display": "Juvenile Justice",
                    "definition": "Juvenile Justice"
                },
                {
                    "code": "132",
                    "display": "Legal Advocacy",
                    "definition": "Legal advocacy"
                },
                {
                    "code": "133",
                    "display": "Legal Information/Advice/Referral",
                    "definition": "Legal information/advice/referral"
                },
                {
                    "code": "134",
                    "display": "Mental Health Advocacy",
                    "definition": "Mental health advocacy"
                },
                {
                    "code": "135",
                    "display": "Mental Health Assess/Triage/Crisis Response",
                    "definition": "Mental health assessment/triage/crisis response"
                },
                {
                    "code": "136",
                    "display": "Mental Health Case Management",
                    "definition": "Mental health case management/continuing care"
                },
                {
                    "code": "137",
                    "display": "Mental Health Information/Referral",
                    "definition": "Mental health information/referral"
                },
                {
                    "code": "138",
                    "display": "Mental Health Inpatient Services",
                    "definition": "Mental health inpatient services (hospital psychiatric unit) - requires referral"
                },
                {
                    "code": "139",
                    "display": "Mental Health Non-residential Rehab",
                    "definition": "Mental health non-residential rehabilitation"
                },
                {
                    "code": "140",
                    "display": "Mental Health Residential Rehab/CCU",
                    "definition": "Mental health residential rehabilitation/community care unit"
                },
                {
                    "code": "141",
                    "display": "Psychiatry (Requires Referral)",
                    "definition": "Psychiatry (requires referral)"
                },
                {
                    "code": "142",
                    "display": "Psychology",
                    "definition": "Psychology"
                },
                {
                    "code": "143",
                    "display": "Martial Arts",
                    "definition": "Martial arts"
                },
                {
                    "code": "144",
                    "display": "Personal Fitness Training",
                    "definition": "Personal fitness training"
                },
                {
                    "code": "145",
                    "display": "Physical Activity Group",
                    "definition": "Physical activity group"
                },
                {
                    "code": "146",
                    "display": "Physical Activity Programs",
                    "definition": "Physical activity programs"
                },
                {
                    "code": "147",
                    "display": "Physical Fitness Testing",
                    "definition": "Physical fitness testing"
                },
                {
                    "code": "148",
                    "display": "Pilates",
                    "definition": "Pilates"
                },
                {
                    "code": "149",
                    "display": "Self-Defence",
                    "definition": "Self defence"
                },
                {
                    "code": "150",
                    "display": "Sporting Club",
                    "definition": "Sporting club"
                },
                {
                    "code": "151",
                    "display": "Yoga",
                    "definition": "Yoga"
                },
                {
                    "code": "152",
                    "display": "Food Safety",
                    "definition": "Food safety"
                },
                {
                    "code": "153",
                    "display": "Health Regulatory /Inspection /Cert.",
                    "definition": "Health regulatory, inspection and/or certification"
                },
                {
                    "code": "154",
                    "display": "Work Health/Safety Inspection/Cert.",
                    "definition": "Workplace health and/or safety inspection and/or certification"
                },
                {
                    "code": "155",
                    "display": "Carer Support",
                    "definition": "Carer support"
                },
                {
                    "code": "156",
                    "display": "Respite Care",
                    "definition": "Respite care"
                },
                {
                    "code": "157",
                    "display": "Anatomical Pathology",
                    "definition": "Anatomical Pathology (including Cytopathology & Forensic Pathology)"
                },
                {
                    "code": "158",
                    "display": "Pathology - Clinical Chemistry",
                    "definition": "Pathology - Clinical Chemistry"
                },
                {
                    "code": "159",
                    "display": "Pathology - General",
                    "definition": "Pathology - General"
                },
                {
                    "code": "160",
                    "display": "Pathology - Genetics",
                    "definition": "Pathology - Genetics"
                },
                {
                    "code": "161",
                    "display": "Pathology - Haematology",
                    "definition": "Pathology - Haematology"
                },
                {
                    "code": "162",
                    "display": "Pathology - Immunology",
                    "definition": "Pathology - Immunology"
                },
                {
                    "code": "163",
                    "display": "Pathology - Microbiology",
                    "definition": "Pathology - Microbiology"
                },
                {
                    "code": "164",
                    "display": "Anaesthesiology - Pain Medicine",
                    "definition": "Anaesthesiology - Pain Medicine"
                },
                {
                    "code": "165",
                    "display": "Cardiology",
                    "definition": "Cardiology"
                },
                {
                    "code": "166",
                    "display": "Clinical Genetics",
                    "definition": "Clinical Genetics"
                },
                {
                    "code": "167",
                    "display": "Clinical Pharmacology",
                    "definition": "Clinical Pharmacology"
                },
                {
                    "code": "168",
                    "display": "Dermatology",
                    "definition": "Dermatology"
                },
                {
                    "code": "169",
                    "display": "Endocrinology",
                    "definition": "Endocrinology"
                },
                {
                    "code": "170",
                    "display": "Gastroenterology & Hepatology",
                    "definition": "Gastroenterology & Hepatology"
                },
                {
                    "code": "171",
                    "display": "Geriatric Medicine",
                    "definition": "Geriatric medicine"
                },
                {
                    "code": "172",
                    "display": "Immunology & Allergy",
                    "definition": "Immunology & Allergy"
                },
                {
                    "code": "173",
                    "display": "Infectious Diseases",
                    "definition": "Infectious diseases"
                },
                {
                    "code": "174",
                    "display": "Intensive Care Medicine",
                    "definition": "Intensive care medicine"
                },
                {
                    "code": "175",
                    "display": "Medical Oncology",
                    "definition": "Medical Oncology"
                },
                {
                    "code": "176",
                    "display": "Nephrology",
                    "definition": "Nephrology"
                },
                {
                    "code": "177",
                    "display": "Neurology",
                    "definition": "Neurology"
                },
                {
                    "code": "178",
                    "display": "Occupational Medicine",
                    "definition": "Occupational Medicine"
                },
                {
                    "code": "179",
                    "display": "Palliative Medicine",
                    "definition": "Palliative Medicine"
                },
                {
                    "code": "180",
                    "display": "Public Health Medicine",
                    "definition": "Public Health Medicine"
                },
                {
                    "code": "181",
                    "display": "Rehabilitation Medicine",
                    "definition": "Rehabilitation Medicine"
                },
                {
                    "code": "182",
                    "display": "Rheumatology",
                    "definition": "Rheumatology"
                },
                {
                    "code": "183",
                    "display": "Sleep Medicine",
                    "definition": "Sleep Medicine"
                },
                {
                    "code": "184",
                    "display": "Thoracic Medicine",
                    "definition": "Thoracic medicine"
                },
                {
                    "code": "185",
                    "display": "Gynaecological Oncology",
                    "definition": "Gynaecological Oncology"
                },
                {
                    "code": "186",
                    "display": "Obstetrics & Gynaecology",
                    "definition": "Obstetrics & Gynaecology"
                },
                {
                    "code": "187",
                    "display": "Reproductive Endocrinology/Infertility",
                    "definition": "Reproductive Endocrinology & Infertility"
                },
                {
                    "code": "188",
                    "display": "Urogynaecology",
                    "definition": "Urogynaecology"
                },
                {
                    "code": "189",
                    "display": "Neonatology & Perinatology",
                    "definition": "Neonatology & Perinatology"
                },
                {
                    "code": "190",
                    "display": "Paediatric Cardiology",
                    "definition": "Paediatric Cardiology"
                },
                {
                    "code": "191",
                    "display": "Paediatric Clinical Genetics",
                    "definition": "Paediatric Clinical Genetics"
                },
                {
                    "code": "192",
                    "display": "Paediatric Clinical Pharmacology",
                    "definition": "Paediatric Clinical Pharmacology"
                },
                {
                    "code": "193",
                    "display": "Paediatric Endocrinology",
                    "definition": "Paediatric Endocrinology"
                },
                {
                    "code": "194",
                    "display": "Paed. Gastroenterology/Hepatology",
                    "definition": "Paediatric Gastroenterology & Hepatology"
                },
                {
                    "code": "195",
                    "display": "Paediatric Haematology",
                    "definition": "Paediatric Haematology"
                },
                {
                    "code": "196",
                    "display": "Paediatric Immunology & Allergy",
                    "definition": "Paediatric Immunology & Allergy"
                },
                {
                    "code": "197",
                    "display": "Paediatric Infectious Diseases",
                    "definition": "Paediatric Infectious diseases"
                },
                {
                    "code": "198",
                    "display": "Paediatric Intensive Care Medicine",
                    "definition": "Paediatric intensive care medicine"
                },
                {
                    "code": "199",
                    "display": "Paediatric Medical Oncology",
                    "definition": "Paediatric Medical Oncology"
                },
                {
                    "code": "200",
                    "display": "Paediatric Medicine",
                    "definition": "Paediatric Medicine"
                },
                {
                    "code": "201",
                    "display": "Paediatric Nephrology",
                    "definition": "Paediatric Nephrology"
                },
                {
                    "code": "202",
                    "display": "Paediatric Neurology",
                    "definition": "Paediatric Neurology"
                },
                {
                    "code": "203",
                    "display": "Paediatric Nuclear Medicine",
                    "definition": "Paediatric Nuclear Medicine"
                },
                {
                    "code": "204",
                    "display": "Paediatric Rehabilitation Medicine",
                    "definition": "Paediatric Rehabilitation Medicine"
                },
                {
                    "code": "205",
                    "display": "Paediatric Rheumatology",
                    "definition": "Paediatric Rheumatology"
                },
                {
                    "code": "206",
                    "display": "Paediatric Sleep Medicine",
                    "definition": "Paediatric Sleep Medicine"
                },
                {
                    "code": "207",
                    "display": "Paediatric Surgery",
                    "definition": "Paediatric Surgery"
                },
                {
                    "code": "208",
                    "display": "Paediatric Thoracic Medicine",
                    "definition": "Paediatric Thoracic Medicine"
                },
                {
                    "code": "209",
                    "display": "Diag. Radiology /Xray /CT /Fluoroscopy",
                    "definition": "Diagnostic Radiology/Xray/CT/Fluoroscopy"
                },
                {
                    "code": "210",
                    "display": "Diagnostic Ultrasound",
                    "definition": "Diagnostic Ultrasound"
                },
                {
                    "code": "211",
                    "display": "Magnetic Resonance Imaging (MRI)",
                    "definition": "Magnetic Resonance Imaging (MRI)"
                },
                {
                    "code": "212",
                    "display": "Nuclear Medicine",
                    "definition": "Nuclear Medicine"
                },
                {
                    "code": "213",
                    "display": "Obstetric/Gynaecological Ultrasound",
                    "definition": "Obstetric & Gynaecological Ultrasound"
                },
                {
                    "code": "214",
                    "display": "Radiation Oncology",
                    "definition": "Radiation oncology"
                },
                {
                    "code": "215",
                    "display": "Cardiothoracic Surgery",
                    "definition": "Cardiothoracic surgery"
                },
                {
                    "code": "216",
                    "display": "Neurosurgery",
                    "definition": "Neurosurgery"
                },
                {
                    "code": "217",
                    "display": "Ophthalmology",
                    "definition": "Ophthalmology"
                },
                {
                    "code": "218",
                    "display": "Orthopaedic Surgery",
                    "definition": "Orthopaedic surgery"
                },
                {
                    "code": "219",
                    "display": "Otolaryngology/Head & Neck Surgery",
                    "definition": "Otolaryngology - Head & Neck Surgery"
                },
                {
                    "code": "220",
                    "display": "Plastic & Reconstructive Surgery",
                    "definition": "Plastic & Reconstructive Surgery"
                },
                {
                    "code": "221",
                    "display": "Surgery - General",
                    "definition": "Surgery - General"
                },
                {
                    "code": "222",
                    "display": "Urology",
                    "definition": "Urology"
                },
                {
                    "code": "223",
                    "display": "Vascular Surgery",
                    "definition": "Vascular surgery"
                },
                {
                    "code": "224",
                    "display": "Support Groups",
                    "definition": "Support groups"
                },
                {
                    "code": "225",
                    "display": "Air ambulance",
                    "definition": "Air ambulance"
                },
                {
                    "code": "226",
                    "display": "Ambulance",
                    "definition": "Ambulance"
                },
                {
                    "code": "227",
                    "display": "Blood Transport",
                    "definition": "Blood transport"
                },
                {
                    "code": "228",
                    "display": "Community Bus",
                    "definition": "Community bus"
                },
                {
                    "code": "229",
                    "display": "Flying Doctor Service",
                    "definition": "Flying doctor service"
                },
                {
                    "code": "230",
                    "display": "Patient Transport",
                    "definition": "Patient transport"
                },
                {
                    "code": "231",
                    "display": "A&E",
                    "definition": "A&E"
                },
                {
                    "code": "232",
                    "display": "A&EP",
                    "definition": "A&EP"
                },
                {
                    "code": "233",
                    "display": "Abuse",
                    "definition": "Abuse"
                },
                {
                    "code": "234",
                    "display": "ACAS",
                    "definition": "ACAS"
                },
                {
                    "code": "235",
                    "display": "Access",
                    "definition": "Access"
                },
                {
                    "code": "236",
                    "display": "Accident",
                    "definition": "Accident"
                },
                {
                    "code": "237",
                    "display": "Acute Inpatient Serv",
                    "definition": "Acute Inpatient Service's"
                },
                {
                    "code": "238",
                    "display": "Adult Day Programs",
                    "definition": "Adult Day Programs"
                },
                {
                    "code": "239",
                    "display": "Adult Mental Health Services",
                    "definition": "Adult Mental Health Services"
                },
                {
                    "code": "240",
                    "display": "Advice",
                    "definition": "Advice"
                },
                {
                    "code": "241",
                    "display": "Advocacy",
                    "definition": "Advocacy"
                },
                {
                    "code": "242",
                    "display": "Aged Persons Mental",
                    "definition": "Aged Persons Mental Health Residential Units"
                },
                {
                    "code": "243",
                    "display": "Aged Persons Mental",
                    "definition": "Aged Persons Mental Health Services"
                },
                {
                    "code": "244",
                    "display": "Aged Persons Mental",
                    "definition": "Aged Persons Mental Health Teams"
                },
                {
                    "code": "245",
                    "display": "Aids",
                    "definition": "Aids"
                },
                {
                    "code": "246",
                    "display": "Al-Anon",
                    "definition": "Al-Anon"
                },
                {
                    "code": "247",
                    "display": "Alcohol",
                    "definition": "Alcohol"
                },
                {
                    "code": "248",
                    "display": "Al-Teen",
                    "definition": "Al-Teen"
                },
                {
                    "code": "249",
                    "display": "Antenatal",
                    "definition": "Antenatal"
                },
                {
                    "code": "250",
                    "display": "Anxiety",
                    "definition": "Anxiety"
                },
                {
                    "code": "251",
                    "display": "Arthritis",
                    "definition": "Arthritis"
                },
                {
                    "code": "252",
                    "display": "Assessment",
                    "definition": "Assessment"
                },
                {
                    "code": "253",
                    "display": "Assistance",
                    "definition": "Assistance"
                },
                {
                    "code": "254",
                    "display": "Asthma",
                    "definition": "Asthma"
                },
                {
                    "code": "255",
                    "display": "ATSS",
                    "definition": "ATSS"
                },
                {
                    "code": "256",
                    "display": "Attendant Care",
                    "definition": "Attendant Care"
                },
                {
                    "code": "257",
                    "display": "Babies",
                    "definition": "Babies"
                },
                {
                    "code": "258",
                    "display": "Bathroom Modificatio",
                    "definition": "Bathroom Modification"
                },
                {
                    "code": "259",
                    "display": "Behavior",
                    "definition": "Behavior"
                },
                {
                    "code": "260",
                    "display": "Behavior Interventi",
                    "definition": "Behavior Intervention"
                },
                {
                    "code": "261",
                    "display": "Bereavement",
                    "definition": "Bereavement"
                },
                {
                    "code": "262",
                    "display": "Bipolar",
                    "definition": "Bipolar"
                },
                {
                    "code": "263",
                    "display": "Birth",
                    "definition": "Birth"
                },
                {
                    "code": "264",
                    "display": "Birth Control",
                    "definition": "Birth Control"
                },
                {
                    "code": "265",
                    "display": "Birthing Options",
                    "definition": "Birthing Options"
                },
                {
                    "code": "266",
                    "display": "BIST",
                    "definition": "BIST"
                },
                {
                    "code": "267",
                    "display": "Blood",
                    "definition": "Blood"
                },
                {
                    "code": "268",
                    "display": "Bone",
                    "definition": "Bone"
                },
                {
                    "code": "269",
                    "display": "Bowel",
                    "definition": "Bowel"
                },
                {
                    "code": "270",
                    "display": "Brain",
                    "definition": "Brain"
                },
                {
                    "code": "271",
                    "display": "Breast Feeding",
                    "definition": "Breast Feeding"
                },
                {
                    "code": "272",
                    "display": "Breast Screen",
                    "definition": "Breast Screen"
                },
                {
                    "code": "273",
                    "display": "Brokerage",
                    "definition": "Brokerage"
                },
                {
                    "code": "274",
                    "display": "Cancer",
                    "definition": "Cancer"
                },
                {
                    "code": "275",
                    "display": "Cancer Support",
                    "definition": "Cancer Support"
                },
                {
                    "code": "276",
                    "display": "Cardiovascular Disea",
                    "definition": "Cardiovascular Disease"
                },
                {
                    "code": "277",
                    "display": "Care Packages",
                    "definition": "Care Packages"
                },
                {
                    "code": "278",
                    "display": "Carer",
                    "definition": "Carer"
                },
                {
                    "code": "279",
                    "display": "Case Management",
                    "definition": "Case Management"
                },
                {
                    "code": "280",
                    "display": "Casualty",
                    "definition": "Casualty"
                },
                {
                    "code": "281",
                    "display": "Centrelink",
                    "definition": "Centrelink"
                },
                {
                    "code": "282",
                    "display": "Chemists",
                    "definition": "Chemists"
                },
                {
                    "code": "283",
                    "display": "Child And Adolescent",
                    "definition": "Child And Adolescent Mental Health Services"
                },
                {
                    "code": "284",
                    "display": "Child Care",
                    "definition": "Child Care"
                },
                {
                    "code": "285",
                    "display": "Child Services",
                    "definition": "Child Services"
                },
                {
                    "code": "286",
                    "display": "Children",
                    "definition": "Children"
                },
                {
                    "code": "287",
                    "display": "Children's Services",
                    "definition": "Children's Services"
                },
                {
                    "code": "288",
                    "display": "Cholesterol",
                    "definition": "Cholesterol"
                },
                {
                    "code": "289",
                    "display": "Clothing",
                    "definition": "Clothing"
                },
                {
                    "code": "290",
                    "display": "Community Based Acco",
                    "definition": "Community Based Accommodation"
                },
                {
                    "code": "291",
                    "display": "Community Care Unit",
                    "definition": "Community Care Unit"
                },
                {
                    "code": "292",
                    "display": "Community Child And",
                    "definition": "Community Child And Adolescent Mental Health Services"
                },
                {
                    "code": "293",
                    "display": "Community Health",
                    "definition": "Community Health"
                },
                {
                    "code": "294",
                    "display": "Community Residentia",
                    "definition": "Community Residential Unit"
                },
                {
                    "code": "295",
                    "display": "Community Transport",
                    "definition": "Community Transport"
                },
                {
                    "code": "296",
                    "display": "Companion Visiting",
                    "definition": "Companion Visiting"
                },
                {
                    "code": "297",
                    "display": "Companionship",
                    "definition": "Companionship"
                },
                {
                    "code": "298",
                    "display": "Consumer Advice",
                    "definition": "Consumer Advice"
                },
                {
                    "code": "299",
                    "display": "Consumer Issues",
                    "definition": "Consumer Issues"
                },
                {
                    "code": "300",
                    "display": "Continuing Care Serv",
                    "definition": "Continuing Care Services"
                },
                {
                    "code": "301",
                    "display": "Contraception Inform",
                    "definition": "Contraception Information"
                },
                {
                    "code": "302",
                    "display": "Coordinating Bodies",
                    "definition": "Coordinating Bodies"
                },
                {
                    "code": "303",
                    "display": "Correctional Service",
                    "definition": "Correctional Services"
                },
                {
                    "code": "304",
                    "display": "Council Environmenta",
                    "definition": "Council Environmental Health"
                },
                {
                    "code": "305",
                    "display": "Counselling",
                    "definition": "Counselling"
                },
                {
                    "code": "306",
                    "display": "Criminal",
                    "definition": "Criminal"
                },
                {
                    "code": "307",
                    "display": "Crises",
                    "definition": "Crises"
                },
                {
                    "code": "308",
                    "display": "Crisis Assessment An",
                    "definition": "Crisis Assessment And Treatment Services (Cats)"
                },
                {
                    "code": "309",
                    "display": "Crisis Assistance",
                    "definition": "Crisis Assistance"
                },
                {
                    "code": "310",
                    "display": "Crisis Refuge",
                    "definition": "Crisis Refuge"
                },
                {
                    "code": "311",
                    "display": "Day Program",
                    "definition": "Day Program"
                },
                {
                    "code": "312",
                    "display": "Deaf",
                    "definition": "Deaf"
                },
                {
                    "code": "313",
                    "display": "Dental Hygiene",
                    "definition": "Dental Hygiene"
                },
                {
                    "code": "314",
                    "display": "Dentistry",
                    "definition": "Dentistry"
                },
                {
                    "code": "315",
                    "display": "Dentures",
                    "definition": "Dentures"
                },
                {
                    "code": "316",
                    "display": "Depression",
                    "definition": "Depression"
                },
                {
                    "code": "317",
                    "display": "Detoxification",
                    "definition": "Detoxification"
                },
                {
                    "code": "318",
                    "display": "Diabetes",
                    "definition": "Diabetes"
                },
                {
                    "code": "319",
                    "display": "Diaphragm Fitting",
                    "definition": "Diaphragm Fitting"
                },
                {
                    "code": "320",
                    "display": "Dieticians",
                    "definition": "Dieticians"
                },
                {
                    "code": "321",
                    "display": "Disabled Parking",
                    "definition": "Disabled Parking"
                },
                {
                    "code": "322",
                    "display": "District Nursing",
                    "definition": "District Nursing"
                },
                {
                    "code": "323",
                    "display": "Divorce",
                    "definition": "Divorce"
                },
                {
                    "code": "324",
                    "display": "Doctors",
                    "definition": "Doctors"
                },
                {
                    "code": "325",
                    "display": "Drink-Drive",
                    "definition": "Drink-Drive"
                },
                {
                    "code": "326",
                    "display": "Dual Diagnosis Servi",
                    "definition": "Dual Diagnosis Services"
                },
                {
                    "code": "327",
                    "display": "Early Choice",
                    "definition": "Early Choice"
                },
                {
                    "code": "328",
                    "display": "Eating Disorder",
                    "definition": "Eating Disorder"
                },
                {
                    "code": "330",
                    "display": "Emergency Relief",
                    "definition": "Emergency Relief"
                },
                {
                    "code": "331",
                    "display": "Employment And Train",
                    "definition": "Employment And Training"
                },
                {
                    "code": "332",
                    "display": "Environment",
                    "definition": "Environment"
                },
                {
                    "code": "333",
                    "display": "Equipment",
                    "definition": "Equipment"
                },
                {
                    "code": "334",
                    "display": "Exercise",
                    "definition": "Exercise"
                },
                {
                    "code": "335",
                    "display": "Facility",
                    "definition": "Facility"
                },
                {
                    "code": "336",
                    "display": "Family Choice",
                    "definition": "Family Choice"
                },
                {
                    "code": "337",
                    "display": "Family Law",
                    "definition": "Family Law"
                },
                {
                    "code": "338",
                    "display": "Family Options",
                    "definition": "Family Options"
                },
                {
                    "code": "339",
                    "display": "Family Services",
                    "definition": "Family Services"
                },
                {
                    "code": "340",
                    "display": "FFYA",
                    "definition": "FFYA"
                },
                {
                    "code": "341",
                    "display": "Financial Aid",
                    "definition": "Financial Aid"
                },
                {
                    "code": "342",
                    "display": "Fitness",
                    "definition": "Fitness"
                },
                {
                    "code": "343",
                    "display": "Flexible Care Packag",
                    "definition": "Flexible Care Packages"
                },
                {
                    "code": "344",
                    "display": "Food",
                    "definition": "Food"
                },
                {
                    "code": "345",
                    "display": "Food Vouchers",
                    "definition": "Food Vouchers"
                },
                {
                    "code": "346",
                    "display": "Forensic Mental Heal",
                    "definition": "Forensic Mental Health Services"
                },
                {
                    "code": "347",
                    "display": "Futures",
                    "definition": "Futures"
                },
                {
                    "code": "348",
                    "display": "Futures For Young Ad",
                    "definition": "Futures For Young Adults"
                },
                {
                    "code": "349",
                    "display": "General Practitioner",
                    "definition": "General Practitioners"
                },
                {
                    "code": "350",
                    "display": "Grants",
                    "definition": "Grants"
                },
                {
                    "code": "351",
                    "display": "Grief",
                    "definition": "Grief"
                },
                {
                    "code": "352",
                    "display": "Grief Counselling",
                    "definition": "Grief Counselling"
                },
                {
                    "code": "353",
                    "display": "HACC",
                    "definition": "HACC"
                },
                {
                    "code": "354",
                    "display": "Heart Disease",
                    "definition": "Heart Disease"
                },
                {
                    "code": "355",
                    "display": "Help",
                    "definition": "Help"
                },
                {
                    "code": "356",
                    "display": "High Blood Pressure",
                    "definition": "High Blood Pressure"
                },
                {
                    "code": "357",
                    "display": "Home Help",
                    "definition": "Home Help"
                },
                {
                    "code": "358",
                    "display": "Home Nursing",
                    "definition": "Home Nursing"
                },
                {
                    "code": "359",
                    "display": "Homefirst",
                    "definition": "Homefirst"
                },
                {
                    "code": "360",
                    "display": "Hospice Care",
                    "definition": "Hospice Care"
                },
                {
                    "code": "361",
                    "display": "Hospital Services",
                    "definition": "Hospital Services"
                },
                {
                    "code": "362",
                    "display": "Hospital To Home",
                    "definition": "Hospital To Home"
                },
                {
                    "code": "364",
                    "display": "Hostel",
                    "definition": "Hostel"
                },
                {
                    "code": "365",
                    "display": "Hostel Accommodation",
                    "definition": "Hostel Accommodation"
                },
                {
                    "code": "366",
                    "display": "Household Items",
                    "definition": "Household Items"
                },
                {
                    "code": "367",
                    "display": "Hypertension",
                    "definition": "Hypertension"
                },
                {
                    "code": "368",
                    "display": "Illness",
                    "definition": "Illness"
                },
                {
                    "code": "369",
                    "display": "Independent Living",
                    "definition": "Independent Living"
                },
                {
                    "code": "370",
                    "display": "Information",
                    "definition": "Information"
                },
                {
                    "code": "371",
                    "display": "Injury",
                    "definition": "Injury"
                },
                {
                    "code": "372",
                    "display": "Intake",
                    "definition": "Intake"
                },
                {
                    "code": "373",
                    "display": "Intensive Mobile You",
                    "definition": "Intensive Mobile Youth Outreach Services (Imyos)"
                },
                {
                    "code": "374",
                    "display": "Intervention",
                    "definition": "Intervention"
                },
                {
                    "code": "375",
                    "display": "Job Searching",
                    "definition": "Job Searching"
                },
                {
                    "code": "376",
                    "display": "Justice",
                    "definition": "Justice"
                },
                {
                    "code": "377",
                    "display": "Leisure",
                    "definition": "Leisure"
                },
                {
                    "code": "378",
                    "display": "Loans",
                    "definition": "Loans"
                },
                {
                    "code": "379",
                    "display": "Low Income Earners",
                    "definition": "Low Income Earners"
                },
                {
                    "code": "380",
                    "display": "Lung",
                    "definition": "Lung"
                },
                {
                    "code": "381",
                    "display": "Making A Difference",
                    "definition": "Making A Difference"
                },
                {
                    "code": "382",
                    "display": "Medical Services",
                    "definition": "Medical Services"
                },
                {
                    "code": "383",
                    "display": "Medical Specialists",
                    "definition": "Medical Specialists"
                },
                {
                    "code": "384",
                    "display": "Medication Administr",
                    "definition": "Medication Administration"
                },
                {
                    "code": "385",
                    "display": "Menstrual Informatio",
                    "definition": "Menstrual Information"
                },
                {
                    "code": "386",
                    "display": "Methadone",
                    "definition": "Methadone"
                },
                {
                    "code": "387",
                    "display": "Mobile Support And T",
                    "definition": "Mobile Support And Treatment Services (MSTS)"
                },
                {
                    "code": "388",
                    "display": "Motor Neurone",
                    "definition": "Motor Neurone"
                },
                {
                    "code": "389",
                    "display": "Multiple Sclerosis",
                    "definition": "Multiple Sclerosis"
                },
                {
                    "code": "390",
                    "display": "Neighbourhood House",
                    "definition": "Neighbourhood House"
                },
                {
                    "code": "391",
                    "display": "Nursing Home",
                    "definition": "Nursing Home"
                },
                {
                    "code": "392",
                    "display": "Nursing Mothers",
                    "definition": "Nursing Mothers"
                },
                {
                    "code": "393",
                    "display": "Obesity",
                    "definition": "Obesity"
                },
                {
                    "code": "394",
                    "display": "Occupational Health",
                    "definition": "Occupational Health & Safety"
                },
                {
                    "code": "395",
                    "display": "Optometrist",
                    "definition": "Optometrist"
                },
                {
                    "code": "396",
                    "display": "Oral Hygiene",
                    "definition": "Oral Hygiene"
                },
                {
                    "code": "397",
                    "display": "Outpatients",
                    "definition": "Outpatients"
                },
                {
                    "code": "398",
                    "display": "Outreach Service",
                    "definition": "Outreach Service"
                },
                {
                    "code": "399",
                    "display": "PADP",
                    "definition": "PADP"
                },
                {
                    "code": "400",
                    "display": "Pain",
                    "definition": "Pain"
                },
                {
                    "code": "401",
                    "display": "Pap Smear",
                    "definition": "Pap Smear"
                },
                {
                    "code": "402",
                    "display": "Parenting",
                    "definition": "Parenting"
                },
                {
                    "code": "403",
                    "display": "Peak Organizations",
                    "definition": "Peak Organizations"
                },
                {
                    "code": "404",
                    "display": "Personal Care",
                    "definition": "Personal Care"
                },
                {
                    "code": "405",
                    "display": "Pharmacies",
                    "definition": "Pharmacies"
                },
                {
                    "code": "406",
                    "display": "Phobias",
                    "definition": "Phobias"
                },
                {
                    "code": "407",
                    "display": "Physical",
                    "definition": "Physical"
                },
                {
                    "code": "408",
                    "display": "Physical Activity",
                    "definition": "Physical Activity"
                },
                {
                    "code": "409",
                    "display": "Postnatal",
                    "definition": "Postnatal"
                },
                {
                    "code": "410",
                    "display": "Pregnancy",
                    "definition": "Pregnancy"
                },
                {
                    "code": "411",
                    "display": "Pregnancy Tests",
                    "definition": "Pregnancy Tests"
                },
                {
                    "code": "412",
                    "display": "Preschool",
                    "definition": "Preschool"
                },
                {
                    "code": "413",
                    "display": "Prescriptions",
                    "definition": "Prescriptions"
                },
                {
                    "code": "414",
                    "display": "Primary Mental Healt",
                    "definition": "Primary Mental Health And Early Intervention Teams"
                },
                {
                    "code": "415",
                    "display": "Property Maintenance",
                    "definition": "Property Maintenance"
                },
                {
                    "code": "416",
                    "display": "Prostate",
                    "definition": "Prostate"
                },
                {
                    "code": "417",
                    "display": "Psychiatric",
                    "definition": "Psychiatric"
                },
                {
                    "code": "418",
                    "display": "Psychiatric Disabili",
                    "definition": "Psychiatric Disability Support Services - Home-Based Outreach"
                },
                {
                    "code": "419",
                    "display": "Psychiatric Disabili",
                    "definition": "Psychiatric Disability Support Services - Planned Respite"
                },
                {
                    "code": "420",
                    "display": "Psychiatric Disabili",
                    "definition": "Psychiatric Disability Support Services - Residential Rehabilitation"
                },
                {
                    "code": "421",
                    "display": "Psychiatric Disabili",
                    "definition": "Psychiatric Disability Support Services Home-Based Outreach"
                },
                {
                    "code": "422",
                    "display": "Psychiatric Disabili",
                    "definition": "Psychiatric Disability Support Services Mutual Support And Self Help"
                },
                {
                    "code": "423",
                    "display": "Psychiatric Support",
                    "definition": "Psychiatric Support"
                },
                {
                    "code": "424",
                    "display": "Recreation",
                    "definition": "Recreation"
                },
                {
                    "code": "425",
                    "display": "Referral",
                    "definition": "Referral"
                },
                {
                    "code": "426",
                    "display": "Refuge",
                    "definition": "Refuge"
                },
                {
                    "code": "427",
                    "display": "Rent Assistance",
                    "definition": "Rent Assistance"
                },
                {
                    "code": "428",
                    "display": "Residential Faciliti",
                    "definition": "Residential Facilities"
                },
                {
                    "code": "429",
                    "display": "Residential Respite",
                    "definition": "Residential Respite"
                },
                {
                    "code": "430",
                    "display": "Respiratory",
                    "definition": "Respiratory"
                },
                {
                    "code": "431",
                    "display": "Response",
                    "definition": "Response"
                },
                {
                    "code": "432",
                    "display": "Rooming Houses",
                    "definition": "Rooming Houses"
                },
                {
                    "code": "433",
                    "display": "Safe Sex",
                    "definition": "Safe Sex"
                },
                {
                    "code": "434",
                    "display": "Secure Extended Care",
                    "definition": "Secure Extended Care Inpatient Services"
                },
                {
                    "code": "435",
                    "display": "Self Help",
                    "definition": "Self Help"
                },
                {
                    "code": "436",
                    "display": "Separation",
                    "definition": "Separation"
                },
                {
                    "code": "437",
                    "display": "Services",
                    "definition": "Services"
                },
                {
                    "code": "438",
                    "display": "Sex Education",
                    "definition": "Sex Education"
                },
                {
                    "code": "439",
                    "display": "Sexual Abuse",
                    "definition": "Sexual Abuse"
                },
                {
                    "code": "440",
                    "display": "Sexual Issues",
                    "definition": "Sexual Issues"
                },
                {
                    "code": "441",
                    "display": "Sexually Transmitted",
                    "definition": "Sexually Transmitted Diseases"
                },
                {
                    "code": "442",
                    "display": "SIDS",
                    "definition": "SIDS"
                },
                {
                    "code": "443",
                    "display": "Social Support",
                    "definition": "Social Support"
                },
                {
                    "code": "444",
                    "display": "Socialisation",
                    "definition": "Socialisation"
                },
                {
                    "code": "445",
                    "display": "Special Needs",
                    "definition": "Special Needs"
                },
                {
                    "code": "446",
                    "display": "Speech Therapist",
                    "definition": "Speech Therapist"
                },
                {
                    "code": "447",
                    "display": "Splinting",
                    "definition": "Splinting"
                },
                {
                    "code": "448",
                    "display": "Sport",
                    "definition": "Sport"
                },
                {
                    "code": "449",
                    "display": "Statewide And Specia",
                    "definition": "Statewide And Specialist Services"
                },
                {
                    "code": "450",
                    "display": "STD",
                    "definition": "STD"
                },
                {
                    "code": "451",
                    "display": "STI",
                    "definition": "STI"
                },
                {
                    "code": "452",
                    "display": "Stillbirth",
                    "definition": "Stillbirth"
                },
                {
                    "code": "453",
                    "display": "Stomal Care",
                    "definition": "Stomal Care"
                },
                {
                    "code": "454",
                    "display": "Stroke",
                    "definition": "Stroke"
                },
                {
                    "code": "455",
                    "display": "Substance Abuse",
                    "definition": "Substance Abuse"
                },
                {
                    "code": "456",
                    "display": "Support",
                    "definition": "Support"
                },
                {
                    "code": "457",
                    "display": "Syringes",
                    "definition": "Syringes"
                },
                {
                    "code": "458",
                    "display": "Teeth",
                    "definition": "Teeth"
                },
                {
                    "code": "459",
                    "display": "Tenancy Advice",
                    "definition": "Tenancy Advice"
                },
                {
                    "code": "460",
                    "display": "Terminal Illness",
                    "definition": "Terminal Illness"
                },
                {
                    "code": "461",
                    "display": "Therapy",
                    "definition": "Therapy"
                },
                {
                    "code": "462",
                    "display": "Transcription",
                    "definition": "Transcription"
                },
                {
                    "code": "463",
                    "display": "Translating Services",
                    "definition": "Translating Services"
                },
                {
                    "code": "464",
                    "display": "Translator",
                    "definition": "Translator"
                },
                {
                    "code": "465",
                    "display": "Transport",
                    "definition": "Transport"
                },
                {
                    "code": "466",
                    "display": "Vertebrae",
                    "definition": "Vertebrae"
                },
                {
                    "code": "467",
                    "display": "Violence",
                    "definition": "Violence"
                },
                {
                    "code": "468",
                    "display": "Vocational Guidance",
                    "definition": "Vocational Guidance"
                },
                {
                    "code": "469",
                    "display": "Weight",
                    "definition": "Weight"
                },
                {
                    "code": "470",
                    "display": "Welfare Assistance",
                    "definition": "Welfare Assistance"
                },
                {
                    "code": "471",
                    "display": "Welfare Counselling",
                    "definition": "Welfare Counselling"
                },
                {
                    "code": "472",
                    "display": "Wheelchairs",
                    "definition": "Wheelchairs"
                },
                {
                    "code": "473",
                    "display": "Wound Management",
                    "definition": "Wound Management"
                },
                {
                    "code": "474",
                    "display": "Young People At Risk",
                    "definition": "Young People At Risk"
                },
                {
                    "code": "475",
                    "display": "Further Desc. - Community Health Care",
                    "definition": "Further Description - Community Health Care"
                },
                {
                    "code": "476",
                    "display": "Library",
                    "definition": "Library"
                },
                {
                    "code": "477",
                    "display": "Community Hours",
                    "definition": "Community Hours"
                },
                {
                    "code": "478",
                    "display": "Further Desc. - Specialist Medical",
                    "definition": "Further Description - Specialist Medical"
                },
                {
                    "code": "479",
                    "display": "Hepatology",
                    "definition": "Hepatology"
                },
                {
                    "code": "480",
                    "display": "Gastroenterology",
                    "definition": "Gastroenterology"
                },
                {
                    "code": "481",
                    "display": "Gynaecology",
                    "definition": "Gynaecology"
                },
                {
                    "code": "482",
                    "display": "Obstetrics",
                    "definition": "Obstetrics"
                },
                {
                    "code": "483",
                    "display": "Further Desc. - Specialist Surgical",
                    "definition": "Further Description - Specialist Surgical"
                },
                {
                    "code": "484",
                    "display": "Placement Protection",
                    "definition": "Placement Protection"
                },
                {
                    "code": "485",
                    "display": "Family Violence",
                    "definition": "Family Violence"
                },
                {
                    "code": "486",
                    "display": "Integrated Family Services",
                    "definition": "Integrated Family Services"
                },
                {
                    "code": "488",
                    "display": "Diabetes Educator",
                    "definition": "Diabetes Educator"
                },
                {
                    "code": "489",
                    "display": "Kinship Care",
                    "definition": "Kinship Care"
                },
                {
                    "code": "490",
                    "display": "General Mental Health Services",
                    "definition": "General Mental Health Services"
                },
                {
                    "code": "491",
                    "display": "Exercise Physiology",
                    "definition": "Exercise Physiology"
                },
                {
                    "code": "492",
                    "display": "Medical Research",
                    "definition": "Medical Research"
                },
                {
                    "code": "493",
                    "display": "Youth",
                    "definition": "Youth"
                },
                {
                    "code": "494",
                    "display": "Youth Services",
                    "definition": "Youth Services"
                },
                {
                    "code": "495",
                    "display": "Youth Health",
                    "definition": "Youth Health"
                },
                {
                    "code": "496",
                    "display": "Child and Family Ser",
                    "definition": "Child and Family Services"
                },
                {
                    "code": "497",
                    "display": "Home Visits",
                    "definition": "Home Visits"
                },
                {
                    "code": "498",
                    "display": "Mobile Services",
                    "definition": "Mobile Services"
                },
                {
                    "code": "500",
                    "display": "Before and/or After",
                    "definition": "Before and/or After School Care"
                },
                {
                    "code": "501",
                    "display": "Cancer Services",
                    "definition": "Cancer Services"
                },
                {
                    "code": "502",
                    "display": "Integrated Cancer Se",
                    "definition": "Integrated Cancer Services"
                },
                {
                    "code": "503",
                    "display": "Multidisciplinary Se",
                    "definition": "Multidisciplinary Services"
                },
                {
                    "code": "504",
                    "display": "Multidisciplinary Ca",
                    "definition": "Multidisciplinary Cancer Services"
                },
                {
                    "code": "505",
                    "display": "Meetings",
                    "definition": "Meetings"
                },
                {
                    "code": "506",
                    "display": "Blood pressure monit",
                    "definition": "Blood pressure monitoring"
                },
                {
                    "code": "507",
                    "display": "Dose administration",
                    "definition": "Dose administration aid"
                },
                {
                    "code": "508",
                    "display": "Medical Equipment Hi",
                    "definition": "Medical Equipment Hire"
                },
                {
                    "code": "509",
                    "display": "Parenting/Family Support/Education",
                    "definition": "Parenting & family support/education"
                },
                {
                    "code": "510",
                    "display": "Deputising Service",
                    "definition": "Deputising Service"
                },
                {
                    "code": "513",
                    "display": "Cancer Support Groups",
                    "definition": "Cancer Support Groups"
                },
                {
                    "code": "514",
                    "display": "Community Cancer Services",
                    "definition": "Community Cancer Services"
                },
                {
                    "code": "530",
                    "display": "Disability Care Transport",
                    "definition": "Disability Care Transport"
                },
                {
                    "code": "531",
                    "display": "Aged Care Transport",
                    "definition": "Aged Care Transport"
                },
                {
                    "code": "532",
                    "display": "Diabetes Education s",
                    "definition": "Diabetes Education service"
                },
                {
                    "code": "533",
                    "display": "Cardiac Rehabilitati",
                    "definition": "Cardiac Rehabilitation Service"
                },
                {
                    "code": "534",
                    "display": "Young Adult Diabetes",
                    "definition": "Young Adult Diabetes services (YADS)"
                },
                {
                    "code": "535",
                    "display": "Pulmonary Rehabilita",
                    "definition": "Pulmonary Rehabilitation Service"
                },
                {
                    "code": "536",
                    "display": "Art therapy",
                    "definition": "Art therapy"
                },
                {
                    "code": "537",
                    "display": "Medication Reviews",
                    "definition": "Medication Reviews"
                },
                {
                    "code": "538",
                    "display": "Telephone Counselling",
                    "definition": "Telephone Counselling"
                },
                {
                    "code": "539",
                    "display": "Telephone Help Line",
                    "definition": "Telephone Help Line"
                },
                {
                    "code": "540",
                    "display": "Online Service",
                    "definition": "Online Service"
                },
                {
                    "code": "541",
                    "display": "Crisis - Mental Health",
                    "definition": "Crisis - Mental Health"
                },
                {
                    "code": "542",
                    "display": "Youth Crisis",
                    "definition": "Youth Crisis"
                },
                {
                    "code": "543",
                    "display": "Sexual Assault",
                    "definition": "Sexual Assault"
                },
                {
                    "code": "544",
                    "display": "GPAH Other",
                    "definition": "GPAH Other"
                },
                {
                    "code": "545",
                    "display": "Paediatric Dermatology",
                    "definition": "Paediatric Dermatology"
                },
                {
                    "code": "546",
                    "display": "Veterans Services",
                    "definition": "Veterans Services"
                },
                {
                    "code": "547",
                    "display": "Veterans",
                    "definition": "Veterans"
                },
                {
                    "code": "548",
                    "display": "Food Relief/Food/Meals",
                    "definition": "Food Relief/food/meals"
                },
                {
                    "code": "550",
                    "display": "Dementia Care",
                    "definition": "Dementia Care"
                },
                {
                    "code": "551",
                    "display": "Alzheimer",
                    "definition": "Alzheimer"
                },
                {
                    "code": "552",
                    "display": "Drug and/or Alcohol Support Groups",
                    "definition": "Drug and/or alcohol support groups"
                },
                {
                    "code": "553",
                    "display": "1-on-1 Support /Mentoring /Coaching",
                    "definition": "One on One Support/Mentoring/Coaching"
                },
                {
                    "code": "554",
                    "display": "Chronic Disease Management",
                    "definition": "Chronic Disease Management"
                },
                {
                    "code": "555",
                    "display": "Liaison Services",
                    "definition": "Liaison Services"
                },
                {
                    "code": "556",
                    "display": "Walk-in Centre /Non-Emergency",
                    "definition": "Walk in Centre / non emergency"
                },
                {
                    "code": "557",
                    "display": "Inpatients",
                    "definition": "Inpatients"
                },
                {
                    "code": "558",
                    "display": "Spiritual Counselling",
                    "definition": "Spiritual Counselling"
                },
                {
                    "code": "559",
                    "display": "Women's Health",
                    "definition": "Women's Health"
                },
                {
                    "code": "560",
                    "display": "Men's Health",
                    "definition": "Men's Health"
                },
                {
                    "code": "561",
                    "display": "Health Education/Awareness Program",
                    "definition": "Health education/Health awareness program"
                },
                {
                    "code": "562",
                    "display": "Test Message",
                    "definition": "Test Message"
                },
                {
                    "code": "563",
                    "display": "Remedial Massage",
                    "definition": "Remedial Massage"
                },
                {
                    "code": "564",
                    "display": "Adolescent Mental Health Services",
                    "definition": "Adolescent Mental Health Services"
                },
                {
                    "code": "565",
                    "display": "Youth Drop In/Assistance/Support",
                    "definition": "Youth drop in/assistance/support"
                },
                {
                    "code": "566",
                    "display": "Aboriginal Health Worker",
                    "definition": "Aboriginal Health Worker"
                },
                {
                    "code": "567",
                    "display": "Women's Health Clinic",
                    "definition": "Women's Health Clinic"
                },
                {
                    "code": "568",
                    "display": "Men's Health Clinic",
                    "definition": "Men's Health Clinic"
                },
                {
                    "code": "569",
                    "display": "Migrant Health Clinic",
                    "definition": "Migrant Health Clinic"
                },
                {
                    "code": "570",
                    "display": "Refugee Health Clinic",
                    "definition": "Refugee Health Clinic"
                },
                {
                    "code": "571",
                    "display": "Aboriginal Health Clinic",
                    "definition": "Aboriginal Health Clinic"
                },
                {
                    "code": "572",
                    "display": "Nurse Practitioner Lead Clinic/s",
                    "definition": "Nurse Practitioner lead Clinic/s"
                },
                {
                    "code": "573",
                    "display": "Nurse Lead Clinic/s",
                    "definition": "Nurse lead Clinic/s"
                },
                {
                    "code": "574",
                    "display": "Culturally Tailored Support Groups",
                    "definition": "Culturally tailored support groups"
                },
                {
                    "code": "575",
                    "display": "Culturally Tailored Health Promotion",
                    "definition": "Culturally tailored health promotion"
                },
                {
                    "code": "576",
                    "display": "Rehabilitation",
                    "definition": "Rehabilitation"
                },
                {
                    "code": "577",
                    "display": "Education Information/Referral",
                    "definition": "Education information/referral"
                },
                {
                    "code": "580",
                    "display": "Social Work",
                    "definition": "Social Work"
                },
                {
                    "code": "581",
                    "display": "Haematology",
                    "definition": "Haematology"
                },
                {
                    "code": "582",
                    "display": "Maternity Shared Car",
                    "definition": "Maternity Shared Care"
                },
                {
                    "code": "583",
                    "display": "Rehabilitation Servi",
                    "definition": "Rehabilitation Service"
                },
                {
                    "code": "584",
                    "display": "Cranio-sacral Therapy",
                    "definition": "Cranio-Sacral Therapy"
                },
                {
                    "code": "585",
                    "display": "Prosthetics & Orthotics",
                    "definition": "Prosthetics & Orthotics"
                },
                {
                    "code": "589",
                    "display": "Home Medicine Review",
                    "definition": "Home Medicine Review"
                },
                {
                    "code": "590",
                    "display": "GPAH - Medical",
                    "definition": "GPAH - Medical"
                },
                {
                    "code": "591",
                    "display": "Music Therapy",
                    "definition": "Music Therapy"
                },
                {
                    "code": "593",
                    "display": "Falls Prevention",
                    "definition": "Falls Prevention"
                },
                {
                    "code": "599",
                    "display": "Accommodation/Tenancy",
                    "definition": "Accommodation/Tenancy"
                },
                {
                    "code": "600",
                    "display": "Assess-Skill, Ability, Needs",
                    "definition": "Assess-Skill, Ability, Needs"
                },
                {
                    "code": "601",
                    "display": "Assist Access/Maintain Employ",
                    "definition": "Assist Access/Maintain Employ"
                },
                {
                    "code": "602",
                    "display": "Assist Prod-Pers Care/Safety",
                    "definition": "Assist Prod-Pers Care/Safety"
                },
                {
                    "code": "603",
                    "display": "Assist-Integrate School/Ed",
                    "definition": "Assist-Integrate School/Ed"
                },
                {
                    "code": "604",
                    "display": "Assist-Life Stage, Transition",
                    "definition": "Assist-Life Stage, Transition"
                },
                {
                    "code": "605",
                    "display": "Assist-Personal Activities",
                    "definition": "Assist-Personal Activities"
                },
                {
                    "code": "606",
                    "display": "Assist-Travel/Transport",
                    "definition": "Assist-Travel/Transport"
                },
                {
                    "code": "607",
                    "display": "Assistive Equip-General Tasks",
                    "definition": "Assistive Equip-General Tasks"
                },
                {
                    "code": "608",
                    "display": "Assistive Equip-Recreation",
                    "definition": "Assistive Equip-Recreation"
                },
                {
                    "code": "609",
                    "display": "Assistive Prod-Household Task",
                    "definition": "Assistive Prod-Household Task"
                },
                {
                    "code": "610",
                    "display": "Behavior Support",
                    "definition": "Behavior Support"
                },
                {
                    "code": "611",
                    "display": "Comms & Info Equipment",
                    "definition": "Comms & Info Equipment"
                },
                {
                    "code": "612",
                    "display": "Community Nursing Care",
                    "definition": "Community Nursing Care"
                },
                {
                    "code": "613",
                    "display": "Daily Tasks/Shared Living",
                    "definition": "Daily Tasks/Shared Living"
                },
                {
                    "code": "614",
                    "display": "Development-Life Skills",
                    "definition": "Development-Life Skills"
                },
                {
                    "code": "615",
                    "display": "Early Childhood Supports",
                    "definition": "Early Childhood Supports"
                },
                {
                    "code": "616",
                    "display": "Equipment Special Assess Setup",
                    "definition": "Equipment Special Assess Setup"
                },
                {
                    "code": "617",
                    "display": "Hearing Equipment",
                    "definition": "Hearing Equipment"
                },
                {
                    "code": "618",
                    "display": "Home Modification",
                    "definition": "Home Modification"
                },
                {
                    "code": "619",
                    "display": "Household Tasks",
                    "definition": "Household Tasks"
                },
                {
                    "code": "620",
                    "display": "Interpret/Translate",
                    "definition": "Interpret/Translate"
                },
                {
                    "code": "621",
                    "display": "Other Innovative Supports",
                    "definition": "Other Innovative Supports"
                },
                {
                    "code": "622",
                    "display": "Participate Community",
                    "definition": "Participate Community"
                },
                {
                    "code": "623",
                    "display": "Personal Mobility Equipment",
                    "definition": "Personal Mobility Equipment"
                },
                {
                    "code": "624",
                    "display": "Physical Wellbeing",
                    "definition": "Physical Wellbeing"
                },
                {
                    "code": "625",
                    "display": "Plan Management",
                    "definition": "Plan Management"
                },
                {
                    "code": "626",
                    "display": "Therapeutic Supports",
                    "definition": "Therapeutic Supports"
                },
                {
                    "code": "627",
                    "display": "Training-Travel Independence",
                    "definition": "Training-Travel Independence"
                },
                {
                    "code": "628",
                    "display": "Vehicle modifications",
                    "definition": "Vehicle modifications"
                },
                {
                    "code": "629",
                    "display": "Vision Equipment",
                    "definition": "Vision Equipment"
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

module.exports = ServiceType;
