Stresser.tests.put("item", function() {
	if (Player.getHeldItem() instanceof Item) {
		if (Player.lookingAt() instanceof Block) {
			out('Player.getHeldItem().canDestroy(Player.lookingAt())');
			out('Player.getHeldItem().canHarvest(Player.lookingAt())');
			out('Player.getHeldItem().canPlaceOn(Player.lookingAt())');
		}
		out('Player.getHeldItem().draw(0, 0)');
		out('Player.getHeldItem().draw(0, 0, 5)');
		out('Player.getHeldItem().equals(Player.getHeldItem())');
		out('Player.getHeldItem().getDamage()');
		out('Player.getHeldItem().getEnchantments()');
		out('Player.getHeldItem().getID()');
		out('Player.getHeldItem().getItem()');
		out('Player.getHeldItem().getItemNBT()');
		out('Player.getHeldItem().getItemStack()');
		out('Player.getHeldItem().getLore()');
		out('Player.getHeldItem().getMaxDamage()');
		out('Player.getHeldItem().getMetadata()');
		out('Player.getHeldItem().getName()');
		out('Player.getHeldItem().getRegistryName()');
		out('Player.getHeldItem().getStackSize()');
		out('Player.getHeldItem().getUnlocalizedName()');
		out('Player.getHeldItem().isDamagable()');
		out('Player.getHeldItem().isEnchantable()');
		out('Player.getHeldItem().isEnchanted()');
		out('Player.getHeldItem().setDamage(0)');
		out('Player.getHeldItem().setStackSize(0)');
		out('Player.getHeldItem().toString()');
	}
});