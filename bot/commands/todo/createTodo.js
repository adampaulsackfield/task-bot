const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('add-todo')
    .setDescription('Add a new todo item')
    .addStringOption((option) =>
      option
        .setName('title')
        .setDescription('The title of the todo item')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('due-date')
        .setDescription('Enter a date in the format YYYY-MM-DD')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('tag')
        .setDescription('The tags associated with the todo item')
        .setRequired(true)
        .addChoices(
          { name: 'Personal', value: 'personal' },
          { name: 'Work', value: 'work' },
          { name: 'Health', value: 'health' },
          { name: 'Productivity', value: 'productivity' },
          { name: 'Shopping', value: 'shopping' },
          { name: 'Other', value: 'other' }
        )
    ),

  async execute(interaction) {
    // const title = interaction.options.getString('title');
    // const description = interaction.options.getString('description');
    // const tag = interaction.options.getString('tags');
    // const complete = false;
    // const dueDate = interaction.options.getString('due-date');
    // // const priority = interaction.options.getInteger('priority');

    // const due = new Date(dueDate);

    // console.log(due);

    await interaction.reply(
      `Todo item TITLE has been added successfully! Tag: TAG`
    );
  },
};

//   .addBooleanOption((option) =>
//     option
//       .setName('complete')
//       .setDescription('Whether the todo item is complete or not')
//   )
//  .addDateOption((option) =>
//       option
//         .setName('due-date')
//         .setDescription('The due date of the todo item')
//         .setRequired(true)
//         .addStringOption((option) =>
//           option
//             .setName('description')
//             .setDescription('Optional description of the todo item')
//         )
//     )
//   .addIntegerOption((option) =>
//     option
//       .setName('priority')
//       .setDescription('The priority of the todo item')
//       .setRequired(true)
//       .addChoices([
//         ['Low', 1],
//         ['Medium', 2],
//         ['High', 3],
//       ])
//   );
