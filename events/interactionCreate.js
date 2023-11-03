module.exports = {
    config: {
        name: 'interactionCreate',
        once: false,
    },
    execute: async (interaction, client) => {
      if (!interaction.isCommand()) return;
      const cmd = interaction.commandName;
      const slash = client.slashes.get(cmd)
      if (!slash) return
        
      try {
        await slash.run(interaction, client);
      } catch (error) {
        // Handle any errors
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
  
    }
  }
  