//FIXME: thinking about breaking out the word 'channel divinity', depends on required logic to invoke this class features
//TODO: review how starting equipment works, ie: why is it labeled (a)... or (b)...

//TODO: create a equipment.js

/*function _class_(prof_bon, char_mod, con_mod){
	this.prof_bonus = prof_bon;
	this.char_mod = char_mod; //make sure to adjust this.char_mod to be this.str_mod or this.wis_mod, etc for each class respective
	this.con_mod = con_mod;

	//class_desc
	this.short_description = char_classes.*class*.class_description.shortDesc;
	this.long_description = char_classes.*class*.class_description.longDesc;

	//health
	this.hit_dice = "1dX";
	this.first_level = X + this.con_mod;
	this.avg_increase_per_level = AVG;

	//primary abilities, descending priority
	this.rec_abilities = ["",""];
	this.rec_background = [""];
	this.rec_starting_spells = ["","",""];

	//proficiencies
	this.armor_prof = [""]; //fixme: items.itemType['light armor']
	this.weapon_prof = ["","",""]; //fixme: 'simple weapon' is item.itemType['simple melee weapon']
	this.tool_prof = []; //fixme: items.itemType['musical instrument'] for list of all musical instruments
	this.saving_throw_prof = ["",""];
	this.skill_prof = []; //fixme: prompt user to choose, any three

	//equipment
	this.starting_equipment = ["",""];
	this.weapon_choices = ["",""]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
	this.equip_pack_1 = { // fixme: split these into item name : quantity
		"name" : "",
		"items" : ["", "", ""];
	};
	this.equip_pack_2 = {
		"name"  : "",
		"items" : ["","",""]
	};

	//other equipment
	//put recommended items first, followed by all possible items?
	this.extra_equipment = ["",""];

	// list of spells
    this.class_spells = function () { //todo: implement this function
        // gets array of spells
        // iterate through the list of spells in spells.js, grabbing any spell where
        // [spell].spellClass.bard == true
        // this just compiles an array of spell objects, we will use other methods for user input/output
    }

    // spellcasting ability
    this.spell_save_dc = 8 + this.prof_bonus + this.cha_mod;  // spell save dc
    this.spell_attack_mod = this.prof_bonus + this.cha_mod;   // spell attack modifier
    this.spell_focus = this.musical_inst;                     // spell focus

    // class features
    // class skills
    // subclasses
}
*/

/* class prototype for classes.js
module.exports = {
	"class": {
		"class_description": {
			"shortDesc": "",
			"longDesc": ""
		},
		"class_hit_point": {
			"hit_dice": "", //TODO: leave as just the 1dX so we can do the calculations
			"1st_level": "",
			"higher_levels": ""
		},
		"class_primary_ability": { //'Quick Build' section from the PHB
			"ability_scores": "",
			"background": "",
			"starting_spells": "" //not applicable to Barbarians
		},
		"class_proficiencies": {
			"armor_prof": [
				"armor_prof_1",
				"armor_prof_2",
				"armor_prof_3"
			],
			"weapon_prof": [
				"wep_prof_1",
				"wep_prof_2",
				"wep_prof_3",
				"wep_prof_4",
				"wep_prof_5"],
			"tools": [""],
			"saving_throw_prof": [
				"ST_prof_1",
				"ST_prof_2"],
			"skills": [""]
		}, //end of class_proficiencies
		"equipment": {
			"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
			"starting_pack": "",
			"weapons_1": "",
			"weapons_2": "",
			"weapons_3": "",
			"equipment_pack_1": "",
			"equipment_pack_2": "",
			"options_1": "",
			"options_2": ""
		},
		"class_spells": {
			"slot_levels": { //TODO: format == {"spell_name": player_level}
				//REFERENCE: PHB 188
				1: ["array of available spell slots"],
				2: [], //ie: PALADIN: {"Bless": 2}
				3: [],
				4: [],
				5: [],
				6: [],
				7: [],
				8: [],
				9: []
			},
			"spells_known": { //TODO: format == {player_level: number}
				1: "",
				2: ""
			},
			"cantrips_known": { //TODO: format == {player_level: number}

			},
			"level_features":{}
		},
		"class_spellcasting_ability": {
			"spell_save_dc": "",
			"spell_attack_mod": "",
			"spell_focus": ""
		}, //end of class_spellcasting
		"class_features": {
			"main_class_feature": {
				"description": "",
				"benefits": "",
				"replenish": ""
			},
			"class_feature_1": "",
			"class_feature_2": "",
			"subclass": { //turns into subclasses, will be worked on in later build
				"subclass_paths": {
					"subclass_description": "",
					"subclass_type_1": {
						"subclass_1_description": "",
						"subclass_benefit_1": "",
						"subclass_benefit_2": "",
						"subclass_benefit_3": "",
						"subclass_benefit_4": ""
					},//end of subclass_1
					"subclass_type_2": {
						"subclass_2_description": "",
						"subclass_benefit_1": "",
						"subclass_benefit_2": "",
						"subclass_benefit_3": "",
						"subclass_benefit_4": ""
					}//end of subclass_2
				}//end of subclass_paths
			}//end of subclass
		}, //end of class_features
		"class_specific_condition": "",
		"ability_score_improvement": {},
		"class_specific_ability_1": "",
		"class_specific_ability_2": "",
		"class_specific_ability_3": "",
		"class_specific_ability_4": ""
	} //end of class prototype template
};
*/