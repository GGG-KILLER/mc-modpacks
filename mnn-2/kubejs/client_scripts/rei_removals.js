const REMOVED_ITEMS = [
    'twilightforest:uncrafting_table', 'kibe:slime_sling', 'kibe:slime_boots', 'indrev:hammer', 'ae2things:portable_fluid_cell_256k', 'ae2things:portable_item_cell_256k', 'ae2things:cell_component_256k', 'ae2things:item_storage_cell_256k', 'ae2things:fluid_storage_cell_256k', 'ae2things:portable_item_cell_256k', 'blockus:oak_barrel', 'blockus:birch_barrel', 'blockus:jungle_barrel', 'blockus:jungle_barrel', 'blockus:dark_oak_barrel', 'blockus:dark_oak_barrel', 'blockus:warped_barrel', 'additionaladditions:fried_egg', 'vanilla-hammers:obsidian_hammer', 'biomemakeover:icon_item', 'extragenerators:gluttony_generator', 'extragenerators:brew_generator', 'extragenerators:redstone_generator', 'extragenerators:blast_generator', 'extragenerators:demise_generator', 'extragenerators:icy_generator', 'extragenerators:teleport_generator', 'extragenerators:heavenly_generator', 'extragenerators:infernal_generator', 'additionaladditions:gilded_netherite_helmet', 'additionaladditions:gilded_netherite_chestplate', 'additionaladditions:gilded_netherite_leggings', 'additionaladditions:gilded_netherite_boots', 'techreborn:chrome_ingot', 'techreborn:chrome_nugget', 'techreborn:chrome_dust', 'techreborn:chrome_plate', 'techreborn:chrome_storage_block', 'mtmechs:iron_gear_item', 'indrev:steel_helmet', 'indrev:steel_chestplate', 'indrev:steel_leggings', 'indrev:steel_boots', 'indrev:silver_helmet', 'indrev:silver_chestplate', 'indrev:silver_leggings', 'indrev:silver_boots', 'crookedcrooks:ir_bronze_crook', 'croptopia:rice_seed', 'croptopia:onion_seed', 'croptopia:onion', 'croptopia:rice', 'indrev:bronze_pickaxe', 'indrev:bronze_sword', 'indrev:bronze_axe', 'indrev:bronze_shovel', 'indrev:bronze_hoe', 'indrev:bronze_boots', 'indrev:bronze_leggings', 'indrev:bronze_chestplate', 'indrev:bronze_helmet', 'craftingcraft:portable_crafting', 'kibe:pocket_crafting_table', 'kibe:light_ring', 'basicaiots:tin_aiot', 'basicaiots:copper_aiot', 'basicaiots:silver_aiot', 'basicaiots:steel_aiot', 'basicaiots:lead_aiot', 'croptosis:fertilized_sand', 'croptosis:fertilized_farmland', 'croptosis:fertilized_dirt', 'croptosis:potash_ore', 'croptosis:apatite_ore', 'croptosis:deepslate_apatite_ore', 'croptosis:potash_block', 'croptosis:apatite_block', 'croptosis:feather_meal', 'croptosis:rotten_pile', 'croptosis:apatite', 'croptosis:potash', 'croptosis:potash_pieces', 'croptopia:garlic', 'bewitchment:salt_block', 'croptopia:tomato', 'croptopia:cabbage', 'croptopia:cabbage_seed', 'croptopia:tomato_seed', 'croptopia:knife', 'croptopia:cooked_bacon', 'croptopia:bacon', "bewitchment:salt_ore", "croptopia:salt_ore", "bewitchment:deepslate_salt_ore"
];

onEvent("rei.hide.items", event => {
    REMOVED_ITEMS.forEach(id => event.hide(id));
});