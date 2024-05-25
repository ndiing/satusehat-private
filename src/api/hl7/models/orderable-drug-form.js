const DB = require("../../../lib/sqlite");

class OrderableDrugForm extends DB {
    constructor() {
        super("OrderableDrugForm");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "_GasDrugForm",
                    "display": "GasDrugForm",
                    "definition": "Any elastic aeriform fluid in which the molecules are separated from one another and have free paths."
                },
                {
                    "code": "_Liquid",
                    "display": "Liquid",
                    "definition": "A state of substance that is an intermediate one entered into as matter goes from solid to gas; liquids are also intermediate in that they have neither the orderliness of a crystal nor the randomness of a gas. (Note: This term should not be used to describe solutions, only pure chemicals in their liquid state.)"
                },
                {
                    "code": "_LiquidLiquidEmulsion",
                    "display": "LiquidLiquidEmulsion",
                    "definition": "A two-phase system in which one liquid is dispersed throughout another liquid in the form of small droplets."
                },
                {
                    "code": "_LiquidSolidSuspension",
                    "display": "LiquidSolidSuspension",
                    "definition": "A liquid preparation which consists of solid particles dispersed throughout a liquid phase in which the particles are not soluble."
                },
                {
                    "code": "OIL",
                    "display": "Oil",
                    "definition": "An unctuous, combustible substance which is liquid, or easily liquefiable, on warming, and is soluble in ether but insoluble in water. Such substances, depending on their origin, are classified as animal, mineral, or vegetable oils."
                },
                {
                    "code": "SOL",
                    "display": "Solution",
                    "definition": "A liquid preparation that contains one or more chemical substances dissolved, i.e., molecularly dispersed, in a suitable solvent or mixture of mutually miscible solvents."
                },
                {
                    "code": "CRM",
                    "display": "Cream",
                    "definition": "A semisolid dosage form containing one or more drug substances dissolved or dispersed in a suitable base; more recently, the term has been restricted to products consisting of oil-in-water emulsions or aqueous microcrystalline dispersions of long chain fatty acids or alcohols that are water washable and more cosmetically and aesthetically acceptable."
                },
                {
                    "code": "LTN",
                    "display": "Lotion",
                    "definition": "The term \"lotion\" has been used to categorize many topical suspensions, solutions and emulsions intended for application to the skin."
                },
                {
                    "code": "OINT",
                    "display": "Ointment",
                    "definition": "A semisolid preparation intended for external application to the skin or mucous membranes."
                },
                {
                    "code": "GEL",
                    "display": "Gel",
                    "definition": "A semisolid system consisting of either suspensions made up of small inorganic particles or large organic molecules interpenetrated by a liquid."
                },
                {
                    "code": "PASTE",
                    "display": "Paste",
                    "definition": "A semisolid dosage form that contains one or more drug substances intended for topical application."
                },
                {
                    "code": "BEAD",
                    "display": "Beads",
                    "definition": "A solid dosage form in the shape of a small ball."
                },
                {
                    "code": "CEMENT",
                    "display": "Cement",
                    "definition": "A substance that serves to produce solid union between two surfaces."
                },
                {
                    "code": "CRYS",
                    "display": "Crystals",
                    "definition": "A naturally produced angular solid of definite form in which the ultimate units from which it is built up are systematically arranged; they are usually evenly spaced on a regular space lattice."
                },
                {
                    "code": "DISK",
                    "display": "Disk",
                    "definition": "A circular plate-like organ or structure."
                },
                {
                    "code": "GRAN",
                    "display": "Granules",
                    "definition": "A small particle or grain."
                },
                {
                    "code": "GUM",
                    "display": "ChewingGum",
                    "definition": "A sweetened and flavored insoluble plastic material of various shapes which when chewed, releases a drug substance into the oral cavity."
                },
                {
                    "code": "PATCH",
                    "display": "Patch",
                    "definition": "A drug delivery system that contains an adhesived backing and that permits its ingredients to diffuse from some portion of it (e.g., the backing itself, a reservoir, the adhesive, or some other component) into the body from the external site where it is applied."
                },
                {
                    "code": "PELLET",
                    "display": "Pellet",
                    "definition": "A small sterile solid mass consisting of a highly purified drug (with or without excipients) made by the formation of granules, or by compression and molding."
                },
                {
                    "code": "PILL",
                    "display": "Pill",
                    "definition": "A small, round solid dosage form containing a medicinal agent intended for oral administration."
                },
                {
                    "code": "POWD",
                    "display": "Powder",
                    "definition": "An intimate mixture of dry, finely divided drugs and/or chemicals that may be intended for internal or external use."
                },
                {
                    "code": "SUPP",
                    "display": "Suppository",
                    "definition": "A solid body of various weights and shapes, adapted for introduction into the rectal, vaginal, or urethral orifice of the human body; they usually melt, soften, or dissolve at body temperature."
                },
                {
                    "code": "SWAB",
                    "display": "Swab",
                    "definition": "A wad of absorbent material usually wound around one end of a small stick and used for applying medication or for removing material from an area."
                },
                {
                    "code": "WAFER",
                    "display": "Wafer",
                    "definition": "A thin slice of material containing a medicinal agent."
                },
                {
                    "code": "CHEWBAR",
                    "display": "Chewable Bar",
                    "definition": "A solid dosage form usually in the form of a rectangle that is meant to be chewed."
                },
                {
                    "code": "ERECCAP",
                    "display": "Extended Release Enteric Coated Capsule",
                    "definition": "*Rationale:* Duplicate of code ERENTCAP. Use code ERENTCAP instead."
                },
                {
                    "code": "DOUCHE",
                    "display": "Douche",
                    "definition": "A liquid preparation, intended for the irrigative cleansing of the vagina, that is prepared from powders, liquid solutions, or liquid concentrates and contains one or more chemical substances dissolved in a suitable solvent or mutually miscible solvents."
                },
                {
                    "code": "ENEMA",
                    "display": "Enema",
                    "definition": "A rectal preparation for therapeutic, diagnostic, or nutritive purposes."
                },
                {
                    "code": "SHMP",
                    "display": "Shampoo",
                    "definition": "A liquid soap or detergent used to clean the hair and scalp and is often used as a vehicle for dermatologic agents."
                },
                {
                    "code": "ELIXIR",
                    "display": "Elixir",
                    "definition": "A clear, pleasantly flavored, sweetened hydroalcoholic liquid containing dissolved medicinal agents; it is intended for oral use."
                },
                {
                    "code": "RINSE",
                    "display": "Mouthwash/Rinse",
                    "definition": "An aqueous solution which is most often used for its deodorant, refreshing, or antiseptic effect."
                },
                {
                    "code": "SYRUP",
                    "display": "Syrup",
                    "definition": "An oral solution containing high concentrations of sucrose or other sugars; the term has also been used to include any other liquid dosage form prepared in a sweet and viscid vehicle, including oral suspensions."
                },
                {
                    "code": "ERCAP",
                    "display": "Extended Release Capsule",
                    "definition": "A solid dosage form in which the drug is enclosed within either a hard or soft soluble container made from a suitable form of gelatin, and which releases a drug (or drugs) in such a manner to allow a reduction in dosing frequency as compared to that drug (or drugs) presented as a conventional dosage form."
                },
                {
                    "code": "CHEWTAB",
                    "display": "Chewable Tablet",
                    "definition": "A solid dosage form containing medicinal substances with or without suitable diluents that is intended to be chewed, producing a pleasant tasting residue in the oral cavity that is easily swallowed and does not leave a bitter or unpleasant after-taste."
                },
                {
                    "code": "DISINTAB",
                    "display": "Disintegrating Tablet",
                    "definition": "A solid dosage form containing medicinal substances which disintegrates rapidly, usually within a matter of seconds, when placed upon the tongue."
                },
                {
                    "code": "ERTAB",
                    "display": "Extended Release Tablet",
                    "definition": "A solid dosage form containing a drug which allows at least a reduction in dosing frequency as compared to that drug presented in conventional dosage form."
                },
                {
                    "code": "ORTROCHE",
                    "display": "Lozenge/Oral Troche",
                    "definition": "A solid preparation containing one or more medicaments, usually in a flavored, sweetened base which is intended to dissolve or disintegrate slowly in the mouth."
                },
                {
                    "code": "TPASTE",
                    "display": "Toothpaste",
                    "definition": "A paste formulation intended to clean and/or polish the teeth, and which may contain certain additional agents."
                },
                {
                    "code": "CAP",
                    "display": "Capsule",
                    "definition": "A solid dosage form in which the drug is enclosed within either a hard or soft soluble container or \"shell\" made from a suitable form of gelatin."
                },
                {
                    "code": "TAB",
                    "display": "Tablet",
                    "definition": "A solid dosage form containing medicinal substances with or without suitable diluents."
                },
                {
                    "code": "IRSOL",
                    "display": "Irrigation Solution",
                    "definition": "A sterile solution intended to bathe or flush open wounds or body cavities; they're used topically, never parenterally."
                },
                {
                    "code": "LIN",
                    "display": "Liniment",
                    "definition": "A solution or mixture of various substances in oil, alcoholic solutions of soap, or emulsions intended for external application."
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

module.exports = OrderableDrugForm;
